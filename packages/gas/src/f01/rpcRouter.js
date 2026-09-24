/**
 * Apps Script RPC Router & Controller for F01
 * Enforces Method & Field Whitelisting, RequestID Idempotency,
 * Optimistic Locking, Anti-Formula Injection, and Role-Based Access Control.
 */

const { validateEntity, generateStableId, sanitizeFormulaInjection } = require('../../../schema/src/validator');
const { F01_SCHEMA } = require('../../../schema/src/f01');
const { transitionTask } = require('../../../domain/src/f01/stateMachine');
const { calculateTaskKPIs } = require('../../../domain/src/f01/calculations');
const { TaskStatus } = require('../../../domain/src/f01/types');

// In-memory or Sheet store abstraction for RPC
class F01RpcService {
  constructor(storage) {
    this.storage = storage; // Contains tasks, events, auditLog, jobs, users, settings
    this.processedRequests = new Map(); // RequestID -> Response cache for Idempotency
  }

  /**
   * Main RPC Dispatcher
   */
  handleRequest(request, userContext = { email: 'admin@minhtemplates.com', role: 'OWNER' }) {
    if (!request || typeof request !== 'object') {
      return { success: false, errorCode: 'INVALID_REQUEST', message: 'Yêu cầu RPC không đúng định dạng.' };
    }

    const { method, payload, requestId, expectedRowVersion } = request;

    // 1. Method Whitelist
    const WHITELISTED_METHODS = [
      'f01.createTask',
      'f01.updateTask',
      'f01.transitionTask',
      'f01.listTasks',
      'f01.getKPIs',
      'f01.deleteTask'
    ];

    if (!WHITELISTED_METHODS.includes(method)) {
      return {
        success: false,
        errorCode: 'METHOD_NOT_ALLOWED',
        message: `Phương thức RPC '${method}' không nằm trong danh mục hỗ trợ.`
      };
    }

    // 2. RequestID Idempotency Check
    if (requestId && this.processedRequests.has(requestId)) {
      return {
        success: true,
        isIdempotentReplay: true,
        data: this.processedRequests.get(requestId)
      };
    }

    try {
      let result;
      switch (method) {
        case 'f01.createTask':
          result = this.createTask(payload, userContext, requestId);
          break;
        case 'f01.updateTask':
          result = this.updateTask(payload, expectedRowVersion, userContext, requestId);
          break;
        case 'f01.transitionTask':
          result = this.executeTransition(payload, expectedRowVersion, userContext, requestId);
          break;
        case 'f01.listTasks':
          result = this.listTasks(payload, userContext);
          break;
        case 'f01.getKPIs':
          result = this.getKPIs(payload, userContext);
          break;
        case 'f01.deleteTask':
          result = this.deleteTask(payload, userContext, requestId);
          break;
      }

      // Cache for idempotency
      if (requestId) {
        this.processedRequests.set(requestId, result);
      }

      return { success: true, data: result };
    } catch (err) {
      return {
        success: false,
        errorCode: err.code || 'INTERNAL_ERROR',
        message: err.message
      };
    }
  }

  createTask(payload, userContext, requestId) {
    // Whitelist & Schema validation
    const validation = validateEntity('Tasks', payload, F01_SCHEMA.tables.Tasks, false);
    if (!validation.valid) {
      const err = new Error(validation.errors.join('; '));
      err.code = 'VALIDATION_FAILED';
      throw err;
    }

    const taskData = validation.data;
    const now = new Date().toISOString();

    const newTask = {
      ...taskData,
      ID: taskData.ID || generateStableId('TSK'),
      OwnerEmail: taskData.OwnerEmail || userContext.email,
      Status: taskData.Status || TaskStatus.TODO,
      Progress: taskData.Progress || 0,
      Important: Boolean(taskData.Important),
      Urgent: Boolean(taskData.Urgent),
      CreatedAt: now,
      UpdatedAt: now,
      CreatedBy: userContext.email,
      RowVersion: 1,
      Archived: false
    };

    this.storage.tasks.push(newTask);

    // AuditLog
    this.storage.auditLog.push({
      ID: generateStableId('AUD'),
      ActorEmail: userContext.email,
      Entity: 'Tasks',
      EntityID: newTask.ID,
      Operation: 'INSERT',
      ChangedFields: JSON.stringify(newTask),
      Timestamp: now,
      RequestID: requestId || null
    });

    return newTask;
  }

  updateTask(payload, expectedRowVersion, userContext, requestId) {
    if (!payload.ID) {
      const err = new Error('Thiếu ID công việc cần cập nhật.');
      err.code = 'MISSING_ID';
      throw err;
    }

    const taskIndex = this.storage.tasks.findIndex(t => t.ID === payload.ID && !t.Archived);
    if (taskIndex === -1) {
      const err = new Error(`Không tìm thấy công việc với ID: ${payload.ID}`);
      err.code = 'NOT_FOUND';
      throw err;
    }

    const currentTask = this.storage.tasks[taskIndex];

    // Optimistic Locking Check
    if (expectedRowVersion !== undefined && currentTask.RowVersion !== expectedRowVersion) {
      const err = new Error(
        `Xung đột phiên bản dữ liệu (Optimistic Lock Conflict). Phiên bản hiện hành là ${currentTask.RowVersion}, nhưng phiên bản mong đợi là ${expectedRowVersion}. Dữ liệu đã bị cập nhật bởi người dùng khác.`
      );
      err.code = 'ERROR_CONCURRENCY_CONFLICT';
      throw err;
    }

    // Role check: Only OWNER or assigned OwnerEmail can update
    if (userContext.role !== 'OWNER' && currentTask.OwnerEmail !== userContext.email) {
      const err = new Error('Bạn không có quyền chỉnh sửa công việc của người khác.');
      err.code = 'PERMISSION_DENIED';
      throw err;
    }

    // Whitelist & Schema validation
    const validation = validateEntity('Tasks', payload, F01_SCHEMA.tables.Tasks, true);
    if (!validation.valid) {
      const err = new Error(validation.errors.join('; '));
      err.code = 'VALIDATION_FAILED';
      throw err;
    }

    const now = new Date().toISOString();
    const updated = {
      ...currentTask,
      ...validation.data,
      UpdatedAt: now,
      RowVersion: currentTask.RowVersion + 1
    };

    this.storage.tasks[taskIndex] = updated;

    // AuditLog
    this.storage.auditLog.push({
      ID: generateStableId('AUD'),
      ActorEmail: userContext.email,
      Entity: 'Tasks',
      EntityID: updated.ID,
      Operation: 'UPDATE',
      ChangedFields: JSON.stringify(payload),
      Timestamp: now,
      RequestID: requestId || null
    });

    return updated;
  }

  executeTransition(payload, expectedRowVersion, userContext, requestId) {
    const { taskId, action, notes } = payload;
    const taskIndex = this.storage.tasks.findIndex(t => t.ID === taskId && !t.Archived);
    if (taskIndex === -1) {
      const err = new Error(`Không tìm thấy công việc với ID: ${taskId}`);
      err.code = 'NOT_FOUND';
      throw err;
    }

    const currentTask = this.storage.tasks[taskIndex];

    if (expectedRowVersion !== undefined && currentTask.RowVersion !== expectedRowVersion) {
      const err = new Error('Xung đột phiên bản dữ liệu khi chuyển trạng thái.');
      err.code = 'ERROR_CONCURRENCY_CONFLICT';
      throw err;
    }

    const { task: updatedTask, event } = transitionTask(
      currentTask,
      action,
      userContext.email,
      notes,
      new Date().toISOString()
    );

    this.storage.tasks[taskIndex] = updatedTask;
    this.storage.taskEvents.push(event);

    this.storage.auditLog.push({
      ID: generateStableId('AUD'),
      ActorEmail: userContext.email,
      Entity: 'Tasks',
      EntityID: updatedTask.ID,
      Operation: 'TRANSITION',
      ChangedFields: JSON.stringify({ action, newStatus: updatedTask.Status }),
      Timestamp: new Date().toISOString(),
      RequestID: requestId || null
    });

    return { task: updatedTask, event };
  }

  listTasks(payload = {}, userContext) {
    let tasks = [...this.storage.tasks].filter(t => !t.Archived);

    // Apply Security Filter: OWNER sees all, regular user sees only owned tasks
    if (userContext.role !== 'OWNER') {
      tasks = tasks.filter(t => t.OwnerEmail === userContext.email);
    }

    if (payload.status) {
      tasks = tasks.filter(t => t.Status === payload.status);
    }
    if (payload.priority) {
      tasks = tasks.filter(t => t.Priority === payload.priority);
    }

    return tasks;
  }

  getKPIs(payload = {}, userContext) {
    const tasks = this.listTasks({}, userContext);
    const today = payload.today ? new Date(payload.today) : new Date();
    return calculateTaskKPIs(tasks, today);
  }

  deleteTask(payload, userContext, requestId) {
    const taskIndex = this.storage.tasks.findIndex(t => t.ID === payload.ID);
    if (taskIndex === -1) {
      const err = new Error('Không tìm thấy công việc để xóa.');
      err.code = 'NOT_FOUND';
      throw err;
    }

    // Soft delete (Archived = true)
    this.storage.tasks[taskIndex].Archived = true;
    this.storage.tasks[taskIndex].UpdatedAt = new Date().toISOString();

    this.storage.auditLog.push({
      ID: generateStableId('AUD'),
      ActorEmail: userContext.email,
      Entity: 'Tasks',
      EntityID: payload.ID,
      Operation: 'ARCHIVE',
      Timestamp: new Date().toISOString(),
      RequestID: requestId || null
    });

    return { success: true, archivedId: payload.ID };
  }
}

module.exports = {
  F01RpcService
};

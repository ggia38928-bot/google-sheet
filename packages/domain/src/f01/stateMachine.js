/**
 * Task State Machine for F01
 * Controls transitions: TODO -> DOING -> DONE / CANCELLED,
 * and reopening with history tracking and resetting CompletedAt.
 */

const crypto = require('crypto');
const { TaskStatus, TaskEventType } = require('./types');

const VALID_TRANSITIONS = {
  [TaskStatus.TODO]: {
    START: TaskStatus.DOING,
    COMPLETE: TaskStatus.DONE,
    CANCEL: TaskStatus.CANCELLED
  },
  [TaskStatus.DOING]: {
    COMPLETE: TaskStatus.DONE,
    CANCEL: TaskStatus.CANCELLED,
    PAUSE: TaskStatus.TODO
  },
  [TaskStatus.DONE]: {
    REOPEN: TaskStatus.TODO
  },
  [TaskStatus.CANCELLED]: {
    REOPEN: TaskStatus.TODO
  }
};

/**
 * Executes a transition on a task.
 * Returns the updated task object and the created TaskEvent object.
 */
function transitionTask(task, action, actorEmail, notes = '', timestamp = new Date().toISOString()) {
  const currentStatus = task.Status || TaskStatus.TODO;
  const transitionsForStatus = VALID_TRANSITIONS[currentStatus];

  if (!transitionsForStatus || !transitionsForStatus[action]) {
    throw new Error(
      `Không thể thực hiện hành động '${action}' khi công việc đang ở trạng thái '${currentStatus}'. ` +
      `Các hành động hợp lệ từ trạng thái này: [${transitionsForStatus ? Object.keys(transitionsForStatus).join(', ') : 'Không có'}].`
    );
  }

  const nextStatus = transitionsForStatus[action];
  const updatedTask = { ...task };

  updatedTask.Status = nextStatus;
  updatedTask.UpdatedAt = timestamp;
  updatedTask.RowVersion = (Number(updatedTask.RowVersion) || 1) + 1;

  // State specific side-effects
  if (nextStatus === TaskStatus.DONE) {
    updatedTask.CompletedAt = timestamp;
    updatedTask.Progress = 1.0;
  } else if (action === 'REOPEN') {
    // Crucial requirement: Reset CompletedAt when reopened, reset progress if completed
    updatedTask.CompletedAt = null;
    if (currentStatus === TaskStatus.DONE) {
      updatedTask.Progress = 0.0;
    }
  } else if (nextStatus === TaskStatus.DOING) {
    if (!updatedTask.Progress || updatedTask.Progress === 0) {
      updatedTask.Progress = 0.1; // 10% progress on start
    }
  }

  // Create immutable TaskEvent
  const taskEvent = {
    ID: crypto.randomUUID(),
    TaskID: updatedTask.ID,
    EventType: action === 'REOPEN' ? TaskEventType.REOPEN :
               action === 'START' ? TaskEventType.START :
               action === 'COMPLETE' ? TaskEventType.COMPLETE :
               action === 'CANCEL' ? TaskEventType.CANCEL : TaskEventType.UPDATE,
    EventAt: timestamp,
    ActorEmail: actorEmail || 'system@minhtemplates.com',
    Notes: notes || `Chuyển trạng thái từ ${currentStatus} sang ${nextStatus}`,
    CreatedAt: timestamp
  };

  return {
    task: updatedTask,
    event: taskEvent
  };
}

module.exports = {
  VALID_TRANSITIONS,
  transitionTask
};

/**
 * Domain types and enums for F01: Việc cá nhân và ưu tiên
 */

const TaskStatus = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
  CANCELLED: 'CANCELLED'
};

const TaskPriority = {
  LOW: 'THẤP',
  MEDIUM: 'TRUNG BÌNH',
  HIGH: 'CAO',
  URGENT: 'KHẨN CẤP'
};

const TaskEventType = {
  CREATE: 'CREATE',
  START: 'START',
  COMPLETE: 'COMPLETE',
  CANCEL: 'CANCEL',
  REOPEN: 'REOPEN',
  UPDATE: 'UPDATE'
};

const RecurrenceFrequency = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

const EisenhowerQuadrant = {
  Q1: 'Q1_DO_FIRST',      // Important & Urgent (Làm ngay)
  Q2: 'Q2_SCHEDULE',      // Important & Not Urgent (Lên lịch)
  Q3: 'Q3_DELEGATE',      // Not Important & Urgent (Ủy quyền/Rút gọn)
  Q4: 'Q4_ELIMINATE'      // Not Important & Not Urgent (Loại bỏ/Xem sau)
};

module.exports = {
  TaskStatus,
  TaskPriority,
  TaskEventType,
  RecurrenceFrequency,
  EisenhowerQuadrant
};

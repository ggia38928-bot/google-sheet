/**
 * Complete schema definition for F01: Việc cá nhân và ưu tiên
 */

const { BASELINE_COLUMNS } = require('./baseline');

const F01_SCHEMA = {
  familyId: 'F01',
  name: 'Việc cá nhân và ưu tiên',
  version: '1.0.0',
  schemaVersion: 1,
  locale: 'vi-VN',
  timeZone: 'Asia/Ho_Chi_Minh',
  currency: 'VND',
  tables: {
    Tasks: {
      name: 'Tasks',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'Title', type: 'text', required: true },
        { name: 'OwnerEmail', type: 'email', required: false },
        { name: 'Priority', type: 'enum', values: ['THẤP', 'TRUNG BÌNH', 'CAO', 'KHẨN CẤP'], required: true, default: 'TRUNG BÌNH' },
        { name: 'StartDate', type: 'date', required: false },
        { name: 'DueDate', type: 'date', required: false },
        { name: 'Status', type: 'enum', values: ['TODO', 'DOING', 'DONE', 'CANCELLED'], required: true, default: 'TODO' },
        { name: 'Progress', type: 'percent', required: false, default: 0 },
        { name: 'CompletedAt', type: 'datetime', required: false },
        { 
          name: 'DaysLate', 
          type: 'formula', 
          formula: '=IF(OR(A2="",F2="",G2="CANCELLED"),"",IF(G2="DONE",IF(I2="","",MAX(0,INT(I2)-F2)),MAX(0,TODAY()-F2)))',
          description: 'Số ngày trễ hạn tính toán tự động'
        },
        { name: 'CategoryID', type: 'ref', targetTable: 'Categories', required: false },
        { name: 'Important', type: 'yesno', required: false, default: false },
        { name: 'Urgent', type: 'yesno', required: false, default: false },
        { name: 'CreatedAt', type: 'datetime', required: true, immutable: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'CreatedBy', type: 'email', required: true },
        { name: 'RowVersion', type: 'number', required: true, default: 1 },
        { name: 'Archived', type: 'yesno', required: true, default: false }
      ]
    },
    Categories: {
      name: 'Categories',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'Name', type: 'text', required: true },
        { name: 'Color', type: 'text', required: false, default: '#4285F4' },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'CreatedBy', type: 'email', required: true },
        { name: 'RowVersion', type: 'number', required: true, default: 1 },
        { name: 'Archived', type: 'yesno', required: true, default: false }
      ],
      defaultRows: [
        { ID: 'CAT-WORK', Name: 'Công việc', Color: '#1E88E5', CreatedAt: new Date().toISOString(), UpdatedAt: new Date().toISOString(), CreatedBy: 'system@minhtemplates.com', RowVersion: 1, Archived: false },
        { ID: 'CAT-PERSONAL', Name: 'Cá nhân', Color: '#43A047', CreatedAt: new Date().toISOString(), UpdatedAt: new Date().toISOString(), CreatedBy: 'system@minhtemplates.com', RowVersion: 1, Archived: false },
        { ID: 'CAT-STUDY', Name: 'Học tập', Color: '#FB8C00', CreatedAt: new Date().toISOString(), UpdatedAt: new Date().toISOString(), CreatedBy: 'system@minhtemplates.com', RowVersion: 1, Archived: false },
        { ID: 'CAT-HEALTH', Name: 'Sức khỏe', Color: '#E53935', CreatedAt: new Date().toISOString(), UpdatedAt: new Date().toISOString(), CreatedBy: 'system@minhtemplates.com', RowVersion: 1, Archived: false }
      ]
    },
    TaskEvents: {
      name: 'TaskEvents',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'EventType', type: 'enum', values: ['CREATE', 'START', 'COMPLETE', 'CANCEL', 'REOPEN', 'UPDATE'], required: true },
        { name: 'EventAt', type: 'datetime', required: true },
        { name: 'ActorEmail', type: 'email', required: true },
        { name: 'Notes', type: 'text', required: false },
        { name: 'CreatedAt', type: 'datetime', required: true }
      ]
    },
    TaskChecklist: {
      name: 'TaskChecklist',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'Title', type: 'text', required: true },
        { name: 'Done', type: 'yesno', required: true, default: false },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true },
        { name: 'RowVersion', type: 'number', required: true, default: 1 }
      ]
    },
    RecurrenceRules: {
      name: 'RecurrenceRules',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'TaskTemplateID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'Frequency', type: 'enum', values: ['DAILY', 'WEEKLY', 'MONTHLY'], required: true },
        { name: 'Interval', type: 'number', required: true, default: 1 },
        { name: 'Weekdays', type: 'text', required: false },
        { name: 'MonthDay', type: 'number', required: false },
        { name: 'TimeZone', type: 'text', required: true, default: 'Asia/Ho_Chi_Minh' },
        { name: 'Active', type: 'yesno', required: true, default: true },
        { name: 'CreatedAt', type: 'datetime', required: true },
        { name: 'UpdatedAt', type: 'datetime', required: true }
      ]
    },
    GeneratedOccurrences: {
      name: 'GeneratedOccurrences',
      primaryKey: 'ID',
      columns: [
        { name: 'ID', type: 'text', required: true, immutable: true },
        { name: 'RuleID', type: 'ref', targetTable: 'RecurrenceRules', required: true },
        { name: 'ScheduledDate', type: 'date', required: true },
        { name: 'TaskID', type: 'ref', targetTable: 'Tasks', required: true },
        { name: 'CreatedAt', type: 'datetime', required: true }
      ]
    }
  }
};

module.exports = {
  F01_SCHEMA
};

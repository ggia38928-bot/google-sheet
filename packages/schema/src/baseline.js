/**
 * Data Contract Baseline for Minh Templates Factory
 * Defines common columns, 6 core tables, and display standards.
 */

const BASELINE_COLUMNS = [
  { name: 'ID', type: 'text', required: true, immutable: true, description: 'Khóa chính ổn định tạo một lần duy nhất bằng UUIDv4' },
  { name: 'CreatedAt', type: 'datetime', required: true, immutable: true, description: 'Thời điểm tạo bản ghi' },
  { name: 'UpdatedAt', type: 'datetime', required: true, immutable: false, description: 'Thời điểm cập nhật bản ghi gần nhất' },
  { name: 'CreatedBy', type: 'email', required: true, immutable: true, description: 'Email người tạo bản ghi' },
  { name: 'RowVersion', type: 'number', required: true, immutable: false, description: 'Số phiên bản dùng cho Optimistic Locking' },
  { name: 'Archived', type: 'yesno', required: true, immutable: false, description: 'Cờ lưu trữ / xóa mềm' }
];

const DISPLAY_STANDARDS = {
  locale: 'vi-VN',
  timeZone: 'Asia/Ho_Chi_Minh',
  currency: 'VND',
  currencyDecimals: 0,
  currencyPattern: '#,##0 "₫"',
  dateFormat: 'dd/MM/yyyy',
  dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
  percentFormat: '0.0%'
};

const COMMON_TABLES = {
  Settings: {
    primaryKey: 'Key',
    columns: [
      { name: 'Key', type: 'text', required: true, immutable: true },
      { name: 'Value', type: 'text', required: true },
      { name: 'ValueType', type: 'enum', values: ['text', 'number', 'boolean', 'json'], required: true },
      { name: 'Description', type: 'text', required: false },
      { name: 'UpdatedAt', type: 'datetime', required: true }
    ],
    defaultRows: [
      { Key: 'system.locale', Value: 'vi-VN', ValueType: 'text', Description: 'Ngôn ngữ và vùng mặc định' },
      { Key: 'system.timeZone', Value: 'Asia/Ho_Chi_Minh', ValueType: 'text', Description: 'Múi giờ hệ thống' },
      { Key: 'system.currency', Value: 'VND', ValueType: 'text', Description: 'Đơn vị tiền tệ chính' },
      { Key: 'brand.name', Value: 'Minh Templates', ValueType: 'text', Description: 'Tên thương hiệu' },
      { Key: 'version.schema', Value: '1.0.0', ValueType: 'text', Description: 'Phiên bản schema hiện hành' }
    ]
  },
  Users: {
    primaryKey: 'Email',
    columns: [
      { name: 'Email', type: 'email', required: true, immutable: true },
      { name: 'DisplayName', type: 'text', required: true },
      { name: 'Role', type: 'enum', values: ['OWNER', 'MANAGER', 'STAFF', 'VIEWER'], required: true },
      { name: 'TeamID', type: 'ref', targetTable: 'Teams', required: false },
      { name: 'Active', type: 'yesno', required: true },
      { name: 'RowVersion', type: 'number', required: true }
    ],
    defaultRows: [
      { Email: 'admin@minhtemplates.com', DisplayName: 'Quản Trị Viên (Owner)', Role: 'OWNER', TeamID: 'TEAM-01', Active: true, RowVersion: 1 }
    ]
  },
  Teams: {
    primaryKey: 'ID',
    columns: [
      { name: 'ID', type: 'text', required: true, immutable: true },
      { name: 'Name', type: 'text', required: true },
      { name: 'ManagerEmail', type: 'email', required: false },
      { name: 'RowVersion', type: 'number', required: true }
    ],
    defaultRows: [
      { ID: 'TEAM-01', Name: 'Ban Điều Hành', ManagerEmail: 'admin@minhtemplates.com', RowVersion: 1 }
    ]
  },
  AuditLog: {
    primaryKey: 'ID',
    columns: [
      { name: 'ID', type: 'text', required: true, immutable: true },
      { name: 'ActorEmail', type: 'email', required: true },
      { name: 'Entity', type: 'text', required: true },
      { name: 'EntityID', type: 'text', required: true },
      { name: 'Operation', type: 'enum', values: ['INSERT', 'UPDATE', 'DELETE', 'TRANSITION', 'ARCHIVE', 'RESTORE'], required: true },
      { name: 'ChangedFields', type: 'text', required: false },
      { name: 'Timestamp', type: 'datetime', required: true },
      { name: 'RequestID', type: 'text', required: false }
    ],
    defaultRows: []
  },
  Files: {
    primaryKey: 'ID',
    columns: [
      { name: 'ID', type: 'text', required: true, immutable: true },
      { name: 'Entity', type: 'text', required: true },
      { name: 'EntityID', type: 'text', required: true },
      { name: 'DriveFileID', type: 'text', required: true },
      { name: 'MimeType', type: 'text', required: true },
      { name: 'UploadedBy', type: 'email', required: true },
      { name: 'Visibility', type: 'enum', values: ['PUBLIC', 'INTERNAL', 'RESTRICTED'], required: true }
    ],
    defaultRows: []
  },
  Jobs: {
    primaryKey: 'ID',
    columns: [
      { name: 'ID', type: 'text', required: true, immutable: true },
      { name: 'Type', type: 'text', required: true },
      { name: 'PayloadRef', type: 'text', required: false },
      { name: 'State', type: 'enum', values: ['PENDING', 'RUNNING', 'COMPLETED', 'FAILED'], required: true },
      { name: 'Attempt', type: 'number', required: true },
      { name: 'NextRunAt', type: 'datetime', required: false },
      { name: 'DedupKey', type: 'text', required: false },
      { name: 'LastError', type: 'text', required: false }
    ],
    defaultRows: []
  }
};

module.exports = {
  BASELINE_COLUMNS,
  DISPLAY_STANDARDS,
  COMMON_TABLES
};

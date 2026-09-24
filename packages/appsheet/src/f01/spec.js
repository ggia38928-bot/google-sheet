/**
 * AppSheet Specification for F01: Việc cá nhân và ưu tiên
 */

const { generateTablesCsv, generateColumnsCsv, generateViewsCsv, generateActionsCsv } = require('../generator');

const F01_APPSHEET_TABLES = [
  {
    name: 'Tasks',
    sheetSource: 'Tasks',
    primaryKey: 'ID',
    labelColumn: 'Title',
    permissions: 'ADDS_AND_UPDATES_AND_DELETES',
    securityFilter: 'AND(LOOKUP(USEREMAIL(), "Users", "Email", "Active") = TRUE, OR(LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "OWNER", [OwnerEmail] = USEREMAIL()))'
  },
  {
    name: 'Categories',
    sheetSource: 'Categories',
    primaryKey: 'ID',
    labelColumn: 'Name',
    permissions: 'READ_ONLY',
    securityFilter: ''
  },
  {
    name: 'TaskEvents',
    sheetSource: 'TaskEvents',
    primaryKey: 'ID',
    labelColumn: 'EventType',
    permissions: 'ADDS_ONLY',
    securityFilter: ''
  },
  {
    name: 'Users',
    sheetSource: 'Users',
    primaryKey: 'Email',
    labelColumn: 'DisplayName',
    permissions: 'READ_ONLY',
    securityFilter: ''
  },
  {
    name: 'Settings',
    sheetSource: 'SETTINGS',
    primaryKey: 'Key',
    labelColumn: 'Key',
    permissions: 'READ_ONLY',
    securityFilter: ''
  }
];

const F01_APPSHEET_COLUMNS = [
  // Tasks Table
  { tableName: 'Tasks', columnName: 'ID', type: 'Text', required: true, isKey: true, isLabel: false, initialValue: 'UNIQUEID()', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'Title', type: 'Text', required: true, isKey: false, isLabel: true, editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'OwnerEmail', type: 'Email', required: true, isKey: false, isLabel: false, initialValue: 'USEREMAIL()', editableIf: 'LOOKUP(USEREMAIL(), "Users", "Email", "Role") = "OWNER"', refTable: 'Users' },
  { tableName: 'Tasks', columnName: 'Priority', type: 'Enum', required: true, isKey: false, isLabel: false, initialValue: '"TRUNG BÌNH"', validIf: 'LIST("THẤP", "TRUNG BÌNH", "CAO", "KHẨN CẤP")', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'StartDate', type: 'Date', required: false, isKey: false, isLabel: false, initialValue: 'TODAY()', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'DueDate', type: 'Date', required: false, isKey: false, isLabel: false, editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'Status', type: 'Enum', required: true, isKey: false, isLabel: false, initialValue: '"TODO"', validIf: 'LIST("TODO", "DOING", "DONE", "CANCELLED")', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'Progress', type: 'Percent', required: false, isKey: false, isLabel: false, initialValue: '0', validIf: 'AND([Progress] >= 0, [Progress] <= 1)', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'CompletedAt', type: 'DateTime', required: false, isKey: false, isLabel: false, editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'DaysLate', type: 'Number', required: false, isKey: false, isLabel: false, appFormula: 'IFS(OR(ISBLANK([Title]), ISBLANK([DueDate]), [Status] = "CANCELLED"), "", [Status] = "DONE", IF(ISBLANK([CompletedAt]), "", MAX(LIST(0, TOTALDAYS([CompletedAt] - [DueDate])))), TRUE, MAX(LIST(0, TOTALDAYS(TODAY() - [DueDate]))))', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'CategoryID', type: 'Ref', required: false, isKey: false, isLabel: false, refTable: 'Categories', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'Important', type: 'Yes/No', required: false, isKey: false, isLabel: false, initialValue: 'FALSE', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'Urgent', type: 'Yes/No', required: false, isKey: false, isLabel: false, initialValue: 'FALSE', editableIf: 'TRUE' },
  { tableName: 'Tasks', columnName: 'CreatedAt', type: 'DateTime', required: true, isKey: false, isLabel: false, initialValue: 'NOW()', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'UpdatedAt', type: 'DateTime', required: true, isKey: false, isLabel: false, initialValue: 'NOW()', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'CreatedBy', type: 'Email', required: true, isKey: false, isLabel: false, initialValue: 'USEREMAIL()', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'RowVersion', type: 'Number', required: true, isKey: false, isLabel: false, initialValue: '1', editableIf: 'FALSE' },
  { tableName: 'Tasks', columnName: 'Archived', type: 'Yes/No', required: true, isKey: false, isLabel: false, initialValue: 'FALSE', editableIf: 'FALSE' },

  // Categories Table
  { tableName: 'Categories', columnName: 'ID', type: 'Text', required: true, isKey: true, isLabel: false },
  { tableName: 'Categories', columnName: 'Name', type: 'Text', required: true, isKey: false, isLabel: true },
  { tableName: 'Categories', columnName: 'Color', type: 'Color', required: false, isKey: false, isLabel: false },

  // Users Table
  { tableName: 'Users', columnName: 'Email', type: 'Email', required: true, isKey: true, isLabel: false },
  { tableName: 'Users', columnName: 'DisplayName', type: 'Text', required: true, isKey: false, isLabel: true },
  { tableName: 'Users', columnName: 'Role', type: 'Enum', required: true, isKey: false, isLabel: false, validIf: 'LIST("OWNER", "MANAGER", "STAFF", "VIEWER")' },
  { tableName: 'Users', columnName: 'Active', type: 'Yes/No', required: true, isKey: false, isLabel: false }
];

const F01_APPSHEET_VIEWS = [
  { viewName: 'My Tasks', tableOrSlice: 'Tasks', viewType: 'deck', position: 'primary', sortBy: 'DueDate:Ascending', groupBy: 'Priority', displayColumns: ['Title', 'DueDate', 'Priority', 'Status', 'DaysLate'] },
  { viewName: 'Task Detail', tableOrSlice: 'Tasks', viewType: 'detail', position: 'ref', displayColumns: ['Title', 'OwnerEmail', 'Priority', 'StartDate', 'DueDate', 'Status', 'Progress', 'DaysLate', 'CategoryID', 'Important', 'Urgent'] },
  { viewName: 'New Task', tableOrSlice: 'Tasks', viewType: 'form', position: 'menu', displayColumns: ['Title', 'Priority', 'DueDate', 'CategoryID', 'Important', 'Urgent'] },
  { viewName: 'Calendar', tableOrSlice: 'Tasks', viewType: 'calendar', position: 'primary', sortBy: 'DueDate', displayColumns: ['Title', 'DueDate', 'Status'] },
  { viewName: 'Overdue', tableOrSlice: 'Tasks', viewType: 'table', position: 'menu', sortBy: 'DaysLate:Descending', displayColumns: ['Title', 'OwnerEmail', 'DueDate', 'DaysLate', 'Priority'] },
  { viewName: 'Dashboard', tableOrSlice: 'Tasks', viewType: 'dashboard', position: 'primary', displayColumns: [] },
  { viewName: 'Settings', tableOrSlice: 'Settings', viewType: 'detail', position: 'menu', displayColumns: ['Key', 'Value', 'Description'] }
];

const F01_APPSHEET_ACTIONS = [
  { actionName: 'Start Task', tableName: 'Tasks', actionType: 'SetValues', condition: '[Status] = "TODO"', targetColumn: 'Status', valueFormula: '"DOING"' },
  { actionName: 'Complete Task', tableName: 'Tasks', actionType: 'SetValues', condition: 'OR([Status] = "TODO", [Status] = "DOING")', targetColumn: 'Status', valueFormula: '"DONE"' },
  { actionName: 'Cancel Task', tableName: 'Tasks', actionType: 'SetValues', condition: 'OR([Status] = "TODO", [Status] = "DOING")', targetColumn: 'Status', valueFormula: '"CANCELLED"' },
  { actionName: 'Reopen Task', tableName: 'Tasks', actionType: 'SetValues', condition: 'OR([Status] = "DONE", [Status] = "CANCELLED")', targetColumn: 'Status', valueFormula: '"TODO"' }
];

const F01_APPSHEET_BOTS_MD = `# KỊCH BẢN TỰ ĐỘNG HÓA APPSHEET (BOTS SPECIFICATION) - F01

## 1. Bot Nhắc Hạn Công Việc (Bot_Task_Due_Reminder)
- **Mục đích:** Gửi thông báo đẩy (Push notification) hoặc Email cho người phụ trách trước 24 giờ khi công việc tới hạn chót.
- **Sự kiện kích hoạt (Event):** Lập lịch hàng ngày lúc 08:00 (Múi giờ \`Asia/Ho_Chi_Minh\`).
- **Điều kiện chạy (Condition):**
  \`\`\`text
  AND(
    [Status] <> "DONE",
    [Status] <> "CANCELLED",
    ISNOTBLANK([DueDate]),
    [DueDate] <= TODAY() + 1,
    [DueDate] >= TODAY()
  )
  \`\`\`
- **Hành động (Process / Task):** Gửi Email / Thông báo tới \`[OwnerEmail]\`.
- **Khóa chống gửi trùng (DedupKey):**
  \`\`\`text
  CONCATENATE([ID], "_", TEXT([DueDate], "YYYYMMDD"), "_", [OwnerEmail], "_DUE_REMINDER")
  \`\`\`
- **Xử lý lỗi:** Ghi nhận lỗi vào bảng \`Jobs\`, không gián đoạn luồng người dùng.

---

## 2. Bot Cảnh Báo Quá Hạn (Bot_Task_Overdue_Alert)
- **Mục đích:** Thông báo công việc đã bị trễ hạn.
- **Sự kiện kích hoạt (Event):** Lập lịch hàng ngày lúc 09:00 (Múi giờ \`Asia/Ho_Chi_Minh\`).
- **Điều kiện chạy (Condition):**
  \`\`\`text
  AND(
    [Status] <> "DONE",
    [Status] <> "CANCELLED",
    ISNOTBLANK([DueDate]),
    [DueDate] < TODAY()
  )
  \`\`\`
- **Khóa chống gửi trùng (DedupKey):**
  \`\`\`text
  CONCATENATE([ID], "_", TEXT(TODAY(), "YYYYMMDD"), "_", [OwnerEmail], "_OVERDUE_ALERT")
  \`\`\`
`;

function exportF01AppSheetBundle() {
  return {
    tablesCsv: generateTablesCsv(F01_APPSHEET_TABLES),
    columnsCsv: generateColumnsCsv(F01_APPSHEET_COLUMNS),
    viewsCsv: generateViewsCsv(F01_APPSHEET_VIEWS),
    actionsCsv: generateActionsCsv(F01_APPSHEET_ACTIONS),
    botsMd: F01_APPSHEET_BOTS_MD
  };
}

module.exports = {
  F01_APPSHEET_TABLES,
  F01_APPSHEET_COLUMNS,
  F01_APPSHEET_VIEWS,
  F01_APPSHEET_ACTIONS,
  F01_APPSHEET_BOTS_MD,
  exportF01AppSheetBundle
};

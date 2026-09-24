/**
 * Sheet Builder for F01: Việc cá nhân và ưu tiên
 * Generates the full Google Sheets specification, tabs, formulas, validations, and formats.
 */

const { F01_SCHEMA } = require('../../../schema/src/f01');
const { COMMON_TABLES, DISPLAY_STANDARDS } = require('../../../schema/src/baseline');

function buildF01SheetWorkbook(isDemo = false, demoTasks = []) {
  const tabs = [];

  // ==========================================
  // TAB 1: START_HERE
  // ==========================================
  tabs.push({
    name: 'START_HERE',
    color: '#1A73E8',
    isProtected: true,
    rows: [
      ['MINH TEMPLATES - HƯỚNG DẪN KHỞI ĐỘNG NHANH (QUẢN LÝ VIỆC CÁ NHÂN & ƯU TIÊN F01)', '', '', ''],
      ['Phiên bản: 1.0.0 | Ngày phát hành: 07/09/2026 | Hỗ trợ: support@minhtemplates.com', '', '', ''],
      ['', '', '', ''],
      ['QUY TRÌNH 5 BƯỚC SỬ DỤNG:', '', '', ''],
      ['Bước 1: Tạo bản sao', 'Nhấp vào Tệp (File) > Tạo bản sao (Make a copy) để lưu trữ file về Google Drive cá nhân của bạn.', '', ''],
      ['Bước 2: Cài đặt hệ thống', 'Truy cập tab SETTINGS để tùy chỉnh danh mục công việc (Categories), múi giờ và email quản lý.', '', ''],
      ['Bước 3: Nhập việc tại Tasks', 'Chuyển sang tab Tasks, nhập các công việc cần làm: Tiêu đề, Hạn chót (DueDate), Ưu tiên (Priority), đánh dấu Quan trọng/Khẩn cấp.', '', ''],
      ['Bước 4: Theo dõi Dashboard', 'Xem tab DASHBOARD để nắm tỷ lệ hoàn thành, cảnh báo việc quá hạn và phân bổ công việc theo ma trận Eisenhower.', '', ''],
      ['Bước 5: Cập nhật tiến độ', 'Khi bắt đầu việc, chọn trạng thái DOING; khi hoàn thành chọn DONE. Cột Số ngày trễ (DaysLate) được tính toán tự động hoàn toàn.', '', ''],
      ['', '', '', ''],
      ['LƯU Ý QUAN TRỌNG VỀ BẢO VỆ DỮ LIỆU:', '', '', ''],
      ['- Các ô tính công thức tại cột J (DaysLate) và các chỉ số Dashboard được bảo vệ để tránh sửa nhầm.', '', '', ''],
      ['- Không được xóa các cột hệ thống (ID, CreatedAt, RowVersion, Archived) để đảm bảo tích hợp an toàn với AppSheet & Apps Script.', '', '', ''],
      ['- Định dạng ngày tháng chuẩn là dd/MM/yyyy. Tiền tệ (nếu có) hiển thị chuẩn VND.', '', '', '']
    ]
  });

  // ==========================================
  // TAB 2: DASHBOARD
  // ==========================================
  tabs.push({
    name: 'DASHBOARD',
    color: '#34A853',
    isProtected: true,
    rows: [
      ['MINH TEMPLATES - BẢNG ĐIỀU KHIỂN CÔNG VIỆC VÀ CHỈ SỐ KPI (F01)', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['CHÚ GIẢI MÀU SẮC TRẠNG THÁI (COLOR LEGEND):', '', '', '', '', ''],
      ['[Xanh lá] Hoàn thành (DONE)', '[Xanh dương] Đang làm (DOING)', '[Vàng] Cần làm (TODO)', '[Đỏ] Quá hạn (OVERDUE)', '[Xám] Đã hủy (CANCELLED)', ''],
      ['', '', '', '', '', ''],
      ['TỔNG QUAN HIỆU SUẤT (KPIS):', '', '', '', '', ''],
      ['Chỉ số', 'Giá trị', 'Công thức chuẩn biên dịch', 'Diễn giải', '', ''],
      [
        'Tỷ lệ hoàn thành',
        '=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)',
        '=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)',
        'Tỷ lệ việc DONE trên tổng số việc (loại bỏ việc CANCELLED, chống chia cho 0)',
        '',
        ''
      ],
      [
        'Số việc đang quá hạn',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
        'Số việc có hạn chót < Hôm nay và chưa hoàn thành / chưa hủy',
        '',
        ''
      ],
      [
        'Tổng việc đang mở (TODO + DOING)',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")',
        'Các công việc cần tiếp tục xử lý',
        '',
        ''
      ],
      [
        'Việc đã hoàn thành (DONE)',
        '=COUNTIF(Tasks!G2:G10001,"DONE")',
        '=COUNTIF(Tasks!G2:G10001,"DONE")',
        'Tổng số công việc đã xong',
        '',
        ''
      ],
      [
        'Việc đã hủy (CANCELLED)',
        '=COUNTIF(Tasks!G2:G10001,"CANCELLED")',
        '=COUNTIF(Tasks!G2:G10001,"CANCELLED")',
        'Các công việc không còn thực hiện',
        '',
        ''
      ],
      ['', '', '', '', '', ''],
      ['PHÂN PHỐI MA TRẬN EISENHOWER (CÔNG VIỆC CHƯA XONG):', '', '', '', '', ''],
      ['Góc ma trận', 'Số lượng', 'Đặc tính', 'Hành động đề xuất', '', ''],
      [
        'Q1: Khẩn cấp & Quan trọng',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED",Tasks!L2:L10001,TRUE,Tasks!M2:M10001,TRUE)',
        'Quan trọng = TRUE, Khẩn cấp = TRUE',
        'LÀM NGAY LẬP TỨC (Do First)',
        '',
        ''
      ],
      [
        'Q2: Quan trọng & Không khẩn',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED",Tasks!L2:L10001,TRUE,Tasks!M2:M10001,FALSE)',
        'Quan trọng = TRUE, Khẩn cấp = FALSE',
        'LÊN LỊCH THỰC HIỆN (Schedule)',
        '',
        ''
      ],
      [
        'Q3: Khẩn cấp & Không quan trọng',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED",Tasks!L2:L10001,FALSE,Tasks!M2:M10001,TRUE)',
        'Quan trọng = FALSE, Khẩn cấp = TRUE',
        'ỦY QUYỀN / RÚT GỌN (Delegate)',
        '',
        ''
      ],
      [
        'Q4: Không khẩn & Không quan trọng',
        '=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED",Tasks!L2:L10001,FALSE,Tasks!M2:M10001,FALSE)',
        'Quan trọng = FALSE, Khẩn cấp = FALSE',
        'LOẠI BỎ / XEM XÉT SAU (Eliminate)',
        '',
        ''
      ]
    ]
  });

  // ==========================================
  // TAB 3: Tasks
  // ==========================================
  const taskHeader = [
    'ID', 'Title', 'OwnerEmail', 'Priority', 'StartDate', 'DueDate',
    'Status', 'Progress', 'CompletedAt', 'DaysLate', 'CategoryID',
    'Important', 'Urgent', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'
  ];

  const taskRows = [taskHeader];

  if (isDemo && demoTasks.length > 0) {
    demoTasks.forEach((t, idx) => {
      const rowIdx = idx + 2;
      taskRows.push([
        t.ID,
        t.Title,
        t.OwnerEmail || 'user@minhtemplates.com',
        t.Priority || 'TRUNG BÌNH',
        t.StartDate || '',
        t.DueDate || '',
        t.Status || 'TODO',
        t.Progress !== undefined ? t.Progress : 0,
        t.CompletedAt || '',
        `=IF(OR(A${rowIdx}="",F${rowIdx}="",G${rowIdx}="CANCELLED"),"",IF(G${rowIdx}="DONE",IF(I${rowIdx}="","",MAX(0,INT(I${rowIdx})-F${rowIdx})),MAX(0,TODAY()-F${rowIdx})))`,
        t.CategoryID || 'CAT-WORK',
        t.Important ? 'TRUE' : 'FALSE',
        t.Urgent ? 'TRUE' : 'FALSE',
        t.CreatedAt || new Date().toISOString(),
        t.UpdatedAt || new Date().toISOString(),
        t.CreatedBy || 'user@minhtemplates.com',
        t.RowVersion || 1,
        t.Archived ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  tabs.push({
    name: 'Tasks',
    color: '#FBBC04',
    freezeRows: 1,
    isProtected: false,
    protectedColumns: ['J'], // Protect DaysLate formula column
    validations: {
      Priority: ['THẤP', 'TRUNG BÌNH', 'CAO', 'KHẨN CẤP'],
      Status: ['TODO', 'DOING', 'DONE', 'CANCELLED'],
      Important: ['TRUE', 'FALSE'],
      Urgent: ['TRUE', 'FALSE']
    },
    rows: taskRows
  });

  // ==========================================
  // TAB 4: SETTINGS
  // ==========================================
  const settingsRows = [
    ['Key', 'Value', 'ValueType', 'Description', 'UpdatedAt'],
    ['system.locale', DISPLAY_STANDARDS.locale, 'text', 'Ngôn ngữ và định dạng vùng', new Date().toISOString()],
    ['system.timeZone', DISPLAY_STANDARDS.timeZone, 'text', 'Múi giờ làm việc', new Date().toISOString()],
    ['system.currency', DISPLAY_STANDARDS.currency, 'text', 'Đơn vị tiền tệ chính', new Date().toISOString()],
    ['app.version', '1.0.0', 'text', 'Phiên bản mẫu bảng tính F01', new Date().toISOString()],
    ['owner.defaultEmail', 'admin@minhtemplates.com', 'text', 'Email quản lý mặc định', new Date().toISOString()]
  ];

  tabs.push({
    name: 'SETTINGS',
    color: '#5F6368',
    isProtected: false,
    rows: settingsRows
  });

  // ==========================================
  // TAB 5: Categories
  // ==========================================
  const catRows = [
    ['ID', 'Name', 'Color', 'CreatedAt', 'UpdatedAt', 'CreatedBy', 'RowVersion', 'Archived'],
    ['CAT-WORK', 'Công việc', '#1E88E5', new Date().toISOString(), new Date().toISOString(), 'system@minhtemplates.com', 1, 'FALSE'],
    ['CAT-PERSONAL', 'Cá nhân', '#43A047', new Date().toISOString(), new Date().toISOString(), 'system@minhtemplates.com', 1, 'FALSE'],
    ['CAT-STUDY', 'Học tập', '#FB8C00', new Date().toISOString(), new Date().toISOString(), 'system@minhtemplates.com', 1, 'FALSE'],
    ['CAT-HEALTH', 'Sức khỏe', '#E53935', new Date().toISOString(), new Date().toISOString(), 'system@minhtemplates.com', 1, 'FALSE']
  ];

  tabs.push({
    name: 'Categories',
    color: '#9C27B0',
    freezeRows: 1,
    rows: catRows
  });

  // ==========================================
  // TAB 6: TaskEvents
  // ==========================================
  const eventRows = [
    ['ID', 'TaskID', 'EventType', 'EventAt', 'ActorEmail', 'Notes', 'CreatedAt']
  ];
  tabs.push({
    name: 'TaskEvents',
    color: '#607D8B',
    freezeRows: 1,
    rows: eventRows
  });

  return {
    title: isDemo ? 'Minh Templates - F01 Quản Lý Việc Cá Nhân (Bản Demo)' : 'Minh Templates - F01 Quản Lý Việc Cá Nhân (Bản Sạch)',
    locale: DISPLAY_STANDARDS.locale,
    timeZone: DISPLAY_STANDARDS.timeZone,
    tabs
  };
}

module.exports = {
  buildF01SheetWorkbook
};

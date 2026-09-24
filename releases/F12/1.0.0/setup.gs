/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F12 — Quản lý hồ sơ nhân sự & hợp đồng lao động
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F12_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF12Workbook(true);
}

function setupCleanTemplate() {
  initF12Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F12 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function initF12Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Employees","EmploymentContracts","EmployeeFiles","EmergencyContacts","EmploymentEvents","Compensation","SETTINGS"];
  const sheets = {};

  tabNames.forEach(function(name) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    sheets[name] = sheet;
  });

  const defaultSheet = ss.getSheetByName('Sheet1') || ss.getSheetByName('Trang tính 1');
  if (defaultSheet && ss.getSheets().length > 1) {
    try { ss.deleteSheet(defaultSheet); } catch(e) {}
  }

  // =========================================================================
  // TAB 1: START_HERE (HƯỚNG DẪN KHỞI ĐỘNG)
  // =========================================================================
  const startSheet = sheets['START_HERE'];
  startSheet.clear();
  startSheet.setTabColor('#1A73E8');
  try { startSheet.setHiddenGridlines(true); } catch(e) {}

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ HỒ SƠ NHÂN SỰ & HỢP ĐỒNG LAO ĐỘNG (F12)')
    .setFontSize(15).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  startSheet.setRowHeight(1, 42);

  const startData = [
    ['Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND) | Thương hiệu: Minh Templates', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['QUY TRÌNH VẬN HÀNH HIỆU QUẢ:', '', '', '', '', ''],
    ['Bước 1: Tạo bản sao', 'Nhấn Tệp (File) > Tạo bản sao (Make a copy) để lưu về Google Drive cá nhân của bạn.', '', '', '', ''],
    ['Bước 2: Cấu hình ban đầu', 'Truy cập các bảng danh mục để chỉnh sửa hoặc bổ sung thông tin ban đầu phù hợp.', '', '', '', ''],
    ['Bước 3: Nhập dữ liệu phát sinh', 'Nhập liệu vào các bảng tương ứng. Hệ thống sẽ tự động tổng hợp.', '', '', '', ''],
    ['Bước 4: Theo dõi Dashboard', 'Xem các chỉ số KPI, biểu đồ trực quan tự động cập nhật thời gian thực tại tab DASHBOARD.', '', '', '', ''],
    ['Bước 5: Xuất báo cáo & Lưu trữ', 'Dữ liệu được lưu trữ vĩnh viễn trên tài khoản Google của bạn, an toàn tuyệt đối.', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['LƯU Ý QUẢN TRỊ BẢN QUYỀN:', '', '', '', '', ''],
    ['- Bản quyền thuộc Minh Templates. Bảng tính chạy công thức tự động 100%.', '', '', '', '', ''],
    ['- Dữ liệu hoàn toàn riêng tư trên Google Drive của bạn, không gửi ra ngoài.', '', '', '', '', '']
  ];
  startSheet.getRange(2, 1, startData.length, 6).setValues(startData);
  startSheet.getRange('A3').setFontWeight('bold').setFontColor('#0D47A1');
  startSheet.getRange('A4:A8').setFontWeight('bold').setFontColor('#1565C0');
  startSheet.getRange('A10').setFontWeight('bold').setFontColor('#C62828');
  startSheet.setColumnWidth(1, 260);
  startSheet.setColumnWidth(2, 640);

  // =========================================================================
  // TAB: Employees
  // =========================================================================
  const sheet_Employees = sheets['Employees'];
  sheet_Employees.clear();
  sheet_Employees.setTabColor('#1565C0');
  sheet_Employees.setFrozenRows(1);

  const headers_Employees = ["ID","EmployeeCode","FullName","WorkEmail","TeamID","JobTitle","HireDate","ExitDate","EmploymentStatus","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Employees.getRange(1, 1, 1, 14).setValues([headers_Employees])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Employees.setRowHeight(1, 32);
  sheet_Employees.setColumnWidth(1, 120);
  sheet_Employees.setColumnWidth(2, 110);
  sheet_Employees.setColumnWidth(3, 220);
  sheet_Employees.setColumnWidth(4, 200);
  sheet_Employees.setColumnWidth(5, 140);
  sheet_Employees.setColumnWidth(6, 160);
  sheet_Employees.setColumnWidth(7, 110);
  sheet_Employees.setColumnWidth(8, 110);
  sheet_Employees.setColumnWidth(9, 130);
  sheet_Employees.setColumnWidth(10, 160);
  sheet_Employees.setColumnWidth(11, 160);
  sheet_Employees.setColumnWidth(12, 180);
  sheet_Employees.setColumnWidth(13, 90);
  sheet_Employees.setColumnWidth(14, 80);

  const demoData_Employees = [["EMP-001","NV-001","Nguyễn Hoàng Minh","minh.nh@minhtemplates.com","BAN GIÁM ĐỐC","Tổng Giám Đốc","2024-01-15","","ACTIVE","2024-01-15T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMP-002","NV-002","Trần Thị Thu Thảo","thao.tt@minhtemplates.com","KINH DOANH","Trưởng Phòng Kinh Doanh","2024-03-01","","ACTIVE","2024-03-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMP-003","NV-003","Lê Hoàng Long","long.lh@minhtemplates.com","KỸ THUẬT","Kỹ Sư Phần Mềm Cao Cấp","2024-06-15","","ACTIVE","2024-06-15T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMP-004","NV-004","Phạm Quỳnh Anh","anh.pq@minhtemplates.com","MARKETING","Chuyên Viên Digital Marketing","2026-07-01","","PROBATION","2026-07-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMP-005","NV-005","Đỗ Gia Bảo","bao.dg@minhtemplates.com","NHÂN SỰ","Chuyên Viên Tuyển Dụng","2025-02-01","","ACTIVE","2025-02-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMP-006","NV-006","Vũ Đức Thịnh","thinh.vd@minhtemplates.com","KỸ THUẬT","Lập Trình Viên Frontend","2024-08-01","2026-06-30","TERMINATED","2024-08-01T08:00:00Z","2026-06-30T17:00:00Z","admin@minhtemplates.com",2,"FALSE"]];
  if (isDemo && demoData_Employees.length > 0) {
    sheet_Employees.getRange(2, 1, demoData_Employees.length, 14).setValues(demoData_Employees);
  }
  sheet_Employees.getRange('G2:H1000').setNumberFormat('yyyy-mm-dd');

  const rule_Employees_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BAN GIÁM ĐỐC","KINH DOANH","KỸ THUẬT","MARKETING","NHÂN SỰ","TÀI CHÍNH","VẬN HÀNH"], true).build();
  sheet_Employees.getRange('E2:E1000').setDataValidation(rule_Employees_E2E1000);

  const rule_Employees_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","PROBATION","ON_LEAVE","TERMINATED"], true).build();
  sheet_Employees.getRange('I2:I1000').setDataValidation(rule_Employees_I2I1000);

  const rule_Employees_N2N1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_Employees.getRange('N2:N1000').setDataValidation(rule_Employees_N2N1000);

  // =========================================================================
  // TAB: EmploymentContracts
  // =========================================================================
  const sheet_EmploymentContracts = sheets['EmploymentContracts'];
  sheet_EmploymentContracts.clear();
  sheet_EmploymentContracts.setTabColor('#0277BD');
  sheet_EmploymentContracts.setFrozenRows(1);

  const headers_EmploymentContracts = ["ID","ContractNumber","EmployeeID","Type","StartDate","EndDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_EmploymentContracts.getRange(1, 1, 1, 12).setValues([headers_EmploymentContracts])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_EmploymentContracts.setRowHeight(1, 32);
  sheet_EmploymentContracts.setColumnWidth(1, 120);
  sheet_EmploymentContracts.setColumnWidth(2, 160);
  sheet_EmploymentContracts.setColumnWidth(3, 120);
  sheet_EmploymentContracts.setColumnWidth(4, 160);
  sheet_EmploymentContracts.setColumnWidth(5, 110);
  sheet_EmploymentContracts.setColumnWidth(6, 110);
  sheet_EmploymentContracts.setColumnWidth(7, 120);
  sheet_EmploymentContracts.setColumnWidth(8, 160);
  sheet_EmploymentContracts.setColumnWidth(9, 160);
  sheet_EmploymentContracts.setColumnWidth(10, 180);
  sheet_EmploymentContracts.setColumnWidth(11, 90);
  sheet_EmploymentContracts.setColumnWidth(12, 80);

  const demoData_EmploymentContracts = [["CTR-001","HĐLĐ-2024-001","EMP-001","INDEFINITE","2024-01-15","","ACTIVE","2024-01-15T08:00:00Z","2024-01-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CTR-002","HĐLĐ-2024-002","EMP-002","FIXED_TERM_3Y","2024-03-01","2027-02-28","ACTIVE","2024-03-01T08:00:00Z","2024-03-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CTR-003","HĐLĐ-2025-003","EMP-003","FIXED_TERM_1Y","2025-06-15","2026-09-30","EXPIRING","2025-06-15T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CTR-004","HĐTV-2026-004","EMP-004","PROBATION","2026-07-01","2026-08-31","EXPIRED","2026-07-01T08:00:00Z","2026-08-31T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CTR-005","HĐLĐ-2025-005","EMP-005","FIXED_TERM_3Y","2025-02-01","2028-01-31","ACTIVE","2025-02-01T08:00:00Z","2025-02-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_EmploymentContracts.length > 0) {
    sheet_EmploymentContracts.getRange(2, 1, demoData_EmploymentContracts.length, 12).setValues(demoData_EmploymentContracts);
  }
  sheet_EmploymentContracts.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');

  const rule_EmploymentContracts_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PROBATION","FIXED_TERM_1Y","FIXED_TERM_3Y","INDEFINITE"], true).build();
  sheet_EmploymentContracts.getRange('D2:D1000').setDataValidation(rule_EmploymentContracts_D2D1000);

  const rule_EmploymentContracts_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","EXPIRING","EXPIRED","TERMINATED"], true).build();
  sheet_EmploymentContracts.getRange('G2:G1000').setDataValidation(rule_EmploymentContracts_G2G1000);

  const rule_EmploymentContracts_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_EmploymentContracts.getRange('L2:L1000').setDataValidation(rule_EmploymentContracts_L2L1000);

  // =========================================================================
  // TAB: EmployeeFiles
  // =========================================================================
  const sheet_EmployeeFiles = sheets['EmployeeFiles'];
  sheet_EmployeeFiles.clear();
  sheet_EmployeeFiles.setTabColor('#00838F');
  sheet_EmployeeFiles.setFrozenRows(1);

  const headers_EmployeeFiles = ["ID","EmployeeID","Category","FileID","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_EmployeeFiles.getRange(1, 1, 1, 10).setValues([headers_EmployeeFiles])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_EmployeeFiles.setRowHeight(1, 32);
  sheet_EmployeeFiles.setColumnWidth(1, 120);
  sheet_EmployeeFiles.setColumnWidth(2, 120);
  sheet_EmployeeFiles.setColumnWidth(3, 150);
  sheet_EmployeeFiles.setColumnWidth(4, 180);
  sheet_EmployeeFiles.setColumnWidth(5, 120);
  sheet_EmployeeFiles.setColumnWidth(6, 160);
  sheet_EmployeeFiles.setColumnWidth(7, 160);
  sheet_EmployeeFiles.setColumnWidth(8, 180);
  sheet_EmployeeFiles.setColumnWidth(9, 90);
  sheet_EmployeeFiles.setColumnWidth(10, 80);

  const demoData_EmployeeFiles = [["FIL-001","EMP-001","ID_CARD","DRIVE_FILE_001","VERIFIED","2024-01-15T08:00:00Z","2024-01-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["FIL-002","EMP-002","HEALTH_CERT","DRIVE_FILE_002","VERIFIED","2024-03-01T08:00:00Z","2024-03-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["FIL-003","EMP-004","DEGREE","","MISSING","2026-07-01T08:00:00Z","2026-07-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_EmployeeFiles.length > 0) {
    sheet_EmployeeFiles.getRange(2, 1, demoData_EmployeeFiles.length, 10).setValues(demoData_EmployeeFiles);
  }

  const rule_EmployeeFiles_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ID_CARD","DEGREE","HEALTH_CERT","CONTRACT","RESUME"], true).build();
  sheet_EmployeeFiles.getRange('C2:C1000').setDataValidation(rule_EmployeeFiles_C2C1000);

  const rule_EmployeeFiles_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SUBMITTED","MISSING","VERIFIED"], true).build();
  sheet_EmployeeFiles.getRange('E2:E1000').setDataValidation(rule_EmployeeFiles_E2E1000);

  // =========================================================================
  // TAB: EmergencyContacts
  // =========================================================================
  const sheet_EmergencyContacts = sheets['EmergencyContacts'];
  sheet_EmergencyContacts.clear();
  sheet_EmergencyContacts.setTabColor('#43A047');
  sheet_EmergencyContacts.setFrozenRows(1);

  const headers_EmergencyContacts = ["ID","EmployeeID","Name","Relationship","Phone","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_EmergencyContacts.getRange(1, 1, 1, 10).setValues([headers_EmergencyContacts])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_EmergencyContacts.setRowHeight(1, 32);
  sheet_EmergencyContacts.setColumnWidth(1, 120);
  sheet_EmergencyContacts.setColumnWidth(2, 120);
  sheet_EmergencyContacts.setColumnWidth(3, 200);
  sheet_EmergencyContacts.setColumnWidth(4, 140);
  sheet_EmergencyContacts.setColumnWidth(5, 130);
  sheet_EmergencyContacts.setColumnWidth(6, 160);
  sheet_EmergencyContacts.setColumnWidth(7, 160);
  sheet_EmergencyContacts.setColumnWidth(8, 180);
  sheet_EmergencyContacts.setColumnWidth(9, 90);
  sheet_EmergencyContacts.setColumnWidth(10, 80);

  const demoData_EmergencyContacts = [["EMC-001","EMP-001","Lê Thị Mai","VỢ/CHỒNG","0912345678","2024-01-15T08:00:00Z","2024-01-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EMC-002","EMP-002","Trần Văn Dũng","BỐ/MẸ","0987654321","2024-03-01T08:00:00Z","2024-03-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_EmergencyContacts.length > 0) {
    sheet_EmergencyContacts.getRange(2, 1, demoData_EmergencyContacts.length, 10).setValues(demoData_EmergencyContacts);
  }

  // =========================================================================
  // TAB: EmploymentEvents
  // =========================================================================
  const sheet_EmploymentEvents = sheets['EmploymentEvents'];
  sheet_EmploymentEvents.clear();
  sheet_EmploymentEvents.setTabColor('#FB8C00');
  sheet_EmploymentEvents.setFrozenRows(1);

  const headers_EmploymentEvents = ["ID","EmployeeID","Type","EffectiveDate","FromTeamID","ToTeamID","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_EmploymentEvents.getRange(1, 1, 1, 12).setValues([headers_EmploymentEvents])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_EmploymentEvents.setRowHeight(1, 32);
  sheet_EmploymentEvents.setColumnWidth(1, 120);
  sheet_EmploymentEvents.setColumnWidth(2, 120);
  sheet_EmploymentEvents.setColumnWidth(3, 140);
  sheet_EmploymentEvents.setColumnWidth(4, 110);
  sheet_EmploymentEvents.setColumnWidth(5, 140);
  sheet_EmploymentEvents.setColumnWidth(6, 140);
  sheet_EmploymentEvents.setColumnWidth(7, 240);
  sheet_EmploymentEvents.setColumnWidth(8, 160);
  sheet_EmploymentEvents.setColumnWidth(9, 160);
  sheet_EmploymentEvents.setColumnWidth(10, 180);
  sheet_EmploymentEvents.setColumnWidth(11, 90);
  sheet_EmploymentEvents.setColumnWidth(12, 80);

  const demoData_EmploymentEvents = [["EVT-001","EMP-003","TRANSFER","2025-01-01","HỖ TRỢ KỸ THUẬT","KỸ THUẬT","Điều chuyển sang khối Core R&D","2025-01-01T08:00:00Z","2025-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["EVT-002","EMP-006","RESIGN","2026-06-30","KỸ THUẬT","","Nghỉ việc theo nguyện vọng cá nhân","2026-06-30T17:00:00Z","2026-06-30T17:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_EmploymentEvents.length > 0) {
    sheet_EmploymentEvents.getRange(2, 1, demoData_EmploymentEvents.length, 12).setValues(demoData_EmploymentEvents);
  }
  sheet_EmploymentEvents.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: Compensation
  // =========================================================================
  const sheet_Compensation = sheets['Compensation'];
  sheet_Compensation.clear();
  sheet_Compensation.setTabColor('#6A1B9A');
  sheet_Compensation.setFrozenRows(1);

  const headers_Compensation = ["ID","EmployeeID","EffectiveFrom","Amount","AccessGroup","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Compensation.getRange(1, 1, 1, 10).setValues([headers_Compensation])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Compensation.setRowHeight(1, 32);
  sheet_Compensation.setColumnWidth(1, 120);
  sheet_Compensation.setColumnWidth(2, 120);
  sheet_Compensation.setColumnWidth(3, 120);
  sheet_Compensation.setColumnWidth(4, 160);
  sheet_Compensation.setColumnWidth(5, 180);
  sheet_Compensation.setColumnWidth(6, 160);
  sheet_Compensation.setColumnWidth(7, 160);
  sheet_Compensation.setColumnWidth(8, 180);
  sheet_Compensation.setColumnWidth(9, 90);
  sheet_Compensation.setColumnWidth(10, 80);

  const demoData_Compensation = [["CMP-001","EMP-001","2024-01-15",50000000,"HR_CONFIDENTIAL","2024-01-15T08:00:00Z","2024-01-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CMP-002","EMP-002","2024-03-01",35000000,"HR_CONFIDENTIAL","2024-03-01T08:00:00Z","2024-03-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CMP-003","EMP-003","2024-06-15",30000000,"HR_CONFIDENTIAL","2024-06-15T08:00:00Z","2024-06-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Compensation.length > 0) {
    sheet_Compensation.getRange(2, 1, demoData_Compensation.length, 10).setValues(demoData_Compensation);
  }
  sheet_Compensation.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');
  sheet_Compensation.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: SETTINGS
  // =========================================================================
  const setSheet = sheets['SETTINGS'];
  setSheet.clear();
  setSheet.setTabColor('#616161');
  try { setSheet.setHiddenGridlines(true); } catch(e) {}
  setSheet.getRange('A1:B1').merge().setValue('THIẾT LẬP THAM SỐ HỆ THỐNG')
    .setFontWeight('bold').setBackground('#424242').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  
  const setRows = [["Đơn vị quản trị nhân sự:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Múi giờ hệ thống:","Asia/Ho_Chi_Minh (GMT+7)"],["Định dạng ngày tháng:","YYYY-MM-DD"],["Thời gian cảnh báo hợp đồng sắp hết hạn:","30 ngày trước ngày đáo hạn"],["Quy định bảo mật lương:","Dữ liệu đãi ngộ giới hạn phân quyền AccessGroup = HR_CONFIDENTIAL"]];
  if (setRows.length > 0) {
    setSheet.getRange(2, 1, setRows.length, 2).setValues(setRows);
    setSheet.getRange('A2:A' + (setRows.length + 1)).setFontWeight('bold');
  }
  setSheet.setColumnWidth(1, 240);
  setSheet.setColumnWidth(2, 340);

  // =========================================================================
  // TAB 2: DASHBOARD PRO
  // =========================================================================
  const dashSheet = sheets['DASHBOARD'];
  dashSheet.clear();
  dashSheet.setTabColor('#2E7D32');
  try { dashSheet.setHiddenGridlines(true); } catch(e) {}

  try {
    dashSheet.getCharts().forEach(function(c) { dashSheet.removeChart(c); });
  } catch(e) {}

  // Banner Header
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH HỒ SƠ NHÂN SỰ & HỢP ĐỒNG (F12)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi quy mô nhân sự • Hợp đồng lao động • Cảnh báo đáo hạn • Quản lý tài liệu')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NHÂN SỰ ĐANG LÀM VIỆC
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NHÂN SỰ ĐANG LÀM VIỆC')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTIFS(Employees!$I$2:$I$1000, "ACTIVE", Employees!$N$2:$N$1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');
  dashSheet.getRange('A6:B6').merge().setValue('Active Headcount hiện tại (loại trừ đã nghỉ)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: HỢP ĐỒNG SẮP ĐÁO HẠN (30 NGÀY)
  dashSheet.getRange('C4:D4').merge().setValue('HỢP ĐỒNG SẮP ĐÁO HẠN (30 NGÀY)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(EmploymentContracts!$F$2:$F$1000, "<="&TODAY()+30, EmploymentContracts!$F$2:$F$1000, ">="&TODAY(), EmploymentContracts!$G$2:$G$1000, "<>TERMINATED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('C6:D6').merge().setValue('Cần tái ký hoặc thanh lý hợp đồng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 3: NHÂN SỰ THỬ VIỆC (PROBATION)
  dashSheet.getRange('E4:F4').merge().setValue('NHÂN SỰ THỬ VIỆC (PROBATION)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(Employees!$I$2:$I$1000, "PROBATION", Employees!$N$2:$N$1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Nhân sự đang trong giai đoạn thử thách')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

  // Card 4: HỒ SƠ CÒN THIẾU CẦN BỔ SUNG
  dashSheet.getRange('G4:H4').merge().setValue('HỒ SƠ CÒN THIẾU CẦN BỔ SUNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(EmployeeFiles!$E$2:$E$1000, "MISSING", EmployeeFiles!$J$2:$J$1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Bản sao giấy tờ chưa nộp đầy đủ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

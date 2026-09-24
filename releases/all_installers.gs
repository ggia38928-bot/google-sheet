/**
 * ============================================================================
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỔNG HỢP (22 SKUs BATCH 1, 2, 3, 4, 5 & 6)
 * ============================================================================
 * Danh sách 22 SKU thương mại sẵn sàng xuất xưởng:
 * - F01: Quản lý việc cá nhân & Ma trận Eisenhower (Năng suất)
 * - F02: Quản lý dự án, công việc đội nhóm & KPI (Quản trị dự án)
 * - F05: CRM Chăm sóc khách hàng & Pipeline phễu bán hàng (Khách hàng)
 * - F17: Sổ thu chi cá nhân / doanh nghiệp nhỏ & Dòng tiền Startup (Tài chính)
 * - F18: Quản lý kho cơ bản & Báo cáo Nhập - Xuất - Tồn (Kho vận)
 * - F19: Quản lý báo giá & phiên bản chào hàng (Thương mại & Báo giá)
 * - F20: Bán hàng & theo dõi đơn hàng đa kênh (Bán hàng & Đơn hàng)
 * - F21: Form nhập liệu & Phân quyền cấu hình (Nền tảng & Cấu hình)
 * - F24: Mini ERP Quản trị khép kín doanh nghiệp nhỏ (ERP & Vận hành)
 * - F30: Công nợ và phân bổ thanh toán (Tài chính & Công nợ)
 * - F34: Lập ngân sách doanh nghiệp (Kế hoạch tài chính & Dự toán)
 * - F48: Báo cáo chi phí, P&L và dòng tiền (Kế toán quản trị & Báo cáo P&L)
 * - F12: Quản lý hồ sơ nhân sự & hợp đồng lao động (Nhân sự)
 * - F13: Tuyển dụng & lịch phỏng vấn ứng viên (Tuyển dụng)
 * - F32: Chấm công & tổng hợp ca làm việc (Chấm công)
 * - F38: Quản lý nghỉ phép & số dư phép năm (Nghỉ phép)
 * - F09: Lịch lãnh đạo, cuộc họp và công tác (Lịch họp & Sự kiện)
 * - F10: Khách sạn, homestay và đặt phòng (Homestay & Khách sạn)
 * - F28: Lịch dịch vụ spa và phòng khám (Spa & Phòng khám)
 * - F07: Hợp đồng, phụ lục và phát sinh (Hợp đồng & Phụ lục)
 * - F08: Văn bản, hồ sơ và chỉ đạo (Văn thư & Hành chính)
 * - F26: Lớp học, điểm danh và học phí (Đào tạo & Giáo dục)
 * 
 * Hướng dẫn nhanh:
 * 1. Mở bất kỳ Google Sheet mới nào.
 * 2. Vào Tiện ích mở rộng (Extensions) > Apps Script.
 * 3. Dán toàn bộ file này vào Code.gs và nhấn Lưu (Ctrl + S).
 * 4. Tải lại trang tính (F5), chọn menu "⚡ MINH TEMPLATES FACTORY" và chọn template cần dựng.
 * ============================================================================
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES FACTORY')
    .addSubMenu(SpreadsheetApp.getUi().createMenu('📈 Bán hàng & Khách hàng')
      .addItem('💼 F05: CRM Chăm sóc KH & Pipeline', 'install_F05_SHEET')
      .addItem('📑 F19: Báo giá & Phiên bản Chào hàng', 'install_F19_SHEET')
      .addItem('🛒 F20: Đơn hàng Đa kênh (Shopee, TikTok...)', 'install_F20_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('🛎️ Dịch vụ & Đặt lịch hẹn')
      .addItem('📅 F09: Lịch lãnh đạo & Cuộc họp', 'install_F09_SHEET')
      .addItem('🏨 F10: Khách sạn, Homestay & Đặt phòng', 'install_F10_SHEET')
      .addItem('💆 F28: Dịch vụ Spa & Phòng khám', 'install_F28_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('📜 Hợp đồng, Văn bản & Đào tạo')
      .addItem('📝 F07: Hợp đồng, Phụ lục & Phát sinh', 'install_F07_SHEET')
      .addItem('🏛️ F08: Văn bản, Hồ sơ & Chỉ đạo', 'install_F08_SHEET')
      .addItem('🎓 F26: Lớp học, Điểm danh & Học phí', 'install_F26_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('💰 Tài chính, Ngân sách & P&L')
      .addItem('💵 F17: Sổ thu chi & Dòng tiền Startup', 'install_F17_SHEET')
      .addItem('⚖️ F30: Công nợ & Phân bổ thanh toán', 'install_F30_SHEET')
      .addItem('📊 F34: Lập ngân sách doanh nghiệp', 'install_F34_SHEET')
      .addItem('📑 F48: Báo cáo Chi phí, P&L & Dòng tiền', 'install_F48_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('🧑‍💼 Nhân sự & Chấm công')
      .addItem('👔 F12: Hồ sơ nhân sự & Hợp đồng LĐ', 'install_F12_SHEET')
      .addItem('🎯 F13: Tuyển dụng & Lịch phỏng vấn', 'install_F13_SHEET')
      .addItem('⏰ F32: Chấm công & Tổng hợp ca', 'install_F32_SHEET')
      .addItem('🏖️ F38: Quản lý nghỉ phép & Phép năm', 'install_F38_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('📦 Kho vận & Mini ERP')
      .addItem('📦 F18: Quản lý kho & Nhập Xuất Tồn', 'install_F18_SHEET')
      .addItem('🏢 F24: Mini ERP Doanh nghiệp vừa & nhỏ', 'install_F24_SHEET'))
    .addSubMenu(SpreadsheetApp.getUi().createMenu('🎯 Năng suất & Nền tảng')
      .addItem('✅ F01: Việc cá nhân & Ma trận Eisenhower', 'install_F01_SHEET')
      .addItem('👥 F02: Dự án Đội nhóm, Tiến độ & KPI', 'install_F02_SHEET')
      .addItem('⚙️ F21: Form nhập liệu & Phân quyền cấu hình', 'install_F21_SHEET'))
    .addToUi();
}

// ============================================================================
// INSTALLER SKU F01: QUẢN LÝ CÔNG VIỆC & MA TRẬN EISENHOWER
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F01 — Quản lý công việc & Ma trận Eisenhower
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F01_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF01Workbook(true);
}

function setupCleanTemplate() {
  initF01Workbook(false);
}

function initF01Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Tasks","Categories","TaskEvents","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ CÔNG VIỆC & MA TRẬN EISENHOWER (F01)')
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
  // TAB: Tasks
  // =========================================================================
  const sheet_Tasks = sheets['Tasks'];
  sheet_Tasks.clear();
  sheet_Tasks.setTabColor('#283593');
  sheet_Tasks.setFrozenRows(1);

  const headers_Tasks = ["ID","Title","OwnerEmail","Priority","StartDate","DueDate","Status","Progress","CompletedAt","DaysLate","CategoryID","Important","Urgent","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Tasks.getRange(1, 1, 1, 18).setValues([headers_Tasks])
    .setFontWeight('bold').setBackground('#283593').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Tasks.setRowHeight(1, 32);
  sheet_Tasks.setColumnWidth(1, 130);
  sheet_Tasks.setColumnWidth(2, 280);
  sheet_Tasks.setColumnWidth(3, 180);
  sheet_Tasks.setColumnWidth(4, 110);
  sheet_Tasks.setColumnWidth(5, 100);
  sheet_Tasks.setColumnWidth(6, 100);
  sheet_Tasks.setColumnWidth(7, 100);
  sheet_Tasks.setColumnWidth(8, 80);
  sheet_Tasks.setColumnWidth(9, 140);
  sheet_Tasks.setColumnWidth(10, 80);
  sheet_Tasks.setColumnWidth(11, 110);
  sheet_Tasks.setColumnWidth(12, 90);
  sheet_Tasks.setColumnWidth(13, 90);
  sheet_Tasks.setColumnWidth(14, 140);
  sheet_Tasks.setColumnWidth(15, 140);
  sheet_Tasks.setColumnWidth(16, 140);
  sheet_Tasks.setColumnWidth(17, 90);
  sheet_Tasks.setColumnWidth(18, 80);

  const demoData_Tasks = [["TSK-DEMO-01","Lập kế hoạch tài chính và ngân sách Quý 4","owner@minhtemplates.com","CAO","2026-09-01","2026-09-15","DOING",0.4,"","","CAT-WORK","TRUE","FALSE","2026-09-01T08:00:00Z","2026-09-04T10:00:00Z","owner@minhtemplates.com",2,"FALSE"],["TSK-DEMO-02","Nộp tờ khai thuế GTGT và quyết toán chi phí tháng 8","owner@minhtemplates.com","KHẨN CẤP","2026-08-25","2026-09-02","TODO",0,"","","CAT-WORK","TRUE","TRUE","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","owner@minhtemplates.com",1,"FALSE"],["TSK-DEMO-03","Khám sức khỏe tổng quát định kỳ tại bệnh viện","owner@minhtemplates.com","TRUNG BÌNH","2026-09-01","2026-09-05","DONE",1,"2026-09-05T09:30:00Z","","CAT-HEALTH","TRUE","FALSE","2026-09-01T08:00:00Z","2026-09-05T09:30:00Z","owner@minhtemplates.com",2,"FALSE"],["TSK-DEMO-04","Đăng ký khóa học nâng cao Google Apps Script & AppSheet","owner@minhtemplates.com","TRUNG BÌNH","2026-09-05","2026-09-20","TODO",0,"","","CAT-STUDY","FALSE","FALSE","2026-09-05T08:00:00Z","2026-09-05T08:00:00Z","owner@minhtemplates.com",1,"FALSE"],["TSK-DEMO-05","Mua sắm thiết bị văn phòng dự phòng không cấp thiết","owner@minhtemplates.com","THẤP","2026-08-28","2026-09-03","CANCELLED",0,"","","CAT-WORK","FALSE","FALSE","2026-08-28T08:00:00Z","2026-09-02T14:00:00Z","owner@minhtemplates.com",2,"FALSE"],["TSK-DEMO-06","Bảo dưỡng định kỳ xe ô tô công tác","owner@minhtemplates.com","TRUNG BÌNH","2026-09-02","2026-09-06","DOING",0.3,"","","CAT-PERSONAL","FALSE","TRUE","2026-09-02T08:00:00Z","2026-09-06T10:00:00Z","owner@minhtemplates.com",2,"FALSE"]];
  if (isDemo && demoData_Tasks.length > 0) {
    sheet_Tasks.getRange(2, 1, demoData_Tasks.length, 18).setValues(demoData_Tasks);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_Tasks.length > 0) {
    for (let r = 2; r <= demoData_Tasks.length + 1; r++) {
      sheet_Tasks.getRange(r, 10).setFormula('=IF(OR(A' + r + '="",F' + r + '="",G' + r + '="CANCELLED"),"",IF(G' + r + '="DONE",IF(I' + r + '="","",MAX(0,INT(I' + r + ')-F' + r + ')),MAX(0,TODAY()-F' + r + ')))');
    }
  }
  sheet_Tasks.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Tasks.getRange('H2:H1000').setNumberFormat('0.0%');
  sheet_Tasks.getRange('J2:J1000').setNumberFormat('#,##0');

  const rule_Tasks_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["THẤP","TRUNG BÌNH","CAO","KHẨN CẤP"], true).build();
  sheet_Tasks.getRange('D2:D1000').setDataValidation(rule_Tasks_D2D1000);

  const rule_Tasks_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","DOING","DONE","CANCELLED"], true).build();
  sheet_Tasks.getRange('G2:G1000').setDataValidation(rule_Tasks_G2G1000);

  const rule_Tasks_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_Tasks.getRange('L2:L1000').setDataValidation(rule_Tasks_L2L1000);

  const rule_Tasks_M2M1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_Tasks.getRange('M2:M1000').setDataValidation(rule_Tasks_M2M1000);

  const rule_Tasks_R2R1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_Tasks.getRange('R2:R1000').setDataValidation(rule_Tasks_R2R1000);

  // =========================================================================
  // TAB: Categories
  // =========================================================================
  const sheet_Categories = sheets['Categories'];
  sheet_Categories.clear();
  sheet_Categories.setTabColor('#9C27B0');
  sheet_Categories.setFrozenRows(1);

  const headers_Categories = ["ID","Name","Color","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Categories.getRange(1, 1, 1, 8).setValues([headers_Categories])
    .setFontWeight('bold').setBackground('#9C27B0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Categories.setRowHeight(1, 32);
  sheet_Categories.setColumnWidth(1, 110);
  sheet_Categories.setColumnWidth(2, 160);
  sheet_Categories.setColumnWidth(3, 100);
  sheet_Categories.setColumnWidth(4, 180);
  sheet_Categories.setColumnWidth(5, 180);
  sheet_Categories.setColumnWidth(6, 180);
  sheet_Categories.setColumnWidth(7, 90);
  sheet_Categories.setColumnWidth(8, 80);

  const demoData_Categories = [["CAT-WORK","Công việc","#1E88E5","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","system@minhtemplates.com",1,"FALSE"],["CAT-PERSONAL","Cá nhân","#43A047","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","system@minhtemplates.com",1,"FALSE"],["CAT-STUDY","Học tập","#FB8C00","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","system@minhtemplates.com",1,"FALSE"],["CAT-HEALTH","Sức khỏe","#E53935","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","system@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Categories.length > 0) {
    sheet_Categories.getRange(2, 1, demoData_Categories.length, 8).setValues(demoData_Categories);
  }

  // =========================================================================
  // TAB: TaskEvents
  // =========================================================================
  const sheet_TaskEvents = sheets['TaskEvents'];
  sheet_TaskEvents.clear();
  sheet_TaskEvents.setTabColor('#607D8B');
  sheet_TaskEvents.setFrozenRows(1);

  const headers_TaskEvents = ["ID","TaskID","EventType","EventAt","ActorEmail","Notes","CreatedAt"];
  sheet_TaskEvents.getRange(1, 1, 1, 7).setValues([headers_TaskEvents])
    .setFontWeight('bold').setBackground('#607D8B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TaskEvents.setRowHeight(1, 32);
  sheet_TaskEvents.setColumnWidth(1, 110);
  sheet_TaskEvents.setColumnWidth(2, 130);
  sheet_TaskEvents.setColumnWidth(3, 120);
  sheet_TaskEvents.setColumnWidth(4, 160);
  sheet_TaskEvents.setColumnWidth(5, 180);
  sheet_TaskEvents.setColumnWidth(6, 260);
  sheet_TaskEvents.setColumnWidth(7, 160);

  const demoData_TaskEvents = [["EV-01","TSK-DEMO-01","STATUS_CHANGE","2026-09-04T10:00:00Z","owner@minhtemplates.com","Chuyển sang DOING","2026-09-04T10:00:00Z"]];
  if (isDemo && demoData_TaskEvents.length > 0) {
    sheet_TaskEvents.getRange(2, 1, demoData_TaskEvents.length, 7).setValues(demoData_TaskEvents);
  }

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
  
  const setRows = [["Tên đơn vị quản lý:","Minh Personal Productivity"],["Múi giờ chuẩn:","Asia/Ho_Chi_Minh"],["Định dạng ngày:","yyyy-mm-dd"],["Mục tiêu tuần hoàn thành:",15]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU KHIỂN QUẢN LÝ CÔNG VIỆC & HIỆU SUẤT CÁ NHÂN (F01)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Cập nhật tự động thời gian thực • Ma trận Eisenhower • Cảnh báo quá hạn tức thì')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỶ LỆ HOÀN THÀNH
  dashSheet.getRange('A4:B4').merge().setValue('TỶ LỆ HOÀN THÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('A5:B5').merge().setValue('=IFERROR(COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DONE")/COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"<>CANCELLED"),0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('A6:B6').merge().setValue('Loại bỏ việc hủy • Mục tiêu: 100%')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  // Card 2: ĐANG QUÁ HẠN
  dashSheet.getRange('C4:D4').merge().setValue('ĐANG QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!F2:F10001,">0",Tasks!F2:F10001,"<"&TODAY(),Tasks!G2:G10001,"<>DONE",Tasks!G2:G10001,"<>CANCELLED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');
  dashSheet.getRange('C6:D6').merge().setValue('Cần xử lý ngay')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 3: ĐANG LÀM (DOING)
  dashSheet.getRange('E4:F4').merge().setValue('ĐANG LÀM (DOING)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"DOING")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Đang triển khai')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 4: CẦN LÀM (TODO)
  dashSheet.getRange('G4:H4').merge().setValue('CẦN LÀM (TODO)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(Tasks!A2:A10001,"<>",Tasks!G2:G10001,"TODO")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Chờ bắt đầu')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 5: ĐÃ HOÀN TẤT (DONE)
  dashSheet.getRange('I4:J4').merge().setValue('ĐÃ HOÀN TẤT (DONE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIF(Tasks!G2:G10001,"DONE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0');
  dashSheet.getRange('I6:J6').merge().setValue('Đã kết thúc')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: THỐNG KÊ TRẠNG THÁI CÔNG VIỆC
  dashSheet.getRange('A8:B8').merge().setValue('THỐNG KÊ TRẠNG THÁI CÔNG VIỆC')
    .setFontWeight('bold').setFontColor('#263238').setBackground('#ECEFF1');
  dashSheet.getRange(9, 1, 1, 2).setValues([["Trạng thái","Số lượng"]])
    .setFontWeight('bold').setBackground('#CFD8DC').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 3; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['DONE', 'DOING', 'TODO', 'CANCELLED'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(Tasks!$G$2:$G$10001, "' + ['DONE', 'DOING', 'TODO', 'CANCELLED'][i] + '")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B13').setNumberFormat('#,##0');

  // Chart: Tỷ lệ Phân bổ Trạng thái
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('A9:B13'))
      .setPosition(8, 4, 0, 0)
      .setOption('title', 'Tỷ lệ Phân bổ Trạng thái')
      .setOption('width', 380)
      .setOption('height', 240)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F02: QUẢN LÝ DỰ ÁN, ĐỘI NHÓM & KPI
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F02 — Quản lý Dự án, Đội nhóm & KPI
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F02_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF02Workbook(true);
}

function setupCleanTemplate() {
  initF02Workbook(false);
}

function initF02Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","PROJECTS","TASKS","TIMESHEETS","KPI_PLANS","MEMBERS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ DỰ ÁN, ĐỘI NHÓM & KPI (F02)')
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
  // TAB: PROJECTS
  // =========================================================================
  const sheet_PROJECTS = sheets['PROJECTS'];
  sheet_PROJECTS.clear();
  sheet_PROJECTS.setTabColor('#1A237E');
  sheet_PROJECTS.setFrozenRows(1);

  const headers_PROJECTS = ["Mã dự án","Tên dự án","Trưởng dự án (PM)","Ngày bắt đầu","Hạn hoàn thành","Ngân sách (VND)","Chi phí thực tế (VND)","Tiến độ trọng số (%)","Trạng thái","Ghi chú mục tiêu"];
  sheet_PROJECTS.getRange(1, 1, 1, 10).setValues([headers_PROJECTS])
    .setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PROJECTS.setRowHeight(1, 32);
  sheet_PROJECTS.setColumnWidth(1, 100);
  sheet_PROJECTS.setColumnWidth(2, 240);
  sheet_PROJECTS.setColumnWidth(3, 160);
  sheet_PROJECTS.setColumnWidth(4, 110);
  sheet_PROJECTS.setColumnWidth(5, 110);
  sheet_PROJECTS.setColumnWidth(6, 160);
  sheet_PROJECTS.setColumnWidth(7, 160);
  sheet_PROJECTS.setColumnWidth(8, 140);
  sheet_PROJECTS.setColumnWidth(9, 140);
  sheet_PROJECTS.setColumnWidth(10, 220);

  const demoData_PROJECTS = [["PRJ-01","Nâng cấp Nền tảng E-Commerce v2.0","nguyen.minh@company.vn","2026-08-01","2026-10-31",150000000,85000000,"","ĐANG THỰC HIỆN","Tối ưu tốc độ tải trang và tích hợp cổng VietQR"],["PRJ-02","Triển khai ERP Mini Doanh Nghiệp","tran.thao@company.vn","2026-09-01","2026-11-30",200000000,45000000,"","ĐANG THỰC HIỆN","Số hóa toàn bộ quy trình Bán hàng - Mua hàng - Kho"],["PRJ-03","Chiến dịch Quảng bá Mùa Thu 2026","le.long@company.vn","2026-08-15","2026-09-15",50000000,48000000,"","HOÀN THÀNH","Đạt mục tiêu thu hút 10.000 khách hàng tiềm năng"]];
  if (isDemo && demoData_PROJECTS.length > 0) {
    sheet_PROJECTS.getRange(2, 1, demoData_PROJECTS.length, 10).setValues(demoData_PROJECTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PROJECTS.length > 0) {
    for (let r = 2; r <= demoData_PROJECTS.length + 1; r++) {
      sheet_PROJECTS.getRange(r, 8).setFormula('=IF(SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + ') > 0, SUMPRODUCT((TASKS!$B$2:$B$1000=A' + r + ') * TASKS!$G$2:$G$1000 * TASKS!$H$2:$H$1000) / SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + '), 0)');
    }
  }
  sheet_PROJECTS.getRange('D2:E100').setNumberFormat('yyyy-mm-dd');
  sheet_PROJECTS.getRange('F2:G100').setNumberFormat('#,##0 "₫"');
  sheet_PROJECTS.getRange('H2:H100').setNumberFormat('0.0%');

  const rule_PROJECTS_I2I100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHƯA BẮT ĐẦU","ĐANG THỰC HIỆN","TẠM DỪNG","HOÀN THÀNH","HỦY"], true).build();
  sheet_PROJECTS.getRange('I2:I100').setDataValidation(rule_PROJECTS_I2I100);

  // =========================================================================
  // TAB: TASKS
  // =========================================================================
  const sheet_TASKS = sheets['TASKS'];
  sheet_TASKS.clear();
  sheet_TASKS.setTabColor('#0D47A1');
  sheet_TASKS.setFrozenRows(1);

  const headers_TASKS = ["Mã việc","Mã dự án","Tiêu đề đầu việc","Người phụ trách","Ngày bắt đầu","Hạn hoàn thành","Trọng số (1-5)","Tiến độ cá nhân (%)","Trạng thái","Mức ưu tiên","Ngày hoàn thành thực tế","Đánh giá hạn"];
  sheet_TASKS.getRange(1, 1, 1, 12).setValues([headers_TASKS])
    .setFontWeight('bold').setBackground('#0D47A1').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TASKS.setRowHeight(1, 32);
  sheet_TASKS.setColumnWidth(1, 100);
  sheet_TASKS.setColumnWidth(2, 100);
  sheet_TASKS.setColumnWidth(3, 260);
  sheet_TASKS.setColumnWidth(4, 180);
  sheet_TASKS.setColumnWidth(5, 105);
  sheet_TASKS.setColumnWidth(6, 105);
  sheet_TASKS.setColumnWidth(7, 110);
  sheet_TASKS.setColumnWidth(8, 140);
  sheet_TASKS.setColumnWidth(9, 130);
  sheet_TASKS.setColumnWidth(10, 110);
  sheet_TASKS.setColumnWidth(11, 120);
  sheet_TASKS.setColumnWidth(12, 120);

  const demoData_TASKS = [["TSK-001","PRJ-01","Thiết kế kiến trúc cơ sở dữ liệu Postgres","nguyen.minh@company.vn","2026-08-01","2026-08-15",3,1,"DONE","CAO","2026-08-14",""],["TSK-002","PRJ-01","Phát triển API Module Giỏ hàng & Thanh toán","tran.thao@company.vn","2026-08-16","2026-09-15",4,0.75,"IN_PROGRESS","CAO","",""],["TSK-003","PRJ-01","Tích hợp thanh toán SePay / VietQR tự động","pham.nam@company.vn","2026-09-01","2026-09-20",3,0.4,"IN_PROGRESS","CAO","",""],["TSK-004","PRJ-02","Khảo sát quy trình nghiệp vụ kế toán kho","tran.thao@company.vn","2026-09-01","2026-09-10",2,1,"DONE","TRUNG BÌNH","2026-09-09",""],["TSK-005","PRJ-02","Viết tài liệu đặc tả yêu cầu người dùng (PRD)","nguyen.minh@company.vn","2026-09-11","2026-09-25",3,0.5,"IN_PROGRESS","TRUNG BÌNH","",""]];
  if (isDemo && demoData_TASKS.length > 0) {
    sheet_TASKS.getRange(2, 1, demoData_TASKS.length, 12).setValues(demoData_TASKS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_TASKS.length > 0) {
    for (let r = 2; r <= demoData_TASKS.length + 1; r++) {
      sheet_TASKS.getRange(r, 12).setFormula('=IF(I' + r + '="DONE", IF(K' + r + '<=F' + r + ', "ĐÚNG HẠN", "TRỄ HẠN"), IF(TODAY()>F' + r + ', "QUÁ HẠN", "ĐANG CHẠY"))');
    }
  }
  sheet_TASKS.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_TASKS.getRange('H2:H1000').setNumberFormat('0.0%');
  sheet_TASKS.getRange('K2:K1000').setNumberFormat('yyyy-mm-dd');

  const rule_TASKS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["1","2","3","4","5"], true).build();
  sheet_TASKS.getRange('G2:G1000').setDataValidation(rule_TASKS_G2G1000);

  const rule_TASKS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","IN_PROGRESS","IN_REVIEW","DONE","CANCELLED"], true).build();
  sheet_TASKS.getRange('I2:I1000').setDataValidation(rule_TASKS_I2I1000);

  const rule_TASKS_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CAO","TRUNG BÌNH","THẤP"], true).build();
  sheet_TASKS.getRange('J2:J1000').setDataValidation(rule_TASKS_J2J1000);

  // =========================================================================
  // TAB: TIMESHEETS
  // =========================================================================
  const sheet_TIMESHEETS = sheets['TIMESHEETS'];
  sheet_TIMESHEETS.clear();
  sheet_TIMESHEETS.setTabColor('#004D40');
  sheet_TIMESHEETS.setFrozenRows(1);

  const headers_TIMESHEETS = ["Mã log","Mã việc","Nhân sự","Ngày làm việc","Số giờ làm (h)","Nội dung công việc chi tiết"];
  sheet_TIMESHEETS.getRange(1, 1, 1, 6).setValues([headers_TIMESHEETS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TIMESHEETS.setRowHeight(1, 32);
  sheet_TIMESHEETS.setColumnWidth(1, 100);
  sheet_TIMESHEETS.setColumnWidth(2, 100);
  sheet_TIMESHEETS.setColumnWidth(3, 180);
  sheet_TIMESHEETS.setColumnWidth(4, 110);
  sheet_TIMESHEETS.setColumnWidth(5, 120);
  sheet_TIMESHEETS.setColumnWidth(6, 320);

  const demoData_TIMESHEETS = [["LOG-01","TSK-001","nguyen.minh@company.vn","2026-08-10",6.5,"Thiết kế sơ đồ ERD các bảng đơn hàng và kho"],["LOG-02","TSK-002","tran.thao@company.vn","2026-09-02",8,"Viết controller xử lý webhook SePay"],["LOG-03","TSK-003","pham.nam@company.vn","2026-09-03",7,"Tạo mã QR động theo chuẩn NAPAS 247"],["LOG-04","TSK-004","tran.thao@company.vn","2026-09-05",5,"Phỏng vấn trưởng bộ phận kho vận"]];
  if (isDemo && demoData_TIMESHEETS.length > 0) {
    sheet_TIMESHEETS.getRange(2, 1, demoData_TIMESHEETS.length, 6).setValues(demoData_TIMESHEETS);
  }
  sheet_TIMESHEETS.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_TIMESHEETS.getRange('E2:E1000').setNumberFormat('0.0 "giờ"');

  // =========================================================================
  // TAB: KPI_PLANS
  // =========================================================================
  const sheet_KPI_PLANS = sheets['KPI_PLANS'];
  sheet_KPI_PLANS.clear();
  sheet_KPI_PLANS.setTabColor('#4A148C');
  sheet_KPI_PLANS.setFrozenRows(1);

  const headers_KPI_PLANS = ["Mã chỉ tiêu","Nhân viên","Kỳ đánh giá","Tiêu chí KPI","ĐVT","Mục tiêu (Target)","Trọng số (%)","Chiều đo lường","Thực tế đạt (Actual)","Tỷ lệ hoàn thành (%)","Điểm KPI quy đổi"];
  sheet_KPI_PLANS.getRange(1, 1, 1, 11).setValues([headers_KPI_PLANS])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_KPI_PLANS.setRowHeight(1, 32);
  sheet_KPI_PLANS.setColumnWidth(1, 100);
  sheet_KPI_PLANS.setColumnWidth(2, 180);
  sheet_KPI_PLANS.setColumnWidth(3, 110);
  sheet_KPI_PLANS.setColumnWidth(4, 220);
  sheet_KPI_PLANS.setColumnWidth(5, 80);
  sheet_KPI_PLANS.setColumnWidth(6, 130);
  sheet_KPI_PLANS.setColumnWidth(7, 110);
  sheet_KPI_PLANS.setColumnWidth(8, 150);
  sheet_KPI_PLANS.setColumnWidth(9, 140);
  sheet_KPI_PLANS.setColumnWidth(10, 140);
  sheet_KPI_PLANS.setColumnWidth(11, 130);

  const demoData_KPI_PLANS = [["KPI-01","nguyen.minh@company.vn","Quý 3/2026","Tỷ lệ hoàn thành task đúng hạn","%",0.9,0.4,"CÀNG CAO CÀNG TỐT",0.95,"",""],["KPI-02","nguyen.minh@company.vn","Quý 3/2026","Số lượng bài viết kỹ thuật/tài liệu","Bài",4,0.2,"CÀNG CAO CÀNG TỐT",5,"",""],["KPI-03","tran.thao@company.vn","Quý 3/2026","Số lỗi phát sinh sau release (Bug count)","Bug",2,0.3,"CÀNG THẤP CÀNG TỐT",1,"",""],["KPI-04","tran.thao@company.vn","Quý 3/2026","Số giờ làm việc hữu ích log trên Timesheet","Giờ",160,0.4,"CÀNG CAO CÀNG TỐT",168,"",""]];
  if (isDemo && demoData_KPI_PLANS.length > 0) {
    sheet_KPI_PLANS.getRange(2, 1, demoData_KPI_PLANS.length, 11).setValues(demoData_KPI_PLANS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_KPI_PLANS.length > 0) {
    for (let r = 2; r <= demoData_KPI_PLANS.length + 1; r++) {
      sheet_KPI_PLANS.getRange(r, 10).setFormula('=IF(H' + r + '="CÀNG CAO CÀNG TỐT", I' + r + ' / F' + r + ', IF(I' + r + '>0, F' + r + ' / I' + r + ', 1))');
      sheet_KPI_PLANS.getRange(r, 11).setFormula('=J' + r + ' * G' + r + ' * 100');
    }
  }
  sheet_KPI_PLANS.getRange('G2:G100').setNumberFormat('0.0%');
  sheet_KPI_PLANS.getRange('J2:J100').setNumberFormat('0.0%');
  sheet_KPI_PLANS.getRange('K2:K100').setNumberFormat('0.00');

  const rule_KPI_PLANS_H2H100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CÀNG CAO CÀNG TỐT","CÀNG THẤP CÀNG TỐT"], true).build();
  sheet_KPI_PLANS.getRange('H2:H100').setDataValidation(rule_KPI_PLANS_H2H100);

  // =========================================================================
  // TAB: MEMBERS
  // =========================================================================
  const sheet_MEMBERS = sheets['MEMBERS'];
  sheet_MEMBERS.clear();
  sheet_MEMBERS.setTabColor('#37474F');
  sheet_MEMBERS.setFrozenRows(1);

  const headers_MEMBERS = ["Mã nhân sự","Họ và tên","Email","Vai trò / Phòng ban","Số việc đang giữ","Điểm KPI trung bình"];
  sheet_MEMBERS.getRange(1, 1, 1, 6).setValues([headers_MEMBERS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_MEMBERS.setRowHeight(1, 32);
  sheet_MEMBERS.setColumnWidth(1, 100);
  sheet_MEMBERS.setColumnWidth(2, 200);
  sheet_MEMBERS.setColumnWidth(3, 200);
  sheet_MEMBERS.setColumnWidth(4, 160);
  sheet_MEMBERS.setColumnWidth(5, 130);
  sheet_MEMBERS.setColumnWidth(6, 150);

  const demoData_MEMBERS = [["MEM-01","Nguyễn Hoàng Minh","nguyen.minh@company.vn","Tech Lead / PM","",""],["MEM-02","Trần Thị Thu Thảo","tran.thao@company.vn","Senior Developer","",""],["MEM-03","Phạm Hoàng Nam","pham.nam@company.vn","Backend Engineer","",""]];
  if (isDemo && demoData_MEMBERS.length > 0) {
    sheet_MEMBERS.getRange(2, 1, demoData_MEMBERS.length, 6).setValues(demoData_MEMBERS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_MEMBERS.length > 0) {
    for (let r = 2; r <= demoData_MEMBERS.length + 1; r++) {
      sheet_MEMBERS.getRange(r, 5).setFormula('=COUNTIFS(TASKS!$D$2:$D$1000, C' + r + ', TASKS!$I$2:$I$1000, "<>DONE", TASKS!$I$2:$I$1000, "<>CANCELLED")');
      sheet_MEMBERS.getRange(r, 6).setFormula('=IF(COUNTIF(KPI_PLANS!$B$2:$B$100, C' + r + ') > 0, AVERAGEIF(KPI_PLANS!$B$2:$B$100, C' + r + ', KPI_PLANS!$K$2:$K$100), 0)');
    }
  }
  sheet_MEMBERS.getRange('F2:F100').setNumberFormat('0.0');

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
  
  const setRows = [["Tên tổ chức / Đội nhóm:","MINH PRODUCT ENGINEERING TEAM"],["Kỳ theo dõi dự án:","Quý 3 & 4 / 2026"],["Giờ làm việc tiêu chuẩn / ngày:",8],["Trưởng ban thẩm định KPI:","Nguyễn Hoàng Minh - Giám Đốc Kỹ Thuật"],["Quy ước trọng số công việc:","1 (Nhẹ) - 3 (Tiêu chuẩn) - 5 (Rất quan trọng)"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH DỰ ÁN ĐỘI NHÓM & HIỆU SUẤT KPI (F02)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tiến độ trọng số thời gian thực • Cảnh báo trễ hạn • Đánh giá hiệu suất nhân sự')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG DỰ ÁN ĐANG HOẠT ĐỘNG
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG DỰ ÁN ĐANG HOẠT ĐỘNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1A237E').setHorizontalAlignment('center').setBackground('#E8EAF6');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTIF(PROJECTS!$I$2:$I$100, "ĐANG THỰC HIỆN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#283593').setHorizontalAlignment('center').setBackground('#E8EAF6')
    .setNumberFormat('#,##0 " dự án"');
  dashSheet.getRange('A6:B6').merge().setValue('Dự án đang trong giai đoạn triển khai')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1A237E').setHorizontalAlignment('center').setBackground('#E8EAF6');

  // Card 2: TIẾN ĐỘ TRỌNG SỐ TRUNG BÌNH
  dashSheet.getRange('C4:D4').merge().setValue('TIẾN ĐỘ TRỌNG SỐ TRUNG BÌNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=AVERAGE(PROJECTS!$H$2:$H$100)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('0.0%');
  dashSheet.getRange('C6:D6').merge().setValue('Tiến độ trung bình toàn bộ dự án')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: ĐẦU VIỆC ĐANG BỊ QUÁ HẠN
  dashSheet.getRange('E4:F4').merge().setValue('ĐẦU VIỆC ĐANG BỊ QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIF(TASKS!$L$2:$L$1000, "QUÁ HẠN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 " việc"');
  dashSheet.getRange('E6:F6').merge().setValue('Cần can thiệp gấp để đảm bảo timeline')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 4: TỶ LỆ HOÀN THÀNH ĐÚNG HẠN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ HOÀN THÀNH ĐÚNG HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('G5:H5').merge().setValue('=IF(COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN") > 0, COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") / (COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN")), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('G6:H6').merge().setValue('ĐÚNG HẠN / (ĐÚNG HẠN + TRỄ HẠN)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  // Card 5: TỔNG SỐ GIỜ LÀM ĐÃ GHI NHẬN
  dashSheet.getRange('I4:J4').merge().setValue('TỔNG SỐ GIỜ LÀM ĐÃ GHI NHẬN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('I5:J5').merge().setValue('=SUM(TIMESHEETS!$E$2:$E$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('#,##0.0 " giờ"');
  dashSheet.getRange('I6:J6').merge().setValue('Tổng thời gian lao động đã log')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI TIẾN ĐỘ TRỌNG SỐ VÀ NGÂN SÁCH DỰ ÁN
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI TIẾN ĐỘ TRỌNG SỐ VÀ NGÂN SÁCH DỰ ÁN')
    .setFontWeight('bold').setFontColor('#1A237E').setBackground('#C5CAE9');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã dự án","Tên dự án","Ngân sách (VND)","Chi phí (VND)","Tiến độ"]])
    .setFontWeight('bold').setBackground('#3949AB').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 4; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(PROJECTS!A' + i + '<>"","PROJECTS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(PROJECTS!B' + i + '<>"","PROJECTS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(PROJECTS!F' + i + '<>"","PROJECTS!F' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(PROJECTS!G' + i + '<>"","PROJECTS!G' + i + '","")');
    dashSheet.getRange(r, 5).setFormula('=IF(PROJECTS!H' + i + '<>"","PROJECTS!H' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('C10:D13').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E10:E13').setNumberFormat('0.0%');

  // Chart: Tiến Độ Các Dự Án Hiện Tại
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.BAR)
      .addRange(dashSheet.getRange('A9:E12'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Tiến Độ Các Dự Án Hiện Tại')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F05: CRM CHĂM SÓC KHÁCH HÀNG & PIPELINE BÁN HÀNG
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F05 — CRM Chăm sóc khách hàng & Pipeline bán hàng
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F05_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF05Workbook(true);
}

function setupCleanTemplate() {
  initF05Workbook(false);
}

function initF05Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","DEALS","CUSTOMERS","ACTIVITIES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — CRM CHĂM SÓC KHÁCH HÀNG & PIPELINE BÁN HÀNG (F05)')
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
  // TAB: DEALS
  // =========================================================================
  const sheet_DEALS = sheets['DEALS'];
  sheet_DEALS.clear();
  sheet_DEALS.setTabColor('#E65100');
  sheet_DEALS.setFrozenRows(1);

  const headers_DEALS = ["Mã Deal","Tiêu đề cơ hội","Mã KH","Tên khách hàng","Phụ trách","Giai đoạn (Stage)","Giá trị kỳ vọng (VND)","Xác suất","Giá trị trọng số (VND)","Dự kiến ngày chốt","Ngày chốt thực tế","Lý do Thắng/Thua"];
  sheet_DEALS.getRange(1, 1, 1, 12).setValues([headers_DEALS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_DEALS.setRowHeight(1, 32);
  sheet_DEALS.setColumnWidth(1, 95);
  sheet_DEALS.setColumnWidth(2, 240);
  sheet_DEALS.setColumnWidth(3, 95);
  sheet_DEALS.setColumnWidth(4, 180);
  sheet_DEALS.setColumnWidth(5, 190);
  sheet_DEALS.setColumnWidth(6, 130);
  sheet_DEALS.setColumnWidth(7, 160);
  sheet_DEALS.setColumnWidth(8, 90);
  sheet_DEALS.setColumnWidth(9, 160);
  sheet_DEALS.setColumnWidth(10, 130);
  sheet_DEALS.setColumnWidth(11, 130);
  sheet_DEALS.setColumnWidth(12, 280);

  const demoData_DEALS = [["DEAL-01","Triển khai phần mềm ERP Lite","CUST-01","Nguyễn Văn An","sales1@minhtemplates.com","THẮNG",85000000,1,"","2026-09-05","2026-09-05","Giải pháp đáp ứng đúng tiến độ và ngân sách"],["DEAL-02","Cung cấp hệ thống CRM & Đào tạo","CUST-02","Trần Thị Bích","sales2@minhtemplates.com","THẮNG",45000000,1,"","2026-09-08","2026-09-08","Khách đánh giá cao giao diện dễ dùng"],["DEAL-03","Hợp đồng bảo trì hệ thống hàng năm","CUST-03","Hoàng Minh Cường","sales1@minhtemplates.com","THUA",30000000,0,"","2026-09-07","2026-09-07","Khách hoãn ngân sách sang năm sau"],["DEAL-04","Tư vấn chuyển đổi số doanh nghiệp","CUST-04","Phạm Hải Đăng","sales3@minhtemplates.com","BÁO GIÁ",60000000,0.6,"","2026-09-25","","Đang thương lượng điều khoản thanh toán"],["DEAL-05","Gói thiết kế Dashboard quản trị","CUST-05","Vũ Quỳnh Nga","sales2@minhtemplates.com","TIẾP CẬN",25000000,0.3,"","2026-09-28","","Đã demo tính năng cho ban giám đốc"],["DEAL-06","Nâng cấp phân hệ kho nâng cao","CUST-01","Nguyễn Văn An","sales1@minhtemplates.com","MỚI",35000000,0.1,"","2026-10-15","","Khách quan tâm phân hệ kiểm kê tự động"]];
  if (isDemo && demoData_DEALS.length > 0) {
    sheet_DEALS.getRange(2, 1, demoData_DEALS.length, 12).setValues(demoData_DEALS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_DEALS.length > 0) {
    for (let r = 2; r <= demoData_DEALS.length + 1; r++) {
      sheet_DEALS.getRange(r, 9).setFormula('=ROUND(G' + r + ' * H' + r + ', 0)');
    }
  }
  sheet_DEALS.getRange('G2:G10001').setNumberFormat('#,##0 "₫"');
  sheet_DEALS.getRange('H2:H10001').setNumberFormat('0%');
  sheet_DEALS.getRange('I2:I10001').setNumberFormat('#,##0 "₫"');
  sheet_DEALS.getRange('J2:K10001').setNumberFormat('yyyy-mm-dd');

  const rule_DEALS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["MỚI","TIẾP CẬN","BÁO GIÁ","THẮNG","THUA"], true).build();
  sheet_DEALS.getRange('F2:F1000').setDataValidation(rule_DEALS_F2F1000);

  // =========================================================================
  // TAB: CUSTOMERS
  // =========================================================================
  const sheet_CUSTOMERS = sheets['CUSTOMERS'];
  sheet_CUSTOMERS.clear();
  sheet_CUSTOMERS.setTabColor('#01579B');
  sheet_CUSTOMERS.setFrozenRows(1);

  const headers_CUSTOMERS = ["Mã KH","Tên khách hàng","Số điện thoại","Email liên hệ","Công ty / Doanh nghiệp","Nguồn khách","Phân loại","Người phụ trách"];
  sheet_CUSTOMERS.getRange(1, 1, 1, 8).setValues([headers_CUSTOMERS])
    .setFontWeight('bold').setBackground('#01579B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CUSTOMERS.setRowHeight(1, 32);
  sheet_CUSTOMERS.setColumnWidth(1, 100);
  sheet_CUSTOMERS.setColumnWidth(2, 200);
  sheet_CUSTOMERS.setColumnWidth(3, 130);
  sheet_CUSTOMERS.setColumnWidth(4, 200);
  sheet_CUSTOMERS.setColumnWidth(5, 240);
  sheet_CUSTOMERS.setColumnWidth(6, 120);
  sheet_CUSTOMERS.setColumnWidth(7, 120);
  sheet_CUSTOMERS.setColumnWidth(8, 200);

  const demoData_CUSTOMERS = [["CUST-01","Nguyễn Văn An","0903112233","an.nguyen@anphat.vn","Công ty Cổ phần An Phát","Google Ads","VIP","sales1@minhtemplates.com"],["CUST-02","Trần Thị Bích","0912445566","bich.tran@tana.com","Tập đoàn Cơ Khí Tân Á","Giới thiệu","VIP","sales2@minhtemplates.com"],["CUST-03","Hoàng Minh Cường","0988776655","cuong.hoang@greentech.vn","Kiến Trúc Xanh GreenTech","Facebook","Tiềm năng","sales1@minhtemplates.com"],["CUST-04","Phạm Hải Đăng","0934112244","dang.pham@logistics.vn","Đăng Hải Logistics","Website","Tiềm năng","sales3@minhtemplates.com"],["CUST-05","Vũ Quỳnh Nga","0977223344","nga.vu@fashionstyle.com","Thời Trang Trẻ Song Nga","Facebook","Khách hàng cũ","sales2@minhtemplates.com"]];
  if (isDemo && demoData_CUSTOMERS.length > 0) {
    sheet_CUSTOMERS.getRange(2, 1, demoData_CUSTOMERS.length, 8).setValues(demoData_CUSTOMERS);
  }
  sheet_CUSTOMERS.getRange('C2:C1000').setNumberFormat('@');

  // =========================================================================
  // TAB: ACTIVITIES
  // =========================================================================
  const sheet_ACTIVITIES = sheets['ACTIVITIES'];
  sheet_ACTIVITIES.clear();
  sheet_ACTIVITIES.setTabColor('#4A148C');
  sheet_ACTIVITIES.setFrozenRows(1);

  const headers_ACTIVITIES = ["Mã HĐ","Ngày thực hiện","Mã KH","Tên khách hàng","Hình thức","Nội dung trao đổi chi tiết","Ngày hẹn tiếp theo","Trạng thái xử lý"];
  sheet_ACTIVITIES.getRange(1, 1, 1, 8).setValues([headers_ACTIVITIES])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ACTIVITIES.setRowHeight(1, 32);
  sheet_ACTIVITIES.setColumnWidth(1, 95);
  sheet_ACTIVITIES.setColumnWidth(2, 120);
  sheet_ACTIVITIES.setColumnWidth(3, 95);
  sheet_ACTIVITIES.setColumnWidth(4, 180);
  sheet_ACTIVITIES.setColumnWidth(5, 110);
  sheet_ACTIVITIES.setColumnWidth(6, 350);
  sheet_ACTIVITIES.setColumnWidth(7, 140);
  sheet_ACTIVITIES.setColumnWidth(8, 130);

  const demoData_ACTIVITIES = [["ACT-01","2026-09-02","CUST-01","Nguyễn Văn An","GẶP MẶT","Thảo luận ký kết hợp đồng ERP Lite tại văn phòng khách","2026-09-05","HOÀN THÀNH"],["ACT-02","2026-09-03","CUST-02","Trần Thị Bích","DEMO","Buổi demo online hệ thống CRM cho phòng kinh doanh","2026-09-08","HOÀN THÀNH"],["ACT-03","2026-09-04","CUST-03","Hoàng Minh Cường","GỌI ĐIỆN","Tư vấn gói bảo trì định kỳ, khách hẹn xem xét lại","2026-09-07","HOÀN THÀNH"],["ACT-04","2026-09-06","CUST-04","Phạm Hải Đăng","EMAIL","Gửi bảng báo giá chi tiết và lộ trình triển khai","2026-09-12","CHỜ XỬ LÝ"],["ACT-05","2026-09-08","CUST-05","Vũ Quỳnh Nga","ZALO","Gửi video giới thiệu mẫu dashboard mẫu cho khách duyệt","2026-09-15","CHỜ XỬ LÝ"]];
  if (isDemo && demoData_ACTIVITIES.length > 0) {
    sheet_ACTIVITIES.getRange(2, 1, demoData_ACTIVITIES.length, 8).setValues(demoData_ACTIVITIES);
  }
  sheet_ACTIVITIES.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');
  sheet_ACTIVITIES.getRange('G2:G10001').setNumberFormat('yyyy-mm-dd');

  const rule_ACTIVITIES_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["GỌI ĐIỆN","GẶP MẶT","EMAIL","DEMO","ZALO"], true).build();
  sheet_ACTIVITIES.getRange('E2:E1000').setDataValidation(rule_ACTIVITIES_E2E1000);

  const rule_ACTIVITIES_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["HOÀN THÀNH","CHỜ XỬ LÝ"], true).build();
  sheet_ACTIVITIES.getRange('H2:H1000').setDataValidation(rule_ACTIVITIES_H2H1000);

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
  
  const setRows = [["Tên đơn vị quản lý CRM:","Công ty TNHH Giải Pháp Số Minh"],["Đơn vị tiền tệ chuẩn:","VND"],["Mục tiêu doanh số tháng:",300000000],["Chu kỳ theo dõi pipeline:","30 ngày"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁN HÀNG & QUẢN TRỊ PIPELINE CRM (F05)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Tổng hợp phễu bán hàng • Tỷ lệ chốt đơn Win Rate • Cảnh báo lịch hẹn chăm sóc khách hàng tức thì')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: GIÁ TRỊ PHỄU ĐANG MỞ
  dashSheet.getRange('A4:B4').merge().setValue('GIÁ TRỊ PHỄU ĐANG MỞ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(DEALS!$G$2:$G$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng kỳ vọng các deal chưa đóng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: GIÁ TRỊ CÓ TRỌNG SỐ
  dashSheet.getRange('C4:D4').merge().setValue('GIÁ TRỊ CÓ TRỌNG SỐ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(DEALS!$I$2:$I$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Giá trị nhân với xác suất chốt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 3: TỶ LỆ CHỐT ĐƠN (WIN RATE)
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ CHỐT ĐƠN (WIN RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=IFERROR(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")/(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")+COUNTIF(DEALS!$F$2:$F$10001,"THUA")),0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('0.0%');
  dashSheet.getRange('E6:F6').merge().setValue('Thắng / (Thắng + Thua) đã chốt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: CƠ HỘI ĐANG THEO ĐUỔI
  dashSheet.getRange('G4:H4').merge().setValue('CƠ HỘI ĐANG THEO ĐUỔI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(DEALS!$A$2:$A$10001,"<>",DEALS!$F$2:$F$10001,"<>THẮNG",DEALS!$F$2:$F$10001,"<>THUA")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Số lượng Deal mở trong pipeline')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');

  // Card 5: LỊCH HẸN QUÁ HẠN
  dashSheet.getRange('I4:J4').merge().setValue('LỊCH HẸN QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(ACTIVITIES!$G$2:$G$10001,"<"&TODAY(),ACTIVITIES!$G$2:$G$10001,">0",ACTIVITIES!$H$2:$H$10001,"CHỜ XỬ LÝ")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');
  dashSheet.getRange('I6:J6').merge().setValue('Lịch hẹn trước hôm nay chưa xong')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: PHÂN BỔ SỐ LƯỢNG VÀ GIÁ TRỊ THEO GIAI ĐOẠN PHỄU
  dashSheet.getRange('A8:E8').merge().setValue('PHÂN BỔ SỐ LƯỢNG VÀ GIÁ TRỊ THEO GIAI ĐOẠN PHỄU')
    .setFontWeight('bold').setFontColor('#0D47A1').setBackground('#BBDEFB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Giai đoạn","Số lượng Deal","Tổng giá trị (VND)","Trọng số","Giá trị kỳ vọng"]])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 4; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '")');
    dashSheet.getRange(r, 3).setFormula('=SUMIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '", DEALS!$G$2:$G$10001)');
    dashSheet.getRange(r, 4).setFormula([0.1, 0.3, 0.6, 1.0, 0.0][i]);
    dashSheet.getRange(r, 5).setFormula('=ROUND(C' + r + ' * D' + r + ', 0)');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B14').setNumberFormat('#,##0');
  dashSheet.getRange('C10:C14').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('D10:D14').setNumberFormat('0%');
  dashSheet.getRange('E10:E14').setNumberFormat('#,##0 "₫"');

  // Chart: SỐ LƯỢNG CƠ HỘI BÁN HÀNG THEO GIAI ĐOẠN
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('A9:B14'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'SỐ LƯỢNG CƠ HỘI BÁN HÀNG THEO GIAI ĐOẠN')
      .setOption('width', 520)
      .setOption('height', 240)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F17: SỔ THU CHI & DÒNG TIỀN STARTUP
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F17 — Sổ thu chi & Dòng tiền Startup
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F17_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF17Workbook(true);
}

function setupCleanTemplate() {
  initF17Workbook(false);
}

function initF17Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","CASHBOOK","ACCOUNTS","CATEGORIES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — SỔ THU CHI & DÒNG TIỀN STARTUP (F17)')
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
  // TAB: CASHBOOK
  // =========================================================================
  const sheet_CASHBOOK = sheets['CASHBOOK'];
  sheet_CASHBOOK.clear();
  sheet_CASHBOOK.setTabColor('#E65100');
  sheet_CASHBOOK.setFrozenRows(1);

  const headers_CASHBOOK = ["Mã GD","Ngày ghi sổ","Loại giao dịch","TK Nguồn (Chi/Chuyển)","TK Đích (Thu/Chuyển)","Hạng mục","Đối tác / Người nhận","Số tiền (VND)","Diễn giải chi tiết","Trạng thái","Mã chứng từ gốc"];
  sheet_CASHBOOK.getRange(1, 1, 1, 11).setValues([headers_CASHBOOK])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CASHBOOK.setRowHeight(1, 32);
  sheet_CASHBOOK.setColumnWidth(1, 95);
  sheet_CASHBOOK.setColumnWidth(2, 105);
  sheet_CASHBOOK.setColumnWidth(3, 125);
  sheet_CASHBOOK.setColumnWidth(4, 200);
  sheet_CASHBOOK.setColumnWidth(5, 200);
  sheet_CASHBOOK.setColumnWidth(6, 220);
  sheet_CASHBOOK.setColumnWidth(7, 200);
  sheet_CASHBOOK.setColumnWidth(8, 140);
  sheet_CASHBOOK.setColumnWidth(9, 300);
  sheet_CASHBOOK.setColumnWidth(10, 110);
  sheet_CASHBOOK.setColumnWidth(11, 130);

  const demoData_CASHBOOK = [["TX-001","2026-09-01","THU","","Vietcombank Doanh Nghiệp","Doanh thu bán lẻ / Dịch vụ","Công ty Ánh Dương",45000000,"Thu tiền cung cấp dịch vụ công nghệ tháng 8","POSTED","HD-1029"],["TX-002","2026-09-02","THU","","Tiền mặt tại quỹ","Doanh thu bán lẻ / Dịch vụ","Khách lẻ Minh Trang",8500000,"Bán sản phẩm trực tiếp tại cửa hàng","POSTED","BL-8841"],["TX-003","2026-09-03","CHI","Vietcombank Doanh Nghiệp","","Chi phí Mặt bằng & Điện nước","BQL Tòa Nhà TechPark",22000000,"Thanh toán tiền thuê văn phòng tháng 9","POSTED","UNC-552"],["TX-004","2026-09-04","CHI","Vietcombank Doanh Nghiệp","","Chi phí Lương nhân viên","Đội ngũ kỹ thuật & sales",52000000,"Chuyển khoản lương kỳ 1","POSTED","UNC-553"],["TX-005","2026-09-05","CHUYỂN KHOẢN","Vietcombank Doanh Nghiệp","Tiền mặt tại quỹ","","Thủ quỹ Mai Anh",10000000,"Rút tiền mặt nhập quỹ chi tiêu khẩn cấp","POSTED","RUT-01"],["TX-006","2026-09-06","CHI","Tiền mặt tại quỹ","","Chi phí Tiếp khách & Văn phòng phẩm","Nhà sách Phương Nam",3200000,"Mua văn phòng phẩm và nước uống","POSTED","HĐ-441"],["TX-007","2026-09-07","THU","","Vietcombank Doanh Nghiệp","Doanh thu Hợp đồng tư vấn","Tập đoàn Hòa Phát Tech",70000000,"Tạm ứng hợp đồng số 45/HĐKT","POSTED","UNC-IN-99"],["TX-008","2026-09-08","CHI","Vietcombank Doanh Nghiệp","","Quảng cáo & Tiếp thị số","Google Ads Ireland",18500000,"Chi phí quảng cáo Google tháng 9","POSTED","VISA-091"],["TX-009","2026-09-09","CHUYỂN KHOẢN","Vietcombank Doanh Nghiệp","Ví điện tử Momo","","Tài khoản công ty",5000000,"Nạp tiền ví điện tử để thanh toán cước phí viễn thông","POSTED","NAP-02"],["TX-010","2026-09-10","CHI","Ví điện tử Momo","","Chi phí Vận hành cố định","VNPT Cước Internet",2400000,"Thanh toán cước cáp quang văn phòng","POSTED","MM-9921"],["TX-011","2026-09-11","THU","","Vietcombank Doanh Nghiệp","Doanh thu bán lẻ / Dịch vụ","Công ty Sao Mai",35000000,"Thanh toán đợt 2 dự án ERP Mini","POSTED","UNC-IN-100"],["TX-012","2026-09-12","CHI","Vietcombank Doanh Nghiệp","","Giá vốn hàng mua / Vật tư","Công ty Thiết Bị Mạng",28000000,"Mua linh kiện máy chủ dự phòng","POSTED","UNC-559"]];
  if (isDemo && demoData_CASHBOOK.length > 0) {
    sheet_CASHBOOK.getRange(2, 1, demoData_CASHBOOK.length, 11).setValues(demoData_CASHBOOK);
  }
  sheet_CASHBOOK.getRange('H2:H10001').setNumberFormat('#,##0 "₫"');
  sheet_CASHBOOK.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');

  const rule_CASHBOOK_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["THU","CHI","CHUYỂN KHOẢN"], true).build();
  sheet_CASHBOOK.getRange('C2:C1000').setDataValidation(rule_CASHBOOK_C2C1000);

  const rule_CASHBOOK_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['ACCOUNTS'].getRange('B2:B50'), true).build();
  sheet_CASHBOOK.getRange('D2:D1000').setDataValidation(rule_CASHBOOK_D2D1000);

  const rule_CASHBOOK_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['ACCOUNTS'].getRange('B2:B50'), true).build();
  sheet_CASHBOOK.getRange('E2:E1000').setDataValidation(rule_CASHBOOK_E2E1000);

  const rule_CASHBOOK_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['CATEGORIES'].getRange('B2:B50'), true).build();
  sheet_CASHBOOK.getRange('F2:F1000').setDataValidation(rule_CASHBOOK_F2F1000);

  const rule_CASHBOOK_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","DRAFT","CANCELLED"], true).build();
  sheet_CASHBOOK.getRange('J2:J1000').setDataValidation(rule_CASHBOOK_J2J1000);

  // =========================================================================
  // TAB: ACCOUNTS
  // =========================================================================
  const sheet_ACCOUNTS = sheets['ACCOUNTS'];
  sheet_ACCOUNTS.clear();
  sheet_ACCOUNTS.setTabColor('#01579B');
  sheet_ACCOUNTS.setFrozenRows(1);

  const headers_ACCOUNTS = ["Mã tài khoản","Tên tài khoản","Loại tài khoản","Số dư đầu kỳ (VND)","Số dư hiện tại (VND)","Tiền tệ","Trạng thái"];
  sheet_ACCOUNTS.getRange(1, 1, 1, 7).setValues([headers_ACCOUNTS])
    .setFontWeight('bold').setBackground('#01579B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ACCOUNTS.setRowHeight(1, 32);
  sheet_ACCOUNTS.setColumnWidth(1, 120);
  sheet_ACCOUNTS.setColumnWidth(2, 240);
  sheet_ACCOUNTS.setColumnWidth(3, 150);
  sheet_ACCOUNTS.setColumnWidth(4, 170);
  sheet_ACCOUNTS.setColumnWidth(5, 170);
  sheet_ACCOUNTS.setColumnWidth(6, 90);
  sheet_ACCOUNTS.setColumnWidth(7, 110);

  const demoData_ACCOUNTS = [["ACC-01","Tiền mặt tại quỹ","TIỀN MẶT",15000000,"","VND","ACTIVE"],["ACC-02","Vietcombank Doanh Nghiệp","NGÂN HÀNG",85000000,"","VND","ACTIVE"],["ACC-03","Techcombank Dự Phòng","NGÂN HÀNG",50000000,"","VND","ACTIVE"],["ACC-04","Ví điện tử Momo","VÍ ĐIỆN TỬ",5000000,"","VND","ACTIVE"]];
  if (isDemo && demoData_ACCOUNTS.length > 0) {
    sheet_ACCOUNTS.getRange(2, 1, demoData_ACCOUNTS.length, 7).setValues(demoData_ACCOUNTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_ACCOUNTS.length > 0) {
    for (let r = 2; r <= demoData_ACCOUNTS.length + 1; r++) {
      sheet_ACCOUNTS.getRange(r, 5).setFormula('=D' + r + ' + SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$E$2:$E$10001, B' + r + ', CASHBOOK!$J$2:$J$10001, "POSTED") - SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$D$2:$D$10001, B' + r + ', CASHBOOK!$J$2:$J$10001, "POSTED")');
    }
  }
  sheet_ACCOUNTS.getRange('D2:E100').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: CATEGORIES
  // =========================================================================
  const sheet_CATEGORIES = sheets['CATEGORIES'];
  sheet_CATEGORIES.clear();
  sheet_CATEGORIES.setTabColor('#4A148C');
  sheet_CATEGORIES.setFrozenRows(1);

  const headers_CATEGORIES = ["Mã hạng mục","Tên hạng mục","Phân loại","Nhóm ngân sách","Ngân sách tháng (VND)"];
  sheet_CATEGORIES.getRange(1, 1, 1, 5).setValues([headers_CATEGORIES])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CATEGORIES.setRowHeight(1, 32);
  sheet_CATEGORIES.setColumnWidth(1, 120);
  sheet_CATEGORIES.setColumnWidth(2, 260);
  sheet_CATEGORIES.setColumnWidth(3, 110);
  sheet_CATEGORIES.setColumnWidth(4, 180);
  sheet_CATEGORIES.setColumnWidth(5, 180);

  const demoData_CATEGORIES = [["CAT-01","Doanh thu bán lẻ / Dịch vụ","THU","Doanh thu chính",150000000],["CAT-02","Doanh thu Hợp đồng tư vấn","THU","Doanh thu dự án",80000000],["CAT-03","Thu hồi nợ / Khác","THU","Thu nhập khác",10000000],["CAT-04","Chi phí Mặt bằng & Điện nước","CHI","Vận hành cố định",25000000],["CAT-05","Chi phí Lương nhân viên","CHI","Nhân sự",60000000],["CAT-06","Quảng cáo & Tiếp thị số","CHI","Marketing",30000000],["CAT-07","Giá vốn hàng mua / Vật tư","CHI","Giá vốn",40000000],["CAT-08","Chi phí Tiếp khách & Văn phòng phẩm","CHI","Hành chính",8000000]];
  if (isDemo && demoData_CATEGORIES.length > 0) {
    sheet_CATEGORIES.getRange(2, 1, demoData_CATEGORIES.length, 5).setValues(demoData_CATEGORIES);
  }
  sheet_CATEGORIES.getRange('E2:E100').setNumberFormat('#,##0 "₫"');

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
  
  const setRows = [["Tên đơn vị / Chủ sở hữu:","Công ty TNHH Giải Pháp Số Minh"],["Đơn vị tiền tệ:","VND"],["Kỳ báo cáo bắt đầu:","2026-01-01"],["Kỳ báo cáo kết thúc:","2026-12-31"],["Ngưỡng cảnh báo số dư tối thiểu:",20000000]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH DÒNG TIỀN & SỔ THU CHI DOANH NGHIỆP (F17)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Số liệu tổng hợp tự động theo thời gian thực • Phân tách chuyển khoản nội bộ • Quản trị Runway & Burn Rate')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG THU KỲ NÀY
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG THU KỲ NÀY')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$C$2:$C$10001, "THU", CASHBOOK!$J$2:$J$10001, "POSTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Khoản thực thu ghi sổ (POSTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: TỔNG CHI KỲ NÀY
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG CHI KỲ NÀY')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(CASHBOOK!$H$2:$H$10001, CASHBOOK!$C$2:$C$10001, "CHI", CASHBOOK!$J$2:$J$10001, "POSTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Khoản thực chi đã duyệt (POSTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 3: DÒNG TIỀN THUẦN (NET)
  dashSheet.getRange('E4:F4').merge().setValue('DÒNG TIỀN THUẦN (NET)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('E5:F5').merge().setValue('=A5 - C5')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Thu kỳ này - Chi kỳ này')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 4: TỔNG SỐ DƯ TẤT CẢ VÍ
  dashSheet.getRange('G4:H4').merge().setValue('TỔNG SỐ DƯ TẤT CẢ VÍ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('G5:H5').merge().setValue('=SUM(ACCOUNTS!$E$2:$E$100)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Toàn bộ số dư khả dụng thực tế')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 5: RUNWAY DỰ KIẾN (THÁNG)
  dashSheet.getRange('I4:J4').merge().setValue('RUNWAY DỰ KIẾN (THÁNG)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('I5:J5').merge().setValue('=IF((C5 - A5) > 0, IFERROR(ROUND(G5 / (C5 - A5), 1), 0), "DƯƠNG TIỀN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#F3E5F5')
;
  dashSheet.getRange('I6:J6').merge().setValue('Số dư / Tốc độ đốt tiền (Net Burn)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG TỔNG HỢP SỐ DƯ VÀ THANH KHOẢN THEO TÀI KHOẢN
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG TỔNG HỢP SỐ DƯ VÀ THANH KHOẢN THEO TÀI KHOẢN')
    .setFontWeight('bold').setFontColor('#0D47A1').setBackground('#BBDEFB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã TK","Tên tài khoản","Loại ví","Số dư đầu kỳ","Số dư hiện tại"]])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 5; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(ACCOUNTS!A' + i + '<>"","ACCOUNTS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(ACCOUNTS!B' + i + '<>"","ACCOUNTS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(ACCOUNTS!C' + i + '<>"","ACCOUNTS!C' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(ACCOUNTS!D' + i + '<>"","ACCOUNTS!D' + i + '","")');
    dashSheet.getRange(r, 5).setFormula('=IF(ACCOUNTS!E' + i + '<>"","ACCOUNTS!E' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('D10:E15').setNumberFormat('#,##0 "₫"');

  // Chart: Cơ cấu chi phí thực tế
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('CATEGORIES!B2:B9'))
      .addRange(dashSheet.getRange('CATEGORIES!E2:E9'))
      .setPosition(17, 1, 0, 0)
      .setOption('title', 'Cơ cấu chi phí thực tế')
      .setOption('width', 550)
      .setOption('height', 280)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F18: QUẢN LÝ KHO CƠ BẢN & NHẬP XUẤT TỒN
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F18 — Quản lý kho cơ bản & Nhập Xuất Tồn
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F18_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF18Workbook(true);
}

function setupCleanTemplate() {
  initF18Workbook(false);
}

function initF18Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","STOCK_MOVEMENTS","PRODUCTS","WAREHOUSES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ KHO CƠ BẢN & NHẬP XUẤT TỒN (F18)')
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
  // TAB: STOCK_MOVEMENTS
  // =========================================================================
  const sheet_STOCK_MOVEMENTS = sheets['STOCK_MOVEMENTS'];
  sheet_STOCK_MOVEMENTS.clear();
  sheet_STOCK_MOVEMENTS.setTabColor('#BF360C');
  sheet_STOCK_MOVEMENTS.setFrozenRows(1);

  const headers_STOCK_MOVEMENTS = ["Mã phiếu","Ngày chứng từ","Loại phiếu","Mã SKU","Tên hàng hóa","Từ kho (Xuất/Chuyển)","Đến kho (Nhập/Chuyển)","Số lượng","Đơn giá vốn","Thành tiền (VND)","Trạng thái","Ghi chú nghiệp vụ"];
  sheet_STOCK_MOVEMENTS.getRange(1, 1, 1, 12).setValues([headers_STOCK_MOVEMENTS])
    .setFontWeight('bold').setBackground('#BF360C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_STOCK_MOVEMENTS.setRowHeight(1, 32);
  sheet_STOCK_MOVEMENTS.setColumnWidth(1, 95);
  sheet_STOCK_MOVEMENTS.setColumnWidth(2, 105);
  sheet_STOCK_MOVEMENTS.setColumnWidth(3, 125);
  sheet_STOCK_MOVEMENTS.setColumnWidth(4, 100);
  sheet_STOCK_MOVEMENTS.setColumnWidth(5, 250);
  sheet_STOCK_MOVEMENTS.setColumnWidth(6, 180);
  sheet_STOCK_MOVEMENTS.setColumnWidth(7, 180);
  sheet_STOCK_MOVEMENTS.setColumnWidth(8, 90);
  sheet_STOCK_MOVEMENTS.setColumnWidth(9, 130);
  sheet_STOCK_MOVEMENTS.setColumnWidth(10, 150);
  sheet_STOCK_MOVEMENTS.setColumnWidth(11, 110);
  sheet_STOCK_MOVEMENTS.setColumnWidth(12, 280);

  const demoData_STOCK_MOVEMENTS = [["PN-001","2026-09-01","NHẬP","SKU-001","Bàn phím cơ Không Dây K8 Pro","","Kho Tổng Miền Nam",20,1200000,"","POSTED","Nhập lô hàng chính hãng đợt đầu tháng"],["PN-002","2026-09-02","NHẬP","SKU-002","Chuột Ergonomic Master 3S","","Kho Tổng Miền Nam",15,1500000,"","POSTED","Nhập bổ sung kho tổng"],["PX-001","2026-09-03","XUẤT","SKU-001","Bàn phím cơ Không Dây K8 Pro","Kho Tổng Miền Nam","",8,1200000,"","POSTED","Xuất bán sỉ cho đại lý TechLand"],["PCK-01","2026-09-04","CHUYỂN KHO","SKU-001","Bàn phím cơ Không Dây K8 Pro","Kho Tổng Miền Nam","Kho Cửa Hàng Quận 1",5,1200000,"","POSTED","Điều chuyển hàng lên kệ trưng bày cửa hàng"],["PX-002","2026-09-05","XUẤT","SKU-002","Chuột Ergonomic Master 3S","Kho Tổng Miền Nam","",10,1500000,"","POSTED","Xuất bán đơn hàng dự án công ty Sao Mai"],["PN-003","2026-09-06","NHẬP","SKU-003","Màn hình Đồ họa 27 inch 4K","","Kho Tổng Miền Nam",6,6500000,"","POSTED","Nhập từ nhà phân phối Synnex FPT"],["PX-003","2026-09-07","XUẤT","SKU-003","Màn hình Đồ họa 27 inch 4K","Kho Tổng Miền Nam","",4,6500000,"","POSTED","Giao văn phòng thiết kế đồ họa Tân Bình"],["PX-004","2026-09-08","XUẤT","SKU-005","Tai nghe Chống ồn Không Dây Pro","Kho Tổng Miền Nam","",4,2200000,"","POSTED","Xuất bán lẻ cho khách VIP"],["PKK-01","2026-09-09","ĐIỀU CHỈNH","SKU-004","Ổ cứng SSD Di động 1TB Type-C","Kho Tổng Miền Nam","",-1,1600000,"","POSTED","Hao hụt kiểm kê do vỏ hộp biến dạng"],["PN-004","2026-09-10","NHẬP","SKU-006","Cáp sạc Nhanh 100W Bọc Dù 2m","","Kho Tổng Miền Nam",50,90000,"","POSTED","Nhập số lượng lớn phụ kiện cáp"]];
  if (isDemo && demoData_STOCK_MOVEMENTS.length > 0) {
    sheet_STOCK_MOVEMENTS.getRange(2, 1, demoData_STOCK_MOVEMENTS.length, 12).setValues(demoData_STOCK_MOVEMENTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_STOCK_MOVEMENTS.length > 0) {
    for (let r = 2; r <= demoData_STOCK_MOVEMENTS.length + 1; r++) {
      sheet_STOCK_MOVEMENTS.getRange(r, 10).setFormula('=ROUND(H' + r + ' * I' + r + ', 0)');
    }
  }
  sheet_STOCK_MOVEMENTS.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');
  sheet_STOCK_MOVEMENTS.getRange('H2:H10001').setNumberFormat('#,##0');
  sheet_STOCK_MOVEMENTS.getRange('I2:J10001').setNumberFormat('#,##0 "₫"');

  const rule_STOCK_MOVEMENTS_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NHẬP","XUẤT","CHUYỂN KHO","ĐIỀU CHỈNH"], true).build();
  sheet_STOCK_MOVEMENTS.getRange('C2:C1000').setDataValidation(rule_STOCK_MOVEMENTS_C2C1000);

  const rule_STOCK_MOVEMENTS_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['PRODUCTS'].getRange('A2:A50'), true).build();
  sheet_STOCK_MOVEMENTS.getRange('D2:D1000').setDataValidation(rule_STOCK_MOVEMENTS_D2D1000);

  const rule_STOCK_MOVEMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['WAREHOUSES'].getRange('B2:B20'), true).build();
  sheet_STOCK_MOVEMENTS.getRange('F2:F1000').setDataValidation(rule_STOCK_MOVEMENTS_F2F1000);

  const rule_STOCK_MOVEMENTS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheets['WAREHOUSES'].getRange('B2:B20'), true).build();
  sheet_STOCK_MOVEMENTS.getRange('G2:G1000').setDataValidation(rule_STOCK_MOVEMENTS_G2G1000);

  const rule_STOCK_MOVEMENTS_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","DRAFT","CANCELLED"], true).build();
  sheet_STOCK_MOVEMENTS.getRange('K2:K1000').setDataValidation(rule_STOCK_MOVEMENTS_K2K1000);

  // =========================================================================
  // TAB: PRODUCTS
  // =========================================================================
  const sheet_PRODUCTS = sheets['PRODUCTS'];
  sheet_PRODUCTS.clear();
  sheet_PRODUCTS.setTabColor('#004D40');
  sheet_PRODUCTS.setFrozenRows(1);

  const headers_PRODUCTS = ["Mã SKU","Tên hàng hóa","Nhóm hàng","ĐVT","Giá vốn (VND)","Giá bán (VND)","Tồn tối thiểu","Tồn đầu kỳ","Tổng Nhập","Tổng Xuất","Tồn hiện tại","Giá trị tồn (VND)","Trạng thái tồn"];
  sheet_PRODUCTS.getRange(1, 1, 1, 13).setValues([headers_PRODUCTS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PRODUCTS.setRowHeight(1, 32);
  sheet_PRODUCTS.setColumnWidth(1, 100);
  sheet_PRODUCTS.setColumnWidth(2, 260);
  sheet_PRODUCTS.setColumnWidth(3, 150);
  sheet_PRODUCTS.setColumnWidth(4, 80);
  sheet_PRODUCTS.setColumnWidth(5, 130);
  sheet_PRODUCTS.setColumnWidth(6, 130);
  sheet_PRODUCTS.setColumnWidth(7, 110);
  sheet_PRODUCTS.setColumnWidth(8, 110);
  sheet_PRODUCTS.setColumnWidth(9, 110);
  sheet_PRODUCTS.setColumnWidth(10, 110);
  sheet_PRODUCTS.setColumnWidth(11, 120);
  sheet_PRODUCTS.setColumnWidth(12, 160);
  sheet_PRODUCTS.setColumnWidth(13, 120);

  const demoData_PRODUCTS = [["SKU-001","Bàn phím cơ Không Dây K8 Pro","Phụ kiện máy tính","Cái",1200000,1850000,10,15,"","","","",""],["SKU-002","Chuột Ergonomic Master 3S","Phụ kiện máy tính","Cái",1500000,2200000,8,12,"","","","",""],["SKU-003","Màn hình Đồ họa 27 inch 4K","Màn hình","Chiếc",6500000,8900000,5,8,"","","","",""],["SKU-004","Ổ cứng SSD Di động 1TB Type-C","Lưu trữ","Cái",1600000,2400000,15,20,"","","","",""],["SKU-005","Tai nghe Chống ồn Không Dây Pro","Âm thanh","Cái",2200000,3200000,10,6,"","","","",""],["SKU-006","Cáp sạc Nhanh 100W Bọc Dù 2m","Dây cáp","Sợi",90000,190000,30,45,"","","","",""],["SKU-007","Giá đỡ Laptop Nhôm Công Thái Học","Phụ kiện máy tính","Cái",250000,450000,12,10,"","","","",""],["SKU-008","Củ sạc GaN 65W 3 Cổng Tiện Lợi","Củ sạc","Cái",350000,650000,15,18,"","","","",""]];
  if (isDemo && demoData_PRODUCTS.length > 0) {
    sheet_PRODUCTS.getRange(2, 1, demoData_PRODUCTS.length, 13).setValues(demoData_PRODUCTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PRODUCTS.length > 0) {
    for (let r = 2; r <= demoData_PRODUCTS.length + 1; r++) {
      sheet_PRODUCTS.getRange(r, 9).setFormula('=SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "NHẬP", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")');
      sheet_PRODUCTS.getRange(r, 10).setFormula('=SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "XUẤT", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")');
      sheet_PRODUCTS.getRange(r, 11).setFormula('=H' + r + ' + I' + r + ' - J' + r + ' + SUMIFS(STOCK_MOVEMENTS!$H$2:$H$10001, STOCK_MOVEMENTS!$D$2:$D$10001, A' + r + ', STOCK_MOVEMENTS!$C$2:$C$10001, "ĐIỀU CHỈNH", STOCK_MOVEMENTS!$K$2:$K$10001, "POSTED")');
      sheet_PRODUCTS.getRange(r, 12).setFormula('=MAX(0, K' + r + ') * E' + r);
      sheet_PRODUCTS.getRange(r, 13).setFormula('=IF(K' + r + '<=0, "HẾT HÀNG", IF(K' + r + '<=G' + r + ', "CẦN NHẬP", "ĐỦ TỒN"))');
    }
  }
  sheet_PRODUCTS.getRange('E2:F100').setNumberFormat('#,##0 "₫"');
  sheet_PRODUCTS.getRange('L2:L100').setNumberFormat('#,##0 "₫"');
  sheet_PRODUCTS.getRange('G2:K100').setNumberFormat('#,##0');

  // =========================================================================
  // TAB: WAREHOUSES
  // =========================================================================
  const sheet_WAREHOUSES = sheets['WAREHOUSES'];
  sheet_WAREHOUSES.clear();
  sheet_WAREHOUSES.setTabColor('#263238');
  sheet_WAREHOUSES.setFrozenRows(1);

  const headers_WAREHOUSES = ["Mã kho","Tên kho hàng","Địa điểm / Địa chỉ","Thủ kho phụ trách","Trạng thái"];
  sheet_WAREHOUSES.getRange(1, 1, 1, 5).setValues([headers_WAREHOUSES])
    .setFontWeight('bold').setBackground('#263238').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_WAREHOUSES.setRowHeight(1, 32);
  sheet_WAREHOUSES.setColumnWidth(1, 110);
  sheet_WAREHOUSES.setColumnWidth(2, 220);
  sheet_WAREHOUSES.setColumnWidth(3, 260);
  sheet_WAREHOUSES.setColumnWidth(4, 180);
  sheet_WAREHOUSES.setColumnWidth(5, 110);

  const demoData_WAREHOUSES = [["WH-01","Kho Tổng Miền Nam","Tân Bình, TP.HCM","Nguyễn Văn Hùng","ACTIVE"],["WH-02","Kho Cửa Hàng Quận 1","Quận 1, TP.HCM","Lê Thị Mai","ACTIVE"],["WH-03","Kho Dự Phòng & Bảo Hành","Bình Thạnh, TP.HCM","Trần Đình Trọng","ACTIVE"]];
  if (isDemo && demoData_WAREHOUSES.length > 0) {
    sheet_WAREHOUSES.getRange(2, 1, demoData_WAREHOUSES.length, 5).setValues(demoData_WAREHOUSES);
  }

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
  
  const setRows = [["Tên đơn vị quản lý kho:","Tổng Kho Phụ Kiện Công Nghệ Minh Tech"],["Đơn vị tiền tệ chuẩn:","VND"],["Ngày bắt đầu theo dõi kỳ:","2026-09-01"],["Ngày chốt kỳ kiểm kê:","2026-09-30"],["Quy tắc định giá xuất kho:","Bình quân gia quyền (Weighted Average)"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH KHO & THEO DÕI NHẬP - XUẤT - TỒN (F18)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Quản lý giá trị tồn kho thời gian thực • Cảnh báo cạn kho tự động • Kiểm soát luân chuyển hàng hóa')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIÁ TRỊ TỒN KHO
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIÁ TRỊ TỒN KHO')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUM(PRODUCTS!$L$2:$L$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Quy đổi theo đơn giá vốn nhập kho')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: TỔNG MÃ HÀNG (SKU)
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG MÃ HÀNG (SKU)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIF(PRODUCTS!$A$2:$A$1000,"<>")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');
  dashSheet.getRange('C6:D6').merge().setValue('Số lượng danh mục sản phẩm đang mở')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 3: SKU CẦN NHẬP GẤP
  dashSheet.getRange('E4:F4').merge().setValue('SKU CẦN NHẬP GẤP')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIF(PRODUCTS!$M$2:$M$1000,"CẦN NHẬP") + COUNTIF(PRODUCTS!$M$2:$M$1000,"HẾT HÀNG")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Tồn kho <= Định mức tối thiểu')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 4: TỔNG LƯỢNG NHẬP KỲ
  dashSheet.getRange('G4:H4').merge().setValue('TỔNG LƯỢNG NHẬP KỲ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('G5:H5').merge().setValue('=SUM(PRODUCTS!$I$2:$I$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Tổng số sản phẩm nhập vào kho')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 5: TỔNG LƯỢNG XUẤT KỲ
  dashSheet.getRange('I4:J4').merge().setValue('TỔNG LƯỢNG XUẤT KỲ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('I5:J5').merge().setValue('=SUM(PRODUCTS!$J$2:$J$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');
  dashSheet.getRange('I6:J6').merge().setValue('Tổng số sản phẩm xuất bán/chuyển')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG CẢNH BÁO MẶT HÀNG CHẠM ĐỊNH MỨC AN TOÀN (CẦN NHẬP)
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG CẢNH BÁO MẶT HÀNG CHẠM ĐỊNH MỨC AN TOÀN (CẦN NHẬP)')
    .setFontWeight('bold').setFontColor('#C62828').setBackground('#FFCDD2');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã SKU","Tên sản phẩm","Min Stock","Tồn thực tế","Trạng thái"]])
    .setFontWeight('bold').setBackground('#D32F2F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 6; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(PRODUCTS!A' + i + '<>"","PRODUCTS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(PRODUCTS!B' + i + '<>"","PRODUCTS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(PRODUCTS!G' + i + '<>"","PRODUCTS!G' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(PRODUCTS!K' + i + '<>"","PRODUCTS!K' + i + '","")');
    dashSheet.getRange(r, 5).setFormula('=IF(PRODUCTS!M' + i + '<>"","PRODUCTS!M' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('C10:D15').setNumberFormat('#,##0');

  // Chart: PHÂN BỔ GIÁ TRỊ TỒN KHO THEO MÃ HÀNG
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.BAR)
      .addRange(dashSheet.getRange('PRODUCTS!B2:B9'))
      .addRange(dashSheet.getRange('PRODUCTS!L2:L9'))
      .setPosition(17, 1, 0, 0)
      .setOption('title', 'PHÂN BỔ GIÁ TRỊ TỒN KHO THEO MÃ HÀNG')
      .setOption('width', 600)
      .setOption('height', 280)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F19: QUẢN LÝ BÁO GIÁ & PHIÊN BẢN CHÀO HÀNG
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F19 — Quản lý Báo giá & Phiên bản Chào hàng
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F19_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF19Workbook(true);
}

function setupCleanTemplate() {
  initF19Workbook(false);
}

function initF19Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","QUOTES","QUOTE_ITEMS","CUSTOMERS","PRODUCTS","TERMS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ BÁO GIÁ & PHIÊN BẢN CHÀO HÀNG (F19)')
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
  // TAB: QUOTES
  // =========================================================================
  const sheet_QUOTES = sheets['QUOTES'];
  sheet_QUOTES.clear();
  sheet_QUOTES.setTabColor('#0277BD');
  sheet_QUOTES.setFrozenRows(1);

  const headers_QUOTES = ["Mã báo giá","Số báo giá","Tiêu đề chào hàng","Ngày lập","Hạn hiệu lực","Mã KH","Tên khách hàng","Phiên bản","Tiền tệ","Tổng trước thuế/CK (VND)","Chiết khấu (%)","Tiền chiết khấu (VND)","Thuế VAT (%)","Tiền thuế (VND)","Tổng thanh toán (VND)","Trạng thái","Sales phụ trách","Ghi chú điều khoản"];
  sheet_QUOTES.getRange(1, 1, 1, 18).setValues([headers_QUOTES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_QUOTES.setRowHeight(1, 32);
  sheet_QUOTES.setColumnWidth(1, 110);
  sheet_QUOTES.setColumnWidth(2, 130);
  sheet_QUOTES.setColumnWidth(3, 220);
  sheet_QUOTES.setColumnWidth(4, 105);
  sheet_QUOTES.setColumnWidth(5, 105);
  sheet_QUOTES.setColumnWidth(6, 100);
  sheet_QUOTES.setColumnWidth(7, 240);
  sheet_QUOTES.setColumnWidth(8, 90);
  sheet_QUOTES.setColumnWidth(9, 80);
  sheet_QUOTES.setColumnWidth(10, 170);
  sheet_QUOTES.setColumnWidth(11, 110);
  sheet_QUOTES.setColumnWidth(12, 160);
  sheet_QUOTES.setColumnWidth(13, 110);
  sheet_QUOTES.setColumnWidth(14, 150);
  sheet_QUOTES.setColumnWidth(15, 180);
  sheet_QUOTES.setColumnWidth(16, 120);
  sheet_QUOTES.setColumnWidth(17, 160);
  sheet_QUOTES.setColumnWidth(18, 220);

  const demoData_QUOTES = [["BG-001","QUOTE-2026-001","Cung cấp thiết bị mạng văn phòng","2026-09-01","2026-09-30","CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","v1.0","VND",45000000,0.05,"",0.08,"","","ACCEPTED","Nguyễn Văn Minh","Thanh toán 50% tạm ứng, bảo hành 12 tháng"],["BG-002","QUOTE-2026-002","Gói phần mềm ERP Mini bản quyền","2026-09-03","2026-09-25","CUST-02","Tập đoàn Công Nghệ Viễn Đông","v1.1","VND",80000000,0.1,"",0.1,"","","ACCEPTED","Trần Thị Thu Thảo","Triển khai trong vòng 15 ngày làm việc"],["BG-003","QUOTE-2026-003","Dịch vụ bảo trì hệ thống máy chủ","2026-09-05","2026-09-18","CUST-03","Công ty Xây Lắp Điện Đại Nam","v1.0","VND",28000000,0,"",0.08,"","","SENT","Nguyễn Văn Minh","Giá chưa bao gồm linh kiện thay thế ngoài gói"],["BG-004","QUOTE-2026-004","Tư vấn chuyển đổi số doanh nghiệp","2026-09-07","2026-09-15","CUST-04","Chuỗi Cửa Hàng Bách Hóa Xanh","v1.0","VND",50000000,0.05,"",0.08,"","","REJECTED","Trần Thị Thu Thảo","Khách hàng dời kế hoạch sang quý 4"],["BG-005","QUOTE-2026-005","Nâng cấp bảo mật mạng nội bộ","2026-08-10","2026-08-25","CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","v1.0","VND",18000000,0,"",0.08,"","","EXPIRED","Lê Hoàng Long","Hết hiệu lực báo giá do quá thời hạn phản hồi"]];
  if (isDemo && demoData_QUOTES.length > 0) {
    sheet_QUOTES.getRange(2, 1, demoData_QUOTES.length, 18).setValues(demoData_QUOTES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_QUOTES.length > 0) {
    for (let r = 2; r <= demoData_QUOTES.length + 1; r++) {
      sheet_QUOTES.getRange(r, 12).setFormula('=J' + r + ' * K' + r);
      sheet_QUOTES.getRange(r, 14).setFormula('=(J' + r + ' - L' + r + ') * M' + r);
      sheet_QUOTES.getRange(r, 15).setFormula('=J' + r + ' - L' + r + ' + N' + r);
    }
  }
  sheet_QUOTES.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd');
  sheet_QUOTES.getRange('J2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTES.getRange('K2:K1000').setNumberFormat('0.0%');
  sheet_QUOTES.getRange('L2:L1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTES.getRange('M2:M1000').setNumberFormat('0.0%');
  sheet_QUOTES.getRange('N2:O1000').setNumberFormat('#,##0 "₫"');

  const rule_QUOTES_P2P1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SENT","ACCEPTED","REJECTED","EXPIRED"], true).build();
  sheet_QUOTES.getRange('P2:P1000').setDataValidation(rule_QUOTES_P2P1000);

  const rule_QUOTES_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["v1.0","v1.1","v1.2","v2.0"], true).build();
  sheet_QUOTES.getRange('H2:H1000').setDataValidation(rule_QUOTES_H2H1000);

  // =========================================================================
  // TAB: QUOTE_ITEMS
  // =========================================================================
  const sheet_QUOTE_ITEMS = sheets['QUOTE_ITEMS'];
  sheet_QUOTE_ITEMS.clear();
  sheet_QUOTE_ITEMS.setTabColor('#2E7D32');
  sheet_QUOTE_ITEMS.setFrozenRows(1);

  const headers_QUOTE_ITEMS = ["Mã dòng","Mã báo giá","Mã SP/DV","Tên hàng hóa / Dịch vụ","ĐVT","Số lượng","Đơn giá niêm yết (VND)","Chiết khấu dòng (%)","Đơn giá sau CK (VND)","Thành tiền (VND)","Thuế suất (%)","Tiền thuế dòng (VND)","Tổng cộng dòng (VND)","Ghi chú thông số"];
  sheet_QUOTE_ITEMS.getRange(1, 1, 1, 14).setValues([headers_QUOTE_ITEMS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_QUOTE_ITEMS.setRowHeight(1, 32);
  sheet_QUOTE_ITEMS.setColumnWidth(1, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(2, 110);
  sheet_QUOTE_ITEMS.setColumnWidth(3, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(4, 260);
  sheet_QUOTE_ITEMS.setColumnWidth(5, 70);
  sheet_QUOTE_ITEMS.setColumnWidth(6, 80);
  sheet_QUOTE_ITEMS.setColumnWidth(7, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(8, 120);
  sheet_QUOTE_ITEMS.setColumnWidth(9, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(10, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(11, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(12, 140);
  sheet_QUOTE_ITEMS.setColumnWidth(13, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(14, 200);

  const demoData_QUOTE_ITEMS = [["QI-001","BG-001","PROD-01","Thiết bị định tuyến Router Cisco C1111","Cái",2,10000000,0.05,"","",0.08,"","","Bảo hành chính hãng 2 năm"],["QI-002","BG-001","PROD-02","Switch chia mạng 24 Port Gigabit PoE","Cái",1,25000000,0.05,"","",0.08,"","","Có tính năng quản lý VLAN"],["QI-003","BG-002","PROD-03","Gói bản quyền phần mềm ERP Core (5 User)","Gói",1,60000000,0.1,"","",0.1,"","","Thời hạn sử dụng vĩnh viễn"],["QI-004","BG-002","PROD-04","Dịch vụ đào tạo và cấu hình hệ thống","Buổi",4,5000000,0.1,"","",0.1,"","","Đào tạo trực tiếp tại văn phòng"],["QI-005","BG-003","PROD-05","Gói bảo trì máy chủ hàng tháng","Tháng",3,9333333,0,"","",0.08,"","","Hỗ trợ kỹ thuật 24/7 qua hotline"]];
  if (isDemo && demoData_QUOTE_ITEMS.length > 0) {
    sheet_QUOTE_ITEMS.getRange(2, 1, demoData_QUOTE_ITEMS.length, 14).setValues(demoData_QUOTE_ITEMS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_QUOTE_ITEMS.length > 0) {
    for (let r = 2; r <= demoData_QUOTE_ITEMS.length + 1; r++) {
      sheet_QUOTE_ITEMS.getRange(r, 9).setFormula('=G' + r + ' * (1 - H' + r + ')');
      sheet_QUOTE_ITEMS.getRange(r, 10).setFormula('=F' + r + ' * I' + r);
      sheet_QUOTE_ITEMS.getRange(r, 12).setFormula('=J' + r + ' * K' + r);
      sheet_QUOTE_ITEMS.getRange(r, 13).setFormula('=J' + r + ' + L' + r);
    }
  }
  sheet_QUOTE_ITEMS.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTE_ITEMS.getRange('H2:H1000').setNumberFormat('0.0%');
  sheet_QUOTE_ITEMS.getRange('I2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTE_ITEMS.getRange('K2:K1000').setNumberFormat('0.0%');
  sheet_QUOTE_ITEMS.getRange('L2:M1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: CUSTOMERS
  // =========================================================================
  const sheet_CUSTOMERS = sheets['CUSTOMERS'];
  sheet_CUSTOMERS.clear();
  sheet_CUSTOMERS.setTabColor('#6A1B9A');
  sheet_CUSTOMERS.setFrozenRows(1);

  const headers_CUSTOMERS = ["Mã KH","Tên công ty / Khách hàng","Người đại diện","SĐT","Email","Địa chỉ","Mã số thuế","Nhóm khách hàng","Hạn mức tín dụng (VND)"];
  sheet_CUSTOMERS.getRange(1, 1, 1, 9).setValues([headers_CUSTOMERS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CUSTOMERS.setRowHeight(1, 32);
  sheet_CUSTOMERS.setColumnWidth(1, 100);
  sheet_CUSTOMERS.setColumnWidth(2, 260);
  sheet_CUSTOMERS.setColumnWidth(3, 160);
  sheet_CUSTOMERS.setColumnWidth(4, 120);
  sheet_CUSTOMERS.setColumnWidth(5, 180);
  sheet_CUSTOMERS.setColumnWidth(6, 260);
  sheet_CUSTOMERS.setColumnWidth(7, 120);
  sheet_CUSTOMERS.setColumnWidth(8, 130);
  sheet_CUSTOMERS.setColumnWidth(9, 160);

  const demoData_CUSTOMERS = [["CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","Nguyễn Văn Tuấn","0903123456","tuan.nguyen@saomai.vn","Tầng 5, Tòa nhà Landmark 81, TP.HCM","0301234567","DOANH NGHIỆP",200000000],["CUST-02","Tập đoàn Công Nghệ Viễn Đông","Trần Thị Thu","0918765432","thutt@viendong.com","123 Hoàng Quốc Việt, Cầu Giấy, Hà Nội","0109876543","VIP",500000000],["CUST-03","Công ty Xây Lắp Điện Đại Nam","Phạm Hoàng Nam","0988112233","nam.ph@dainamcorp.vn","45 Lê Duẩn, Quận 1, TP.HCM","0312348899","DOANH NGHIỆP",150000000],["CUST-04","Chuỗi Cửa Hàng Bách Hóa Xanh","Lê Hồng Ánh","0934567890","anh.lh@bachhoaxanh.com","78 Võ Thị Sáu, Phường 6, Quận 3, TP.HCM","0309988776","ĐẠI LÝ",300000000]];
  if (isDemo && demoData_CUSTOMERS.length > 0) {
    sheet_CUSTOMERS.getRange(2, 1, demoData_CUSTOMERS.length, 9).setValues(demoData_CUSTOMERS);
  }
  sheet_CUSTOMERS.getRange('I2:I1000').setNumberFormat('#,##0 "₫"');

  const rule_CUSTOMERS_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["VIP","ĐẠI LÝ","DOANH NGHIỆP","CÁ NHÂN"], true).build();
  sheet_CUSTOMERS.getRange('H2:H1000').setDataValidation(rule_CUSTOMERS_H2H1000);

  // =========================================================================
  // TAB: PRODUCTS
  // =========================================================================
  const sheet_PRODUCTS = sheets['PRODUCTS'];
  sheet_PRODUCTS.clear();
  sheet_PRODUCTS.setTabColor('#E65100');
  sheet_PRODUCTS.setFrozenRows(1);

  const headers_PRODUCTS = ["Mã SP/DV","Tên sản phẩm / Dịch vụ","Đơn vị tính","Đơn giá niêm yết (VND)","Giá vốn ước tính (VND)","Thuế suất mặc định (%)","Trạng thái"];
  sheet_PRODUCTS.getRange(1, 1, 1, 7).setValues([headers_PRODUCTS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PRODUCTS.setRowHeight(1, 32);
  sheet_PRODUCTS.setColumnWidth(1, 110);
  sheet_PRODUCTS.setColumnWidth(2, 260);
  sheet_PRODUCTS.setColumnWidth(3, 90);
  sheet_PRODUCTS.setColumnWidth(4, 160);
  sheet_PRODUCTS.setColumnWidth(5, 160);
  sheet_PRODUCTS.setColumnWidth(6, 140);
  sheet_PRODUCTS.setColumnWidth(7, 110);

  const demoData_PRODUCTS = [["PROD-01","Thiết bị định tuyến Router Cisco C1111","Cái",10000000,7500000,0.08,"ACTIVE"],["PROD-02","Switch chia mạng 24 Port Gigabit PoE","Cái",25000000,19000000,0.08,"ACTIVE"],["PROD-03","Gói bản quyền phần mềm ERP Core (5 User)","Gói",60000000,20000000,0.1,"ACTIVE"],["PROD-04","Dịch vụ đào tạo và cấu hình hệ thống","Buổi",5000000,1500000,0.1,"ACTIVE"],["PROD-05","Gói bảo trì máy chủ hàng tháng","Tháng",10000000,3000000,0.08,"ACTIVE"]];
  if (isDemo && demoData_PRODUCTS.length > 0) {
    sheet_PRODUCTS.getRange(2, 1, demoData_PRODUCTS.length, 7).setValues(demoData_PRODUCTS);
  }
  sheet_PRODUCTS.getRange('D2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_PRODUCTS.getRange('F2:F1000').setNumberFormat('0.0%');

  const rule_PRODUCTS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","INACTIVE"], true).build();
  sheet_PRODUCTS.getRange('G2:G1000').setDataValidation(rule_PRODUCTS_G2G1000);

  // =========================================================================
  // TAB: TERMS
  // =========================================================================
  const sheet_TERMS = sheets['TERMS'];
  sheet_TERMS.clear();
  sheet_TERMS.setTabColor('#37474F');
  sheet_TERMS.setFrozenRows(1);

  const headers_TERMS = ["Mã điều khoản","Tiêu đề điều khoản","Nội dung chi tiết điều khoản thương mại"];
  sheet_TERMS.getRange(1, 1, 1, 3).setValues([headers_TERMS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TERMS.setRowHeight(1, 32);
  sheet_TERMS.setColumnWidth(1, 120);
  sheet_TERMS.setColumnWidth(2, 220);
  sheet_TERMS.setColumnWidth(3, 480);

  const demoData_TERMS = [["TERM-01","Điều kiện thanh toán","Tạm ứng 50% ngay sau khi ký hợp đồng/chấp nhận báo giá. 50% còn lại thanh toán trong vòng 7 ngày sau khi nghiệm thu bàn giao."],["TERM-02","Thời gian giao hàng & thi công","Giao hàng và thi công hoàn tất trong vòng 10 đến 15 ngày làm việc kể từ ngày nhận được tiền tạm ứng."],["TERM-03","Chính sách bảo hành & hỗ trợ","Thiết bị phần cứng bảo hành 24 tháng theo tiêu chuẩn nhà sản xuất. Phần mềm hỗ trợ kỹ thuật miễn phí 12 tháng đầu tiên."]];
  if (isDemo && demoData_TERMS.length > 0) {
    sheet_TERMS.getRange(2, 1, demoData_TERMS.length, 3).setValues(demoData_TERMS);
  }

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
  
  const setRows = [["Tên đơn vị báo giá:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Mã số thuế:","0316889988"],["Địa chỉ trụ sở:","Tòa nhà Innovation Hub, 180 Nguyễn Thị Minh Khai, Quận 3, TP.HCM"],["Hotline / Email:","0901 888 999 | contact@minhtemplates.vn"],["Tài khoản ngân hàng:","Vietcombank - 0071001234567 - NGUYEN HOANG MINH"],["Người ký duyệt:","Nguyễn Hoàng Minh - Giám Đốc"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁO GIÁ & HIỆU QUẢ CHÀO HÀNG (F19)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tổng giá trị báo giá • Phân tích tỷ lệ chốt Win Rate • Cảnh báo hiệu lực chào hàng')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIÁ TRỊ BÁO GIÁ ĐÃ GỬI
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIÁ TRỊ BÁO GIÁ ĐÃ GỬI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "<>DRAFT")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Toàn bộ báo giá đã gửi khách hàng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: DOANH SỐ ĐÃ CHỐT THÀNH CÔNG
  dashSheet.getRange('C4:D4').merge().setValue('DOANH SỐ ĐÃ CHỐT THÀNH CÔNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "ACCEPTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Báo giá khách đã duyệt (ACCEPTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: TỶ LỆ CHỐT ĐƠN (WIN RATE)
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ CHỐT ĐƠN (WIN RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IF(COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED") > 0, COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") / (COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED")), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('E6:F6').merge().setValue('ACCEPTED / (ACCEPTED + REJECTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  // Card 4: BÁO GIÁ CHỜ PHẢN HỒI
  dashSheet.getRange('G4:H4').merge().setValue('BÁO GIÁ CHỜ PHẢN HỒI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIF(QUOTES!$P$2:$P$1000, "SENT")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0 " báo giá"');
  dashSheet.getRange('G6:H6').merge().setValue('Đang đàm phán với khách hàng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

  // Card 5: BÁO GIÁ ĐÃ TỪ CHỐI / HỦY
  dashSheet.getRange('I4:J4').merge().setValue('BÁO GIÁ ĐÃ TỪ CHỐI / HỦY')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED") + COUNTIF(QUOTES!$P$2:$P$1000, "EXPIRED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 " báo giá"');
  dashSheet.getRange('I6:J6').merge().setValue('Không thành công hoặc quá hạn')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI BÁO GIÁ THEO TRẠNG THÁI VÀ GIÁ TRỊ
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI BÁO GIÁ THEO TRẠNG THÁI VÀ GIÁ TRỊ')
    .setFontWeight('bold').setFontColor('#0D47A1').setBackground('#BBDEFB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Trạng thái","Số lượng","Tổng giá trị (VND)","Tỷ lệ","Đánh giá"]])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 4; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '")');
    dashSheet.getRange(r, 3).setFormula('=SUMIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '", QUOTES!$O$2:$O$1000)');
    dashSheet.getRange(r, 4).setFormula('=IF($C$5>0, C' + r + '/$C$5, 0)');
    dashSheet.getRange(r, 5).setFormula(['Bản nháp', 'Đang chào', 'Thành công', 'Thất bại', 'Quá hạn'][i]);
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B14').setNumberFormat('#,##0');
  dashSheet.getRange('C10:C14').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('D10:D14').setNumberFormat('0.0%');

  // Chart: Cơ Cấu Giá Trị Báo Giá Theo Trạng Thái
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('A9:C14'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Cơ Cấu Giá Trị Báo Giá Theo Trạng Thái')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F20: BÁN HÀNG & QUẢN LÝ ĐƠN HÀNG ĐA KÊNH
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F20 — Bán hàng & Quản lý Đơn hàng Đa kênh
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F20_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF20Workbook(true);
}

function setupCleanTemplate() {
  initF20Workbook(false);
}

function initF20Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","ORDERS","ORDER_ITEMS","CHANNELS","PAYMENTS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — BÁN HÀNG & QUẢN LÝ ĐƠN HÀNG ĐA KÊNH (F20)')
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
  // TAB: ORDERS
  // =========================================================================
  const sheet_ORDERS = sheets['ORDERS'];
  sheet_ORDERS.clear();
  sheet_ORDERS.setTabColor('#E65100');
  sheet_ORDERS.setFrozenRows(1);

  const headers_ORDERS = ["Mã đơn hàng","Ngày đặt","Kênh bán","Mã KH","Tên người nhận","SĐT","Đơn vị VC","Mã vận đơn","Tiền hàng (VND)","Phí ship báo khách (VND)","Giảm giá/Voucher (VND)","Tổng thu khách (VND)","Phí sàn & VC thực tế (VND)","Doanh thu thuần (VND)","Hình thức TT","Trạng thái TT","Trạng thái đơn","Ghi chú"];
  sheet_ORDERS.getRange(1, 1, 1, 18).setValues([headers_ORDERS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ORDERS.setRowHeight(1, 32);
  sheet_ORDERS.setColumnWidth(1, 110);
  sheet_ORDERS.setColumnWidth(2, 105);
  sheet_ORDERS.setColumnWidth(3, 120);
  sheet_ORDERS.setColumnWidth(4, 100);
  sheet_ORDERS.setColumnWidth(5, 200);
  sheet_ORDERS.setColumnWidth(6, 120);
  sheet_ORDERS.setColumnWidth(7, 120);
  sheet_ORDERS.setColumnWidth(8, 140);
  sheet_ORDERS.setColumnWidth(9, 150);
  sheet_ORDERS.setColumnWidth(10, 160);
  sheet_ORDERS.setColumnWidth(11, 160);
  sheet_ORDERS.setColumnWidth(12, 160);
  sheet_ORDERS.setColumnWidth(13, 170);
  sheet_ORDERS.setColumnWidth(14, 160);
  sheet_ORDERS.setColumnWidth(15, 120);
  sheet_ORDERS.setColumnWidth(16, 130);
  sheet_ORDERS.setColumnWidth(17, 130);
  sheet_ORDERS.setColumnWidth(18, 200);

  const demoData_ORDERS = [["ORD-1001","2026-09-01","SHOPEE","CUST-01","Lê Văn Hùng","0912345678","Shopee Xpress","SPX-998811",850000,30000,50000,"",95000,"","COD","ĐÃ THANH TOÁN","HOÀN TẤT","Giao thành công"],["ORD-1002","2026-09-02","TIKTOK","CUST-02","Phạm Quỳnh Nga","0987654321","J&T Express","JT-554433",1200000,0,100000,"",145000,"","CHUYỂN KHOẢN","ĐÃ THANH TOÁN","HOÀN TẤT","Đã thanh toán trước qua cổng sàn"],["ORD-1003","2026-09-03","FACEBOOK","CUST-03","Hoàng Minh Tuấn","0933112233","GHTK","S189921",650000,35000,0,"",42000,"","COD","CHƯA THANH TOÁN","ĐANG GIAO","Đang vận chuyển giao ca chiều"],["ORD-1004","2026-09-04","WEBSITE","CUST-04","Nguyễn Bích Ngọc","0945678901","GHN","GHN-88129",2400000,0,200000,"",85000,"","CHUYỂN KHOẢN","ĐÃ THANH TOÁN","ĐANG XỬ LÝ","Đang đóng gói tại kho tổng"],["ORD-1005","2026-09-05","SHOPEE","CUST-05","Đỗ Thành Trung","0909090909","Shopee Xpress","SPX-776655",450000,25000,0,"",55000,"","COD","CHƯA THANH TOÁN","HOÀN HÀNG","Khách không nghe máy khi giao"]];
  if (isDemo && demoData_ORDERS.length > 0) {
    sheet_ORDERS.getRange(2, 1, demoData_ORDERS.length, 18).setValues(demoData_ORDERS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_ORDERS.length > 0) {
    for (let r = 2; r <= demoData_ORDERS.length + 1; r++) {
      sheet_ORDERS.getRange(r, 12).setFormula('=I' + r + ' + J' + r + ' - K' + r);
      sheet_ORDERS.getRange(r, 14).setFormula('=L' + r + ' - M' + r);
    }
  }
  sheet_ORDERS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_ORDERS.getRange('I2:N1000').setNumberFormat('#,##0 "₫"');

  const rule_ORDERS_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SHOPEE","TIKTOK","LAZADA","FACEBOOK","WEBSITE","CỬA HÀNG"], true).build();
  sheet_ORDERS.getRange('C2:C1000').setDataValidation(rule_ORDERS_C2C1000);

  const rule_ORDERS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["GHTK","GHN","Viettel Post","Shopee Xpress","J&T Express","Hỏa Tốc"], true).build();
  sheet_ORDERS.getRange('G2:G1000').setDataValidation(rule_ORDERS_G2G1000);

  const rule_ORDERS_O2O1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["COD","CHUYỂN KHOẢN","TIỀN MẶT","VÍ ĐIỆN TỬ"], true).build();
  sheet_ORDERS.getRange('O2:O1000').setDataValidation(rule_ORDERS_O2O1000);

  const rule_ORDERS_P2P1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHƯA THANH TOÁN","ĐÃ THANH TOÁN","MỘT PHẦN"], true).build();
  sheet_ORDERS.getRange('P2:P1000').setDataValidation(rule_ORDERS_P2P1000);

  const rule_ORDERS_Q2Q1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHỜ XÁC NHẬN","ĐANG XỬ LÝ","ĐANG GIAO","HOÀN TẤT","HOÀN HÀNG","ĐÃ HỦY"], true).build();
  sheet_ORDERS.getRange('Q2:Q1000').setDataValidation(rule_ORDERS_Q2Q1000);

  // =========================================================================
  // TAB: ORDER_ITEMS
  // =========================================================================
  const sheet_ORDER_ITEMS = sheets['ORDER_ITEMS'];
  sheet_ORDER_ITEMS.clear();
  sheet_ORDER_ITEMS.setTabColor('#1B5E20');
  sheet_ORDER_ITEMS.setFrozenRows(1);

  const headers_ORDER_ITEMS = ["Mã dòng","Mã đơn hàng","Mã SKU","Tên sản phẩm","ĐVT","Số lượng đặt","Số lượng đã giao","Đơn giá bán (VND)","Thành tiền (VND)","Giá vốn xuất kho (VND)","Lợi nhuận gộp (VND)"];
  sheet_ORDER_ITEMS.getRange(1, 1, 1, 11).setValues([headers_ORDER_ITEMS])
    .setFontWeight('bold').setBackground('#1B5E20').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ORDER_ITEMS.setRowHeight(1, 32);
  sheet_ORDER_ITEMS.setColumnWidth(1, 100);
  sheet_ORDER_ITEMS.setColumnWidth(2, 110);
  sheet_ORDER_ITEMS.setColumnWidth(3, 110);
  sheet_ORDER_ITEMS.setColumnWidth(4, 260);
  sheet_ORDER_ITEMS.setColumnWidth(5, 70);
  sheet_ORDER_ITEMS.setColumnWidth(6, 100);
  sheet_ORDER_ITEMS.setColumnWidth(7, 110);
  sheet_ORDER_ITEMS.setColumnWidth(8, 140);
  sheet_ORDER_ITEMS.setColumnWidth(9, 150);
  sheet_ORDER_ITEMS.setColumnWidth(10, 150);
  sheet_ORDER_ITEMS.setColumnWidth(11, 150);

  const demoData_ORDER_ITEMS = [["OI-001","ORD-1001","SKU-A01","Bàn phím cơ Bluetooth công thái học","Cái",1,1,850000,"",520000,""],["OI-002","ORD-1002","SKU-A02","Chuột không dây Silent chống mỏi","Cái",2,2,600000,"",360000,""],["OI-003","ORD-1003","SKU-A03","Tai nghe Gaming chống ồn chủ động","Cái",1,1,650000,"",400000,""],["OI-004","ORD-1004","SKU-A01","Bàn phím cơ Bluetooth công thái học","Cái",2,0,850000,"",520000,""],["OI-005","ORD-1004","SKU-A04","Giá đỡ laptop hợp kim nhôm xoay 360","Cái",2,0,350000,"",190000,""]];
  if (isDemo && demoData_ORDER_ITEMS.length > 0) {
    sheet_ORDER_ITEMS.getRange(2, 1, demoData_ORDER_ITEMS.length, 11).setValues(demoData_ORDER_ITEMS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_ORDER_ITEMS.length > 0) {
    for (let r = 2; r <= demoData_ORDER_ITEMS.length + 1; r++) {
      sheet_ORDER_ITEMS.getRange(r, 9).setFormula('=F' + r + ' * H' + r);
      sheet_ORDER_ITEMS.getRange(r, 11).setFormula('=I' + r + ' - (F' + r + ' * J' + r + ')');
    }
  }
  sheet_ORDER_ITEMS.getRange('H2:K1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: CHANNELS
  // =========================================================================
  const sheet_CHANNELS = sheets['CHANNELS'];
  sheet_CHANNELS.clear();
  sheet_CHANNELS.setTabColor('#01579B');
  sheet_CHANNELS.setFrozenRows(1);

  const headers_CHANNELS = ["Mã kênh","Tên kênh bán hàng","Tỷ lệ phí sàn (%)","Phí cố định/đơn (VND)","Trạng thái"];
  sheet_CHANNELS.getRange(1, 1, 1, 5).setValues([headers_CHANNELS])
    .setFontWeight('bold').setBackground('#01579B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CHANNELS.setRowHeight(1, 32);
  sheet_CHANNELS.setColumnWidth(1, 100);
  sheet_CHANNELS.setColumnWidth(2, 220);
  sheet_CHANNELS.setColumnWidth(3, 130);
  sheet_CHANNELS.setColumnWidth(4, 160);
  sheet_CHANNELS.setColumnWidth(5, 110);

  const demoData_CHANNELS = [["CH-01","SHOPEE",0.105,5000,"ACTIVE"],["CH-02","TIKTOK",0.095,4000,"ACTIVE"],["CH-03","LAZADA",0.085,3000,"ACTIVE"],["CH-04","FACEBOOK",0,0,"ACTIVE"],["CH-05","WEBSITE",0.02,2000,"ACTIVE"],["CH-06","CỬA HÀNG",0,0,"ACTIVE"]];
  if (isDemo && demoData_CHANNELS.length > 0) {
    sheet_CHANNELS.getRange(2, 1, demoData_CHANNELS.length, 5).setValues(demoData_CHANNELS);
  }
  sheet_CHANNELS.getRange('C2:C100').setNumberFormat('0.0%');
  sheet_CHANNELS.getRange('D2:D100').setNumberFormat('#,##0 "₫"');

  const rule_CHANNELS_E2E100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","INACTIVE"], true).build();
  sheet_CHANNELS.getRange('E2:E100').setDataValidation(rule_CHANNELS_E2E100);

  // =========================================================================
  // TAB: PAYMENTS
  // =========================================================================
  const sheet_PAYMENTS = sheets['PAYMENTS'];
  sheet_PAYMENTS.clear();
  sheet_PAYMENTS.setTabColor('#4A148C');
  sheet_PAYMENTS.setFrozenRows(1);

  const headers_PAYMENTS = ["Mã GD","Mã đơn hàng","Ngày thanh toán","Hình thức / Kênh","Số tiền (VND)","Trạng thái đối soát","Mã tham chiếu"];
  sheet_PAYMENTS.getRange(1, 1, 1, 7).setValues([headers_PAYMENTS])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PAYMENTS.setRowHeight(1, 32);
  sheet_PAYMENTS.setColumnWidth(1, 100);
  sheet_PAYMENTS.setColumnWidth(2, 110);
  sheet_PAYMENTS.setColumnWidth(3, 110);
  sheet_PAYMENTS.setColumnWidth(4, 150);
  sheet_PAYMENTS.setColumnWidth(5, 150);
  sheet_PAYMENTS.setColumnWidth(6, 150);
  sheet_PAYMENTS.setColumnWidth(7, 150);

  const demoData_PAYMENTS = [["PAY-01","ORD-1001","2026-09-03","Shopee Ví ShopeePay",735000,"ĐÃ KHỚP","ST-99120"],["PAY-02","ORD-1002","2026-09-04","TikTok Shop Balance",955000,"ĐÃ KHỚP","TT-44112"],["PAY-03","ORD-1004","2026-09-04","Vietcombank Chuyển khoản",2200000,"ĐÃ KHỚP","VCB-99881"]];
  if (isDemo && demoData_PAYMENTS.length > 0) {
    sheet_PAYMENTS.getRange(2, 1, demoData_PAYMENTS.length, 7).setValues(demoData_PAYMENTS);
  }
  sheet_PAYMENTS.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');
  sheet_PAYMENTS.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');

  const rule_PAYMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ĐÃ KHỚP","CHỜ ĐỐI SOÁT","LỆCH TIỀN"], true).build();
  sheet_PAYMENTS.getRange('F2:F1000').setDataValidation(rule_PAYMENTS_F2F1000);

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
  
  const setRows = [["Tên đơn vị bán lẻ:","MINH COMMERCE HUB"],["Kỳ theo dõi bán hàng:","Tháng 09/2026"],["Hotline CSKH:","0901 888 999"],["Chính sách đổi trả hàng:","Đổi trả miễn phí trong 7 ngày nếu lỗi sản phẩm"],["Đơn vị tiền tệ:","VND"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁN HÀNG & ĐƠN HÀNG ĐA KÊNH (F20)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Tổng hợp đơn hàng toàn kênh • Đối soát dòng tiền & COD • Kiểm soát tỷ lệ giao thành công')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU THUẦN (ĐÃ HOÀN TẤT)
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU THUẦN (ĐÃ HOÀN TẤT)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(ORDERS!$N$2:$N$1000, ORDERS!$Q$2:$Q$1000, "HOÀN TẤT")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Doanh thu thực nhận sau trừ phí sàn')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: TỔNG ĐƠN PHÁT SINH TOÀN KÊNH
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG ĐƠN PHÁT SINH TOÀN KÊNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTA(ORDERS!$A$2:$A$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 " đơn"');
  dashSheet.getRange('C6:D6').merge().setValue('Số đơn ghi nhận trong kỳ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 3: TỶ LỆ GIAO THÀNH CÔNG
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ GIAO THÀNH CÔNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IF(COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") + COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG") > 0, COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") / (COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN TẤT") + COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG")), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('E6:F6').merge().setValue('HOÀN TẤT / (HOÀN TẤT + HOÀN HÀNG)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  // Card 4: TIỀN COD CHỜ ĐỐI SOÁT
  dashSheet.getRange('G4:H4').merge().setValue('TIỀN COD CHỜ ĐỐI SOÁT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=SUMIFS(ORDERS!$L$2:$L$1000, ORDERS!$O$2:$O$1000, "COD", ORDERS!$P$2:$P$1000, "CHƯA THANH TOÁN", ORDERS!$Q$2:$Q$1000, "<>ĐÃ HỦY")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Tiền thu hộ đơn vị vận chuyển đang giữ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

  // Card 5: ĐƠN HỦY / HOÀN HÀNG
  dashSheet.getRange('I4:J4').merge().setValue('ĐƠN HỦY / HOÀN HÀNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIF(ORDERS!$Q$2:$Q$1000, "HOÀN HÀNG") + COUNTIF(ORDERS!$Q$2:$Q$1000, "ĐÃ HỦY")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 " đơn"');
  dashSheet.getRange('I6:J6').merge().setValue('Cần phân tích nguyên nhân để cải thiện')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG PHÂN TÍCH DOANH THU THEO KÊNH BÁN HÀNG
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG PHÂN TÍCH DOANH THU THEO KÊNH BÁN HÀNG')
    .setFontWeight('bold').setFontColor('#E65100').setBackground('#FFE0B2');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Kênh bán","Số đơn","Doanh thu thuần (VND)","Tỷ trọng (%)","Đánh giá"]])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 5; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(ORDERS!$C$2:$C$1000, "' + ['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i] + '")');
    dashSheet.getRange(r, 3).setFormula('=SUMIF(ORDERS!$C$2:$C$1000, "' + ['SHOPEE', 'TIKTOK', 'LAZADA', 'FACEBOOK', 'WEBSITE', 'CỬA HÀNG'][i] + '", ORDERS!$N$2:$N$1000)');
    dashSheet.getRange(r, 4).setFormula('=IF($A$5>0, C' + r + '/$A$5, 0)');
    dashSheet.getRange(r, 5).setFormula(['Sàn TMĐT', 'Sàn Video', 'Sàn TMĐT', 'Mạng xã hội', 'Trực tiếp', 'Điểm bán'][i]);
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B15').setNumberFormat('#,##0');
  dashSheet.getRange('C10:C15').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('D10:D15').setNumberFormat('0.0%');

  // Chart: Cơ Cấu Doanh Thu Thuần Theo Kênh Bán
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('A9:C15'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Cơ Cấu Doanh Thu Thuần Theo Kênh Bán')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F21: FORM NHẬP LIỆU & PHÂN QUYỀN CẤU HÌNH
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F21 — Form nhập liệu & Phân quyền cấu hình
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F21_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF21Workbook(true);
}

function setupCleanTemplate() {
  initF21Workbook(false);
}

function initF21Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","TABLE_DEFINITIONS","COLUMN_DEFINITIONS","FORM_DEFINITIONS","PERMISSIONS","VIEW_DEFINITIONS","FORM_RECORDS","LOCKED_ROWS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — FORM NHẬP LIỆU & PHÂN QUYỀN CẤU HÌNH (F21)')
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
  // TAB: TABLE_DEFINITIONS
  // =========================================================================
  const sheet_TABLE_DEFINITIONS = sheets['TABLE_DEFINITIONS'];
  sheet_TABLE_DEFINITIONS.clear();
  sheet_TABLE_DEFINITIONS.setTabColor('#004D40');
  sheet_TABLE_DEFINITIONS.setFrozenRows(1);

  const headers_TABLE_DEFINITIONS = ["Mã bảng (TableID)","Tên bảng hiển thị","Mô tả nghiệp vụ","Nhóm danh mục","Thứ tự hiển thị","Trạng thái"];
  sheet_TABLE_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_TABLE_DEFINITIONS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TABLE_DEFINITIONS.setRowHeight(1, 32);
  sheet_TABLE_DEFINITIONS.setColumnWidth(1, 150);
  sheet_TABLE_DEFINITIONS.setColumnWidth(2, 220);
  sheet_TABLE_DEFINITIONS.setColumnWidth(3, 320);
  sheet_TABLE_DEFINITIONS.setColumnWidth(4, 160);
  sheet_TABLE_DEFINITIONS.setColumnWidth(5, 120);
  sheet_TABLE_DEFINITIONS.setColumnWidth(6, 120);

  const demoData_TABLE_DEFINITIONS = [["TBL-01","Phiếu Đăng Ký Khách Hàng","Thu thập thông tin khách hàng tiềm năng tại quầy/sự kiện","Bán hàng",1,"ACTIVE"],["TBL-02","Báo Cáo Sự Cố Thiết Bị","Ghi nhận hư hỏng và yêu cầu bảo trì tài sản văn phòng","Kỹ thuật",2,"ACTIVE"],["TBL-03","Đề Xuất Mua Sắm Vật Tư","Biểu mẫu phê duyệt mua vật tư, trang thiết bị nội bộ","Hành chính",3,"ACTIVE"],["TBL-04","Khảo Sát Hài Lòng Khách Hàng","Đánh giá chất lượng dịch vụ sau khi bàn giao sản phẩm","CSKH",4,"ACTIVE"]];
  if (isDemo && demoData_TABLE_DEFINITIONS.length > 0) {
    sheet_TABLE_DEFINITIONS.getRange(2, 1, demoData_TABLE_DEFINITIONS.length, 6).setValues(demoData_TABLE_DEFINITIONS);
  }

  const rule_TABLE_DEFINITIONS_F2F100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","DRAFT","ARCHIVED"], true).build();
  sheet_TABLE_DEFINITIONS.getRange('F2:F100').setDataValidation(rule_TABLE_DEFINITIONS_F2F100);

  // =========================================================================
  // TAB: COLUMN_DEFINITIONS
  // =========================================================================
  const sheet_COLUMN_DEFINITIONS = sheets['COLUMN_DEFINITIONS'];
  sheet_COLUMN_DEFINITIONS.clear();
  sheet_COLUMN_DEFINITIONS.setTabColor('#00695C');
  sheet_COLUMN_DEFINITIONS.setFrozenRows(1);

  const headers_COLUMN_DEFINITIONS = ["Mã cột (ColumnID)","Mã bảng (TableID)","Tên cột","Kiểu dữ liệu (Type)","Bắt buộc (Required)","Quy tắc xác thực (ValidationSpec)","Bảng tham chiếu (RefTable)","Cột cha phụ thuộc (ParentCol)"];
  sheet_COLUMN_DEFINITIONS.getRange(1, 1, 1, 8).setValues([headers_COLUMN_DEFINITIONS])
    .setFontWeight('bold').setBackground('#00695C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_COLUMN_DEFINITIONS.setRowHeight(1, 32);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(1, 150);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(2, 140);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(3, 200);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(4, 150);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(5, 130);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(6, 260);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(7, 180);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(8, 180);

  const demoData_COLUMN_DEFINITIONS = [["COL-01","TBL-01","Họ và tên khách hàng","TEXT","TRUE","LEN(val) >= 2","",""],["COL-02","TBL-01","Số điện thoại","TEXT","TRUE","REGEXMATCH(val, \"^0[0-9]{9}$\")","",""],["COL-03","TBL-01","Email liên hệ","EMAIL","FALSE","IS_VALID_EMAIL(val)","",""],["COL-04","TBL-01","Tỉnh / Thành phố","ENUM","TRUE","LIST(\"Hà Nội\", \"TP.HCM\", \"Đà Nẵng\")","",""],["COL-05","TBL-02","Mã tài sản thiết bị","REF","TRUE","","ASSETS",""],["COL-06","TBL-02","Mô tả chi tiết sự cố","TEXT","TRUE","LEN(val) >= 10","",""],["COL-07","TBL-02","Mức độ nghiêm trọng","ENUM","TRUE","LIST(\"THẤP\", \"TRUNG BÌNH\", \"KHẨN CẤP\")","",""],["COL-08","TBL-03","Tên vật tư cần mua","TEXT","TRUE","","",""],["COL-09","TBL-03","Số lượng dự kiến","NUMBER","TRUE","val > 0","",""],["COL-10","TBL-03","Đơn giá ước tính (VND)","MONEY","TRUE","val >= 0","",""]];
  if (isDemo && demoData_COLUMN_DEFINITIONS.length > 0) {
    sheet_COLUMN_DEFINITIONS.getRange(2, 1, demoData_COLUMN_DEFINITIONS.length, 8).setValues(demoData_COLUMN_DEFINITIONS);
  }

  const rule_COLUMN_DEFINITIONS_D2D500 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TEXT","NUMBER","MONEY","DATE","DATETIME","BOOLEAN","ENUM","REF","EMAIL","FILE"], true).build();
  sheet_COLUMN_DEFINITIONS.getRange('D2:D500').setDataValidation(rule_COLUMN_DEFINITIONS_D2D500);

  const rule_COLUMN_DEFINITIONS_E2E500 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_COLUMN_DEFINITIONS.getRange('E2:E500').setDataValidation(rule_COLUMN_DEFINITIONS_E2E500);

  // =========================================================================
  // TAB: FORM_DEFINITIONS
  // =========================================================================
  const sheet_FORM_DEFINITIONS = sheets['FORM_DEFINITIONS'];
  sheet_FORM_DEFINITIONS.clear();
  sheet_FORM_DEFINITIONS.setTabColor('#00897B');
  sheet_FORM_DEFINITIONS.setFrozenRows(1);

  const headers_FORM_DEFINITIONS = ["Mã biểu mẫu (FormID)","Mã bảng (TableID)","Tiêu đề biểu mẫu","Quy cách bố cục (LayoutSpec)","Số cột giao diện","Trạng thái"];
  sheet_FORM_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_FORM_DEFINITIONS])
    .setFontWeight('bold').setBackground('#00897B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FORM_DEFINITIONS.setRowHeight(1, 32);
  sheet_FORM_DEFINITIONS.setColumnWidth(1, 160);
  sheet_FORM_DEFINITIONS.setColumnWidth(2, 140);
  sheet_FORM_DEFINITIONS.setColumnWidth(3, 260);
  sheet_FORM_DEFINITIONS.setColumnWidth(4, 240);
  sheet_FORM_DEFINITIONS.setColumnWidth(5, 130);
  sheet_FORM_DEFINITIONS.setColumnWidth(6, 120);

  const demoData_FORM_DEFINITIONS = [["FRM-01","TBL-01","Form Thu Thập Khách Hàng Tiềm Năng","SINGLE_PAGE_GRID",2,"PUBLISHED"],["FRM-02","TBL-02","Phiếu Báo Hỏng & Yêu Cầu Sửa Chữa","STEP_WIZARD",1,"PUBLISHED"],["FRM-03","TBL-03","Đề Xuất Mua Vật Tư Văn Phòng","COMPACT_FORM",2,"PUBLISHED"]];
  if (isDemo && demoData_FORM_DEFINITIONS.length > 0) {
    sheet_FORM_DEFINITIONS.getRange(2, 1, demoData_FORM_DEFINITIONS.length, 6).setValues(demoData_FORM_DEFINITIONS);
  }

  const rule_FORM_DEFINITIONS_F2F100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PUBLISHED","DRAFT","CLOSED"], true).build();
  sheet_FORM_DEFINITIONS.getRange('F2:F100').setDataValidation(rule_FORM_DEFINITIONS_F2F100);

  // =========================================================================
  // TAB: PERMISSIONS
  // =========================================================================
  const sheet_PERMISSIONS = sheets['PERMISSIONS'];
  sheet_PERMISSIONS.clear();
  sheet_PERMISSIONS.setTabColor('#00796B');
  sheet_PERMISSIONS.setFrozenRows(1);

  const headers_PERMISSIONS = ["Mã quyền","Email người dùng (UserEmail)","Mã bảng (TableID)","Quyền thao tác (Operation)","Phạm vi (Scope)","Trạng thái"];
  sheet_PERMISSIONS.getRange(1, 1, 1, 6).setValues([headers_PERMISSIONS])
    .setFontWeight('bold').setBackground('#00796B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PERMISSIONS.setRowHeight(1, 32);
  sheet_PERMISSIONS.setColumnWidth(1, 110);
  sheet_PERMISSIONS.setColumnWidth(2, 220);
  sheet_PERMISSIONS.setColumnWidth(3, 140);
  sheet_PERMISSIONS.setColumnWidth(4, 160);
  sheet_PERMISSIONS.setColumnWidth(5, 140);
  sheet_PERMISSIONS.setColumnWidth(6, 110);

  const demoData_PERMISSIONS = [["PRM-01","admin@company.vn","TBL-01","ADMIN","ALL","ACTIVE"],["PRM-02","sales@company.vn","TBL-01","CREATE","OWNER_ONLY","ACTIVE"],["PRM-03","sales@company.vn","TBL-01","READ","DEPARTMENT","ACTIVE"],["PRM-04","technician@company.vn","TBL-02","UPDATE","ALL","ACTIVE"],["PRM-05","staff@company.vn","TBL-03","CREATE","OWNER_ONLY","ACTIVE"]];
  if (isDemo && demoData_PERMISSIONS.length > 0) {
    sheet_PERMISSIONS.getRange(2, 1, demoData_PERMISSIONS.length, 6).setValues(demoData_PERMISSIONS);
  }

  const rule_PERMISSIONS_D2D200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CREATE","READ","UPDATE","DELETE","ADMIN"], true).build();
  sheet_PERMISSIONS.getRange('D2:D200').setDataValidation(rule_PERMISSIONS_D2D200);

  const rule_PERMISSIONS_E2E200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ALL","OWNER_ONLY","DEPARTMENT"], true).build();
  sheet_PERMISSIONS.getRange('E2:E200').setDataValidation(rule_PERMISSIONS_E2E200);

  const rule_PERMISSIONS_F2F200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","REVOKED"], true).build();
  sheet_PERMISSIONS.getRange('F2:F200').setDataValidation(rule_PERMISSIONS_F2F200);

  // =========================================================================
  // TAB: VIEW_DEFINITIONS
  // =========================================================================
  const sheet_VIEW_DEFINITIONS = sheets['VIEW_DEFINITIONS'];
  sheet_VIEW_DEFINITIONS.clear();
  sheet_VIEW_DEFINITIONS.setTabColor('#26A69A');
  sheet_VIEW_DEFINITIONS.setFrozenRows(1);

  const headers_VIEW_DEFINITIONS = ["Mã View","Mã bảng (TableID)","Tên chế độ xem","Kiểu hiển thị (Type)","Bộ lọc điều kiện (FilterSpec)","Quy tắc sắp xếp (SortSpec)"];
  sheet_VIEW_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_VIEW_DEFINITIONS])
    .setFontWeight('bold').setBackground('#26A69A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_VIEW_DEFINITIONS.setRowHeight(1, 32);
  sheet_VIEW_DEFINITIONS.setColumnWidth(1, 110);
  sheet_VIEW_DEFINITIONS.setColumnWidth(2, 140);
  sheet_VIEW_DEFINITIONS.setColumnWidth(3, 220);
  sheet_VIEW_DEFINITIONS.setColumnWidth(4, 140);
  sheet_VIEW_DEFINITIONS.setColumnWidth(5, 260);
  sheet_VIEW_DEFINITIONS.setColumnWidth(6, 200);

  const demoData_VIEW_DEFINITIONS = [["VW-01","TBL-01","Danh sách khách theo Tỉnh thành","TABLE","Status=\"ACTIVE\"","CreatedAt DESC"],["VW-02","TBL-02","Kanban xử lý sự cố thiết bị","KANBAN","Status<>\"RESOLVED\"","Severity DESC"],["VW-03","TBL-03","Đề xuất chờ duyệt mua sắm","TABLE","Status=\"PENDING_APPROVAL\"","SubmissionDate ASC"]];
  if (isDemo && demoData_VIEW_DEFINITIONS.length > 0) {
    sheet_VIEW_DEFINITIONS.getRange(2, 1, demoData_VIEW_DEFINITIONS.length, 6).setValues(demoData_VIEW_DEFINITIONS);
  }

  const rule_VIEW_DEFINITIONS_D2D100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TABLE","KANBAN","CALENDAR","CARD_DECK"], true).build();
  sheet_VIEW_DEFINITIONS.getRange('D2:D100').setDataValidation(rule_VIEW_DEFINITIONS_D2D100);

  // =========================================================================
  // TAB: FORM_RECORDS
  // =========================================================================
  const sheet_FORM_RECORDS = sheets['FORM_RECORDS'];
  sheet_FORM_RECORDS.clear();
  sheet_FORM_RECORDS.setTabColor('#4DB6AC');
  sheet_FORM_RECORDS.setFrozenRows(1);

  const headers_FORM_RECORDS = ["Mã bản ghi (RecordID)","Mã bảng (TableID)","Dữ liệu bản ghi (Payload)","Người gửi (CreatedBy)","Thời gian tạo","Trạng thái duyệt"];
  sheet_FORM_RECORDS.getRange(1, 1, 1, 6).setValues([headers_FORM_RECORDS])
    .setFontWeight('bold').setBackground('#4DB6AC').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FORM_RECORDS.setRowHeight(1, 32);
  sheet_FORM_RECORDS.setColumnWidth(1, 150);
  sheet_FORM_RECORDS.setColumnWidth(2, 130);
  sheet_FORM_RECORDS.setColumnWidth(3, 360);
  sheet_FORM_RECORDS.setColumnWidth(4, 200);
  sheet_FORM_RECORDS.setColumnWidth(5, 150);
  sheet_FORM_RECORDS.setColumnWidth(6, 150);

  const demoData_FORM_RECORDS = [["REC-001","TBL-01","{\"name\": \"Trần Văn Bình\", \"phone\": \"0912345678\", \"city\": \"TP.HCM\"}","sales01@company.vn","2026-09-10 08:30","APPROVED"],["REC-002","TBL-01","{\"name\": \"Lê Thị Mai\", \"phone\": \"0988776655\", \"city\": \"Hà Nội\"}","sales02@company.vn","2026-09-10 09:15","APPROVED"],["REC-003","TBL-02","{\"asset\": \"PRN-01\", \"issue\": \"Máy in kẹt giấy liên tục khay 2\", \"severity\": \"TRUNG BÌNH\"}","staff01@company.vn","2026-09-10 10:00","PENDING_APPROVAL"],["REC-004","TBL-03","{\"item\": \"Mực máy in Canon 2900\", \"qty\": 3, \"estimated_price\": 750000}","staff02@company.vn","2026-09-10 11:20","PENDING_APPROVAL"]];
  if (isDemo && demoData_FORM_RECORDS.length > 0) {
    sheet_FORM_RECORDS.getRange(2, 1, demoData_FORM_RECORDS.length, 6).setValues(demoData_FORM_RECORDS);
  }
  sheet_FORM_RECORDS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd hh:mm');

  const rule_FORM_RECORDS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPROVED","PENDING_APPROVAL","REJECTED"], true).build();
  sheet_FORM_RECORDS.getRange('F2:F1000').setDataValidation(rule_FORM_RECORDS_F2F1000);

  // =========================================================================
  // TAB: LOCKED_ROWS
  // =========================================================================
  const sheet_LOCKED_ROWS = sheets['LOCKED_ROWS'];
  sheet_LOCKED_ROWS.clear();
  sheet_LOCKED_ROWS.setTabColor('#37474F');
  sheet_LOCKED_ROWS.setFrozenRows(1);

  const headers_LOCKED_ROWS = ["Mã khóa (LockID)","Mã bảng (TableID)","Mã bản ghi (RecordID)","Khóa bởi (LockedBy)","Thời điểm khóa","Lý do khóa"];
  sheet_LOCKED_ROWS.getRange(1, 1, 1, 6).setValues([headers_LOCKED_ROWS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LOCKED_ROWS.setRowHeight(1, 32);
  sheet_LOCKED_ROWS.setColumnWidth(1, 130);
  sheet_LOCKED_ROWS.setColumnWidth(2, 130);
  sheet_LOCKED_ROWS.setColumnWidth(3, 150);
  sheet_LOCKED_ROWS.setColumnWidth(4, 200);
  sheet_LOCKED_ROWS.setColumnWidth(5, 150);
  sheet_LOCKED_ROWS.setColumnWidth(6, 260);

  const demoData_LOCKED_ROWS = [["LCK-01","TBL-03","REC-004","manager@company.vn","2026-09-10 11:30","Đang đối chiếu báo giá từ nhà cung cấp trước khi duyệt"]];
  if (isDemo && demoData_LOCKED_ROWS.length > 0) {
    sheet_LOCKED_ROWS.getRange(2, 1, demoData_LOCKED_ROWS.length, 6).setValues(demoData_LOCKED_ROWS);
  }
  sheet_LOCKED_ROWS.getRange('E2:E100').setNumberFormat('yyyy-mm-dd hh:mm');

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
  
  const setRows = [["Tên đơn vị quản trị:","HỆ THỐNG BIỂU MẪU ĐỘNG MINH FORMS"],["Mã hóa đơn giản (Token):","MF-SECURE-2026"],["Cơ chế bảo vệ dữ liệu:","Chặn sửa ngoài quyền (Strict Permissions Enforced)"],["Quy tắc công thức:","Chặn vòng lặp tham chiếu (No Circular Formulas)"],["Quản trị viên hệ thống:","admin@minhtemplates.vn"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH HỆ THỐNG BIỂU MẪU & PHÂN QUYỀN (F21)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tổng số bảng & biểu mẫu động • Kiểm soát lượt nhập liệu • Quản lý phân quyền và khóa dữ liệu')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ BẢNG ĐÃ ĐỊNH NGHĨA
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ BẢNG ĐÃ ĐỊNH NGHĨA')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTIF(TABLE_DEFINITIONS!$F$2:$F$100, "ACTIVE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('#,##0 " bảng"');
  dashSheet.getRange('A6:B6').merge().setValue('Bảng dữ liệu đang hoạt động')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  // Card 2: TỔNG SỐ BẢN GHI ĐÃ THU THẬP
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG SỐ BẢN GHI ĐÃ THU THẬP')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTA(FORM_RECORDS!$A$2:$A$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 " bản ghi"');
  dashSheet.getRange('C6:D6').merge().setValue('Dữ liệu đã nạp qua biểu mẫu')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: BẢN GHI CHỜ DUYỆT (PENDING)
  dashSheet.getRange('E4:F4').merge().setValue('BẢN GHI CHỜ DUYỆT (PENDING)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIF(FORM_RECORDS!$F$2:$F$1000, "PENDING_APPROVAL")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0 " bản ghi"');
  dashSheet.getRange('E6:F6').merge().setValue('Cần kiểm tra trước khi áp dụng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  // Card 4: TỔNG SỐ QUYỀN ĐÃ THIẾT LẬP
  dashSheet.getRange('G4:H4').merge().setValue('TỔNG SỐ QUYỀN ĐÃ THIẾT LẬP')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIF(PERMISSIONS!$F$2:$F$200, "ACTIVE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 " quyền"');
  dashSheet.getRange('G6:H6').merge().setValue('Chính sách bảo mật người dùng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 5: BẢN GHI ĐANG BỊ KHÓA
  dashSheet.getRange('I4:J4').merge().setValue('BẢN GHI ĐANG BỊ KHÓA')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTA(LOCKED_ROWS!$A$2:$A$100)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 " bản ghi"');
  dashSheet.getRange('I6:J6').merge().setValue('Đang khóa chống chỉnh sửa')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI SỐ LƯỢNG BẢN GHI THEO TỪNG BIỂU MẪU
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI SỐ LƯỢNG BẢN GHI THEO TỪNG BIỂU MẪU')
    .setFontWeight('bold').setFontColor('#004D40').setBackground('#B2DFDB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã bảng","Tên bảng","Nhóm","Số bản ghi","Chờ duyệt"]])
    .setFontWeight('bold').setBackground('#00897B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 5; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(TABLE_DEFINITIONS!A' + i + '<>"","TABLE_DEFINITIONS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(TABLE_DEFINITIONS!B' + i + '<>"","TABLE_DEFINITIONS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(TABLE_DEFINITIONS!D' + i + '<>"","TABLE_DEFINITIONS!D' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(A' + r + '<>"","COUNTIF(FORM_RECORDS!$B$2:$B$1000, A' + r + ')","")');
    dashSheet.getRange(r, 5).setFormula('=IF(A' + r + '<>"","COUNTIFS(FORM_RECORDS!$B$2:$B$1000, A' + r + ', FORM_RECORDS!$F$2:$F$1000, "PENDING_APPROVAL")","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('D10:E13').setNumberFormat('#,##0');

  // Chart: Phân Bổ Bản Ghi Theo Bảng Biểu Mẫu
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('A9:D13'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Phân Bổ Bản Ghi Theo Bảng Biểu Mẫu')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F24: ERP LITE CƠ BẢN CHO ĐƠN VỊ NHỎ
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F24 — ERP Lite cơ bản cho đơn vị nhỏ
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F24_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF24Workbook(true);
}

function setupCleanTemplate() {
  initF24Workbook(false);
}

function initF24Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","SALES_ORDERS","PURCHASE_ORDERS","INVENTORY_LEDGER","FINANCE_JOURNAL","MASTER_PRODUCTS","MASTER_PARTIES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — ERP LITE CƠ BẢN CHO ĐƠN VỊ NHỎ (F24)')
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
  // TAB: SALES_ORDERS
  // =========================================================================
  const sheet_SALES_ORDERS = sheets['SALES_ORDERS'];
  sheet_SALES_ORDERS.clear();
  sheet_SALES_ORDERS.setTabColor('#1B5E20');
  sheet_SALES_ORDERS.setFrozenRows(1);

  const headers_SALES_ORDERS = ["Mã đơn bán","Ngày tạo đơn","Mã khách hàng","Tên khách hàng","Tổng giá trị (VND)","Đã thanh toán (VND)","Công nợ còn lại (VND)","Giao hàng","Thanh toán"];
  sheet_SALES_ORDERS.getRange(1, 1, 1, 9).setValues([headers_SALES_ORDERS])
    .setFontWeight('bold').setBackground('#1B5E20').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_SALES_ORDERS.setRowHeight(1, 32);
  sheet_SALES_ORDERS.setColumnWidth(1, 100);
  sheet_SALES_ORDERS.setColumnWidth(2, 110);
  sheet_SALES_ORDERS.setColumnWidth(3, 100);
  sheet_SALES_ORDERS.setColumnWidth(4, 250);
  sheet_SALES_ORDERS.setColumnWidth(5, 150);
  sheet_SALES_ORDERS.setColumnWidth(6, 150);
  sheet_SALES_ORDERS.setColumnWidth(7, 160);
  sheet_SALES_ORDERS.setColumnWidth(8, 110);
  sheet_SALES_ORDERS.setColumnWidth(9, 130);

  const demoData_SALES_ORDERS = [["SO-001","2026-09-02","PART-01","Công ty Cổ phần Hạ Tầng Sao Mai",52000000,52000000,"","ĐÃ GIAO",""],["SO-002","2026-09-04","PART-02","Tập đoàn Công Nghệ Viễn Đông",78000000,30000000,"","ĐÃ GIAO",""],["SO-003","2026-09-06","PART-03","Công ty Xây Lắp Điện Đại Nam",35000000,0,"","CHỜ GIAO",""],["SO-004","2026-09-08","PART-01","Công ty Cổ phần Hạ Tầng Sao Mai",27000000,27000000,"","ĐÃ GIAO",""]];
  if (isDemo && demoData_SALES_ORDERS.length > 0) {
    sheet_SALES_ORDERS.getRange(2, 1, demoData_SALES_ORDERS.length, 9).setValues(demoData_SALES_ORDERS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_SALES_ORDERS.length > 0) {
    for (let r = 2; r <= demoData_SALES_ORDERS.length + 1; r++) {
      sheet_SALES_ORDERS.getRange(r, 7).setFormula('=MAX(0, E' + r + ' - F' + r + ')');
      sheet_SALES_ORDERS.getRange(r, 9).setFormula('=IF(G' + r + '=0, "ĐÃ THANH TOÁN", IF(F' + r + '=0, "CHƯA TRẢ", "TRẢ 1 PHẦN"))');
    }
  }
  sheet_SALES_ORDERS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_SALES_ORDERS.getRange('E2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_SALES_ORDERS_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHỜ GIAO","ĐÃ GIAO","HỦY"], true).build();
  sheet_SALES_ORDERS.getRange('H2:H1000').setDataValidation(rule_SALES_ORDERS_H2H1000);

  // =========================================================================
  // TAB: PURCHASE_ORDERS
  // =========================================================================
  const sheet_PURCHASE_ORDERS = sheets['PURCHASE_ORDERS'];
  sheet_PURCHASE_ORDERS.clear();
  sheet_PURCHASE_ORDERS.setTabColor('#B71C1C');
  sheet_PURCHASE_ORDERS.setFrozenRows(1);

  const headers_PURCHASE_ORDERS = ["Mã đơn mua","Ngày lập đơn","Mã nhà cung cấp","Tên nhà cung cấp","Tổng giá trị (VND)","Đã thanh toán (VND)","Còn phải trả (VND)","Nhập kho","Thanh toán"];
  sheet_PURCHASE_ORDERS.getRange(1, 1, 1, 9).setValues([headers_PURCHASE_ORDERS])
    .setFontWeight('bold').setBackground('#B71C1C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PURCHASE_ORDERS.setRowHeight(1, 32);
  sheet_PURCHASE_ORDERS.setColumnWidth(1, 100);
  sheet_PURCHASE_ORDERS.setColumnWidth(2, 110);
  sheet_PURCHASE_ORDERS.setColumnWidth(3, 100);
  sheet_PURCHASE_ORDERS.setColumnWidth(4, 250);
  sheet_PURCHASE_ORDERS.setColumnWidth(5, 150);
  sheet_PURCHASE_ORDERS.setColumnWidth(6, 150);
  sheet_PURCHASE_ORDERS.setColumnWidth(7, 160);
  sheet_PURCHASE_ORDERS.setColumnWidth(8, 110);
  sheet_PURCHASE_ORDERS.setColumnWidth(9, 130);

  const demoData_PURCHASE_ORDERS = [["PO-001","2026-09-01","SUPP-01","Tổng Phân Phối Thiết Bị Cisco VN",70000000,40000000,"","ĐÃ NHẬP",""],["PO-002","2026-09-03","SUPP-02","Nhà Máy Sản Xuất Tủ Mạng An Phát",36000000,36000000,"","ĐÃ NHẬP",""],["PO-003","2026-09-07","SUPP-01","Tổng Phân Phối Thiết Bị Cisco VN",42000000,0,"","CHỜ NHẬP",""]];
  if (isDemo && demoData_PURCHASE_ORDERS.length > 0) {
    sheet_PURCHASE_ORDERS.getRange(2, 1, demoData_PURCHASE_ORDERS.length, 9).setValues(demoData_PURCHASE_ORDERS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PURCHASE_ORDERS.length > 0) {
    for (let r = 2; r <= demoData_PURCHASE_ORDERS.length + 1; r++) {
      sheet_PURCHASE_ORDERS.getRange(r, 7).setFormula('=MAX(0, E' + r + ' - F' + r + ')');
      sheet_PURCHASE_ORDERS.getRange(r, 9).setFormula('=IF(G' + r + '=0, "ĐÃ THANH TOÁN", IF(F' + r + '=0, "CHƯA TRẢ", "TRẢ 1 PHẦN"))');
    }
  }
  sheet_PURCHASE_ORDERS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_PURCHASE_ORDERS.getRange('E2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_PURCHASE_ORDERS_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHỜ NHẬP","ĐÃ NHẬP"], true).build();
  sheet_PURCHASE_ORDERS.getRange('H2:H1000').setDataValidation(rule_PURCHASE_ORDERS_H2H1000);

  // =========================================================================
  // TAB: INVENTORY_LEDGER
  // =========================================================================
  const sheet_INVENTORY_LEDGER = sheets['INVENTORY_LEDGER'];
  sheet_INVENTORY_LEDGER.clear();
  sheet_INVENTORY_LEDGER.setTabColor('#E65100');
  sheet_INVENTORY_LEDGER.setFrozenRows(1);

  const headers_INVENTORY_LEDGER = ["Mã phát sinh","Ngày chứng từ","Loại biến động","Đơn tham chiếu","Mã SKU","Tên hàng hóa","Số lượng","Đơn giá vốn","Thành tiền giá vốn"];
  sheet_INVENTORY_LEDGER.getRange(1, 1, 1, 9).setValues([headers_INVENTORY_LEDGER])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_INVENTORY_LEDGER.setRowHeight(1, 32);
  sheet_INVENTORY_LEDGER.setColumnWidth(1, 95);
  sheet_INVENTORY_LEDGER.setColumnWidth(2, 110);
  sheet_INVENTORY_LEDGER.setColumnWidth(3, 120);
  sheet_INVENTORY_LEDGER.setColumnWidth(4, 120);
  sheet_INVENTORY_LEDGER.setColumnWidth(5, 95);
  sheet_INVENTORY_LEDGER.setColumnWidth(6, 260);
  sheet_INVENTORY_LEDGER.setColumnWidth(7, 90);
  sheet_INVENTORY_LEDGER.setColumnWidth(8, 140);
  sheet_INVENTORY_LEDGER.setColumnWidth(9, 160);

  const demoData_INVENTORY_LEDGER = [["INV-01","2026-09-01","NHẬP PO","PO-001","SKU-01","Thiết bị Cân Bằng Tải Router Pro",20,3500000,""],["INV-02","2026-09-02","XUẤT SO","SO-001","SKU-01","Thiết bị Cân Bằng Tải Router Pro",10,3500000,""],["INV-03","2026-09-03","NHẬP PO","PO-002","SKU-04","Tủ Rack Máy Chủ 12U Tiêu Chuẩn",20,1800000,""],["INV-04","2026-09-04","XUẤT SO","SO-002","SKU-01","Thiết bị Cân Bằng Tải Router Pro",5,3500000,""],["INV-05","2026-09-04","XUẤT SO","SO-002","SKU-04","Tủ Rack Máy Chủ 12U Tiêu Chuẩn",5,1800000,""],["INV-06","2026-09-08","XUẤT SO","SO-004","SKU-04","Tủ Rack Máy Chủ 12U Tiêu Chuẩn",10,1800000,""]];
  if (isDemo && demoData_INVENTORY_LEDGER.length > 0) {
    sheet_INVENTORY_LEDGER.getRange(2, 1, demoData_INVENTORY_LEDGER.length, 9).setValues(demoData_INVENTORY_LEDGER);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_INVENTORY_LEDGER.length > 0) {
    for (let r = 2; r <= demoData_INVENTORY_LEDGER.length + 1; r++) {
      sheet_INVENTORY_LEDGER.getRange(r, 9).setFormula('=ROUND(G' + r + ' * H' + r + ', 0)');
    }
  }
  sheet_INVENTORY_LEDGER.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');
  sheet_INVENTORY_LEDGER.getRange('G2:G10001').setNumberFormat('#,##0');
  sheet_INVENTORY_LEDGER.getRange('H2:I10001').setNumberFormat('#,##0 "₫"');

  const rule_INVENTORY_LEDGER_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NHẬP PO","XUẤT SO","KIỂM KÊ"], true).build();
  sheet_INVENTORY_LEDGER.getRange('C2:C1000').setDataValidation(rule_INVENTORY_LEDGER_C2C1000);

  // =========================================================================
  // TAB: FINANCE_JOURNAL
  // =========================================================================
  const sheet_FINANCE_JOURNAL = sheets['FINANCE_JOURNAL'];
  sheet_FINANCE_JOURNAL.clear();
  sheet_FINANCE_JOURNAL.setTabColor('#4A148C');
  sheet_FINANCE_JOURNAL.setFrozenRows(1);

  const headers_FINANCE_JOURNAL = ["Mã bút toán","Ngày ghi sổ","Phân loại","Chứng từ gốc","Tài khoản","Số tiền (VND)","Diễn giải chi tiết","Trạng thái"];
  sheet_FINANCE_JOURNAL.getRange(1, 1, 1, 8).setValues([headers_FINANCE_JOURNAL])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FINANCE_JOURNAL.setRowHeight(1, 32);
  sheet_FINANCE_JOURNAL.setColumnWidth(1, 95);
  sheet_FINANCE_JOURNAL.setColumnWidth(2, 110);
  sheet_FINANCE_JOURNAL.setColumnWidth(3, 160);
  sheet_FINANCE_JOURNAL.setColumnWidth(4, 120);
  sheet_FINANCE_JOURNAL.setColumnWidth(5, 130);
  sheet_FINANCE_JOURNAL.setColumnWidth(6, 150);
  sheet_FINANCE_JOURNAL.setColumnWidth(7, 320);
  sheet_FINANCE_JOURNAL.setColumnWidth(8, 110);

  const demoData_FINANCE_JOURNAL = [["FN-001","2026-09-01","CHI TRẢ ĐƠN MUA","PO-001","Vietcombank",40000000,"Chuyển khoản tạm ứng đơn mua thiết bị Cisco","POSTED"],["FN-002","2026-09-02","THU TIỀN ĐƠN BÁN","SO-001","Vietcombank",52000000,"Khách hàng Sao Mai thanh toán 100% đơn bán","POSTED"],["FN-003","2026-09-03","CHI TRẢ ĐƠN MUA","PO-002","Vietcombank",36000000,"Thanh toán trọn gói tiền mua tủ rack An Phát","POSTED"],["FN-004","2026-09-05","THU TIỀN ĐƠN BÁN","SO-002","Vietcombank",30000000,"Tập đoàn Viễn Đông tạm ứng đợt 1 hợp đồng","POSTED"],["FN-005","2026-09-06","CHI VẬN HÀNH","CP-01","Tiền mặt",5000000,"Chi phí bốc xếp và vận chuyển hàng hóa nội thành","POSTED"],["FN-006","2026-09-08","THU TIỀN ĐƠN BÁN","SO-004","Vietcombank",27000000,"Thanh toán đơn hàng tủ rack văn phòng","POSTED"]];
  if (isDemo && demoData_FINANCE_JOURNAL.length > 0) {
    sheet_FINANCE_JOURNAL.getRange(2, 1, demoData_FINANCE_JOURNAL.length, 8).setValues(demoData_FINANCE_JOURNAL);
  }
  sheet_FINANCE_JOURNAL.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');
  sheet_FINANCE_JOURNAL.getRange('F2:F10001').setNumberFormat('#,##0 "₫"');

  const rule_FINANCE_JOURNAL_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["THU TIỀN ĐƠN BÁN","CHI TRẢ ĐƠN MUA","CHI VẬN HÀNH","THU KHÁC"], true).build();
  sheet_FINANCE_JOURNAL.getRange('C2:C1000').setDataValidation(rule_FINANCE_JOURNAL_C2C1000);

  const rule_FINANCE_JOURNAL_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","DRAFT","CANCELLED"], true).build();
  sheet_FINANCE_JOURNAL.getRange('H2:H1000').setDataValidation(rule_FINANCE_JOURNAL_H2H1000);

  // =========================================================================
  // TAB: MASTER_PRODUCTS
  // =========================================================================
  const sheet_MASTER_PRODUCTS = sheets['MASTER_PRODUCTS'];
  sheet_MASTER_PRODUCTS.clear();
  sheet_MASTER_PRODUCTS.setTabColor('#004D40');
  sheet_MASTER_PRODUCTS.setFrozenRows(1);

  const headers_MASTER_PRODUCTS = ["Mã SKU","Tên sản phẩm","Nhóm hàng","ĐVT","Giá vốn (VND)","Giá bán (VND)","Tồn kho hiện tại","Giá trị tồn (VND)"];
  sheet_MASTER_PRODUCTS.getRange(1, 1, 1, 8).setValues([headers_MASTER_PRODUCTS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_MASTER_PRODUCTS.setRowHeight(1, 32);
  sheet_MASTER_PRODUCTS.setColumnWidth(1, 100);
  sheet_MASTER_PRODUCTS.setColumnWidth(2, 260);
  sheet_MASTER_PRODUCTS.setColumnWidth(3, 140);
  sheet_MASTER_PRODUCTS.setColumnWidth(4, 70);
  sheet_MASTER_PRODUCTS.setColumnWidth(5, 140);
  sheet_MASTER_PRODUCTS.setColumnWidth(6, 140);
  sheet_MASTER_PRODUCTS.setColumnWidth(7, 130);
  sheet_MASTER_PRODUCTS.setColumnWidth(8, 160);

  const demoData_MASTER_PRODUCTS = [["SKU-01","Thiết bị Cân Bằng Tải Router Pro","Thiết bị mạng","Bộ",3500000,5200000,"",""],["SKU-02","Bộ Phát Wifi Chuyên Dụng AC1300","Thiết bị mạng","Bộ",1200000,1950000,"",""],["SKU-03","Switch Quản Lý 24 Cổng Gigabit","Thiết bị mạng","Cái",2800000,4100000,"",""],["SKU-04","Tủ Rack Máy Chủ 12U Tiêu Chuẩn","Phụ kiện tủ rack","Cái",1800000,2700000,"",""]];
  if (isDemo && demoData_MASTER_PRODUCTS.length > 0) {
    sheet_MASTER_PRODUCTS.getRange(2, 1, demoData_MASTER_PRODUCTS.length, 8).setValues(demoData_MASTER_PRODUCTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_MASTER_PRODUCTS.length > 0) {
    for (let r = 2; r <= demoData_MASTER_PRODUCTS.length + 1; r++) {
      sheet_MASTER_PRODUCTS.getRange(r, 7).setFormula('=SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "NHẬP PO") - SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "XUẤT SO") + SUMIFS(INVENTORY_LEDGER!$G$2:$G$10001, INVENTORY_LEDGER!$E$2:$E$10001, A' + r + ', INVENTORY_LEDGER!$C$2:$C$10001, "KIỂM KÊ")');
      sheet_MASTER_PRODUCTS.getRange(r, 8).setFormula('=MAX(0, G' + r + ') * E' + r);
    }
  }
  sheet_MASTER_PRODUCTS.getRange('E2:F100').setNumberFormat('#,##0 "₫"');
  sheet_MASTER_PRODUCTS.getRange('H2:H100').setNumberFormat('#,##0 "₫"');
  sheet_MASTER_PRODUCTS.getRange('G2:G100').setNumberFormat('#,##0');

  // =========================================================================
  // TAB: MASTER_PARTIES
  // =========================================================================
  const sheet_MASTER_PARTIES = sheets['MASTER_PARTIES'];
  sheet_MASTER_PARTIES.clear();
  sheet_MASTER_PARTIES.setTabColor('#263238');
  sheet_MASTER_PARTIES.setFrozenRows(1);

  const headers_MASTER_PARTIES = ["Mã đối tác","Tên công ty / Đối tác","Vai trò","Số điện thoại","Địa chỉ","Công nợ tích lũy (VND)"];
  sheet_MASTER_PARTIES.getRange(1, 1, 1, 6).setValues([headers_MASTER_PARTIES])
    .setFontWeight('bold').setBackground('#263238').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_MASTER_PARTIES.setRowHeight(1, 32);
  sheet_MASTER_PARTIES.setColumnWidth(1, 100);
  sheet_MASTER_PARTIES.setColumnWidth(2, 260);
  sheet_MASTER_PARTIES.setColumnWidth(3, 130);
  sheet_MASTER_PARTIES.setColumnWidth(4, 130);
  sheet_MASTER_PARTIES.setColumnWidth(5, 200);
  sheet_MASTER_PARTIES.setColumnWidth(6, 170);

  const demoData_MASTER_PARTIES = [["PART-01","Công ty Cổ phần Hạ Tầng Sao Mai","KHÁCH HÀNG","0908112233","Cầu Giấy, Hà Nội",""],["PART-02","Tập đoàn Công Nghệ Viễn Đông","KHÁCH HÀNG","0912334455","Quận 3, TP.HCM",""],["PART-03","Công ty Xây Lắp Điện Đại Nam","KHÁCH HÀNG","0988445566","Đà Nẵng",""],["SUPP-01","Tổng Phân Phối Thiết Bị Cisco VN","NHÀ CUNG CẤP","0283899999","Quận 1, TP.HCM",""],["SUPP-02","Nhà Máy Sản Xuất Tủ Mạng An Phát","NHÀ CUNG CẤP","0243788888","Bắc Ninh",""]];
  if (isDemo && demoData_MASTER_PARTIES.length > 0) {
    sheet_MASTER_PARTIES.getRange(2, 1, demoData_MASTER_PARTIES.length, 6).setValues(demoData_MASTER_PARTIES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_MASTER_PARTIES.length > 0) {
    for (let r = 2; r <= demoData_MASTER_PARTIES.length + 1; r++) {
      sheet_MASTER_PARTIES.getRange(r, 6).setFormula('=IF(C' + r + '="KHÁCH HÀNG", SUMIF(SALES_ORDERS!$C$2:$C$1000, A' + r + ', SALES_ORDERS!$G$2:$G$1000), SUMIF(PURCHASE_ORDERS!$C$2:$C$1000, A' + r + ', PURCHASE_ORDERS!$G$2:$G$1000))');
    }
  }
  sheet_MASTER_PARTIES.getRange('F2:F100').setNumberFormat('#,##0 "₫"');

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
  
  const setRows = [["Tên doanh nghiệp vận hành:","Công ty Cổ phần Giải Pháp Số Minh ERP"],["Mã số thuế:","0318999888"],["Đơn vị tiền tệ chính:","VND"],["Kỳ kế toán báo cáo:","Tháng 09/2026"],["Tài khoản ngân hàng giao dịch:","Vietcombank - 0071009998888"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH TỔNG THỂ DOANH NGHIỆP — MINI ERP (F24)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Kết nối Bán hàng • Mua hàng • Tồn kho • Quỹ tiền • Quản trị Công nợ 2 chiều và Lợi nhuận gộp thời gian thực')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU BÁN HÀNG
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU BÁN HÀNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUM(SALES_ORDERS!$E$2:$E$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng giá trị các đơn bán (SO)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: LỢI NHUẬN GỘP (EST.)
  dashSheet.getRange('C4:D4').merge().setValue('LỢI NHUẬN GỘP (EST.)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=A5 - SUMIFS(INVENTORY_LEDGER!$I$2:$I$10001, INVENTORY_LEDGER!$C$2:$C$10001, "XUẤT SO")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Doanh số - Giá vốn hàng xuất bán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 3: CÔNG NỢ PHẢI THU
  dashSheet.getRange('E4:F4').merge().setValue('CÔNG NỢ PHẢI THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=SUM(SALES_ORDERS!$G$2:$G$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Khách hàng chưa thanh toán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: CÔNG NỢ PHẢI TRẢ
  dashSheet.getRange('G4:H4').merge().setValue('CÔNG NỢ PHẢI TRẢ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('G5:H5').merge().setValue('=SUM(PURCHASE_ORDERS!$G$2:$G$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Còn phải trả Nhà cung cấp')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 5: GIÁ TRỊ TỒN KHO
  dashSheet.getRange('I4:J4').merge().setValue('GIÁ TRỊ TỒN KHO')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('I5:J5').merge().setValue('=SUM(MASTER_PRODUCTS!$H$2:$H$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('I6:J6').merge().setValue('Tồn kho quy đổi theo giá vốn')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  // Card 6: SỐ DƯ QUỸ TIỀN
  dashSheet.getRange('K4:L4').merge().setValue('SỐ DƯ QUỸ TIỀN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('K5:L5').merge().setValue('=SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "THU TIỀN ĐƠN BÁN", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") + SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "THU KHÁC", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") - SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "CHI TRẢ ĐƠN MUA", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED") - SUMIFS(FINANCE_JOURNAL!$F$2:$F$10001, FINANCE_JOURNAL!$C$2:$C$10001, "CHI VẬN HÀNH", FINANCE_JOURNAL!$H$2:$H$10001, "POSTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('K6:L6').merge().setValue('Tiền mặt và ngân hàng hiện hữu')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#F3E5F5');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: THEO DÕI CÔNG NỢ ĐƠN BÁN HÀNG (PHẢI THU)
  dashSheet.getRange('A8:E8').merge().setValue('THEO DÕI CÔNG NỢ ĐƠN BÁN HÀNG (PHẢI THU)')
    .setFontWeight('bold').setFontColor('#E65100').setBackground('#FFE0B2');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã đơn bán","Khách hàng","Tổng đơn (VND)","Đã thu (VND)","Còn nợ (VND)"]])
    .setFontWeight('bold').setBackground('#F57C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 5; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(SALES_ORDERS!A' + i + '<>"","SALES_ORDERS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(SALES_ORDERS!D' + i + '<>"","SALES_ORDERS!D' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(SALES_ORDERS!E' + i + '<>"","SALES_ORDERS!E' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(SALES_ORDERS!F' + i + '<>"","SALES_ORDERS!F' + i + '","")');
    dashSheet.getRange(r, 5).setFormula('=IF(SALES_ORDERS!G' + i + '<>"","SALES_ORDERS!G' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('C10:E14').setNumberFormat('#,##0 "₫"');

  // SubTable: THEO DÕI CÔNG NỢ ĐƠN MUA HÀNG (PHẢI TRẢ)
  dashSheet.getRange('G8:K8').merge().setValue('THEO DÕI CÔNG NỢ ĐƠN MUA HÀNG (PHẢI TRẢ)')
    .setFontWeight('bold').setFontColor('#B71C1C').setBackground('#FFCDD2');
  dashSheet.getRange(9, 7, 1, 5).setValues([["Mã đơn mua","Nhà cung cấp","Tổng đơn (VND)","Đã trả (VND)","Còn nợ NCC"]])
    .setFontWeight('bold').setBackground('#D32F2F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 4; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 7).setFormula('=IF(PURCHASE_ORDERS!A' + i + '<>"","PURCHASE_ORDERS!A' + i + '","")');
    dashSheet.getRange(r, 8).setFormula('=IF(PURCHASE_ORDERS!D' + i + '<>"","PURCHASE_ORDERS!D' + i + '","")');
    dashSheet.getRange(r, 9).setFormula('=IF(PURCHASE_ORDERS!E' + i + '<>"","PURCHASE_ORDERS!E' + i + '","")');
    dashSheet.getRange(r, 10).setFormula('=IF(PURCHASE_ORDERS!F' + i + '<>"","PURCHASE_ORDERS!F' + i + '","")');
    dashSheet.getRange(r, 11).setFormula('=IF(PURCHASE_ORDERS!G' + i + '<>"","PURCHASE_ORDERS!G' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('I10:K14').setNumberFormat('#,##0 "₫"');

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F30: CÔNG NỢ VÀ PHÂN BỔ THANH TOÁN
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F30 — Công nợ và phân bổ thanh toán
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F30_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF30Workbook(true);
}

function setupCleanTemplate() {
  initF30Workbook(false);
}

function initF30Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","PARTIES","INVOICES","PAYMENTS","ALLOCATIONS","CREDIT_NOTES","OPENING_BALANCES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — CÔNG NỢ VÀ PHÂN BỔ THANH TOÁN (F30)')
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
  // TAB: PARTIES
  // =========================================================================
  const sheet_PARTIES = sheets['PARTIES'];
  sheet_PARTIES.clear();
  sheet_PARTIES.setTabColor('#1565C0');
  sheet_PARTIES.setFrozenRows(1);

  const headers_PARTIES = ["Mã đối tác","Tên khách hàng / Nhà cung cấp","Phân loại","Người liên hệ","Số điện thoại","Email","Mã số thuế","Hạn mức nợ (VND)","Thời hạn nợ (ngày)","Địa chỉ","Trạng thái"];
  sheet_PARTIES.getRange(1, 1, 1, 11).setValues([headers_PARTIES])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PARTIES.setRowHeight(1, 32);
  sheet_PARTIES.setColumnWidth(1, 110);
  sheet_PARTIES.setColumnWidth(2, 260);
  sheet_PARTIES.setColumnWidth(3, 120);
  sheet_PARTIES.setColumnWidth(4, 150);
  sheet_PARTIES.setColumnWidth(5, 120);
  sheet_PARTIES.setColumnWidth(6, 180);
  sheet_PARTIES.setColumnWidth(7, 130);
  sheet_PARTIES.setColumnWidth(8, 160);
  sheet_PARTIES.setColumnWidth(9, 130);
  sheet_PARTIES.setColumnWidth(10, 240);
  sheet_PARTIES.setColumnWidth(11, 110);

  const demoData_PARTIES = [["PT-001","Công ty TNHH Thương Mại Toàn Cầu","CUSTOMER","Nguyễn Anh Tuấn","0912345678","tuan.na@toancau.vn","0102030405",200000000,30,"120 Cầu Giấy, Hà Nội","ACTIVE"],["PT-002","Tập đoàn Sản Xuất Bao Bì Á Châu","VENDOR","Trần Thị Mai","0987654321","mai.tt@achaupkg.com","0304050607",500000000,45,"KCN Sóng Thần, Bình Dương","ACTIVE"],["PT-003","Công ty CP Công Nghệ & Dịch Vụ Nam Việt","CUSTOMER","Lê Hoàng Long","0903112233","long.lh@namviet.com","0405060708",100000000,15,"45 Lê Duẩn, Quận 1, TP.HCM","ACTIVE"],["PT-004","Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh","BOTH","Phạm Quốc Bảo","0938223344","baopq@phuthinh.vn","0506070809",150000000,30,"78 Nguyễn Đình Chiểu, Đà Nẵng","ACTIVE"]];
  if (isDemo && demoData_PARTIES.length > 0) {
    sheet_PARTIES.getRange(2, 1, demoData_PARTIES.length, 11).setValues(demoData_PARTIES);
  }
  sheet_PARTIES.getRange('H2:H1000').setNumberFormat('#,##0 "₫"');
  sheet_PARTIES.getRange('I2:I1000').setNumberFormat('#,##0');

  const rule_PARTIES_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CUSTOMER","VENDOR","BOTH"], true).build();
  sheet_PARTIES.getRange('C2:C1000').setDataValidation(rule_PARTIES_C2C1000);

  const rule_PARTIES_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","INACTIVE"], true).build();
  sheet_PARTIES.getRange('K2:K1000').setDataValidation(rule_PARTIES_K2K1000);

  // =========================================================================
  // TAB: INVOICES
  // =========================================================================
  const sheet_INVOICES = sheets['INVOICES'];
  sheet_INVOICES.clear();
  sheet_INVOICES.setTabColor('#0277BD');
  sheet_INVOICES.setFrozenRows(1);

  const headers_INVOICES = ["Mã hóa đơn/CT","Mã đối tác","Tên đối tác","Hướng công nợ","Ngày phát hành","Hạn thanh toán","Tổng tiền HĐ (VND)","Nguồn phát sinh","Mã nguồn tham chiếu","Đã phân bổ (VND)","Giảm trừ Credit (VND)","Còn phải thu/trả (VND)","Trạng thái","Ghi chú"];
  sheet_INVOICES.getRange(1, 1, 1, 14).setValues([headers_INVOICES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_INVOICES.setRowHeight(1, 32);
  sheet_INVOICES.setColumnWidth(1, 130);
  sheet_INVOICES.setColumnWidth(2, 110);
  sheet_INVOICES.setColumnWidth(3, 240);
  sheet_INVOICES.setColumnWidth(4, 130);
  sheet_INVOICES.setColumnWidth(5, 110);
  sheet_INVOICES.setColumnWidth(6, 110);
  sheet_INVOICES.setColumnWidth(7, 160);
  sheet_INVOICES.setColumnWidth(8, 140);
  sheet_INVOICES.setColumnWidth(9, 140);
  sheet_INVOICES.setColumnWidth(10, 160);
  sheet_INVOICES.setColumnWidth(11, 160);
  sheet_INVOICES.setColumnWidth(12, 170);
  sheet_INVOICES.setColumnWidth(13, 120);
  sheet_INVOICES.setColumnWidth(14, 200);

  const demoData_INVOICES = [["INV-2026-001","PT-001","Công ty TNHH Thương Mại Toàn Cầu","RECEIVABLE","2026-08-01","2026-08-31",1000000,"SalesOrder","SO-001","","","","PARTIAL","Hóa đơn mẫu kiểm thử CODEX"],["INV-2026-002","PT-001","Công ty TNHH Thương Mại Toàn Cầu","RECEIVABLE","2026-08-15","2026-09-15",50000000,"SalesOrder","SO-002","","","","OPEN","Đơn hàng máy tính xách tay"],["INV-2026-003","PT-003","Công ty CP Công Nghệ & Dịch Vụ Nam Việt","RECEIVABLE","2026-07-01","2026-07-15",35000000,"SalesOrder","SO-003","","","","OPEN","Hợp đồng bảo trì hệ thống phần mềm (Quá hạn)"],["INV-2026-004","PT-002","Tập đoàn Sản Xuất Bao Bì Á Châu","PAYABLE","2026-08-10","2026-09-25",120000000,"PurchaseOrder","PO-001","","","","OPEN","Nhập nguyên vật liệu sản xuất đợt 1"],["INV-2026-005","PT-004","Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh","PAYABLE","2026-08-20","2026-09-20",40000000,"PurchaseOrder","PO-002","","","","OPEN","Thiết bị phụ trợ văn phòng"]];
  if (isDemo && demoData_INVOICES.length > 0) {
    sheet_INVOICES.getRange(2, 1, demoData_INVOICES.length, 14).setValues(demoData_INVOICES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_INVOICES.length > 0) {
    for (let r = 2; r <= demoData_INVOICES.length + 1; r++) {
      sheet_INVOICES.getRange(r, 10).setFormula('=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$C$2:$C$1000, A' + r + ')');
      sheet_INVOICES.getRange(r, 11).setFormula('=SUMIFS(CREDIT_NOTES!$C$2:$C$1000, CREDIT_NOTES!$B$2:$B$1000, A' + r + ', CREDIT_NOTES!$F$2:$F$1000, "APPLIED")');
      sheet_INVOICES.getRange(r, 12).setFormula('=MAX(0, G' + r + ' - J' + r + ' - K' + r + ')');
    }
  }
  sheet_INVOICES.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_INVOICES.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');
  sheet_INVOICES.getRange('J2:L1000').setNumberFormat('#,##0 "₫"');

  const rule_INVOICES_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["RECEIVABLE","PAYABLE"], true).build();
  sheet_INVOICES.getRange('D2:D1000').setDataValidation(rule_INVOICES_D2D1000);

  const rule_INVOICES_M2M1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","PARTIAL","PAID","CANCELLED"], true).build();
  sheet_INVOICES.getRange('M2:M1000').setDataValidation(rule_INVOICES_M2M1000);

  // =========================================================================
  // TAB: PAYMENTS
  // =========================================================================
  const sheet_PAYMENTS = sheets['PAYMENTS'];
  sheet_PAYMENTS.clear();
  sheet_PAYMENTS.setTabColor('#2E7D32');
  sheet_PAYMENTS.setFrozenRows(1);

  const headers_PAYMENTS = ["Mã thanh toán","Mã đối tác","Chiều giao dịch","Ngày thanh toán","Số tiền TT (VND)","Đã phân bổ (VND)","Chưa phân bổ (VND)","Hình thức / Tham chiếu","Trạng thái","Ghi chú"];
  sheet_PAYMENTS.getRange(1, 1, 1, 10).setValues([headers_PAYMENTS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PAYMENTS.setRowHeight(1, 32);
  sheet_PAYMENTS.setColumnWidth(1, 130);
  sheet_PAYMENTS.setColumnWidth(2, 110);
  sheet_PAYMENTS.setColumnWidth(3, 130);
  sheet_PAYMENTS.setColumnWidth(4, 120);
  sheet_PAYMENTS.setColumnWidth(5, 160);
  sheet_PAYMENTS.setColumnWidth(6, 160);
  sheet_PAYMENTS.setColumnWidth(7, 160);
  sheet_PAYMENTS.setColumnWidth(8, 180);
  sheet_PAYMENTS.setColumnWidth(9, 120);
  sheet_PAYMENTS.setColumnWidth(10, 200);

  const demoData_PAYMENTS = [["PAY-2026-001","PT-001","INCOMING","2026-08-10",1000000,"","","VCB-FT2608101","POSTED","Thanh toán tiền hàng qua ngân hàng"],["PAY-2026-002","PT-001","INCOMING","2026-08-25",20000000,"","","VCB-FT2608252","POSTED","Tạm ứng đợt 1 đơn hàng máy tính"],["PAY-2026-003","PT-002","OUTGOING","2026-08-28",50000000,"","","TCB-FT2608281","POSTED","Thanh toán tạm ứng nhà cung cấp bao bì"]];
  if (isDemo && demoData_PAYMENTS.length > 0) {
    sheet_PAYMENTS.getRange(2, 1, demoData_PAYMENTS.length, 10).setValues(demoData_PAYMENTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PAYMENTS.length > 0) {
    for (let r = 2; r <= demoData_PAYMENTS.length + 1; r++) {
      sheet_PAYMENTS.getRange(r, 6).setFormula('=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$B$2:$B$1000, A' + r + ')');
      sheet_PAYMENTS.getRange(r, 7).setFormula('=MAX(0, E' + r + ' - F' + r + ')');
    }
  }
  sheet_PAYMENTS.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_PAYMENTS.getRange('E2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_PAYMENTS_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["INCOMING","OUTGOING"], true).build();
  sheet_PAYMENTS.getRange('C2:C1000').setDataValidation(rule_PAYMENTS_C2C1000);

  const rule_PAYMENTS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","VOID"], true).build();
  sheet_PAYMENTS.getRange('I2:I1000').setDataValidation(rule_PAYMENTS_I2I1000);

  // =========================================================================
  // TAB: ALLOCATIONS
  // =========================================================================
  const sheet_ALLOCATIONS = sheets['ALLOCATIONS'];
  sheet_ALLOCATIONS.clear();
  sheet_ALLOCATIONS.setTabColor('#E65100');
  sheet_ALLOCATIONS.setFrozenRows(1);

  const headers_ALLOCATIONS = ["Mã phân bổ","Mã thanh toán","Mã hóa đơn","Số tiền phân bổ (VND)","Ngày phân bổ","Ghi chú"];
  sheet_ALLOCATIONS.getRange(1, 1, 1, 6).setValues([headers_ALLOCATIONS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ALLOCATIONS.setRowHeight(1, 32);
  sheet_ALLOCATIONS.setColumnWidth(1, 130);
  sheet_ALLOCATIONS.setColumnWidth(2, 130);
  sheet_ALLOCATIONS.setColumnWidth(3, 130);
  sheet_ALLOCATIONS.setColumnWidth(4, 170);
  sheet_ALLOCATIONS.setColumnWidth(5, 120);
  sheet_ALLOCATIONS.setColumnWidth(6, 240);

  const demoData_ALLOCATIONS = [["ALC-001","PAY-2026-001","INV-2026-001",400000,"2026-08-10","Phân bổ 400.000đ theo CODEX Acceptance Test"],["ALC-002","PAY-2026-002","INV-2026-002",20000000,"2026-08-25","Phân bổ thanh toán tạm ứng máy tính"],["ALC-003","PAY-2026-003","INV-2026-004",50000000,"2026-08-28","Phân bổ trả trước nhà cung cấp Á Châu"]];
  if (isDemo && demoData_ALLOCATIONS.length > 0) {
    sheet_ALLOCATIONS.getRange(2, 1, demoData_ALLOCATIONS.length, 6).setValues(demoData_ALLOCATIONS);
  }
  sheet_ALLOCATIONS.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');
  sheet_ALLOCATIONS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: CREDIT_NOTES
  // =========================================================================
  const sheet_CREDIT_NOTES = sheets['CREDIT_NOTES'];
  sheet_CREDIT_NOTES.clear();
  sheet_CREDIT_NOTES.setTabColor('#6A1B9A');
  sheet_CREDIT_NOTES.setFrozenRows(1);

  const headers_CREDIT_NOTES = ["Mã giảm trừ","Mã hóa đơn","Số tiền giảm trừ (VND)","Ngày lập","Lý do giảm trừ","Trạng thái"];
  sheet_CREDIT_NOTES.getRange(1, 1, 1, 6).setValues([headers_CREDIT_NOTES])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CREDIT_NOTES.setRowHeight(1, 32);
  sheet_CREDIT_NOTES.setColumnWidth(1, 130);
  sheet_CREDIT_NOTES.setColumnWidth(2, 130);
  sheet_CREDIT_NOTES.setColumnWidth(3, 170);
  sheet_CREDIT_NOTES.setColumnWidth(4, 120);
  sheet_CREDIT_NOTES.setColumnWidth(5, 260);
  sheet_CREDIT_NOTES.setColumnWidth(6, 120);

  const demoData_CREDIT_NOTES = [["CR-001","INV-2026-001",100000,"2026-08-12","Chiết khấu thương mại bổ sung theo CODEX Acceptance Test","APPLIED"]];
  if (isDemo && demoData_CREDIT_NOTES.length > 0) {
    sheet_CREDIT_NOTES.getRange(2, 1, demoData_CREDIT_NOTES.length, 6).setValues(demoData_CREDIT_NOTES);
  }
  sheet_CREDIT_NOTES.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_CREDIT_NOTES.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_CREDIT_NOTES_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPLIED","VOID"], true).build();
  sheet_CREDIT_NOTES.getRange('F2:F1000').setDataValidation(rule_CREDIT_NOTES_F2F1000);

  // =========================================================================
  // TAB: OPENING_BALANCES
  // =========================================================================
  const sheet_OPENING_BALANCES = sheets['OPENING_BALANCES'];
  sheet_OPENING_BALANCES.clear();
  sheet_OPENING_BALANCES.setTabColor('#455A64');
  sheet_OPENING_BALANCES.setFrozenRows(1);

  const headers_OPENING_BALANCES = ["Mã số dư","Mã đối tác","Hướng công nợ","Ngày chốt số dư","Số dư ban đầu (VND)","Ghi chú"];
  sheet_OPENING_BALANCES.getRange(1, 1, 1, 6).setValues([headers_OPENING_BALANCES])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_OPENING_BALANCES.setRowHeight(1, 32);
  sheet_OPENING_BALANCES.setColumnWidth(1, 130);
  sheet_OPENING_BALANCES.setColumnWidth(2, 120);
  sheet_OPENING_BALANCES.setColumnWidth(3, 140);
  sheet_OPENING_BALANCES.setColumnWidth(4, 130);
  sheet_OPENING_BALANCES.setColumnWidth(5, 170);
  sheet_OPENING_BALANCES.setColumnWidth(6, 240);

  const demoData_OPENING_BALANCES = [["OP-001","PT-001","RECEIVABLE","2026-01-01",0,"Số dư đầu kỳ năm 2026"],["OP-002","PT-003","RECEIVABLE","2026-01-01",15000000,"Số dư nợ cũ chuyển sang"]];
  if (isDemo && demoData_OPENING_BALANCES.length > 0) {
    sheet_OPENING_BALANCES.getRange(2, 1, demoData_OPENING_BALANCES.length, 6).setValues(demoData_OPENING_BALANCES);
  }
  sheet_OPENING_BALANCES.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_OPENING_BALANCES.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');

  const rule_OPENING_BALANCES_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["RECEIVABLE","PAYABLE"], true).build();
  sheet_OPENING_BALANCES.getRange('C2:C1000').setDataValidation(rule_OPENING_BALANCES_C2C1000);

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
  
  const setRows = [["Đơn vị quản lý công nợ:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Kỳ công nợ mặc định:","30 ngày kể từ ngày xuất hóa đơn"],["Chính sách chiết khấu thanh toán sớm:","1% nếu thanh toán trong vòng 7 ngày"],["Đầu mối phụ trách kế toán công nợ:","Kế toán trưởng - ktcn@minhtemplates.vn"],["Cảnh báo nợ quá hạn:","Tự động gắn cờ đỏ khi quá hạn trên 30 ngày"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH CÔNG NỢ & PHÂN BỔ THANH TOÁN (F30)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi nợ phải thu • Nợ phải trả • Phân tích tuổi nợ Aging • Tiền chưa phân bổ')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NỢ PHẢI THU CÒN LẠI
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NỢ PHẢI THU CÒN LẠI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "RECEIVABLE", INVOICES!$M$2:$M$1000, "<>CANCELLED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Khoản tiền khách hàng còn nợ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỔNG NỢ PHẢI TRẢ CÒN LẠI
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG NỢ PHẢI TRẢ CÒN LẠI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "PAYABLE", INVOICES!$M$2:$M$1000, "<>CANCELLED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Khoản tiền phải trả cho nhà cung cấp')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 3: NỢ PHẢI THU QUÁ HẠN
  dashSheet.getRange('E4:F4').merge().setValue('NỢ PHẢI THU QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "RECEIVABLE", INVOICES!$F$2:$F$1000, "<"&TODAY(), INVOICES!$L$2:$L$1000, ">0")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Công nợ đã vượt quá hạn thanh toán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: TIỀN THU CHƯA PHÂN BỔ
  dashSheet.getRange('G4:H4').merge().setValue('TIỀN THU CHƯA PHÂN BỔ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('G5:H5').merge().setValue('=SUMIFS(PAYMENTS!$G$2:$G$1000, PAYMENTS!$C$2:$C$1000, "INCOMING", PAYMENTS!$I$2:$I$1000, "POSTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Tiền đã nhận nhưng chưa gán hóa đơn')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

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

// ============================================================================
// INSTALLER SKU F34: LẬP NGÂN SÁCH DOANH NGHIỆP
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F34 — Lập ngân sách doanh nghiệp
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F34_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF34Workbook(true);
}

function setupCleanTemplate() {
  initF34Workbook(false);
}

function initF34Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","BUDGET_VERSIONS","BUDGET_LINES","BUDGET_ACTUALS","BUDGET_COMMITMENTS","BUDGET_REQUESTS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LẬP NGÂN SÁCH DOANH NGHIỆP (F34)')
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
  // TAB: BUDGET_VERSIONS
  // =========================================================================
  const sheet_BUDGET_VERSIONS = sheets['BUDGET_VERSIONS'];
  sheet_BUDGET_VERSIONS.clear();
  sheet_BUDGET_VERSIONS.setTabColor('#1565C0');
  sheet_BUDGET_VERSIONS.setFrozenRows(1);

  const headers_BUDGET_VERSIONS = ["Mã phiên bản","Tên ngân sách","Năm tài chính","Kịch bản","Trạng thái","Ngày phê duyệt","Người lập"];
  sheet_BUDGET_VERSIONS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_VERSIONS])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_VERSIONS.setRowHeight(1, 32);
  sheet_BUDGET_VERSIONS.setColumnWidth(1, 130);
  sheet_BUDGET_VERSIONS.setColumnWidth(2, 260);
  sheet_BUDGET_VERSIONS.setColumnWidth(3, 110);
  sheet_BUDGET_VERSIONS.setColumnWidth(4, 130);
  sheet_BUDGET_VERSIONS.setColumnWidth(5, 120);
  sheet_BUDGET_VERSIONS.setColumnWidth(6, 120);
  sheet_BUDGET_VERSIONS.setColumnWidth(7, 180);

  const demoData_BUDGET_VERSIONS = [["BV-2026-BASE","Kế hoạch Ngân sách Tổng thể Năm 2026",2026,"BASELINE","LOCKED","2025-12-25","Ban Giám Đốc"],["BV-2026-REV1","Điều chỉnh Ngân sách Quý 3/2026",2026,"REVISED","APPROVED","2026-06-30","Phòng Tài Chính - Kế Toán"]];
  if (isDemo && demoData_BUDGET_VERSIONS.length > 0) {
    sheet_BUDGET_VERSIONS.getRange(2, 1, demoData_BUDGET_VERSIONS.length, 7).setValues(demoData_BUDGET_VERSIONS);
  }
  sheet_BUDGET_VERSIONS.getRange('C2:C1000').setNumberFormat('0');
  sheet_BUDGET_VERSIONS.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_VERSIONS_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BASELINE","REVISED","FORECAST"], true).build();
  sheet_BUDGET_VERSIONS.getRange('D2:D1000').setDataValidation(rule_BUDGET_VERSIONS_D2D1000);

  const rule_BUDGET_VERSIONS_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","APPROVED","LOCKED"], true).build();
  sheet_BUDGET_VERSIONS.getRange('E2:E1000').setDataValidation(rule_BUDGET_VERSIONS_E2E1000);

  // =========================================================================
  // TAB: BUDGET_LINES
  // =========================================================================
  const sheet_BUDGET_LINES = sheets['BUDGET_LINES'];
  sheet_BUDGET_LINES.clear();
  sheet_BUDGET_LINES.setTabColor('#0277BD');
  sheet_BUDGET_LINES.setFrozenRows(1);

  const headers_BUDGET_LINES = ["Mã dòng dự toán","Mã phiên bản","Kỳ ngân sách","Phòng ban","Mã dự án","Khoản mục chi phí","Ngân sách phê duyệt (VND)","Thực tế đã chi (VND)","Cam kết chưa chi (VND)","Khả dụng còn lại (VND)","Tỷ lệ sử dụng (%)","Diễn giải"];
  sheet_BUDGET_LINES.getRange(1, 1, 1, 12).setValues([headers_BUDGET_LINES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_LINES.setRowHeight(1, 32);
  sheet_BUDGET_LINES.setColumnWidth(1, 130);
  sheet_BUDGET_LINES.setColumnWidth(2, 130);
  sheet_BUDGET_LINES.setColumnWidth(3, 110);
  sheet_BUDGET_LINES.setColumnWidth(4, 140);
  sheet_BUDGET_LINES.setColumnWidth(5, 120);
  sheet_BUDGET_LINES.setColumnWidth(6, 200);
  sheet_BUDGET_LINES.setColumnWidth(7, 180);
  sheet_BUDGET_LINES.setColumnWidth(8, 170);
  sheet_BUDGET_LINES.setColumnWidth(9, 170);
  sheet_BUDGET_LINES.setColumnWidth(10, 180);
  sheet_BUDGET_LINES.setColumnWidth(11, 120);
  sheet_BUDGET_LINES.setColumnWidth(12, 220);

  const demoData_BUDGET_LINES = [["BL-001","BV-2026-BASE","2026-Q3","MARKETING","PRJ-MKT-01","Quảng cáo Digital (Facebook & Google)",100000000,"","","","","Dự toán theo CODEX Acceptance Test"],["BL-002","BV-2026-BASE","2026-Q3","KỸ THUẬT R&D","PRJ-TECH-02","Hạ tầng máy chủ đám mây Cloud",60000000,"","","","","Chi phí hạ tầng AWS/GCP"],["BL-003","BV-2026-BASE","2026-Q3","NHÂN SỰ","PRJ-HR-01","Đào tạo & Phát triển nhân tài",40000000,"","","","","Khóa huấn luyện kỹ năng cho nhân viên"],["BL-004","BV-2026-BASE","2026-Q3","VẬN HÀNH","PRJ-OPS-01","Văn phòng phẩm & tiện ích",25000000,"","","","","Chi phí văn phòng trụ sở chính"]];
  if (isDemo && demoData_BUDGET_LINES.length > 0) {
    sheet_BUDGET_LINES.getRange(2, 1, demoData_BUDGET_LINES.length, 12).setValues(demoData_BUDGET_LINES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_BUDGET_LINES.length > 0) {
    for (let r = 2; r <= demoData_BUDGET_LINES.length + 1; r++) {
      sheet_BUDGET_LINES.getRange(r, 8).setFormula('=SUMIFS(BUDGET_ACTUALS!$G$2:$G$1000, BUDGET_ACTUALS!$D$2:$D$1000, D' + r + ', BUDGET_ACTUALS!$F$2:$F$1000, F' + r + ', BUDGET_ACTUALS!$I$2:$I$1000, "POSTED")');
      sheet_BUDGET_LINES.getRange(r, 9).setFormula('=SUMIFS(BUDGET_COMMITMENTS!$C$2:$C$1000, BUDGET_COMMITMENTS!$B$2:$B$1000, A' + r + ', BUDGET_COMMITMENTS!$F$2:$F$1000, "COMMITTED")');
      sheet_BUDGET_LINES.getRange(r, 10).setFormula('=MAX(0, G' + r + ' - H' + r + ' - I' + r + ')');
      sheet_BUDGET_LINES.getRange(r, 11).setFormula('=IF(G' + r + '=0, 0, (H' + r + ' + I' + r + ') / G' + r + ')');
    }
  }
  sheet_BUDGET_LINES.getRange('G2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_LINES.getRange('K2:K1000').setNumberFormat('0.0%');

  const rule_BUDGET_LINES_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BAN GIÁM ĐỐC","MARKETING","KINH DOANH","KỸ THUẬT R&D","VẬN HÀNH","NHÂN SỰ"], true).build();
  sheet_BUDGET_LINES.getRange('D2:D1000').setDataValidation(rule_BUDGET_LINES_D2D1000);

  // =========================================================================
  // TAB: BUDGET_ACTUALS
  // =========================================================================
  const sheet_BUDGET_ACTUALS = sheets['BUDGET_ACTUALS'];
  sheet_BUDGET_ACTUALS.clear();
  sheet_BUDGET_ACTUALS.setTabColor('#2E7D32');
  sheet_BUDGET_ACTUALS.setFrozenRows(1);

  const headers_BUDGET_ACTUALS = ["Mã chi thực tế","Ngày chi","Kỳ ngân sách","Phòng ban","Mã dự án","Khoản mục chi phí","Số tiền thực chi (VND)","Mã nguồn tham chiếu","Trạng thái","Diễn giải"];
  sheet_BUDGET_ACTUALS.getRange(1, 1, 1, 10).setValues([headers_BUDGET_ACTUALS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_ACTUALS.setRowHeight(1, 32);
  sheet_BUDGET_ACTUALS.setColumnWidth(1, 130);
  sheet_BUDGET_ACTUALS.setColumnWidth(2, 110);
  sheet_BUDGET_ACTUALS.setColumnWidth(3, 110);
  sheet_BUDGET_ACTUALS.setColumnWidth(4, 140);
  sheet_BUDGET_ACTUALS.setColumnWidth(5, 120);
  sheet_BUDGET_ACTUALS.setColumnWidth(6, 200);
  sheet_BUDGET_ACTUALS.setColumnWidth(7, 170);
  sheet_BUDGET_ACTUALS.setColumnWidth(8, 160);
  sheet_BUDGET_ACTUALS.setColumnWidth(9, 120);
  sheet_BUDGET_ACTUALS.setColumnWidth(10, 220);

  const demoData_BUDGET_ACTUALS = [["ACT-001","2026-07-15","2026-Q3","MARKETING","PRJ-MKT-01","Quảng cáo Digital (Facebook & Google)",30000000,"F17-TX-089","POSTED","Chi tiền quảng cáo tháng 7 theo CODEX Test"],["ACT-002","2026-07-20","2026-Q3","KỸ THUẬT R&D","PRJ-TECH-02","Hạ tầng máy chủ đám mây Cloud",18000000,"F17-TX-095","POSTED","Hóa đơn máy chủ GCP tháng 7"]];
  if (isDemo && demoData_BUDGET_ACTUALS.length > 0) {
    sheet_BUDGET_ACTUALS.getRange(2, 1, demoData_BUDGET_ACTUALS.length, 10).setValues(demoData_BUDGET_ACTUALS);
  }
  sheet_BUDGET_ACTUALS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_BUDGET_ACTUALS.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_BUDGET_ACTUALS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","PENDING"], true).build();
  sheet_BUDGET_ACTUALS.getRange('I2:I1000').setDataValidation(rule_BUDGET_ACTUALS_I2I1000);

  // =========================================================================
  // TAB: BUDGET_COMMITMENTS
  // =========================================================================
  const sheet_BUDGET_COMMITMENTS = sheets['BUDGET_COMMITMENTS'];
  sheet_BUDGET_COMMITMENTS.clear();
  sheet_BUDGET_COMMITMENTS.setTabColor('#E65100');
  sheet_BUDGET_COMMITMENTS.setFrozenRows(1);

  const headers_BUDGET_COMMITMENTS = ["Mã cam kết","Mã dòng dự toán","Số tiền cam kết (VND)","Hợp đồng / PO tham chiếu","Ngày cam kết","Trạng thái","Diễn giải"];
  sheet_BUDGET_COMMITMENTS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_COMMITMENTS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_COMMITMENTS.setRowHeight(1, 32);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(1, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(2, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(3, 170);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(4, 180);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(5, 120);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(6, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(7, 240);

  const demoData_BUDGET_COMMITMENTS = [["CMT-001","BL-001",20000000,"CTR-MKT-2026-05","2026-07-05","COMMITTED","Hợp đồng chạy truyền thông agency (Chưa thanh toán)"]];
  if (isDemo && demoData_BUDGET_COMMITMENTS.length > 0) {
    sheet_BUDGET_COMMITMENTS.getRange(2, 1, demoData_BUDGET_COMMITMENTS.length, 7).setValues(demoData_BUDGET_COMMITMENTS);
  }
  sheet_BUDGET_COMMITMENTS.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_COMMITMENTS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_COMMITMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["COMMITTED","RELEASED","EXPENDED"], true).build();
  sheet_BUDGET_COMMITMENTS.getRange('F2:F1000').setDataValidation(rule_BUDGET_COMMITMENTS_F2F1000);

  // =========================================================================
  // TAB: BUDGET_REQUESTS
  // =========================================================================
  const sheet_BUDGET_REQUESTS = sheets['BUDGET_REQUESTS'];
  sheet_BUDGET_REQUESTS.clear();
  sheet_BUDGET_REQUESTS.setTabColor('#6A1B9A');
  sheet_BUDGET_REQUESTS.setFrozenRows(1);

  const headers_BUDGET_REQUESTS = ["Mã đề xuất","Mã dòng dự toán","Số tiền xin điều chỉnh (VND)","Lý do xin điều chỉnh","Người đề xuất","Trạng thái","Ngày duyệt"];
  sheet_BUDGET_REQUESTS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_REQUESTS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_REQUESTS.setRowHeight(1, 32);
  sheet_BUDGET_REQUESTS.setColumnWidth(1, 130);
  sheet_BUDGET_REQUESTS.setColumnWidth(2, 130);
  sheet_BUDGET_REQUESTS.setColumnWidth(3, 180);
  sheet_BUDGET_REQUESTS.setColumnWidth(4, 260);
  sheet_BUDGET_REQUESTS.setColumnWidth(5, 160);
  sheet_BUDGET_REQUESTS.setColumnWidth(6, 120);
  sheet_BUDGET_REQUESTS.setColumnWidth(7, 120);

  const demoData_BUDGET_REQUESTS = [["REQ-001","BL-001",15000000,"Bổ sung ngân sách chiến dịch kích cầu mùa tựu trường","Trần Thị Thu Thảo","APPROVED","2026-08-01"]];
  if (isDemo && demoData_BUDGET_REQUESTS.length > 0) {
    sheet_BUDGET_REQUESTS.getRange(2, 1, demoData_BUDGET_REQUESTS.length, 7).setValues(demoData_BUDGET_REQUESTS);
  }
  sheet_BUDGET_REQUESTS.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_REQUESTS.getRange('G2:G1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_REQUESTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","APPROVED","REJECTED"], true).build();
  sheet_BUDGET_REQUESTS.getRange('F2:F1000').setDataValidation(rule_BUDGET_REQUESTS_F2F1000);

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
  
  const setRows = [["Đơn vị lập ngân sách:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Năm tài chính:","2026"],["Kỳ đánh giá dự toán:","Hàng quý (Quarterly Reviews)"],["Ngưỡng cảnh báo vượt ngân sách:","85% tổng ngân sách phê duyệt"],["Quy trình phê duyệt:","Trưởng phòng đề xuất -> Giám đốc Tài chính thẩm định -> Tổng Giám Đốc duyệt"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH NGÂN SÁCH DOANH NGHIỆP (F34)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi hạn mức ngân sách • Kiểm soát thực chi • Quản lý cam kết chi • Dự báo khả dụng')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NGÂN SÁCH ĐƯỢC DUYỆT
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NGÂN SÁCH ĐƯỢC DUYỆT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUM(BUDGET_LINES!$G$2:$G$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng mức dự toán được phê duyệt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỔNG CHI THỰC TẾ
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG CHI THỰC TẾ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('C5:D5').merge().setValue('=SUM(BUDGET_LINES!$H$2:$H$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Tổng chi phí thực tế đã giải ngân')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 3: CHI PHÍ CAM KẾT CHƯA CHI
  dashSheet.getRange('E4:F4').merge().setValue('CHI PHÍ CAM KẾT CHƯA CHI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=SUM(BUDGET_LINES!$I$2:$I$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Các khoản đã ký duyệt nhưng chưa thanh toán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: NGÂN SÁCH KHẢ DỤNG CÒN LẠI
  dashSheet.getRange('G4:H4').merge().setValue('NGÂN SÁCH KHẢ DỤNG CÒN LẠI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('G5:H5').merge().setValue('=SUM(BUDGET_LINES!$J$2:$J$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Hạn mức ngân sách còn có thể sử dụng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

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

// ============================================================================
// INSTALLER SKU F48: BÁO CÁO CHI PHÍ, P&L VÀ DÒNG TIỀN
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F48 — Báo cáo chi phí, P&L và dòng tiền
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F48_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF48Workbook(true);
}

function setupCleanTemplate() {
  initF48Workbook(false);
}

function initF48Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","FINANCE_FACTS","REPORT_MAPPINGS","REPORTING_PERIODS","REPORT_ADJUSTMENTS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — BÁO CÁO CHI PHÍ, P&L VÀ DÒNG TIỀN (F48)')
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
  // TAB: FINANCE_FACTS
  // =========================================================================
  const sheet_FINANCE_FACTS = sheets['FINANCE_FACTS'];
  sheet_FINANCE_FACTS.clear();
  sheet_FINANCE_FACTS.setTabColor('#1565C0');
  sheet_FINANCE_FACTS.setFrozenRows(1);

  const headers_FINANCE_FACTS = ["Mã bút toán","Ngày chứng từ","Kỳ kế toán","Mã tài khoản","Tên khoản mục","Phòng ban","Mã dự án","Số tiền (VND)","Phân loại P&L","Phân loại CashFlow","Mã nguồn tham chiếu","Diễn giải"];
  sheet_FINANCE_FACTS.getRange(1, 1, 1, 12).setValues([headers_FINANCE_FACTS])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FINANCE_FACTS.setRowHeight(1, 32);
  sheet_FINANCE_FACTS.setColumnWidth(1, 130);
  sheet_FINANCE_FACTS.setColumnWidth(2, 110);
  sheet_FINANCE_FACTS.setColumnWidth(3, 100);
  sheet_FINANCE_FACTS.setColumnWidth(4, 120);
  sheet_FINANCE_FACTS.setColumnWidth(5, 220);
  sheet_FINANCE_FACTS.setColumnWidth(6, 140);
  sheet_FINANCE_FACTS.setColumnWidth(7, 120);
  sheet_FINANCE_FACTS.setColumnWidth(8, 170);
  sheet_FINANCE_FACTS.setColumnWidth(9, 140);
  sheet_FINANCE_FACTS.setColumnWidth(10, 150);
  sheet_FINANCE_FACTS.setColumnWidth(11, 150);
  sheet_FINANCE_FACTS.setColumnWidth(12, 240);

  const demoData_FINANCE_FACTS = [["FACT-001","2026-08-01","2026-08","REV-SALES","Doanh thu bán hàng hóa","KINH DOANH","PRJ-RETAIL",1000000,"REVENUE","NON_CASH","SO-2026-001","Bán chịu 1 triệu theo CODEX Acceptance Test"],["FACT-002","2026-08-05","2026-08","REV-SALES","Doanh thu bán hàng thu tiền ngay","KINH DOANH","PRJ-RETAIL",120000000,"REVENUE","OPERATING","SO-2026-002","Bán hàng thu tiền ngay qua ngân hàng"],["FACT-003","2026-08-10","2026-08","COGS-PROD","Giá vốn hàng xuất bán","VẬN HÀNH","PRJ-RETAIL",65000000,"COGS","NON_CASH","INV-OUT-001","Xuất kho giá vốn hàng bán kỳ tháng 8"],["FACT-004","2026-08-12","2026-08","OPEX-SAL","Chi phí lương nhân viên","NHÂN SỰ","CORP",25000000,"OPEX","OPERATING","PAYROLL-08","Chi trả lương nhân viên đợt 1"],["FACT-005","2026-08-15","2026-08","OPEX-RENT","Chi phí thuê văn phòng","VẬN HÀNH","CORP",15000000,"OPEX","OPERATING","EXP-RENT-08","Chi phí tiền thuê văn phòng tháng 8"],["FACT-006","2026-08-20","2026-08","FIN-LOAN","Tiền vay ngân hàng giải ngân","BAN GIÁM ĐỐC","FINANCE",500000000,"FINANCING","FINANCING","LOAN-VCB-01","Tiền vay ngân hàng theo CODEX Acceptance Test"]];
  if (isDemo && demoData_FINANCE_FACTS.length > 0) {
    sheet_FINANCE_FACTS.getRange(2, 1, demoData_FINANCE_FACTS.length, 12).setValues(demoData_FINANCE_FACTS);
  }
  sheet_FINANCE_FACTS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_FINANCE_FACTS.getRange('H2:H1000').setNumberFormat('#,##0 "₫"');

  const rule_FINANCE_FACTS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["REVENUE","COGS","OPEX","NON_OPERATING","FINANCING","NONE"], true).build();
  sheet_FINANCE_FACTS.getRange('I2:I1000').setDataValidation(rule_FINANCE_FACTS_I2I1000);

  const rule_FINANCE_FACTS_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPERATING","INVESTING","FINANCING","NON_CASH"], true).build();
  sheet_FINANCE_FACTS.getRange('J2:J1000').setDataValidation(rule_FINANCE_FACTS_J2J1000);

  // =========================================================================
  // TAB: REPORT_MAPPINGS
  // =========================================================================
  const sheet_REPORT_MAPPINGS = sheets['REPORT_MAPPINGS'];
  sheet_REPORT_MAPPINGS.clear();
  sheet_REPORT_MAPPINGS.setTabColor('#0277BD');
  sheet_REPORT_MAPPINGS.setFrozenRows(1);

  const headers_REPORT_MAPPINGS = ["Mã mapping","Mã tài khoản/Khoản mục","Tên hiển thị báo cáo","Báo cáo áp dụng","Nhóm chỉ tiêu","Dấu ghi nhận (+/-)"];
  sheet_REPORT_MAPPINGS.getRange(1, 1, 1, 6).setValues([headers_REPORT_MAPPINGS])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORT_MAPPINGS.setRowHeight(1, 32);
  sheet_REPORT_MAPPINGS.setColumnWidth(1, 120);
  sheet_REPORT_MAPPINGS.setColumnWidth(2, 170);
  sheet_REPORT_MAPPINGS.setColumnWidth(3, 240);
  sheet_REPORT_MAPPINGS.setColumnWidth(4, 140);
  sheet_REPORT_MAPPINGS.setColumnWidth(5, 200);
  sheet_REPORT_MAPPINGS.setColumnWidth(6, 130);

  const demoData_REPORT_MAPPINGS = [["MAP-001","REV-SALES","1. Doanh thu bán hàng & cung cấp dịch vụ","PL","DOANH THU",1],["MAP-002","COGS-PROD","2. Giá vốn hàng bán","PL","GIÁ VỐN",-1],["MAP-003","OPEX-SAL","3. Chi phí tiền lương nhân viên","PL","CHI PHÍ HOẠT ĐỘNG",-1],["MAP-004","OPEX-RENT","4. Chi phí thuê mặt bằng & văn phòng","PL","CHI PHÍ HOẠT ĐỘNG",-1],["MAP-005","FIN-LOAN","Tiền vay ngân hàng nhận được","CASHFLOW","DÒNG TIỀN TÀI CHÍNH",1]];
  if (isDemo && demoData_REPORT_MAPPINGS.length > 0) {
    sheet_REPORT_MAPPINGS.getRange(2, 1, demoData_REPORT_MAPPINGS.length, 6).setValues(demoData_REPORT_MAPPINGS);
  }
  sheet_REPORT_MAPPINGS.getRange('F2:F1000').setNumberFormat('0');

  const rule_REPORT_MAPPINGS_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PL","CASHFLOW","OPEX"], true).build();
  sheet_REPORT_MAPPINGS.getRange('D2:D1000').setDataValidation(rule_REPORT_MAPPINGS_D2D1000);

  const rule_REPORT_MAPPINGS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["1","-1"], true).build();
  sheet_REPORT_MAPPINGS.getRange('F2:F1000').setDataValidation(rule_REPORT_MAPPINGS_F2F1000);

  // =========================================================================
  // TAB: REPORTING_PERIODS
  // =========================================================================
  const sheet_REPORTING_PERIODS = sheets['REPORTING_PERIODS'];
  sheet_REPORTING_PERIODS.clear();
  sheet_REPORTING_PERIODS.setTabColor('#2E7D32');
  sheet_REPORTING_PERIODS.setFrozenRows(1);

  const headers_REPORTING_PERIODS = ["Mã kỳ kế toán","Tên kỳ báo cáo","Ngày bắt đầu","Ngày kết thúc","Khóa sổ","Người thực hiện"];
  sheet_REPORTING_PERIODS.getRange(1, 1, 1, 6).setValues([headers_REPORTING_PERIODS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORTING_PERIODS.setRowHeight(1, 32);
  sheet_REPORTING_PERIODS.setColumnWidth(1, 130);
  sheet_REPORTING_PERIODS.setColumnWidth(2, 200);
  sheet_REPORTING_PERIODS.setColumnWidth(3, 120);
  sheet_REPORTING_PERIODS.setColumnWidth(4, 120);
  sheet_REPORTING_PERIODS.setColumnWidth(5, 100);
  sheet_REPORTING_PERIODS.setColumnWidth(6, 180);

  const demoData_REPORTING_PERIODS = [["2026-07","Kỳ báo cáo Tháng 07/2026","2026-07-01","2026-07-31","CLOSED","Kế toán trưởng"],["2026-08","Kỳ báo cáo Tháng 08/2026","2026-08-01","2026-08-31","OPEN","Kế toán trưởng"]];
  if (isDemo && demoData_REPORTING_PERIODS.length > 0) {
    sheet_REPORTING_PERIODS.getRange(2, 1, demoData_REPORTING_PERIODS.length, 6).setValues(demoData_REPORTING_PERIODS);
  }
  sheet_REPORTING_PERIODS.getRange('C2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_REPORTING_PERIODS_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","CLOSED"], true).build();
  sheet_REPORTING_PERIODS.getRange('E2:E1000').setDataValidation(rule_REPORTING_PERIODS_E2E1000);

  // =========================================================================
  // TAB: REPORT_ADJUSTMENTS
  // =========================================================================
  const sheet_REPORT_ADJUSTMENTS = sheets['REPORT_ADJUSTMENTS'];
  sheet_REPORT_ADJUSTMENTS.clear();
  sheet_REPORT_ADJUSTMENTS.setTabColor('#6A1B9A');
  sheet_REPORT_ADJUSTMENTS.setFrozenRows(1);

  const headers_REPORT_ADJUSTMENTS = ["Mã điều chỉnh","Kỳ kế toán","Mã tài khoản","Số tiền điều chỉnh (VND)","Lý do điều chỉnh","Trạng thái"];
  sheet_REPORT_ADJUSTMENTS.getRange(1, 1, 1, 6).setValues([headers_REPORT_ADJUSTMENTS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORT_ADJUSTMENTS.setRowHeight(1, 32);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(1, 130);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(2, 110);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(3, 150);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(4, 180);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(5, 260);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(6, 120);

  const demoData_REPORT_ADJUSTMENTS = [["ADJ-001","2026-08","COGS-PROD",-2000000,"Điều chỉnh giảm giá vốn do nhà cung cấp chiết khấu hồi tố","POSTED"]];
  if (isDemo && demoData_REPORT_ADJUSTMENTS.length > 0) {
    sheet_REPORT_ADJUSTMENTS.getRange(2, 1, demoData_REPORT_ADJUSTMENTS.length, 6).setValues(demoData_REPORT_ADJUSTMENTS);
  }
  sheet_REPORT_ADJUSTMENTS.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');

  const rule_REPORT_ADJUSTMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","POSTED"], true).build();
  sheet_REPORT_ADJUSTMENTS.getRange('F2:F1000').setDataValidation(rule_REPORT_ADJUSTMENTS_F2F1000);

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
  
  const setRows = [["Tên đơn vị lập báo cáo:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Mã số thuế:","0316889988"],["Phương pháp tính giá vốn:","Bình quân gia quyền (Weighted Average)"],["Phương pháp lưu chuyển tiền tệ:","Phương pháp Trực tiếp (Direct Method)"],["Kế toán trưởng phụ trách:","Nguyễn Thị Bích Ngọc - CPA Việt Nam"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁO CÁO KẾT QUẢ KINH DOANH P&L & DÒNG TIỀN QUẢN TRỊ (F48)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Doanh thu thực tế • Giá vốn hàng bán • Lợi nhuận gộp • Dòng tiền kinh doanh thuần')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU THUẦN (P&L)
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU THUẦN (P&L)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "REVENUE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Doanh thu ghi nhận theo chuẩn kế toán dồn tích')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: LỢI NHUẬN GỘP (GROSS PROFIT)
  dashSheet.getRange('C4:D4').merge().setValue('LỢI NHUẬN GỘP (GROSS PROFIT)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=B4 - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "COGS")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Doanh thu trừ Giá vốn hàng bán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: LỢI NHUẬN THUẦN TỪ HĐKD
  dashSheet.getRange('E4:F4').merge().setValue('LỢI NHUẬN THUẦN TỪ HĐKD')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('E5:F5').merge().setValue('=B5 - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "OPEX")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Lợi nhuận gộp trừ Chi phí vận hành (OPEX)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

  // Card 4: DÒNG TIỀN KINH DOANH THUẦN (CASH FLOW)
  dashSheet.getRange('G4:H4').merge().setValue('DÒNG TIỀN KINH DOANH THUẦN (CASH FLOW)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('G5:H5').merge().setValue('=SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$J$2:$J$1000, "OPERATING", FINANCE_FACTS!$I$2:$I$1000, "REVENUE") - SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$J$2:$J$1000, "OPERATING", FINANCE_FACTS!$I$2:$I$1000, "<>REVENUE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F9A825').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Dòng tiền thực thu trừ thực chi hoạt động kinh doanh')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

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

// ============================================================================
// INSTALLER SKU F12: QUẢN LÝ HỒ SƠ NHÂN SỰ & HỢP ĐỒNG LAO ĐỘNG
// ============================================================================
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

// ============================================================================
// INSTALLER SKU F13: TUYỂN DỤNG & LỊCH PHỎNG VẤN ỨNG VIÊN
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F13 — Tuyển dụng & lịch phỏng vấn ứng viên
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F13_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF13Workbook(true);
}

function setupCleanTemplate() {
  initF13Workbook(false);
}

function initF13Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Vacancies","Candidates","Applications","Interviews","Scorecards","Offers","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — TUYỂN DỤNG & LỊCH PHỎNG VẤN ỨNG VIÊN (F13)')
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
  // TAB: Vacancies
  // =========================================================================
  const sheet_Vacancies = sheets['Vacancies'];
  sheet_Vacancies.clear();
  sheet_Vacancies.setTabColor('#1565C0');
  sheet_Vacancies.setFrozenRows(1);

  const headers_Vacancies = ["ID","Title","TeamID","HiringManager","TargetCount","OpenDate","CloseDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Vacancies.getRange(1, 1, 1, 13).setValues([headers_Vacancies])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Vacancies.setRowHeight(1, 32);
  sheet_Vacancies.setColumnWidth(1, 120);
  sheet_Vacancies.setColumnWidth(2, 240);
  sheet_Vacancies.setColumnWidth(3, 140);
  sheet_Vacancies.setColumnWidth(4, 200);
  sheet_Vacancies.setColumnWidth(5, 110);
  sheet_Vacancies.setColumnWidth(6, 110);
  sheet_Vacancies.setColumnWidth(7, 110);
  sheet_Vacancies.setColumnWidth(8, 120);
  sheet_Vacancies.setColumnWidth(9, 160);
  sheet_Vacancies.setColumnWidth(10, 160);
  sheet_Vacancies.setColumnWidth(11, 180);
  sheet_Vacancies.setColumnWidth(12, 90);
  sheet_Vacancies.setColumnWidth(13, 80);

  const demoData_Vacancies = [["VAC-001","Kỹ Sư Lập Trình Node.js Backend","KỸ THUẬT","long.lh@minhtemplates.com",2,"2026-08-01","2026-09-30","OPEN","2026-08-01T08:00:00Z","2026-08-01T08:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["VAC-002","Chuyên Viên Tư Vấn Bán Hàng Doanh Nghiệp","KINH DOANH","thao.tt@minhtemplates.com",3,"2026-08-15","2026-09-15","OPEN","2026-08-15T08:00:00Z","2026-08-15T08:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["VAC-003","Trưởng Nhóm Content & SEO Marketing","MARKETING","anh.pq@minhtemplates.com",1,"2026-07-01","2026-08-15","CLOSED","2026-07-01T08:00:00Z","2026-08-15T17:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Vacancies.length > 0) {
    sheet_Vacancies.getRange(2, 1, demoData_Vacancies.length, 13).setValues(demoData_Vacancies);
  }
  sheet_Vacancies.getRange('F2:G1000').setNumberFormat('yyyy-mm-dd');

  const rule_Vacancies_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["KINH DOANH","KỸ THUẬT","MARKETING","NHÂN SỰ","TÀI CHÍNH","VẬN HÀNH"], true).build();
  sheet_Vacancies.getRange('C2:C1000').setDataValidation(rule_Vacancies_C2C1000);

  const rule_Vacancies_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","IN_PROGRESS","CLOSED","CANCELLED"], true).build();
  sheet_Vacancies.getRange('H2:H1000').setDataValidation(rule_Vacancies_H2H1000);

  // =========================================================================
  // TAB: Candidates
  // =========================================================================
  const sheet_Candidates = sheets['Candidates'];
  sheet_Candidates.clear();
  sheet_Candidates.setTabColor('#0277BD');
  sheet_Candidates.setFrozenRows(1);

  const headers_Candidates = ["ID","CandidateCode","Name","Email","Phone","CVFileID","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Candidates.getRange(1, 1, 1, 12).setValues([headers_Candidates])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Candidates.setRowHeight(1, 32);
  sheet_Candidates.setColumnWidth(1, 120);
  sheet_Candidates.setColumnWidth(2, 120);
  sheet_Candidates.setColumnWidth(3, 220);
  sheet_Candidates.setColumnWidth(4, 200);
  sheet_Candidates.setColumnWidth(5, 130);
  sheet_Candidates.setColumnWidth(6, 160);
  sheet_Candidates.setColumnWidth(7, 130);
  sheet_Candidates.setColumnWidth(8, 160);
  sheet_Candidates.setColumnWidth(9, 160);
  sheet_Candidates.setColumnWidth(10, 180);
  sheet_Candidates.setColumnWidth(11, 90);
  sheet_Candidates.setColumnWidth(12, 80);

  const demoData_Candidates = [["CAN-001","UV-001","Hoàng Văn Nam","nam.hv@gmail.com","0933112233","CV_NAM_HV_01","HIRED","2026-08-05T09:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-002","UV-002","Nguyễn Thị Bích Ngọc","ngoc.ntb@gmail.com","0944556677","CV_NGOC_NTB_02","INTERVIEWING","2026-08-10T14:00:00Z","2026-08-20T16:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-003","UV-003","Trần Quang Huy","huy.tq@gmail.com","0911223344","CV_HUY_TQ_03","OFFERED","2026-08-12T10:00:00Z","2026-08-28T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-004","UV-004","Lê Thu Trang","trang.lt@gmail.com","0988776655","CV_TRANG_LT_04","REJECTED","2026-08-15T08:30:00Z","2026-08-18T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Candidates.length > 0) {
    sheet_Candidates.getRange(2, 1, demoData_Candidates.length, 12).setValues(demoData_Candidates);
  }

  const rule_Candidates_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NEW","SCREENING","INTERVIEWING","OFFERED","HIRED","REJECTED"], true).build();
  sheet_Candidates.getRange('G2:G1000').setDataValidation(rule_Candidates_G2G1000);

  // =========================================================================
  // TAB: Applications
  // =========================================================================
  const sheet_Applications = sheets['Applications'];
  sheet_Applications.clear();
  sheet_Applications.setTabColor('#00838F');
  sheet_Applications.setFrozenRows(1);

  const headers_Applications = ["ID","CandidateID","VacancyID","Stage","Source","AppliedAt","OwnerEmail","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Applications.getRange(1, 1, 1, 12).setValues([headers_Applications])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Applications.setRowHeight(1, 32);
  sheet_Applications.setColumnWidth(1, 120);
  sheet_Applications.setColumnWidth(2, 120);
  sheet_Applications.setColumnWidth(3, 120);
  sheet_Applications.setColumnWidth(4, 130);
  sheet_Applications.setColumnWidth(5, 140);
  sheet_Applications.setColumnWidth(6, 160);
  sheet_Applications.setColumnWidth(7, 200);
  sheet_Applications.setColumnWidth(8, 160);
  sheet_Applications.setColumnWidth(9, 160);
  sheet_Applications.setColumnWidth(10, 180);
  sheet_Applications.setColumnWidth(11, 90);
  sheet_Applications.setColumnWidth(12, 80);

  const demoData_Applications = [["APP-001","CAN-001","VAC-001","HIRED","TOPCV","2026-08-05T09:00:00Z","recruiter@minhtemplates.com","2026-08-05T09:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-002","CAN-002","VAC-001","INTERVIEW","LINKEDIN","2026-08-10T14:00:00Z","recruiter@minhtemplates.com","2026-08-10T14:00:00Z","2026-08-20T16:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-003","CAN-002","VAC-002","APPLIED","WEBSITE","2026-08-11T10:00:00Z","recruiter@minhtemplates.com","2026-08-11T10:00:00Z","2026-08-11T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-004","CAN-003","VAC-002","OFFER","REFERRAL","2026-08-12T10:00:00Z","recruiter@minhtemplates.com","2026-08-12T10:00:00Z","2026-08-28T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-005","CAN-004","VAC-002","REJECTED","TOPCV","2026-08-15T08:30:00Z","recruiter@minhtemplates.com","2026-08-15T08:30:00Z","2026-08-18T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Applications.length > 0) {
    sheet_Applications.getRange(2, 1, demoData_Applications.length, 12).setValues(demoData_Applications);
  }

  const rule_Applications_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPLIED","SCREENING","INTERVIEW","OFFER","HIRED","REJECTED"], true).build();
  sheet_Applications.getRange('D2:D1000').setDataValidation(rule_Applications_D2D1000);

  const rule_Applications_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["LINKEDIN","TOPCV","VIETNAMWORKS","REFERRAL","WEBSITE","OTHER"], true).build();
  sheet_Applications.getRange('E2:E1000').setDataValidation(rule_Applications_E2E1000);

  // =========================================================================
  // TAB: Interviews
  // =========================================================================
  const sheet_Interviews = sheets['Interviews'];
  sheet_Interviews.clear();
  sheet_Interviews.setTabColor('#43A047');
  sheet_Interviews.setFrozenRows(1);

  const headers_Interviews = ["ID","ApplicationID","StartAt","EndAt","InterviewerEmail","Round","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Interviews.getRange(1, 1, 1, 12).setValues([headers_Interviews])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Interviews.setRowHeight(1, 32);
  sheet_Interviews.setColumnWidth(1, 120);
  sheet_Interviews.setColumnWidth(2, 120);
  sheet_Interviews.setColumnWidth(3, 160);
  sheet_Interviews.setColumnWidth(4, 160);
  sheet_Interviews.setColumnWidth(5, 200);
  sheet_Interviews.setColumnWidth(6, 160);
  sheet_Interviews.setColumnWidth(7, 130);
  sheet_Interviews.setColumnWidth(8, 160);
  sheet_Interviews.setColumnWidth(9, 160);
  sheet_Interviews.setColumnWidth(10, 180);
  sheet_Interviews.setColumnWidth(11, 90);
  sheet_Interviews.setColumnWidth(12, 80);

  const demoData_Interviews = [["INT-001","APP-001","2026-08-12T09:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com","ROUND_2_TECHNICAL","COMPLETED","2026-08-08T09:00:00Z","2026-08-12T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["INT-002","APP-002","2026-08-22T14:00:00Z","2026-08-22T15:00:00Z","long.lh@minhtemplates.com","ROUND_2_TECHNICAL","SCHEDULED","2026-08-15T10:00:00Z","2026-08-15T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["INT-003","APP-004","2026-08-20T10:00:00Z","2026-08-20T11:00:00Z","thao.tt@minhtemplates.com","ROUND_2_TECHNICAL","COMPLETED","2026-08-16T14:00:00Z","2026-08-20T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Interviews.length > 0) {
    sheet_Interviews.getRange(2, 1, demoData_Interviews.length, 12).setValues(demoData_Interviews);
  }

  const rule_Interviews_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ROUND_1_HR","ROUND_2_TECHNICAL","ROUND_3_DIRECTOR"], true).build();
  sheet_Interviews.getRange('F2:F1000').setDataValidation(rule_Interviews_F2F1000);

  const rule_Interviews_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","COMPLETED","CANCELLED","NO_SHOW"], true).build();
  sheet_Interviews.getRange('G2:G1000').setDataValidation(rule_Interviews_G2G1000);

  // =========================================================================
  // TAB: Scorecards
  // =========================================================================
  const sheet_Scorecards = sheets['Scorecards'];
  sheet_Scorecards.clear();
  sheet_Scorecards.setTabColor('#FB8C00');
  sheet_Scorecards.setFrozenRows(1);

  const headers_Scorecards = ["ID","InterviewID","Criterion","Score","Comment","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Scorecards.getRange(1, 1, 1, 10).setValues([headers_Scorecards])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Scorecards.setRowHeight(1, 32);
  sheet_Scorecards.setColumnWidth(1, 120);
  sheet_Scorecards.setColumnWidth(2, 120);
  sheet_Scorecards.setColumnWidth(3, 180);
  sheet_Scorecards.setColumnWidth(4, 90);
  sheet_Scorecards.setColumnWidth(5, 280);
  sheet_Scorecards.setColumnWidth(6, 160);
  sheet_Scorecards.setColumnWidth(7, 160);
  sheet_Scorecards.setColumnWidth(8, 180);
  sheet_Scorecards.setColumnWidth(9, 90);
  sheet_Scorecards.setColumnWidth(10, 80);

  const demoData_Scorecards = [["SCR-001","INT-001","Kỹ năng Node.js & Database",5,"Kiến thức vững vàng, giải quyết thuật toán tốt","2026-08-12T10:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com",1,"FALSE"],["SCR-002","INT-001","Văn hóa & Kỹ năng giao tiếp",4,"Cởi mở, tinh thần đồng đội cao","2026-08-12T10:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com",1,"FALSE"],["SCR-003","INT-003","Kỹ năng đàm phán B2B",5,"Kinh nghiệm chốt hợp đồng dự án lớn xuất sắc","2026-08-20T11:00:00Z","2026-08-20T11:00:00Z","thao.tt@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Scorecards.length > 0) {
    sheet_Scorecards.getRange(2, 1, demoData_Scorecards.length, 10).setValues(demoData_Scorecards);
  }

  // =========================================================================
  // TAB: Offers
  // =========================================================================
  const sheet_Offers = sheets['Offers'];
  sheet_Offers.clear();
  sheet_Offers.setTabColor('#6A1B9A');
  sheet_Offers.setFrozenRows(1);

  const headers_Offers = ["ID","ApplicationID","OfferedSalary","SentAt","StartDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Offers.getRange(1, 1, 1, 11).setValues([headers_Offers])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Offers.setRowHeight(1, 32);
  sheet_Offers.setColumnWidth(1, 120);
  sheet_Offers.setColumnWidth(2, 120);
  sheet_Offers.setColumnWidth(3, 160);
  sheet_Offers.setColumnWidth(4, 110);
  sheet_Offers.setColumnWidth(5, 110);
  sheet_Offers.setColumnWidth(6, 130);
  sheet_Offers.setColumnWidth(7, 160);
  sheet_Offers.setColumnWidth(8, 160);
  sheet_Offers.setColumnWidth(9, 180);
  sheet_Offers.setColumnWidth(10, 90);
  sheet_Offers.setColumnWidth(11, 80);

  const demoData_Offers = [["OFR-001","APP-001",28000000,"2026-08-15","2026-09-01","ACCEPTED","2026-08-15T09:00:00Z","2026-08-18T14:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["OFR-002","APP-004",22000000,"2026-08-25","2026-09-15","SENT","2026-08-25T10:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Offers.length > 0) {
    sheet_Offers.getRange(2, 1, demoData_Offers.length, 11).setValues(demoData_Offers);
  }
  sheet_Offers.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_Offers.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_Offers_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SENT","ACCEPTED","DECLINED","EXPIRED"], true).build();
  sheet_Offers.getRange('F2:F1000').setDataValidation(rule_Offers_F2F1000);

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
  
  const setRows = [["Đơn vị tuyển dụng:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Kênh tuyển dụng ưu tiên:","LinkedIn, TopCV, VietnamWorks, Mạng lưới nội bộ"],["Thời gian phản hồi ứng viên cam kết:","Trong vòng 48 giờ làm việc sau phỏng vấn"],["Quy trình đánh giá:","Vòng 1 (HR Screen) -> Vòng 2 (Chuyên môn) -> Vòng 3 (Ban Giám Đốc)"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH QUẢN TRỊ TUYỂN DỤNG & ỨNG VIÊN (F13)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi chỉ tiêu tuyển • Phễu ứng viên • Lịch phỏng vấn • Tỷ lệ nhận việc (Offer Rate)')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ ỨNG VIÊN ĐÃ TIẾP NHẬN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ ỨNG VIÊN ĐÃ TIẾP NHẬN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Candidates!$B$2:$B$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');
  dashSheet.getRange('A6:B6').merge().setValue('Số lượng ứng viên đã nộp hồ sơ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỶ LỆ NHẬN VIỆC (OFFER RATE)
  dashSheet.getRange('C4:D4').merge().setValue('TỶ LỆ NHẬN VIỆC (OFFER RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=IFERROR(COUNTIFS(Offers!$F$2:$F$1000, "ACCEPTED") / COUNTIFS(Offers!$F$2:$F$1000, "<>DRAFT"), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('0.0%');
  dashSheet.getRange('C6:D6').merge().setValue('Tỷ lệ ứng viên đồng ý nhận việc')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: SỐ VỊ TRÍ ĐANG MỞ TUYỂN DỤNG
  dashSheet.getRange('E4:F4').merge().setValue('SỐ VỊ TRÍ ĐANG MỞ TUYỂN DỤNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(Vacancies!$H$2:$H$1000, "OPEN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Vị trí công việc đang tìm kiếm nhân tài')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: LỊCH PHỎNG VẤN ĐÃ LÊN LỊCH
  dashSheet.getRange('G4:H4').merge().setValue('LỊCH PHỎNG VẤN ĐÃ LÊN LỊCH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(Interviews!$G$2:$G$1000, "SCHEDULED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Các buổi phỏng vấn sắp diễn ra')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

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

// ============================================================================
// INSTALLER SKU F32: CHẤM CÔNG & TỔNG HỢP CA LÀM VIỆC
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F32 — Chấm công & tổng hợp ca làm việc
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F32_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF32Workbook(true);
}

function setupCleanTemplate() {
  initF32Workbook(false);
}

function initF32Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Shifts","ShiftAssignments","TimeEntries","AttendanceAdjustments","Holidays","AttendanceSummary","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — CHẤM CÔNG & TỔNG HỢP CA LÀM VIỆC (F32)')
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
  // TAB: Shifts
  // =========================================================================
  const sheet_Shifts = sheets['Shifts'];
  sheet_Shifts.clear();
  sheet_Shifts.setTabColor('#1565C0');
  sheet_Shifts.setFrozenRows(1);

  const headers_Shifts = ["ID","ShiftCode","Name","StartTime","EndTime","BreakMinutes","CrossesMidnight","StandardHours","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Shifts.getRange(1, 1, 1, 13).setValues([headers_Shifts])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Shifts.setRowHeight(1, 32);
  sheet_Shifts.setColumnWidth(1, 120);
  sheet_Shifts.setColumnWidth(2, 110);
  sheet_Shifts.setColumnWidth(3, 160);
  sheet_Shifts.setColumnWidth(4, 100);
  sheet_Shifts.setColumnWidth(5, 100);
  sheet_Shifts.setColumnWidth(6, 110);
  sheet_Shifts.setColumnWidth(7, 130);
  sheet_Shifts.setColumnWidth(8, 120);
  sheet_Shifts.setColumnWidth(9, 160);
  sheet_Shifts.setColumnWidth(10, 160);
  sheet_Shifts.setColumnWidth(11, 180);
  sheet_Shifts.setColumnWidth(12, 90);
  sheet_Shifts.setColumnWidth(13, 80);

  const demoData_Shifts = [["SH-001","CA-HC","Ca Hành Chính","08:00","17:00",60,"FALSE",8,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SH-002","CA-SANG","Ca Sáng","06:00","14:00",30,"FALSE",7.5,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SH-003","CA-CHIEU","Ca Chiều","14:00","22:00",30,"FALSE",7.5,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SH-004","CA-DEM","Ca Đêm Qua Ngày (CODEX)","22:00","06:00",60,"TRUE",7,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Shifts.length > 0) {
    sheet_Shifts.getRange(2, 1, demoData_Shifts.length, 13).setValues(demoData_Shifts);
  }

  // =========================================================================
  // TAB: ShiftAssignments
  // =========================================================================
  const sheet_ShiftAssignments = sheets['ShiftAssignments'];
  sheet_ShiftAssignments.clear();
  sheet_ShiftAssignments.setTabColor('#0277BD');
  sheet_ShiftAssignments.setFrozenRows(1);

  const headers_ShiftAssignments = ["ID","EmployeeID","WorkDate","ShiftID","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ShiftAssignments.getRange(1, 1, 1, 10).setValues([headers_ShiftAssignments])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ShiftAssignments.setRowHeight(1, 32);
  sheet_ShiftAssignments.setColumnWidth(1, 120);
  sheet_ShiftAssignments.setColumnWidth(2, 120);
  sheet_ShiftAssignments.setColumnWidth(3, 110);
  sheet_ShiftAssignments.setColumnWidth(4, 120);
  sheet_ShiftAssignments.setColumnWidth(5, 130);
  sheet_ShiftAssignments.setColumnWidth(6, 160);
  sheet_ShiftAssignments.setColumnWidth(7, 160);
  sheet_ShiftAssignments.setColumnWidth(8, 180);
  sheet_ShiftAssignments.setColumnWidth(9, 90);
  sheet_ShiftAssignments.setColumnWidth(10, 80);

  const demoData_ShiftAssignments = [["ASG-001","EMP-001","2026-09-01","SH-001","CONFIRMED","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ASG-002","EMP-002","2026-09-01","SH-001","CONFIRMED","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ASG-003","EMP-003","2026-09-01","SH-004","CONFIRMED","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ShiftAssignments.length > 0) {
    sheet_ShiftAssignments.getRange(2, 1, demoData_ShiftAssignments.length, 10).setValues(demoData_ShiftAssignments);
  }
  sheet_ShiftAssignments.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: TimeEntries
  // =========================================================================
  const sheet_TimeEntries = sheets['TimeEntries'];
  sheet_TimeEntries.clear();
  sheet_TimeEntries.setTabColor('#00838F');
  sheet_TimeEntries.setFrozenRows(1);

  const headers_TimeEntries = ["ID","EmployeeID","WorkDate","CheckInAt","CheckOutAt","WorkHours","LateMinutes","EarlyMinutes","Source","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_TimeEntries.getRange(1, 1, 1, 15).setValues([headers_TimeEntries])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TimeEntries.setRowHeight(1, 32);
  sheet_TimeEntries.setColumnWidth(1, 120);
  sheet_TimeEntries.setColumnWidth(2, 120);
  sheet_TimeEntries.setColumnWidth(3, 110);
  sheet_TimeEntries.setColumnWidth(4, 160);
  sheet_TimeEntries.setColumnWidth(5, 160);
  sheet_TimeEntries.setColumnWidth(6, 110);
  sheet_TimeEntries.setColumnWidth(7, 110);
  sheet_TimeEntries.setColumnWidth(8, 110);
  sheet_TimeEntries.setColumnWidth(9, 130);
  sheet_TimeEntries.setColumnWidth(10, 130);
  sheet_TimeEntries.setColumnWidth(11, 160);
  sheet_TimeEntries.setColumnWidth(12, 160);
  sheet_TimeEntries.setColumnWidth(13, 180);
  sheet_TimeEntries.setColumnWidth(14, 90);
  sheet_TimeEntries.setColumnWidth(15, 80);

  const demoData_TimeEntries = [["TME-001","EMP-001","2026-09-01","2026-09-01 08:00:00","2026-09-01 17:00:00",8,0,0,"APP_GPS","VALID","2026-09-01T08:00:00Z","2026-09-01T17:00:00Z","EMP-001",1,"FALSE"],["TME-002","EMP-002","2026-09-01","2026-09-01 08:15:00","2026-09-01 17:00:00",7.75,15,0,"FACE_ID","VALID","2026-09-01T08:15:00Z","2026-09-01T17:00:00Z","EMP-002",1,"FALSE"],["TME-003","EMP-003","2026-09-01","2026-09-01 22:00:00","2026-09-02 06:00:00",7,0,0,"FINGERPRINT","VALID","2026-09-01T22:00:00Z","2026-09-02T06:00:00Z","EMP-003",1,"FALSE"],["TME-004","EMP-004","2026-09-01","2026-09-01 08:00:00","",0,0,0,"WEB_PORTAL","INCOMPLETE","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","EMP-004",1,"FALSE"]];
  if (isDemo && demoData_TimeEntries.length > 0) {
    sheet_TimeEntries.getRange(2, 1, demoData_TimeEntries.length, 15).setValues(demoData_TimeEntries);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_TimeEntries.length > 0) {
    for (let r = 2; r <= demoData_TimeEntries.length + 1; r++) {
      sheet_TimeEntries.getRange(r, 6).setFormula('=IF(OR(D' + r + '="", E' + r + '=""), 0, MAX(0, ROUND((IF(INT(DATEVALUE(MID(E' + r + ',1,10))) > INT(DATEVALUE(MID(D' + r + ',1,10))), (TIMEVALUE(MID(E' + r + ',12,8)) + 1) - TIMEVALUE(MID(D' + r + ',12,8)), TIMEVALUE(MID(E' + r + ',12,8)) - TIMEVALUE(MID(D' + r + ',12,8)))) * 24 - 1, 2)))');
    }
  }
  sheet_TimeEntries.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');
  sheet_TimeEntries.getRange('F2:F1000').setNumberFormat('0.0');

  const rule_TimeEntries_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["FINGERPRINT","APP_GPS","FACE_ID","WEB_PORTAL","MANUAL"], true).build();
  sheet_TimeEntries.getRange('I2:I1000').setDataValidation(rule_TimeEntries_I2I1000);

  const rule_TimeEntries_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["VALID","INCOMPLETE","SUSPECT_DUPLICATE","ADJUSTED"], true).build();
  sheet_TimeEntries.getRange('J2:J1000').setDataValidation(rule_TimeEntries_J2J1000);

  // =========================================================================
  // TAB: AttendanceAdjustments
  // =========================================================================
  const sheet_AttendanceAdjustments = sheets['AttendanceAdjustments'];
  sheet_AttendanceAdjustments.clear();
  sheet_AttendanceAdjustments.setTabColor('#43A047');
  sheet_AttendanceAdjustments.setFrozenRows(1);

  const headers_AttendanceAdjustments = ["ID","EntryID","RequestedCheckIn","RequestedCheckOut","Reason","State","ApprovedBy","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_AttendanceAdjustments.getRange(1, 1, 1, 12).setValues([headers_AttendanceAdjustments])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_AttendanceAdjustments.setRowHeight(1, 32);
  sheet_AttendanceAdjustments.setColumnWidth(1, 120);
  sheet_AttendanceAdjustments.setColumnWidth(2, 120);
  sheet_AttendanceAdjustments.setColumnWidth(3, 160);
  sheet_AttendanceAdjustments.setColumnWidth(4, 160);
  sheet_AttendanceAdjustments.setColumnWidth(5, 240);
  sheet_AttendanceAdjustments.setColumnWidth(6, 120);
  sheet_AttendanceAdjustments.setColumnWidth(7, 180);
  sheet_AttendanceAdjustments.setColumnWidth(8, 160);
  sheet_AttendanceAdjustments.setColumnWidth(9, 160);
  sheet_AttendanceAdjustments.setColumnWidth(10, 180);
  sheet_AttendanceAdjustments.setColumnWidth(11, 90);
  sheet_AttendanceAdjustments.setColumnWidth(12, 80);

  const demoData_AttendanceAdjustments = [["ADJ-001","TME-004","2026-09-01 08:00:00","2026-09-01 17:00:00","Quên quẹt thẻ ra do mất điện đột xuất","PENDING","thao.tt@minhtemplates.com","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","EMP-004",1,"FALSE"]];
  if (isDemo && demoData_AttendanceAdjustments.length > 0) {
    sheet_AttendanceAdjustments.getRange(2, 1, demoData_AttendanceAdjustments.length, 12).setValues(demoData_AttendanceAdjustments);
  }

  const rule_AttendanceAdjustments_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","APPROVED","REJECTED"], true).build();
  sheet_AttendanceAdjustments.getRange('F2:F1000').setDataValidation(rule_AttendanceAdjustments_F2F1000);

  // =========================================================================
  // TAB: Holidays
  // =========================================================================
  const sheet_Holidays = sheets['Holidays'];
  sheet_Holidays.clear();
  sheet_Holidays.setTabColor('#FB8C00');
  sheet_Holidays.setFrozenRows(1);

  const headers_Holidays = ["ID","Date","Name","Type","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Holidays.getRange(1, 1, 1, 9).setValues([headers_Holidays])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Holidays.setRowHeight(1, 32);
  sheet_Holidays.setColumnWidth(1, 120);
  sheet_Holidays.setColumnWidth(2, 110);
  sheet_Holidays.setColumnWidth(3, 240);
  sheet_Holidays.setColumnWidth(4, 130);
  sheet_Holidays.setColumnWidth(5, 160);
  sheet_Holidays.setColumnWidth(6, 160);
  sheet_Holidays.setColumnWidth(7, 180);
  sheet_Holidays.setColumnWidth(8, 90);
  sheet_Holidays.setColumnWidth(9, 80);

  const demoData_Holidays = [["HOL-001","2026-01-01","Tết Dương Lịch","NATIONAL","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["HOL-002","2026-04-30","Ngày Giải phóng Miền Nam","NATIONAL","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["HOL-003","2026-05-01","Ngày Quốc Tế Lao Động","NATIONAL","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["HOL-004","2026-09-02","Ngày Quốc Khánh","NATIONAL","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Holidays.length > 0) {
    sheet_Holidays.getRange(2, 1, demoData_Holidays.length, 9).setValues(demoData_Holidays);
  }
  sheet_Holidays.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: AttendanceSummary
  // =========================================================================
  const sheet_AttendanceSummary = sheets['AttendanceSummary'];
  sheet_AttendanceSummary.clear();
  sheet_AttendanceSummary.setTabColor('#6A1B9A');
  sheet_AttendanceSummary.setFrozenRows(1);

  const headers_AttendanceSummary = ["ID","EmployeeID","Period","RegularHours","OvertimeHours","LeaveDays","WorkingDays","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_AttendanceSummary.getRange(1, 1, 1, 13).setValues([headers_AttendanceSummary])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_AttendanceSummary.setRowHeight(1, 32);
  sheet_AttendanceSummary.setColumnWidth(1, 120);
  sheet_AttendanceSummary.setColumnWidth(2, 120);
  sheet_AttendanceSummary.setColumnWidth(3, 110);
  sheet_AttendanceSummary.setColumnWidth(4, 120);
  sheet_AttendanceSummary.setColumnWidth(5, 120);
  sheet_AttendanceSummary.setColumnWidth(6, 110);
  sheet_AttendanceSummary.setColumnWidth(7, 110);
  sheet_AttendanceSummary.setColumnWidth(8, 120);
  sheet_AttendanceSummary.setColumnWidth(9, 160);
  sheet_AttendanceSummary.setColumnWidth(10, 160);
  sheet_AttendanceSummary.setColumnWidth(11, 180);
  sheet_AttendanceSummary.setColumnWidth(12, 90);
  sheet_AttendanceSummary.setColumnWidth(13, 80);

  const demoData_AttendanceSummary = [["SUM-001","EMP-001","2026-08",176,4,1,22,"LOCKED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SUM-002","EMP-002","2026-08",172,0,0,22,"LOCKED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SUM-003","EMP-003","2026-08",168,12,0,22,"LOCKED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_AttendanceSummary.length > 0) {
    sheet_AttendanceSummary.getRange(2, 1, demoData_AttendanceSummary.length, 13).setValues(demoData_AttendanceSummary);
  }

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
  
  const setRows = [["Đơn vị quản lý chấm công:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Giờ tiêu chuẩn ca hành chính:","08:00 đến 17:00 (Nghỉ trưa 60 phút)"],["Quy tắc làm tròn đi muộn:","Theo block 15 phút"],["Ngưỡng tính tăng ca (OT):","Sau khi đủ 8 giờ làm việc tiêu chuẩn"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH CHẤM CÔNG & TỔNG HỢP CA (F32)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi ca làm việc • Tổng giờ công • Giờ làm thêm (OT) • Đơn điều chỉnh giải trình')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIỜ CÔNG CHUẨN ĐÃ CHỐT
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIỜ CÔNG CHUẨN ĐÃ CHỐT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUM(AttendanceSummary!$D$2:$D$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0.0 "giờ"');
  dashSheet.getRange('A6:B6').merge().setValue('Giờ làm việc tiêu chuẩn trong kỳ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỔNG GIỜ LÀM THÊM (OT)
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG GIỜ LÀM THÊM (OT)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('C5:D5').merge().setValue('=SUM(AttendanceSummary!$E$2:$E$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0.0 "giờ"');
  dashSheet.getRange('C6:D6').merge().setValue('Thời gian tăng ca được duyệt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 3: LƯỢT QUÊN CHECK-OUT CHỜ XỬ LÝ
  dashSheet.getRange('E4:F4').merge().setValue('LƯỢT QUÊN CHECK-OUT CHỜ XỬ LÝ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(TimeEntries!$J$2:$J$1000, "INCOMPLETE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Dữ liệu chấm công thiếu mốc ra')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 4: ĐƠN ĐIỀU CHỈNH CHỜ DUYỆT
  dashSheet.getRange('G4:H4').merge().setValue('ĐƠN ĐIỀU CHỈNH CHỜ DUYỆT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(AttendanceAdjustments!$F$2:$F$1000, "PENDING")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Yêu cầu bổ sung giờ chấm công')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

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

// ============================================================================
// INSTALLER SKU F38: QUẢN LÝ NGHỈ PHÉP & SỐ DƯ PHÉP NĂM
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F38 — Quản lý nghỉ phép & số dư phép năm
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F38_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF38Workbook(true);
}

function setupCleanTemplate() {
  initF38Workbook(false);
}

function initF38Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","LeaveTypes","LeavePolicies","LeaveBalances","LeaveRequests","WorkCalendar","LeaveApprovals","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ NGHỈ PHÉP & SỐ DƯ PHÉP NĂM (F38)')
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
  // TAB: LeaveTypes
  // =========================================================================
  const sheet_LeaveTypes = sheets['LeaveTypes'];
  sheet_LeaveTypes.clear();
  sheet_LeaveTypes.setTabColor('#1565C0');
  sheet_LeaveTypes.setFrozenRows(1);

  const headers_LeaveTypes = ["ID","TypeCode","Name","DeductBalance","MaxDaysPerYear","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_LeaveTypes.getRange(1, 1, 1, 10).setValues([headers_LeaveTypes])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LeaveTypes.setRowHeight(1, 32);
  sheet_LeaveTypes.setColumnWidth(1, 120);
  sheet_LeaveTypes.setColumnWidth(2, 110);
  sheet_LeaveTypes.setColumnWidth(3, 200);
  sheet_LeaveTypes.setColumnWidth(4, 130);
  sheet_LeaveTypes.setColumnWidth(5, 140);
  sheet_LeaveTypes.setColumnWidth(6, 160);
  sheet_LeaveTypes.setColumnWidth(7, 160);
  sheet_LeaveTypes.setColumnWidth(8, 180);
  sheet_LeaveTypes.setColumnWidth(9, 90);
  sheet_LeaveTypes.setColumnWidth(10, 80);

  const demoData_LeaveTypes = [["LVT-001","AL","Nghỉ phép năm (Annual Leave)","TRUE",12,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["LVT-002","SL","Nghỉ ốm hưởng BHXH (Sick Leave)","FALSE",30,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["LVT-003","UL","Nghỉ không lương (Unpaid Leave)","FALSE",15,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["LVT-004","CL","Nghỉ bù tăng ca (Compensatory Leave)","FALSE",10,"2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_LeaveTypes.length > 0) {
    sheet_LeaveTypes.getRange(2, 1, demoData_LeaveTypes.length, 10).setValues(demoData_LeaveTypes);
  }

  // =========================================================================
  // TAB: LeavePolicies
  // =========================================================================
  const sheet_LeavePolicies = sheets['LeavePolicies'];
  sheet_LeavePolicies.clear();
  sheet_LeavePolicies.setTabColor('#0277BD');
  sheet_LeavePolicies.setFrozenRows(1);

  const headers_LeavePolicies = ["ID","PolicyName","EffectiveFrom","EntitlementRule","CarryoverRule","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_LeavePolicies.getRange(1, 1, 1, 10).setValues([headers_LeavePolicies])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LeavePolicies.setRowHeight(1, 32);
  sheet_LeavePolicies.setColumnWidth(1, 120);
  sheet_LeavePolicies.setColumnWidth(2, 220);
  sheet_LeavePolicies.setColumnWidth(3, 120);
  sheet_LeavePolicies.setColumnWidth(4, 260);
  sheet_LeavePolicies.setColumnWidth(5, 260);
  sheet_LeavePolicies.setColumnWidth(6, 160);
  sheet_LeavePolicies.setColumnWidth(7, 160);
  sheet_LeavePolicies.setColumnWidth(8, 180);
  sheet_LeavePolicies.setColumnWidth(9, 90);
  sheet_LeavePolicies.setColumnWidth(10, 80);

  const demoData_LeavePolicies = [["POL-001","Chính sách Nghỉ phép Năm 2026","2026-01-01","1 ngày/tháng thâm niên, tăng 1 ngày sau mỗi 5 năm","Chuyển tối đa 5 ngày sang năm sau, hạn chốt 31/03","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_LeavePolicies.length > 0) {
    sheet_LeavePolicies.getRange(2, 1, demoData_LeavePolicies.length, 10).setValues(demoData_LeavePolicies);
  }
  sheet_LeavePolicies.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: LeaveBalances
  // =========================================================================
  const sheet_LeaveBalances = sheets['LeaveBalances'];
  sheet_LeaveBalances.clear();
  sheet_LeaveBalances.setTabColor('#00838F');
  sheet_LeaveBalances.setFrozenRows(1);

  const headers_LeaveBalances = ["ID","EmployeeID","Year","TypeID","Opening","Accrued","Used","Pending","Remaining","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_LeaveBalances.getRange(1, 1, 1, 14).setValues([headers_LeaveBalances])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LeaveBalances.setRowHeight(1, 32);
  sheet_LeaveBalances.setColumnWidth(1, 120);
  sheet_LeaveBalances.setColumnWidth(2, 120);
  sheet_LeaveBalances.setColumnWidth(3, 80);
  sheet_LeaveBalances.setColumnWidth(4, 110);
  sheet_LeaveBalances.setColumnWidth(5, 100);
  sheet_LeaveBalances.setColumnWidth(6, 100);
  sheet_LeaveBalances.setColumnWidth(7, 90);
  sheet_LeaveBalances.setColumnWidth(8, 90);
  sheet_LeaveBalances.setColumnWidth(9, 110);
  sheet_LeaveBalances.setColumnWidth(10, 160);
  sheet_LeaveBalances.setColumnWidth(11, 160);
  sheet_LeaveBalances.setColumnWidth(12, 180);
  sheet_LeaveBalances.setColumnWidth(13, 90);
  sheet_LeaveBalances.setColumnWidth(14, 80);

  const demoData_LeaveBalances = [["BAL-001","EMP-001",2026,"LVT-001",3,12,2,0,13,"2026-01-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["BAL-002","EMP-002",2026,"LVT-001",1,12,4,1,9,"2026-01-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["BAL-003","EMP-003",2026,"LVT-001",0,12,1,0,11,"2026-01-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["BAL-004","EMP-004",2026,"LVT-001",0,6,0,0,6,"2026-07-01T08:00:00Z","2026-09-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_LeaveBalances.length > 0) {
    sheet_LeaveBalances.getRange(2, 1, demoData_LeaveBalances.length, 14).setValues(demoData_LeaveBalances);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_LeaveBalances.length > 0) {
    for (let r = 2; r <= demoData_LeaveBalances.length + 1; r++) {
      sheet_LeaveBalances.getRange(r, 9).setFormula('=E' + r + ' + F' + r + ' - G' + r);
    }
  }
  sheet_LeaveBalances.getRange('E2:I1000').setNumberFormat('0.0');

  // =========================================================================
  // TAB: LeaveRequests
  // =========================================================================
  const sheet_LeaveRequests = sheets['LeaveRequests'];
  sheet_LeaveRequests.clear();
  sheet_LeaveRequests.setTabColor('#43A047');
  sheet_LeaveRequests.setFrozenRows(1);

  const headers_LeaveRequests = ["ID","RequestNumber","EmployeeID","TypeID","StartDate","EndDate","StartHalf","EndHalf","DurationDays","Reason","State","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_LeaveRequests.getRange(1, 1, 1, 16).setValues([headers_LeaveRequests])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LeaveRequests.setRowHeight(1, 32);
  sheet_LeaveRequests.setColumnWidth(1, 120);
  sheet_LeaveRequests.setColumnWidth(2, 130);
  sheet_LeaveRequests.setColumnWidth(3, 120);
  sheet_LeaveRequests.setColumnWidth(4, 110);
  sheet_LeaveRequests.setColumnWidth(5, 110);
  sheet_LeaveRequests.setColumnWidth(6, 110);
  sheet_LeaveRequests.setColumnWidth(7, 120);
  sheet_LeaveRequests.setColumnWidth(8, 120);
  sheet_LeaveRequests.setColumnWidth(9, 110);
  sheet_LeaveRequests.setColumnWidth(10, 220);
  sheet_LeaveRequests.setColumnWidth(11, 120);
  sheet_LeaveRequests.setColumnWidth(12, 160);
  sheet_LeaveRequests.setColumnWidth(13, 160);
  sheet_LeaveRequests.setColumnWidth(14, 180);
  sheet_LeaveRequests.setColumnWidth(15, 90);
  sheet_LeaveRequests.setColumnWidth(16, 80);

  const demoData_LeaveRequests = [["REQ-001","NP-2026-001","EMP-001","LVT-001","2026-09-04","2026-09-07","FULL_DAY","FULL_DAY",2,"Nghỉ từ Thứ Sáu đến Thứ Hai (CODEX)","APPROVED","2026-09-01T08:00:00Z","2026-09-02T10:00:00Z","EMP-001",1,"FALSE"],["REQ-002","NP-2026-002","EMP-002","LVT-001","2026-09-10","2026-09-10","MORNING","MORNING",0.5,"Nghỉ giải quyết việc gia đình buổi sáng","APPROVED","2026-09-08T08:00:00Z","2026-09-08T15:00:00Z","EMP-002",1,"FALSE"],["REQ-003","NP-2026-003","EMP-002","LVT-001","2026-09-15","2026-09-15","AFTERNOON","AFTERNOON",0.5,"Nghỉ buổi chiều đi khám sức khỏe","APPROVED","2026-09-12T09:00:00Z","2026-09-13T10:00:00Z","EMP-002",1,"FALSE"],["REQ-004","NP-2026-004","EMP-003","LVT-001","2026-09-21","2026-09-22","FULL_DAY","FULL_DAY",2,"Nghỉ phép cá nhân","SUBMITTED","2026-09-18T08:00:00Z","2026-09-18T08:00:00Z","EMP-003",1,"FALSE"]];
  if (isDemo && demoData_LeaveRequests.length > 0) {
    sheet_LeaveRequests.getRange(2, 1, demoData_LeaveRequests.length, 16).setValues(demoData_LeaveRequests);
  }
  sheet_LeaveRequests.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_LeaveRequests.getRange('I2:I1000').setNumberFormat('0.0');

  const rule_LeaveRequests_G2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["FULL_DAY","MORNING","AFTERNOON"], true).build();
  sheet_LeaveRequests.getRange('G2:H1000').setDataValidation(rule_LeaveRequests_G2H1000);

  const rule_LeaveRequests_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SUBMITTED","APPROVED","REJECTED","CANCELLED"], true).build();
  sheet_LeaveRequests.getRange('K2:K1000').setDataValidation(rule_LeaveRequests_K2K1000);

  // =========================================================================
  // TAB: WorkCalendar
  // =========================================================================
  const sheet_WorkCalendar = sheets['WorkCalendar'];
  sheet_WorkCalendar.clear();
  sheet_WorkCalendar.setTabColor('#FB8C00');
  sheet_WorkCalendar.setFrozenRows(1);

  const headers_WorkCalendar = ["ID","Date","DayOfWeek","IsWorkingDay","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_WorkCalendar.getRange(1, 1, 1, 10).setValues([headers_WorkCalendar])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_WorkCalendar.setRowHeight(1, 32);
  sheet_WorkCalendar.setColumnWidth(1, 120);
  sheet_WorkCalendar.setColumnWidth(2, 110);
  sheet_WorkCalendar.setColumnWidth(3, 130);
  sheet_WorkCalendar.setColumnWidth(4, 120);
  sheet_WorkCalendar.setColumnWidth(5, 200);
  sheet_WorkCalendar.setColumnWidth(6, 160);
  sheet_WorkCalendar.setColumnWidth(7, 160);
  sheet_WorkCalendar.setColumnWidth(8, 180);
  sheet_WorkCalendar.setColumnWidth(9, 90);
  sheet_WorkCalendar.setColumnWidth(10, 80);

  const demoData_WorkCalendar = [["CAL-001","2026-09-04","Thứ Sáu","TRUE","Ngày làm việc bình thường","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAL-002","2026-09-05","Thứ Bảy","FALSE","Nghỉ cuối tuần","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAL-003","2026-09-06","Chủ Nhật","FALSE","Nghỉ cuối tuần","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAL-004","2026-09-07","Thứ Hai","TRUE","Ngày làm việc bình thường","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_WorkCalendar.length > 0) {
    sheet_WorkCalendar.getRange(2, 1, demoData_WorkCalendar.length, 10).setValues(demoData_WorkCalendar);
  }
  sheet_WorkCalendar.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: LeaveApprovals
  // =========================================================================
  const sheet_LeaveApprovals = sheets['LeaveApprovals'];
  sheet_LeaveApprovals.clear();
  sheet_LeaveApprovals.setTabColor('#6A1B9A');
  sheet_LeaveApprovals.setFrozenRows(1);

  const headers_LeaveApprovals = ["ID","RequestID","ApproverEmail","Decision","DecisionAt","Comment","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_LeaveApprovals.getRange(1, 1, 1, 11).setValues([headers_LeaveApprovals])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LeaveApprovals.setRowHeight(1, 32);
  sheet_LeaveApprovals.setColumnWidth(1, 120);
  sheet_LeaveApprovals.setColumnWidth(2, 120);
  sheet_LeaveApprovals.setColumnWidth(3, 200);
  sheet_LeaveApprovals.setColumnWidth(4, 130);
  sheet_LeaveApprovals.setColumnWidth(5, 160);
  sheet_LeaveApprovals.setColumnWidth(6, 240);
  sheet_LeaveApprovals.setColumnWidth(7, 160);
  sheet_LeaveApprovals.setColumnWidth(8, 160);
  sheet_LeaveApprovals.setColumnWidth(9, 180);
  sheet_LeaveApprovals.setColumnWidth(10, 90);
  sheet_LeaveApprovals.setColumnWidth(11, 80);

  const demoData_LeaveApprovals = [["APR-001","REQ-001","admin@minhtemplates.com","APPROVED","2026-09-02T10:00:00Z","Đồng ý duyệt phép","2026-09-02T10:00:00Z","2026-09-02T10:00:00Z","admin@minhtemplates.com",1,"FALSE"],["APR-002","REQ-002","admin@minhtemplates.com","APPROVED","2026-09-08T15:00:00Z","Duyệt nghỉ nửa ngày sáng","2026-09-08T15:00:00Z","2026-09-08T15:00:00Z","admin@minhtemplates.com",1,"FALSE"],["APR-003","REQ-003","admin@minhtemplates.com","APPROVED","2026-09-13T10:00:00Z","Duyệt nghỉ nửa ngày chiều","2026-09-13T10:00:00Z","2026-09-13T10:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_LeaveApprovals.length > 0) {
    sheet_LeaveApprovals.getRange(2, 1, demoData_LeaveApprovals.length, 11).setValues(demoData_LeaveApprovals);
  }

  const rule_LeaveApprovals_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPROVED","REJECTED"], true).build();
  sheet_LeaveApprovals.getRange('D2:D1000').setDataValidation(rule_LeaveApprovals_D2D1000);

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
  
  const setRows = [["Đơn vị quản lý nghỉ phép:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Hạn mức phép năm mặc định:","12 ngày/năm (1 ngày/tháng)"],["Chính sách nghỉ nửa ngày:","2 buổi nửa ngày (Sáng/Chiều) tương đương 1 ngày phép nguyên"],["Thời gian nộp đơn phép trước:","Tối thiểu 24 giờ đối với phép thông thường"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH NGHỈ PHÉP & SỐ DƯ PHÉP NĂM (F38)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi quỹ phép năm • Ngày phép đã nghỉ • Đơn xin nghỉ chờ duyệt • Lịch vắng mặt')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NGÀY PHÉP ĐÃ NGHỈ (NĂM 2026)
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NGÀY PHÉP ĐÃ NGHỈ (NĂM 2026)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(LeaveRequests!$I$2:$I$1000, LeaveRequests!$K$2:$K$1000, "APPROVED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0.0 "ngày"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng số ngày nghỉ phép đã được phê duyệt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: ĐƠN XIN NGHỈ PHÉP CHỜ DUYỆT
  dashSheet.getRange('C4:D4').merge().setValue('ĐƠN XIN NGHỈ PHÉP CHỜ DUYỆT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(LeaveRequests!$K$2:$K$1000, "SUBMITTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('C6:D6').merge().setValue('Đơn của nhân viên cần quản lý xử lý')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 3: TỔNG SỐ DƯ PHÉP CÒN LẠI TOÀN CÔNG TY
  dashSheet.getRange('E4:F4').merge().setValue('TỔNG SỐ DƯ PHÉP CÒN LẠI TOÀN CÔNG TY')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('E5:F5').merge().setValue('=SUM(LeaveBalances!$I$2:$I$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0.0 "ngày"');
  dashSheet.getRange('E6:F6').merge().setValue('Quỹ ngày phép chưa sử dụng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 4: TỶ LỆ SỬ DỤNG PHÉP NĂM (%)
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ SỬ DỤNG PHÉP NĂM (%)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(SUM(LeaveBalances!$G$2:$G$1000) / SUM(LeaveBalances!$F$2:$F$1000), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('0.0%');
  dashSheet.getRange('G6:H6').merge().setValue('Tỷ lệ ngày phép đã dùng trên hạn mức')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

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

// ============================================================================
// INSTALLER SKU F09: LỊCH LÃNH ĐẠO, CUỘC HỌP VÀ CÔNG TÁC
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F09 — Lịch lãnh đạo, cuộc họp và công tác
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F09_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF09Workbook(true);
}

function setupCleanTemplate() {
  initF09Workbook(false);
}

function initF09Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Events","Attendees","MeetingResources","Reservations","Trips","ActionItems","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LỊCH LÃNH ĐẠO, CUỘC HỌP VÀ CÔNG TÁC (F09)')
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
  // TAB: Events
  // =========================================================================
  const sheet_Events = sheets['Events'];
  sheet_Events.clear();
  sheet_Events.setTabColor('#1E88E5');
  sheet_Events.setFrozenRows(1);

  const headers_Events = ["ID","Title","Type","StartAt","EndAt","Location","OrganizerEmail","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Events.getRange(1, 1, 1, 13).setValues([headers_Events])
    .setFontWeight('bold').setBackground('#1E88E5').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Events.setRowHeight(1, 32);
  sheet_Events.setColumnWidth(1, 120);
  sheet_Events.setColumnWidth(2, 240);
  sheet_Events.setColumnWidth(3, 130);
  sheet_Events.setColumnWidth(4, 160);
  sheet_Events.setColumnWidth(5, 160);
  sheet_Events.setColumnWidth(6, 160);
  sheet_Events.setColumnWidth(7, 200);
  sheet_Events.setColumnWidth(8, 130);
  sheet_Events.setColumnWidth(9, 160);
  sheet_Events.setColumnWidth(10, 160);
  sheet_Events.setColumnWidth(11, 180);
  sheet_Events.setColumnWidth(12, 90);
  sheet_Events.setColumnWidth(13, 80);

  const demoData_Events = [["EVT-001","Họp Ban Giám Đốc Tuần 37","MEETING","2026-09-14 08:30:00","2026-09-14 10:00:00","Phòng họp VIP A","lanhdao@minhtemplates.com","SCHEDULED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["EVT-002","Họp Giao Ban Khối Vận Hành","MEETING","2026-09-14 10:00:00","2026-09-14 11:30:00","Phòng họp VIP A","lanhdao@minhtemplates.com","SCHEDULED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["EVT-003","Công tác Xúc tiến Thương mại Đà Nẵng","TRIP","2026-09-18 07:00:00","2026-09-20 18:00:00","Đà Nẵng","lanhdao@minhtemplates.com","SCHEDULED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["EVT-004","Tiếp Đoàn Đối Tác Chiến Lược","APPOINTMENT","2026-09-15 14:00:00","2026-09-15 16:00:00","Phòng Hội Nghị 1","assistant@minhtemplates.com","COMPLETED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Events.length > 0) {
    sheet_Events.getRange(2, 1, demoData_Events.length, 13).setValues(demoData_Events);
  }
  sheet_Events.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  const rule_Events_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["MEETING","TRIP","APPOINTMENT","CEREMONY","OTHER"], true).build();
  sheet_Events.getRange('C2:C1000').setDataValidation(rule_Events_C2C1000);

  const rule_Events_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","IN_PROGRESS","COMPLETED","CANCELLED"], true).build();
  sheet_Events.getRange('H2:H1000').setDataValidation(rule_Events_H2H1000);

  // =========================================================================
  // TAB: Attendees
  // =========================================================================
  const sheet_Attendees = sheets['Attendees'];
  sheet_Attendees.clear();
  sheet_Attendees.setTabColor('#039BE5');
  sheet_Attendees.setFrozenRows(1);

  const headers_Attendees = ["ID","EventID","UserEmail","Role","Response","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Attendees.getRange(1, 1, 1, 10).setValues([headers_Attendees])
    .setFontWeight('bold').setBackground('#039BE5').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Attendees.setRowHeight(1, 32);
  sheet_Attendees.setColumnWidth(1, 120);
  sheet_Attendees.setColumnWidth(2, 120);
  sheet_Attendees.setColumnWidth(3, 220);
  sheet_Attendees.setColumnWidth(4, 120);
  sheet_Attendees.setColumnWidth(5, 130);
  sheet_Attendees.setColumnWidth(6, 160);
  sheet_Attendees.setColumnWidth(7, 160);
  sheet_Attendees.setColumnWidth(8, 180);
  sheet_Attendees.setColumnWidth(9, 90);
  sheet_Attendees.setColumnWidth(10, 80);

  const demoData_Attendees = [["ATN-001","EVT-001","lanhdao@minhtemplates.com","CHAIR","ACCEPTED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["ATN-002","EVT-001","phogiamdoc@minhtemplates.com","ATTENDEE","ACCEPTED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["ATN-003","EVT-002","lanhdao@minhtemplates.com","CHAIR","ACCEPTED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Attendees.length > 0) {
    sheet_Attendees.getRange(2, 1, demoData_Attendees.length, 10).setValues(demoData_Attendees);
  }

  const rule_Attendees_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["LEADER","CHAIR","ATTENDEE","SECRETARY"], true).build();
  sheet_Attendees.getRange('D2:D1000').setDataValidation(rule_Attendees_D2D1000);

  const rule_Attendees_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACCEPTED","TENTATIVE","DECLINED","PENDING"], true).build();
  sheet_Attendees.getRange('E2:E1000').setDataValidation(rule_Attendees_E2E1000);

  // =========================================================================
  // TAB: MeetingResources
  // =========================================================================
  const sheet_MeetingResources = sheets['MeetingResources'];
  sheet_MeetingResources.clear();
  sheet_MeetingResources.setTabColor('#00ACC1');
  sheet_MeetingResources.setFrozenRows(1);

  const headers_MeetingResources = ["ID","ResourceCode","Name","Type","Capacity","Location","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_MeetingResources.getRange(1, 1, 1, 12).setValues([headers_MeetingResources])
    .setFontWeight('bold').setBackground('#00ACC1').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_MeetingResources.setRowHeight(1, 32);
  sheet_MeetingResources.setColumnWidth(1, 120);
  sheet_MeetingResources.setColumnWidth(2, 120);
  sheet_MeetingResources.setColumnWidth(3, 180);
  sheet_MeetingResources.setColumnWidth(4, 120);
  sheet_MeetingResources.setColumnWidth(5, 100);
  sheet_MeetingResources.setColumnWidth(6, 150);
  sheet_MeetingResources.setColumnWidth(7, 90);
  sheet_MeetingResources.setColumnWidth(8, 160);
  sheet_MeetingResources.setColumnWidth(9, 160);
  sheet_MeetingResources.setColumnWidth(10, 180);
  sheet_MeetingResources.setColumnWidth(11, 90);
  sheet_MeetingResources.setColumnWidth(12, 80);

  const demoData_MeetingResources = [["RES-001","PH-VIPA","Phòng họp VIP A","ROOM",15,"Tầng 5 Trụ Sở","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["RES-002","PH-HN1","Phòng Hội Nghị 1","ROOM",50,"Tầng 3 Trụ Sở","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["RES-003","XE-01","Xe Sedona 7 chỗ 29A-8888","VEHICLE",7,"Gara Tòa Nhà","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_MeetingResources.length > 0) {
    sheet_MeetingResources.getRange(2, 1, demoData_MeetingResources.length, 12).setValues(demoData_MeetingResources);
  }

  const rule_MeetingResources_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ROOM","VEHICLE","DEVICE"], true).build();
  sheet_MeetingResources.getRange('D2:D1000').setDataValidation(rule_MeetingResources_D2D1000);

  // =========================================================================
  // TAB: Reservations
  // =========================================================================
  const sheet_Reservations = sheets['Reservations'];
  sheet_Reservations.clear();
  sheet_Reservations.setTabColor('#00897B');
  sheet_Reservations.setFrozenRows(1);

  const headers_Reservations = ["ID","EventID","ResourceID","StartAt","EndAt","BufferMinutes","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Reservations.getRange(1, 1, 1, 12).setValues([headers_Reservations])
    .setFontWeight('bold').setBackground('#00897B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Reservations.setRowHeight(1, 32);
  sheet_Reservations.setColumnWidth(1, 120);
  sheet_Reservations.setColumnWidth(2, 120);
  sheet_Reservations.setColumnWidth(3, 120);
  sheet_Reservations.setColumnWidth(4, 160);
  sheet_Reservations.setColumnWidth(5, 160);
  sheet_Reservations.setColumnWidth(6, 110);
  sheet_Reservations.setColumnWidth(7, 130);
  sheet_Reservations.setColumnWidth(8, 160);
  sheet_Reservations.setColumnWidth(9, 160);
  sheet_Reservations.setColumnWidth(10, 180);
  sheet_Reservations.setColumnWidth(11, 90);
  sheet_Reservations.setColumnWidth(12, 80);

  const demoData_Reservations = [["RSV-001","EVT-001","RES-001","2026-09-14 08:30:00","2026-09-14 10:00:00",0,"CONFIRMED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["RSV-002","EVT-002","RES-001","2026-09-14 10:00:00","2026-09-14 11:30:00",0,"CONFIRMED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["RSV-003","EVT-004","RES-002","2026-09-15 14:00:00","2026-09-15 16:00:00",15,"CONFIRMED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Reservations.length > 0) {
    sheet_Reservations.getRange(2, 1, demoData_Reservations.length, 12).setValues(demoData_Reservations);
  }
  sheet_Reservations.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  const rule_Reservations_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CONFIRMED","CANCELLED","PENDING"], true).build();
  sheet_Reservations.getRange('G2:G1000').setDataValidation(rule_Reservations_G2G1000);

  // =========================================================================
  // TAB: Trips
  // =========================================================================
  const sheet_Trips = sheets['Trips'];
  sheet_Trips.clear();
  sheet_Trips.setTabColor('#43A047');
  sheet_Trips.setFrozenRows(1);

  const headers_Trips = ["ID","EventID","LeaderEmail","Destination","Transport","Budget","ActualCost","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Trips.getRange(1, 1, 1, 13).setValues([headers_Trips])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Trips.setRowHeight(1, 32);
  sheet_Trips.setColumnWidth(1, 120);
  sheet_Trips.setColumnWidth(2, 120);
  sheet_Trips.setColumnWidth(3, 200);
  sheet_Trips.setColumnWidth(4, 150);
  sheet_Trips.setColumnWidth(5, 120);
  sheet_Trips.setColumnWidth(6, 140);
  sheet_Trips.setColumnWidth(7, 140);
  sheet_Trips.setColumnWidth(8, 200);
  sheet_Trips.setColumnWidth(9, 160);
  sheet_Trips.setColumnWidth(10, 160);
  sheet_Trips.setColumnWidth(11, 180);
  sheet_Trips.setColumnWidth(12, 90);
  sheet_Trips.setColumnWidth(13, 80);

  const demoData_Trips = [["TRP-001","EVT-003","lanhdao@minhtemplates.com","Đà Nẵng","FLIGHT",25000000,0,"Xúc tiến đối tác miền Trung","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Trips.length > 0) {
    sheet_Trips.getRange(2, 1, demoData_Trips.length, 13).setValues(demoData_Trips);
  }
  sheet_Trips.getRange('F2:G1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: ActionItems
  // =========================================================================
  const sheet_ActionItems = sheets['ActionItems'];
  sheet_ActionItems.clear();
  sheet_ActionItems.setTabColor('#7CB342');
  sheet_ActionItems.setFrozenRows(1);

  const headers_ActionItems = ["ID","EventID","TaskTitle","AssigneeEmail","DueDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ActionItems.getRange(1, 1, 1, 11).setValues([headers_ActionItems])
    .setFontWeight('bold').setBackground('#7CB342').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ActionItems.setRowHeight(1, 32);
  sheet_ActionItems.setColumnWidth(1, 120);
  sheet_ActionItems.setColumnWidth(2, 120);
  sheet_ActionItems.setColumnWidth(3, 240);
  sheet_ActionItems.setColumnWidth(4, 200);
  sheet_ActionItems.setColumnWidth(5, 120);
  sheet_ActionItems.setColumnWidth(6, 130);
  sheet_ActionItems.setColumnWidth(7, 160);
  sheet_ActionItems.setColumnWidth(8, 160);
  sheet_ActionItems.setColumnWidth(9, 180);
  sheet_ActionItems.setColumnWidth(10, 90);
  sheet_ActionItems.setColumnWidth(11, 80);

  const demoData_ActionItems = [["ACT-001","EVT-001","Hoàn thiện dự thảo báo cáo tài chính Q3","phogiamdoc@minhtemplates.com","2026-09-20","IN_PROGRESS","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"],["ACT-002","EVT-004","Gửi biên bản ghi nhớ hợp tác cho đối tác","assistant@minhtemplates.com","2026-09-16","DONE","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","assistant@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ActionItems.length > 0) {
    sheet_ActionItems.getRange(2, 1, demoData_ActionItems.length, 11).setValues(demoData_ActionItems);
  }
  sheet_ActionItems.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_ActionItems_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","IN_PROGRESS","DONE","OVERDUE"], true).build();
  sheet_ActionItems.getRange('F2:F1000').setDataValidation(rule_ActionItems_F2F1000);

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#546E7A');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#546E7A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["DEFAULT_BUFFER_MINUTES","10","Thời gian giãn cách tối thiểu giữa 2 cuộc họp","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ALLOW_BACK_TO_BACK_WHEN_ZERO","TRUE","Cho phép ca sau bắt đầu ngay khi ca trước kết thúc nếu buffer=0","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO ĐIỀU HÀNH LỊCH HỌP & CÔNG TÁC')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi sự kiện lãnh đạo, phân bổ phòng họp, xe công tác và nhiệm vụ sau họp')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỰ KIỆN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỰ KIỆN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Events!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 2: ĐÃ HOÀN THÀNH
  dashSheet.getRange('C4:D4').merge().setValue('ĐÃ HOÀN THÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(Events!H2:H1000, "COMPLETED", Events!M2:M1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0');

  // Card 3: TỶ LỆ HOÀN THÀNH
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ HOÀN THÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IFERROR(COUNTIFS(Events!H2:H1000, "COMPLETED", Events!M2:M1000, "FALSE") / IFERROR(COUNTIFS(Events!A2:A1000, "<>", Events!M2:M1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');

  // Card 4: NHIỆM VỤ SAU HỌP
  dashSheet.getRange('G4:H4').merge().setValue('NHIỆM VỤ SAU HỌP')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTA(ActionItems!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');

  // Card 5: NGÂN SÁCH CÔNG TÁC
  dashSheet.getRange('I4:J4').merge().setValue('NGÂN SÁCH CÔNG TÁC')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=SUMIFS(Trips!F2:F1000, Trips!J2:J1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Phân Bổ Loại Sự Kiện
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Events!C1:C1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Phân Bổ Loại Sự Kiện')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Tài Nguyên Phòng Họp Đã Đặt
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('MeetingResources!C1:C1000'))
      .addRange(dashSheet.getRange('MeetingResources!E1:E1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Tài Nguyên Phòng Họp Đã Đặt')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F10: KHÁCH SẠN, HOMESTAY VÀ ĐẶT PHÒNG
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F10 — Khách sạn, homestay và đặt phòng
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F10_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF10Workbook(true);
}

function setupCleanTemplate() {
  initF10Workbook(false);
}

function initF10Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Properties","Rooms","Guests","Bookings","Payments","Housekeeping","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — KHÁCH SẠN, HOMESTAY VÀ ĐẶT PHÒNG (F10)')
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
  // TAB: Properties
  // =========================================================================
  const sheet_Properties = sheets['Properties'];
  sheet_Properties.clear();
  sheet_Properties.setTabColor('#5D4037');
  sheet_Properties.setFrozenRows(1);

  const headers_Properties = ["ID","PropertyCode","Name","Address","Phone","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Properties.getRange(1, 1, 1, 11).setValues([headers_Properties])
    .setFontWeight('bold').setBackground('#5D4037').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Properties.setRowHeight(1, 32);
  sheet_Properties.setColumnWidth(1, 120);
  sheet_Properties.setColumnWidth(2, 130);
  sheet_Properties.setColumnWidth(3, 220);
  sheet_Properties.setColumnWidth(4, 240);
  sheet_Properties.setColumnWidth(5, 130);
  sheet_Properties.setColumnWidth(6, 90);
  sheet_Properties.setColumnWidth(7, 160);
  sheet_Properties.setColumnWidth(8, 160);
  sheet_Properties.setColumnWidth(9, 180);
  sheet_Properties.setColumnWidth(10, 90);
  sheet_Properties.setColumnWidth(11, 80);

  const demoData_Properties = [["PROP-001","MINH-VILLA-01","Minh Luxury Homestay Đà Lạt","12 Khe Sanh, Đà Lạt","0901234567","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["PROP-002","MINH-HOTEL-02","Minh Boutique Hotel Nha Trang","36 Trần Phú, Nha Trang","0907654321","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Properties.length > 0) {
    sheet_Properties.getRange(2, 1, demoData_Properties.length, 11).setValues(demoData_Properties);
  }

  // =========================================================================
  // TAB: Rooms
  // =========================================================================
  const sheet_Rooms = sheets['Rooms'];
  sheet_Rooms.clear();
  sheet_Rooms.setTabColor('#4E342E');
  sheet_Rooms.setFrozenRows(1);

  const headers_Rooms = ["ID","PropertyID","RoomNumber","RoomType","Capacity","PricePerNight","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Rooms.getRange(1, 1, 1, 12).setValues([headers_Rooms])
    .setFontWeight('bold').setBackground('#4E342E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Rooms.setRowHeight(1, 32);
  sheet_Rooms.setColumnWidth(1, 120);
  sheet_Rooms.setColumnWidth(2, 120);
  sheet_Rooms.setColumnWidth(3, 120);
  sheet_Rooms.setColumnWidth(4, 140);
  sheet_Rooms.setColumnWidth(5, 100);
  sheet_Rooms.setColumnWidth(6, 140);
  sheet_Rooms.setColumnWidth(7, 90);
  sheet_Rooms.setColumnWidth(8, 160);
  sheet_Rooms.setColumnWidth(9, 160);
  sheet_Rooms.setColumnWidth(10, 180);
  sheet_Rooms.setColumnWidth(11, 90);
  sheet_Rooms.setColumnWidth(12, 80);

  const demoData_Rooms = [["RM-101","PROP-001","Villa 101","DELUXE",2,800000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["RM-102","PROP-001","Villa 102","SUITE",4,1500000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["RM-201","PROP-002","Deluxe Ocean 201","DELUXE",2,1200000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["RM-202","PROP-002","Standard Mountain 202","STANDARD",2,700000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Rooms.length > 0) {
    sheet_Rooms.getRange(2, 1, demoData_Rooms.length, 12).setValues(demoData_Rooms);
  }
  sheet_Rooms.getRange('F2:F1000').setNumberFormat('#,##0 "₫"');

  const rule_Rooms_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["STANDARD","DELUXE","SUITE","FAMILY_VILLA"], true).build();
  sheet_Rooms.getRange('D2:D1000').setDataValidation(rule_Rooms_D2D1000);

  // =========================================================================
  // TAB: Guests
  // =========================================================================
  const sheet_Guests = sheets['Guests'];
  sheet_Guests.clear();
  sheet_Guests.setTabColor('#3E2723');
  sheet_Guests.setFrozenRows(1);

  const headers_Guests = ["ID","GuestCode","FullName","Phone","Email","IdCard","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Guests.getRange(1, 1, 1, 12).setValues([headers_Guests])
    .setFontWeight('bold').setBackground('#3E2723').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Guests.setRowHeight(1, 32);
  sheet_Guests.setColumnWidth(1, 120);
  sheet_Guests.setColumnWidth(2, 110);
  sheet_Guests.setColumnWidth(3, 180);
  sheet_Guests.setColumnWidth(4, 130);
  sheet_Guests.setColumnWidth(5, 200);
  sheet_Guests.setColumnWidth(6, 140);
  sheet_Guests.setColumnWidth(7, 200);
  sheet_Guests.setColumnWidth(8, 160);
  sheet_Guests.setColumnWidth(9, 160);
  sheet_Guests.setColumnWidth(10, 180);
  sheet_Guests.setColumnWidth(11, 90);
  sheet_Guests.setColumnWidth(12, 80);

  const demoData_Guests = [["GST-001","KH-001","Nguyễn Thị Hồng Hạnh","0911223344","hanh@gmail.com","001198000123","Khách quen","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["GST-002","KH-002","Trần Đình Trọng","0922334455","trong@gmail.com","001199000456","Check-in trễ sau 20h","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Guests.length > 0) {
    sheet_Guests.getRange(2, 1, demoData_Guests.length, 12).setValues(demoData_Guests);
  }

  // =========================================================================
  // TAB: Bookings
  // =========================================================================
  const sheet_Bookings = sheets['Bookings'];
  sheet_Bookings.clear();
  sheet_Bookings.setTabColor('#00695C');
  sheet_Bookings.setFrozenRows(1);

  const headers_Bookings = ["ID","BookingCode","PropertyID","RoomID","GuestID","CheckInDate","CheckOutDate","Nights","PricePerNight","RoomSubtotal","DepositAmount","RemainingAmount","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Bookings.getRange(1, 1, 1, 18).setValues([headers_Bookings])
    .setFontWeight('bold').setBackground('#00695C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Bookings.setRowHeight(1, 32);
  sheet_Bookings.setColumnWidth(1, 120);
  sheet_Bookings.setColumnWidth(2, 120);
  sheet_Bookings.setColumnWidth(3, 120);
  sheet_Bookings.setColumnWidth(4, 120);
  sheet_Bookings.setColumnWidth(5, 120);
  sheet_Bookings.setColumnWidth(6, 110);
  sheet_Bookings.setColumnWidth(7, 110);
  sheet_Bookings.setColumnWidth(8, 80);
  sheet_Bookings.setColumnWidth(9, 130);
  sheet_Bookings.setColumnWidth(10, 140);
  sheet_Bookings.setColumnWidth(11, 130);
  sheet_Bookings.setColumnWidth(12, 130);
  sheet_Bookings.setColumnWidth(13, 130);
  sheet_Bookings.setColumnWidth(14, 160);
  sheet_Bookings.setColumnWidth(15, 160);
  sheet_Bookings.setColumnWidth(16, 180);
  sheet_Bookings.setColumnWidth(17, 90);
  sheet_Bookings.setColumnWidth(18, 80);

  const demoData_Bookings = [["BK-001","BK-260901","PROP-001","RM-101","GST-001","2026-10-10","2026-10-12",2,800000,1600000,500000,1100000,"CONFIRMED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["BK-002","BK-260902","PROP-001","RM-102","GST-002","2026-10-12","2026-10-15",3,1500000,4500000,1500000,3000000,"CHECKED_IN","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["BK-003","BK-260903","PROP-002","RM-201","GST-001","2026-10-05","2026-10-07",2,1200000,2400000,1000000,0,"CHECKED_OUT","2026-09-03T08:00:00Z","2026-10-07T12:00:00Z","reception@minhtemplates.com",1,"FALSE"],["BK-004","BK-260904","PROP-002","RM-202","GST-002","2026-10-01","2026-10-03",2,700000,1400000,0,0,"CANCELLED","2026-09-04T08:00:00Z","2026-09-05T08:00:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Bookings.length > 0) {
    sheet_Bookings.getRange(2, 1, demoData_Bookings.length, 18).setValues(demoData_Bookings);
  }
  sheet_Bookings.getRange('F2:G1000').setNumberFormat('yyyy-mm-dd');
  sheet_Bookings.getRange('I2:L1000').setNumberFormat('#,##0 "₫"');

  const rule_Bookings_M2M1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","CONFIRMED","CHECKED_IN","CHECKED_OUT","CANCELLED"], true).build();
  sheet_Bookings.getRange('M2:M1000').setDataValidation(rule_Bookings_M2M1000);

  // =========================================================================
  // TAB: Payments
  // =========================================================================
  const sheet_Payments = sheets['Payments'];
  sheet_Payments.clear();
  sheet_Payments.setTabColor('#004D40');
  sheet_Payments.setFrozenRows(1);

  const headers_Payments = ["ID","BookingID","PaymentType","Amount","PaymentMethod","PaidAt","Note","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Payments.getRange(1, 1, 1, 12).setValues([headers_Payments])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Payments.setRowHeight(1, 32);
  sheet_Payments.setColumnWidth(1, 120);
  sheet_Payments.setColumnWidth(2, 120);
  sheet_Payments.setColumnWidth(3, 120);
  sheet_Payments.setColumnWidth(4, 140);
  sheet_Payments.setColumnWidth(5, 140);
  sheet_Payments.setColumnWidth(6, 160);
  sheet_Payments.setColumnWidth(7, 200);
  sheet_Payments.setColumnWidth(8, 160);
  sheet_Payments.setColumnWidth(9, 160);
  sheet_Payments.setColumnWidth(10, 180);
  sheet_Payments.setColumnWidth(11, 90);
  sheet_Payments.setColumnWidth(12, 80);

  const demoData_Payments = [["PMT-001","BK-001","DEPOSIT",500000,"BANK_TRANSFER","2026-09-01 10:00:00","Tiền đặt cọc phòng 101","2026-09-01T10:00:00Z","2026-09-01T10:00:00Z","reception@minhtemplates.com",1,"FALSE"],["PMT-002","BK-002","DEPOSIT",1500000,"BANK_TRANSFER","2026-09-02 11:00:00","Tiền cọc phòng 102","2026-09-02T11:00:00Z","2026-09-02T11:00:00Z","reception@minhtemplates.com",1,"FALSE"],["PMT-003","BK-003","DEPOSIT",1000000,"BANK_TRANSFER","2026-09-03 12:00:00","Tiền cọc phòng 201","2026-09-03T12:00:00Z","2026-09-03T12:00:00Z","reception@minhtemplates.com",1,"FALSE"],["PMT-004","BK-003","SETTLEMENT",1400000,"CASH","2026-10-07 12:00:00","Tất toán khi check-out (không nhân đôi cọc)","2026-10-07T12:00:00Z","2026-10-07T12:00:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Payments.length > 0) {
    sheet_Payments.getRange(2, 1, demoData_Payments.length, 12).setValues(demoData_Payments);
  }
  sheet_Payments.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');
  sheet_Payments.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  const rule_Payments_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DEPOSIT","SETTLEMENT","SURCHARGE","REFUND"], true).build();
  sheet_Payments.getRange('C2:C1000').setDataValidation(rule_Payments_C2C1000);

  const rule_Payments_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CASH","BANK_TRANSFER","VNPAY","CREDIT_CARD"], true).build();
  sheet_Payments.getRange('E2:E1000').setDataValidation(rule_Payments_E2E1000);

  // =========================================================================
  // TAB: Housekeeping
  // =========================================================================
  const sheet_Housekeeping = sheets['Housekeeping'];
  sheet_Housekeeping.clear();
  sheet_Housekeeping.setTabColor('#33691E');
  sheet_Housekeeping.setFrozenRows(1);

  const headers_Housekeeping = ["ID","PropertyID","RoomID","LogDate","Status","StaffEmail","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Housekeeping.getRange(1, 1, 1, 12).setValues([headers_Housekeeping])
    .setFontWeight('bold').setBackground('#33691E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Housekeeping.setRowHeight(1, 32);
  sheet_Housekeeping.setColumnWidth(1, 120);
  sheet_Housekeeping.setColumnWidth(2, 120);
  sheet_Housekeeping.setColumnWidth(3, 120);
  sheet_Housekeeping.setColumnWidth(4, 110);
  sheet_Housekeeping.setColumnWidth(5, 120);
  sheet_Housekeeping.setColumnWidth(6, 200);
  sheet_Housekeeping.setColumnWidth(7, 200);
  sheet_Housekeeping.setColumnWidth(8, 160);
  sheet_Housekeeping.setColumnWidth(9, 160);
  sheet_Housekeeping.setColumnWidth(10, 180);
  sheet_Housekeeping.setColumnWidth(11, 90);
  sheet_Housekeeping.setColumnWidth(12, 80);

  const demoData_Housekeeping = [["HSK-001","PROP-001","RM-101","2026-10-10","CLEAN","housekeeper@minhtemplates.com","Sẵn sàng đón khách","2026-10-10T08:00:00Z","2026-10-10T08:00:00Z","housekeeper@minhtemplates.com",1,"FALSE"],["HSK-002","PROP-002","RM-201","2026-10-07","DIRTY","housekeeper@minhtemplates.com","Khách vừa check-out cần dọn","2026-10-07T12:30:00Z","2026-10-07T12:30:00Z","housekeeper@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Housekeeping.length > 0) {
    sheet_Housekeeping.getRange(2, 1, demoData_Housekeeping.length, 12).setValues(demoData_Housekeeping);
  }
  sheet_Housekeeping.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_Housekeeping_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CLEAN","DIRTY","CLEANING","INSPECTED"], true).build();
  sheet_Housekeeping.getRange('E2:E1000').setDataValidation(rule_Housekeeping_E2E1000);

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#37474F');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["STANDARD_CHECKIN_TIME","14:00","Giờ nhận phòng tiêu chuẩn","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["STANDARD_CHECKOUT_TIME","12:00","Giờ trả phòng tiêu chuẩn","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO VẬN HÀNH KHÁCH SẠN & HOMESTAY')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi doanh thu phòng, công suất đêm lưu trú, tiền cọc và buồng phòng')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU PHÒNG
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU PHÒNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(Bookings!J2:J1000, Bookings!M2:M1000, "<>CANCELLED", Bookings!R2:R1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 2: TỔNG ĐÊM ĐÃ BÁN
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG ĐÊM ĐÃ BÁN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(Bookings!H2:H1000, Bookings!M2:M1000, "<>CANCELLED", Bookings!R2:R1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 3: GIÁ BÁN BÌNH QUÂN (ADR)
  dashSheet.getRange('E4:F4').merge().setValue('GIÁ BÁN BÌNH QUÂN (ADR)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IFERROR(SUMIFS(Bookings!J2:J1000, Bookings!M2:M1000, "<>CANCELLED", Bookings!R2:R1000, "FALSE") / IFERROR(SUMIFS(Bookings!H2:H1000, Bookings!M2:M1000, "<>CANCELLED", Bookings!R2:R1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0 "₫"');

  // Card 4: TIỀN CỌC ĐANG GIỮ
  dashSheet.getRange('G4:H4').merge().setValue('TIỀN CỌC ĐANG GIỮ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=SUMIFS(Bookings!K2:K1000, Bookings!M2:M1000, "CONFIRMED", Bookings!R2:R1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0 "₫"');

  // Card 5: CÔNG NỢ CÒN THU
  dashSheet.getRange('I4:J4').merge().setValue('CÔNG NỢ CÒN THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=SUMIFS(Bookings!L2:L1000, Bookings!M2:M1000, "<>CANCELLED", Bookings!R2:R1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Tỷ Lệ Trạng Thái Booking
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Bookings!M1:M1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Tỷ Lệ Trạng Thái Booking')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Doanh Thu Theo Loại Phòng
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Rooms!D1:D1000'))
      .addRange(dashSheet.getRange('Rooms!F1:F1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Doanh Thu Theo Loại Phòng')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F28: LỊCH DỊCH VỤ SPA VÀ PHÒNG KHÁM
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F28 — Lịch dịch vụ spa và phòng khám
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F28_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF28Workbook(true);
}

function setupCleanTemplate() {
  initF28Workbook(false);
}

function initF28Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Clients","Providers","Services","Appointments","ServiceVisits","Payments","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LỊCH DỊCH VỤ SPA VÀ PHÒNG KHÁM (F28)')
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
  // TAB: Clients
  // =========================================================================
  const sheet_Clients = sheets['Clients'];
  sheet_Clients.clear();
  sheet_Clients.setTabColor('#8E24AA');
  sheet_Clients.setFrozenRows(1);

  const headers_Clients = ["ID","ClientCode","FullName","Phone","Email","BirthDate","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Clients.getRange(1, 1, 1, 12).setValues([headers_Clients])
    .setFontWeight('bold').setBackground('#8E24AA').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Clients.setRowHeight(1, 32);
  sheet_Clients.setColumnWidth(1, 120);
  sheet_Clients.setColumnWidth(2, 110);
  sheet_Clients.setColumnWidth(3, 180);
  sheet_Clients.setColumnWidth(4, 130);
  sheet_Clients.setColumnWidth(5, 200);
  sheet_Clients.setColumnWidth(6, 110);
  sheet_Clients.setColumnWidth(7, 200);
  sheet_Clients.setColumnWidth(8, 160);
  sheet_Clients.setColumnWidth(9, 160);
  sheet_Clients.setColumnWidth(10, 180);
  sheet_Clients.setColumnWidth(11, 90);
  sheet_Clients.setColumnWidth(12, 80);

  const demoData_Clients = [["CLT-001","KH-001","Trần Phương Thảo","0988112233","thao@gmail.com","1995-04-12","Da nhạy cảm","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["CLT-002","KH-002","Lê Quỳnh Nga","0977223344","nga@gmail.com","1992-08-25","Liệu trình trẻ hóa da","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["CLT-003","KH-003","Nguyễn Hoàng Yến","0966334455","yen@gmail.com","1988-11-30","Massage thư giãn","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Clients.length > 0) {
    sheet_Clients.getRange(2, 1, demoData_Clients.length, 12).setValues(demoData_Clients);
  }
  sheet_Clients.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: Providers
  // =========================================================================
  const sheet_Providers = sheets['Providers'];
  sheet_Providers.clear();
  sheet_Providers.setTabColor('#6A1B9A');
  sheet_Providers.setFrozenRows(1);

  const headers_Providers = ["ID","ProviderCode","FullName","Specialty","Phone","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Providers.getRange(1, 1, 1, 11).setValues([headers_Providers])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Providers.setRowHeight(1, 32);
  sheet_Providers.setColumnWidth(1, 120);
  sheet_Providers.setColumnWidth(2, 110);
  sheet_Providers.setColumnWidth(3, 180);
  sheet_Providers.setColumnWidth(4, 160);
  sheet_Providers.setColumnWidth(5, 130);
  sheet_Providers.setColumnWidth(6, 90);
  sheet_Providers.setColumnWidth(7, 160);
  sheet_Providers.setColumnWidth(8, 160);
  sheet_Providers.setColumnWidth(9, 180);
  sheet_Providers.setColumnWidth(10, 90);
  sheet_Providers.setColumnWidth(11, 80);

  const demoData_Providers = [["PRV-001","BS-HOANG","BS. Hoàng Minh Tuấn","DERMATOLOGIST","0912345678","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["PRV-002","KTV-LAN","KTV. Nguyễn Hương Lan","THERAPIST","0987654321","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["PRV-003","KTV-MAI","KTV. Trần Tuyết Mai","ESTHETICIAN","0933334455","TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Providers.length > 0) {
    sheet_Providers.getRange(2, 1, demoData_Providers.length, 11).setValues(demoData_Providers);
  }

  const rule_Providers_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DERMATOLOGIST","THERAPIST","ESTHETICIAN","DOCTOR","NURSE"], true).build();
  sheet_Providers.getRange('D2:D1000').setDataValidation(rule_Providers_D2D1000);

  // =========================================================================
  // TAB: Services
  // =========================================================================
  const sheet_Services = sheets['Services'];
  sheet_Services.clear();
  sheet_Services.setTabColor('#4A148C');
  sheet_Services.setFrozenRows(1);

  const headers_Services = ["ID","ServiceCode","Name","Category","DurationMinutes","Price","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Services.getRange(1, 1, 1, 12).setValues([headers_Services])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Services.setRowHeight(1, 32);
  sheet_Services.setColumnWidth(1, 120);
  sheet_Services.setColumnWidth(2, 110);
  sheet_Services.setColumnWidth(3, 220);
  sheet_Services.setColumnWidth(4, 160);
  sheet_Services.setColumnWidth(5, 110);
  sheet_Services.setColumnWidth(6, 140);
  sheet_Services.setColumnWidth(7, 90);
  sheet_Services.setColumnWidth(8, 160);
  sheet_Services.setColumnWidth(9, 160);
  sheet_Services.setColumnWidth(10, 180);
  sheet_Services.setColumnWidth(11, 90);
  sheet_Services.setColumnWidth(12, 80);

  const demoData_Services = [["SVC-001","SKIN-01","Chăm sóc da chuyên sâu Aqua Peel","CHAM_SOC_DA",60,450000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SVC-002","MASS-01","Massage body đá nóng Thụy Điển","MASSAGE_BODY",90,600000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["SVC-003","LASER-01","Trị liệu Laser vi điểm Fractional","TRI_LIEU_CHUYEN_SAU",45,1200000,"TRUE","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Services.length > 0) {
    sheet_Services.getRange(2, 1, demoData_Services.length, 12).setValues(demoData_Services);
  }
  sheet_Services.getRange('F2:F1000').setNumberFormat('#,##0 "₫"');

  const rule_Services_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHAM_SOC_DA","MASSAGE_BODY","TRI_LIEU_CHUYEN_SAU","KHAM_TONG_QUAT"], true).build();
  sheet_Services.getRange('D2:D1000').setDataValidation(rule_Services_D2D1000);

  // =========================================================================
  // TAB: Appointments
  // =========================================================================
  const sheet_Appointments = sheets['Appointments'];
  sheet_Appointments.clear();
  sheet_Appointments.setTabColor('#1565C0');
  sheet_Appointments.setFrozenRows(1);

  const headers_Appointments = ["ID","AppointmentCode","ClientID","ProviderID","ServiceID","AppointmentDate","StartTime","EndTime","Price","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Appointments.getRange(1, 1, 1, 15).setValues([headers_Appointments])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Appointments.setRowHeight(1, 32);
  sheet_Appointments.setColumnWidth(1, 120);
  sheet_Appointments.setColumnWidth(2, 120);
  sheet_Appointments.setColumnWidth(3, 120);
  sheet_Appointments.setColumnWidth(4, 120);
  sheet_Appointments.setColumnWidth(5, 120);
  sheet_Appointments.setColumnWidth(6, 110);
  sheet_Appointments.setColumnWidth(7, 90);
  sheet_Appointments.setColumnWidth(8, 90);
  sheet_Appointments.setColumnWidth(9, 130);
  sheet_Appointments.setColumnWidth(10, 130);
  sheet_Appointments.setColumnWidth(11, 160);
  sheet_Appointments.setColumnWidth(12, 160);
  sheet_Appointments.setColumnWidth(13, 180);
  sheet_Appointments.setColumnWidth(14, 90);
  sheet_Appointments.setColumnWidth(15, 80);

  const demoData_Appointments = [["APT-001","APT-260901","CLT-001","PRV-001","SVC-003","2026-09-15","09:00","09:45",1200000,"CONFIRMED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["APT-002","APT-260902","CLT-002","PRV-001","SVC-001","2026-09-15","10:00","11:00",450000,"SCHEDULED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["APT-003","APT-260903","CLT-003","PRV-002","SVC-002","2026-09-15","14:00","15:30",600000,"COMPLETED","2026-09-10T08:00:00Z","2026-09-15T15:30:00Z","reception@minhtemplates.com",1,"FALSE"],["APT-004","APT-260904","CLT-001","PRV-003","SVC-001","2026-09-15","16:00","17:00",450000,"CANCELLED","2026-09-10T08:00:00Z","2026-09-14T08:00:00Z","reception@minhtemplates.com",1,"FALSE"],["APT-005","APT-260905","CLT-002","PRV-002","SVC-002","2026-09-15","16:00","17:30",600000,"NO_SHOW","2026-09-10T08:00:00Z","2026-09-15T18:00:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Appointments.length > 0) {
    sheet_Appointments.getRange(2, 1, demoData_Appointments.length, 15).setValues(demoData_Appointments);
  }
  sheet_Appointments.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Appointments.getRange('I2:I1000').setNumberFormat('#,##0 "₫"');

  const rule_Appointments_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","CONFIRMED","COMPLETED","CANCELLED","NO_SHOW"], true).build();
  sheet_Appointments.getRange('J2:J1000').setDataValidation(rule_Appointments_J2J1000);

  // =========================================================================
  // TAB: ServiceVisits
  // =========================================================================
  const sheet_ServiceVisits = sheets['ServiceVisits'];
  sheet_ServiceVisits.clear();
  sheet_ServiceVisits.setTabColor('#00838F');
  sheet_ServiceVisits.setFrozenRows(1);

  const headers_ServiceVisits = ["ID","AppointmentID","PerformedAt","ActualDurationMinutes","Notes","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ServiceVisits.getRange(1, 1, 1, 10).setValues([headers_ServiceVisits])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ServiceVisits.setRowHeight(1, 32);
  sheet_ServiceVisits.setColumnWidth(1, 120);
  sheet_ServiceVisits.setColumnWidth(2, 120);
  sheet_ServiceVisits.setColumnWidth(3, 160);
  sheet_ServiceVisits.setColumnWidth(4, 120);
  sheet_ServiceVisits.setColumnWidth(5, 240);
  sheet_ServiceVisits.setColumnWidth(6, 160);
  sheet_ServiceVisits.setColumnWidth(7, 160);
  sheet_ServiceVisits.setColumnWidth(8, 180);
  sheet_ServiceVisits.setColumnWidth(9, 90);
  sheet_ServiceVisits.setColumnWidth(10, 80);

  const demoData_ServiceVisits = [["VST-001","APT-003","2026-09-15 14:05:00",85,"Khách hài lòng với lực massage","2026-09-15T15:30:00Z","2026-09-15T15:30:00Z","PRV-002",1,"FALSE"]];
  if (isDemo && demoData_ServiceVisits.length > 0) {
    sheet_ServiceVisits.getRange(2, 1, demoData_ServiceVisits.length, 10).setValues(demoData_ServiceVisits);
  }
  sheet_ServiceVisits.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  // =========================================================================
  // TAB: Payments
  // =========================================================================
  const sheet_Payments = sheets['Payments'];
  sheet_Payments.clear();
  sheet_Payments.setTabColor('#2E7D32');
  sheet_Payments.setFrozenRows(1);

  const headers_Payments = ["ID","AppointmentID","Amount","PaymentMethod","PaidAt","Note","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Payments.getRange(1, 1, 1, 11).setValues([headers_Payments])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Payments.setRowHeight(1, 32);
  sheet_Payments.setColumnWidth(1, 120);
  sheet_Payments.setColumnWidth(2, 120);
  sheet_Payments.setColumnWidth(3, 140);
  sheet_Payments.setColumnWidth(4, 140);
  sheet_Payments.setColumnWidth(5, 160);
  sheet_Payments.setColumnWidth(6, 200);
  sheet_Payments.setColumnWidth(7, 160);
  sheet_Payments.setColumnWidth(8, 160);
  sheet_Payments.setColumnWidth(9, 180);
  sheet_Payments.setColumnWidth(10, 90);
  sheet_Payments.setColumnWidth(11, 80);

  const demoData_Payments = [["PMT-001","APT-003",600000,"BANK_TRANSFER","2026-09-15 15:35:00","Thanh toán trọn gói massage","2026-09-15T15:35:00Z","2026-09-15T15:35:00Z","reception@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Payments.length > 0) {
    sheet_Payments.getRange(2, 1, demoData_Payments.length, 11).setValues(demoData_Payments);
  }
  sheet_Payments.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_Payments.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd hh:mm:ss');

  const rule_Payments_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CASH","BANK_TRANSFER","VNPAY","MOMO","CARD"], true).build();
  sheet_Payments.getRange('D2:D1000').setDataValidation(rule_Payments_D2D1000);

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#455A64');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["ALLOW_CANCEL_REFUND","TRUE","Cho phép hủy lịch hẹn trước 4 giờ không phạt cọc","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO ĐIỀU HÀNH SPA & PHÒNG KHÁM')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi lịch hẹn khám và điều trị, công suất chuyên viên, doanh thu và no-show')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU DỊCH VỤ
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU DỊCH VỤ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(Appointments!I2:I1000, Appointments!J2:J1000, "COMPLETED", Appointments!O2:O1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 2: TỔNG LỊCH HẸN
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG LỊCH HẸN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(Appointments!A2:A1000, "<>", Appointments!O2:O1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 3: LỊCH HOÀN THÀNH
  dashSheet.getRange('E4:F4').merge().setValue('LỊCH HOÀN THÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(Appointments!J2:J1000, "COMPLETED", Appointments!O2:O1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0');

  // Card 4: TỶ LỆ BỎ HẸN (NO-SHOW)
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ BỎ HẸN (NO-SHOW)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(COUNTIFS(Appointments!J2:J1000, "NO_SHOW", Appointments!O2:O1000, "FALSE") / IFERROR(COUNTIFS(Appointments!A2:A1000, "<>", Appointments!O2:O1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('0.0%');

  // Card 5: TỶ LỆ HỦY HẸN
  dashSheet.getRange('I4:J4').merge().setValue('TỶ LỆ HỦY HẸN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('I5:J5').merge().setValue('=IFERROR(COUNTIFS(Appointments!J2:J1000, "CANCELLED", Appointments!O2:O1000, "FALSE") / IFERROR(COUNTIFS(Appointments!A2:A1000, "<>", Appointments!O2:O1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('0.0%');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Trạng Thái Lịch Hẹn
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Appointments!J1:J1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Trạng Thái Lịch Hẹn')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Bảng Giá Dịch Vụ
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Services!C1:C1000'))
      .addRange(dashSheet.getRange('Services!F1:F1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Bảng Giá Dịch Vụ')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F07: HỢP ĐỒNG, PHỤ LỤC VÀ PHÁT SINH
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F07 — Hợp đồng, phụ lục và phát sinh
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F07_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF07Workbook(true);
}

function setupCleanTemplate() {
  initF07Workbook(false);
}

function initF07Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Contracts","Amendments","Milestones","ContractPayments","ContractFiles","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — HỢP ĐỒNG, PHỤ LỤC VÀ PHÁT SINH (F07)')
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
  // TAB: Contracts
  // =========================================================================
  const sheet_Contracts = sheets['Contracts'];
  sheet_Contracts.clear();
  sheet_Contracts.setTabColor('#0D47A1');
  sheet_Contracts.setFrozenRows(1);

  const headers_Contracts = ["ID","ContractNumber","Title","Counterparty","SignedDate","StartDate","EndDate","BaseAmount","ApprovedVariations","CurrentAmount","Currency","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Contracts.getRange(1, 1, 1, 17).setValues([headers_Contracts])
    .setFontWeight('bold').setBackground('#0D47A1').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Contracts.setRowHeight(1, 32);
  sheet_Contracts.setColumnWidth(1, 120);
  sheet_Contracts.setColumnWidth(2, 130);
  sheet_Contracts.setColumnWidth(3, 220);
  sheet_Contracts.setColumnWidth(4, 180);
  sheet_Contracts.setColumnWidth(5, 110);
  sheet_Contracts.setColumnWidth(6, 110);
  sheet_Contracts.setColumnWidth(7, 110);
  sheet_Contracts.setColumnWidth(8, 140);
  sheet_Contracts.setColumnWidth(9, 140);
  sheet_Contracts.setColumnWidth(10, 140);
  sheet_Contracts.setColumnWidth(11, 90);
  sheet_Contracts.setColumnWidth(12, 120);
  sheet_Contracts.setColumnWidth(13, 160);
  sheet_Contracts.setColumnWidth(14, 160);
  sheet_Contracts.setColumnWidth(15, 180);
  sheet_Contracts.setColumnWidth(16, 90);
  sheet_Contracts.setColumnWidth(17, 80);

  const demoData_Contracts = [["CTR-001","HD-2026/01","Hợp đồng Cung cấp Phần mềm Quản trị","Công ty TNHH Giải pháp Á Châu","2026-01-15","2026-01-15","2026-12-31",100000000,20000000,120000000,"VND","ACTIVE","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CTR-002","HD-2026/02","Hợp đồng Bảo trì Hệ thống Máy chủ","Công ty Cổ phần Hạ tầng Việt","2026-02-01","2026-02-01","2026-09-30",60000000,0,60000000,"VND","ACTIVE","2026-02-01T08:00:00Z","2026-02-01T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CTR-003","HD-2026/03","Hợp đồng Thiết kế Thương hiệu số","Công ty TNHH Sáng tạo Minh Media","2026-03-10","2026-03-10","2026-06-30",45000000,5000000,50000000,"VND","COMPLETED","2026-03-10T08:00:00Z","2026-06-30T10:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Contracts.length > 0) {
    sheet_Contracts.getRange(2, 1, demoData_Contracts.length, 17).setValues(demoData_Contracts);
  }
  sheet_Contracts.getRange('E2:G1000').setNumberFormat('yyyy-mm-dd');
  sheet_Contracts.getRange('H2:J1000').setNumberFormat('#,##0 "₫"');

  const rule_Contracts_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","ACTIVE","COMPLETED","TERMINATED","EXPIRED"], true).build();
  sheet_Contracts.getRange('L2:L1000').setDataValidation(rule_Contracts_L2L1000);

  // =========================================================================
  // TAB: Amendments
  // =========================================================================
  const sheet_Amendments = sheets['Amendments'];
  sheet_Amendments.clear();
  sheet_Amendments.setTabColor('#1565C0');
  sheet_Amendments.setFrozenRows(1);

  const headers_Amendments = ["ID","ContractID","AmendmentNumber","SignedDate","ValueChange","Reason","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Amendments.getRange(1, 1, 1, 12).setValues([headers_Amendments])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Amendments.setRowHeight(1, 32);
  sheet_Amendments.setColumnWidth(1, 120);
  sheet_Amendments.setColumnWidth(2, 120);
  sheet_Amendments.setColumnWidth(3, 140);
  sheet_Amendments.setColumnWidth(4, 110);
  sheet_Amendments.setColumnWidth(5, 140);
  sheet_Amendments.setColumnWidth(6, 220);
  sheet_Amendments.setColumnWidth(7, 120);
  sheet_Amendments.setColumnWidth(8, 160);
  sheet_Amendments.setColumnWidth(9, 160);
  sheet_Amendments.setColumnWidth(10, 180);
  sheet_Amendments.setColumnWidth(11, 90);
  sheet_Amendments.setColumnWidth(12, 80);

  const demoData_Amendments = [["AMD-001","CTR-001","PL-01/HD-2026/01","2026-03-01",20000000,"Bổ sung module mobile app (Đã duyệt)","APPROVED","2026-03-01T08:00:00Z","2026-03-01T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["AMD-002","CTR-001","PL-02/HD-2026/01","2026-06-15",-5000000,"Giảm trừ phạm vi module SMS (Chưa duyệt)","SUBMITTED","2026-06-15T08:00:00Z","2026-06-15T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["AMD-003","CTR-003","PL-01/HD-2026/03","2026-04-10",5000000,"Mở rộng hạng mục thiết kế ấn phẩm sự kiện","APPROVED","2026-04-10T08:00:00Z","2026-04-10T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Amendments.length > 0) {
    sheet_Amendments.getRange(2, 1, demoData_Amendments.length, 12).setValues(demoData_Amendments);
  }
  sheet_Amendments.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_Amendments.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');

  const rule_Amendments_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SUBMITTED","APPROVED","REJECTED"], true).build();
  sheet_Amendments.getRange('G2:G1000').setDataValidation(rule_Amendments_G2G1000);

  // =========================================================================
  // TAB: Milestones
  // =========================================================================
  const sheet_Milestones = sheets['Milestones'];
  sheet_Milestones.clear();
  sheet_Milestones.setTabColor('#1976D2');
  sheet_Milestones.setFrozenRows(1);

  const headers_Milestones = ["ID","ContractID","MilestoneName","DueDate","Amount","AcceptedAt","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Milestones.getRange(1, 1, 1, 12).setValues([headers_Milestones])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Milestones.setRowHeight(1, 32);
  sheet_Milestones.setColumnWidth(1, 120);
  sheet_Milestones.setColumnWidth(2, 120);
  sheet_Milestones.setColumnWidth(3, 200);
  sheet_Milestones.setColumnWidth(4, 110);
  sheet_Milestones.setColumnWidth(5, 140);
  sheet_Milestones.setColumnWidth(6, 110);
  sheet_Milestones.setColumnWidth(7, 120);
  sheet_Milestones.setColumnWidth(8, 160);
  sheet_Milestones.setColumnWidth(9, 160);
  sheet_Milestones.setColumnWidth(10, 180);
  sheet_Milestones.setColumnWidth(11, 90);
  sheet_Milestones.setColumnWidth(12, 80);

  const demoData_Milestones = [["MLS-001","CTR-001","Giai đoạn 1: Bàn giao thiết kế & SRS","2026-03-31",40000000,"2026-03-30","ACCEPTED","2026-01-15T08:00:00Z","2026-03-30T10:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-002","CTR-001","Giai đoạn 2: Bàn giao phiên bản UAT","2026-07-31",40000000,"","PENDING","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-003","CTR-001","Giai đoạn 3: Nghiệm thu vận hành Go-Live","2026-11-30",40000000,"","PENDING","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-004","CTR-003","Bàn giao trọn gói bộ nhận diện","2026-06-15",50000000,"2026-06-10","ACCEPTED","2026-03-10T08:00:00Z","2026-06-10T10:00:00Z","pm@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Milestones.length > 0) {
    sheet_Milestones.getRange(2, 1, demoData_Milestones.length, 12).setValues(demoData_Milestones);
  }
  sheet_Milestones.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_Milestones.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_Milestones.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');

  const rule_Milestones_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","ACCEPTED","OVERDUE"], true).build();
  sheet_Milestones.getRange('G2:G1000').setDataValidation(rule_Milestones_G2G1000);

  // =========================================================================
  // TAB: ContractPayments
  // =========================================================================
  const sheet_ContractPayments = sheets['ContractPayments'];
  sheet_ContractPayments.clear();
  sheet_ContractPayments.setTabColor('#1E88E5');
  sheet_ContractPayments.setFrozenRows(1);

  const headers_ContractPayments = ["ID","ContractID","MilestoneID","Amount","PaidAt","PaymentMethod","Reference","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ContractPayments.getRange(1, 1, 1, 12).setValues([headers_ContractPayments])
    .setFontWeight('bold').setBackground('#1E88E5').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ContractPayments.setRowHeight(1, 32);
  sheet_ContractPayments.setColumnWidth(1, 120);
  sheet_ContractPayments.setColumnWidth(2, 120);
  sheet_ContractPayments.setColumnWidth(3, 120);
  sheet_ContractPayments.setColumnWidth(4, 140);
  sheet_ContractPayments.setColumnWidth(5, 110);
  sheet_ContractPayments.setColumnWidth(6, 130);
  sheet_ContractPayments.setColumnWidth(7, 160);
  sheet_ContractPayments.setColumnWidth(8, 160);
  sheet_ContractPayments.setColumnWidth(9, 160);
  sheet_ContractPayments.setColumnWidth(10, 180);
  sheet_ContractPayments.setColumnWidth(11, 90);
  sheet_ContractPayments.setColumnWidth(12, 80);

  const demoData_ContractPayments = [["CPY-001","CTR-001","MLS-001",30000000,"2026-01-20","BANK_TRANSFER","UNC-260120-01 (Tạm ứng ký HĐ)","2026-01-20T08:00:00Z","2026-01-20T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["CPY-002","CTR-001","MLS-001",20000000,"2026-04-05","BANK_TRANSFER","UNC-260405-02 (Thanh toán sau GĐ 1)","2026-04-05T08:00:00Z","2026-04-05T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["CPY-003","CTR-003","MLS-004",50000000,"2026-06-25","BANK_TRANSFER","UNC-260625-01 (Tất toán HĐ 03)","2026-06-25T08:00:00Z","2026-06-25T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ContractPayments.length > 0) {
    sheet_ContractPayments.getRange(2, 1, demoData_ContractPayments.length, 12).setValues(demoData_ContractPayments);
  }
  sheet_ContractPayments.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');
  sheet_ContractPayments.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_ContractPayments_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BANK_TRANSFER","CASH","CREDIT_LETTER"], true).build();
  sheet_ContractPayments.getRange('F2:F1000').setDataValidation(rule_ContractPayments_F2F1000);

  // =========================================================================
  // TAB: ContractFiles
  // =========================================================================
  const sheet_ContractFiles = sheets['ContractFiles'];
  sheet_ContractFiles.clear();
  sheet_ContractFiles.setTabColor('#2196F3');
  sheet_ContractFiles.setFrozenRows(1);

  const headers_ContractFiles = ["ID","ContractID","FileName","Version","FileUrl","UploadedAt","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ContractFiles.getRange(1, 1, 1, 11).setValues([headers_ContractFiles])
    .setFontWeight('bold').setBackground('#2196F3').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ContractFiles.setRowHeight(1, 32);
  sheet_ContractFiles.setColumnWidth(1, 120);
  sheet_ContractFiles.setColumnWidth(2, 120);
  sheet_ContractFiles.setColumnWidth(3, 220);
  sheet_ContractFiles.setColumnWidth(4, 90);
  sheet_ContractFiles.setColumnWidth(5, 240);
  sheet_ContractFiles.setColumnWidth(6, 160);
  sheet_ContractFiles.setColumnWidth(7, 160);
  sheet_ContractFiles.setColumnWidth(8, 160);
  sheet_ContractFiles.setColumnWidth(9, 180);
  sheet_ContractFiles.setColumnWidth(10, 90);
  sheet_ContractFiles.setColumnWidth(11, 80);

  const demoData_ContractFiles = [["CFL-001","CTR-001","HopDong_KiemToan_GiaiPhapAChau_Signed.pdf","v1.0","drive.google.com/file/d/12345","2026-01-15T09:00:00Z","2026-01-15T09:00:00Z","2026-01-15T09:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CFL-002","CTR-001","PhuLuc_01_MobileApp_Signed.pdf","v1.1","drive.google.com/file/d/67890","2026-03-01T10:00:00Z","2026-03-01T10:00:00Z","2026-03-01T10:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ContractFiles.length > 0) {
    sheet_ContractFiles.getRange(2, 1, demoData_ContractFiles.length, 11).setValues(demoData_ContractFiles);
  }

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#455A64');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["EXPIRY_WARNING_DAYS","30","Số ngày cảnh báo trước khi hợp đồng hết hiệu lực","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ENABLE_INDEPENDENT_RECONCILIATION","TRUE","Mốc nghiệm thu và thanh toán hoàn toàn độc lập","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO QUẢN TRỊ HỢP ĐỒNG & PHÁT SINH')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi giá trị hợp đồng, phụ lục điều chỉnh, tiến độ nghiệm thu và giải ngân')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIÁ TRỊ HIỆN HÀNH
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIÁ TRỊ HIỆN HÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, "<>TERMINATED", Contracts!Q2:Q1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 2: ĐÃ NGHIỆM THU
  dashSheet.getRange('C4:D4').merge().setValue('ĐÃ NGHIỆM THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(Milestones!E2:E1000, Milestones!G2:G1000, "ACCEPTED", Milestones!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');

  // Card 3: ĐÃ THANH TOÁN
  dashSheet.getRange('E4:F4').merge().setValue('ĐÃ THANH TOÁN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0 "₫"');

  // Card 4: TỶ LỆ GIẢI NGÂN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ GIẢI NGÂN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, "FALSE") / IFERROR(SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, "<>TERMINATED", Contracts!Q2:Q1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('0.0%');

  // Card 5: HỢP ĐỒNG HIỆU LỰC
  dashSheet.getRange('I4:J4').merge().setValue('HỢP ĐỒNG HIỆU LỰC')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(Contracts!L2:L1000, "ACTIVE", Contracts!Q2:Q1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Giá Trị Hợp Đồng Theo Trạng Thái
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Contracts!L1:L1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Giá Trị Hợp Đồng Theo Trạng Thái')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Nghiệm Thu vs Thanh Toán Thực Tế
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Milestones!C1:C1000'))
      .addRange(dashSheet.getRange('Milestones!E1:E1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Nghiệm Thu vs Thanh Toán Thực Tế')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F08: VĂN BẢN, HỒ SƠ VÀ CHỈ ĐẠO
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F08 — Văn bản, hồ sơ và chỉ đạo
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F08_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF08Workbook(true);
}

function setupCleanTemplate() {
  initF08Workbook(false);
}

function initF08Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Documents","Directives","DocumentVersions","Dispatches","Categories","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — VĂN BẢN, HỒ SƠ VÀ CHỈ ĐẠO (F08)')
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
  // TAB: Documents
  // =========================================================================
  const sheet_Documents = sheets['Documents'];
  sheet_Documents.clear();
  sheet_Documents.setTabColor('#37474F');
  sheet_Documents.setFrozenRows(1);

  const headers_Documents = ["ID","Direction","BookCode","DocNumber","IssuedDate","ReceivedDate","Subject","Issuer","Recipient","CategoryID","Confidentiality","Urgency","OwnerEmail","DueDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Documents.getRange(1, 1, 1, 20).setValues([headers_Documents])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Documents.setRowHeight(1, 32);
  sheet_Documents.setColumnWidth(1, 120);
  sheet_Documents.setColumnWidth(2, 110);
  sheet_Documents.setColumnWidth(3, 110);
  sheet_Documents.setColumnWidth(4, 130);
  sheet_Documents.setColumnWidth(5, 110);
  sheet_Documents.setColumnWidth(6, 110);
  sheet_Documents.setColumnWidth(7, 240);
  sheet_Documents.setColumnWidth(8, 180);
  sheet_Documents.setColumnWidth(9, 180);
  sheet_Documents.setColumnWidth(10, 120);
  sheet_Documents.setColumnWidth(11, 120);
  sheet_Documents.setColumnWidth(12, 110);
  sheet_Documents.setColumnWidth(13, 200);
  sheet_Documents.setColumnWidth(14, 110);
  sheet_Documents.setColumnWidth(15, 120);
  sheet_Documents.setColumnWidth(16, 160);
  sheet_Documents.setColumnWidth(17, 160);
  sheet_Documents.setColumnWidth(18, 180);
  sheet_Documents.setColumnWidth(19, 90);
  sheet_Documents.setColumnWidth(20, 80);

  const demoData_Documents = [["DOC-001","INCOMING","SO-DEN-2026","125/UBND-VP","2026-09-01","2026-09-02","V/v phối hợp tổ chức Hội chợ Thương mại Quốc tế 2026","UBND Thành Phố","Ban Giám Đốc","CAT-01","INTERNAL","URGENT","lanhdao@minhtemplates.com","2026-09-15","PROCESSING","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-002","OUTGOING","SO-DI-2026","45/CV-MTF","2026-09-05","2026-09-05","Công văn phúc đáp đề xuất hợp tác công nghệ số","Minh Templates Factory","Tập đoàn Công nghệ FPT","CAT-02","PUBLIC","NORMAL","lanhdao@minhtemplates.com","2026-09-20","COMPLETED","2026-09-05T08:00:00Z","2026-09-05T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-003","INCOMING","SO-DEN-2026","88/BCT-KH","2026-09-08","2026-09-09","Thông tư quy định tiêu chuẩn kỹ thuật số hóa hồ sơ doanh nghiệp","Bộ Công Thương","Phòng Pháp Chế","CAT-01","INTERNAL","NORMAL","phapche@minhtemplates.com","2026-09-30","PROCESSING","2026-09-09T08:00:00Z","2026-09-09T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-004","INTERNAL","SO-NB-2026","01/TB-BGD","2026-09-10","2026-09-10","Thông báo quyết định bổ nhiệm nhân sự cấp cao","Hội Đồng Quản Trị","Toàn thể Cán bộ nhân viên","CAT-03","CONFIDENTIAL","URGENT","lanhdao@minhtemplates.com","2026-09-15","COMPLETED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Documents.length > 0) {
    sheet_Documents.getRange(2, 1, demoData_Documents.length, 20).setValues(demoData_Documents);
  }
  sheet_Documents.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Documents.getRange('N2:N1000').setNumberFormat('yyyy-mm-dd');

  const rule_Documents_B2B1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["INCOMING","OUTGOING","INTERNAL"], true).build();
  sheet_Documents.getRange('B2:B1000').setDataValidation(rule_Documents_B2B1000);

  const rule_Documents_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PUBLIC","INTERNAL","CONFIDENTIAL","SECRET"], true).build();
  sheet_Documents.getRange('K2:K1000').setDataValidation(rule_Documents_K2K1000);

  const rule_Documents_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NORMAL","URGENT","TOP_URGENT"], true).build();
  sheet_Documents.getRange('L2:L1000').setDataValidation(rule_Documents_L2L1000);

  const rule_Documents_O2O1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","PROCESSING","COMPLETED","OVERDUE","ARCHIVED"], true).build();
  sheet_Documents.getRange('O2:O1000').setDataValidation(rule_Documents_O2O1000);

  // =========================================================================
  // TAB: Directives
  // =========================================================================
  const sheet_Directives = sheets['Directives'];
  sheet_Directives.clear();
  sheet_Directives.setTabColor('#455A64');
  sheet_Directives.setFrozenRows(1);

  const headers_Directives = ["ID","DocumentID","Content","AssigneeEmail","DueDate","Status","Feedback","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Directives.getRange(1, 1, 1, 12).setValues([headers_Directives])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Directives.setRowHeight(1, 32);
  sheet_Directives.setColumnWidth(1, 120);
  sheet_Directives.setColumnWidth(2, 120);
  sheet_Directives.setColumnWidth(3, 240);
  sheet_Directives.setColumnWidth(4, 200);
  sheet_Directives.setColumnWidth(5, 110);
  sheet_Directives.setColumnWidth(6, 120);
  sheet_Directives.setColumnWidth(7, 220);
  sheet_Directives.setColumnWidth(8, 160);
  sheet_Directives.setColumnWidth(9, 160);
  sheet_Directives.setColumnWidth(10, 180);
  sheet_Directives.setColumnWidth(11, 90);
  sheet_Directives.setColumnWidth(12, 80);

  const demoData_Directives = [["DIR-001","DOC-001","Xây dựng kế hoạch gian hàng triển lãm và dự trù kinh phí","marketing@minhtemplates.com","2026-09-12","IN_PROGRESS","Đã khảo sát mặt bằng và liên hệ ban tổ chức","2026-09-02T09:00:00Z","2026-09-02T09:00:00Z","lanhdao@minhtemplates.com",1,"FALSE"],["DIR-002","DOC-001","Soạn thảo văn bản xác nhận tham gia gửi UBND","vanthu@minhtemplates.com","2026-09-10","COMPLETED","Đã phát hành công văn theo yêu cầu","2026-09-02T09:00:00Z","2026-09-10T10:00:00Z","lanhdao@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Directives.length > 0) {
    sheet_Directives.getRange(2, 1, demoData_Directives.length, 12).setValues(demoData_Directives);
  }
  sheet_Directives.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_Directives_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","IN_PROGRESS","COMPLETED","OVERDUE"], true).build();
  sheet_Directives.getRange('F2:F1000').setDataValidation(rule_Directives_F2F1000);

  // =========================================================================
  // TAB: DocumentVersions
  // =========================================================================
  const sheet_DocumentVersions = sheets['DocumentVersions'];
  sheet_DocumentVersions.clear();
  sheet_DocumentVersions.setTabColor('#546E7A');
  sheet_DocumentVersions.setFrozenRows(1);

  const headers_DocumentVersions = ["ID","DocumentID","Version","FileName","FileUrl","UploadedAt","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_DocumentVersions.getRange(1, 1, 1, 11).setValues([headers_DocumentVersions])
    .setFontWeight('bold').setBackground('#546E7A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_DocumentVersions.setRowHeight(1, 32);
  sheet_DocumentVersions.setColumnWidth(1, 120);
  sheet_DocumentVersions.setColumnWidth(2, 120);
  sheet_DocumentVersions.setColumnWidth(3, 90);
  sheet_DocumentVersions.setColumnWidth(4, 220);
  sheet_DocumentVersions.setColumnWidth(5, 240);
  sheet_DocumentVersions.setColumnWidth(6, 160);
  sheet_DocumentVersions.setColumnWidth(7, 160);
  sheet_DocumentVersions.setColumnWidth(8, 160);
  sheet_DocumentVersions.setColumnWidth(9, 180);
  sheet_DocumentVersions.setColumnWidth(10, 90);
  sheet_DocumentVersions.setColumnWidth(11, 80);

  const demoData_DocumentVersions = [["DVER-001","DOC-001","v1.0","VanBanDen_125_UBND.pdf","drive.google.com/file/d/doc125","2026-09-02T08:15:00Z","2026-09-02T08:15:00Z","2026-09-02T08:15:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DVER-002","DOC-002","v1.0","CongVan_45_FPT_Draft.pdf","drive.google.com/file/d/cv45draft","2026-09-04T14:00:00Z","2026-09-04T14:00:00Z","2026-09-04T14:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DVER-003","DOC-002","v1.1","CongVan_45_FPT_Signed.pdf","drive.google.com/file/d/cv45signed","2026-09-05T10:00:00Z","2026-09-05T10:00:00Z","2026-09-05T10:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_DocumentVersions.length > 0) {
    sheet_DocumentVersions.getRange(2, 1, demoData_DocumentVersions.length, 11).setValues(demoData_DocumentVersions);
  }

  // =========================================================================
  // TAB: Dispatches
  // =========================================================================
  const sheet_Dispatches = sheets['Dispatches'];
  sheet_Dispatches.clear();
  sheet_Dispatches.setTabColor('#607D8B');
  sheet_Dispatches.setFrozenRows(1);

  const headers_Dispatches = ["ID","DocumentID","Recipient","SentAt","Method","TrackingCode","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Dispatches.getRange(1, 1, 1, 11).setValues([headers_Dispatches])
    .setFontWeight('bold').setBackground('#607D8B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Dispatches.setRowHeight(1, 32);
  sheet_Dispatches.setColumnWidth(1, 120);
  sheet_Dispatches.setColumnWidth(2, 120);
  sheet_Dispatches.setColumnWidth(3, 200);
  sheet_Dispatches.setColumnWidth(4, 160);
  sheet_Dispatches.setColumnWidth(5, 120);
  sheet_Dispatches.setColumnWidth(6, 150);
  sheet_Dispatches.setColumnWidth(7, 160);
  sheet_Dispatches.setColumnWidth(8, 160);
  sheet_Dispatches.setColumnWidth(9, 180);
  sheet_Dispatches.setColumnWidth(10, 90);
  sheet_Dispatches.setColumnWidth(11, 80);

  const demoData_Dispatches = [["DSP-001","DOC-002","Tập đoàn FPT - Ban Chuyển đổi số","2026-09-05 11:00:00","COURIER","VNPOST-889977","2026-09-05T11:00:00Z","2026-09-05T11:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Dispatches.length > 0) {
    sheet_Dispatches.getRange(2, 1, demoData_Dispatches.length, 11).setValues(demoData_Dispatches);
  }

  const rule_Dispatches_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["EMAIL","POST","COURIER","DIRECT"], true).build();
  sheet_Dispatches.getRange('E2:E1000').setDataValidation(rule_Dispatches_E2E1000);

  // =========================================================================
  // TAB: Categories
  // =========================================================================
  const sheet_Categories = sheets['Categories'];
  sheet_Categories.clear();
  sheet_Categories.setTabColor('#78909C');
  sheet_Categories.setFrozenRows(1);

  const headers_Categories = ["ID","Name","AllowedRole","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Categories.getRange(1, 1, 1, 8).setValues([headers_Categories])
    .setFontWeight('bold').setBackground('#78909C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Categories.setRowHeight(1, 32);
  sheet_Categories.setColumnWidth(1, 120);
  sheet_Categories.setColumnWidth(2, 200);
  sheet_Categories.setColumnWidth(3, 180);
  sheet_Categories.setColumnWidth(4, 160);
  sheet_Categories.setColumnWidth(5, 160);
  sheet_Categories.setColumnWidth(6, 180);
  sheet_Categories.setColumnWidth(7, 90);
  sheet_Categories.setColumnWidth(8, 80);

  const demoData_Categories = [["CAT-01","Văn bản Hành chính & Chỉ đạo","STAFF","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAT-02","Công văn Đối ngoại & Hợp tác","STAFF","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAT-03","Hồ sơ Tổ chức & Nhân sự","HR_MANAGER","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Categories.length > 0) {
    sheet_Categories.getRange(2, 1, demoData_Categories.length, 8).setValues(demoData_Categories);
  }

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#90A4AE');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#90A4AE').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["WARN_DUPLICATE_NUMBER_IN_BOOK","TRUE","Cảnh báo khi trùng số văn bản trong cùng sổ/năm","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ENFORCE_CONFIDENTIAL_ROLE_CHECK","TRUE","Chặn truy cập file văn bản mật đối với nhân viên không được giao quyền","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO ĐIỀU HÀNH VĂN BẢN & CHỈ ĐẠO')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tiếp nhận văn bản, sổ đến/đi, tiến độ xử lý chỉ đạo và hạn hoàn thành')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ VĂN BẢN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ VĂN BẢN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Documents!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 2: VĂN BẢN ĐÃ XỬ LÝ
  dashSheet.getRange('C4:D4').merge().setValue('VĂN BẢN ĐÃ XỬ LÝ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=COUNTIFS(Documents!O2:O1000, "COMPLETED", Documents!T2:T1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0');

  // Card 3: TỶ LỆ XỬ LÝ XONG
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ XỬ LÝ XONG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IFERROR(COUNTIFS(Documents!O2:O1000, "COMPLETED", Documents!T2:T1000, "FALSE") / IFERROR(COUNTIFS(Documents!A2:A1000, "<>", Documents!T2:T1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');

  // Card 4: CHỈ ĐẠO CHƯA XONG
  dashSheet.getRange('G4:H4').merge().setValue('CHỈ ĐẠO CHƯA XONG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(Directives!F2:F1000, "<>COMPLETED", Directives!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');

  // Card 5: CHỈ ĐẠO QUÁ HẠN
  dashSheet.getRange('I4:J4').merge().setValue('CHỈ ĐẠO QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(Directives!F2:F1000, "OVERDUE", Directives!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Phân Bổ Chiều Văn Bản (Đến/Đi/Nội bộ)
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Documents!B1:B1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Phân Bổ Chiều Văn Bản (Đến/Đi/Nội bộ)')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Trạng Thái Thực Hiện Ý Kiến Chỉ Đạo
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Directives!F1:F1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Trạng Thái Thực Hiện Ý Kiến Chỉ Đạo')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

// ============================================================================
// INSTALLER SKU F26: LỚP HỌC, ĐIỂM DANH VÀ HỌC PHÍ
// ============================================================================
/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F26 — Lớp học, điểm danh và học phí
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F26_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF26Workbook(true);
}

function setupCleanTemplate() {
  initF26Workbook(false);
}

function initF26Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Students","Classes","Enrollments","Sessions","Attendance","TuitionInvoices","HolidayCalendar","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LỚP HỌC, ĐIỂM DANH VÀ HỌC PHÍ (F26)')
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
  // TAB: Students
  // =========================================================================
  const sheet_Students = sheets['Students'];
  sheet_Students.clear();
  sheet_Students.setTabColor('#E65100');
  sheet_Students.setFrozenRows(1);

  const headers_Students = ["ID","StudentCode","FullName","GuardianName","GuardianPhone","Email","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Students.getRange(1, 1, 1, 11).setValues([headers_Students])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Students.setRowHeight(1, 32);
  sheet_Students.setColumnWidth(1, 120);
  sheet_Students.setColumnWidth(2, 110);
  sheet_Students.setColumnWidth(3, 180);
  sheet_Students.setColumnWidth(4, 180);
  sheet_Students.setColumnWidth(5, 130);
  sheet_Students.setColumnWidth(6, 200);
  sheet_Students.setColumnWidth(7, 160);
  sheet_Students.setColumnWidth(8, 160);
  sheet_Students.setColumnWidth(9, 180);
  sheet_Students.setColumnWidth(10, 90);
  sheet_Students.setColumnWidth(11, 80);

  const demoData_Students = [["STU-001","HV-01","Nguyễn Đức Minh","Nguyễn Văn Nam","0912345678","nam@gmail.com","2026-08-01T08:00:00Z","2026-08-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["STU-002","HV-02","Trần Bảo Ngọc","Trần Đình Quân","0987654321","quan@gmail.com","2026-08-02T08:00:00Z","2026-08-02T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["STU-003","HV-03","Lê Khánh An","Lê Thị Thu","0933445566","thu@gmail.com","2026-08-03T08:00:00Z","2026-08-03T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Students.length > 0) {
    sheet_Students.getRange(2, 1, demoData_Students.length, 11).setValues(demoData_Students);
  }

  // =========================================================================
  // TAB: Classes
  // =========================================================================
  const sheet_Classes = sheets['Classes'];
  sheet_Classes.clear();
  sheet_Classes.setTabColor('#EF6C00');
  sheet_Classes.setFrozenRows(1);

  const headers_Classes = ["ID","ClassCode","Name","TeacherEmail","StartDate","EndDate","FeePerSession","ScheduleDays","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Classes.getRange(1, 1, 1, 14).setValues([headers_Classes])
    .setFontWeight('bold').setBackground('#EF6C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Classes.setRowHeight(1, 32);
  sheet_Classes.setColumnWidth(1, 120);
  sheet_Classes.setColumnWidth(2, 110);
  sheet_Classes.setColumnWidth(3, 200);
  sheet_Classes.setColumnWidth(4, 200);
  sheet_Classes.setColumnWidth(5, 110);
  sheet_Classes.setColumnWidth(6, 110);
  sheet_Classes.setColumnWidth(7, 140);
  sheet_Classes.setColumnWidth(8, 140);
  sheet_Classes.setColumnWidth(9, 90);
  sheet_Classes.setColumnWidth(10, 160);
  sheet_Classes.setColumnWidth(11, 160);
  sheet_Classes.setColumnWidth(12, 180);
  sheet_Classes.setColumnWidth(13, 90);
  sheet_Classes.setColumnWidth(14, 80);

  const demoData_Classes = [["CLS-001","ENG-B1-01","Tiếng Anh Giao Tiếp B1 (T2-T4)","teacher.david@minhtemplates.com","2026-09-07","2026-11-04",200000,"MON_WED","TRUE","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CLS-002","MATH-09-02","Toán Nâng Cao Lớp 9 (T3-T5)","teacher.phuong@minhtemplates.com","2026-09-08","2026-11-05",180000,"TUE_THU","TRUE","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Classes.length > 0) {
    sheet_Classes.getRange(2, 1, demoData_Classes.length, 14).setValues(demoData_Classes);
  }
  sheet_Classes.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Classes.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: Enrollments
  // =========================================================================
  const sheet_Enrollments = sheets['Enrollments'];
  sheet_Enrollments.clear();
  sheet_Enrollments.setTabColor('#F57C00');
  sheet_Enrollments.setFrozenRows(1);

  const headers_Enrollments = ["ID","StudentID","ClassID","EnrolledAt","Status","TotalCreditSessions","UsedSessions","RemainingSessions","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Enrollments.getRange(1, 1, 1, 13).setValues([headers_Enrollments])
    .setFontWeight('bold').setBackground('#F57C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Enrollments.setRowHeight(1, 32);
  sheet_Enrollments.setColumnWidth(1, 120);
  sheet_Enrollments.setColumnWidth(2, 120);
  sheet_Enrollments.setColumnWidth(3, 120);
  sheet_Enrollments.setColumnWidth(4, 110);
  sheet_Enrollments.setColumnWidth(5, 120);
  sheet_Enrollments.setColumnWidth(6, 130);
  sheet_Enrollments.setColumnWidth(7, 120);
  sheet_Enrollments.setColumnWidth(8, 130);
  sheet_Enrollments.setColumnWidth(9, 160);
  sheet_Enrollments.setColumnWidth(10, 160);
  sheet_Enrollments.setColumnWidth(11, 180);
  sheet_Enrollments.setColumnWidth(12, 90);
  sheet_Enrollments.setColumnWidth(13, 80);

  const demoData_Enrollments = [["ENR-001","STU-001","CLS-001","2026-09-01","ACTIVE",16,2,14,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["ENR-002","STU-002","CLS-001","2026-09-01","ACTIVE",16,2,14,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["ENR-003","STU-003","CLS-002","2026-09-01","ACTIVE",16,1,15,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Enrollments.length > 0) {
    sheet_Enrollments.getRange(2, 1, demoData_Enrollments.length, 13).setValues(demoData_Enrollments);
  }
  sheet_Enrollments.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_Enrollments_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","PAUSED","COMPLETED","DROPOUT"], true).build();
  sheet_Enrollments.getRange('E2:E1000').setDataValidation(rule_Enrollments_E2E1000);

  // =========================================================================
  // TAB: Sessions
  // =========================================================================
  const sheet_Sessions = sheets['Sessions'];
  sheet_Sessions.clear();
  sheet_Sessions.setTabColor('#FB8C00');
  sheet_Sessions.setFrozenRows(1);

  const headers_Sessions = ["ID","ClassID","SessionDate","StartTime","EndTime","Topic","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Sessions.getRange(1, 1, 1, 12).setValues([headers_Sessions])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Sessions.setRowHeight(1, 32);
  sheet_Sessions.setColumnWidth(1, 120);
  sheet_Sessions.setColumnWidth(2, 120);
  sheet_Sessions.setColumnWidth(3, 110);
  sheet_Sessions.setColumnWidth(4, 90);
  sheet_Sessions.setColumnWidth(5, 90);
  sheet_Sessions.setColumnWidth(6, 200);
  sheet_Sessions.setColumnWidth(7, 120);
  sheet_Sessions.setColumnWidth(8, 160);
  sheet_Sessions.setColumnWidth(9, 160);
  sheet_Sessions.setColumnWidth(10, 180);
  sheet_Sessions.setColumnWidth(11, 90);
  sheet_Sessions.setColumnWidth(12, 80);

  const demoData_Sessions = [["SES-001","CLS-001","2026-09-07","18:00","19:30","Bài 1: Giới thiệu & Giao tiếp cơ bản","COMPLETED","2026-09-01T08:00:00Z","2026-09-07T20:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-002","CLS-001","2026-09-09","18:00","19:30","Bài 2: Từ vựng Du lịch & Đời sống","COMPLETED","2026-09-01T08:00:00Z","2026-09-09T20:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-003","CLS-001","2026-09-14","18:00","19:30","Bài 3: Kỹ năng thuyết trình cá nhân","SCHEDULED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-004","CLS-001","2026-09-16","18:00","19:30","Nghỉ bảo trì trung tâm (Buổi hủy không trừ credit)","CANCELLED","2026-09-01T08:00:00Z","2026-09-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Sessions.length > 0) {
    sheet_Sessions.getRange(2, 1, demoData_Sessions.length, 12).setValues(demoData_Sessions);
  }
  sheet_Sessions.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');

  const rule_Sessions_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","COMPLETED","CANCELLED"], true).build();
  sheet_Sessions.getRange('G2:G1000').setDataValidation(rule_Sessions_G2G1000);

  // =========================================================================
  // TAB: Attendance
  // =========================================================================
  const sheet_Attendance = sheets['Attendance'];
  sheet_Attendance.clear();
  sheet_Attendance.setTabColor('#FFA726');
  sheet_Attendance.setFrozenRows(1);

  const headers_Attendance = ["ID","SessionID","EnrollmentID","StudentID","Result","ConsumedCredit","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Attendance.getRange(1, 1, 1, 11).setValues([headers_Attendance])
    .setFontWeight('bold').setBackground('#FFA726').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Attendance.setRowHeight(1, 32);
  sheet_Attendance.setColumnWidth(1, 120);
  sheet_Attendance.setColumnWidth(2, 120);
  sheet_Attendance.setColumnWidth(3, 120);
  sheet_Attendance.setColumnWidth(4, 120);
  sheet_Attendance.setColumnWidth(5, 140);
  sheet_Attendance.setColumnWidth(6, 120);
  sheet_Attendance.setColumnWidth(7, 160);
  sheet_Attendance.setColumnWidth(8, 160);
  sheet_Attendance.setColumnWidth(9, 180);
  sheet_Attendance.setColumnWidth(10, 90);
  sheet_Attendance.setColumnWidth(11, 80);

  const demoData_Attendance = [["ATT-001","SES-001","ENR-001","STU-001","PRESENT",1,"2026-09-07T19:30:00Z","2026-09-07T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-002","SES-001","ENR-002","STU-002","PRESENT",1,"2026-09-07T19:30:00Z","2026-09-07T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-003","SES-002","ENR-001","STU-001","PRESENT",1,"2026-09-09T19:30:00Z","2026-09-09T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-004","SES-002","ENR-002","STU-002","ABSENT_EXCUSED",1,"2026-09-09T19:30:00Z","2026-09-09T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Attendance.length > 0) {
    sheet_Attendance.getRange(2, 1, demoData_Attendance.length, 11).setValues(demoData_Attendance);
  }

  const rule_Attendance_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PRESENT","ABSENT_EXCUSED","ABSENT_UNEXCUSED"], true).build();
  sheet_Attendance.getRange('E2:E1000').setDataValidation(rule_Attendance_E2E1000);

  // =========================================================================
  // TAB: TuitionInvoices
  // =========================================================================
  const sheet_TuitionInvoices = sheets['TuitionInvoices'];
  sheet_TuitionInvoices.clear();
  sheet_TuitionInvoices.setTabColor('#FFB74D');
  sheet_TuitionInvoices.setFrozenRows(1);

  const headers_TuitionInvoices = ["ID","InvoiceCode","EnrollmentID","StudentID","Amount","DueDate","PaidAmount","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_TuitionInvoices.getRange(1, 1, 1, 13).setValues([headers_TuitionInvoices])
    .setFontWeight('bold').setBackground('#FFB74D').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TuitionInvoices.setRowHeight(1, 32);
  sheet_TuitionInvoices.setColumnWidth(1, 120);
  sheet_TuitionInvoices.setColumnWidth(2, 120);
  sheet_TuitionInvoices.setColumnWidth(3, 120);
  sheet_TuitionInvoices.setColumnWidth(4, 120);
  sheet_TuitionInvoices.setColumnWidth(5, 140);
  sheet_TuitionInvoices.setColumnWidth(6, 110);
  sheet_TuitionInvoices.setColumnWidth(7, 140);
  sheet_TuitionInvoices.setColumnWidth(8, 120);
  sheet_TuitionInvoices.setColumnWidth(9, 160);
  sheet_TuitionInvoices.setColumnWidth(10, 160);
  sheet_TuitionInvoices.setColumnWidth(11, 180);
  sheet_TuitionInvoices.setColumnWidth(12, 90);
  sheet_TuitionInvoices.setColumnWidth(13, 80);

  const demoData_TuitionInvoices = [["INV-001","HP-2609-01","ENR-001","STU-001",3200000,"2026-09-05",3200000,"PAID","2026-09-01T08:00:00Z","2026-09-04T10:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["INV-002","HP-2609-02","ENR-002","STU-002",3200000,"2026-09-05",1600000,"PARTIAL","2026-09-01T08:00:00Z","2026-09-04T11:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["INV-003","HP-2609-03","ENR-003","STU-003",2880000,"2026-09-05",0,"UNPAID","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_TuitionInvoices.length > 0) {
    sheet_TuitionInvoices.getRange(2, 1, demoData_TuitionInvoices.length, 13).setValues(demoData_TuitionInvoices);
  }
  sheet_TuitionInvoices.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_TuitionInvoices.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_TuitionInvoices.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_TuitionInvoices_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["UNPAID","PAID","PARTIAL"], true).build();
  sheet_TuitionInvoices.getRange('H2:H1000').setDataValidation(rule_TuitionInvoices_H2H1000);

  // =========================================================================
  // TAB: HolidayCalendar
  // =========================================================================
  const sheet_HolidayCalendar = sheets['HolidayCalendar'];
  sheet_HolidayCalendar.clear();
  sheet_HolidayCalendar.setTabColor('#D84315');
  sheet_HolidayCalendar.setFrozenRows(1);

  const headers_HolidayCalendar = ["ID","HolidayDate","Reason","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_HolidayCalendar.getRange(1, 1, 1, 8).setValues([headers_HolidayCalendar])
    .setFontWeight('bold').setBackground('#D84315').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_HolidayCalendar.setRowHeight(1, 32);
  sheet_HolidayCalendar.setColumnWidth(1, 120);
  sheet_HolidayCalendar.setColumnWidth(2, 110);
  sheet_HolidayCalendar.setColumnWidth(3, 220);
  sheet_HolidayCalendar.setColumnWidth(4, 160);
  sheet_HolidayCalendar.setColumnWidth(5, 160);
  sheet_HolidayCalendar.setColumnWidth(6, 180);
  sheet_HolidayCalendar.setColumnWidth(7, 90);
  sheet_HolidayCalendar.setColumnWidth(8, 80);

  const demoData_HolidayCalendar = [["HLD-001","2026-09-02","Nghỉ lễ Quốc Khánh","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["HLD-002","2026-09-03","Nghỉ bù lễ Quốc Khánh","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_HolidayCalendar.length > 0) {
    sheet_HolidayCalendar.getRange(2, 1, demoData_HolidayCalendar.length, 8).setValues(demoData_HolidayCalendar);
  }
  sheet_HolidayCalendar.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#4E342E');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#4E342E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["BLOCK_DUPLICATE_ATTENDANCE","TRUE","Chặn điểm danh 2 lần cùng một học sinh/buổi học","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["DEDUCT_CREDIT_ON_CANCELLED_SESSION","FALSE","Buổi học bị hủy tuyệt đối không trừ credit của học viên","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO VẬN HÀNH LỚP HỌC & HỌC PHÍ')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi sĩ số học viên, tình hình điểm danh chuyên cần, học phí đến hạn và công nợ')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG HỌC VIÊN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG HỌC VIÊN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Students!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 2: TỔNG HỌC PHÍ THU
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG HỌC PHÍ THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 3: CÔNG NỢ HỌC PHÍ
  dashSheet.getRange('E4:F4').merge().setValue('CÔNG NỢ HỌC PHÍ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=SUMIFS(TuitionInvoices!E2:E1000, TuitionInvoices!L2:L1000, "FALSE") - SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');

  // Card 4: TỶ LỆ CHUYÊN CẦN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ CHUYÊN CẦN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(COUNTIFS(Attendance!E2:E1000, "PRESENT", Attendance!J2:J1000, "FALSE") / IFERROR(COUNTIFS(Attendance!A2:A1000, "<>", Attendance!J2:J1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');

  // Card 5: LỚP HỌC ĐANG MỞ
  dashSheet.getRange('I4:J4').merge().setValue('LỚP HỌC ĐANG MỞ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(Classes!I2:I1000, "TRUE", Classes!N2:N1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Tình Trạng Nộp Học Phí
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('TuitionInvoices!H1:H1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Tình Trạng Nộp Học Phí')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Số Buổi Còn Lại Theo Học Viên
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Enrollments!B1:B1000'))
      .addRange(dashSheet.getRange('Enrollments!H1:H1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Số Buổi Còn Lại Theo Học Viên')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F01 — Quản lý công việc & Ma trận Eisenhower
 * Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND)
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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F01 BUSINESS')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function onEdit(e) {
  if (!e || !e.range) return;
  const sheet = e.range.getSheet();
  const sheetName = sheet.getName();
  const row = e.range.getRow();
  const col = e.range.getColumn();
  
  // Tự động ghi nhật ký thay đổi cho gói Business
  try {
    const ss = e.source || SpreadsheetApp.getActiveSpreadsheet();
    const auditSheet = ss.getSheetByName('AUDIT_LOG');
    if (auditSheet && sheetName !== 'AUDIT_LOG' && row > 1) {
      const timestamp = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm:ss');
      const userEmail = Session.getActiveUser().getEmail() || 'User';
      auditSheet.appendRow([
        'LOG-' + Utilities.getUuid().substring(0, 8),
        timestamp,
        userEmail,
        sheetName + ' R' + row + 'C' + col,
        'Value: ' + String(e.value || '')
      ]);
    }
  } catch(err) {}
}

function initF01Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Tasks","Categories","TaskEvents","AUDIT_LOG","SETTINGS"];
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
    ['Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND) | Thương hiệu: Minh Templates', '', '', '', '', ''],
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
  // TAB: AUDIT_LOG
  // =========================================================================
  const sheet_AUDIT_LOG = sheets['AUDIT_LOG'];
  sheet_AUDIT_LOG.clear();
  sheet_AUDIT_LOG.setTabColor('#37474F');
  sheet_AUDIT_LOG.setFrozenRows(1);

  const headers_AUDIT_LOG = ["Mã ghi nhận","Thời gian","Người thực hiện","Thao tác / Bảng","Chi tiết thay đổi"];
  sheet_AUDIT_LOG.getRange(1, 1, 1, 5).setValues([headers_AUDIT_LOG])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_AUDIT_LOG.setRowHeight(1, 32);
  sheet_AUDIT_LOG.setColumnWidth(1, 120);
  sheet_AUDIT_LOG.setColumnWidth(2, 160);
  sheet_AUDIT_LOG.setColumnWidth(3, 200);
  sheet_AUDIT_LOG.setColumnWidth(4, 160);
  sheet_AUDIT_LOG.setColumnWidth(5, 350);

  const demoData_AUDIT_LOG = [["LOG-001","2026-09-01 08:30:00","admin@minhtemplates.com","SYSTEM_INIT","Khởi tạo hệ thống Business"],["LOG-002","2026-09-02 09:15:20","sales@minhtemplates.com","TRANSACTION_POSTED","Ghi sổ giao dịch mới"]];
  if (isDemo && demoData_AUDIT_LOG.length > 0) {
    sheet_AUDIT_LOG.getRange(2, 1, demoData_AUDIT_LOG.length, 5).setValues(demoData_AUDIT_LOG);
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

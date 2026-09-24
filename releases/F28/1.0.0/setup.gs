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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F28 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F32 — Chấm công & tổng hợp ca làm việc
 * Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND)
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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F32 BASIC')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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
    ['Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND) | Thương hiệu: Minh Templates', '', '', '', '', ''],
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

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

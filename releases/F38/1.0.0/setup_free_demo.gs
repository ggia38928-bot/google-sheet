/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F38 — Quản lý nghỉ phép & số dư phép năm
 * Phiên bản: 1.0.0 | Gói: BẢN DEMO MIỄN PHÍ
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
    ['Phiên bản: 1.0.0 | Gói: BẢN DEMO MIỄN PHÍ | Thương hiệu: Minh Templates', '', '', '', '', ''],
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

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

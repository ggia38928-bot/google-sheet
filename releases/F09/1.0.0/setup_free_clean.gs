/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F09 — Lịch lãnh đạo, cuộc họp và công tác
 * Phiên bản: 1.0.0 | Gói: BẢN SẠCH MIỄN PHÍ
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
    ['Phiên bản: 1.0.0 | Gói: BẢN SẠCH MIỄN PHÍ | Thương hiệu: Minh Templates', '', '', '', '', ''],
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

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

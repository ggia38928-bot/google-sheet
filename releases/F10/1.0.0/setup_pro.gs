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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F10 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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

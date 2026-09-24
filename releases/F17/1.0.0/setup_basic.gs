/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F17 — Sổ thu chi & Dòng tiền Startup
 * Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND)
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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F17 BASIC')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

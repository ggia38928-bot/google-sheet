/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F20 — Bán hàng & Quản lý Đơn hàng Đa kênh
 * Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND)
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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F20 BASIC')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

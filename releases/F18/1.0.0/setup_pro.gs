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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F18 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
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

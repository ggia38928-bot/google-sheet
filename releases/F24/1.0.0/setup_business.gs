/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F24 — ERP Lite cơ bản cho đơn vị nhỏ
 * Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND)
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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F24 BUSINESS')
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

function initF24Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","SALES_ORDERS","PURCHASE_ORDERS","INVENTORY_LEDGER","FINANCE_JOURNAL","MASTER_PRODUCTS","MASTER_PARTIES","AUDIT_LOG","SETTINGS"];
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

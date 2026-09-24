/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F30 — Công nợ và phân bổ thanh toán
 * Phiên bản: 1.0.0 | Gói: BẢN SẠCH MIỄN PHÍ
 * Tự động sinh bởi Core Generator Engine
 */

function install_F30_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF30Workbook(true);
}

function setupCleanTemplate() {
  initF30Workbook(false);
}

function initF30Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","PARTIES","INVOICES","PAYMENTS","ALLOCATIONS","CREDIT_NOTES","OPENING_BALANCES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — CÔNG NỢ VÀ PHÂN BỔ THANH TOÁN (F30)')
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
  // TAB: PARTIES
  // =========================================================================
  const sheet_PARTIES = sheets['PARTIES'];
  sheet_PARTIES.clear();
  sheet_PARTIES.setTabColor('#1565C0');
  sheet_PARTIES.setFrozenRows(1);

  const headers_PARTIES = ["Mã đối tác","Tên khách hàng / Nhà cung cấp","Phân loại","Người liên hệ","Số điện thoại","Email","Mã số thuế","Hạn mức nợ (VND)","Thời hạn nợ (ngày)","Địa chỉ","Trạng thái"];
  sheet_PARTIES.getRange(1, 1, 1, 11).setValues([headers_PARTIES])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PARTIES.setRowHeight(1, 32);
  sheet_PARTIES.setColumnWidth(1, 110);
  sheet_PARTIES.setColumnWidth(2, 260);
  sheet_PARTIES.setColumnWidth(3, 120);
  sheet_PARTIES.setColumnWidth(4, 150);
  sheet_PARTIES.setColumnWidth(5, 120);
  sheet_PARTIES.setColumnWidth(6, 180);
  sheet_PARTIES.setColumnWidth(7, 130);
  sheet_PARTIES.setColumnWidth(8, 160);
  sheet_PARTIES.setColumnWidth(9, 130);
  sheet_PARTIES.setColumnWidth(10, 240);
  sheet_PARTIES.setColumnWidth(11, 110);

  const demoData_PARTIES = [["PT-001","Công ty TNHH Thương Mại Toàn Cầu","CUSTOMER","Nguyễn Anh Tuấn","0912345678","tuan.na@toancau.vn","0102030405",200000000,30,"120 Cầu Giấy, Hà Nội","ACTIVE"],["PT-002","Tập đoàn Sản Xuất Bao Bì Á Châu","VENDOR","Trần Thị Mai","0987654321","mai.tt@achaupkg.com","0304050607",500000000,45,"KCN Sóng Thần, Bình Dương","ACTIVE"],["PT-003","Công ty CP Công Nghệ & Dịch Vụ Nam Việt","CUSTOMER","Lê Hoàng Long","0903112233","long.lh@namviet.com","0405060708",100000000,15,"45 Lê Duẩn, Quận 1, TP.HCM","ACTIVE"],["PT-004","Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh","BOTH","Phạm Quốc Bảo","0938223344","baopq@phuthinh.vn","0506070809",150000000,30,"78 Nguyễn Đình Chiểu, Đà Nẵng","ACTIVE"]];
  if (isDemo && demoData_PARTIES.length > 0) {
    sheet_PARTIES.getRange(2, 1, demoData_PARTIES.length, 11).setValues(demoData_PARTIES);
  }
  sheet_PARTIES.getRange('H2:H1000').setNumberFormat('#,##0 "₫"');
  sheet_PARTIES.getRange('I2:I1000').setNumberFormat('#,##0');

  const rule_PARTIES_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CUSTOMER","VENDOR","BOTH"], true).build();
  sheet_PARTIES.getRange('C2:C1000').setDataValidation(rule_PARTIES_C2C1000);

  const rule_PARTIES_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","INACTIVE"], true).build();
  sheet_PARTIES.getRange('K2:K1000').setDataValidation(rule_PARTIES_K2K1000);

  // =========================================================================
  // TAB: INVOICES
  // =========================================================================
  const sheet_INVOICES = sheets['INVOICES'];
  sheet_INVOICES.clear();
  sheet_INVOICES.setTabColor('#0277BD');
  sheet_INVOICES.setFrozenRows(1);

  const headers_INVOICES = ["Mã hóa đơn/CT","Mã đối tác","Tên đối tác","Hướng công nợ","Ngày phát hành","Hạn thanh toán","Tổng tiền HĐ (VND)","Nguồn phát sinh","Mã nguồn tham chiếu","Đã phân bổ (VND)","Giảm trừ Credit (VND)","Còn phải thu/trả (VND)","Trạng thái","Ghi chú"];
  sheet_INVOICES.getRange(1, 1, 1, 14).setValues([headers_INVOICES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_INVOICES.setRowHeight(1, 32);
  sheet_INVOICES.setColumnWidth(1, 130);
  sheet_INVOICES.setColumnWidth(2, 110);
  sheet_INVOICES.setColumnWidth(3, 240);
  sheet_INVOICES.setColumnWidth(4, 130);
  sheet_INVOICES.setColumnWidth(5, 110);
  sheet_INVOICES.setColumnWidth(6, 110);
  sheet_INVOICES.setColumnWidth(7, 160);
  sheet_INVOICES.setColumnWidth(8, 140);
  sheet_INVOICES.setColumnWidth(9, 140);
  sheet_INVOICES.setColumnWidth(10, 160);
  sheet_INVOICES.setColumnWidth(11, 160);
  sheet_INVOICES.setColumnWidth(12, 170);
  sheet_INVOICES.setColumnWidth(13, 120);
  sheet_INVOICES.setColumnWidth(14, 200);

  const demoData_INVOICES = [["INV-2026-001","PT-001","Công ty TNHH Thương Mại Toàn Cầu","RECEIVABLE","2026-08-01","2026-08-31",1000000,"SalesOrder","SO-001","","","","PARTIAL","Hóa đơn mẫu kiểm thử CODEX"],["INV-2026-002","PT-001","Công ty TNHH Thương Mại Toàn Cầu","RECEIVABLE","2026-08-15","2026-09-15",50000000,"SalesOrder","SO-002","","","","OPEN","Đơn hàng máy tính xách tay"],["INV-2026-003","PT-003","Công ty CP Công Nghệ & Dịch Vụ Nam Việt","RECEIVABLE","2026-07-01","2026-07-15",35000000,"SalesOrder","SO-003","","","","OPEN","Hợp đồng bảo trì hệ thống phần mềm (Quá hạn)"],["INV-2026-004","PT-002","Tập đoàn Sản Xuất Bao Bì Á Châu","PAYABLE","2026-08-10","2026-09-25",120000000,"PurchaseOrder","PO-001","","","","OPEN","Nhập nguyên vật liệu sản xuất đợt 1"],["INV-2026-005","PT-004","Nhà Phân Phối Thiết Bị Văn Phòng Phú Thịnh","PAYABLE","2026-08-20","2026-09-20",40000000,"PurchaseOrder","PO-002","","","","OPEN","Thiết bị phụ trợ văn phòng"]];
  if (isDemo && demoData_INVOICES.length > 0) {
    sheet_INVOICES.getRange(2, 1, demoData_INVOICES.length, 14).setValues(demoData_INVOICES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_INVOICES.length > 0) {
    for (let r = 2; r <= demoData_INVOICES.length + 1; r++) {
      sheet_INVOICES.getRange(r, 10).setFormula('=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$C$2:$C$1000, A' + r + ')');
      sheet_INVOICES.getRange(r, 11).setFormula('=SUMIFS(CREDIT_NOTES!$C$2:$C$1000, CREDIT_NOTES!$B$2:$B$1000, A' + r + ', CREDIT_NOTES!$F$2:$F$1000, "APPLIED")');
      sheet_INVOICES.getRange(r, 12).setFormula('=MAX(0, G' + r + ' - J' + r + ' - K' + r + ')');
    }
  }
  sheet_INVOICES.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_INVOICES.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');
  sheet_INVOICES.getRange('J2:L1000').setNumberFormat('#,##0 "₫"');

  const rule_INVOICES_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["RECEIVABLE","PAYABLE"], true).build();
  sheet_INVOICES.getRange('D2:D1000').setDataValidation(rule_INVOICES_D2D1000);

  const rule_INVOICES_M2M1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","PARTIAL","PAID","CANCELLED"], true).build();
  sheet_INVOICES.getRange('M2:M1000').setDataValidation(rule_INVOICES_M2M1000);

  // =========================================================================
  // TAB: PAYMENTS
  // =========================================================================
  const sheet_PAYMENTS = sheets['PAYMENTS'];
  sheet_PAYMENTS.clear();
  sheet_PAYMENTS.setTabColor('#2E7D32');
  sheet_PAYMENTS.setFrozenRows(1);

  const headers_PAYMENTS = ["Mã thanh toán","Mã đối tác","Chiều giao dịch","Ngày thanh toán","Số tiền TT (VND)","Đã phân bổ (VND)","Chưa phân bổ (VND)","Hình thức / Tham chiếu","Trạng thái","Ghi chú"];
  sheet_PAYMENTS.getRange(1, 1, 1, 10).setValues([headers_PAYMENTS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PAYMENTS.setRowHeight(1, 32);
  sheet_PAYMENTS.setColumnWidth(1, 130);
  sheet_PAYMENTS.setColumnWidth(2, 110);
  sheet_PAYMENTS.setColumnWidth(3, 130);
  sheet_PAYMENTS.setColumnWidth(4, 120);
  sheet_PAYMENTS.setColumnWidth(5, 160);
  sheet_PAYMENTS.setColumnWidth(6, 160);
  sheet_PAYMENTS.setColumnWidth(7, 160);
  sheet_PAYMENTS.setColumnWidth(8, 180);
  sheet_PAYMENTS.setColumnWidth(9, 120);
  sheet_PAYMENTS.setColumnWidth(10, 200);

  const demoData_PAYMENTS = [["PAY-2026-001","PT-001","INCOMING","2026-08-10",1000000,"","","VCB-FT2608101","POSTED","Thanh toán tiền hàng qua ngân hàng"],["PAY-2026-002","PT-001","INCOMING","2026-08-25",20000000,"","","VCB-FT2608252","POSTED","Tạm ứng đợt 1 đơn hàng máy tính"],["PAY-2026-003","PT-002","OUTGOING","2026-08-28",50000000,"","","TCB-FT2608281","POSTED","Thanh toán tạm ứng nhà cung cấp bao bì"]];
  if (isDemo && demoData_PAYMENTS.length > 0) {
    sheet_PAYMENTS.getRange(2, 1, demoData_PAYMENTS.length, 10).setValues(demoData_PAYMENTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PAYMENTS.length > 0) {
    for (let r = 2; r <= demoData_PAYMENTS.length + 1; r++) {
      sheet_PAYMENTS.getRange(r, 6).setFormula('=SUMIFS(ALLOCATIONS!$D$2:$D$1000, ALLOCATIONS!$B$2:$B$1000, A' + r + ')');
      sheet_PAYMENTS.getRange(r, 7).setFormula('=MAX(0, E' + r + ' - F' + r + ')');
    }
  }
  sheet_PAYMENTS.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_PAYMENTS.getRange('E2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_PAYMENTS_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["INCOMING","OUTGOING"], true).build();
  sheet_PAYMENTS.getRange('C2:C1000').setDataValidation(rule_PAYMENTS_C2C1000);

  const rule_PAYMENTS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","VOID"], true).build();
  sheet_PAYMENTS.getRange('I2:I1000').setDataValidation(rule_PAYMENTS_I2I1000);

  // =========================================================================
  // TAB: ALLOCATIONS
  // =========================================================================
  const sheet_ALLOCATIONS = sheets['ALLOCATIONS'];
  sheet_ALLOCATIONS.clear();
  sheet_ALLOCATIONS.setTabColor('#E65100');
  sheet_ALLOCATIONS.setFrozenRows(1);

  const headers_ALLOCATIONS = ["Mã phân bổ","Mã thanh toán","Mã hóa đơn","Số tiền phân bổ (VND)","Ngày phân bổ","Ghi chú"];
  sheet_ALLOCATIONS.getRange(1, 1, 1, 6).setValues([headers_ALLOCATIONS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ALLOCATIONS.setRowHeight(1, 32);
  sheet_ALLOCATIONS.setColumnWidth(1, 130);
  sheet_ALLOCATIONS.setColumnWidth(2, 130);
  sheet_ALLOCATIONS.setColumnWidth(3, 130);
  sheet_ALLOCATIONS.setColumnWidth(4, 170);
  sheet_ALLOCATIONS.setColumnWidth(5, 120);
  sheet_ALLOCATIONS.setColumnWidth(6, 240);

  const demoData_ALLOCATIONS = [["ALC-001","PAY-2026-001","INV-2026-001",400000,"2026-08-10","Phân bổ 400.000đ theo CODEX Acceptance Test"],["ALC-002","PAY-2026-002","INV-2026-002",20000000,"2026-08-25","Phân bổ thanh toán tạm ứng máy tính"],["ALC-003","PAY-2026-003","INV-2026-004",50000000,"2026-08-28","Phân bổ trả trước nhà cung cấp Á Châu"]];
  if (isDemo && demoData_ALLOCATIONS.length > 0) {
    sheet_ALLOCATIONS.getRange(2, 1, demoData_ALLOCATIONS.length, 6).setValues(demoData_ALLOCATIONS);
  }
  sheet_ALLOCATIONS.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');
  sheet_ALLOCATIONS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: CREDIT_NOTES
  // =========================================================================
  const sheet_CREDIT_NOTES = sheets['CREDIT_NOTES'];
  sheet_CREDIT_NOTES.clear();
  sheet_CREDIT_NOTES.setTabColor('#6A1B9A');
  sheet_CREDIT_NOTES.setFrozenRows(1);

  const headers_CREDIT_NOTES = ["Mã giảm trừ","Mã hóa đơn","Số tiền giảm trừ (VND)","Ngày lập","Lý do giảm trừ","Trạng thái"];
  sheet_CREDIT_NOTES.getRange(1, 1, 1, 6).setValues([headers_CREDIT_NOTES])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CREDIT_NOTES.setRowHeight(1, 32);
  sheet_CREDIT_NOTES.setColumnWidth(1, 130);
  sheet_CREDIT_NOTES.setColumnWidth(2, 130);
  sheet_CREDIT_NOTES.setColumnWidth(3, 170);
  sheet_CREDIT_NOTES.setColumnWidth(4, 120);
  sheet_CREDIT_NOTES.setColumnWidth(5, 260);
  sheet_CREDIT_NOTES.setColumnWidth(6, 120);

  const demoData_CREDIT_NOTES = [["CR-001","INV-2026-001",100000,"2026-08-12","Chiết khấu thương mại bổ sung theo CODEX Acceptance Test","APPLIED"]];
  if (isDemo && demoData_CREDIT_NOTES.length > 0) {
    sheet_CREDIT_NOTES.getRange(2, 1, demoData_CREDIT_NOTES.length, 6).setValues(demoData_CREDIT_NOTES);
  }
  sheet_CREDIT_NOTES.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_CREDIT_NOTES.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_CREDIT_NOTES_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPLIED","VOID"], true).build();
  sheet_CREDIT_NOTES.getRange('F2:F1000').setDataValidation(rule_CREDIT_NOTES_F2F1000);

  // =========================================================================
  // TAB: OPENING_BALANCES
  // =========================================================================
  const sheet_OPENING_BALANCES = sheets['OPENING_BALANCES'];
  sheet_OPENING_BALANCES.clear();
  sheet_OPENING_BALANCES.setTabColor('#455A64');
  sheet_OPENING_BALANCES.setFrozenRows(1);

  const headers_OPENING_BALANCES = ["Mã số dư","Mã đối tác","Hướng công nợ","Ngày chốt số dư","Số dư ban đầu (VND)","Ghi chú"];
  sheet_OPENING_BALANCES.getRange(1, 1, 1, 6).setValues([headers_OPENING_BALANCES])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_OPENING_BALANCES.setRowHeight(1, 32);
  sheet_OPENING_BALANCES.setColumnWidth(1, 130);
  sheet_OPENING_BALANCES.setColumnWidth(2, 120);
  sheet_OPENING_BALANCES.setColumnWidth(3, 140);
  sheet_OPENING_BALANCES.setColumnWidth(4, 130);
  sheet_OPENING_BALANCES.setColumnWidth(5, 170);
  sheet_OPENING_BALANCES.setColumnWidth(6, 240);

  const demoData_OPENING_BALANCES = [["OP-001","PT-001","RECEIVABLE","2026-01-01",0,"Số dư đầu kỳ năm 2026"],["OP-002","PT-003","RECEIVABLE","2026-01-01",15000000,"Số dư nợ cũ chuyển sang"]];
  if (isDemo && demoData_OPENING_BALANCES.length > 0) {
    sheet_OPENING_BALANCES.getRange(2, 1, demoData_OPENING_BALANCES.length, 6).setValues(demoData_OPENING_BALANCES);
  }
  sheet_OPENING_BALANCES.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_OPENING_BALANCES.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');

  const rule_OPENING_BALANCES_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["RECEIVABLE","PAYABLE"], true).build();
  sheet_OPENING_BALANCES.getRange('C2:C1000').setDataValidation(rule_OPENING_BALANCES_C2C1000);

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
  
  const setRows = [["Đơn vị quản lý công nợ:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Kỳ công nợ mặc định:","30 ngày kể từ ngày xuất hóa đơn"],["Chính sách chiết khấu thanh toán sớm:","1% nếu thanh toán trong vòng 7 ngày"],["Đầu mối phụ trách kế toán công nợ:","Kế toán trưởng - ktcn@minhtemplates.vn"],["Cảnh báo nợ quá hạn:","Tự động gắn cờ đỏ khi quá hạn trên 30 ngày"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH CÔNG NỢ & PHÂN BỔ THANH TOÁN (F30)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi nợ phải thu • Nợ phải trả • Phân tích tuổi nợ Aging • Tiền chưa phân bổ')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NỢ PHẢI THU CÒN LẠI
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NỢ PHẢI THU CÒN LẠI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(INVOICES!$L$2:$L$1000, INVOICES!$D$2:$D$1000, "RECEIVABLE", INVOICES!$M$2:$M$1000, "<>CANCELLED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Khoản tiền khách hàng còn nợ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

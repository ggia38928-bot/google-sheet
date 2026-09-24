/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F34 — Lập ngân sách doanh nghiệp
 * Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F34_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF34Workbook(true);
}

function setupCleanTemplate() {
  initF34Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F34 BUSINESS')
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

function initF34Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","BUDGET_VERSIONS","BUDGET_LINES","BUDGET_ACTUALS","BUDGET_COMMITMENTS","BUDGET_REQUESTS","AUDIT_LOG","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LẬP NGÂN SÁCH DOANH NGHIỆP (F34)')
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
  // TAB: BUDGET_VERSIONS
  // =========================================================================
  const sheet_BUDGET_VERSIONS = sheets['BUDGET_VERSIONS'];
  sheet_BUDGET_VERSIONS.clear();
  sheet_BUDGET_VERSIONS.setTabColor('#1565C0');
  sheet_BUDGET_VERSIONS.setFrozenRows(1);

  const headers_BUDGET_VERSIONS = ["Mã phiên bản","Tên ngân sách","Năm tài chính","Kịch bản","Trạng thái","Ngày phê duyệt","Người lập"];
  sheet_BUDGET_VERSIONS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_VERSIONS])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_VERSIONS.setRowHeight(1, 32);
  sheet_BUDGET_VERSIONS.setColumnWidth(1, 130);
  sheet_BUDGET_VERSIONS.setColumnWidth(2, 260);
  sheet_BUDGET_VERSIONS.setColumnWidth(3, 110);
  sheet_BUDGET_VERSIONS.setColumnWidth(4, 130);
  sheet_BUDGET_VERSIONS.setColumnWidth(5, 120);
  sheet_BUDGET_VERSIONS.setColumnWidth(6, 120);
  sheet_BUDGET_VERSIONS.setColumnWidth(7, 180);

  const demoData_BUDGET_VERSIONS = [["BV-2026-BASE","Kế hoạch Ngân sách Tổng thể Năm 2026",2026,"BASELINE","LOCKED","2025-12-25","Ban Giám Đốc"],["BV-2026-REV1","Điều chỉnh Ngân sách Quý 3/2026",2026,"REVISED","APPROVED","2026-06-30","Phòng Tài Chính - Kế Toán"]];
  if (isDemo && demoData_BUDGET_VERSIONS.length > 0) {
    sheet_BUDGET_VERSIONS.getRange(2, 1, demoData_BUDGET_VERSIONS.length, 7).setValues(demoData_BUDGET_VERSIONS);
  }
  sheet_BUDGET_VERSIONS.getRange('C2:C1000').setNumberFormat('0');
  sheet_BUDGET_VERSIONS.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_VERSIONS_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BASELINE","REVISED","FORECAST"], true).build();
  sheet_BUDGET_VERSIONS.getRange('D2:D1000').setDataValidation(rule_BUDGET_VERSIONS_D2D1000);

  const rule_BUDGET_VERSIONS_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","APPROVED","LOCKED"], true).build();
  sheet_BUDGET_VERSIONS.getRange('E2:E1000').setDataValidation(rule_BUDGET_VERSIONS_E2E1000);

  // =========================================================================
  // TAB: BUDGET_LINES
  // =========================================================================
  const sheet_BUDGET_LINES = sheets['BUDGET_LINES'];
  sheet_BUDGET_LINES.clear();
  sheet_BUDGET_LINES.setTabColor('#0277BD');
  sheet_BUDGET_LINES.setFrozenRows(1);

  const headers_BUDGET_LINES = ["Mã dòng dự toán","Mã phiên bản","Kỳ ngân sách","Phòng ban","Mã dự án","Khoản mục chi phí","Ngân sách phê duyệt (VND)","Thực tế đã chi (VND)","Cam kết chưa chi (VND)","Khả dụng còn lại (VND)","Tỷ lệ sử dụng (%)","Diễn giải"];
  sheet_BUDGET_LINES.getRange(1, 1, 1, 12).setValues([headers_BUDGET_LINES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_LINES.setRowHeight(1, 32);
  sheet_BUDGET_LINES.setColumnWidth(1, 130);
  sheet_BUDGET_LINES.setColumnWidth(2, 130);
  sheet_BUDGET_LINES.setColumnWidth(3, 110);
  sheet_BUDGET_LINES.setColumnWidth(4, 140);
  sheet_BUDGET_LINES.setColumnWidth(5, 120);
  sheet_BUDGET_LINES.setColumnWidth(6, 200);
  sheet_BUDGET_LINES.setColumnWidth(7, 180);
  sheet_BUDGET_LINES.setColumnWidth(8, 170);
  sheet_BUDGET_LINES.setColumnWidth(9, 170);
  sheet_BUDGET_LINES.setColumnWidth(10, 180);
  sheet_BUDGET_LINES.setColumnWidth(11, 120);
  sheet_BUDGET_LINES.setColumnWidth(12, 220);

  const demoData_BUDGET_LINES = [["BL-001","BV-2026-BASE","2026-Q3","MARKETING","PRJ-MKT-01","Quảng cáo Digital (Facebook & Google)",100000000,"","","","","Dự toán theo CODEX Acceptance Test"],["BL-002","BV-2026-BASE","2026-Q3","KỸ THUẬT R&D","PRJ-TECH-02","Hạ tầng máy chủ đám mây Cloud",60000000,"","","","","Chi phí hạ tầng AWS/GCP"],["BL-003","BV-2026-BASE","2026-Q3","NHÂN SỰ","PRJ-HR-01","Đào tạo & Phát triển nhân tài",40000000,"","","","","Khóa huấn luyện kỹ năng cho nhân viên"],["BL-004","BV-2026-BASE","2026-Q3","VẬN HÀNH","PRJ-OPS-01","Văn phòng phẩm & tiện ích",25000000,"","","","","Chi phí văn phòng trụ sở chính"]];
  if (isDemo && demoData_BUDGET_LINES.length > 0) {
    sheet_BUDGET_LINES.getRange(2, 1, demoData_BUDGET_LINES.length, 12).setValues(demoData_BUDGET_LINES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_BUDGET_LINES.length > 0) {
    for (let r = 2; r <= demoData_BUDGET_LINES.length + 1; r++) {
      sheet_BUDGET_LINES.getRange(r, 8).setFormula('=SUMIFS(BUDGET_ACTUALS!$G$2:$G$1000, BUDGET_ACTUALS!$D$2:$D$1000, D' + r + ', BUDGET_ACTUALS!$F$2:$F$1000, F' + r + ', BUDGET_ACTUALS!$I$2:$I$1000, "POSTED")');
      sheet_BUDGET_LINES.getRange(r, 9).setFormula('=SUMIFS(BUDGET_COMMITMENTS!$C$2:$C$1000, BUDGET_COMMITMENTS!$B$2:$B$1000, A' + r + ', BUDGET_COMMITMENTS!$F$2:$F$1000, "COMMITTED")');
      sheet_BUDGET_LINES.getRange(r, 10).setFormula('=MAX(0, G' + r + ' - H' + r + ' - I' + r + ')');
      sheet_BUDGET_LINES.getRange(r, 11).setFormula('=IF(G' + r + '=0, 0, (H' + r + ' + I' + r + ') / G' + r + ')');
    }
  }
  sheet_BUDGET_LINES.getRange('G2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_LINES.getRange('K2:K1000').setNumberFormat('0.0%');

  const rule_BUDGET_LINES_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BAN GIÁM ĐỐC","MARKETING","KINH DOANH","KỸ THUẬT R&D","VẬN HÀNH","NHÂN SỰ"], true).build();
  sheet_BUDGET_LINES.getRange('D2:D1000').setDataValidation(rule_BUDGET_LINES_D2D1000);

  // =========================================================================
  // TAB: BUDGET_ACTUALS
  // =========================================================================
  const sheet_BUDGET_ACTUALS = sheets['BUDGET_ACTUALS'];
  sheet_BUDGET_ACTUALS.clear();
  sheet_BUDGET_ACTUALS.setTabColor('#2E7D32');
  sheet_BUDGET_ACTUALS.setFrozenRows(1);

  const headers_BUDGET_ACTUALS = ["Mã chi thực tế","Ngày chi","Kỳ ngân sách","Phòng ban","Mã dự án","Khoản mục chi phí","Số tiền thực chi (VND)","Mã nguồn tham chiếu","Trạng thái","Diễn giải"];
  sheet_BUDGET_ACTUALS.getRange(1, 1, 1, 10).setValues([headers_BUDGET_ACTUALS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_ACTUALS.setRowHeight(1, 32);
  sheet_BUDGET_ACTUALS.setColumnWidth(1, 130);
  sheet_BUDGET_ACTUALS.setColumnWidth(2, 110);
  sheet_BUDGET_ACTUALS.setColumnWidth(3, 110);
  sheet_BUDGET_ACTUALS.setColumnWidth(4, 140);
  sheet_BUDGET_ACTUALS.setColumnWidth(5, 120);
  sheet_BUDGET_ACTUALS.setColumnWidth(6, 200);
  sheet_BUDGET_ACTUALS.setColumnWidth(7, 170);
  sheet_BUDGET_ACTUALS.setColumnWidth(8, 160);
  sheet_BUDGET_ACTUALS.setColumnWidth(9, 120);
  sheet_BUDGET_ACTUALS.setColumnWidth(10, 220);

  const demoData_BUDGET_ACTUALS = [["ACT-001","2026-07-15","2026-Q3","MARKETING","PRJ-MKT-01","Quảng cáo Digital (Facebook & Google)",30000000,"F17-TX-089","POSTED","Chi tiền quảng cáo tháng 7 theo CODEX Test"],["ACT-002","2026-07-20","2026-Q3","KỸ THUẬT R&D","PRJ-TECH-02","Hạ tầng máy chủ đám mây Cloud",18000000,"F17-TX-095","POSTED","Hóa đơn máy chủ GCP tháng 7"]];
  if (isDemo && demoData_BUDGET_ACTUALS.length > 0) {
    sheet_BUDGET_ACTUALS.getRange(2, 1, demoData_BUDGET_ACTUALS.length, 10).setValues(demoData_BUDGET_ACTUALS);
  }
  sheet_BUDGET_ACTUALS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_BUDGET_ACTUALS.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_BUDGET_ACTUALS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["POSTED","PENDING"], true).build();
  sheet_BUDGET_ACTUALS.getRange('I2:I1000').setDataValidation(rule_BUDGET_ACTUALS_I2I1000);

  // =========================================================================
  // TAB: BUDGET_COMMITMENTS
  // =========================================================================
  const sheet_BUDGET_COMMITMENTS = sheets['BUDGET_COMMITMENTS'];
  sheet_BUDGET_COMMITMENTS.clear();
  sheet_BUDGET_COMMITMENTS.setTabColor('#E65100');
  sheet_BUDGET_COMMITMENTS.setFrozenRows(1);

  const headers_BUDGET_COMMITMENTS = ["Mã cam kết","Mã dòng dự toán","Số tiền cam kết (VND)","Hợp đồng / PO tham chiếu","Ngày cam kết","Trạng thái","Diễn giải"];
  sheet_BUDGET_COMMITMENTS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_COMMITMENTS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_COMMITMENTS.setRowHeight(1, 32);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(1, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(2, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(3, 170);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(4, 180);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(5, 120);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(6, 130);
  sheet_BUDGET_COMMITMENTS.setColumnWidth(7, 240);

  const demoData_BUDGET_COMMITMENTS = [["CMT-001","BL-001",20000000,"CTR-MKT-2026-05","2026-07-05","COMMITTED","Hợp đồng chạy truyền thông agency (Chưa thanh toán)"]];
  if (isDemo && demoData_BUDGET_COMMITMENTS.length > 0) {
    sheet_BUDGET_COMMITMENTS.getRange(2, 1, demoData_BUDGET_COMMITMENTS.length, 7).setValues(demoData_BUDGET_COMMITMENTS);
  }
  sheet_BUDGET_COMMITMENTS.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_COMMITMENTS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_COMMITMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["COMMITTED","RELEASED","EXPENDED"], true).build();
  sheet_BUDGET_COMMITMENTS.getRange('F2:F1000').setDataValidation(rule_BUDGET_COMMITMENTS_F2F1000);

  // =========================================================================
  // TAB: BUDGET_REQUESTS
  // =========================================================================
  const sheet_BUDGET_REQUESTS = sheets['BUDGET_REQUESTS'];
  sheet_BUDGET_REQUESTS.clear();
  sheet_BUDGET_REQUESTS.setTabColor('#6A1B9A');
  sheet_BUDGET_REQUESTS.setFrozenRows(1);

  const headers_BUDGET_REQUESTS = ["Mã đề xuất","Mã dòng dự toán","Số tiền xin điều chỉnh (VND)","Lý do xin điều chỉnh","Người đề xuất","Trạng thái","Ngày duyệt"];
  sheet_BUDGET_REQUESTS.getRange(1, 1, 1, 7).setValues([headers_BUDGET_REQUESTS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_BUDGET_REQUESTS.setRowHeight(1, 32);
  sheet_BUDGET_REQUESTS.setColumnWidth(1, 130);
  sheet_BUDGET_REQUESTS.setColumnWidth(2, 130);
  sheet_BUDGET_REQUESTS.setColumnWidth(3, 180);
  sheet_BUDGET_REQUESTS.setColumnWidth(4, 260);
  sheet_BUDGET_REQUESTS.setColumnWidth(5, 160);
  sheet_BUDGET_REQUESTS.setColumnWidth(6, 120);
  sheet_BUDGET_REQUESTS.setColumnWidth(7, 120);

  const demoData_BUDGET_REQUESTS = [["REQ-001","BL-001",15000000,"Bổ sung ngân sách chiến dịch kích cầu mùa tựu trường","Trần Thị Thu Thảo","APPROVED","2026-08-01"]];
  if (isDemo && demoData_BUDGET_REQUESTS.length > 0) {
    sheet_BUDGET_REQUESTS.getRange(2, 1, demoData_BUDGET_REQUESTS.length, 7).setValues(demoData_BUDGET_REQUESTS);
  }
  sheet_BUDGET_REQUESTS.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_BUDGET_REQUESTS.getRange('G2:G1000').setNumberFormat('yyyy-mm-dd');

  const rule_BUDGET_REQUESTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","APPROVED","REJECTED"], true).build();
  sheet_BUDGET_REQUESTS.getRange('F2:F1000').setDataValidation(rule_BUDGET_REQUESTS_F2F1000);

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
  
  const setRows = [["Đơn vị lập ngân sách:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Năm tài chính:","2026"],["Kỳ đánh giá dự toán:","Hàng quý (Quarterly Reviews)"],["Ngưỡng cảnh báo vượt ngân sách:","85% tổng ngân sách phê duyệt"],["Quy trình phê duyệt:","Trưởng phòng đề xuất -> Giám đốc Tài chính thẩm định -> Tổng Giám Đốc duyệt"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH NGÂN SÁCH DOANH NGHIỆP (F34)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi hạn mức ngân sách • Kiểm soát thực chi • Quản lý cam kết chi • Dự báo khả dụng')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG NGÂN SÁCH ĐƯỢC DUYỆT
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG NGÂN SÁCH ĐƯỢC DUYỆT')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUM(BUDGET_LINES!$G$2:$G$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng mức dự toán được phê duyệt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỔNG CHI THỰC TẾ
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG CHI THỰC TẾ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('C5:D5').merge().setValue('=SUM(BUDGET_LINES!$H$2:$H$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Tổng chi phí thực tế đã giải ngân')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 3: CHI PHÍ CAM KẾT CHƯA CHI
  dashSheet.getRange('E4:F4').merge().setValue('CHI PHÍ CAM KẾT CHƯA CHI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=SUM(BUDGET_LINES!$I$2:$I$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E6:F6').merge().setValue('Các khoản đã ký duyệt nhưng chưa thanh toán')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: NGÂN SÁCH KHẢ DỤNG CÒN LẠI
  dashSheet.getRange('G4:H4').merge().setValue('NGÂN SÁCH KHẢ DỤNG CÒN LẠI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('G5:H5').merge().setValue('=SUM(BUDGET_LINES!$J$2:$J$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('G6:H6').merge().setValue('Hạn mức ngân sách còn có thể sử dụng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Khóa bảo vệ vùng công thức
  try {
    const dashProt = sheets['DASHBOARD'].protect().setDescription('Khóa bảo vệ công thức Dashboard');
    dashProt.setWarningOnly(true);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

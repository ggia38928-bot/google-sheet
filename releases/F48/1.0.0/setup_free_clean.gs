/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F48 — Báo cáo chi phí, P&L và dòng tiền
 * Phiên bản: 1.0.0 | Gói: BẢN SẠCH MIỄN PHÍ
 * Tự động sinh bởi Core Generator Engine
 */

function install_F48_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF48Workbook(true);
}

function setupCleanTemplate() {
  initF48Workbook(false);
}

function initF48Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","FINANCE_FACTS","REPORT_MAPPINGS","REPORTING_PERIODS","REPORT_ADJUSTMENTS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — BÁO CÁO CHI PHÍ, P&L VÀ DÒNG TIỀN (F48)')
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
  // TAB: FINANCE_FACTS
  // =========================================================================
  const sheet_FINANCE_FACTS = sheets['FINANCE_FACTS'];
  sheet_FINANCE_FACTS.clear();
  sheet_FINANCE_FACTS.setTabColor('#1565C0');
  sheet_FINANCE_FACTS.setFrozenRows(1);

  const headers_FINANCE_FACTS = ["Mã bút toán","Ngày chứng từ","Kỳ kế toán","Mã tài khoản","Tên khoản mục","Phòng ban","Mã dự án","Số tiền (VND)","Phân loại P&L","Phân loại CashFlow","Mã nguồn tham chiếu","Diễn giải"];
  sheet_FINANCE_FACTS.getRange(1, 1, 1, 12).setValues([headers_FINANCE_FACTS])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FINANCE_FACTS.setRowHeight(1, 32);
  sheet_FINANCE_FACTS.setColumnWidth(1, 130);
  sheet_FINANCE_FACTS.setColumnWidth(2, 110);
  sheet_FINANCE_FACTS.setColumnWidth(3, 100);
  sheet_FINANCE_FACTS.setColumnWidth(4, 120);
  sheet_FINANCE_FACTS.setColumnWidth(5, 220);
  sheet_FINANCE_FACTS.setColumnWidth(6, 140);
  sheet_FINANCE_FACTS.setColumnWidth(7, 120);
  sheet_FINANCE_FACTS.setColumnWidth(8, 170);
  sheet_FINANCE_FACTS.setColumnWidth(9, 140);
  sheet_FINANCE_FACTS.setColumnWidth(10, 150);
  sheet_FINANCE_FACTS.setColumnWidth(11, 150);
  sheet_FINANCE_FACTS.setColumnWidth(12, 240);

  const demoData_FINANCE_FACTS = [["FACT-001","2026-08-01","2026-08","REV-SALES","Doanh thu bán hàng hóa","KINH DOANH","PRJ-RETAIL",1000000,"REVENUE","NON_CASH","SO-2026-001","Bán chịu 1 triệu theo CODEX Acceptance Test"],["FACT-002","2026-08-05","2026-08","REV-SALES","Doanh thu bán hàng thu tiền ngay","KINH DOANH","PRJ-RETAIL",120000000,"REVENUE","OPERATING","SO-2026-002","Bán hàng thu tiền ngay qua ngân hàng"],["FACT-003","2026-08-10","2026-08","COGS-PROD","Giá vốn hàng xuất bán","VẬN HÀNH","PRJ-RETAIL",65000000,"COGS","NON_CASH","INV-OUT-001","Xuất kho giá vốn hàng bán kỳ tháng 8"],["FACT-004","2026-08-12","2026-08","OPEX-SAL","Chi phí lương nhân viên","NHÂN SỰ","CORP",25000000,"OPEX","OPERATING","PAYROLL-08","Chi trả lương nhân viên đợt 1"],["FACT-005","2026-08-15","2026-08","OPEX-RENT","Chi phí thuê văn phòng","VẬN HÀNH","CORP",15000000,"OPEX","OPERATING","EXP-RENT-08","Chi phí tiền thuê văn phòng tháng 8"],["FACT-006","2026-08-20","2026-08","FIN-LOAN","Tiền vay ngân hàng giải ngân","BAN GIÁM ĐỐC","FINANCE",500000000,"FINANCING","FINANCING","LOAN-VCB-01","Tiền vay ngân hàng theo CODEX Acceptance Test"]];
  if (isDemo && demoData_FINANCE_FACTS.length > 0) {
    sheet_FINANCE_FACTS.getRange(2, 1, demoData_FINANCE_FACTS.length, 12).setValues(demoData_FINANCE_FACTS);
  }
  sheet_FINANCE_FACTS.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');
  sheet_FINANCE_FACTS.getRange('H2:H1000').setNumberFormat('#,##0 "₫"');

  const rule_FINANCE_FACTS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["REVENUE","COGS","OPEX","NON_OPERATING","FINANCING","NONE"], true).build();
  sheet_FINANCE_FACTS.getRange('I2:I1000').setDataValidation(rule_FINANCE_FACTS_I2I1000);

  const rule_FINANCE_FACTS_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPERATING","INVESTING","FINANCING","NON_CASH"], true).build();
  sheet_FINANCE_FACTS.getRange('J2:J1000').setDataValidation(rule_FINANCE_FACTS_J2J1000);

  // =========================================================================
  // TAB: REPORT_MAPPINGS
  // =========================================================================
  const sheet_REPORT_MAPPINGS = sheets['REPORT_MAPPINGS'];
  sheet_REPORT_MAPPINGS.clear();
  sheet_REPORT_MAPPINGS.setTabColor('#0277BD');
  sheet_REPORT_MAPPINGS.setFrozenRows(1);

  const headers_REPORT_MAPPINGS = ["Mã mapping","Mã tài khoản/Khoản mục","Tên hiển thị báo cáo","Báo cáo áp dụng","Nhóm chỉ tiêu","Dấu ghi nhận (+/-)"];
  sheet_REPORT_MAPPINGS.getRange(1, 1, 1, 6).setValues([headers_REPORT_MAPPINGS])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORT_MAPPINGS.setRowHeight(1, 32);
  sheet_REPORT_MAPPINGS.setColumnWidth(1, 120);
  sheet_REPORT_MAPPINGS.setColumnWidth(2, 170);
  sheet_REPORT_MAPPINGS.setColumnWidth(3, 240);
  sheet_REPORT_MAPPINGS.setColumnWidth(4, 140);
  sheet_REPORT_MAPPINGS.setColumnWidth(5, 200);
  sheet_REPORT_MAPPINGS.setColumnWidth(6, 130);

  const demoData_REPORT_MAPPINGS = [["MAP-001","REV-SALES","1. Doanh thu bán hàng & cung cấp dịch vụ","PL","DOANH THU",1],["MAP-002","COGS-PROD","2. Giá vốn hàng bán","PL","GIÁ VỐN",-1],["MAP-003","OPEX-SAL","3. Chi phí tiền lương nhân viên","PL","CHI PHÍ HOẠT ĐỘNG",-1],["MAP-004","OPEX-RENT","4. Chi phí thuê mặt bằng & văn phòng","PL","CHI PHÍ HOẠT ĐỘNG",-1],["MAP-005","FIN-LOAN","Tiền vay ngân hàng nhận được","CASHFLOW","DÒNG TIỀN TÀI CHÍNH",1]];
  if (isDemo && demoData_REPORT_MAPPINGS.length > 0) {
    sheet_REPORT_MAPPINGS.getRange(2, 1, demoData_REPORT_MAPPINGS.length, 6).setValues(demoData_REPORT_MAPPINGS);
  }
  sheet_REPORT_MAPPINGS.getRange('F2:F1000').setNumberFormat('0');

  const rule_REPORT_MAPPINGS_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PL","CASHFLOW","OPEX"], true).build();
  sheet_REPORT_MAPPINGS.getRange('D2:D1000').setDataValidation(rule_REPORT_MAPPINGS_D2D1000);

  const rule_REPORT_MAPPINGS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["1","-1"], true).build();
  sheet_REPORT_MAPPINGS.getRange('F2:F1000').setDataValidation(rule_REPORT_MAPPINGS_F2F1000);

  // =========================================================================
  // TAB: REPORTING_PERIODS
  // =========================================================================
  const sheet_REPORTING_PERIODS = sheets['REPORTING_PERIODS'];
  sheet_REPORTING_PERIODS.clear();
  sheet_REPORTING_PERIODS.setTabColor('#2E7D32');
  sheet_REPORTING_PERIODS.setFrozenRows(1);

  const headers_REPORTING_PERIODS = ["Mã kỳ kế toán","Tên kỳ báo cáo","Ngày bắt đầu","Ngày kết thúc","Khóa sổ","Người thực hiện"];
  sheet_REPORTING_PERIODS.getRange(1, 1, 1, 6).setValues([headers_REPORTING_PERIODS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORTING_PERIODS.setRowHeight(1, 32);
  sheet_REPORTING_PERIODS.setColumnWidth(1, 130);
  sheet_REPORTING_PERIODS.setColumnWidth(2, 200);
  sheet_REPORTING_PERIODS.setColumnWidth(3, 120);
  sheet_REPORTING_PERIODS.setColumnWidth(4, 120);
  sheet_REPORTING_PERIODS.setColumnWidth(5, 100);
  sheet_REPORTING_PERIODS.setColumnWidth(6, 180);

  const demoData_REPORTING_PERIODS = [["2026-07","Kỳ báo cáo Tháng 07/2026","2026-07-01","2026-07-31","CLOSED","Kế toán trưởng"],["2026-08","Kỳ báo cáo Tháng 08/2026","2026-08-01","2026-08-31","OPEN","Kế toán trưởng"]];
  if (isDemo && demoData_REPORTING_PERIODS.length > 0) {
    sheet_REPORTING_PERIODS.getRange(2, 1, demoData_REPORTING_PERIODS.length, 6).setValues(demoData_REPORTING_PERIODS);
  }
  sheet_REPORTING_PERIODS.getRange('C2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_REPORTING_PERIODS_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","CLOSED"], true).build();
  sheet_REPORTING_PERIODS.getRange('E2:E1000').setDataValidation(rule_REPORTING_PERIODS_E2E1000);

  // =========================================================================
  // TAB: REPORT_ADJUSTMENTS
  // =========================================================================
  const sheet_REPORT_ADJUSTMENTS = sheets['REPORT_ADJUSTMENTS'];
  sheet_REPORT_ADJUSTMENTS.clear();
  sheet_REPORT_ADJUSTMENTS.setTabColor('#6A1B9A');
  sheet_REPORT_ADJUSTMENTS.setFrozenRows(1);

  const headers_REPORT_ADJUSTMENTS = ["Mã điều chỉnh","Kỳ kế toán","Mã tài khoản","Số tiền điều chỉnh (VND)","Lý do điều chỉnh","Trạng thái"];
  sheet_REPORT_ADJUSTMENTS.getRange(1, 1, 1, 6).setValues([headers_REPORT_ADJUSTMENTS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_REPORT_ADJUSTMENTS.setRowHeight(1, 32);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(1, 130);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(2, 110);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(3, 150);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(4, 180);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(5, 260);
  sheet_REPORT_ADJUSTMENTS.setColumnWidth(6, 120);

  const demoData_REPORT_ADJUSTMENTS = [["ADJ-001","2026-08","COGS-PROD",-2000000,"Điều chỉnh giảm giá vốn do nhà cung cấp chiết khấu hồi tố","POSTED"]];
  if (isDemo && demoData_REPORT_ADJUSTMENTS.length > 0) {
    sheet_REPORT_ADJUSTMENTS.getRange(2, 1, demoData_REPORT_ADJUSTMENTS.length, 6).setValues(demoData_REPORT_ADJUSTMENTS);
  }
  sheet_REPORT_ADJUSTMENTS.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');

  const rule_REPORT_ADJUSTMENTS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","POSTED"], true).build();
  sheet_REPORT_ADJUSTMENTS.getRange('F2:F1000').setDataValidation(rule_REPORT_ADJUSTMENTS_F2F1000);

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
  
  const setRows = [["Tên đơn vị lập báo cáo:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Mã số thuế:","0316889988"],["Phương pháp tính giá vốn:","Bình quân gia quyền (Weighted Average)"],["Phương pháp lưu chuyển tiền tệ:","Phương pháp Trực tiếp (Direct Method)"],["Kế toán trưởng phụ trách:","Nguyễn Thị Bích Ngọc - CPA Việt Nam"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁO CÁO KẾT QUẢ KINH DOANH P&L & DÒNG TIỀN QUẢN TRỊ (F48)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Doanh thu thực tế • Giá vốn hàng bán • Lợi nhuận gộp • Dòng tiền kinh doanh thuần')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: DOANH THU THUẦN (P&L)
  dashSheet.getRange('A4:B4').merge().setValue('DOANH THU THUẦN (P&L)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(FINANCE_FACTS!$H$2:$H$1000, FINANCE_FACTS!$I$2:$I$1000, "REVENUE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Doanh thu ghi nhận theo chuẩn kế toán dồn tích')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

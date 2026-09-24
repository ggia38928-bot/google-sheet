/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F05 — CRM Chăm sóc khách hàng & Pipeline bán hàng
 * Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F05_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF05Workbook(true);
}

function setupCleanTemplate() {
  initF05Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F05 BASIC')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function initF05Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","DEALS","CUSTOMERS","ACTIVITIES","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — CRM CHĂM SÓC KHÁCH HÀNG & PIPELINE BÁN HÀNG (F05)')
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
  // TAB: DEALS
  // =========================================================================
  const sheet_DEALS = sheets['DEALS'];
  sheet_DEALS.clear();
  sheet_DEALS.setTabColor('#E65100');
  sheet_DEALS.setFrozenRows(1);

  const headers_DEALS = ["Mã Deal","Tiêu đề cơ hội","Mã KH","Tên khách hàng","Phụ trách","Giai đoạn (Stage)","Giá trị kỳ vọng (VND)","Xác suất","Giá trị trọng số (VND)","Dự kiến ngày chốt","Ngày chốt thực tế","Lý do Thắng/Thua"];
  sheet_DEALS.getRange(1, 1, 1, 12).setValues([headers_DEALS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_DEALS.setRowHeight(1, 32);
  sheet_DEALS.setColumnWidth(1, 95);
  sheet_DEALS.setColumnWidth(2, 240);
  sheet_DEALS.setColumnWidth(3, 95);
  sheet_DEALS.setColumnWidth(4, 180);
  sheet_DEALS.setColumnWidth(5, 190);
  sheet_DEALS.setColumnWidth(6, 130);
  sheet_DEALS.setColumnWidth(7, 160);
  sheet_DEALS.setColumnWidth(8, 90);
  sheet_DEALS.setColumnWidth(9, 160);
  sheet_DEALS.setColumnWidth(10, 130);
  sheet_DEALS.setColumnWidth(11, 130);
  sheet_DEALS.setColumnWidth(12, 280);

  const demoData_DEALS = [["DEAL-01","Triển khai phần mềm ERP Lite","CUST-01","Nguyễn Văn An","sales1@minhtemplates.com","THẮNG",85000000,1,"","2026-09-05","2026-09-05","Giải pháp đáp ứng đúng tiến độ và ngân sách"],["DEAL-02","Cung cấp hệ thống CRM & Đào tạo","CUST-02","Trần Thị Bích","sales2@minhtemplates.com","THẮNG",45000000,1,"","2026-09-08","2026-09-08","Khách đánh giá cao giao diện dễ dùng"],["DEAL-03","Hợp đồng bảo trì hệ thống hàng năm","CUST-03","Hoàng Minh Cường","sales1@minhtemplates.com","THUA",30000000,0,"","2026-09-07","2026-09-07","Khách hoãn ngân sách sang năm sau"],["DEAL-04","Tư vấn chuyển đổi số doanh nghiệp","CUST-04","Phạm Hải Đăng","sales3@minhtemplates.com","BÁO GIÁ",60000000,0.6,"","2026-09-25","","Đang thương lượng điều khoản thanh toán"],["DEAL-05","Gói thiết kế Dashboard quản trị","CUST-05","Vũ Quỳnh Nga","sales2@minhtemplates.com","TIẾP CẬN",25000000,0.3,"","2026-09-28","","Đã demo tính năng cho ban giám đốc"],["DEAL-06","Nâng cấp phân hệ kho nâng cao","CUST-01","Nguyễn Văn An","sales1@minhtemplates.com","MỚI",35000000,0.1,"","2026-10-15","","Khách quan tâm phân hệ kiểm kê tự động"]];
  if (isDemo && demoData_DEALS.length > 0) {
    sheet_DEALS.getRange(2, 1, demoData_DEALS.length, 12).setValues(demoData_DEALS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_DEALS.length > 0) {
    for (let r = 2; r <= demoData_DEALS.length + 1; r++) {
      sheet_DEALS.getRange(r, 9).setFormula('=ROUND(G' + r + ' * H' + r + ', 0)');
    }
  }
  sheet_DEALS.getRange('G2:G10001').setNumberFormat('#,##0 "₫"');
  sheet_DEALS.getRange('H2:H10001').setNumberFormat('0%');
  sheet_DEALS.getRange('I2:I10001').setNumberFormat('#,##0 "₫"');
  sheet_DEALS.getRange('J2:K10001').setNumberFormat('yyyy-mm-dd');

  const rule_DEALS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["MỚI","TIẾP CẬN","BÁO GIÁ","THẮNG","THUA"], true).build();
  sheet_DEALS.getRange('F2:F1000').setDataValidation(rule_DEALS_F2F1000);

  // =========================================================================
  // TAB: CUSTOMERS
  // =========================================================================
  const sheet_CUSTOMERS = sheets['CUSTOMERS'];
  sheet_CUSTOMERS.clear();
  sheet_CUSTOMERS.setTabColor('#01579B');
  sheet_CUSTOMERS.setFrozenRows(1);

  const headers_CUSTOMERS = ["Mã KH","Tên khách hàng","Số điện thoại","Email liên hệ","Công ty / Doanh nghiệp","Nguồn khách","Phân loại","Người phụ trách"];
  sheet_CUSTOMERS.getRange(1, 1, 1, 8).setValues([headers_CUSTOMERS])
    .setFontWeight('bold').setBackground('#01579B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CUSTOMERS.setRowHeight(1, 32);
  sheet_CUSTOMERS.setColumnWidth(1, 100);
  sheet_CUSTOMERS.setColumnWidth(2, 200);
  sheet_CUSTOMERS.setColumnWidth(3, 130);
  sheet_CUSTOMERS.setColumnWidth(4, 200);
  sheet_CUSTOMERS.setColumnWidth(5, 240);
  sheet_CUSTOMERS.setColumnWidth(6, 120);
  sheet_CUSTOMERS.setColumnWidth(7, 120);
  sheet_CUSTOMERS.setColumnWidth(8, 200);

  const demoData_CUSTOMERS = [["CUST-01","Nguyễn Văn An","0903112233","an.nguyen@anphat.vn","Công ty Cổ phần An Phát","Google Ads","VIP","sales1@minhtemplates.com"],["CUST-02","Trần Thị Bích","0912445566","bich.tran@tana.com","Tập đoàn Cơ Khí Tân Á","Giới thiệu","VIP","sales2@minhtemplates.com"],["CUST-03","Hoàng Minh Cường","0988776655","cuong.hoang@greentech.vn","Kiến Trúc Xanh GreenTech","Facebook","Tiềm năng","sales1@minhtemplates.com"],["CUST-04","Phạm Hải Đăng","0934112244","dang.pham@logistics.vn","Đăng Hải Logistics","Website","Tiềm năng","sales3@minhtemplates.com"],["CUST-05","Vũ Quỳnh Nga","0977223344","nga.vu@fashionstyle.com","Thời Trang Trẻ Song Nga","Facebook","Khách hàng cũ","sales2@minhtemplates.com"]];
  if (isDemo && demoData_CUSTOMERS.length > 0) {
    sheet_CUSTOMERS.getRange(2, 1, demoData_CUSTOMERS.length, 8).setValues(demoData_CUSTOMERS);
  }
  sheet_CUSTOMERS.getRange('C2:C1000').setNumberFormat('@');

  // =========================================================================
  // TAB: ACTIVITIES
  // =========================================================================
  const sheet_ACTIVITIES = sheets['ACTIVITIES'];
  sheet_ACTIVITIES.clear();
  sheet_ACTIVITIES.setTabColor('#4A148C');
  sheet_ACTIVITIES.setFrozenRows(1);

  const headers_ACTIVITIES = ["Mã HĐ","Ngày thực hiện","Mã KH","Tên khách hàng","Hình thức","Nội dung trao đổi chi tiết","Ngày hẹn tiếp theo","Trạng thái xử lý"];
  sheet_ACTIVITIES.getRange(1, 1, 1, 8).setValues([headers_ACTIVITIES])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ACTIVITIES.setRowHeight(1, 32);
  sheet_ACTIVITIES.setColumnWidth(1, 95);
  sheet_ACTIVITIES.setColumnWidth(2, 120);
  sheet_ACTIVITIES.setColumnWidth(3, 95);
  sheet_ACTIVITIES.setColumnWidth(4, 180);
  sheet_ACTIVITIES.setColumnWidth(5, 110);
  sheet_ACTIVITIES.setColumnWidth(6, 350);
  sheet_ACTIVITIES.setColumnWidth(7, 140);
  sheet_ACTIVITIES.setColumnWidth(8, 130);

  const demoData_ACTIVITIES = [["ACT-01","2026-09-02","CUST-01","Nguyễn Văn An","GẶP MẶT","Thảo luận ký kết hợp đồng ERP Lite tại văn phòng khách","2026-09-05","HOÀN THÀNH"],["ACT-02","2026-09-03","CUST-02","Trần Thị Bích","DEMO","Buổi demo online hệ thống CRM cho phòng kinh doanh","2026-09-08","HOÀN THÀNH"],["ACT-03","2026-09-04","CUST-03","Hoàng Minh Cường","GỌI ĐIỆN","Tư vấn gói bảo trì định kỳ, khách hẹn xem xét lại","2026-09-07","HOÀN THÀNH"],["ACT-04","2026-09-06","CUST-04","Phạm Hải Đăng","EMAIL","Gửi bảng báo giá chi tiết và lộ trình triển khai","2026-09-12","CHỜ XỬ LÝ"],["ACT-05","2026-09-08","CUST-05","Vũ Quỳnh Nga","ZALO","Gửi video giới thiệu mẫu dashboard mẫu cho khách duyệt","2026-09-15","CHỜ XỬ LÝ"]];
  if (isDemo && demoData_ACTIVITIES.length > 0) {
    sheet_ACTIVITIES.getRange(2, 1, demoData_ACTIVITIES.length, 8).setValues(demoData_ACTIVITIES);
  }
  sheet_ACTIVITIES.getRange('B2:B10001').setNumberFormat('yyyy-mm-dd');
  sheet_ACTIVITIES.getRange('G2:G10001').setNumberFormat('yyyy-mm-dd');

  const rule_ACTIVITIES_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["GỌI ĐIỆN","GẶP MẶT","EMAIL","DEMO","ZALO"], true).build();
  sheet_ACTIVITIES.getRange('E2:E1000').setDataValidation(rule_ACTIVITIES_E2E1000);

  const rule_ACTIVITIES_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["HOÀN THÀNH","CHỜ XỬ LÝ"], true).build();
  sheet_ACTIVITIES.getRange('H2:H1000').setDataValidation(rule_ACTIVITIES_H2H1000);

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
  
  const setRows = [["Tên đơn vị quản lý CRM:","Công ty TNHH Giải Pháp Số Minh"],["Đơn vị tiền tệ chuẩn:","VND"],["Mục tiêu doanh số tháng:",300000000],["Chu kỳ theo dõi pipeline:","30 ngày"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁN HÀNG & QUẢN TRỊ PIPELINE CRM (F05)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Tổng hợp phễu bán hàng • Tỷ lệ chốt đơn Win Rate • Cảnh báo lịch hẹn chăm sóc khách hàng tức thì')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: GIÁ TRỊ PHỄU ĐANG MỞ
  dashSheet.getRange('A4:B4').merge().setValue('GIÁ TRỊ PHỄU ĐANG MỞ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(DEALS!$G$2:$G$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Tổng kỳ vọng các deal chưa đóng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 2: GIÁ TRỊ CÓ TRỌNG SỐ
  dashSheet.getRange('C4:D4').merge().setValue('GIÁ TRỊ CÓ TRỌNG SỐ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(DEALS!$I$2:$I$10001, DEALS!$F$2:$F$10001, "<>THẮNG", DEALS!$F$2:$F$10001, "<>THUA")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Giá trị nhân với xác suất chốt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 3: TỶ LỆ CHỐT ĐƠN (WIN RATE)
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ CHỐT ĐƠN (WIN RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=IFERROR(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")/(COUNTIF(DEALS!$F$2:$F$10001,"THẮNG")+COUNTIF(DEALS!$F$2:$F$10001,"THUA")),0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('0.0%');
  dashSheet.getRange('E6:F6').merge().setValue('Thắng / (Thắng + Thua) đã chốt')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: PHÂN BỔ SỐ LƯỢNG VÀ GIÁ TRỊ THEO GIAI ĐOẠN PHỄU
  dashSheet.getRange('A8:E8').merge().setValue('PHÂN BỔ SỐ LƯỢNG VÀ GIÁ TRỊ THEO GIAI ĐOẠN PHỄU')
    .setFontWeight('bold').setFontColor('#0D47A1').setBackground('#BBDEFB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Giai đoạn","Số lượng Deal","Tổng giá trị (VND)","Trọng số","Giá trị kỳ vọng"]])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 4; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '")');
    dashSheet.getRange(r, 3).setFormula('=SUMIF(DEALS!$F$2:$F$10001, "' + ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'THẮNG', 'THUA'][i] + '", DEALS!$G$2:$G$10001)');
    dashSheet.getRange(r, 4).setFormula([0.1, 0.3, 0.6, 1.0, 0.0][i]);
    dashSheet.getRange(r, 5).setFormula('=ROUND(C' + r + ' * D' + r + ', 0)');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B14').setNumberFormat('#,##0');
  dashSheet.getRange('C10:C14').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('D10:D14').setNumberFormat('0%');
  dashSheet.getRange('E10:E14').setNumberFormat('#,##0 "₫"');

  // Chart: SỐ LƯỢNG CƠ HỘI BÁN HÀNG THEO GIAI ĐOẠN
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('A9:B14'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'SỐ LƯỢNG CƠ HỘI BÁN HÀNG THEO GIAI ĐOẠN')
      .setOption('width', 520)
      .setOption('height', 240)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F19 — Quản lý Báo giá & Phiên bản Chào hàng
 * Phiên bản: 1.0.0 | Gói: GÓI BASIC (49.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F19_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF19Workbook(true);
}

function setupCleanTemplate() {
  initF19Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F19 BASIC')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function initF19Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","QUOTES","QUOTE_ITEMS","CUSTOMERS","PRODUCTS","TERMS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ BÁO GIÁ & PHIÊN BẢN CHÀO HÀNG (F19)')
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
  // TAB: QUOTES
  // =========================================================================
  const sheet_QUOTES = sheets['QUOTES'];
  sheet_QUOTES.clear();
  sheet_QUOTES.setTabColor('#0277BD');
  sheet_QUOTES.setFrozenRows(1);

  const headers_QUOTES = ["Mã báo giá","Số báo giá","Tiêu đề chào hàng","Ngày lập","Hạn hiệu lực","Mã KH","Tên khách hàng","Phiên bản","Tiền tệ","Tổng trước thuế/CK (VND)","Chiết khấu (%)","Tiền chiết khấu (VND)","Thuế VAT (%)","Tiền thuế (VND)","Tổng thanh toán (VND)","Trạng thái","Sales phụ trách","Ghi chú điều khoản"];
  sheet_QUOTES.getRange(1, 1, 1, 18).setValues([headers_QUOTES])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_QUOTES.setRowHeight(1, 32);
  sheet_QUOTES.setColumnWidth(1, 110);
  sheet_QUOTES.setColumnWidth(2, 130);
  sheet_QUOTES.setColumnWidth(3, 220);
  sheet_QUOTES.setColumnWidth(4, 105);
  sheet_QUOTES.setColumnWidth(5, 105);
  sheet_QUOTES.setColumnWidth(6, 100);
  sheet_QUOTES.setColumnWidth(7, 240);
  sheet_QUOTES.setColumnWidth(8, 90);
  sheet_QUOTES.setColumnWidth(9, 80);
  sheet_QUOTES.setColumnWidth(10, 170);
  sheet_QUOTES.setColumnWidth(11, 110);
  sheet_QUOTES.setColumnWidth(12, 160);
  sheet_QUOTES.setColumnWidth(13, 110);
  sheet_QUOTES.setColumnWidth(14, 150);
  sheet_QUOTES.setColumnWidth(15, 180);
  sheet_QUOTES.setColumnWidth(16, 120);
  sheet_QUOTES.setColumnWidth(17, 160);
  sheet_QUOTES.setColumnWidth(18, 220);

  const demoData_QUOTES = [["BG-001","QUOTE-2026-001","Cung cấp thiết bị mạng văn phòng","2026-09-01","2026-09-30","CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","v1.0","VND",45000000,0.05,"",0.08,"","","ACCEPTED","Nguyễn Văn Minh","Thanh toán 50% tạm ứng, bảo hành 12 tháng"],["BG-002","QUOTE-2026-002","Gói phần mềm ERP Mini bản quyền","2026-09-03","2026-09-25","CUST-02","Tập đoàn Công Nghệ Viễn Đông","v1.1","VND",80000000,0.1,"",0.1,"","","ACCEPTED","Trần Thị Thu Thảo","Triển khai trong vòng 15 ngày làm việc"],["BG-003","QUOTE-2026-003","Dịch vụ bảo trì hệ thống máy chủ","2026-09-05","2026-09-18","CUST-03","Công ty Xây Lắp Điện Đại Nam","v1.0","VND",28000000,0,"",0.08,"","","SENT","Nguyễn Văn Minh","Giá chưa bao gồm linh kiện thay thế ngoài gói"],["BG-004","QUOTE-2026-004","Tư vấn chuyển đổi số doanh nghiệp","2026-09-07","2026-09-15","CUST-04","Chuỗi Cửa Hàng Bách Hóa Xanh","v1.0","VND",50000000,0.05,"",0.08,"","","REJECTED","Trần Thị Thu Thảo","Khách hàng dời kế hoạch sang quý 4"],["BG-005","QUOTE-2026-005","Nâng cấp bảo mật mạng nội bộ","2026-08-10","2026-08-25","CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","v1.0","VND",18000000,0,"",0.08,"","","EXPIRED","Lê Hoàng Long","Hết hiệu lực báo giá do quá thời hạn phản hồi"]];
  if (isDemo && demoData_QUOTES.length > 0) {
    sheet_QUOTES.getRange(2, 1, demoData_QUOTES.length, 18).setValues(demoData_QUOTES);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_QUOTES.length > 0) {
    for (let r = 2; r <= demoData_QUOTES.length + 1; r++) {
      sheet_QUOTES.getRange(r, 12).setFormula('=J' + r + ' * K' + r);
      sheet_QUOTES.getRange(r, 14).setFormula('=(J' + r + ' - L' + r + ') * M' + r);
      sheet_QUOTES.getRange(r, 15).setFormula('=J' + r + ' - L' + r + ' + N' + r);
    }
  }
  sheet_QUOTES.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd');
  sheet_QUOTES.getRange('J2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTES.getRange('K2:K1000').setNumberFormat('0.0%');
  sheet_QUOTES.getRange('L2:L1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTES.getRange('M2:M1000').setNumberFormat('0.0%');
  sheet_QUOTES.getRange('N2:O1000').setNumberFormat('#,##0 "₫"');

  const rule_QUOTES_P2P1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SENT","ACCEPTED","REJECTED","EXPIRED"], true).build();
  sheet_QUOTES.getRange('P2:P1000').setDataValidation(rule_QUOTES_P2P1000);

  const rule_QUOTES_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["v1.0","v1.1","v1.2","v2.0"], true).build();
  sheet_QUOTES.getRange('H2:H1000').setDataValidation(rule_QUOTES_H2H1000);

  // =========================================================================
  // TAB: QUOTE_ITEMS
  // =========================================================================
  const sheet_QUOTE_ITEMS = sheets['QUOTE_ITEMS'];
  sheet_QUOTE_ITEMS.clear();
  sheet_QUOTE_ITEMS.setTabColor('#2E7D32');
  sheet_QUOTE_ITEMS.setFrozenRows(1);

  const headers_QUOTE_ITEMS = ["Mã dòng","Mã báo giá","Mã SP/DV","Tên hàng hóa / Dịch vụ","ĐVT","Số lượng","Đơn giá niêm yết (VND)","Chiết khấu dòng (%)","Đơn giá sau CK (VND)","Thành tiền (VND)","Thuế suất (%)","Tiền thuế dòng (VND)","Tổng cộng dòng (VND)","Ghi chú thông số"];
  sheet_QUOTE_ITEMS.getRange(1, 1, 1, 14).setValues([headers_QUOTE_ITEMS])
    .setFontWeight('bold').setBackground('#2E7D32').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_QUOTE_ITEMS.setRowHeight(1, 32);
  sheet_QUOTE_ITEMS.setColumnWidth(1, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(2, 110);
  sheet_QUOTE_ITEMS.setColumnWidth(3, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(4, 260);
  sheet_QUOTE_ITEMS.setColumnWidth(5, 70);
  sheet_QUOTE_ITEMS.setColumnWidth(6, 80);
  sheet_QUOTE_ITEMS.setColumnWidth(7, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(8, 120);
  sheet_QUOTE_ITEMS.setColumnWidth(9, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(10, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(11, 100);
  sheet_QUOTE_ITEMS.setColumnWidth(12, 140);
  sheet_QUOTE_ITEMS.setColumnWidth(13, 160);
  sheet_QUOTE_ITEMS.setColumnWidth(14, 200);

  const demoData_QUOTE_ITEMS = [["QI-001","BG-001","PROD-01","Thiết bị định tuyến Router Cisco C1111","Cái",2,10000000,0.05,"","",0.08,"","","Bảo hành chính hãng 2 năm"],["QI-002","BG-001","PROD-02","Switch chia mạng 24 Port Gigabit PoE","Cái",1,25000000,0.05,"","",0.08,"","","Có tính năng quản lý VLAN"],["QI-003","BG-002","PROD-03","Gói bản quyền phần mềm ERP Core (5 User)","Gói",1,60000000,0.1,"","",0.1,"","","Thời hạn sử dụng vĩnh viễn"],["QI-004","BG-002","PROD-04","Dịch vụ đào tạo và cấu hình hệ thống","Buổi",4,5000000,0.1,"","",0.1,"","","Đào tạo trực tiếp tại văn phòng"],["QI-005","BG-003","PROD-05","Gói bảo trì máy chủ hàng tháng","Tháng",3,9333333,0,"","",0.08,"","","Hỗ trợ kỹ thuật 24/7 qua hotline"]];
  if (isDemo && demoData_QUOTE_ITEMS.length > 0) {
    sheet_QUOTE_ITEMS.getRange(2, 1, demoData_QUOTE_ITEMS.length, 14).setValues(demoData_QUOTE_ITEMS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_QUOTE_ITEMS.length > 0) {
    for (let r = 2; r <= demoData_QUOTE_ITEMS.length + 1; r++) {
      sheet_QUOTE_ITEMS.getRange(r, 9).setFormula('=G' + r + ' * (1 - H' + r + ')');
      sheet_QUOTE_ITEMS.getRange(r, 10).setFormula('=F' + r + ' * I' + r);
      sheet_QUOTE_ITEMS.getRange(r, 12).setFormula('=J' + r + ' * K' + r);
      sheet_QUOTE_ITEMS.getRange(r, 13).setFormula('=J' + r + ' + L' + r);
    }
  }
  sheet_QUOTE_ITEMS.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTE_ITEMS.getRange('H2:H1000').setNumberFormat('0.0%');
  sheet_QUOTE_ITEMS.getRange('I2:J1000').setNumberFormat('#,##0 "₫"');
  sheet_QUOTE_ITEMS.getRange('K2:K1000').setNumberFormat('0.0%');
  sheet_QUOTE_ITEMS.getRange('L2:M1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: CUSTOMERS
  // =========================================================================
  const sheet_CUSTOMERS = sheets['CUSTOMERS'];
  sheet_CUSTOMERS.clear();
  sheet_CUSTOMERS.setTabColor('#6A1B9A');
  sheet_CUSTOMERS.setFrozenRows(1);

  const headers_CUSTOMERS = ["Mã KH","Tên công ty / Khách hàng","Người đại diện","SĐT","Email","Địa chỉ","Mã số thuế","Nhóm khách hàng","Hạn mức tín dụng (VND)"];
  sheet_CUSTOMERS.getRange(1, 1, 1, 9).setValues([headers_CUSTOMERS])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_CUSTOMERS.setRowHeight(1, 32);
  sheet_CUSTOMERS.setColumnWidth(1, 100);
  sheet_CUSTOMERS.setColumnWidth(2, 260);
  sheet_CUSTOMERS.setColumnWidth(3, 160);
  sheet_CUSTOMERS.setColumnWidth(4, 120);
  sheet_CUSTOMERS.setColumnWidth(5, 180);
  sheet_CUSTOMERS.setColumnWidth(6, 260);
  sheet_CUSTOMERS.setColumnWidth(7, 120);
  sheet_CUSTOMERS.setColumnWidth(8, 130);
  sheet_CUSTOMERS.setColumnWidth(9, 160);

  const demoData_CUSTOMERS = [["CUST-01","Công ty Cổ phần Hạ Tầng Sao Mai","Nguyễn Văn Tuấn","0903123456","tuan.nguyen@saomai.vn","Tầng 5, Tòa nhà Landmark 81, TP.HCM","0301234567","DOANH NGHIỆP",200000000],["CUST-02","Tập đoàn Công Nghệ Viễn Đông","Trần Thị Thu","0918765432","thutt@viendong.com","123 Hoàng Quốc Việt, Cầu Giấy, Hà Nội","0109876543","VIP",500000000],["CUST-03","Công ty Xây Lắp Điện Đại Nam","Phạm Hoàng Nam","0988112233","nam.ph@dainamcorp.vn","45 Lê Duẩn, Quận 1, TP.HCM","0312348899","DOANH NGHIỆP",150000000],["CUST-04","Chuỗi Cửa Hàng Bách Hóa Xanh","Lê Hồng Ánh","0934567890","anh.lh@bachhoaxanh.com","78 Võ Thị Sáu, Phường 6, Quận 3, TP.HCM","0309988776","ĐẠI LÝ",300000000]];
  if (isDemo && demoData_CUSTOMERS.length > 0) {
    sheet_CUSTOMERS.getRange(2, 1, demoData_CUSTOMERS.length, 9).setValues(demoData_CUSTOMERS);
  }
  sheet_CUSTOMERS.getRange('I2:I1000').setNumberFormat('#,##0 "₫"');

  const rule_CUSTOMERS_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["VIP","ĐẠI LÝ","DOANH NGHIỆP","CÁ NHÂN"], true).build();
  sheet_CUSTOMERS.getRange('H2:H1000').setDataValidation(rule_CUSTOMERS_H2H1000);

  // =========================================================================
  // TAB: PRODUCTS
  // =========================================================================
  const sheet_PRODUCTS = sheets['PRODUCTS'];
  sheet_PRODUCTS.clear();
  sheet_PRODUCTS.setTabColor('#E65100');
  sheet_PRODUCTS.setFrozenRows(1);

  const headers_PRODUCTS = ["Mã SP/DV","Tên sản phẩm / Dịch vụ","Đơn vị tính","Đơn giá niêm yết (VND)","Giá vốn ước tính (VND)","Thuế suất mặc định (%)","Trạng thái"];
  sheet_PRODUCTS.getRange(1, 1, 1, 7).setValues([headers_PRODUCTS])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PRODUCTS.setRowHeight(1, 32);
  sheet_PRODUCTS.setColumnWidth(1, 110);
  sheet_PRODUCTS.setColumnWidth(2, 260);
  sheet_PRODUCTS.setColumnWidth(3, 90);
  sheet_PRODUCTS.setColumnWidth(4, 160);
  sheet_PRODUCTS.setColumnWidth(5, 160);
  sheet_PRODUCTS.setColumnWidth(6, 140);
  sheet_PRODUCTS.setColumnWidth(7, 110);

  const demoData_PRODUCTS = [["PROD-01","Thiết bị định tuyến Router Cisco C1111","Cái",10000000,7500000,0.08,"ACTIVE"],["PROD-02","Switch chia mạng 24 Port Gigabit PoE","Cái",25000000,19000000,0.08,"ACTIVE"],["PROD-03","Gói bản quyền phần mềm ERP Core (5 User)","Gói",60000000,20000000,0.1,"ACTIVE"],["PROD-04","Dịch vụ đào tạo và cấu hình hệ thống","Buổi",5000000,1500000,0.1,"ACTIVE"],["PROD-05","Gói bảo trì máy chủ hàng tháng","Tháng",10000000,3000000,0.08,"ACTIVE"]];
  if (isDemo && demoData_PRODUCTS.length > 0) {
    sheet_PRODUCTS.getRange(2, 1, demoData_PRODUCTS.length, 7).setValues(demoData_PRODUCTS);
  }
  sheet_PRODUCTS.getRange('D2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_PRODUCTS.getRange('F2:F1000').setNumberFormat('0.0%');

  const rule_PRODUCTS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","INACTIVE"], true).build();
  sheet_PRODUCTS.getRange('G2:G1000').setDataValidation(rule_PRODUCTS_G2G1000);

  // =========================================================================
  // TAB: TERMS
  // =========================================================================
  const sheet_TERMS = sheets['TERMS'];
  sheet_TERMS.clear();
  sheet_TERMS.setTabColor('#37474F');
  sheet_TERMS.setFrozenRows(1);

  const headers_TERMS = ["Mã điều khoản","Tiêu đề điều khoản","Nội dung chi tiết điều khoản thương mại"];
  sheet_TERMS.getRange(1, 1, 1, 3).setValues([headers_TERMS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TERMS.setRowHeight(1, 32);
  sheet_TERMS.setColumnWidth(1, 120);
  sheet_TERMS.setColumnWidth(2, 220);
  sheet_TERMS.setColumnWidth(3, 480);

  const demoData_TERMS = [["TERM-01","Điều kiện thanh toán","Tạm ứng 50% ngay sau khi ký hợp đồng/chấp nhận báo giá. 50% còn lại thanh toán trong vòng 7 ngày sau khi nghiệm thu bàn giao."],["TERM-02","Thời gian giao hàng & thi công","Giao hàng và thi công hoàn tất trong vòng 10 đến 15 ngày làm việc kể từ ngày nhận được tiền tạm ứng."],["TERM-03","Chính sách bảo hành & hỗ trợ","Thiết bị phần cứng bảo hành 24 tháng theo tiêu chuẩn nhà sản xuất. Phần mềm hỗ trợ kỹ thuật miễn phí 12 tháng đầu tiên."]];
  if (isDemo && demoData_TERMS.length > 0) {
    sheet_TERMS.getRange(2, 1, demoData_TERMS.length, 3).setValues(demoData_TERMS);
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
  
  const setRows = [["Tên đơn vị báo giá:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Mã số thuế:","0316889988"],["Địa chỉ trụ sở:","Tòa nhà Innovation Hub, 180 Nguyễn Thị Minh Khai, Quận 3, TP.HCM"],["Hotline / Email:","0901 888 999 | contact@minhtemplates.vn"],["Tài khoản ngân hàng:","Vietcombank - 0071001234567 - NGUYEN HOANG MINH"],["Người ký duyệt:","Nguyễn Hoàng Minh - Giám Đốc"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH BÁO GIÁ & HIỆU QUẢ CHÀO HÀNG (F19)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tổng giá trị báo giá • Phân tích tỷ lệ chốt Win Rate • Cảnh báo hiệu lực chào hàng')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIÁ TRỊ BÁO GIÁ ĐÃ GỬI
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIÁ TRỊ BÁO GIÁ ĐÃ GỬI')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "<>DRAFT")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('A6:B6').merge().setValue('Toàn bộ báo giá đã gửi khách hàng')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: DOANH SỐ ĐÃ CHỐT THÀNH CÔNG
  dashSheet.getRange('C4:D4').merge().setValue('DOANH SỐ ĐÃ CHỐT THÀNH CÔNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(QUOTES!$O$2:$O$1000, QUOTES!$P$2:$P$1000, "ACCEPTED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('C6:D6').merge().setValue('Báo giá khách đã duyệt (ACCEPTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: TỶ LỆ CHỐT ĐƠN (WIN RATE)
  dashSheet.getRange('E4:F4').merge().setValue('TỶ LỆ CHỐT ĐƠN (WIN RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=IF(COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED") > 0, COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") / (COUNTIF(QUOTES!$P$2:$P$1000, "ACCEPTED") + COUNTIF(QUOTES!$P$2:$P$1000, "REJECTED")), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('E6:F6').merge().setValue('ACCEPTED / (ACCEPTED + REJECTED)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI BÁO GIÁ THEO TRẠNG THÁI VÀ GIÁ TRỊ
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI BÁO GIÁ THEO TRẠNG THÁI VÀ GIÁ TRỊ')
    .setFontWeight('bold').setFontColor('#0D47A1').setBackground('#BBDEFB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Trạng thái","Số lượng","Tổng giá trị (VND)","Tỷ lệ","Đánh giá"]])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 0; i <= 4; i++) {
    const r = i + 10;
    dashSheet.getRange(r, 1).setFormula(['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i]);
    dashSheet.getRange(r, 2).setFormula('=COUNTIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '")');
    dashSheet.getRange(r, 3).setFormula('=SUMIF(QUOTES!$P$2:$P$1000, "' + ['DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED'][i] + '", QUOTES!$O$2:$O$1000)');
    dashSheet.getRange(r, 4).setFormula('=IF($C$5>0, C' + r + '/$C$5, 0)');
    dashSheet.getRange(r, 5).setFormula(['Bản nháp', 'Đang chào', 'Thành công', 'Thất bại', 'Quá hạn'][i]);
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('B10:B14').setNumberFormat('#,##0');
  dashSheet.getRange('C10:C14').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('D10:D14').setNumberFormat('0.0%');

  // Chart: Cơ Cấu Giá Trị Báo Giá Theo Trạng Thái
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('A9:C14'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Cơ Cấu Giá Trị Báo Giá Theo Trạng Thái')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

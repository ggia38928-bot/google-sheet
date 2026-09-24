/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F02 — Quản lý Dự án, Đội nhóm & KPI
 * Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F02_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF02Workbook(true);
}

function setupCleanTemplate() {
  initF02Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F02 BUSINESS')
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

function initF02Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","PROJECTS","TASKS","TIMESHEETS","KPI_PLANS","MEMBERS","AUDIT_LOG","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — QUẢN LÝ DỰ ÁN, ĐỘI NHÓM & KPI (F02)')
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
  // TAB: PROJECTS
  // =========================================================================
  const sheet_PROJECTS = sheets['PROJECTS'];
  sheet_PROJECTS.clear();
  sheet_PROJECTS.setTabColor('#1A237E');
  sheet_PROJECTS.setFrozenRows(1);

  const headers_PROJECTS = ["Mã dự án","Tên dự án","Trưởng dự án (PM)","Ngày bắt đầu","Hạn hoàn thành","Ngân sách (VND)","Chi phí thực tế (VND)","Tiến độ trọng số (%)","Trạng thái","Ghi chú mục tiêu"];
  sheet_PROJECTS.getRange(1, 1, 1, 10).setValues([headers_PROJECTS])
    .setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PROJECTS.setRowHeight(1, 32);
  sheet_PROJECTS.setColumnWidth(1, 100);
  sheet_PROJECTS.setColumnWidth(2, 240);
  sheet_PROJECTS.setColumnWidth(3, 160);
  sheet_PROJECTS.setColumnWidth(4, 110);
  sheet_PROJECTS.setColumnWidth(5, 110);
  sheet_PROJECTS.setColumnWidth(6, 160);
  sheet_PROJECTS.setColumnWidth(7, 160);
  sheet_PROJECTS.setColumnWidth(8, 140);
  sheet_PROJECTS.setColumnWidth(9, 140);
  sheet_PROJECTS.setColumnWidth(10, 220);

  const demoData_PROJECTS = [["PRJ-01","Nâng cấp Nền tảng E-Commerce v2.0","nguyen.minh@company.vn","2026-08-01","2026-10-31",150000000,85000000,"","ĐANG THỰC HIỆN","Tối ưu tốc độ tải trang và tích hợp cổng VietQR"],["PRJ-02","Triển khai ERP Mini Doanh Nghiệp","tran.thao@company.vn","2026-09-01","2026-11-30",200000000,45000000,"","ĐANG THỰC HIỆN","Số hóa toàn bộ quy trình Bán hàng - Mua hàng - Kho"],["PRJ-03","Chiến dịch Quảng bá Mùa Thu 2026","le.long@company.vn","2026-08-15","2026-09-15",50000000,48000000,"","HOÀN THÀNH","Đạt mục tiêu thu hút 10.000 khách hàng tiềm năng"]];
  if (isDemo && demoData_PROJECTS.length > 0) {
    sheet_PROJECTS.getRange(2, 1, demoData_PROJECTS.length, 10).setValues(demoData_PROJECTS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_PROJECTS.length > 0) {
    for (let r = 2; r <= demoData_PROJECTS.length + 1; r++) {
      sheet_PROJECTS.getRange(r, 8).setFormula('=IF(SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + ') > 0, SUMPRODUCT((TASKS!$B$2:$B$1000=A' + r + ') * TASKS!$G$2:$G$1000 * TASKS!$H$2:$H$1000) / SUMIFS(TASKS!$G$2:$G$1000, TASKS!$B$2:$B$1000, A' + r + '), 0)');
    }
  }
  sheet_PROJECTS.getRange('D2:E100').setNumberFormat('yyyy-mm-dd');
  sheet_PROJECTS.getRange('F2:G100').setNumberFormat('#,##0 "₫"');
  sheet_PROJECTS.getRange('H2:H100').setNumberFormat('0.0%');

  const rule_PROJECTS_I2I100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CHƯA BẮT ĐẦU","ĐANG THỰC HIỆN","TẠM DỪNG","HOÀN THÀNH","HỦY"], true).build();
  sheet_PROJECTS.getRange('I2:I100').setDataValidation(rule_PROJECTS_I2I100);

  // =========================================================================
  // TAB: TASKS
  // =========================================================================
  const sheet_TASKS = sheets['TASKS'];
  sheet_TASKS.clear();
  sheet_TASKS.setTabColor('#0D47A1');
  sheet_TASKS.setFrozenRows(1);

  const headers_TASKS = ["Mã việc","Mã dự án","Tiêu đề đầu việc","Người phụ trách","Ngày bắt đầu","Hạn hoàn thành","Trọng số (1-5)","Tiến độ cá nhân (%)","Trạng thái","Mức ưu tiên","Ngày hoàn thành thực tế","Đánh giá hạn"];
  sheet_TASKS.getRange(1, 1, 1, 12).setValues([headers_TASKS])
    .setFontWeight('bold').setBackground('#0D47A1').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TASKS.setRowHeight(1, 32);
  sheet_TASKS.setColumnWidth(1, 100);
  sheet_TASKS.setColumnWidth(2, 100);
  sheet_TASKS.setColumnWidth(3, 260);
  sheet_TASKS.setColumnWidth(4, 180);
  sheet_TASKS.setColumnWidth(5, 105);
  sheet_TASKS.setColumnWidth(6, 105);
  sheet_TASKS.setColumnWidth(7, 110);
  sheet_TASKS.setColumnWidth(8, 140);
  sheet_TASKS.setColumnWidth(9, 130);
  sheet_TASKS.setColumnWidth(10, 110);
  sheet_TASKS.setColumnWidth(11, 120);
  sheet_TASKS.setColumnWidth(12, 120);

  const demoData_TASKS = [["TSK-001","PRJ-01","Thiết kế kiến trúc cơ sở dữ liệu Postgres","nguyen.minh@company.vn","2026-08-01","2026-08-15",3,1,"DONE","CAO","2026-08-14",""],["TSK-002","PRJ-01","Phát triển API Module Giỏ hàng & Thanh toán","tran.thao@company.vn","2026-08-16","2026-09-15",4,0.75,"IN_PROGRESS","CAO","",""],["TSK-003","PRJ-01","Tích hợp thanh toán SePay / VietQR tự động","pham.nam@company.vn","2026-09-01","2026-09-20",3,0.4,"IN_PROGRESS","CAO","",""],["TSK-004","PRJ-02","Khảo sát quy trình nghiệp vụ kế toán kho","tran.thao@company.vn","2026-09-01","2026-09-10",2,1,"DONE","TRUNG BÌNH","2026-09-09",""],["TSK-005","PRJ-02","Viết tài liệu đặc tả yêu cầu người dùng (PRD)","nguyen.minh@company.vn","2026-09-11","2026-09-25",3,0.5,"IN_PROGRESS","TRUNG BÌNH","",""]];
  if (isDemo && demoData_TASKS.length > 0) {
    sheet_TASKS.getRange(2, 1, demoData_TASKS.length, 12).setValues(demoData_TASKS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_TASKS.length > 0) {
    for (let r = 2; r <= demoData_TASKS.length + 1; r++) {
      sheet_TASKS.getRange(r, 12).setFormula('=IF(I' + r + '="DONE", IF(K' + r + '<=F' + r + ', "ĐÚNG HẠN", "TRỄ HẠN"), IF(TODAY()>F' + r + ', "QUÁ HẠN", "ĐANG CHẠY"))');
    }
  }
  sheet_TASKS.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_TASKS.getRange('H2:H1000').setNumberFormat('0.0%');
  sheet_TASKS.getRange('K2:K1000').setNumberFormat('yyyy-mm-dd');

  const rule_TASKS_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["1","2","3","4","5"], true).build();
  sheet_TASKS.getRange('G2:G1000').setDataValidation(rule_TASKS_G2G1000);

  const rule_TASKS_I2I1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","IN_PROGRESS","IN_REVIEW","DONE","CANCELLED"], true).build();
  sheet_TASKS.getRange('I2:I1000').setDataValidation(rule_TASKS_I2I1000);

  const rule_TASKS_J2J1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CAO","TRUNG BÌNH","THẤP"], true).build();
  sheet_TASKS.getRange('J2:J1000').setDataValidation(rule_TASKS_J2J1000);

  // =========================================================================
  // TAB: TIMESHEETS
  // =========================================================================
  const sheet_TIMESHEETS = sheets['TIMESHEETS'];
  sheet_TIMESHEETS.clear();
  sheet_TIMESHEETS.setTabColor('#004D40');
  sheet_TIMESHEETS.setFrozenRows(1);

  const headers_TIMESHEETS = ["Mã log","Mã việc","Nhân sự","Ngày làm việc","Số giờ làm (h)","Nội dung công việc chi tiết"];
  sheet_TIMESHEETS.getRange(1, 1, 1, 6).setValues([headers_TIMESHEETS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TIMESHEETS.setRowHeight(1, 32);
  sheet_TIMESHEETS.setColumnWidth(1, 100);
  sheet_TIMESHEETS.setColumnWidth(2, 100);
  sheet_TIMESHEETS.setColumnWidth(3, 180);
  sheet_TIMESHEETS.setColumnWidth(4, 110);
  sheet_TIMESHEETS.setColumnWidth(5, 120);
  sheet_TIMESHEETS.setColumnWidth(6, 320);

  const demoData_TIMESHEETS = [["LOG-01","TSK-001","nguyen.minh@company.vn","2026-08-10",6.5,"Thiết kế sơ đồ ERD các bảng đơn hàng và kho"],["LOG-02","TSK-002","tran.thao@company.vn","2026-09-02",8,"Viết controller xử lý webhook SePay"],["LOG-03","TSK-003","pham.nam@company.vn","2026-09-03",7,"Tạo mã QR động theo chuẩn NAPAS 247"],["LOG-04","TSK-004","tran.thao@company.vn","2026-09-05",5,"Phỏng vấn trưởng bộ phận kho vận"]];
  if (isDemo && demoData_TIMESHEETS.length > 0) {
    sheet_TIMESHEETS.getRange(2, 1, demoData_TIMESHEETS.length, 6).setValues(demoData_TIMESHEETS);
  }
  sheet_TIMESHEETS.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_TIMESHEETS.getRange('E2:E1000').setNumberFormat('0.0 "giờ"');

  // =========================================================================
  // TAB: KPI_PLANS
  // =========================================================================
  const sheet_KPI_PLANS = sheets['KPI_PLANS'];
  sheet_KPI_PLANS.clear();
  sheet_KPI_PLANS.setTabColor('#4A148C');
  sheet_KPI_PLANS.setFrozenRows(1);

  const headers_KPI_PLANS = ["Mã chỉ tiêu","Nhân viên","Kỳ đánh giá","Tiêu chí KPI","ĐVT","Mục tiêu (Target)","Trọng số (%)","Chiều đo lường","Thực tế đạt (Actual)","Tỷ lệ hoàn thành (%)","Điểm KPI quy đổi"];
  sheet_KPI_PLANS.getRange(1, 1, 1, 11).setValues([headers_KPI_PLANS])
    .setFontWeight('bold').setBackground('#4A148C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_KPI_PLANS.setRowHeight(1, 32);
  sheet_KPI_PLANS.setColumnWidth(1, 100);
  sheet_KPI_PLANS.setColumnWidth(2, 180);
  sheet_KPI_PLANS.setColumnWidth(3, 110);
  sheet_KPI_PLANS.setColumnWidth(4, 220);
  sheet_KPI_PLANS.setColumnWidth(5, 80);
  sheet_KPI_PLANS.setColumnWidth(6, 130);
  sheet_KPI_PLANS.setColumnWidth(7, 110);
  sheet_KPI_PLANS.setColumnWidth(8, 150);
  sheet_KPI_PLANS.setColumnWidth(9, 140);
  sheet_KPI_PLANS.setColumnWidth(10, 140);
  sheet_KPI_PLANS.setColumnWidth(11, 130);

  const demoData_KPI_PLANS = [["KPI-01","nguyen.minh@company.vn","Quý 3/2026","Tỷ lệ hoàn thành task đúng hạn","%",0.9,0.4,"CÀNG CAO CÀNG TỐT",0.95,"",""],["KPI-02","nguyen.minh@company.vn","Quý 3/2026","Số lượng bài viết kỹ thuật/tài liệu","Bài",4,0.2,"CÀNG CAO CÀNG TỐT",5,"",""],["KPI-03","tran.thao@company.vn","Quý 3/2026","Số lỗi phát sinh sau release (Bug count)","Bug",2,0.3,"CÀNG THẤP CÀNG TỐT",1,"",""],["KPI-04","tran.thao@company.vn","Quý 3/2026","Số giờ làm việc hữu ích log trên Timesheet","Giờ",160,0.4,"CÀNG CAO CÀNG TỐT",168,"",""]];
  if (isDemo && demoData_KPI_PLANS.length > 0) {
    sheet_KPI_PLANS.getRange(2, 1, demoData_KPI_PLANS.length, 11).setValues(demoData_KPI_PLANS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_KPI_PLANS.length > 0) {
    for (let r = 2; r <= demoData_KPI_PLANS.length + 1; r++) {
      sheet_KPI_PLANS.getRange(r, 10).setFormula('=IF(H' + r + '="CÀNG CAO CÀNG TỐT", I' + r + ' / F' + r + ', IF(I' + r + '>0, F' + r + ' / I' + r + ', 1))');
      sheet_KPI_PLANS.getRange(r, 11).setFormula('=J' + r + ' * G' + r + ' * 100');
    }
  }
  sheet_KPI_PLANS.getRange('G2:G100').setNumberFormat('0.0%');
  sheet_KPI_PLANS.getRange('J2:J100').setNumberFormat('0.0%');
  sheet_KPI_PLANS.getRange('K2:K100').setNumberFormat('0.00');

  const rule_KPI_PLANS_H2H100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CÀNG CAO CÀNG TỐT","CÀNG THẤP CÀNG TỐT"], true).build();
  sheet_KPI_PLANS.getRange('H2:H100').setDataValidation(rule_KPI_PLANS_H2H100);

  // =========================================================================
  // TAB: MEMBERS
  // =========================================================================
  const sheet_MEMBERS = sheets['MEMBERS'];
  sheet_MEMBERS.clear();
  sheet_MEMBERS.setTabColor('#37474F');
  sheet_MEMBERS.setFrozenRows(1);

  const headers_MEMBERS = ["Mã nhân sự","Họ và tên","Email","Vai trò / Phòng ban","Số việc đang giữ","Điểm KPI trung bình"];
  sheet_MEMBERS.getRange(1, 1, 1, 6).setValues([headers_MEMBERS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_MEMBERS.setRowHeight(1, 32);
  sheet_MEMBERS.setColumnWidth(1, 100);
  sheet_MEMBERS.setColumnWidth(2, 200);
  sheet_MEMBERS.setColumnWidth(3, 200);
  sheet_MEMBERS.setColumnWidth(4, 160);
  sheet_MEMBERS.setColumnWidth(5, 130);
  sheet_MEMBERS.setColumnWidth(6, 150);

  const demoData_MEMBERS = [["MEM-01","Nguyễn Hoàng Minh","nguyen.minh@company.vn","Tech Lead / PM","",""],["MEM-02","Trần Thị Thu Thảo","tran.thao@company.vn","Senior Developer","",""],["MEM-03","Phạm Hoàng Nam","pham.nam@company.vn","Backend Engineer","",""]];
  if (isDemo && demoData_MEMBERS.length > 0) {
    sheet_MEMBERS.getRange(2, 1, demoData_MEMBERS.length, 6).setValues(demoData_MEMBERS);
  }

  // Áp dụng công thức dòng
  if (isDemo && demoData_MEMBERS.length > 0) {
    for (let r = 2; r <= demoData_MEMBERS.length + 1; r++) {
      sheet_MEMBERS.getRange(r, 5).setFormula('=COUNTIFS(TASKS!$D$2:$D$1000, C' + r + ', TASKS!$I$2:$I$1000, "<>DONE", TASKS!$I$2:$I$1000, "<>CANCELLED")');
      sheet_MEMBERS.getRange(r, 6).setFormula('=IF(COUNTIF(KPI_PLANS!$B$2:$B$100, C' + r + ') > 0, AVERAGEIF(KPI_PLANS!$B$2:$B$100, C' + r + ', KPI_PLANS!$K$2:$K$100), 0)');
    }
  }
  sheet_MEMBERS.getRange('F2:F100').setNumberFormat('0.0');

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
  
  const setRows = [["Tên tổ chức / Đội nhóm:","MINH PRODUCT ENGINEERING TEAM"],["Kỳ theo dõi dự án:","Quý 3 & 4 / 2026"],["Giờ làm việc tiêu chuẩn / ngày:",8],["Trưởng ban thẩm định KPI:","Nguyễn Hoàng Minh - Giám Đốc Kỹ Thuật"],["Quy ước trọng số công việc:","1 (Nhẹ) - 3 (Tiêu chuẩn) - 5 (Rất quan trọng)"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH DỰ ÁN ĐỘI NHÓM & HIỆU SUẤT KPI (F02)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tiến độ trọng số thời gian thực • Cảnh báo trễ hạn • Đánh giá hiệu suất nhân sự')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG DỰ ÁN ĐANG HOẠT ĐỘNG
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG DỰ ÁN ĐANG HOẠT ĐỘNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1A237E').setHorizontalAlignment('center').setBackground('#E8EAF6');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTIF(PROJECTS!$I$2:$I$100, "ĐANG THỰC HIỆN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#283593').setHorizontalAlignment('center').setBackground('#E8EAF6')
    .setNumberFormat('#,##0 " dự án"');
  dashSheet.getRange('A6:B6').merge().setValue('Dự án đang trong giai đoạn triển khai')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1A237E').setHorizontalAlignment('center').setBackground('#E8EAF6');

  // Card 2: TIẾN ĐỘ TRỌNG SỐ TRUNG BÌNH
  dashSheet.getRange('C4:D4').merge().setValue('TIẾN ĐỘ TRỌNG SỐ TRUNG BÌNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=AVERAGE(PROJECTS!$H$2:$H$100)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('0.0%');
  dashSheet.getRange('C6:D6').merge().setValue('Tiến độ trung bình toàn bộ dự án')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: ĐẦU VIỆC ĐANG BỊ QUÁ HẠN
  dashSheet.getRange('E4:F4').merge().setValue('ĐẦU VIỆC ĐANG BỊ QUÁ HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIF(TASKS!$L$2:$L$1000, "QUÁ HẠN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#C62828').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 " việc"');
  dashSheet.getRange('E6:F6').merge().setValue('Cần can thiệp gấp để đảm bảo timeline')
    .setFontSize(8).setFontStyle('italic').setFontColor('#B71C1C').setHorizontalAlignment('center').setBackground('#FFEBEE');

  // Card 4: TỶ LỆ HOÀN THÀNH ĐÚNG HẠN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ HOÀN THÀNH ĐÚNG HẠN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('G5:H5').merge().setValue('=IF(COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN") > 0, COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") / (COUNTIF(TASKS!$L$2:$L$1000, "ĐÚNG HẠN") + COUNTIF(TASKS!$L$2:$L$1000, "TRỄ HẠN")), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');
  dashSheet.getRange('G6:H6').merge().setValue('ĐÚNG HẠN / (ĐÚNG HẠN + TRỄ HẠN)')
    .setFontSize(8).setFontStyle('italic').setFontColor('#F57F17').setHorizontalAlignment('center').setBackground('#FFF8E1');

  // Card 5: TỔNG SỐ GIỜ LÀM ĐÃ GHI NHẬN
  dashSheet.getRange('I4:J4').merge().setValue('TỔNG SỐ GIỜ LÀM ĐÃ GHI NHẬN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('I5:J5').merge().setValue('=SUM(TIMESHEETS!$E$2:$E$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('#,##0.0 " giờ"');
  dashSheet.getRange('I6:J6').merge().setValue('Tổng thời gian lao động đã log')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI TIẾN ĐỘ TRỌNG SỐ VÀ NGÂN SÁCH DỰ ÁN
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI TIẾN ĐỘ TRỌNG SỐ VÀ NGÂN SÁCH DỰ ÁN')
    .setFontWeight('bold').setFontColor('#1A237E').setBackground('#C5CAE9');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã dự án","Tên dự án","Ngân sách (VND)","Chi phí (VND)","Tiến độ"]])
    .setFontWeight('bold').setBackground('#3949AB').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 4; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(PROJECTS!A' + i + '<>"","PROJECTS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(PROJECTS!B' + i + '<>"","PROJECTS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(PROJECTS!F' + i + '<>"","PROJECTS!F' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(PROJECTS!G' + i + '<>"","PROJECTS!G' + i + '","")');
    dashSheet.getRange(r, 5).setFormula('=IF(PROJECTS!H' + i + '<>"","PROJECTS!H' + i + '","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('C10:D13').setNumberFormat('#,##0 "₫"');
  dashSheet.getRange('E10:E13').setNumberFormat('0.0%');

  // Chart: Tiến Độ Các Dự Án Hiện Tại
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.BAR)
      .addRange(dashSheet.getRange('A9:E12'))
      .setPosition(8, 7, 0, 0)
      .setOption('title', 'Tiến Độ Các Dự Án Hiện Tại')
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

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F21 — Form nhập liệu & Phân quyền cấu hình
 * Phiên bản: 1.0.0 | Gói: BẢN DEMO MIỄN PHÍ
 * Tự động sinh bởi Core Generator Engine
 */

function install_F21_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF21Workbook(true);
}

function setupCleanTemplate() {
  initF21Workbook(false);
}

function initF21Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","TABLE_DEFINITIONS","COLUMN_DEFINITIONS","FORM_DEFINITIONS","PERMISSIONS","VIEW_DEFINITIONS","FORM_RECORDS","LOCKED_ROWS","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — FORM NHẬP LIỆU & PHÂN QUYỀN CẤU HÌNH (F21)')
    .setFontSize(15).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  startSheet.setRowHeight(1, 42);

  const startData = [
    ['Phiên bản: 1.0.0 | Gói: BẢN DEMO MIỄN PHÍ | Thương hiệu: Minh Templates', '', '', '', '', ''],
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
  // TAB: TABLE_DEFINITIONS
  // =========================================================================
  const sheet_TABLE_DEFINITIONS = sheets['TABLE_DEFINITIONS'];
  sheet_TABLE_DEFINITIONS.clear();
  sheet_TABLE_DEFINITIONS.setTabColor('#004D40');
  sheet_TABLE_DEFINITIONS.setFrozenRows(1);

  const headers_TABLE_DEFINITIONS = ["Mã bảng (TableID)","Tên bảng hiển thị","Mô tả nghiệp vụ","Nhóm danh mục","Thứ tự hiển thị","Trạng thái"];
  sheet_TABLE_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_TABLE_DEFINITIONS])
    .setFontWeight('bold').setBackground('#004D40').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TABLE_DEFINITIONS.setRowHeight(1, 32);
  sheet_TABLE_DEFINITIONS.setColumnWidth(1, 150);
  sheet_TABLE_DEFINITIONS.setColumnWidth(2, 220);
  sheet_TABLE_DEFINITIONS.setColumnWidth(3, 320);
  sheet_TABLE_DEFINITIONS.setColumnWidth(4, 160);
  sheet_TABLE_DEFINITIONS.setColumnWidth(5, 120);
  sheet_TABLE_DEFINITIONS.setColumnWidth(6, 120);

  const demoData_TABLE_DEFINITIONS = [["TBL-01","Phiếu Đăng Ký Khách Hàng","Thu thập thông tin khách hàng tiềm năng tại quầy/sự kiện","Bán hàng",1,"ACTIVE"],["TBL-02","Báo Cáo Sự Cố Thiết Bị","Ghi nhận hư hỏng và yêu cầu bảo trì tài sản văn phòng","Kỹ thuật",2,"ACTIVE"],["TBL-03","Đề Xuất Mua Sắm Vật Tư","Biểu mẫu phê duyệt mua vật tư, trang thiết bị nội bộ","Hành chính",3,"ACTIVE"],["TBL-04","Khảo Sát Hài Lòng Khách Hàng","Đánh giá chất lượng dịch vụ sau khi bàn giao sản phẩm","CSKH",4,"ACTIVE"]];
  if (isDemo && demoData_TABLE_DEFINITIONS.length > 0) {
    sheet_TABLE_DEFINITIONS.getRange(2, 1, demoData_TABLE_DEFINITIONS.length, 6).setValues(demoData_TABLE_DEFINITIONS);
  }

  const rule_TABLE_DEFINITIONS_F2F100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","DRAFT","ARCHIVED"], true).build();
  sheet_TABLE_DEFINITIONS.getRange('F2:F100').setDataValidation(rule_TABLE_DEFINITIONS_F2F100);

  // =========================================================================
  // TAB: COLUMN_DEFINITIONS
  // =========================================================================
  const sheet_COLUMN_DEFINITIONS = sheets['COLUMN_DEFINITIONS'];
  sheet_COLUMN_DEFINITIONS.clear();
  sheet_COLUMN_DEFINITIONS.setTabColor('#00695C');
  sheet_COLUMN_DEFINITIONS.setFrozenRows(1);

  const headers_COLUMN_DEFINITIONS = ["Mã cột (ColumnID)","Mã bảng (TableID)","Tên cột","Kiểu dữ liệu (Type)","Bắt buộc (Required)","Quy tắc xác thực (ValidationSpec)","Bảng tham chiếu (RefTable)","Cột cha phụ thuộc (ParentCol)"];
  sheet_COLUMN_DEFINITIONS.getRange(1, 1, 1, 8).setValues([headers_COLUMN_DEFINITIONS])
    .setFontWeight('bold').setBackground('#00695C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_COLUMN_DEFINITIONS.setRowHeight(1, 32);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(1, 150);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(2, 140);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(3, 200);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(4, 150);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(5, 130);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(6, 260);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(7, 180);
  sheet_COLUMN_DEFINITIONS.setColumnWidth(8, 180);

  const demoData_COLUMN_DEFINITIONS = [["COL-01","TBL-01","Họ và tên khách hàng","TEXT","TRUE","LEN(val) >= 2","",""],["COL-02","TBL-01","Số điện thoại","TEXT","TRUE","REGEXMATCH(val, \"^0[0-9]{9}$\")","",""],["COL-03","TBL-01","Email liên hệ","EMAIL","FALSE","IS_VALID_EMAIL(val)","",""],["COL-04","TBL-01","Tỉnh / Thành phố","ENUM","TRUE","LIST(\"Hà Nội\", \"TP.HCM\", \"Đà Nẵng\")","",""],["COL-05","TBL-02","Mã tài sản thiết bị","REF","TRUE","","ASSETS",""],["COL-06","TBL-02","Mô tả chi tiết sự cố","TEXT","TRUE","LEN(val) >= 10","",""],["COL-07","TBL-02","Mức độ nghiêm trọng","ENUM","TRUE","LIST(\"THẤP\", \"TRUNG BÌNH\", \"KHẨN CẤP\")","",""],["COL-08","TBL-03","Tên vật tư cần mua","TEXT","TRUE","","",""],["COL-09","TBL-03","Số lượng dự kiến","NUMBER","TRUE","val > 0","",""],["COL-10","TBL-03","Đơn giá ước tính (VND)","MONEY","TRUE","val >= 0","",""]];
  if (isDemo && demoData_COLUMN_DEFINITIONS.length > 0) {
    sheet_COLUMN_DEFINITIONS.getRange(2, 1, demoData_COLUMN_DEFINITIONS.length, 8).setValues(demoData_COLUMN_DEFINITIONS);
  }

  const rule_COLUMN_DEFINITIONS_D2D500 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TEXT","NUMBER","MONEY","DATE","DATETIME","BOOLEAN","ENUM","REF","EMAIL","FILE"], true).build();
  sheet_COLUMN_DEFINITIONS.getRange('D2:D500').setDataValidation(rule_COLUMN_DEFINITIONS_D2D500);

  const rule_COLUMN_DEFINITIONS_E2E500 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TRUE","FALSE"], true).build();
  sheet_COLUMN_DEFINITIONS.getRange('E2:E500').setDataValidation(rule_COLUMN_DEFINITIONS_E2E500);

  // =========================================================================
  // TAB: FORM_DEFINITIONS
  // =========================================================================
  const sheet_FORM_DEFINITIONS = sheets['FORM_DEFINITIONS'];
  sheet_FORM_DEFINITIONS.clear();
  sheet_FORM_DEFINITIONS.setTabColor('#00897B');
  sheet_FORM_DEFINITIONS.setFrozenRows(1);

  const headers_FORM_DEFINITIONS = ["Mã biểu mẫu (FormID)","Mã bảng (TableID)","Tiêu đề biểu mẫu","Quy cách bố cục (LayoutSpec)","Số cột giao diện","Trạng thái"];
  sheet_FORM_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_FORM_DEFINITIONS])
    .setFontWeight('bold').setBackground('#00897B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FORM_DEFINITIONS.setRowHeight(1, 32);
  sheet_FORM_DEFINITIONS.setColumnWidth(1, 160);
  sheet_FORM_DEFINITIONS.setColumnWidth(2, 140);
  sheet_FORM_DEFINITIONS.setColumnWidth(3, 260);
  sheet_FORM_DEFINITIONS.setColumnWidth(4, 240);
  sheet_FORM_DEFINITIONS.setColumnWidth(5, 130);
  sheet_FORM_DEFINITIONS.setColumnWidth(6, 120);

  const demoData_FORM_DEFINITIONS = [["FRM-01","TBL-01","Form Thu Thập Khách Hàng Tiềm Năng","SINGLE_PAGE_GRID",2,"PUBLISHED"],["FRM-02","TBL-02","Phiếu Báo Hỏng & Yêu Cầu Sửa Chữa","STEP_WIZARD",1,"PUBLISHED"],["FRM-03","TBL-03","Đề Xuất Mua Vật Tư Văn Phòng","COMPACT_FORM",2,"PUBLISHED"]];
  if (isDemo && demoData_FORM_DEFINITIONS.length > 0) {
    sheet_FORM_DEFINITIONS.getRange(2, 1, demoData_FORM_DEFINITIONS.length, 6).setValues(demoData_FORM_DEFINITIONS);
  }

  const rule_FORM_DEFINITIONS_F2F100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PUBLISHED","DRAFT","CLOSED"], true).build();
  sheet_FORM_DEFINITIONS.getRange('F2:F100').setDataValidation(rule_FORM_DEFINITIONS_F2F100);

  // =========================================================================
  // TAB: PERMISSIONS
  // =========================================================================
  const sheet_PERMISSIONS = sheets['PERMISSIONS'];
  sheet_PERMISSIONS.clear();
  sheet_PERMISSIONS.setTabColor('#00796B');
  sheet_PERMISSIONS.setFrozenRows(1);

  const headers_PERMISSIONS = ["Mã quyền","Email người dùng (UserEmail)","Mã bảng (TableID)","Quyền thao tác (Operation)","Phạm vi (Scope)","Trạng thái"];
  sheet_PERMISSIONS.getRange(1, 1, 1, 6).setValues([headers_PERMISSIONS])
    .setFontWeight('bold').setBackground('#00796B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_PERMISSIONS.setRowHeight(1, 32);
  sheet_PERMISSIONS.setColumnWidth(1, 110);
  sheet_PERMISSIONS.setColumnWidth(2, 220);
  sheet_PERMISSIONS.setColumnWidth(3, 140);
  sheet_PERMISSIONS.setColumnWidth(4, 160);
  sheet_PERMISSIONS.setColumnWidth(5, 140);
  sheet_PERMISSIONS.setColumnWidth(6, 110);

  const demoData_PERMISSIONS = [["PRM-01","admin@company.vn","TBL-01","ADMIN","ALL","ACTIVE"],["PRM-02","sales@company.vn","TBL-01","CREATE","OWNER_ONLY","ACTIVE"],["PRM-03","sales@company.vn","TBL-01","READ","DEPARTMENT","ACTIVE"],["PRM-04","technician@company.vn","TBL-02","UPDATE","ALL","ACTIVE"],["PRM-05","staff@company.vn","TBL-03","CREATE","OWNER_ONLY","ACTIVE"]];
  if (isDemo && demoData_PERMISSIONS.length > 0) {
    sheet_PERMISSIONS.getRange(2, 1, demoData_PERMISSIONS.length, 6).setValues(demoData_PERMISSIONS);
  }

  const rule_PERMISSIONS_D2D200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["CREATE","READ","UPDATE","DELETE","ADMIN"], true).build();
  sheet_PERMISSIONS.getRange('D2:D200').setDataValidation(rule_PERMISSIONS_D2D200);

  const rule_PERMISSIONS_E2E200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ALL","OWNER_ONLY","DEPARTMENT"], true).build();
  sheet_PERMISSIONS.getRange('E2:E200').setDataValidation(rule_PERMISSIONS_E2E200);

  const rule_PERMISSIONS_F2F200 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","REVOKED"], true).build();
  sheet_PERMISSIONS.getRange('F2:F200').setDataValidation(rule_PERMISSIONS_F2F200);

  // =========================================================================
  // TAB: VIEW_DEFINITIONS
  // =========================================================================
  const sheet_VIEW_DEFINITIONS = sheets['VIEW_DEFINITIONS'];
  sheet_VIEW_DEFINITIONS.clear();
  sheet_VIEW_DEFINITIONS.setTabColor('#26A69A');
  sheet_VIEW_DEFINITIONS.setFrozenRows(1);

  const headers_VIEW_DEFINITIONS = ["Mã View","Mã bảng (TableID)","Tên chế độ xem","Kiểu hiển thị (Type)","Bộ lọc điều kiện (FilterSpec)","Quy tắc sắp xếp (SortSpec)"];
  sheet_VIEW_DEFINITIONS.getRange(1, 1, 1, 6).setValues([headers_VIEW_DEFINITIONS])
    .setFontWeight('bold').setBackground('#26A69A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_VIEW_DEFINITIONS.setRowHeight(1, 32);
  sheet_VIEW_DEFINITIONS.setColumnWidth(1, 110);
  sheet_VIEW_DEFINITIONS.setColumnWidth(2, 140);
  sheet_VIEW_DEFINITIONS.setColumnWidth(3, 220);
  sheet_VIEW_DEFINITIONS.setColumnWidth(4, 140);
  sheet_VIEW_DEFINITIONS.setColumnWidth(5, 260);
  sheet_VIEW_DEFINITIONS.setColumnWidth(6, 200);

  const demoData_VIEW_DEFINITIONS = [["VW-01","TBL-01","Danh sách khách theo Tỉnh thành","TABLE","Status=\"ACTIVE\"","CreatedAt DESC"],["VW-02","TBL-02","Kanban xử lý sự cố thiết bị","KANBAN","Status<>\"RESOLVED\"","Severity DESC"],["VW-03","TBL-03","Đề xuất chờ duyệt mua sắm","TABLE","Status=\"PENDING_APPROVAL\"","SubmissionDate ASC"]];
  if (isDemo && demoData_VIEW_DEFINITIONS.length > 0) {
    sheet_VIEW_DEFINITIONS.getRange(2, 1, demoData_VIEW_DEFINITIONS.length, 6).setValues(demoData_VIEW_DEFINITIONS);
  }

  const rule_VIEW_DEFINITIONS_D2D100 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TABLE","KANBAN","CALENDAR","CARD_DECK"], true).build();
  sheet_VIEW_DEFINITIONS.getRange('D2:D100').setDataValidation(rule_VIEW_DEFINITIONS_D2D100);

  // =========================================================================
  // TAB: FORM_RECORDS
  // =========================================================================
  const sheet_FORM_RECORDS = sheets['FORM_RECORDS'];
  sheet_FORM_RECORDS.clear();
  sheet_FORM_RECORDS.setTabColor('#4DB6AC');
  sheet_FORM_RECORDS.setFrozenRows(1);

  const headers_FORM_RECORDS = ["Mã bản ghi (RecordID)","Mã bảng (TableID)","Dữ liệu bản ghi (Payload)","Người gửi (CreatedBy)","Thời gian tạo","Trạng thái duyệt"];
  sheet_FORM_RECORDS.getRange(1, 1, 1, 6).setValues([headers_FORM_RECORDS])
    .setFontWeight('bold').setBackground('#4DB6AC').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_FORM_RECORDS.setRowHeight(1, 32);
  sheet_FORM_RECORDS.setColumnWidth(1, 150);
  sheet_FORM_RECORDS.setColumnWidth(2, 130);
  sheet_FORM_RECORDS.setColumnWidth(3, 360);
  sheet_FORM_RECORDS.setColumnWidth(4, 200);
  sheet_FORM_RECORDS.setColumnWidth(5, 150);
  sheet_FORM_RECORDS.setColumnWidth(6, 150);

  const demoData_FORM_RECORDS = [["REC-001","TBL-01","{\"name\": \"Trần Văn Bình\", \"phone\": \"0912345678\", \"city\": \"TP.HCM\"}","sales01@company.vn","2026-09-10 08:30","APPROVED"],["REC-002","TBL-01","{\"name\": \"Lê Thị Mai\", \"phone\": \"0988776655\", \"city\": \"Hà Nội\"}","sales02@company.vn","2026-09-10 09:15","APPROVED"],["REC-003","TBL-02","{\"asset\": \"PRN-01\", \"issue\": \"Máy in kẹt giấy liên tục khay 2\", \"severity\": \"TRUNG BÌNH\"}","staff01@company.vn","2026-09-10 10:00","PENDING_APPROVAL"],["REC-004","TBL-03","{\"item\": \"Mực máy in Canon 2900\", \"qty\": 3, \"estimated_price\": 750000}","staff02@company.vn","2026-09-10 11:20","PENDING_APPROVAL"]];
  if (isDemo && demoData_FORM_RECORDS.length > 0) {
    sheet_FORM_RECORDS.getRange(2, 1, demoData_FORM_RECORDS.length, 6).setValues(demoData_FORM_RECORDS);
  }
  sheet_FORM_RECORDS.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd hh:mm');

  const rule_FORM_RECORDS_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPROVED","PENDING_APPROVAL","REJECTED"], true).build();
  sheet_FORM_RECORDS.getRange('F2:F1000').setDataValidation(rule_FORM_RECORDS_F2F1000);

  // =========================================================================
  // TAB: LOCKED_ROWS
  // =========================================================================
  const sheet_LOCKED_ROWS = sheets['LOCKED_ROWS'];
  sheet_LOCKED_ROWS.clear();
  sheet_LOCKED_ROWS.setTabColor('#37474F');
  sheet_LOCKED_ROWS.setFrozenRows(1);

  const headers_LOCKED_ROWS = ["Mã khóa (LockID)","Mã bảng (TableID)","Mã bản ghi (RecordID)","Khóa bởi (LockedBy)","Thời điểm khóa","Lý do khóa"];
  sheet_LOCKED_ROWS.getRange(1, 1, 1, 6).setValues([headers_LOCKED_ROWS])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_LOCKED_ROWS.setRowHeight(1, 32);
  sheet_LOCKED_ROWS.setColumnWidth(1, 130);
  sheet_LOCKED_ROWS.setColumnWidth(2, 130);
  sheet_LOCKED_ROWS.setColumnWidth(3, 150);
  sheet_LOCKED_ROWS.setColumnWidth(4, 200);
  sheet_LOCKED_ROWS.setColumnWidth(5, 150);
  sheet_LOCKED_ROWS.setColumnWidth(6, 260);

  const demoData_LOCKED_ROWS = [["LCK-01","TBL-03","REC-004","manager@company.vn","2026-09-10 11:30","Đang đối chiếu báo giá từ nhà cung cấp trước khi duyệt"]];
  if (isDemo && demoData_LOCKED_ROWS.length > 0) {
    sheet_LOCKED_ROWS.getRange(2, 1, demoData_LOCKED_ROWS.length, 6).setValues(demoData_LOCKED_ROWS);
  }
  sheet_LOCKED_ROWS.getRange('E2:E100').setNumberFormat('yyyy-mm-dd hh:mm');

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
  
  const setRows = [["Tên đơn vị quản trị:","HỆ THỐNG BIỂU MẪU ĐỘNG MINH FORMS"],["Mã hóa đơn giản (Token):","MF-SECURE-2026"],["Cơ chế bảo vệ dữ liệu:","Chặn sửa ngoài quyền (Strict Permissions Enforced)"],["Quy tắc công thức:","Chặn vòng lặp tham chiếu (No Circular Formulas)"],["Quản trị viên hệ thống:","admin@minhtemplates.vn"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH HỆ THỐNG BIỂU MẪU & PHÂN QUYỀN (F21)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tổng số bảng & biểu mẫu động • Kiểm soát lượt nhập liệu • Quản lý phân quyền và khóa dữ liệu')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ BẢNG ĐÃ ĐỊNH NGHĨA
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ BẢNG ĐÃ ĐỊNH NGHĨA')
    .setFontSize(9).setFontWeight('bold').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTIF(TABLE_DEFINITIONS!$F$2:$F$100, "ACTIVE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#00695C').setHorizontalAlignment('center').setBackground('#E0F2F1')
    .setNumberFormat('#,##0 " bảng"');
  dashSheet.getRange('A6:B6').merge().setValue('Bảng dữ liệu đang hoạt động')
    .setFontSize(8).setFontStyle('italic').setFontColor('#004D40').setHorizontalAlignment('center').setBackground('#E0F2F1');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // SubTable: BẢNG THEO DÕI SỐ LƯỢNG BẢN GHI THEO TỪNG BIỂU MẪU
  dashSheet.getRange('A8:E8').merge().setValue('BẢNG THEO DÕI SỐ LƯỢNG BẢN GHI THEO TỪNG BIỂU MẪU')
    .setFontWeight('bold').setFontColor('#004D40').setBackground('#B2DFDB');
  dashSheet.getRange(9, 1, 1, 5).setValues([["Mã bảng","Tên bảng","Nhóm","Số bản ghi","Chờ duyệt"]])
    .setFontWeight('bold').setBackground('#00897B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center');
  dashSheet.setRowHeight(9, 26);
  for (let i = 2; i <= 5; i++) {
    const r = i + 8;
    dashSheet.getRange(r, 1).setFormula('=IF(TABLE_DEFINITIONS!A' + i + '<>"","TABLE_DEFINITIONS!A' + i + '","")');
    dashSheet.getRange(r, 2).setFormula('=IF(TABLE_DEFINITIONS!B' + i + '<>"","TABLE_DEFINITIONS!B' + i + '","")');
    dashSheet.getRange(r, 3).setFormula('=IF(TABLE_DEFINITIONS!D' + i + '<>"","TABLE_DEFINITIONS!D' + i + '","")');
    dashSheet.getRange(r, 4).setFormula('=IF(A' + r + '<>"","COUNTIF(FORM_RECORDS!$B$2:$B$1000, A' + r + ')","")');
    dashSheet.getRange(r, 5).setFormula('=IF(A' + r + '<>"","COUNTIFS(FORM_RECORDS!$B$2:$B$1000, A' + r + ', FORM_RECORDS!$F$2:$F$1000, "PENDING_APPROVAL")","")');
    dashSheet.setRowHeight(r, 22);
  }
  dashSheet.getRange('D10:E13').setNumberFormat('#,##0');

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F08 — Văn bản, hồ sơ và chỉ đạo
 * Phiên bản: 1.0.0 | Gói: BẢN SẠCH MIỄN PHÍ
 * Tự động sinh bởi Core Generator Engine
 */

function install_F08_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF08Workbook(true);
}

function setupCleanTemplate() {
  initF08Workbook(false);
}

function initF08Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Documents","Directives","DocumentVersions","Dispatches","Categories","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — VĂN BẢN, HỒ SƠ VÀ CHỈ ĐẠO (F08)')
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
  // TAB: Documents
  // =========================================================================
  const sheet_Documents = sheets['Documents'];
  sheet_Documents.clear();
  sheet_Documents.setTabColor('#37474F');
  sheet_Documents.setFrozenRows(1);

  const headers_Documents = ["ID","Direction","BookCode","DocNumber","IssuedDate","ReceivedDate","Subject","Issuer","Recipient","CategoryID","Confidentiality","Urgency","OwnerEmail","DueDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Documents.getRange(1, 1, 1, 20).setValues([headers_Documents])
    .setFontWeight('bold').setBackground('#37474F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Documents.setRowHeight(1, 32);
  sheet_Documents.setColumnWidth(1, 120);
  sheet_Documents.setColumnWidth(2, 110);
  sheet_Documents.setColumnWidth(3, 110);
  sheet_Documents.setColumnWidth(4, 130);
  sheet_Documents.setColumnWidth(5, 110);
  sheet_Documents.setColumnWidth(6, 110);
  sheet_Documents.setColumnWidth(7, 240);
  sheet_Documents.setColumnWidth(8, 180);
  sheet_Documents.setColumnWidth(9, 180);
  sheet_Documents.setColumnWidth(10, 120);
  sheet_Documents.setColumnWidth(11, 120);
  sheet_Documents.setColumnWidth(12, 110);
  sheet_Documents.setColumnWidth(13, 200);
  sheet_Documents.setColumnWidth(14, 110);
  sheet_Documents.setColumnWidth(15, 120);
  sheet_Documents.setColumnWidth(16, 160);
  sheet_Documents.setColumnWidth(17, 160);
  sheet_Documents.setColumnWidth(18, 180);
  sheet_Documents.setColumnWidth(19, 90);
  sheet_Documents.setColumnWidth(20, 80);

  const demoData_Documents = [["DOC-001","INCOMING","SO-DEN-2026","125/UBND-VP","2026-09-01","2026-09-02","V/v phối hợp tổ chức Hội chợ Thương mại Quốc tế 2026","UBND Thành Phố","Ban Giám Đốc","CAT-01","INTERNAL","URGENT","lanhdao@minhtemplates.com","2026-09-15","PROCESSING","2026-09-02T08:00:00Z","2026-09-02T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-002","OUTGOING","SO-DI-2026","45/CV-MTF","2026-09-05","2026-09-05","Công văn phúc đáp đề xuất hợp tác công nghệ số","Minh Templates Factory","Tập đoàn Công nghệ FPT","CAT-02","PUBLIC","NORMAL","lanhdao@minhtemplates.com","2026-09-20","COMPLETED","2026-09-05T08:00:00Z","2026-09-05T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-003","INCOMING","SO-DEN-2026","88/BCT-KH","2026-09-08","2026-09-09","Thông tư quy định tiêu chuẩn kỹ thuật số hóa hồ sơ doanh nghiệp","Bộ Công Thương","Phòng Pháp Chế","CAT-01","INTERNAL","NORMAL","phapche@minhtemplates.com","2026-09-30","PROCESSING","2026-09-09T08:00:00Z","2026-09-09T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DOC-004","INTERNAL","SO-NB-2026","01/TB-BGD","2026-09-10","2026-09-10","Thông báo quyết định bổ nhiệm nhân sự cấp cao","Hội Đồng Quản Trị","Toàn thể Cán bộ nhân viên","CAT-03","CONFIDENTIAL","URGENT","lanhdao@minhtemplates.com","2026-09-15","COMPLETED","2026-09-10T08:00:00Z","2026-09-10T08:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Documents.length > 0) {
    sheet_Documents.getRange(2, 1, demoData_Documents.length, 20).setValues(demoData_Documents);
  }
  sheet_Documents.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Documents.getRange('N2:N1000').setNumberFormat('yyyy-mm-dd');

  const rule_Documents_B2B1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["INCOMING","OUTGOING","INTERNAL"], true).build();
  sheet_Documents.getRange('B2:B1000').setDataValidation(rule_Documents_B2B1000);

  const rule_Documents_K2K1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PUBLIC","INTERNAL","CONFIDENTIAL","SECRET"], true).build();
  sheet_Documents.getRange('K2:K1000').setDataValidation(rule_Documents_K2K1000);

  const rule_Documents_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NORMAL","URGENT","TOP_URGENT"], true).build();
  sheet_Documents.getRange('L2:L1000').setDataValidation(rule_Documents_L2L1000);

  const rule_Documents_O2O1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","PROCESSING","COMPLETED","OVERDUE","ARCHIVED"], true).build();
  sheet_Documents.getRange('O2:O1000').setDataValidation(rule_Documents_O2O1000);

  // =========================================================================
  // TAB: Directives
  // =========================================================================
  const sheet_Directives = sheets['Directives'];
  sheet_Directives.clear();
  sheet_Directives.setTabColor('#455A64');
  sheet_Directives.setFrozenRows(1);

  const headers_Directives = ["ID","DocumentID","Content","AssigneeEmail","DueDate","Status","Feedback","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Directives.getRange(1, 1, 1, 12).setValues([headers_Directives])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Directives.setRowHeight(1, 32);
  sheet_Directives.setColumnWidth(1, 120);
  sheet_Directives.setColumnWidth(2, 120);
  sheet_Directives.setColumnWidth(3, 240);
  sheet_Directives.setColumnWidth(4, 200);
  sheet_Directives.setColumnWidth(5, 110);
  sheet_Directives.setColumnWidth(6, 120);
  sheet_Directives.setColumnWidth(7, 220);
  sheet_Directives.setColumnWidth(8, 160);
  sheet_Directives.setColumnWidth(9, 160);
  sheet_Directives.setColumnWidth(10, 180);
  sheet_Directives.setColumnWidth(11, 90);
  sheet_Directives.setColumnWidth(12, 80);

  const demoData_Directives = [["DIR-001","DOC-001","Xây dựng kế hoạch gian hàng triển lãm và dự trù kinh phí","marketing@minhtemplates.com","2026-09-12","IN_PROGRESS","Đã khảo sát mặt bằng và liên hệ ban tổ chức","2026-09-02T09:00:00Z","2026-09-02T09:00:00Z","lanhdao@minhtemplates.com",1,"FALSE"],["DIR-002","DOC-001","Soạn thảo văn bản xác nhận tham gia gửi UBND","vanthu@minhtemplates.com","2026-09-10","COMPLETED","Đã phát hành công văn theo yêu cầu","2026-09-02T09:00:00Z","2026-09-10T10:00:00Z","lanhdao@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Directives.length > 0) {
    sheet_Directives.getRange(2, 1, demoData_Directives.length, 12).setValues(demoData_Directives);
  }
  sheet_Directives.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_Directives_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["TODO","IN_PROGRESS","COMPLETED","OVERDUE"], true).build();
  sheet_Directives.getRange('F2:F1000').setDataValidation(rule_Directives_F2F1000);

  // =========================================================================
  // TAB: DocumentVersions
  // =========================================================================
  const sheet_DocumentVersions = sheets['DocumentVersions'];
  sheet_DocumentVersions.clear();
  sheet_DocumentVersions.setTabColor('#546E7A');
  sheet_DocumentVersions.setFrozenRows(1);

  const headers_DocumentVersions = ["ID","DocumentID","Version","FileName","FileUrl","UploadedAt","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_DocumentVersions.getRange(1, 1, 1, 11).setValues([headers_DocumentVersions])
    .setFontWeight('bold').setBackground('#546E7A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_DocumentVersions.setRowHeight(1, 32);
  sheet_DocumentVersions.setColumnWidth(1, 120);
  sheet_DocumentVersions.setColumnWidth(2, 120);
  sheet_DocumentVersions.setColumnWidth(3, 90);
  sheet_DocumentVersions.setColumnWidth(4, 220);
  sheet_DocumentVersions.setColumnWidth(5, 240);
  sheet_DocumentVersions.setColumnWidth(6, 160);
  sheet_DocumentVersions.setColumnWidth(7, 160);
  sheet_DocumentVersions.setColumnWidth(8, 160);
  sheet_DocumentVersions.setColumnWidth(9, 180);
  sheet_DocumentVersions.setColumnWidth(10, 90);
  sheet_DocumentVersions.setColumnWidth(11, 80);

  const demoData_DocumentVersions = [["DVER-001","DOC-001","v1.0","VanBanDen_125_UBND.pdf","drive.google.com/file/d/doc125","2026-09-02T08:15:00Z","2026-09-02T08:15:00Z","2026-09-02T08:15:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DVER-002","DOC-002","v1.0","CongVan_45_FPT_Draft.pdf","drive.google.com/file/d/cv45draft","2026-09-04T14:00:00Z","2026-09-04T14:00:00Z","2026-09-04T14:00:00Z","vanthu@minhtemplates.com",1,"FALSE"],["DVER-003","DOC-002","v1.1","CongVan_45_FPT_Signed.pdf","drive.google.com/file/d/cv45signed","2026-09-05T10:00:00Z","2026-09-05T10:00:00Z","2026-09-05T10:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_DocumentVersions.length > 0) {
    sheet_DocumentVersions.getRange(2, 1, demoData_DocumentVersions.length, 11).setValues(demoData_DocumentVersions);
  }

  // =========================================================================
  // TAB: Dispatches
  // =========================================================================
  const sheet_Dispatches = sheets['Dispatches'];
  sheet_Dispatches.clear();
  sheet_Dispatches.setTabColor('#607D8B');
  sheet_Dispatches.setFrozenRows(1);

  const headers_Dispatches = ["ID","DocumentID","Recipient","SentAt","Method","TrackingCode","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Dispatches.getRange(1, 1, 1, 11).setValues([headers_Dispatches])
    .setFontWeight('bold').setBackground('#607D8B').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Dispatches.setRowHeight(1, 32);
  sheet_Dispatches.setColumnWidth(1, 120);
  sheet_Dispatches.setColumnWidth(2, 120);
  sheet_Dispatches.setColumnWidth(3, 200);
  sheet_Dispatches.setColumnWidth(4, 160);
  sheet_Dispatches.setColumnWidth(5, 120);
  sheet_Dispatches.setColumnWidth(6, 150);
  sheet_Dispatches.setColumnWidth(7, 160);
  sheet_Dispatches.setColumnWidth(8, 160);
  sheet_Dispatches.setColumnWidth(9, 180);
  sheet_Dispatches.setColumnWidth(10, 90);
  sheet_Dispatches.setColumnWidth(11, 80);

  const demoData_Dispatches = [["DSP-001","DOC-002","Tập đoàn FPT - Ban Chuyển đổi số","2026-09-05 11:00:00","COURIER","VNPOST-889977","2026-09-05T11:00:00Z","2026-09-05T11:00:00Z","vanthu@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Dispatches.length > 0) {
    sheet_Dispatches.getRange(2, 1, demoData_Dispatches.length, 11).setValues(demoData_Dispatches);
  }

  const rule_Dispatches_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["EMAIL","POST","COURIER","DIRECT"], true).build();
  sheet_Dispatches.getRange('E2:E1000').setDataValidation(rule_Dispatches_E2E1000);

  // =========================================================================
  // TAB: Categories
  // =========================================================================
  const sheet_Categories = sheets['Categories'];
  sheet_Categories.clear();
  sheet_Categories.setTabColor('#78909C');
  sheet_Categories.setFrozenRows(1);

  const headers_Categories = ["ID","Name","AllowedRole","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Categories.getRange(1, 1, 1, 8).setValues([headers_Categories])
    .setFontWeight('bold').setBackground('#78909C').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Categories.setRowHeight(1, 32);
  sheet_Categories.setColumnWidth(1, 120);
  sheet_Categories.setColumnWidth(2, 200);
  sheet_Categories.setColumnWidth(3, 180);
  sheet_Categories.setColumnWidth(4, 160);
  sheet_Categories.setColumnWidth(5, 160);
  sheet_Categories.setColumnWidth(6, 180);
  sheet_Categories.setColumnWidth(7, 90);
  sheet_Categories.setColumnWidth(8, 80);

  const demoData_Categories = [["CAT-01","Văn bản Hành chính & Chỉ đạo","STAFF","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAT-02","Công văn Đối ngoại & Hợp tác","STAFF","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CAT-03","Hồ sơ Tổ chức & Nhân sự","HR_MANAGER","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Categories.length > 0) {
    sheet_Categories.getRange(2, 1, demoData_Categories.length, 8).setValues(demoData_Categories);
  }

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#90A4AE');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#90A4AE').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Settings.setRowHeight(1, 32);
  sheet_Settings.setColumnWidth(1, 150);
  sheet_Settings.setColumnWidth(2, 200);
  sheet_Settings.setColumnWidth(3, 260);
  sheet_Settings.setColumnWidth(4, 160);
  sheet_Settings.setColumnWidth(5, 160);
  sheet_Settings.setColumnWidth(6, 180);
  sheet_Settings.setColumnWidth(7, 90);
  sheet_Settings.setColumnWidth(8, 80);

  const demoData_Settings = [["WARN_DUPLICATE_NUMBER_IN_BOOK","TRUE","Cảnh báo khi trùng số văn bản trong cùng sổ/năm","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ENFORCE_CONFIDENTIAL_ROLE_CHECK","TRUE","Chặn truy cập file văn bản mật đối với nhân viên không được giao quyền","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO ĐIỀU HÀNH VĂN BẢN & CHỈ ĐẠO')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi tiếp nhận văn bản, sổ đến/đi, tiến độ xử lý chỉ đạo và hạn hoàn thành')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ VĂN BẢN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ VĂN BẢN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Documents!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  SpreadsheetApp.flush();
  ss.setActiveSheet(sheets['DASHBOARD']);
}

/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F07 — Hợp đồng, phụ lục và phát sinh
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F07_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF07Workbook(true);
}

function setupCleanTemplate() {
  initF07Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F07 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function initF07Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Contracts","Amendments","Milestones","ContractPayments","ContractFiles","Settings"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — HỢP ĐỒNG, PHỤ LỤC VÀ PHÁT SINH (F07)')
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
  // TAB: Contracts
  // =========================================================================
  const sheet_Contracts = sheets['Contracts'];
  sheet_Contracts.clear();
  sheet_Contracts.setTabColor('#0D47A1');
  sheet_Contracts.setFrozenRows(1);

  const headers_Contracts = ["ID","ContractNumber","Title","Counterparty","SignedDate","StartDate","EndDate","BaseAmount","ApprovedVariations","CurrentAmount","Currency","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Contracts.getRange(1, 1, 1, 17).setValues([headers_Contracts])
    .setFontWeight('bold').setBackground('#0D47A1').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Contracts.setRowHeight(1, 32);
  sheet_Contracts.setColumnWidth(1, 120);
  sheet_Contracts.setColumnWidth(2, 130);
  sheet_Contracts.setColumnWidth(3, 220);
  sheet_Contracts.setColumnWidth(4, 180);
  sheet_Contracts.setColumnWidth(5, 110);
  sheet_Contracts.setColumnWidth(6, 110);
  sheet_Contracts.setColumnWidth(7, 110);
  sheet_Contracts.setColumnWidth(8, 140);
  sheet_Contracts.setColumnWidth(9, 140);
  sheet_Contracts.setColumnWidth(10, 140);
  sheet_Contracts.setColumnWidth(11, 90);
  sheet_Contracts.setColumnWidth(12, 120);
  sheet_Contracts.setColumnWidth(13, 160);
  sheet_Contracts.setColumnWidth(14, 160);
  sheet_Contracts.setColumnWidth(15, 180);
  sheet_Contracts.setColumnWidth(16, 90);
  sheet_Contracts.setColumnWidth(17, 80);

  const demoData_Contracts = [["CTR-001","HD-2026/01","Hợp đồng Cung cấp Phần mềm Quản trị","Công ty TNHH Giải pháp Á Châu","2026-01-15","2026-01-15","2026-12-31",100000000,20000000,120000000,"VND","ACTIVE","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CTR-002","HD-2026/02","Hợp đồng Bảo trì Hệ thống Máy chủ","Công ty Cổ phần Hạ tầng Việt","2026-02-01","2026-02-01","2026-09-30",60000000,0,60000000,"VND","ACTIVE","2026-02-01T08:00:00Z","2026-02-01T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CTR-003","HD-2026/03","Hợp đồng Thiết kế Thương hiệu số","Công ty TNHH Sáng tạo Minh Media","2026-03-10","2026-03-10","2026-06-30",45000000,5000000,50000000,"VND","COMPLETED","2026-03-10T08:00:00Z","2026-06-30T10:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Contracts.length > 0) {
    sheet_Contracts.getRange(2, 1, demoData_Contracts.length, 17).setValues(demoData_Contracts);
  }
  sheet_Contracts.getRange('E2:G1000').setNumberFormat('yyyy-mm-dd');
  sheet_Contracts.getRange('H2:J1000').setNumberFormat('#,##0 "₫"');

  const rule_Contracts_L2L1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","ACTIVE","COMPLETED","TERMINATED","EXPIRED"], true).build();
  sheet_Contracts.getRange('L2:L1000').setDataValidation(rule_Contracts_L2L1000);

  // =========================================================================
  // TAB: Amendments
  // =========================================================================
  const sheet_Amendments = sheets['Amendments'];
  sheet_Amendments.clear();
  sheet_Amendments.setTabColor('#1565C0');
  sheet_Amendments.setFrozenRows(1);

  const headers_Amendments = ["ID","ContractID","AmendmentNumber","SignedDate","ValueChange","Reason","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Amendments.getRange(1, 1, 1, 12).setValues([headers_Amendments])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Amendments.setRowHeight(1, 32);
  sheet_Amendments.setColumnWidth(1, 120);
  sheet_Amendments.setColumnWidth(2, 120);
  sheet_Amendments.setColumnWidth(3, 140);
  sheet_Amendments.setColumnWidth(4, 110);
  sheet_Amendments.setColumnWidth(5, 140);
  sheet_Amendments.setColumnWidth(6, 220);
  sheet_Amendments.setColumnWidth(7, 120);
  sheet_Amendments.setColumnWidth(8, 160);
  sheet_Amendments.setColumnWidth(9, 160);
  sheet_Amendments.setColumnWidth(10, 180);
  sheet_Amendments.setColumnWidth(11, 90);
  sheet_Amendments.setColumnWidth(12, 80);

  const demoData_Amendments = [["AMD-001","CTR-001","PL-01/HD-2026/01","2026-03-01",20000000,"Bổ sung module mobile app (Đã duyệt)","APPROVED","2026-03-01T08:00:00Z","2026-03-01T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["AMD-002","CTR-001","PL-02/HD-2026/01","2026-06-15",-5000000,"Giảm trừ phạm vi module SMS (Chưa duyệt)","SUBMITTED","2026-06-15T08:00:00Z","2026-06-15T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["AMD-003","CTR-003","PL-01/HD-2026/03","2026-04-10",5000000,"Mở rộng hạng mục thiết kế ấn phẩm sự kiện","APPROVED","2026-04-10T08:00:00Z","2026-04-10T08:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Amendments.length > 0) {
    sheet_Amendments.getRange(2, 1, demoData_Amendments.length, 12).setValues(demoData_Amendments);
  }
  sheet_Amendments.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_Amendments.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');

  const rule_Amendments_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SUBMITTED","APPROVED","REJECTED"], true).build();
  sheet_Amendments.getRange('G2:G1000').setDataValidation(rule_Amendments_G2G1000);

  // =========================================================================
  // TAB: Milestones
  // =========================================================================
  const sheet_Milestones = sheets['Milestones'];
  sheet_Milestones.clear();
  sheet_Milestones.setTabColor('#1976D2');
  sheet_Milestones.setFrozenRows(1);

  const headers_Milestones = ["ID","ContractID","MilestoneName","DueDate","Amount","AcceptedAt","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Milestones.getRange(1, 1, 1, 12).setValues([headers_Milestones])
    .setFontWeight('bold').setBackground('#1976D2').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Milestones.setRowHeight(1, 32);
  sheet_Milestones.setColumnWidth(1, 120);
  sheet_Milestones.setColumnWidth(2, 120);
  sheet_Milestones.setColumnWidth(3, 200);
  sheet_Milestones.setColumnWidth(4, 110);
  sheet_Milestones.setColumnWidth(5, 140);
  sheet_Milestones.setColumnWidth(6, 110);
  sheet_Milestones.setColumnWidth(7, 120);
  sheet_Milestones.setColumnWidth(8, 160);
  sheet_Milestones.setColumnWidth(9, 160);
  sheet_Milestones.setColumnWidth(10, 180);
  sheet_Milestones.setColumnWidth(11, 90);
  sheet_Milestones.setColumnWidth(12, 80);

  const demoData_Milestones = [["MLS-001","CTR-001","Giai đoạn 1: Bàn giao thiết kế & SRS","2026-03-31",40000000,"2026-03-30","ACCEPTED","2026-01-15T08:00:00Z","2026-03-30T10:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-002","CTR-001","Giai đoạn 2: Bàn giao phiên bản UAT","2026-07-31",40000000,"","PENDING","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-003","CTR-001","Giai đoạn 3: Nghiệm thu vận hành Go-Live","2026-11-30",40000000,"","PENDING","2026-01-15T08:00:00Z","2026-01-15T08:00:00Z","pm@minhtemplates.com",1,"FALSE"],["MLS-004","CTR-003","Bàn giao trọn gói bộ nhận diện","2026-06-15",50000000,"2026-06-10","ACCEPTED","2026-03-10T08:00:00Z","2026-06-10T10:00:00Z","pm@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Milestones.length > 0) {
    sheet_Milestones.getRange(2, 1, demoData_Milestones.length, 12).setValues(demoData_Milestones);
  }
  sheet_Milestones.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');
  sheet_Milestones.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_Milestones.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');

  const rule_Milestones_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PENDING","ACCEPTED","OVERDUE"], true).build();
  sheet_Milestones.getRange('G2:G1000').setDataValidation(rule_Milestones_G2G1000);

  // =========================================================================
  // TAB: ContractPayments
  // =========================================================================
  const sheet_ContractPayments = sheets['ContractPayments'];
  sheet_ContractPayments.clear();
  sheet_ContractPayments.setTabColor('#1E88E5');
  sheet_ContractPayments.setFrozenRows(1);

  const headers_ContractPayments = ["ID","ContractID","MilestoneID","Amount","PaidAt","PaymentMethod","Reference","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ContractPayments.getRange(1, 1, 1, 12).setValues([headers_ContractPayments])
    .setFontWeight('bold').setBackground('#1E88E5').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ContractPayments.setRowHeight(1, 32);
  sheet_ContractPayments.setColumnWidth(1, 120);
  sheet_ContractPayments.setColumnWidth(2, 120);
  sheet_ContractPayments.setColumnWidth(3, 120);
  sheet_ContractPayments.setColumnWidth(4, 140);
  sheet_ContractPayments.setColumnWidth(5, 110);
  sheet_ContractPayments.setColumnWidth(6, 130);
  sheet_ContractPayments.setColumnWidth(7, 160);
  sheet_ContractPayments.setColumnWidth(8, 160);
  sheet_ContractPayments.setColumnWidth(9, 160);
  sheet_ContractPayments.setColumnWidth(10, 180);
  sheet_ContractPayments.setColumnWidth(11, 90);
  sheet_ContractPayments.setColumnWidth(12, 80);

  const demoData_ContractPayments = [["CPY-001","CTR-001","MLS-001",30000000,"2026-01-20","BANK_TRANSFER","UNC-260120-01 (Tạm ứng ký HĐ)","2026-01-20T08:00:00Z","2026-01-20T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["CPY-002","CTR-001","MLS-001",20000000,"2026-04-05","BANK_TRANSFER","UNC-260405-02 (Thanh toán sau GĐ 1)","2026-04-05T08:00:00Z","2026-04-05T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["CPY-003","CTR-003","MLS-004",50000000,"2026-06-25","BANK_TRANSFER","UNC-260625-01 (Tất toán HĐ 03)","2026-06-25T08:00:00Z","2026-06-25T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ContractPayments.length > 0) {
    sheet_ContractPayments.getRange(2, 1, demoData_ContractPayments.length, 12).setValues(demoData_ContractPayments);
  }
  sheet_ContractPayments.getRange('D2:D1000').setNumberFormat('#,##0 "₫"');
  sheet_ContractPayments.getRange('E2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_ContractPayments_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["BANK_TRANSFER","CASH","CREDIT_LETTER"], true).build();
  sheet_ContractPayments.getRange('F2:F1000').setDataValidation(rule_ContractPayments_F2F1000);

  // =========================================================================
  // TAB: ContractFiles
  // =========================================================================
  const sheet_ContractFiles = sheets['ContractFiles'];
  sheet_ContractFiles.clear();
  sheet_ContractFiles.setTabColor('#2196F3');
  sheet_ContractFiles.setFrozenRows(1);

  const headers_ContractFiles = ["ID","ContractID","FileName","Version","FileUrl","UploadedAt","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_ContractFiles.getRange(1, 1, 1, 11).setValues([headers_ContractFiles])
    .setFontWeight('bold').setBackground('#2196F3').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_ContractFiles.setRowHeight(1, 32);
  sheet_ContractFiles.setColumnWidth(1, 120);
  sheet_ContractFiles.setColumnWidth(2, 120);
  sheet_ContractFiles.setColumnWidth(3, 220);
  sheet_ContractFiles.setColumnWidth(4, 90);
  sheet_ContractFiles.setColumnWidth(5, 240);
  sheet_ContractFiles.setColumnWidth(6, 160);
  sheet_ContractFiles.setColumnWidth(7, 160);
  sheet_ContractFiles.setColumnWidth(8, 160);
  sheet_ContractFiles.setColumnWidth(9, 180);
  sheet_ContractFiles.setColumnWidth(10, 90);
  sheet_ContractFiles.setColumnWidth(11, 80);

  const demoData_ContractFiles = [["CFL-001","CTR-001","HopDong_KiemToan_GiaiPhapAChau_Signed.pdf","v1.0","drive.google.com/file/d/12345","2026-01-15T09:00:00Z","2026-01-15T09:00:00Z","2026-01-15T09:00:00Z","phapche@minhtemplates.com",1,"FALSE"],["CFL-002","CTR-001","PhuLuc_01_MobileApp_Signed.pdf","v1.1","drive.google.com/file/d/67890","2026-03-01T10:00:00Z","2026-03-01T10:00:00Z","2026-03-01T10:00:00Z","phapche@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_ContractFiles.length > 0) {
    sheet_ContractFiles.getRange(2, 1, demoData_ContractFiles.length, 11).setValues(demoData_ContractFiles);
  }

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#455A64');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#455A64').setFontColor('#FFFFFF')
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

  const demoData_Settings = [["EXPIRY_WARNING_DAYS","30","Số ngày cảnh báo trước khi hợp đồng hết hiệu lực","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["ENABLE_INDEPENDENT_RECONCILIATION","TRUE","Mốc nghiệm thu và thanh toán hoàn toàn độc lập","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO QUẢN TRỊ HỢP ĐỒNG & PHÁT SINH')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi giá trị hợp đồng, phụ lục điều chỉnh, tiến độ nghiệm thu và giải ngân')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG GIÁ TRỊ HIỆN HÀNH
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG GIÁ TRỊ HIỆN HÀNH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('A5:B5').merge().setValue('=SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, "<>TERMINATED", Contracts!Q2:Q1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 2: ĐÃ NGHIỆM THU
  dashSheet.getRange('C4:D4').merge().setValue('ĐÃ NGHIỆM THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(Milestones!E2:E1000, Milestones!G2:G1000, "ACCEPTED", Milestones!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0 "₫"');

  // Card 3: ĐÃ THANH TOÁN
  dashSheet.getRange('E4:F4').merge().setValue('ĐÃ THANH TOÁN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('E5:F5').merge().setValue('=SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('#,##0 "₫"');

  // Card 4: TỶ LỆ GIẢI NGÂN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ GIẢI NGÂN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(SUMIFS(ContractPayments!D2:D1000, ContractPayments!K2:K1000, "FALSE") / IFERROR(SUMIFS(Contracts!J2:J1000, Contracts!L2:L1000, "<>TERMINATED", Contracts!Q2:Q1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('0.0%');

  // Card 5: HỢP ĐỒNG HIỆU LỰC
  dashSheet.getRange('I4:J4').merge().setValue('HỢP ĐỒNG HIỆU LỰC')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(Contracts!L2:L1000, "ACTIVE", Contracts!Q2:Q1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Giá Trị Hợp Đồng Theo Trạng Thái
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('Contracts!L1:L1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Giá Trị Hợp Đồng Theo Trạng Thái')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Nghiệm Thu vs Thanh Toán Thực Tế
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Milestones!C1:C1000'))
      .addRange(dashSheet.getRange('Milestones!E1:E1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Nghiệm Thu vs Thanh Toán Thực Tế')
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

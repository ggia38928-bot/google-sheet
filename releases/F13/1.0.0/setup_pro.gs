/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F13 — Tuyển dụng & lịch phỏng vấn ứng viên
 * Phiên bản: 1.0.0 | Gói: GÓI PRO CHUYÊN NGHIỆP (119.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F13_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF13Workbook(true);
}

function setupCleanTemplate() {
  initF13Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F13 PRO')
    .addItem('📊 Cài đặt dữ liệu mẫu (Demo)', 'setupDemoTemplate')
    .addItem('🧹 Làm sạch dữ liệu (Clean)', 'setupCleanTemplate')
    .addToUi();
}

function initF13Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Vacancies","Candidates","Applications","Interviews","Scorecards","Offers","SETTINGS"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — TUYỂN DỤNG & LỊCH PHỎNG VẤN ỨNG VIÊN (F13)')
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
  // TAB: Vacancies
  // =========================================================================
  const sheet_Vacancies = sheets['Vacancies'];
  sheet_Vacancies.clear();
  sheet_Vacancies.setTabColor('#1565C0');
  sheet_Vacancies.setFrozenRows(1);

  const headers_Vacancies = ["ID","Title","TeamID","HiringManager","TargetCount","OpenDate","CloseDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Vacancies.getRange(1, 1, 1, 13).setValues([headers_Vacancies])
    .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Vacancies.setRowHeight(1, 32);
  sheet_Vacancies.setColumnWidth(1, 120);
  sheet_Vacancies.setColumnWidth(2, 240);
  sheet_Vacancies.setColumnWidth(3, 140);
  sheet_Vacancies.setColumnWidth(4, 200);
  sheet_Vacancies.setColumnWidth(5, 110);
  sheet_Vacancies.setColumnWidth(6, 110);
  sheet_Vacancies.setColumnWidth(7, 110);
  sheet_Vacancies.setColumnWidth(8, 120);
  sheet_Vacancies.setColumnWidth(9, 160);
  sheet_Vacancies.setColumnWidth(10, 160);
  sheet_Vacancies.setColumnWidth(11, 180);
  sheet_Vacancies.setColumnWidth(12, 90);
  sheet_Vacancies.setColumnWidth(13, 80);

  const demoData_Vacancies = [["VAC-001","Kỹ Sư Lập Trình Node.js Backend","KỸ THUẬT","long.lh@minhtemplates.com",2,"2026-08-01","2026-09-30","OPEN","2026-08-01T08:00:00Z","2026-08-01T08:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["VAC-002","Chuyên Viên Tư Vấn Bán Hàng Doanh Nghiệp","KINH DOANH","thao.tt@minhtemplates.com",3,"2026-08-15","2026-09-15","OPEN","2026-08-15T08:00:00Z","2026-08-15T08:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["VAC-003","Trưởng Nhóm Content & SEO Marketing","MARKETING","anh.pq@minhtemplates.com",1,"2026-07-01","2026-08-15","CLOSED","2026-07-01T08:00:00Z","2026-08-15T17:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Vacancies.length > 0) {
    sheet_Vacancies.getRange(2, 1, demoData_Vacancies.length, 13).setValues(demoData_Vacancies);
  }
  sheet_Vacancies.getRange('F2:G1000').setNumberFormat('yyyy-mm-dd');

  const rule_Vacancies_C2C1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["KINH DOANH","KỸ THUẬT","MARKETING","NHÂN SỰ","TÀI CHÍNH","VẬN HÀNH"], true).build();
  sheet_Vacancies.getRange('C2:C1000').setDataValidation(rule_Vacancies_C2C1000);

  const rule_Vacancies_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["OPEN","IN_PROGRESS","CLOSED","CANCELLED"], true).build();
  sheet_Vacancies.getRange('H2:H1000').setDataValidation(rule_Vacancies_H2H1000);

  // =========================================================================
  // TAB: Candidates
  // =========================================================================
  const sheet_Candidates = sheets['Candidates'];
  sheet_Candidates.clear();
  sheet_Candidates.setTabColor('#0277BD');
  sheet_Candidates.setFrozenRows(1);

  const headers_Candidates = ["ID","CandidateCode","Name","Email","Phone","CVFileID","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Candidates.getRange(1, 1, 1, 12).setValues([headers_Candidates])
    .setFontWeight('bold').setBackground('#0277BD').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Candidates.setRowHeight(1, 32);
  sheet_Candidates.setColumnWidth(1, 120);
  sheet_Candidates.setColumnWidth(2, 120);
  sheet_Candidates.setColumnWidth(3, 220);
  sheet_Candidates.setColumnWidth(4, 200);
  sheet_Candidates.setColumnWidth(5, 130);
  sheet_Candidates.setColumnWidth(6, 160);
  sheet_Candidates.setColumnWidth(7, 130);
  sheet_Candidates.setColumnWidth(8, 160);
  sheet_Candidates.setColumnWidth(9, 160);
  sheet_Candidates.setColumnWidth(10, 180);
  sheet_Candidates.setColumnWidth(11, 90);
  sheet_Candidates.setColumnWidth(12, 80);

  const demoData_Candidates = [["CAN-001","UV-001","Hoàng Văn Nam","nam.hv@gmail.com","0933112233","CV_NAM_HV_01","HIRED","2026-08-05T09:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-002","UV-002","Nguyễn Thị Bích Ngọc","ngoc.ntb@gmail.com","0944556677","CV_NGOC_NTB_02","INTERVIEWING","2026-08-10T14:00:00Z","2026-08-20T16:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-003","UV-003","Trần Quang Huy","huy.tq@gmail.com","0911223344","CV_HUY_TQ_03","OFFERED","2026-08-12T10:00:00Z","2026-08-28T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["CAN-004","UV-004","Lê Thu Trang","trang.lt@gmail.com","0988776655","CV_TRANG_LT_04","REJECTED","2026-08-15T08:30:00Z","2026-08-18T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Candidates.length > 0) {
    sheet_Candidates.getRange(2, 1, demoData_Candidates.length, 12).setValues(demoData_Candidates);
  }

  const rule_Candidates_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["NEW","SCREENING","INTERVIEWING","OFFERED","HIRED","REJECTED"], true).build();
  sheet_Candidates.getRange('G2:G1000').setDataValidation(rule_Candidates_G2G1000);

  // =========================================================================
  // TAB: Applications
  // =========================================================================
  const sheet_Applications = sheets['Applications'];
  sheet_Applications.clear();
  sheet_Applications.setTabColor('#00838F');
  sheet_Applications.setFrozenRows(1);

  const headers_Applications = ["ID","CandidateID","VacancyID","Stage","Source","AppliedAt","OwnerEmail","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Applications.getRange(1, 1, 1, 12).setValues([headers_Applications])
    .setFontWeight('bold').setBackground('#00838F').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Applications.setRowHeight(1, 32);
  sheet_Applications.setColumnWidth(1, 120);
  sheet_Applications.setColumnWidth(2, 120);
  sheet_Applications.setColumnWidth(3, 120);
  sheet_Applications.setColumnWidth(4, 130);
  sheet_Applications.setColumnWidth(5, 140);
  sheet_Applications.setColumnWidth(6, 160);
  sheet_Applications.setColumnWidth(7, 200);
  sheet_Applications.setColumnWidth(8, 160);
  sheet_Applications.setColumnWidth(9, 160);
  sheet_Applications.setColumnWidth(10, 180);
  sheet_Applications.setColumnWidth(11, 90);
  sheet_Applications.setColumnWidth(12, 80);

  const demoData_Applications = [["APP-001","CAN-001","VAC-001","HIRED","TOPCV","2026-08-05T09:00:00Z","recruiter@minhtemplates.com","2026-08-05T09:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-002","CAN-002","VAC-001","INTERVIEW","LINKEDIN","2026-08-10T14:00:00Z","recruiter@minhtemplates.com","2026-08-10T14:00:00Z","2026-08-20T16:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-003","CAN-002","VAC-002","APPLIED","WEBSITE","2026-08-11T10:00:00Z","recruiter@minhtemplates.com","2026-08-11T10:00:00Z","2026-08-11T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-004","CAN-003","VAC-002","OFFER","REFERRAL","2026-08-12T10:00:00Z","recruiter@minhtemplates.com","2026-08-12T10:00:00Z","2026-08-28T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["APP-005","CAN-004","VAC-002","REJECTED","TOPCV","2026-08-15T08:30:00Z","recruiter@minhtemplates.com","2026-08-15T08:30:00Z","2026-08-18T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Applications.length > 0) {
    sheet_Applications.getRange(2, 1, demoData_Applications.length, 12).setValues(demoData_Applications);
  }

  const rule_Applications_D2D1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["APPLIED","SCREENING","INTERVIEW","OFFER","HIRED","REJECTED"], true).build();
  sheet_Applications.getRange('D2:D1000').setDataValidation(rule_Applications_D2D1000);

  const rule_Applications_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["LINKEDIN","TOPCV","VIETNAMWORKS","REFERRAL","WEBSITE","OTHER"], true).build();
  sheet_Applications.getRange('E2:E1000').setDataValidation(rule_Applications_E2E1000);

  // =========================================================================
  // TAB: Interviews
  // =========================================================================
  const sheet_Interviews = sheets['Interviews'];
  sheet_Interviews.clear();
  sheet_Interviews.setTabColor('#43A047');
  sheet_Interviews.setFrozenRows(1);

  const headers_Interviews = ["ID","ApplicationID","StartAt","EndAt","InterviewerEmail","Round","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Interviews.getRange(1, 1, 1, 12).setValues([headers_Interviews])
    .setFontWeight('bold').setBackground('#43A047').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Interviews.setRowHeight(1, 32);
  sheet_Interviews.setColumnWidth(1, 120);
  sheet_Interviews.setColumnWidth(2, 120);
  sheet_Interviews.setColumnWidth(3, 160);
  sheet_Interviews.setColumnWidth(4, 160);
  sheet_Interviews.setColumnWidth(5, 200);
  sheet_Interviews.setColumnWidth(6, 160);
  sheet_Interviews.setColumnWidth(7, 130);
  sheet_Interviews.setColumnWidth(8, 160);
  sheet_Interviews.setColumnWidth(9, 160);
  sheet_Interviews.setColumnWidth(10, 180);
  sheet_Interviews.setColumnWidth(11, 90);
  sheet_Interviews.setColumnWidth(12, 80);

  const demoData_Interviews = [["INT-001","APP-001","2026-08-12T09:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com","ROUND_2_TECHNICAL","COMPLETED","2026-08-08T09:00:00Z","2026-08-12T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["INT-002","APP-002","2026-08-22T14:00:00Z","2026-08-22T15:00:00Z","long.lh@minhtemplates.com","ROUND_2_TECHNICAL","SCHEDULED","2026-08-15T10:00:00Z","2026-08-15T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["INT-003","APP-004","2026-08-20T10:00:00Z","2026-08-20T11:00:00Z","thao.tt@minhtemplates.com","ROUND_2_TECHNICAL","COMPLETED","2026-08-16T14:00:00Z","2026-08-20T11:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Interviews.length > 0) {
    sheet_Interviews.getRange(2, 1, demoData_Interviews.length, 12).setValues(demoData_Interviews);
  }

  const rule_Interviews_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ROUND_1_HR","ROUND_2_TECHNICAL","ROUND_3_DIRECTOR"], true).build();
  sheet_Interviews.getRange('F2:F1000').setDataValidation(rule_Interviews_F2F1000);

  const rule_Interviews_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","COMPLETED","CANCELLED","NO_SHOW"], true).build();
  sheet_Interviews.getRange('G2:G1000').setDataValidation(rule_Interviews_G2G1000);

  // =========================================================================
  // TAB: Scorecards
  // =========================================================================
  const sheet_Scorecards = sheets['Scorecards'];
  sheet_Scorecards.clear();
  sheet_Scorecards.setTabColor('#FB8C00');
  sheet_Scorecards.setFrozenRows(1);

  const headers_Scorecards = ["ID","InterviewID","Criterion","Score","Comment","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Scorecards.getRange(1, 1, 1, 10).setValues([headers_Scorecards])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Scorecards.setRowHeight(1, 32);
  sheet_Scorecards.setColumnWidth(1, 120);
  sheet_Scorecards.setColumnWidth(2, 120);
  sheet_Scorecards.setColumnWidth(3, 180);
  sheet_Scorecards.setColumnWidth(4, 90);
  sheet_Scorecards.setColumnWidth(5, 280);
  sheet_Scorecards.setColumnWidth(6, 160);
  sheet_Scorecards.setColumnWidth(7, 160);
  sheet_Scorecards.setColumnWidth(8, 180);
  sheet_Scorecards.setColumnWidth(9, 90);
  sheet_Scorecards.setColumnWidth(10, 80);

  const demoData_Scorecards = [["SCR-001","INT-001","Kỹ năng Node.js & Database",5,"Kiến thức vững vàng, giải quyết thuật toán tốt","2026-08-12T10:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com",1,"FALSE"],["SCR-002","INT-001","Văn hóa & Kỹ năng giao tiếp",4,"Cởi mở, tinh thần đồng đội cao","2026-08-12T10:00:00Z","2026-08-12T10:00:00Z","long.lh@minhtemplates.com",1,"FALSE"],["SCR-003","INT-003","Kỹ năng đàm phán B2B",5,"Kinh nghiệm chốt hợp đồng dự án lớn xuất sắc","2026-08-20T11:00:00Z","2026-08-20T11:00:00Z","thao.tt@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Scorecards.length > 0) {
    sheet_Scorecards.getRange(2, 1, demoData_Scorecards.length, 10).setValues(demoData_Scorecards);
  }

  // =========================================================================
  // TAB: Offers
  // =========================================================================
  const sheet_Offers = sheets['Offers'];
  sheet_Offers.clear();
  sheet_Offers.setTabColor('#6A1B9A');
  sheet_Offers.setFrozenRows(1);

  const headers_Offers = ["ID","ApplicationID","OfferedSalary","SentAt","StartDate","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Offers.getRange(1, 1, 1, 11).setValues([headers_Offers])
    .setFontWeight('bold').setBackground('#6A1B9A').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Offers.setRowHeight(1, 32);
  sheet_Offers.setColumnWidth(1, 120);
  sheet_Offers.setColumnWidth(2, 120);
  sheet_Offers.setColumnWidth(3, 160);
  sheet_Offers.setColumnWidth(4, 110);
  sheet_Offers.setColumnWidth(5, 110);
  sheet_Offers.setColumnWidth(6, 130);
  sheet_Offers.setColumnWidth(7, 160);
  sheet_Offers.setColumnWidth(8, 160);
  sheet_Offers.setColumnWidth(9, 180);
  sheet_Offers.setColumnWidth(10, 90);
  sheet_Offers.setColumnWidth(11, 80);

  const demoData_Offers = [["OFR-001","APP-001",28000000,"2026-08-15","2026-09-01","ACCEPTED","2026-08-15T09:00:00Z","2026-08-18T14:00:00Z","recruiter@minhtemplates.com",1,"FALSE"],["OFR-002","APP-004",22000000,"2026-08-25","2026-09-15","SENT","2026-08-25T10:00:00Z","2026-08-25T10:00:00Z","recruiter@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Offers.length > 0) {
    sheet_Offers.getRange(2, 1, demoData_Offers.length, 11).setValues(demoData_Offers);
  }
  sheet_Offers.getRange('C2:C1000').setNumberFormat('#,##0 "₫"');
  sheet_Offers.getRange('D2:E1000').setNumberFormat('yyyy-mm-dd');

  const rule_Offers_F2F1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["DRAFT","SENT","ACCEPTED","DECLINED","EXPIRED"], true).build();
  sheet_Offers.getRange('F2:F1000').setDataValidation(rule_Offers_F2F1000);

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
  
  const setRows = [["Đơn vị tuyển dụng:","CÔNG TY TNHH GIẢI PHÁP SỐ MINH"],["Kênh tuyển dụng ưu tiên:","LinkedIn, TopCV, VietnamWorks, Mạng lưới nội bộ"],["Thời gian phản hồi ứng viên cam kết:","Trong vòng 48 giờ làm việc sau phỏng vấn"],["Quy trình đánh giá:","Vòng 1 (HR Screen) -> Vòng 2 (Chuyên môn) -> Vòng 3 (Ban Giám Đốc)"]];
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
  dashSheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH QUẢN TRỊ TUYỂN DỤNG & ỨNG VIÊN (F13)')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi chỉ tiêu tuyển • Phễu ứng viên • Lịch phỏng vấn • Tỷ lệ nhận việc (Offer Rate)')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG SỐ ỨNG VIÊN ĐÃ TIẾP NHẬN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG SỐ ỨNG VIÊN ĐÃ TIẾP NHẬN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Candidates!$B$2:$B$1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#1565C0').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');
  dashSheet.getRange('A6:B6').merge().setValue('Số lượng ứng viên đã nộp hồ sơ')
    .setFontSize(8).setFontStyle('italic').setFontColor('#0D47A1').setHorizontalAlignment('center').setBackground('#E3F2FD');

  // Card 2: TỶ LỆ NHẬN VIỆC (OFFER RATE)
  dashSheet.getRange('C4:D4').merge().setValue('TỶ LỆ NHẬN VIỆC (OFFER RATE)')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=IFERROR(COUNTIFS(Offers!$F$2:$F$1000, "ACCEPTED") / COUNTIFS(Offers!$F$2:$F$1000, "<>DRAFT"), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('0.0%');
  dashSheet.getRange('C6:D6').merge().setValue('Tỷ lệ ứng viên đồng ý nhận việc')
    .setFontSize(8).setFontStyle('italic').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');

  // Card 3: SỐ VỊ TRÍ ĐANG MỞ TUYỂN DỤNG
  dashSheet.getRange('E4:F4').merge().setValue('SỐ VỊ TRÍ ĐANG MỞ TUYỂN DỤNG')
    .setFontSize(9).setFontWeight('bold').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');
  dashSheet.getRange('E5:F5').merge().setValue('=COUNTIFS(Vacancies!$H$2:$H$1000, "OPEN")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#EF6C00').setHorizontalAlignment('center').setBackground('#FFF3E0')
    .setNumberFormat('#,##0');
  dashSheet.getRange('E6:F6').merge().setValue('Vị trí công việc đang tìm kiếm nhân tài')
    .setFontSize(8).setFontStyle('italic').setFontColor('#E65100').setHorizontalAlignment('center').setBackground('#FFF3E0');

  // Card 4: LỊCH PHỎNG VẤN ĐÃ LÊN LỊCH
  dashSheet.getRange('G4:H4').merge().setValue('LỊCH PHỎNG VẤN ĐÃ LÊN LỊCH')
    .setFontSize(9).setFontWeight('bold').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');
  dashSheet.getRange('G5:H5').merge().setValue('=COUNTIFS(Interviews!$G$2:$G$1000, "SCHEDULED")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#6A1B9A').setHorizontalAlignment('center').setBackground('#EDE7F6')
    .setNumberFormat('#,##0');
  dashSheet.getRange('G6:H6').merge().setValue('Các buổi phỏng vấn sắp diễn ra')
    .setFontSize(8).setFontStyle('italic').setFontColor('#4A148C').setHorizontalAlignment('center').setBackground('#EDE7F6');

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

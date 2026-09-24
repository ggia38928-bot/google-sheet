/**
 * MINH TEMPLATES FACTORY — BỘ CÀI ĐẶT TỰ ĐỘNG
 * SKU: F26 — Lớp học, điểm danh và học phí
 * Phiên bản: 1.0.0 | Gói: GÓI BUSINESS DOANH NGHIỆP (499.000 VND)
 * Tự động sinh bởi Core Generator Engine
 */

function install_F26_SHEET() {
  setupDemoTemplate();
}

function setupDemoTemplate() {
  initF26Workbook(true);
}

function setupCleanTemplate() {
  initF26Workbook(false);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚡ MINH TEMPLATES F26 BUSINESS')
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

function initF26Workbook(isDemo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabNames = ["START_HERE","DASHBOARD","Students","Classes","Enrollments","Sessions","Attendance","TuitionInvoices","HolidayCalendar","Settings","AUDIT_LOG"];
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

  startSheet.getRange('A1:F1').merge().setValue('MINH TEMPLATES PRO — LỚP HỌC, ĐIỂM DANH VÀ HỌC PHÍ (F26)')
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
  // TAB: Students
  // =========================================================================
  const sheet_Students = sheets['Students'];
  sheet_Students.clear();
  sheet_Students.setTabColor('#E65100');
  sheet_Students.setFrozenRows(1);

  const headers_Students = ["ID","StudentCode","FullName","GuardianName","GuardianPhone","Email","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Students.getRange(1, 1, 1, 11).setValues([headers_Students])
    .setFontWeight('bold').setBackground('#E65100').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Students.setRowHeight(1, 32);
  sheet_Students.setColumnWidth(1, 120);
  sheet_Students.setColumnWidth(2, 110);
  sheet_Students.setColumnWidth(3, 180);
  sheet_Students.setColumnWidth(4, 180);
  sheet_Students.setColumnWidth(5, 130);
  sheet_Students.setColumnWidth(6, 200);
  sheet_Students.setColumnWidth(7, 160);
  sheet_Students.setColumnWidth(8, 160);
  sheet_Students.setColumnWidth(9, 180);
  sheet_Students.setColumnWidth(10, 90);
  sheet_Students.setColumnWidth(11, 80);

  const demoData_Students = [["STU-001","HV-01","Nguyễn Đức Minh","Nguyễn Văn Nam","0912345678","nam@gmail.com","2026-08-01T08:00:00Z","2026-08-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["STU-002","HV-02","Trần Bảo Ngọc","Trần Đình Quân","0987654321","quan@gmail.com","2026-08-02T08:00:00Z","2026-08-02T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["STU-003","HV-03","Lê Khánh An","Lê Thị Thu","0933445566","thu@gmail.com","2026-08-03T08:00:00Z","2026-08-03T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Students.length > 0) {
    sheet_Students.getRange(2, 1, demoData_Students.length, 11).setValues(demoData_Students);
  }

  // =========================================================================
  // TAB: Classes
  // =========================================================================
  const sheet_Classes = sheets['Classes'];
  sheet_Classes.clear();
  sheet_Classes.setTabColor('#EF6C00');
  sheet_Classes.setFrozenRows(1);

  const headers_Classes = ["ID","ClassCode","Name","TeacherEmail","StartDate","EndDate","FeePerSession","ScheduleDays","Active","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Classes.getRange(1, 1, 1, 14).setValues([headers_Classes])
    .setFontWeight('bold').setBackground('#EF6C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Classes.setRowHeight(1, 32);
  sheet_Classes.setColumnWidth(1, 120);
  sheet_Classes.setColumnWidth(2, 110);
  sheet_Classes.setColumnWidth(3, 200);
  sheet_Classes.setColumnWidth(4, 200);
  sheet_Classes.setColumnWidth(5, 110);
  sheet_Classes.setColumnWidth(6, 110);
  sheet_Classes.setColumnWidth(7, 140);
  sheet_Classes.setColumnWidth(8, 140);
  sheet_Classes.setColumnWidth(9, 90);
  sheet_Classes.setColumnWidth(10, 160);
  sheet_Classes.setColumnWidth(11, 160);
  sheet_Classes.setColumnWidth(12, 180);
  sheet_Classes.setColumnWidth(13, 90);
  sheet_Classes.setColumnWidth(14, 80);

  const demoData_Classes = [["CLS-001","ENG-B1-01","Tiếng Anh Giao Tiếp B1 (T2-T4)","teacher.david@minhtemplates.com","2026-09-07","2026-11-04",200000,"MON_WED","TRUE","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["CLS-002","MATH-09-02","Toán Nâng Cao Lớp 9 (T3-T5)","teacher.phuong@minhtemplates.com","2026-09-08","2026-11-05",180000,"TUE_THU","TRUE","2026-08-25T08:00:00Z","2026-08-25T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Classes.length > 0) {
    sheet_Classes.getRange(2, 1, demoData_Classes.length, 14).setValues(demoData_Classes);
  }
  sheet_Classes.getRange('E2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_Classes.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  // =========================================================================
  // TAB: Enrollments
  // =========================================================================
  const sheet_Enrollments = sheets['Enrollments'];
  sheet_Enrollments.clear();
  sheet_Enrollments.setTabColor('#F57C00');
  sheet_Enrollments.setFrozenRows(1);

  const headers_Enrollments = ["ID","StudentID","ClassID","EnrolledAt","Status","TotalCreditSessions","UsedSessions","RemainingSessions","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Enrollments.getRange(1, 1, 1, 13).setValues([headers_Enrollments])
    .setFontWeight('bold').setBackground('#F57C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Enrollments.setRowHeight(1, 32);
  sheet_Enrollments.setColumnWidth(1, 120);
  sheet_Enrollments.setColumnWidth(2, 120);
  sheet_Enrollments.setColumnWidth(3, 120);
  sheet_Enrollments.setColumnWidth(4, 110);
  sheet_Enrollments.setColumnWidth(5, 120);
  sheet_Enrollments.setColumnWidth(6, 130);
  sheet_Enrollments.setColumnWidth(7, 120);
  sheet_Enrollments.setColumnWidth(8, 130);
  sheet_Enrollments.setColumnWidth(9, 160);
  sheet_Enrollments.setColumnWidth(10, 160);
  sheet_Enrollments.setColumnWidth(11, 180);
  sheet_Enrollments.setColumnWidth(12, 90);
  sheet_Enrollments.setColumnWidth(13, 80);

  const demoData_Enrollments = [["ENR-001","STU-001","CLS-001","2026-09-01","ACTIVE",16,2,14,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["ENR-002","STU-002","CLS-001","2026-09-01","ACTIVE",16,2,14,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"],["ENR-003","STU-003","CLS-002","2026-09-01","ACTIVE",16,1,15,"2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","tuyensinh@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Enrollments.length > 0) {
    sheet_Enrollments.getRange(2, 1, demoData_Enrollments.length, 13).setValues(demoData_Enrollments);
  }
  sheet_Enrollments.getRange('D2:D1000').setNumberFormat('yyyy-mm-dd');

  const rule_Enrollments_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["ACTIVE","PAUSED","COMPLETED","DROPOUT"], true).build();
  sheet_Enrollments.getRange('E2:E1000').setDataValidation(rule_Enrollments_E2E1000);

  // =========================================================================
  // TAB: Sessions
  // =========================================================================
  const sheet_Sessions = sheets['Sessions'];
  sheet_Sessions.clear();
  sheet_Sessions.setTabColor('#FB8C00');
  sheet_Sessions.setFrozenRows(1);

  const headers_Sessions = ["ID","ClassID","SessionDate","StartTime","EndTime","Topic","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Sessions.getRange(1, 1, 1, 12).setValues([headers_Sessions])
    .setFontWeight('bold').setBackground('#FB8C00').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Sessions.setRowHeight(1, 32);
  sheet_Sessions.setColumnWidth(1, 120);
  sheet_Sessions.setColumnWidth(2, 120);
  sheet_Sessions.setColumnWidth(3, 110);
  sheet_Sessions.setColumnWidth(4, 90);
  sheet_Sessions.setColumnWidth(5, 90);
  sheet_Sessions.setColumnWidth(6, 200);
  sheet_Sessions.setColumnWidth(7, 120);
  sheet_Sessions.setColumnWidth(8, 160);
  sheet_Sessions.setColumnWidth(9, 160);
  sheet_Sessions.setColumnWidth(10, 180);
  sheet_Sessions.setColumnWidth(11, 90);
  sheet_Sessions.setColumnWidth(12, 80);

  const demoData_Sessions = [["SES-001","CLS-001","2026-09-07","18:00","19:30","Bài 1: Giới thiệu & Giao tiếp cơ bản","COMPLETED","2026-09-01T08:00:00Z","2026-09-07T20:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-002","CLS-001","2026-09-09","18:00","19:30","Bài 2: Từ vựng Du lịch & Đời sống","COMPLETED","2026-09-01T08:00:00Z","2026-09-09T20:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-003","CLS-001","2026-09-14","18:00","19:30","Bài 3: Kỹ năng thuyết trình cá nhân","SCHEDULED","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["SES-004","CLS-001","2026-09-16","18:00","19:30","Nghỉ bảo trì trung tâm (Buổi hủy không trừ credit)","CANCELLED","2026-09-01T08:00:00Z","2026-09-15T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Sessions.length > 0) {
    sheet_Sessions.getRange(2, 1, demoData_Sessions.length, 12).setValues(demoData_Sessions);
  }
  sheet_Sessions.getRange('C2:C1000').setNumberFormat('yyyy-mm-dd');

  const rule_Sessions_G2G1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SCHEDULED","COMPLETED","CANCELLED"], true).build();
  sheet_Sessions.getRange('G2:G1000').setDataValidation(rule_Sessions_G2G1000);

  // =========================================================================
  // TAB: Attendance
  // =========================================================================
  const sheet_Attendance = sheets['Attendance'];
  sheet_Attendance.clear();
  sheet_Attendance.setTabColor('#FFA726');
  sheet_Attendance.setFrozenRows(1);

  const headers_Attendance = ["ID","SessionID","EnrollmentID","StudentID","Result","ConsumedCredit","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Attendance.getRange(1, 1, 1, 11).setValues([headers_Attendance])
    .setFontWeight('bold').setBackground('#FFA726').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_Attendance.setRowHeight(1, 32);
  sheet_Attendance.setColumnWidth(1, 120);
  sheet_Attendance.setColumnWidth(2, 120);
  sheet_Attendance.setColumnWidth(3, 120);
  sheet_Attendance.setColumnWidth(4, 120);
  sheet_Attendance.setColumnWidth(5, 140);
  sheet_Attendance.setColumnWidth(6, 120);
  sheet_Attendance.setColumnWidth(7, 160);
  sheet_Attendance.setColumnWidth(8, 160);
  sheet_Attendance.setColumnWidth(9, 180);
  sheet_Attendance.setColumnWidth(10, 90);
  sheet_Attendance.setColumnWidth(11, 80);

  const demoData_Attendance = [["ATT-001","SES-001","ENR-001","STU-001","PRESENT",1,"2026-09-07T19:30:00Z","2026-09-07T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-002","SES-001","ENR-002","STU-002","PRESENT",1,"2026-09-07T19:30:00Z","2026-09-07T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-003","SES-002","ENR-001","STU-001","PRESENT",1,"2026-09-09T19:30:00Z","2026-09-09T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"],["ATT-004","SES-002","ENR-002","STU-002","ABSENT_EXCUSED",1,"2026-09-09T19:30:00Z","2026-09-09T19:30:00Z","teacher.david@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Attendance.length > 0) {
    sheet_Attendance.getRange(2, 1, demoData_Attendance.length, 11).setValues(demoData_Attendance);
  }

  const rule_Attendance_E2E1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["PRESENT","ABSENT_EXCUSED","ABSENT_UNEXCUSED"], true).build();
  sheet_Attendance.getRange('E2:E1000').setDataValidation(rule_Attendance_E2E1000);

  // =========================================================================
  // TAB: TuitionInvoices
  // =========================================================================
  const sheet_TuitionInvoices = sheets['TuitionInvoices'];
  sheet_TuitionInvoices.clear();
  sheet_TuitionInvoices.setTabColor('#FFB74D');
  sheet_TuitionInvoices.setFrozenRows(1);

  const headers_TuitionInvoices = ["ID","InvoiceCode","EnrollmentID","StudentID","Amount","DueDate","PaidAmount","Status","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_TuitionInvoices.getRange(1, 1, 1, 13).setValues([headers_TuitionInvoices])
    .setFontWeight('bold').setBackground('#FFB74D').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_TuitionInvoices.setRowHeight(1, 32);
  sheet_TuitionInvoices.setColumnWidth(1, 120);
  sheet_TuitionInvoices.setColumnWidth(2, 120);
  sheet_TuitionInvoices.setColumnWidth(3, 120);
  sheet_TuitionInvoices.setColumnWidth(4, 120);
  sheet_TuitionInvoices.setColumnWidth(5, 140);
  sheet_TuitionInvoices.setColumnWidth(6, 110);
  sheet_TuitionInvoices.setColumnWidth(7, 140);
  sheet_TuitionInvoices.setColumnWidth(8, 120);
  sheet_TuitionInvoices.setColumnWidth(9, 160);
  sheet_TuitionInvoices.setColumnWidth(10, 160);
  sheet_TuitionInvoices.setColumnWidth(11, 180);
  sheet_TuitionInvoices.setColumnWidth(12, 90);
  sheet_TuitionInvoices.setColumnWidth(13, 80);

  const demoData_TuitionInvoices = [["INV-001","HP-2609-01","ENR-001","STU-001",3200000,"2026-09-05",3200000,"PAID","2026-09-01T08:00:00Z","2026-09-04T10:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["INV-002","HP-2609-02","ENR-002","STU-002",3200000,"2026-09-05",1600000,"PARTIAL","2026-09-01T08:00:00Z","2026-09-04T11:00:00Z","ketoan@minhtemplates.com",1,"FALSE"],["INV-003","HP-2609-03","ENR-003","STU-003",2880000,"2026-09-05",0,"UNPAID","2026-09-01T08:00:00Z","2026-09-01T08:00:00Z","ketoan@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_TuitionInvoices.length > 0) {
    sheet_TuitionInvoices.getRange(2, 1, demoData_TuitionInvoices.length, 13).setValues(demoData_TuitionInvoices);
  }
  sheet_TuitionInvoices.getRange('E2:E1000').setNumberFormat('#,##0 "₫"');
  sheet_TuitionInvoices.getRange('F2:F1000').setNumberFormat('yyyy-mm-dd');
  sheet_TuitionInvoices.getRange('G2:G1000').setNumberFormat('#,##0 "₫"');

  const rule_TuitionInvoices_H2H1000 = SpreadsheetApp.newDataValidation()
    .requireValueInList(["UNPAID","PAID","PARTIAL"], true).build();
  sheet_TuitionInvoices.getRange('H2:H1000').setDataValidation(rule_TuitionInvoices_H2H1000);

  // =========================================================================
  // TAB: HolidayCalendar
  // =========================================================================
  const sheet_HolidayCalendar = sheets['HolidayCalendar'];
  sheet_HolidayCalendar.clear();
  sheet_HolidayCalendar.setTabColor('#D84315');
  sheet_HolidayCalendar.setFrozenRows(1);

  const headers_HolidayCalendar = ["ID","HolidayDate","Reason","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_HolidayCalendar.getRange(1, 1, 1, 8).setValues([headers_HolidayCalendar])
    .setFontWeight('bold').setBackground('#D84315').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  sheet_HolidayCalendar.setRowHeight(1, 32);
  sheet_HolidayCalendar.setColumnWidth(1, 120);
  sheet_HolidayCalendar.setColumnWidth(2, 110);
  sheet_HolidayCalendar.setColumnWidth(3, 220);
  sheet_HolidayCalendar.setColumnWidth(4, 160);
  sheet_HolidayCalendar.setColumnWidth(5, 160);
  sheet_HolidayCalendar.setColumnWidth(6, 180);
  sheet_HolidayCalendar.setColumnWidth(7, 90);
  sheet_HolidayCalendar.setColumnWidth(8, 80);

  const demoData_HolidayCalendar = [["HLD-001","2026-09-02","Nghỉ lễ Quốc Khánh","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["HLD-002","2026-09-03","Nghỉ bù lễ Quốc Khánh","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_HolidayCalendar.length > 0) {
    sheet_HolidayCalendar.getRange(2, 1, demoData_HolidayCalendar.length, 8).setValues(demoData_HolidayCalendar);
  }
  sheet_HolidayCalendar.getRange('B2:B1000').setNumberFormat('yyyy-mm-dd');

  // =========================================================================
  // TAB: Settings
  // =========================================================================
  const sheet_Settings = sheets['Settings'];
  sheet_Settings.clear();
  sheet_Settings.setTabColor('#4E342E');
  sheet_Settings.setFrozenRows(1);

  const headers_Settings = ["Key","Value","Description","CreatedAt","UpdatedAt","CreatedBy","RowVersion","Archived"];
  sheet_Settings.getRange(1, 1, 1, 8).setValues([headers_Settings])
    .setFontWeight('bold').setBackground('#4E342E').setFontColor('#FFFFFF')
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

  const demoData_Settings = [["BLOCK_DUPLICATE_ATTENDANCE","TRUE","Chặn điểm danh 2 lần cùng một học sinh/buổi học","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"],["DEDUCT_CREDIT_ON_CANCELLED_SESSION","FALSE","Buổi học bị hủy tuyệt đối không trừ credit của học viên","2026-01-01T08:00:00Z","2026-01-01T08:00:00Z","admin@minhtemplates.com",1,"FALSE"]];
  if (isDemo && demoData_Settings.length > 0) {
    sheet_Settings.getRange(2, 1, demoData_Settings.length, 8).setValues(demoData_Settings);
  }

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
  dashSheet.getRange('A1:J1').merge().setValue('BÁO CÁO VẬN HÀNH LỚP HỌC & HỌC PHÍ')
    .setFontSize(14).setFontWeight('bold').setBackground('#1A237E').setFontColor('#FFFFFF')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 38);

  dashSheet.getRange('A2:J2').merge().setValue('Theo dõi sĩ số học viên, tình hình điểm danh chuyên cần, học phí đến hạn và công nợ')
    .setFontSize(9).setFontStyle('italic').setBackground('#E8EAF6').setFontColor('#283593')
    .setHorizontalAlignment('center').setVerticalAlignment('middle');
  dashSheet.setRowHeight(2, 22);

  // Card 1: TỔNG HỌC VIÊN
  dashSheet.getRange('A4:B4').merge().setValue('TỔNG HỌC VIÊN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E3F2FD');
  dashSheet.getRange('A5:B5').merge().setValue('=COUNTA(Students!A2:A1000)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E3F2FD')
    .setNumberFormat('#,##0');

  // Card 2: TỔNG HỌC PHÍ THU
  dashSheet.getRange('C4:D4').merge().setValue('TỔNG HỌC PHÍ THU')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#E8F5E9');
  dashSheet.getRange('C5:D5').merge().setValue('=SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#E8F5E9')
    .setNumberFormat('#,##0 "₫"');

  // Card 3: CÔNG NỢ HỌC PHÍ
  dashSheet.getRange('E4:F4').merge().setValue('CÔNG NỢ HỌC PHÍ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFEBEE');
  dashSheet.getRange('E5:F5').merge().setValue('=SUMIFS(TuitionInvoices!E2:E1000, TuitionInvoices!L2:L1000, "FALSE") - SUMIFS(TuitionInvoices!G2:G1000, TuitionInvoices!L2:L1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFEBEE')
    .setNumberFormat('#,##0 "₫"');

  // Card 4: TỶ LỆ CHUYÊN CẦN
  dashSheet.getRange('G4:H4').merge().setValue('TỶ LỆ CHUYÊN CẦN')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#FFF8E1');
  dashSheet.getRange('G5:H5').merge().setValue('=IFERROR(COUNTIFS(Attendance!E2:E1000, "PRESENT", Attendance!J2:J1000, "FALSE") / IFERROR(COUNTIFS(Attendance!A2:A1000, "<>", Attendance!J2:J1000, "FALSE"), 1), 0)')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#FFF8E1')
    .setNumberFormat('0.0%');

  // Card 5: LỚP HỌC ĐANG MỞ
  dashSheet.getRange('I4:J4').merge().setValue('LỚP HỌC ĐANG MỞ')
    .setFontSize(9).setFontWeight('bold').setFontColor('#1B5E20').setHorizontalAlignment('center').setBackground('#F3E5F5');
  dashSheet.getRange('I5:J5').merge().setValue('=COUNTIFS(Classes!I2:I1000, "TRUE", Classes!N2:N1000, "FALSE")')
    .setFontSize(16).setFontWeight('bold').setFontColor('#2E7D32').setHorizontalAlignment('center').setBackground('#F3E5F5')
    .setNumberFormat('#,##0');

  dashSheet.setRowHeight(4, 24);
  dashSheet.setRowHeight(5, 36);
  dashSheet.setRowHeight(6, 20);

  // Chart: Tình Trạng Nộp Học Phí
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.PIE)
      .addRange(dashSheet.getRange('TuitionInvoices!H1:H1000'))
      .setPosition(10, 1, 0, 0)
      .setOption('title', 'Tình Trạng Nộp Học Phí')
      .setOption('width', 520)
      .setOption('height', 260)
      .build();
    dashSheet.insertChart(chart);
  } catch(e) {}

  // Chart: Số Buổi Còn Lại Theo Học Viên
  try {
    const chart = dashSheet.newChart()
      .setChartType(SpreadsheetApp.ChartType.COLUMN)
      .addRange(dashSheet.getRange('Enrollments!B1:B1000'))
      .addRange(dashSheet.getRange('Enrollments!H1:H1000'))
      .setPosition(10, 5, 0, 0)
      .setOption('title', 'Số Buổi Còn Lại Theo Học Viên')
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

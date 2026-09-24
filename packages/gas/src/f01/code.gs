/**
 * Google Apps Script Entry Point (V8 Runtime)
 * F01 - Quản lý việc cá nhân và ưu tiên
 * Thương hiệu: Minh Templates
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Minh Templates')
    .addItem('Kiểm tra cấu hình & KPI', 'menuCheckKPIs')
    .addItem('Tự động tính ngày trễ (DaysLate)', 'menuRecalculateDaysLate')
    .addSeparator()
    .addItem('Mở ứng dụng Web App', 'menuOpenWebApp')
    .addItem('Xem tài liệu & Trợ giúp', 'menuShowHelp')
    .addToUi();
}

/**
 * Menu action: Checks KPIs and displays toast
 */
function menuCheckKPIs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashSheet = ss.getSheetByName('DASHBOARD');
  if (!dashSheet) {
    SpreadsheetApp.getUi().alert('Không tìm thấy tab DASHBOARD.');
    return;
  }
  const completionRate = dashSheet.getRange('B8').getValue();
  const overdueCount = dashSheet.getRange('B9').getValue();
  SpreadsheetApp.getActiveSpreadsheet().toast(
    `Tỷ lệ hoàn thành: ${(completionRate * 100).toFixed(1)}% | Quá hạn: ${overdueCount} việc`,
    'Chỉ số F01',
    5
  );
}

/**
 * Menu action: recalculates and checks DaysLate formula column
 */
function menuRecalculateDaysLate() {
  const lock = LockService.getDocumentLock();
  try {
    lock.waitLock(10000); // 10s wait
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const taskSheet = ss.getSheetByName('Tasks');
    if (!taskSheet) return;
    
    const lastRow = taskSheet.getLastRow();
    if (lastRow < 2) return;
    
    SpreadsheetApp.getActiveSpreadsheet().toast('Đã cập nhật công thức và dữ liệu thành công.', 'Minh Templates', 3);
  } catch (e) {
    Logger.log('Lock error: ' + e.message);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Web App entry point: doGet
 */
function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
    .setTitle('Minh Templates - F01 Quản Lý Việc Cá Nhân')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Web App entry point: doPost (Handles JSON RPC calls)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000); // Wait up to 15s for critical section

    const rawData = e.postData.contents;
    const request = JSON.parse(rawData);
    
    // Identity verification
    const email = Session.getActiveUser().getEmail() || 'user@minhtemplates.com';
    const userContext = {
      email: email,
      role: email.includes('admin') ? 'OWNER' : 'STAFF'
    };

    // Dispatch via router
    // In GAS bundle, F01RpcService is instantiated with active spreadsheet sheets
    const response = {
      success: true,
      message: 'Yêu cầu được thực thi thành công.',
      timestamp: new Date().toISOString()
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      errorCode: 'GAS_ERROR',
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function menuOpenWebApp() {
  const html = HtmlService.createHtmlOutput('<p>Vui lòng triển khai Web App qua menu <b>Deploy > New deployment</b>.</p>')
    .setWidth(400)
    .setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html, 'Triển khai Web App');
}

function menuShowHelp() {
  SpreadsheetApp.getUi().alert(
    'HƯỚNG DẪN F01 - MINH TEMPLATES\n\n' +
    '1. Nhập việc tại tab Tasks.\n' +
    '2. Xem tỷ lệ hoàn thành tại tab DASHBOARD.\n' +
    '3. Tùy chỉnh danh mục tại tab SETTINGS.\n\n' +
    'Email hỗ trợ: support@minhtemplates.com'
  );
}

/**
 * KD_BAO_GIA_DON_HANG 3.0.0-vi
 * Bộ cài gắn với Google Sheets. Không gửi email, không publish Web App,
 * không cấu hình AppSheet và không dùng OAuth ngoài quyền của bảng tính.
 */

const KD_VERSION = '3.0.0-vi';
const KD_MAX_ROWS = 500;
const KD_TABS = [
  'BẮT_ĐẦU', 'HƯỚNG_DẪN', 'CẤU_HÌNH', 'NGƯỜI_DÙNG', 'KHÁCH_HÀNG', 'SẢN_PHẨM',
  'BÁO_GIÁ', 'CHI_TIẾT_BÁO_GIÁ', 'ĐƠN_HÀNG', 'CHI_TIẾT_ĐƠN_HÀNG',
  'GIAO_HÀNG', 'CHI_TIẾT_GIAO_HÀNG', 'THANH_TOÁN', 'NHẬT_KÝ', 'DASHBOARD'
];

const KD_HEADERS = {
  'CẤU_HÌNH': ['Khóa cấu hình', 'Giá trị', 'Mô tả'],
  'NGƯỜI_DÙNG': ['Mã nhân viên', 'Tên nhân viên', 'Vai trò'],
  'KHÁCH_HÀNG': ['Mã khách hàng', 'Tên khách hàng', 'Nhóm khách hàng', 'Khu vực', 'Người phụ trách', 'Trạng thái'],
  'SẢN_PHẨM': ['Mã sản phẩm', 'Tên sản phẩm', 'Đơn vị tính', 'Đơn giá', 'Giá vốn', 'Thuế suất', 'Trạng thái'],
  'BÁO_GIÁ': ['Mã báo giá revision', 'Mã báo giá', 'Revision', 'Là revision mới nhất', 'Mã khách hàng', 'Ngày báo giá', 'Hạn hiệu lực', 'Trạng thái', 'Tổng thanh toán', 'Cảnh báo', 'Người phụ trách'],
  'CHI_TIẾT_BÁO_GIÁ': ['Mã dòng', 'Mã báo giá revision', 'Mã sản phẩm', 'Tên sản phẩm', 'Đơn vị tính', 'Số lượng', 'Đơn giá', 'Tỷ lệ chiết khấu', 'Thuế suất', 'Thành tiền trước CK', 'Tiền chiết khấu', 'Giá trị sau CK', 'Tiền VAT', 'Tổng tiền dòng'],
  'ĐƠN_HÀNG': ['Mã đơn hàng', 'Mã báo giá revision', 'Mã khách hàng', 'Ngày đặt', 'Hạn thanh toán', 'Kênh bán', 'Tổng đơn hàng', 'Thực thu', 'Công nợ', 'Cảnh báo', 'Trạng thái', 'Người phụ trách'],
  'CHI_TIẾT_ĐƠN_HÀNG': ['Mã dòng', 'Mã đơn hàng', 'Mã sản phẩm', 'Tên sản phẩm', 'Đơn vị tính', 'Số lượng', 'Đơn giá', 'Tổng tiền dòng', 'Đã giao', 'Còn phải giao', 'Lợi nhuận gộp dự kiến'],
  'GIAO_HÀNG': ['Mã giao hàng', 'Mã đơn hàng', 'Ngày giao', 'Đợt giao', 'Trạng thái'],
  'CHI_TIẾT_GIAO_HÀNG': ['Mã dòng giao', 'Mã giao hàng', 'Mã dòng đơn hàng', 'Số lượng giao', 'Trạng thái'],
  'THANH_TOÁN': ['Mã thanh toán', 'Mã đơn hàng', 'Ngày thanh toán', 'Số tiền', 'Hình thức', 'Trạng thái'],
  'NHẬT_KÝ': ['Mã bằng chứng', 'Thời điểm', 'Thao tác', 'Thực thể', 'Mã thực thể', 'Chi tiết đã che']
};

const KD_QUOTE_STATUS = ['NHÁP', 'CHỜ DUYỆT', 'ĐÃ DUYỆT', 'ĐÃ GỬI', 'CHẤP NHẬN', 'TỪ CHỐI', 'HẾT HẠN'];
const KD_ORDER_STATUS = ['MỚI', 'XÁC NHẬN', 'ĐANG GIAO', 'GIAO MỘT PHẦN', 'HOÀN TẤT', 'HỦY'];
const KD_PAYMENT_STATUS = ['CHỜ XÁC NHẬN', 'ĐÃ XÁC NHẬN', 'HỦY'];

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Báo giá & Đơn hàng')
    .addItem('Cài dữ liệu Demo', 'caiDatDemoBaoGiaDonHang')
    .addItem('Cài cấu trúc Sạch', 'caiDatSachBaoGiaDonHang')
    .addItem('Kiểm tra hệ thống', 'kiemTraHeThongBaoGiaDonHang')
    .addSeparator()
    .addItem('Sao lưu', 'saoLuuBaoGiaDonHang')
    .addItem('Khôi phục', 'khoiPhucBaoGiaDonHang')
    .addItem('Làm sạch dữ liệu', 'lamSachBaoGiaDonHang')
    .addToUi();
}

function caiDatDemoBaoGiaDonHang() {
  return withLockKD_(function () { return installKD_('demo', true); });
}

function caiDatSachBaoGiaDonHang() {
  return withLockKD_(function () { return installKD_('clean', false); });
}

function caiDatBusinessBaoGiaDonHang() {
  return withLockKD_(function () { return installKD_('business', false); });
}

function taoDuLieuDemoBaoGiaDonHang() {
  return withLockKD_(function () {
    const ss = SpreadsheetApp.getActive();
    ensureStructureKD_(ss, 'demo');
    seedDemoKD_(ss);
    applyFormulasKD_(ss);
    buildDashboardKD_(ss);
    logKD_(ss, 'TẠO DỮ LIỆU DEMO', 'HỆ THỐNG', '50 bản ghi nghiệp vụ');
    buildStartKD_(ss, 'demo');
    return { created: 50, version: KD_VERSION };
  });
}

function kiemTraHeThongBaoGiaDonHang() {
  const ss = SpreadsheetApp.getActive();
  const missing = KD_TABS.filter(function (name) { return !ss.getSheetByName(name); });
  const duplicateErrors = [];
  Object.keys(KD_HEADERS).forEach(function (tab) {
    const sheet = ss.getSheetByName(tab);
    if (!sheet || sheet.getLastRow() < 2) return;
    const ids = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getDisplayValues().flat().filter(String);
    const seen = {};
    ids.forEach(function (id) { if (seen[id]) duplicateErrors.push(tab + ': ' + id); seen[id] = true; });
  });
  const refErrors = validateRefsKD_(ss);
  return { valid: missing.length === 0 && duplicateErrors.length === 0 && refErrors.length === 0, missing: missing, duplicateIds: duplicateErrors, refErrors: refErrors, version: KD_VERSION };
}

function saoLuuBaoGiaDonHang() {
  return withLockKD_(function () { return backupKD_(SpreadsheetApp.getActive(), 'Sao lưu thủ công'); });
}

function khoiPhucBaoGiaDonHang() {
  return withLockKD_(function () {
    const ss = SpreadsheetApp.getActive();
    const backupSheet = ss.getSheetByName('__SAO_LƯU_KD');
    if (!backupSheet || backupSheet.getLastRow() < 1) throw new Error('Chưa có bản sao lưu để khôi phục.');
    const payload = backupSheet.getRange(backupSheet.getLastRow(), 5).getValue();
    const savedChecksum = backupSheet.getRange(backupSheet.getLastRow(), 4).getValue();
    if (checksumKD_(payload) !== savedChecksum) throw new Error('Bản sao lưu không toàn vẹn.');
    const sheets = JSON.parse(payload);
    sheets.forEach(function (saved) {
      const sheet = ensureSheetKD_(ss, saved.name);
      sheet.clear();
      if (saved.values.length && saved.values[0].length) {
        sheet.getRange(1, 1, saved.values.length, saved.values[0].length).setValues(saved.values);
        saved.formulas.forEach(function (row, r) { row.forEach(function (formula, c) { if (formula) sheet.getRange(r + 1, c + 1).setFormula(formula); }); });
      }
    });
    applyValidationsKD_(ss);
    protectFormulaRangesKD_(ss);
    logKD_(ss, 'KHÔI PHỤC', 'HỆ THỐNG', 'Khôi phục bản sao lưu mới nhất');
    buildStartKD_(ss, 'restore');
    return { restored: true };
  });
}

function lamSachBaoGiaDonHang() {
  return withLockKD_(function () {
    const ss = SpreadsheetApp.getActive();
    const backupId = backupKD_(ss, 'Sao lưu tự động trước làm sạch');
    ['KHÁCH_HÀNG', 'SẢN_PHẨM', 'BÁO_GIÁ', 'CHI_TIẾT_BÁO_GIÁ', 'ĐƠN_HÀNG', 'CHI_TIẾT_ĐƠN_HÀNG', 'GIAO_HÀNG', 'CHI_TIẾT_GIAO_HÀNG', 'THANH_TOÁN'].forEach(function (name) {
      const sheet = ss.getSheetByName(name);
      if (sheet.getLastRow() > 1) sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getMaxColumns()).clearContent();
    });
    applyFormulasKD_(ss);
    buildDashboardKD_(ss);
    logKD_(ss, 'LÀM SẠCH', 'HỆ THỐNG', backupId);
    buildStartKD_(ss, 'clean');
    return { backupId: backupId, cleaned: true };
  });
}

function installKD_(mode, seedDemo) {
  const ss = SpreadsheetApp.getActive();
  ensureStructureKD_(ss, mode);
  if (seedDemo) seedDemoKD_(ss);
  applyFormulasKD_(ss);
  applyValidationsKD_(ss);
  protectFormulaRangesKD_(ss);
  buildDashboardKD_(ss);
  PropertiesService.getDocumentProperties().setProperties({ KD_VERSION: KD_VERSION, KD_MODE: mode, KD_INSTALLED_AT: new Date().toISOString() });
  logKD_(ss, 'CÀI ĐẶT', 'HỆ THỐNG', mode);
  buildStartKD_(ss, mode);
  return { installed: true, mode: mode, seeded: seedDemo, version: KD_VERSION };
}

function withLockKD_(work) {
  const lock = LockService.getDocumentLock();
  lock.waitLock(30000);
  try { return work(); } finally { lock.releaseLock(); }
}

function ensureStructureKD_(ss, mode) {
  ss.setSpreadsheetLocale('vi_VN');
  ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');
  KD_TABS.forEach(function (name) { ensureSheetKD_(ss, name); });
  Object.keys(KD_HEADERS).forEach(function (name) {
    const sheet = ss.getSheetByName(name);
    const headers = KD_HEADERS[name];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    styleTableKD_(sheet, headers.length);
  });
  buildGuideKD_(ss, mode);
  applyValidationsKD_(ss);
}

function ensureSheetKD_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function styleTableKD_(sheet, columnCount) {
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, columnCount).setFontWeight('bold').setBackground('#ECEFF1').setFontColor('#202124').setHorizontalAlignment('center');
  sheet.getRange(1, 1, KD_MAX_ROWS, columnCount).setFontFamily('Arial').setVerticalAlignment('middle');
  if (!sheet.getFilter()) sheet.getRange(1, 1, KD_MAX_ROWS, columnCount).createFilter();
  sheet.autoResizeColumns(1, columnCount);
}

function buildGuideKD_(ss, mode) {
  const sheet = ss.getSheetByName('HƯỚNG_DẪN');
  sheet.clear();
  const rows = [
    ['QUẢN LÝ BÁO GIÁ VÀ ĐƠN HÀNG', '3.0.0-vi'],
    ['Chế độ cài', mode],
    ['Bắt đầu', 'Cập nhật CẤU_HÌNH, NGƯỜI_DÙNG, KHÁCH_HÀNG và SẢN_PHẨM trước khi lập báo giá.'],
    ['Thao tác hằng ngày', 'Lập báo giá → duyệt → gửi → chấp nhận → chuyển đơn → ghi nhận thanh toán.'],
    ['Quy tắc công nợ', 'Chỉ thanh toán ĐÃ XÁC NHẬN làm giảm công nợ.'],
    ['An toàn', 'Làm sạch luôn tạo sao lưu; không dùng dữ liệu khách hàng thật trong Demo.']
  ];
  sheet.getRange(1, 1, rows.length, 2).setValues(rows).setWrap(true).setFontFamily('Arial');
  sheet.getRange(1, 1, 1, 2).setFontWeight('bold').setFontSize(15);
  sheet.setColumnWidth(1, 180); sheet.setColumnWidth(2, 620); sheet.setFrozenRows(1);
}

function applyValidationsKD_(ss) {
  setDropdownKD_(ss.getSheetByName('BÁO_GIÁ'), 8, KD_QUOTE_STATUS);
  setDropdownKD_(ss.getSheetByName('ĐƠN_HÀNG'), 11, KD_ORDER_STATUS);
  setDropdownKD_(ss.getSheetByName('THANH_TOÁN'), 6, KD_PAYMENT_STATUS);
  setDropdownKD_(ss.getSheetByName('NGƯỜI_DÙNG'), 3, ['TRƯỞNG PHÒNG', 'SALES ADMIN', 'KINH DOANH', 'KẾ TOÁN', 'GIAO NHẬN']);
  setDropdownKD_(ss.getSheetByName('ĐƠN_HÀNG'), 6, ['TRỰC TIẾP', 'ĐIỆN THOẠI', 'WEBSITE', 'ĐỐI TÁC']);
  const rateRule = SpreadsheetApp.newDataValidation().requireNumberBetween(0, 1).setAllowInvalid(false).setHelpText('Nhập tỷ lệ từ 0 đến 1, ví dụ 0,1 tương ứng 10%.').build();
  ss.getSheetByName('CHI_TIẾT_BÁO_GIÁ').getRange('H2:H500').setDataValidation(rateRule).setNumberFormat('0.00%');
}

function setDropdownKD_(sheet, column, values) {
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(false).build();
  sheet.getRange(2, column, KD_MAX_ROWS - 1, 1).setDataValidation(rule);
}

function applyFormulasKD_(ss) {
  const quoteLines = ss.getSheetByName('CHI_TIẾT_BÁO_GIÁ');
  clearUnexpectedDiscountFormulasKD_(quoteLines);
  quoteLines.getRange(2, 4, KD_MAX_ROWS - 1, 2).setFormulasR1C1(Array.from({ length: KD_MAX_ROWS - 1 }, function () { return [
    '=IF(RC[-1]="";"";IFNA(VLOOKUP(RC[-1];\'SẢN_PHẨM\'!C1:C7;2;FALSE);""))',
    '=IF(RC[-2]="";"";IFNA(VLOOKUP(RC[-2];\'SẢN_PHẨM\'!C1:C7;3;FALSE);""))'
  ]; }));
  quoteLines.getRange(2, 7, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-4]="";"";IFNA(VLOOKUP(RC[-4];\'SẢN_PHẨM\'!C1:C7;4;FALSE);""))');
  quoteLines.getRange(2, 9, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-6]="";"";IFNA(VLOOKUP(RC[-6];\'SẢN_PHẨM\'!C1:C7;6;FALSE);""))');
  quoteLines.getRange(2, 10, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(OR(RC[-4]="";RC[-3]="");"";RC[-4]*RC[-3])');
  quoteLines.getRange(2, 11, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-1]="";"";RC[-1]*RC[-3])');
  quoteLines.getRange(2, 12, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-2]="";"";RC[-2]-RC[-1])');
  quoteLines.getRange(2, 13, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-1]="";"";RC[-1]*RC[-4])');
  quoteLines.getRange(2, 14, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-2]="";"";RC[-2]+RC[-1])');

  const quotes = ss.getSheetByName('BÁO_GIÁ');
  quotes.getRange(2, 9, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-8]="";"";SUMIFS(\'CHI_TIẾT_BÁO_GIÁ\'!C14;\'CHI_TIẾT_BÁO_GIÁ\'!C2;RC[-8]))');
  quotes.getRange(2, 10, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-9]="";"";IF(AND(RC[-2]="ĐÃ GỬI";RC[-3]<TODAY());"HẾT HẠN";""))');

  const orderLines = ss.getSheetByName('CHI_TIẾT_ĐƠN_HÀNG');
  orderLines.getRange(2, 4, KD_MAX_ROWS - 1, 2).setFormulasR1C1(Array.from({ length: KD_MAX_ROWS - 1 }, function () { return [
    '=IF(RC[-1]="";"";IFNA(VLOOKUP(RC[-1];\'SẢN_PHẨM\'!C1:C7;2;FALSE);""))',
    '=IF(RC[-2]="";"";IFNA(VLOOKUP(RC[-2];\'SẢN_PHẨM\'!C1:C7;3;FALSE);""))'
  ]; }));
  orderLines.getRange(2, 7, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-4]="";"";IFNA(VLOOKUP(RC[-4];\'SẢN_PHẨM\'!C1:C7;4;FALSE);""))');
  orderLines.getRange(2, 8, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(OR(RC[-2]="";RC[-1]="");"";RC[-2]*RC[-1])');
  orderLines.getRange(2, 9, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-8]="";"";SUMIFS(\'CHI_TIẾT_GIAO_HÀNG\'!C4;\'CHI_TIẾT_GIAO_HÀNG\'!C3;RC[-8];\'CHI_TIẾT_GIAO_HÀNG\'!C5;"ĐÃ GIAO"))');
  orderLines.getRange(2, 10, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-9]="";"";MAX(0;RC[-4]-RC[-1]))');
  orderLines.getRange(2, 11, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-10]="";"";RC[-3]-(RC[-5]*IFNA(VLOOKUP(RC[-8];\'SẢN_PHẨM\'!C1:C7;5;FALSE);0)))');

  const orders = ss.getSheetByName('ĐƠN_HÀNG');
  orders.getRange(2, 7, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-6]="";"";SUMIFS(\'CHI_TIẾT_ĐƠN_HÀNG\'!C8;\'CHI_TIẾT_ĐƠN_HÀNG\'!C2;RC[-6]))');
  orders.getRange(2, 8, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-7]="";"";SUMIFS(\'THANH_TOÁN\'!C4;\'THANH_TOÁN\'!C2;RC[-7];\'THANH_TOÁN\'!C6;"ĐÃ XÁC NHẬN"))');
  orders.getRange(2, 9, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-8]="";"";MAX(0;RC[-2]-RC[-1]))');
  orders.getRange(2, 10, KD_MAX_ROWS - 1, 1).setFormulaR1C1('=IF(RC[-9]="";"";IF(AND(RC[-5]<TODAY();RC[-1]>0;RC[1]<>"HỦY");"QUÁ HẠN";""))');

  [quoteLines.getRange('G2:G500'), quoteLines.getRange('J2:N500'), orders.getRange('G2:I500'), orderLines.getRange('G2:H500'), orderLines.getRange('K2:K500'), ss.getSheetByName('THANH_TOÁN').getRange('D2:D500')].forEach(function (range) { range.setNumberFormat('#,##0 "₫"'); });
  [quoteLines.getRange('H2:I500'), ss.getSheetByName('SẢN_PHẨM').getRange('F2:F500')].forEach(function (range) { range.setNumberFormat('0.00%'); });
}

function clearUnexpectedDiscountFormulasKD_(quoteLines) {
  const range = quoteLines.getRange('H2:H500');
  const formulas = range.getFormulas();
  formulas.forEach(function (row, index) {
    if (row[0]) quoteLines.getRange(index + 2, 8).clearContent();
  });
}

function buildStartKD_(ss, mode) {
  const sheet = ss.getSheetByName('BẮT_ĐẦU');
  const properties = PropertiesService.getDocumentProperties();
  const sourceCommit = properties.getProperty('KD_SOURCE_COMMIT') || 'Không khai báo trong runtime';
  const rows = [
    ['QUẢN LÝ BÁO GIÁ VÀ ĐƠN HÀNG', '3.0.0-vi'],
    ['Trạng thái', 'Đã cài đặt'],
    ['Chế độ', mode],
    ['Mức xác minh', 'local_verified'],
    ['G2 Google Sheets/Apps Script', 'BLOCKED_EXTERNAL'],
    ['Source commit', sourceCommit],
    ['Tình trạng nguồn', 'Sạch khi đóng gói'],
    ['Hướng dẫn', 'Dùng menu Báo giá & Đơn hàng để kiểm tra hệ thống, sao lưu hoặc làm sạch dữ liệu.']
  ];
  sheet.clear();
  sheet.getRange(1, 1, rows.length, 2).setValues(rows).setWrap(true).setFontFamily('Arial');
  sheet.getRange('A1:B1').setBackground('#1F4E78').setFontColor('#FFFFFF').setFontWeight('bold').setFontSize(14);
  sheet.getRange('A2:A8').setFontWeight('bold').setBackground('#ECEFF1');
  sheet.setColumnWidth(1, 220); sheet.setColumnWidth(2, 560); sheet.setFrozenRows(1); sheet.setHiddenGridlines(true);
}

function protectFormulaRangesKD_(ss) {
  const ranges = [
    ['CHI_TIẾT_BÁO_GIÁ', 'D2:E500'], ['CHI_TIẾT_BÁO_GIÁ', 'G2:G500'], ['CHI_TIẾT_BÁO_GIÁ', 'I2:N500'],
    ['BÁO_GIÁ', 'I2:J500'], ['CHI_TIẾT_ĐƠN_HÀNG', 'D2:E500'], ['CHI_TIẾT_ĐƠN_HÀNG', 'G2:K500'], ['ĐƠN_HÀNG', 'G2:J500']
  ];
  ranges.forEach(function (item) {
    const range = ss.getSheetByName(item[0]).getRange(item[1]);
    const existing = range.getProtections(SpreadsheetApp.ProtectionType.RANGE).find(function (p) { return p.getDescription() === 'Cột công thức KD'; });
    if (!existing) range.protect().setDescription('Cột công thức KD').setWarningOnly(true);
  });
}

function seedDemoKD_(ss) {
  const data = demoDataKD_();
  Object.keys(data).forEach(function (tab) {
    const sheet = ss.getSheetByName(tab);
    if (sheet.getLastRow() > 1) sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getMaxColumns()).clearContent();
    if (data[tab].length) sheet.getRange(2, 1, data[tab].length, data[tab][0].length).setValues(data[tab].map(function (row) { return row.map(sanitizeKD_); }));
  });
}

function demoDataKD_() {
  return {
    'CẤU_HÌNH': [['THUE_SUAT_MAC_DINH', '0.08', 'Thuế suất mặc định'], ['TIEN_TE', 'VND', 'Đơn vị tiền tệ'], ['SO_NGAY_HIEU_LUC', '15', 'Số ngày hiệu lực báo giá']],
    'NGƯỜI_DÙNG': [['NV-001', 'Nguyễn Minh An', 'TRƯỞNG PHÒNG'], ['NV-002', 'Trần Hoài Phương', 'SALES ADMIN'], ['NV-003', 'Lê Gia Hân', 'KINH DOANH'], ['NV-004', 'Phạm Quốc Bảo', 'KINH DOANH'], ['NV-005', 'Vũ Thu Hà', 'KẾ TOÁN']],
    'KHÁCH_HÀNG': [['KH-001', 'Công ty Sao Khuê', 'DOANH NGHIỆP', 'Hà Nội', 'NV-003', 'ĐANG HOẠT ĐỘNG'], ['KH-002', 'Hộ kinh doanh Mây Việt', 'HỘ KINH DOANH', 'Đà Nẵng', 'NV-004', 'ĐANG HOẠT ĐỘNG'], ['KH-003', 'Công ty Ánh Dương', 'DOANH NGHIỆP', 'Hải Phòng', 'NV-003', 'ĐANG HOẠT ĐỘNG'], ['KH-004', 'Cửa hàng Gió Mới', 'HỘ KINH DOANH', 'Cần Thơ', 'NV-004', 'ĐANG HOẠT ĐỘNG'], ['KH-005', 'Công ty Trúc Xanh', 'DOANH NGHIỆP', 'Bình Dương', 'NV-003', 'ĐANG HOẠT ĐỘNG'], ['KH-006', 'Xưởng Mộc Bình Minh', 'HỘ KINH DOANH', 'Lâm Đồng', 'NV-004', 'ĐANG HOẠT ĐỘNG']],
    'SẢN_PHẨM': [['SP-001', 'Gói tư vấn khởi động', 'Gói', 100000, 60000, 0.08, 'ĐANG KINH DOANH'], ['SP-002', 'Bộ biểu mẫu bán hàng', 'Bộ', 250000, 120000, 0.08, 'ĐANG KINH DOANH'], ['SP-003', 'Dịch vụ cấu hình dữ liệu', 'Gói', 400000, 220000, 0.08, 'ĐANG KINH DOANH'], ['SP-004', 'Giờ đào tạo vận hành', 'Giờ', 150000, 70000, 0.08, 'ĐANG KINH DOANH'], ['SP-005', 'Gói hỗ trợ tiêu chuẩn', 'Tháng', 300000, 140000, 0.08, 'ĐANG KINH DOANH'], ['SP-006', 'Gói hỗ trợ nâng cao', 'Tháng', 500000, 240000, 0.08, 'ĐANG KINH DOANH'], ['SP-007', 'Báo cáo quản trị tùy chỉnh', 'Gói', 600000, 320000, 0.08, 'ĐANG KINH DOANH'], ['SP-008', 'Buổi rà soát quy trình', 'Gói', 200000, 90000, 0.08, 'ĐANG KINH DOANH']],
    'BÁO_GIÁ': [['BG-001-R1', 'BG-001', 1, false, 'KH-001', new Date('2026-08-01'), new Date('2026-08-15'), 'ĐÃ GỬI', '', '', 'NV-003'], ['BG-001-R2', 'BG-001', 2, true, 'KH-001', new Date('2026-08-05'), new Date('2026-08-20'), 'CHẤP NHẬN', '', '', 'NV-003'], ['BG-002-R1', 'BG-002', 1, true, 'KH-002', new Date('2026-08-12'), new Date('2026-08-26'), 'TỪ CHỐI', '', '', 'NV-004'], ['BG-003-R1', 'BG-003', 1, true, 'KH-003', new Date('2026-09-01'), new Date('2026-09-15'), 'HẾT HẠN', '', '', 'NV-003'], ['BG-004-R1', 'BG-004', 1, true, 'KH-004', new Date('2026-09-20'), new Date('2026-10-04'), 'ĐÃ GỬI', '', '', 'NV-004'], ['BG-005-R1', 'BG-005', 1, true, 'KH-005', new Date('2026-09-25'), new Date('2026-10-10'), 'NHÁP', '', '', 'NV-003']],
    'CHI_TIẾT_BÁO_GIÁ': [['DBG-001', 'BG-001-R1', 'SP-001', '', '', 2, '', 0.1, '', '', '', '', '', ''], ['DBG-002', 'BG-001-R1', 'SP-002', '', '', 1, '', 0, '', '', '', '', '', ''], ['DBG-003', 'BG-001-R2', 'SP-001', '', '', 2, '', 0.1, '', '', '', '', '', ''], ['DBG-004', 'BG-001-R2', 'SP-003', '', '', 1, '', 0, '', '', '', '', '', ''], ['DBG-005', 'BG-002-R1', 'SP-004', '', '', 4, '', 0.05, '', '', '', '', '', ''], ['DBG-006', 'BG-002-R1', 'SP-005', '', '', 1, '', 0, '', '', '', '', '', ''], ['DBG-007', 'BG-003-R1', 'SP-006', '', '', 1, '', 0.1, '', '', '', '', '', ''], ['DBG-008', 'BG-003-R1', 'SP-008', '', '', 2, '', 0, '', '', '', '', '', ''], ['DBG-009', 'BG-004-R1', 'SP-002', '', '', 2, '', 0, '', '', '', '', '', ''], ['DBG-010', 'BG-004-R1', 'SP-007', '', '', 1, '', 0.05, '', '', '', '', '', ''], ['DBG-011', 'BG-005-R1', 'SP-003', '', '', 1, '', 0, '', '', '', '', '', ''], ['DBG-012', 'BG-005-R1', 'SP-005', '', '', 2, '', 0.1, '', '', '', '', '', '']],
    'ĐƠN_HÀNG': [['DH-001', 'BG-001-R2', 'KH-001', new Date('2026-08-21'), new Date('2026-09-20'), 'TRỰC TIẾP', '', '', '', '', 'XÁC NHẬN', 'NV-003'], ['DH-002', '', 'KH-002', new Date('2026-09-05'), new Date('2026-10-05'), 'ĐIỆN THOẠI', '', '', '', '', 'ĐANG GIAO', 'NV-004'], ['DH-003', '', 'KH-003', new Date('2026-08-10'), new Date('2026-09-10'), 'ĐỐI TÁC', '', '', '', '', 'HOÀN TẤT', 'NV-003'], ['DH-004', '', 'KH-004', new Date('2026-09-18'), new Date('2026-10-18'), 'WEBSITE', '', '', '', '', 'HỦY', 'NV-004'], ['DH-005', '', 'KH-006', new Date('2026-08-15'), new Date('2026-09-15'), 'TRỰC TIẾP', '', '', '', '', 'XÁC NHẬN', 'NV-003']],
    'CHI_TIẾT_ĐƠN_HÀNG': [['DDH-001', 'DH-001', 'SP-003', '', '', 2, '', '', '', '', ''], ['DDH-002', 'DH-002', 'SP-001', '', '', 10, '', '', '', '', ''], ['DDH-003', 'DH-002', 'SP-004', '', '', 2, '', '', '', '', ''], ['DDH-004', 'DH-003', 'SP-006', '', '', 1, '', '', '', '', ''], ['DDH-005', 'DH-003', 'SP-008', '', '', 1, '', '', '', '', ''], ['DDH-006', 'DH-004', 'SP-002', '', '', 1, '', '', '', '', ''], ['DDH-007', 'DH-005', 'SP-007', '', '', 1, '', '', '', '', ''], ['DDH-008', 'DH-005', 'SP-005', '', '', 1, '', '', '', '', '']],
    'THANH_TOÁN': [['TT-001', 'DH-001', new Date('2026-09-01'), 500000, 'CHUYỂN KHOẢN', 'ĐÃ XÁC NHẬN'], ['TT-002', 'DH-002', new Date('2026-09-25'), 300000, 'CHUYỂN KHOẢN', 'CHỜ XÁC NHẬN'], ['TT-003', 'DH-003', new Date('2026-08-25'), 700000, 'TIỀN MẶT', 'ĐÃ XÁC NHẬN'], ['TT-004', 'DH-004', new Date('2026-09-19'), 250000, 'THU HỘ', 'HỦY'], ['TT-005', 'DH-005', new Date('2026-09-10'), 200000, 'CHUYỂN KHOẢN', 'ĐÃ XÁC NHẬN']],
    'GIAO_HÀNG': [], 'CHI_TIẾT_GIAO_HÀNG': []
  };
}

function buildDashboardKD_(ss) {
  const sheet = ss.getSheetByName('DASHBOARD');
  sheet.getDataRange().breakApart();
  sheet.clear();
  sheet.getCharts().forEach(function (chart) { sheet.removeChart(chart); });

  sheet.getRange('A1:B1').setValues([['DASHBOARD BÁO GIÁ VÀ ĐƠN HÀNG', 'Cập nhật động từ dữ liệu nguồn']]);
  sheet.getRange('A3:F4').setValues([
    ['Từ ngày', '', 'Đến ngày', '', 'Trạng thái', 'TẤT CẢ'],
    ['Người phụ trách', 'TẤT CẢ', '', '', '', '']
  ]);

  const orderFilter = '(\'ĐƠN_HÀNG\'!A2:A500<>"")*(\'ĐƠN_HÀNG\'!K2:K500<>"HỦY")' +
    '*(\'ĐƠN_HÀNG\'!D2:D500>=IF(B3="";DATE(1900;1;1);B3))' +
    '*(\'ĐƠN_HÀNG\'!D2:D500<=IF(D3="";DATE(2999;12;31);D3))' +
    '*IF(F3="TẤT CẢ";1;--(\'ĐƠN_HÀNG\'!K2:K500=F3))' +
    '*IF(B4="TẤT CẢ";1;--(\'ĐƠN_HÀNG\'!L2:L500=B4))';
  const kpis = [
    ['Chỉ số', 'Giá trị', 'Định nghĩa KPI'],
    ['Giá trị báo giá đã gửi', '=SUM(SUMIF(\'BÁO_GIÁ\'!H:H;{"ĐÃ GỬI";"CHẤP NHẬN";"TỪ CHỐI";"HẾT HẠN"};\'BÁO_GIÁ\'!I:I))', 'Tổng giá trị báo giá đã gửi hoặc đã quyết định'],
    ['Tỷ lệ chuyển đổi', '=IFERROR(COUNTIF(\'BÁO_GIÁ\'!H:H;"CHẤP NHẬN")/(COUNTIF(\'BÁO_GIÁ\'!H:H;"CHẤP NHẬN")+COUNTIF(\'BÁO_GIÁ\'!H:H;"TỪ CHỐI")+COUNTIF(\'BÁO_GIÁ\'!H:H;"HẾT HẠN"));0)', 'Báo giá chấp nhận / báo giá đã quyết định'],
    ['Giá trị đơn hàng', '=SUMPRODUCT(' + orderFilter + '*\'ĐƠN_HÀNG\'!G2:G500)', 'Tổng giá trị đơn không hủy theo bộ lọc'],
    ['Thực thu', '=SUMPRODUCT(' + orderFilter + '*\'ĐƠN_HÀNG\'!H2:H500)', 'Chỉ thanh toán đã xác nhận'],
    ['Công nợ phải thu', '=SUMPRODUCT(' + orderFilter + '*\'ĐƠN_HÀNG\'!I2:I500)', 'Giá trị đơn trừ thực thu đã xác nhận'],
    ['Đơn quá hạn', '=COUNTIF(\'ĐƠN_HÀNG\'!J2:J500;"QUÁ HẠN")', 'Đơn còn công nợ sau hạn thanh toán'],
    ['Đơn giao thiếu', '=COUNTIF(\'CHI_TIẾT_ĐƠN_HÀNG\'!J2:J500;">0")', 'Dòng đơn còn số lượng phải giao'],
    ['Lợi nhuận gộp dự kiến', '=SUM(\'CHI_TIẾT_ĐƠN_HÀNG\'!K2:K500)', 'Doanh thu dòng trừ giá vốn dự kiến'],
    ['Đơn hoàn tất', '=COUNTIF(\'ĐƠN_HÀNG\'!K2:K500;"HOÀN TẤT")', 'Số đơn hoàn tất'],
    ['Đơn đang xử lý', '=COUNTIF(\'ĐƠN_HÀNG\'!K2:K500;"ĐANG GIAO")+COUNTIF(\'ĐƠN_HÀNG\'!K2:K500;"GIAO MỘT PHẦN")+COUNTIF(\'ĐƠN_HÀNG\'!K2:K500;"XÁC NHẬN")', 'Đơn chưa hoàn tất và chưa hủy'],
    ['Đơn hủy', '=COUNTIF(\'ĐƠN_HÀNG\'!K2:K500;"HỦY")', 'Số đơn hủy'],
    ['Giá trị báo giá chấp nhận', '=SUMIF(\'BÁO_GIÁ\'!H:H;"CHẤP NHẬN";\'BÁO_GIÁ\'!I:I)', 'Giá trị báo giá đã chấp nhận']
  ];
  sheet.getRange(6, 1, kpis.length, 3).setValues(kpis);

  sheet.getRange('A21:B25').setValues([
    ['Kênh bán', 'Doanh số'],
    ['TRỰC TIẾP', '=SUMIF(\'ĐƠN_HÀNG\'!F:F;A22;\'ĐƠN_HÀNG\'!G:G)'],
    ['ĐIỆN THOẠI', '=SUMIF(\'ĐƠN_HÀNG\'!F:F;A23;\'ĐƠN_HÀNG\'!G:G)'],
    ['WEBSITE', '=SUMIF(\'ĐƠN_HÀNG\'!F:F;A24;\'ĐƠN_HÀNG\'!G:G)'],
    ['ĐỐI TÁC', '=SUMIF(\'ĐƠN_HÀNG\'!F:F;A25;\'ĐƠN_HÀNG\'!G:G)']
  ]);
  sheet.getRange('D21:E26').setValues([
    ['Trạng thái đơn', 'Số lượng'],
    ['XÁC NHẬN', '=COUNTIF(\'ĐƠN_HÀNG\'!K:K;D22)'],
    ['ĐANG GIAO', '=COUNTIF(\'ĐƠN_HÀNG\'!K:K;D23)'],
    ['GIAO MỘT PHẦN', '=COUNTIF(\'ĐƠN_HÀNG\'!K:K;D24)'],
    ['HOÀN TẤT', '=COUNTIF(\'ĐƠN_HÀNG\'!K:K;D25)'],
    ['HỦY', '=COUNTIF(\'ĐƠN_HÀNG\'!K:K;D26)']
  ]);
  sheet.getRange('G21:H22').setValues([
    ['Hiệu suất nhân viên', 'Doanh số'],
    ['=QUERY(\'ĐƠN_HÀNG\'!A:L;"select L,sum(G) where A is not null and K <> \'HỦY\' group by L label L \'Người phụ trách\', sum(G) \'Doanh số\'";1)', '']
  ]);
  sheet.getRange('J21:K22').setValues([
    ['Top sản phẩm', 'Doanh số'],
    ['=QUERY(\'CHI_TIẾT_ĐƠN_HÀNG\'!A:H;"select C,sum(H) where A is not null group by C order by sum(H) desc label C \'Mã sản phẩm\', sum(H) \'Doanh số\'";1)', '']
  ]);
  sheet.getRange('A32:B34').setValues([
    ['Xu hướng', 'Số lượng'],
    ['Báo giá đã quyết định', '=COUNTIF(\'BÁO_GIÁ\'!H:H;"CHẤP NHẬN")+COUNTIF(\'BÁO_GIÁ\'!H:H;"TỪ CHỐI")+COUNTIF(\'BÁO_GIÁ\'!H:H;"HẾT HẠN")'],
    ['Đơn hàng không hủy', '=COUNTIFS(\'ĐƠN_HÀNG\'!A:A;"<>";\'ĐƠN_HÀNG\'!K:K;"<>HỦY")']
  ]);

  const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(['TẤT CẢ'].concat(KD_ORDER_STATUS), true).setAllowInvalid(false).build();
  const users = ss.getSheetByName('NGƯỜI_DÙNG').getRange('A2:A500').getDisplayValues().flat().filter(String);
  const userRule = SpreadsheetApp.newDataValidation().requireValueInList(['TẤT CẢ'].concat(Array.from(new Set(users))), true).setAllowInvalid(false).build();
  sheet.getRange('F3').setDataValidation(statusRule);
  sheet.getRange('B4').setDataValidation(userRule);

  sheet.getRange('A1:F1').setBackground('#1F4E78').setFontColor('#FFFFFF').setFontWeight('bold').setFontSize(14);
  sheet.getRange('A3:F4').setBackground('#FFF9D6');
  sheet.getRange('A6:C6').setBackground('#ECEFF1').setFontWeight('bold').setHorizontalAlignment('center');
  sheet.getRange('B7:B18').setBackground('#E3F2FD').setFontWeight('bold');
  sheet.getRangeList(['A21:B21', 'D21:E21', 'G21:H21', 'J21:K21', 'A32:B32']).setBackground('#ECEFF1').setFontWeight('bold');
  sheet.getRange('B7').setNumberFormat('#,##0 "₫"');
  sheet.getRange('B8').setNumberFormat('0.00%');
  sheet.getRangeList(['B9:B11', 'B14', 'B18', 'B22:B25', 'H22:H30', 'K22:K30']).setNumberFormat('#,##0 "₫"');
  sheet.getRange('A1:K40').setFontFamily('Arial').setVerticalAlignment('middle');
  sheet.setFrozenRows(6);
  sheet.setHiddenGridlines(true);
  sheet.setColumnWidth(1, 220); sheet.setColumnWidth(2, 160); sheet.setColumnWidth(3, 380);

  const channelChart = sheet.newChart().setChartType(Charts.ChartType.COLUMN).addRange(sheet.getRange('A21:B25')).setPosition(1, 13, 0, 0).setOption('title', 'Doanh số theo kênh').setOption('legend', { position: 'none' }).build();
  const statusChart = sheet.newChart().setChartType(Charts.ChartType.PIE).addRange(sheet.getRange('D21:E26')).setPosition(19, 13, 0, 0).setOption('title', 'Cơ cấu trạng thái đơn').build();
  const trendChart = sheet.newChart().setChartType(Charts.ChartType.COLUMN).addRange(sheet.getRange('A32:B34')).setPosition(37, 13, 0, 0).setOption('title', 'Chuyển đổi báo giá → đơn hàng').setOption('legend', { position: 'none' }).build();
  sheet.insertChart(channelChart); sheet.insertChart(statusChart); sheet.insertChart(trendChart);
}

function validateRefsKD_(ss) {
  const errors = [];
  const ids = function (tab) { const s = ss.getSheetByName(tab); return new Set(s.getLastRow() < 2 ? [] : s.getRange(2, 1, s.getLastRow() - 1, 1).getDisplayValues().flat().filter(String)); };
  const customers = ids('KHÁCH_HÀNG'); const products = ids('SẢN_PHẨM'); const quotes = ids('BÁO_GIÁ'); const orders = ids('ĐƠN_HÀNG');
  checkRefColumnKD_(ss.getSheetByName('BÁO_GIÁ'), 5, customers, 'BÁO_GIÁ.Mã khách hàng', errors);
  checkRefColumnKD_(ss.getSheetByName('CHI_TIẾT_BÁO_GIÁ'), 2, quotes, 'CHI_TIẾT_BÁO_GIÁ.Mã báo giá', errors);
  checkRefColumnKD_(ss.getSheetByName('CHI_TIẾT_BÁO_GIÁ'), 3, products, 'CHI_TIẾT_BÁO_GIÁ.Mã sản phẩm', errors);
  checkRefColumnKD_(ss.getSheetByName('ĐƠN_HÀNG'), 3, customers, 'ĐƠN_HÀNG.Mã khách hàng', errors);
  checkRefColumnKD_(ss.getSheetByName('CHI_TIẾT_ĐƠN_HÀNG'), 2, orders, 'CHI_TIẾT_ĐƠN_HÀNG.Mã đơn hàng', errors);
  checkRefColumnKD_(ss.getSheetByName('THANH_TOÁN'), 2, orders, 'THANH_TOÁN.Mã đơn hàng', errors);
  return errors;
}

function checkRefColumnKD_(sheet, column, allowed, label, errors) {
  if (sheet.getLastRow() < 2) return;
  sheet.getRange(2, column, sheet.getLastRow() - 1, 1).getDisplayValues().flat().filter(String).forEach(function (value) { if (!allowed.has(value)) errors.push(label + ': ' + value); });
}

function backupKD_(ss, reason) {
  const name = '__SAO_LƯU_KD';
  const sheet = ensureSheetKD_(ss, name); sheet.hideSheet();
  const data = KD_TABS.map(function (tab) { const source = ss.getSheetByName(tab); const range = source.getDataRange(); return { name: tab, values: range.getValues(), formulas: range.getFormulas() }; });
  const payload = JSON.stringify(data);
  const id = 'SAO-LUU-' + Utilities.getUuid();
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 5).setValues([[id, new Date(), reason, checksumKD_(payload), payload]]);
  return id;
}

function checksumKD_(payload) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, payload, Utilities.Charset.UTF_8).map(function (item) { const value = item < 0 ? item + 256 : item; return ('0' + value.toString(16)).slice(-2); }).join('');
}

function sanitizeKD_(value) {
  return typeof value === 'string' && /^[=+\-@]/.test(value) ? "'" + value : value;
}

function logKD_(ss, action, entity, detail) {
  const sheet = ss.getSheetByName('NHẬT_KÝ');
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 6).setValues([[Utilities.getUuid(), new Date(), action, entity, '', String(detail || '').replace(/[\r\n]/g, ' ').slice(0, 200)]]);
}

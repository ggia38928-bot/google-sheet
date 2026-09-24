/**
 * Minh Templates F05 3.0.0-VI — CRM khách hàng và pipeline.
 * Không có thao tác mạng, email hay AppSheet tự động trong mã này.
 */
const F05 = {
  version: '3.0.0-vi', locale: 'vi-VN', timezone: 'Asia/Ho_Chi_Minh', gridRows: 1000,
  tabs: ['Bắt đầu', 'Bảng điều hành CRM', 'Lead', 'Khách hàng', 'Người liên hệ', 'Cơ hội', 'Hoạt động', 'Lịch sử chăm sóc', 'Nhân viên', 'Khóa kỳ', 'Nhật ký', '__Sao lưu F05'],
  roles: ['QUẢN_TRỊ', 'QUẢN_LÝ', 'NHÂN_VIÊN', 'CHỈ_XEM'],
  transitions: { 'MỚI': ['TIẾP CẬN', 'THẮNG', 'THUA'], 'TIẾP CẬN': ['BÁO GIÁ', 'THẮNG', 'THUA'], 'BÁO GIÁ': ['ĐÀM PHÁN', 'THẮNG', 'THUA'], 'ĐÀM PHÁN': ['THẮNG', 'THUA'], 'THẮNG': [], 'THUA': [] }
};
const F05_HEADERS = {
  'Lead': ['Mã lead', 'Tên lead', 'Nguồn', 'Phụ trách', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Khách hàng': ['Mã khách hàng', 'Tên khách hàng', 'Mã lead', 'Phụ trách', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Người liên hệ': ['Mã liên hệ', 'Mã khách hàng', 'Tên hiển thị', 'Vai trò', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Cơ hội': ['Mã cơ hội', 'Tên cơ hội', 'Mã khách hàng', 'Giai đoạn', 'Giá trị kỳ vọng', 'Xác suất', 'Giá trị trọng số', 'Kỳ', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Hoạt động': ['Mã hoạt động', 'Mã cơ hội', 'Hình thức', 'Trạng thái', 'Ngày hẹn', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Lịch sử chăm sóc': ['Mã lịch sử', 'Mã khách hàng', 'Nội dung', 'Thời điểm', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng', 'Lưu trữ'],
  'Nhân viên': ['Mã nhân viên', 'Tên hiển thị', 'Vai trò', 'Đang hoạt động', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng'],
  'Khóa kỳ': ['Kỳ', 'Đang khóa', 'Ngày tạo', 'Cập nhật lúc', 'Người tạo', 'Phiên bản dòng'],
  'Nhật ký': ['Mã bằng chứng', 'Thời điểm', 'Thao tác', 'Thực thể', 'Mã thực thể', 'Trường thay đổi đã che']
};

function onOpen() {
  SpreadsheetApp.getUi().createMenu('CRM F05 3.0.0-VI')
    .addItem('Cài đặt Demo', 'caiDatDemoF05')
    .addItem('Cài đặt Pro', 'caiDatProF05')
    .addItem('Cài đặt Business (sạch)', 'caiDatBusinessF05')
    .addSeparator().addItem('Làm sạch có sao lưu', 'lamSachF05')
    .addItem('Khôi phục bản sao lưu gần nhất', 'khoiPhucF05')
    .addItem('Kiểm tra cài đặt', 'kiemTraF05').addToUi();
}

function caiDatDemoF05() { return runF05_({ tier: 'demo', seedDemo: true, requestId: Utilities.getUuid() }); }
function caiDatProF05() { return runF05_({ tier: 'pro', seedDemo: true, requestId: Utilities.getUuid() }); }
function caiDatBusinessF05() { return runF05_({ tier: 'business', seedDemo: false, requestId: Utilities.getUuid() }); }

function runF05_(options) {
  return withLockF05_(function () {
    const props = PropertiesService.getDocumentProperties();
    const key = 'F05_EXEC_' + options.requestId;
    if (props.getProperty(key)) return { idempotent: true, executionId: options.requestId };
    const ss = SpreadsheetApp.getActive();
    ss.setSpreadsheetLocale(F05.locale);
    ss.setSpreadsheetTimeZone(F05.timezone);
    reconcileF05_(ss);
    ensureBootstrapRoleF05_();
    if (options.seedDemo && options.tier !== 'business') seedDemoF05_(ss);
    setMetaF05_(ss, options.tier, options.requestId);
    logF05_(ss, options.requestId, 'CÀI_ĐẶT', 'Sổ CRM', '');
    props.setProperty(key, JSON.stringify({ version: F05.version, at: new Date().toISOString() }));
    return { idempotent: false, executionId: options.requestId };
  });
}

function withLockF05_(work) {
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(30000)) throw new Error('Không thể lấy khóa thao tác. Vui lòng thử lại.');
  try { return work(); } finally { lock.releaseLock(); }
}

function reconcileF05_(ss) {
  F05.tabs.forEach(function (name) { ensureSheetF05_(ss, name); });
  Object.keys(F05_HEADERS).forEach(function (name) { reconcileTableF05_(ss.getSheetByName(name), F05_HEADERS[name]); });
  const dashboard = ss.getSheetByName('Bảng điều hành CRM');
  if (dashboard.getRange('A1').getValue() !== 'BẢNG ĐIỀU HÀNH CRM') buildDashboardF05_(dashboard);
  const start = ss.getSheetByName('Bắt đầu');
  if (start.getRange('A1').getValue() !== 'CRM KHÁCH HÀNG VÀ PIPELINE') buildStartF05_(start);
  const backup = ss.getSheetByName('__Sao lưu F05');
  backup.hideSheet();
}

function ensureSheetF05_(ss, name) { return ss.getSheetByName(name) || ss.insertSheet(name); }
function reconcileTableF05_(sheet, headers) {
  const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  if (existing.join('|') !== headers.join('|')) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setBackground('#0B57D0').setFontColor('#FFFFFF').setFontWeight('bold');
  if (sheet.getLastRow() < F05.gridRows + 1) sheet.insertRowsAfter(Math.max(sheet.getMaxRows(), 1), Math.max(1, F05.gridRows + 1 - sheet.getMaxRows()));
  if (sheet.getName() === 'Cơ hội') {
    sheet.getRange(2, 4, F05.gridRows, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(Object.keys(F05.transitions), true).build());
    sheet.getRange(2, 6, F05.gridRows, 1).setNumberFormat('0.0%');
    sheet.getRange(2, 5, F05.gridRows, 1).setNumberFormat('#,##0 "₫"');
    sheet.getRange(2, 7, F05.gridRows, 1).setNumberFormat('#,##0 "₫"');
  }
}

function buildStartF05_(sheet) {
  sheet.getRange('A1:F1').merge().setValue('CRM KHÁCH HÀNG VÀ PIPELINE').setBackground('#0B57D0').setFontColor('#FFFFFF').setFontWeight('bold');
  sheet.getRange('A3:B7').setValues([['Bước 1', 'Cài đặt Pro hoặc Business'], ['Bước 2', 'Thiết lập vai trò tại tab Nhân viên'], ['Bước 3', 'Nhập Lead, Khách hàng và Cơ hội'], ['Bước 4', 'Theo dõi Bảng điều hành CRM'], ['Lưu ý', 'Làm sạch luôn tạo sao lưu trước khi xóa dữ liệu']]);
  sheet.setColumnWidth(1, 180); sheet.setColumnWidth(2, 520);
}

function buildDashboardF05_(sheet) {
  sheet.getRange('A1:J1').merge().setValue('BẢNG ĐIỀU HÀNH CRM').setBackground('#1A237E').setFontColor('#FFFFFF').setFontWeight('bold');
  const cards = [['Giá trị pipeline mở', '=SUMIFS(\'Cơ hội\'!E2:E1001,\'Cơ hội\'!D2:D1001,"<>THẮNG",\'Cơ hội\'!D2:D1001,"<>THUA",\'Cơ hội\'!D2:D1001,"<>")'], ['Giá trị có trọng số', '=SUMIFS(\'Cơ hội\'!G2:G1001,\'Cơ hội\'!D2:D1001,"<>THẮNG",\'Cơ hội\'!D2:D1001,"<>THUA",\'Cơ hội\'!D2:D1001,"<>")'], ['Tỷ lệ chốt đơn', '=IFERROR(COUNTIF(\'Cơ hội\'!D2:D1001,"THẮNG")/(COUNTIF(\'Cơ hội\'!D2:D1001,"THẮNG")+COUNTIF(\'Cơ hội\'!D2:D1001,"THUA")),0)'], ['Cơ hội đang mở', '=COUNTIFS(\'Cơ hội\'!A2:A1001,"<>",\'Cơ hội\'!D2:D1001,"<>THẮNG",\'Cơ hội\'!D2:D1001,"<>THUA",\'Cơ hội\'!D2:D1001,"<>")']];
  cards.forEach(function (card, index) { const col = index * 2 + 1; sheet.getRange(3, col, 1, 2).merge().setValue(card[0]).setFontWeight('bold'); sheet.getRange(4, col, 1, 2).merge().setFormula(card[1]).setNumberFormat(index === 2 ? '0.0%' : '#,##0 "₫"'); });
  sheet.getRange('A7:E7').setValues([['Giai đoạn', 'Số cơ hội', 'Giá trị', 'Xác suất chuẩn', 'Giá trị kỳ vọng']]).setFontWeight('bold');
  ['MỚI', 'TIẾP CẬN', 'BÁO GIÁ', 'ĐÀM PHÁN', 'THẮNG', 'THUA'].forEach(function (stage, index) { const row = index + 8; sheet.getRange(row, 1).setValue(stage); sheet.getRange(row, 2).setFormula('=COUNTIF(\'Cơ hội\'!D2:D1001,A' + row + ')'); sheet.getRange(row, 3).setFormula('=SUMIF(\'Cơ hội\'!D2:D1001,A' + row + ',\'Cơ hội\'!E2:E1001)'); sheet.getRange(row, 5).setFormula('=SUMIF(\'Cơ hội\'!D2:D1001,A' + row + ',\'Cơ hội\'!G2:G1001)'); });
}

function seedDemoF05_(ss) {
  if (ss.getSheetByName('Cơ hội').getLastRow() > 1) return;
  const now = new Date(); const actor = 'DỮ_LIỆU_DEMO';
  writeRowsF05_(ss, 'Lead', [['LD-001', 'Doanh nghiệp Thương mại Ánh Dương', 'Hội thảo', 'NV-001', now, now, actor, 1, false], ['LD-002', 'Công ty Dịch vụ Bình Minh', 'Giới thiệu', 'NV-002', now, now, actor, 1, false], ['LD-003', 'Hợp tác xã Sông Xanh', 'Website', 'NV-001', now, now, actor, 1, false]]);
  writeRowsF05_(ss, 'Khách hàng', [['KH-001', 'Doanh nghiệp Thương mại Ánh Dương', 'LD-001', 'NV-001', now, now, actor, 1, false], ['KH-002', 'Công ty Dịch vụ Bình Minh', 'LD-002', 'NV-002', now, now, actor, 1, false], ['KH-003', 'Hợp tác xã Sông Xanh', 'LD-003', 'NV-001', now, now, actor, 1, false]]);
  writeRowsF05_(ss, 'Cơ hội', [['CO-001', 'Chuẩn hóa quy trình bán hàng', 'KH-001', 'MỚI', 50000000, 0.1, '', '2026-09', now, now, actor, 1, false], ['CO-002', 'Đào tạo dashboard quản trị', 'KH-002', 'THUA', 25000000, 0, '', '2026-09', now, now, actor, 1, false], ['CO-003', 'Tư vấn báo cáo bán hàng', 'KH-003', 'BÁO GIÁ', 30000000, 0.6, '', '2026-09', now, now, actor, 1, false]]);
  const sheet = ss.getSheetByName('Cơ hội'); sheet.getRange(2, 7, 3, 1).setFormulas([['=ROUND(E2*F2,0)'], ['=ROUND(E3*F3,0)'], ['=ROUND(E4*F4,0)']]);
  writeRowsF05_(ss, 'Hoạt động', [['HD-001', 'CO-001', 'GẶP MẶT', 'HOÀN THÀNH', now, now, now, actor, 1, false], ['HD-002', 'CO-002', 'GỌI ĐIỆN', 'CHỜ XỬ_LÝ', now, now, now, actor, 1, false], ['HD-003', 'CO-003', 'EMAIL', 'CHỜ_XỬ_LÝ', now, now, now, actor, 1, false]]);
}

function writeRowsF05_(ss, tab, rows) {
  const sheet = ss.getSheetByName(tab); const start = Math.max(2, sheet.getLastRow() + 1);
  if (start + rows.length - 2 > F05.gridRows) throw new Error('Dữ liệu vượt vùng nhập liệu đã cấp phát.');
  sheet.getRange(start, 1, rows.length, rows[0].length).setValues(rows.map(function (row) { return row.map(sanitizeF05_); }));
}

function lamSachF05() { return withLockF05_(function () { const ss = SpreadsheetApp.getActive(); const backupId = saoLuuF05_(ss, 'Làm sạch'); Object.keys(F05_HEADERS).forEach(function (tab) { const sheet = ss.getSheetByName(tab); if (sheet.getLastRow() > 1) sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent(); }); logF05_(ss, Utilities.getUuid(), 'LÀM_SẠCH', 'Sổ CRM', ''); return { backupId: backupId }; }); }
function khoiPhucF05() { return withLockF05_(function () { const ss = SpreadsheetApp.getActive(); const backup = readLatestBackupF05_(ss); if (!backup) throw new Error('Chưa có bản sao lưu để khôi phục.'); saoLuuF05_(ss, 'Điểm kiểm tra trước khôi phục'); backup.sheets.forEach(function (saved) { const sheet = ensureSheetF05_(ss, saved.name); sheet.clear(); sheet.getRange(1, 1, saved.values.length, saved.values[0].length).setValues(saved.values); saved.formulas.forEach(function (row, r) { row.forEach(function (formula, c) { if (formula) sheet.getRange(r + 1, c + 1).setFormula(formula); }); }); }); logF05_(ss, Utilities.getUuid(), 'KHÔI_PHỤC', 'Sổ CRM', ''); return { restored: true }; }); }

function saoLuuF05_(ss, reason) { const sheets = Object.keys(F05_HEADERS).map(function (name) { const sheet = ss.getSheetByName(name); const range = sheet.getDataRange(); return { name: name, values: range.getValues(), formulas: range.getFormulas() }; }); const payload = JSON.stringify(sheets); const id = 'SAO_LUU-' + Utilities.getUuid(); const backup = ss.getSheetByName('__Sao lưu F05'); backup.getRange(backup.getLastRow() + 1, 1, 1, 5).setValues([[id, new Date(), reason, checksumF05_(payload), payload]]); return id; }
function readLatestBackupF05_(ss) { const sheet = ss.getSheetByName('__Sao lưu F05'); if (sheet.getLastRow() < 1) return null; const row = sheet.getRange(sheet.getLastRow(), 1, 1, 5).getValues()[0]; if (!row[4] || row[3] !== checksumF05_(row[4])) throw new Error('Bản sao lưu không toàn vẹn.'); return JSON.parse(row[4]); }
function checksumF05_(payload) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, payload, Utilities.Charset.UTF_8).map(function (item) { const value = item < 0 ? item + 256 : item; return ('0' + value.toString(16)).slice(-2); }).join(''); }

function createOpportunityF05(input, context) { return withLockF05_(function () { assertWriteRoleF05_(); assertIdF05_(input.id, 'Mã cơ hội'); assertIdF05_(input.accountId, 'Mã khách hàng'); const stage = assertStageF05_(input.stage || 'MỚI'); if (stage !== 'MỚI') throw new Error('Cơ hội mới phải bắt đầu ở giai đoạn MỚI.'); const period = assertPeriodF05_(input.period || ''); const ss = SpreadsheetApp.getActive(); assertUnlockedF05_(ss, period); if (!hasRecordF05_(ss.getSheetByName('Khách hàng'), input.accountId)) throw new Error('Mã khách hàng không tồn tại.'); const value = Number(input.value || 0); const probability = Number(input.probability || 0); if (!Number.isFinite(value) || value < 0 || !Number.isFinite(probability) || probability < 0 || probability > 1) throw new Error('Giá trị hoặc xác suất không hợp lệ.'); const sheet = ss.getSheetByName('Cơ hội'); const row = sheet.getLastRow() + 1; if (row > F05.gridRows + 1) throw new Error('Dữ liệu vượt vùng nhập liệu đã cấp phát.'); const now = new Date(); const record = [input.id, input.title, input.accountId, stage, value, probability, '', period, now, now, callerIdF05_(), 1, false].map(sanitizeF05_); sheet.getRange(row, 1, 1, 13).setValues([record]); sheet.getRange(row, 7).setFormula('=ROUND(E' + row + '*F' + row + ',0)'); logF05_(ss, context.requestId, 'TẠO', 'Cơ hội', input.id); return { row: row }; }); }
function updateOpportunityF05(id, patch, context) { return withLockF05_(function () { if (Object.prototype.hasOwnProperty.call(patch, 'weightedValue')) throw new Error('Không được ghi đè cột công thức.'); assertWriteRoleF05_(); assertIdF05_(id, 'Mã cơ hội'); const ss = SpreadsheetApp.getActive(); const sheet = ss.getSheetByName('Cơ hội'); const values = sheet.getDataRange().getValues(); const offset = values.findIndex(function (row) { return row[0] === id; }); if (offset < 1) throw new Error('Không tìm thấy cơ hội.'); const row = offset + 1; assertUnlockedF05_(ss, values[offset][7]); if (values[offset][11] !== context.expectedRowVersion) throw new Error('RowVersion không khớp.'); if (patch.stage) { assertStageF05_(patch.stage); if (!F05.transitions[values[offset][3]].includes(patch.stage)) throw new Error('Chuyển trạng thái không hợp lệ.'); } if (patch.title) sheet.getRange(row, 2).setValue(sanitizeF05_(patch.title)); if (patch.stage) sheet.getRange(row, 4).setValue(sanitizeF05_(patch.stage)); sheet.getRange(row, 10).setValue(new Date()); sheet.getRange(row, 12).setValue(context.expectedRowVersion + 1); logF05_(ss, context.requestId, 'CẬP_NHẬT', 'Cơ hội', id); return { rowVersion: context.expectedRowVersion + 1 }; }); }
function importOpportunitiesF05(rows, context) { return rows.map(function (row, index) { return createOpportunityF05(row, { requestId: context.requestId + '-' + index }); }); }

function migrateF05(mapping, context) { if (context.dryRun) return { changed: false, mapping: mapping }; return withLockF05_(function () { assertAdminF05_(); const ss = SpreadsheetApp.getActive(); saoLuuF05_(ss, 'Di chuyển lược đồ'); Object.keys(mapping).forEach(function (tab) { const expected = F05_HEADERS[tab]; if (!expected) throw new Error('Bảng không nằm trong whitelist.'); reconcileTableF05_(ss.getSheetByName(tab), expected); }); return { changed: true }; }); }
function applyRolesF05(roleMap) { return withLockF05_(function () { assertAdminF05_(); const ss = SpreadsheetApp.getActive(); const props = PropertiesService.getDocumentProperties(); const rows = Object.keys(roleMap).map(function (principal) { if (!F05.roles.includes(roleMap[principal])) throw new Error('Vai trò không hợp lệ.'); props.setProperty('F05_ROLE_' + principal, roleMap[principal]); return ['NV-' + Utilities.getUuid().slice(0, 8), 'Người dùng nội bộ', roleMap[principal], true, new Date(), new Date(), callerIdF05_(), 1]; }); if (rows.length) writeRowsF05_(ss, 'Nhân viên', rows); return { applied: true, count: rows.length }; }); }
function lockPeriodF05(period) { return withLockF05_(function () { assertAdminF05_(); const valid = assertPeriodF05_(period); writeRowsF05_(SpreadsheetApp.getActive(), 'Khóa kỳ', [[valid, true, new Date(), new Date(), callerIdF05_(), 1]]); }); }
function unlockPeriodF05(period) { return withLockF05_(function () { assertAdminF05_(); const valid = assertPeriodF05_(period); const sheet = SpreadsheetApp.getActive().getSheetByName('Khóa kỳ'); const values = sheet.getDataRange().getValues(); values.forEach(function (row, index) { if (row[0] === valid) sheet.getRange(index + 1, 2).setValue(false); }); }); }

function assertUnlockedF05_(ss, period) { if (!period) return; const values = ss.getSheetByName('Khóa kỳ').getDataRange().getValues(); if (values.slice(1).some(function (row) { return row[0] === period && row[1] === true; })) throw new Error('Không thể ghi vì kỳ đã khóa.'); }
function assertWriteRoleF05_() { if (['QUẢN_TRỊ', 'QUẢN_LÝ', 'NHÂN_VIÊN'].indexOf(roleForCallerF05_()) < 0) throw new Error('Bạn không có quyền ghi dữ liệu.'); }
function assertAdminF05_() { if (roleForCallerF05_() !== 'QUẢN_TRỊ') throw new Error('Chỉ quản trị được phép thực hiện thao tác này.'); }
function callerPrincipalF05_() { const principal = Session.getEffectiveUser().getEmail(); if (!principal) throw new Error('Không thể xác thực người gọi.'); return principal; }
function ensureBootstrapRoleF05_() { const props = PropertiesService.getDocumentProperties(); if (props.getProperty('F05_BOOTSTRAPPED') === 'true') return; const principal = callerPrincipalF05_(); props.setProperty('F05_ROLE_' + principal, 'QUẢN_TRỊ'); props.setProperty('F05_BOOTSTRAPPED', 'true'); }
function roleForCallerF05_() { return PropertiesService.getDocumentProperties().getProperty('F05_ROLE_' + callerPrincipalF05_()) || 'CHỈ_XEM'; }
function assertIdF05_(value, label) { if (typeof value !== 'string' || !/^[A-Z]{2,8}-[A-Za-z0-9_]{1,64}$/.test(value)) throw new Error(label + ' không hợp lệ.'); return value; }
function assertStageF05_(value) { if (!Object.prototype.hasOwnProperty.call(F05.transitions, value)) throw new Error('Giai đoạn không hợp lệ.'); return value; }
function assertPeriodF05_(value) { if (value && !/^\d{4}-\d{2}$/.test(value)) throw new Error('Kỳ không hợp lệ.'); return value; }
function hasRecordF05_(sheet, id) { return sheet.getDataRange().getValues().slice(1).some(function (row) { return row[0] === id; }); }
function sanitizeF05_(value) { return typeof value === 'string' && /^[=+\-@]/.test(value) ? "'" + value : value; }
function callerIdF05_() { return Session.getEffectiveUser().getEmail() ? 'NGƯỜI_DÙNG_NỘI_BỘ' : 'KHÔNG_XÁC_ĐỊNH'; }
function logF05_(ss, evidenceId, action, entity, entityId) { const sheet = ss.getSheetByName('Nhật ký'); sheet.getRange(sheet.getLastRow() + 1, 1, 1, 6).setValues([[evidenceId || Utilities.getUuid(), new Date(), action, entity, entityId || '', '[đã che]']]); }
function setMetaF05_(ss, tier, executionId) { ss.getSheetByName('Bắt đầu').getRange('A9:B11').setValues([['Phiên bản', F05.version], ['Gói đang cài', tier], ['Mã thực thi', executionId]]); }
function configureAppSheetF05(config) { if (!config || !config.appId || !config.dataSource) throw new Error('Chỉ bật AppSheet khi có App ID và nguồn dữ liệu thực.'); return { enabled: false, reason: 'Cần thực hiện xác minh G3 ngoài mã nguồn.' }; }
function sendReminderF05(message, context) { if (!context || context.consent !== true) throw new Error('Chưa có đồng ý nhận email.'); if (!context.allowlist || context.allowlist.indexOf(message.recipient) < 0) throw new Error('Người nhận không thuộc allowlist.'); throw new Error('Gửi email bị tắt cho đến khi người dùng phê duyệt tích hợp.'); }
function kiemTraF05() { const ss = SpreadsheetApp.getActive(); const missing = F05.tabs.filter(function (name) { return !ss.getSheetByName(name); }); return { valid: missing.length === 0, missing: missing, version: F05.version }; }

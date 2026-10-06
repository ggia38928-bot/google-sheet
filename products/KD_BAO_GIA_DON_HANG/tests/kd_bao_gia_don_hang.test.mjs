import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..', '..', '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/fixtures/demo_data.json'), 'utf8'));
const expected = JSON.parse(fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/fixtures/expected-cases.json'), 'utf8'));
const engine = require(path.join(root, 'packages/core-engine/src/kd_bao_gia_don_hang.js'));

function copy(value) { return JSON.parse(JSON.stringify(value)); }

test('Fixture có đúng 50 bản ghi nghiệp vụ theo phân bổ đã khóa', () => {
  const expectedCounts = { KHACH_HANG: 6, SAN_PHAM: 8, BAO_GIA: 6, CHI_TIET_BAO_GIA: 12, DON_HANG: 5, CHI_TIET_DON_HANG: 8, THANH_TOAN: 5 };
  assert.deepEqual(Object.fromEntries(Object.keys(expectedCounts).map(key => [key, fixture[key].length])), expectedCounts);
  assert.equal(Object.values(expectedCounts).reduce((a, b) => a + b, 0), 50);
  assert.equal(fixture.meta.business_record_count, 50);
});

test('Fixture có ref hợp lệ và ID duy nhất', () => {
  assert.equal(engine.validateDataset(fixture), true);
});

test('Oracle dòng báo giá 2 × 100.000, giảm 10%, VAT 8% bằng 194.400', () => {
  const c = expected.quote_line_oracle;
  assert.deepEqual(engine.calculateQuoteLine(c.quantity, c.unit_price, c.discount_rate, c.vat_rate), {
    subtotal: 200000,
    discountAmount: 20000,
    netBeforeVat: 180000,
    vatAmount: 14400,
    total: 194400
  });
});

test('Dòng trống trả kết quả trống và không sinh số ảo', () => {
  assert.deepEqual(engine.calculateQuoteLine('', '', 0, 0.08), { subtotal: null, discountAmount: null, netBeforeVat: null, vatAmount: null, total: null });
});

test('Tỷ lệ và số tiền không hợp lệ bị chặn', () => {
  assert.throws(() => engine.calculateQuoteLine(1, -1, 0, 0.08), /không âm/);
  assert.throws(() => engine.calculateQuoteLine(1, 100, 1.2, 0.08), /0–1/);
});

test('Mọi tỷ lệ chiết khấu fixture nằm trong khoảng 0 đến 1', () => {
  for (const line of fixture.CHI_TIET_BAO_GIA) {
    assert.equal(Number.isFinite(line.TY_LE_CHIET_KHAU), true, line.MA_DONG_BAO_GIA);
    assert.ok(line.TY_LE_CHIET_KHAU >= 0 && line.TY_LE_CHIET_KHAU <= 1, line.MA_DONG_BAO_GIA);
  }
});

test('Tiền chiết khấu bằng thành tiền trước chiết khấu nhân tỷ lệ', () => {
  const result = engine.calculateQuoteLine(3, 125000, 0.12, 0.08);
  assert.equal(result.subtotal, 375000);
  assert.equal(result.discountAmount, result.subtotal * 0.12);
});

test('Thanh toán không tham gia cột tỷ lệ chiết khấu hoặc tổng báo giá', () => {
  const changed = copy(fixture);
  changed.THANH_TOAN[0].SO_TIEN = 999999999;
  assert.deepEqual(
    engine.calculateQuoteTotals(changed.BAO_GIA, changed.CHI_TIET_BAO_GIA),
    engine.calculateQuoteTotals(fixture.BAO_GIA, fixture.CHI_TIET_BAO_GIA)
  );
  assert.doesNotMatch(engine.FORMULAS.quoteLine.discount, /THANH_TOAN|THANH_TOÁN/);
  assert.match(engine.FORMULAS.quoteLine.discount, /J2\*H2/);
});

test('Tổng báo giá thay đổi đúng khi thay đổi tỷ lệ chiết khấu', () => {
  const changed = copy(fixture);
  changed.CHI_TIET_BAO_GIA.find(line => line.MA_DONG_BAO_GIA === 'DBG-001').TY_LE_CHIET_KHAU = 0.2;
  const before = engine.calculateQuoteTotals(fixture.BAO_GIA, fixture.CHI_TIET_BAO_GIA);
  const after = engine.calculateQuoteTotals(changed.BAO_GIA, changed.CHI_TIET_BAO_GIA);
  assert.equal(before['BG-001-R1'], 464400);
  assert.equal(after['BG-001-R1'], 442800);
  assert.equal(before['BG-001-R1'] - after['BG-001-R1'], 21600);
});

test('Tổng báo giá tách theo revision và revision cũ giữ nguyên', () => {
  const totals = engine.calculateQuoteTotals(fixture.BAO_GIA, fixture.CHI_TIET_BAO_GIA);
  assert.equal(totals['BG-001-R1'], 464400);
  assert.equal(totals['BG-001-R2'], 626400);
  assert.notEqual(totals['BG-001-R1'], totals['BG-001-R2']);
});

test('Tỷ lệ chuyển đổi chỉ dùng báo giá đã quyết định', () => {
  assert.equal(engine.calculateConversionRate(fixture.BAO_GIA), expected.conversion_oracle.rate);
});

test('Thanh toán chờ xác nhận không làm giảm công nợ', () => {
  const receivables = engine.calculateReceivables(fixture.DON_HANG, fixture.CHI_TIET_DON_HANG, fixture.THANH_TOAN);
  assert.deepEqual(receivables['DH-002'], { orderTotal: 1300000, confirmedPaid: 0, receivable: 1300000 });
});

test('Đơn 800.000 thu xác nhận 500.000 còn công nợ 300.000', () => {
  const receivables = engine.calculateReceivables(fixture.DON_HANG, fixture.CHI_TIET_DON_HANG, fixture.THANH_TOAN);
  assert.deepEqual(receivables['DH-001'], { orderTotal: 800000, confirmedPaid: 500000, receivable: 300000 });
});

test('Xác nhận một thanh toán làm thực thu tăng và công nợ/KPI giảm đúng', () => {
  const before = engine.calculateDashboard(fixture);
  const changed = copy(fixture);
  changed.THANH_TOAN.find(payment => payment.MA_THANH_TOAN === 'TT-002').TRANG_THAI = 'ĐÃ XÁC NHẬN';
  const after = engine.calculateDashboard(changed);
  assert.equal(after.confirmedCollected - before.confirmedCollected, 300000);
  assert.equal(before.receivable - after.receivable, 300000);
  assert.equal(after.confirmedOrderValue, before.confirmedOrderValue);
});

test('Tạo revision mới không sửa object revision cũ', () => {
  const sourceBefore = copy(fixture.BAO_GIA.find(q => q.MA_BAO_GIA_REVISION === 'BG-001-R2'));
  const result = engine.createQuoteRevision(fixture.BAO_GIA, 'BG-001-R2', { HAN_HIEU_LUC: '2026-09-30' });
  assert.deepEqual(fixture.BAO_GIA.find(q => q.MA_BAO_GIA_REVISION === 'BG-001-R2'), sourceBefore);
  assert.equal(result.revision.MA_BAO_GIA_REVISION, 'BG-001-R3');
  assert.equal(result.revision.TRANG_THAI, 'NHÁP');
});

test('Workflow hợp lệ tăng RowVersion', () => {
  const entity = { type: 'BAO_GIA', TRANG_THAI: 'NHÁP', PHIEN_BAN_DONG: 2 };
  const updated = engine.transitionStatus(entity, 'CHỜ DUYỆT', 2, 'KINH DOANH');
  assert.equal(updated.TRANG_THAI, 'CHỜ DUYỆT');
  assert.equal(updated.PHIEN_BAN_DONG, 3);
});

test('Workflow sai bị chặn', () => {
  assert.throws(() => engine.transitionStatus({ type: 'BAO_GIA', TRANG_THAI: 'NHÁP', PHIEN_BAN_DONG: 1 }, 'CHẤP NHẬN', 1, 'TRƯỞNG PHÒNG'), /không hợp lệ/);
});

test('RowVersion lệch bị chặn', () => {
  assert.throws(() => engine.transitionStatus({ type: 'DON_HANG', TRANG_THAI: 'MỚI', PHIEN_BAN_DONG: 3 }, 'XÁC NHẬN', 2, 'SALES ADMIN'), /không khớp/);
});

test('Nhân viên kinh doanh không tự duyệt báo giá', () => {
  assert.throws(() => engine.transitionStatus({ type: 'BAO_GIA', TRANG_THAI: 'CHỜ DUYỆT', PHIEN_BAN_DONG: 1 }, 'ĐÃ DUYỆT', 1, 'KINH DOANH'), /không có quyền/);
});

test('Chuyển báo giá chấp nhận thành đơn là idempotent', () => {
  const first = engine.convertAcceptedQuote(fixture.BAO_GIA, [], 'BG-001-R2');
  const second = engine.convertAcceptedQuote(fixture.BAO_GIA, first.orders, 'BG-001-R2');
  assert.equal(first.created, true);
  assert.equal(second.created, false);
  assert.equal(second.orders.length, 1);
  assert.equal(second.order.MA_BAO_GIA_REVISION, 'BG-001-R2');
});

test('Không chuyển revision cũ hoặc báo giá chưa chấp nhận thành đơn', () => {
  assert.throws(() => engine.convertAcceptedQuote(fixture.BAO_GIA, [], 'BG-001-R1'), /revision mới nhất/);
  assert.throws(() => engine.convertAcceptedQuote(fixture.BAO_GIA, [], 'BG-004-R1'), /revision mới nhất/);
});

test('Giao 6 rồi 4 cho đơn 10 có tổng giao 10 và còn 0', () => {
  assert.deepEqual(engine.calculateDelivery(expected.delivery_oracle.ordered, expected.delivery_oracle.shipments), { delivered: 10, remaining: 0 });
});

test('Giao vượt và giao cho đơn hủy bị chặn', () => {
  assert.throws(() => engine.calculateDelivery(10, [6, 5]), /vượt/);
  assert.throws(() => engine.calculateDelivery(10, [1], true), /Đơn hủy/);
  assert.deepEqual(engine.calculateDelivery(10, [], true), { delivered: 0, remaining: 10 });
});

test('Formula injection bị vô hiệu hóa khi import', () => {
  for (const value of ['=IMPORTXML("x")', '+1+1', '-2+2', '@SUM(A:A)']) assert.ok(engine.sanitizeImportValue(value).startsWith("'"));
  assert.equal(engine.sanitizeImportValue('Nội dung an toàn'), 'Nội dung an toàn');
});

test('Demo rerun cùng request không nhân đôi dữ liệu hoặc mất công thức', () => {
  const model = engine.createWorkbookModel();
  engine.installDemo(model, fixture, 'YEU-CAU-001');
  const before = JSON.stringify(model);
  engine.installDemo(model, fixture, 'YEU-CAU-001');
  assert.equal(JSON.stringify(model), before);
  assert.equal(model.data.KHACH_HANG.length, 6);
  assert.equal(model.formulas.receivable.includes('MAX'), true);
});

test('Clean tạo backup và Restore phục hồi dữ liệu, công thức, validation, dashboard', () => {
  const model = engine.installDemo(engine.createWorkbookModel(), fixture, 'YEU-CAU-002');
  const dashboardBefore = copy(model.dashboard);
  const backup = engine.cleanWorkbook(model);
  assert.equal(model.data.DON_HANG.length, 0);
  assert.equal(model.backups.length, 1);
  engine.restoreWorkbook(model, backup.id);
  assert.equal(model.data.DON_HANG.length, 5);
  assert.deepEqual(model.dashboard, dashboardBefore);
  assert.ok(model.formulas.quoteTotal);
  assert.ok(model.validations.paymentStatus.includes('ĐÃ XÁC NHẬN'));
});

test('Chế độ Sạch không seed Demo nhưng vẫn giữ công thức và validation', () => {
  const model = engine.installClean(engine.createWorkbookModel());
  assert.equal(Object.values(model.data).reduce((sum, rows) => sum + rows.length, 0), 0);
  assert.ok(model.formulas.quoteLine.total);
  assert.ok(model.validations.orderStatus.includes('HỦY'));
});

test('Installer Apps Script có cú pháp JavaScript hợp lệ', () => {
  const source = fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs'), 'utf8');
  assert.doesNotThrow(() => new vm.Script(source));
});

test('Installer có đủ entrypoint và cơ chế an toàn bắt buộc', () => {
  const source = fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs'), 'utf8');
  for (const name of ['caiDatDemoBaoGiaDonHang', 'caiDatSachBaoGiaDonHang', 'caiDatBusinessBaoGiaDonHang', 'taoDuLieuDemoBaoGiaDonHang', 'kiemTraHeThongBaoGiaDonHang', 'saoLuuBaoGiaDonHang', 'khoiPhucBaoGiaDonHang', 'lamSachBaoGiaDonHang']) assert.match(source, new RegExp(`function ${name}\\(`));
  for (const required of ['LockService.getDocumentLock', 'PropertiesService.getDocumentProperties', 'setDataValidation', '.protect()', 'backupKD_']) assert.ok(source.includes(required));
  for (const forbidden of ['MailApp', 'GmailApp', 'doGet(', 'doPost(']) assert.equal(source.includes(forbidden), false);
});

test('Installer dùng công thức vi_VN và dựng Dashboard động đủ 12 KPI, 3 biểu đồ', () => {
  const source = fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs'), 'utf8');
  assert.match(source, /setSpreadsheetLocale\('vi_VN'\)/);
  assert.match(source, /=IF\(RC\[-1\]="";"";/);
  assert.match(source, /const kpis = \[/);
  assert.equal((source.match(/sheet\.newChart\(\)/g) || []).length, 3);
  assert.ok(source.includes("sheet.getCharts().forEach"));
  assert.ok(source.includes("['Giá trị báo giá chấp nhận'"));
  assert.ok(source.includes("['Lợi nhuận gộp dự kiến'"));
  assert.ok(source.includes("['Đơn hủy'"));
  assert.ok(source.includes("F3=\"TẤT CẢ\""));
  assert.ok(source.includes("B4=\"TẤT CẢ\""));
});

test('Installer giữ H là input chiết khấu và chỉ ghi thanh toán vào ĐƠN_HÀNG.H', () => {
  const source = fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs'), 'utf8');
  assert.ok(source.includes("getRange('H2:H500').setDataValidation(rateRule).setNumberFormat('0.00%')"));
  assert.doesNotMatch(source, /quoteLines\.getRange\(2,\s*8[^\n]*setFormula/);
  assert.match(source, /quoteLines\.getRange\(2,\s*11[^\n]*RC\[-1\]\*RC\[-3\]/);
  assert.match(source, /orders\.getRange\(2,\s*8[^\n]*SUMIFS\(\\'THANH_TOÁN\\'/);
  assert.ok(source.includes('clearUnexpectedDiscountFormulasKD_'));
});

test('Metadata sau cài đặt không giữ trạng thái đang cài hoặc SHA cũ', () => {
  const source = fs.readFileSync(path.join(root, 'products/KD_BAO_GIA_DON_HANG/apps-script/installer.gs'), 'utf8');
  assert.ok(source.includes("['Trạng thái', 'Đã cài đặt']"));
  assert.ok(source.includes("['Mức xác minh', 'local_verified']"));
  assert.ok(source.includes("['G2 Google Sheets/Apps Script', 'BLOCKED_EXTERNAL']"));
  assert.ok(source.includes("getProperty('KD_SOURCE_COMMIT')"));
  assert.doesNotMatch(source, /Đang cài dữ liệu Demo|thay đổi local chưa commit|\b[0-9a-f]{40}\b/);
});

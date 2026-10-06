import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const fixture = require('../../../products/KD_BAO_GIA_DON_HANG/fixtures/demo_data.json');
const engine = require('../../../packages/core-engine/src/kd_bao_gia_don_hang.js');
const { createFixtureRepository } = require('../lib/repositories/fixture-repository.cjs');
const { createCommercialService } = require('../lib/services/commercial-service.cjs');
const fixedClock = () => new Date('2026-10-06T08:00:00Z');
const service = () => createCommercialService(createFixtureRepository(), fixedClock);

test('fixture có đúng 50 bản ghi nghiệp vụ và khóa ngoại hợp lệ', () => {
  const count = Object.values(fixture).filter(Array.isArray).reduce((sum, rows) => sum + rows.length, 0);
  assert.equal(count, 50);
  assert.equal(engine.validateDataset(fixture), true);
});

test('báo giá tính đúng chiết khấu, thuế và tổng tiền', () => {
  const line = engine.calculateQuoteLine(2, 100000, 0.1, 0.08);
  assert.deepEqual(line, { subtotal: 200000, discountAmount: 20000, netBeforeVat: 180000, vatAmount: 14400, total: 194400 });
});

test('dashboard có 10 KPI và 3 biểu đồ động', () => {
  const app = service();
  const dashboard = app.dashboard();
  assert.equal(dashboard.kpis.length, 10);
  assert.equal(dashboard.charts.length, 3);
  assert.ok(dashboard.kpis.every(item => Number.isFinite(item.value)));
  assert.ok(dashboard.charts.every(chart => chart.values.length > 0));
  const filtered = app.dashboard({ trangThai: 'CHẤP NHẬN' });
  assert.ok(filtered.kpis.find(item => item.label === 'Báo giá hiện hành').value < dashboard.kpis.find(item => item.label === 'Báo giá hiện hành').value);
});

test('hồ sơ khách hàng cộng công nợ từ các đơn liên kết', () => {
  const customers = service().customers();
  assert.equal(customers.length, fixture.KHACH_HANG.length);
  assert.ok(customers.some(item => item.CONG_NO > 0));
});

test('chuyển báo giá đã chấp nhận thành đơn hàng và bảo đảm idempotency', () => {
  const app = service();
  const created = app.createQuote({ MA_KHACH_HANG: 'KH-001', HAN_HIEU_LUC: '2026-11-01', lines: [{ MA_SAN_PHAM: 'SP-001', SO_LUONG: 2, DON_GIA: 100000, TY_LE_CHIET_KHAU: 0.1, THUE_SUAT: 0.08 }] });
  app.updateQuote(created.MA_BAO_GIA_REVISION, { TRANG_THAI: 'CHẤP NHẬN' });
  const first = app.convertQuote(created.MA_BAO_GIA_REVISION);
  const second = app.convertQuote(created.MA_BAO_GIA_REVISION);
  assert.equal(first.created, true);
  assert.equal(second.created, false);
  assert.equal(first.order.MA_DON_HANG, second.order.MA_DON_HANG);
});

test('tạo và sửa báo giá dùng kiểm tra của domain engine', () => {
  const app = service();
  const created = app.createQuote({
    MA_KHACH_HANG: 'KH-001', HAN_HIEU_LUC: '2026-11-01', NGUOI_PHU_TRACH: 'NV-003',
    lines: [{ MA_SAN_PHAM: 'SP-001', SO_LUONG: 2, DON_GIA: 100000, TY_LE_CHIET_KHAU: 0.1, THUE_SUAT: 0.08 }]
  });
  assert.equal(created.TONG_TIEN, 194400);
  assert.equal(app.updateQuote(created.MA_BAO_GIA_REVISION, { NGUOI_PHU_TRACH: 'NV-002' }).NGUOI_PHU_TRACH, 'NV-002');
  assert.throws(() => app.createQuote({ MA_KHACH_HANG: 'KH-001', lines: [{ MA_SAN_PHAM: 'SP-001', SO_LUONG: 1, DON_GIA: 1, TY_LE_CHIET_KHAU: 1.2, THUE_SUAT: 0.08 }] }), /0–1/);
});

test('thanh toán không âm và không vượt số còn phải thu', () => {
  const app = service();
  const order = app.orders().find(item => item.receivable > 0);
  assert.throws(() => app.addPayment(order.MA_DON_HANG, -1), /phải dương/);
  assert.throws(() => app.addPayment(order.MA_DON_HANG, order.receivable + 1), /không vượt/);
  app.addPayment(order.MA_DON_HANG, 1000);
  assert.equal(app.orders().find(item => item.MA_DON_HANG === order.MA_DON_HANG).receivable, order.receivable - 1000);
});

test('đơn quá hạn được xác định từ hạn thanh toán và công nợ còn lại', () => {
  const dashboard = service().dashboard();
  const overdue = dashboard.kpis.find(item => item.label === 'Đơn hàng quá hạn');
  assert.ok(overdue.value > 0);
});

test('giao hàng không thể vượt số lượng đã đặt', () => {
  const app = service();
  assert.throws(() => app.addShipment('DH-001', 999999), /vượt số lượng đặt/);
});

test('giao diện chính là tiếng Việt và không chứa dữ liệu mẫu thô', async () => {
  const [html, script] = await Promise.all([readFile(new URL('../public/index.html', import.meta.url), 'utf8'), readFile(new URL('../public/app.js', import.meta.url), 'utf8')]);
  assert.match(html, /lang="vi"/);
  assert.doesNotMatch(`${html}\n${script}`, /Sample|Demo item|Record 001/i);
  for (const label of ['Khách hàng', 'Báo giá', 'Đơn hàng', 'Thanh toán & công nợ']) assert.match(html, new RegExp(label));
});

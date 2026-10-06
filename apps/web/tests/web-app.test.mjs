import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { escapeHtml } from '../public/security.js';

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

test('hồ sơ khách hàng cộng công nợ từ các đơn liên kết và không cộng đơn đã hủy', () => {
  const app = service();
  const customers = app.customers();
  assert.equal(customers.length, fixture.KHACH_HANG.length);
  assert.ok(customers.some(item => item.CONG_NO > 0));
  const totalCustDebt = customers.reduce((sum, c) => sum + c.CONG_NO, 0);
  const kpiReceivable = app.dashboard().kpis.find(item => item.label === 'Còn phải thu').value;
  assert.equal(totalCustDebt, kpiReceivable);
  const cancelledCustomer = customers.find(item => item.MA_KHACH_HANG === 'KH-004');
  assert.equal(cancelledCustomer.CONG_NO, 0);
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
  assert.throws(() => app.updateQuote(created.MA_BAO_GIA_REVISION, { TRANG_THAI: 'KHONG_HOP_LE' }), /Trạng thái báo giá không hợp lệ/);
});

test('thanh toán không âm và không vượt số còn phải thu', () => {
  const app = service();
  const order = app.orders().find(item => item.receivable > 0);
  assert.throws(() => app.addPayment(order.MA_DON_HANG, -1), /phải dương/);
  assert.throws(() => app.addPayment(order.MA_DON_HANG, order.receivable + 1), /không vượt/);
  app.addPayment(order.MA_DON_HANG, 1000);
  assert.equal(app.orders().find(item => item.MA_DON_HANG === order.MA_DON_HANG).receivable, order.receivable - 1000);
});

test('chặn thanh toán và giao hàng cho đơn hàng đã hủy', () => {
  const app = service();
  assert.throws(() => app.addPayment('DH-004', 1000), /đã hủy không thể ghi nhận thanh toán/);
  assert.throws(() => app.addShipment('DH-004', 1), /Đơn hủy/);
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

test('escapeHtml vô hiệu hóa payload XSS đối kháng trước khi render', () => {
  const payload = '<img src=x onerror="globalThis.biTanCong=true">';
  const escaped = escapeHtml(payload);
  assert.equal(escaped, '&lt;img src=x onerror=&quot;globalThis.biTanCong=true&quot;&gt;');
  assert.doesNotMatch(escaped, /<img/i);
});

test('HTTP API và route tĩnh phục vụ đúng mã trạng thái và MIME type', async () => {
  const { server } = await import('../server.mjs');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  try {
    const resHome = await fetch(`http://127.0.0.1:${port}/`);
    assert.equal(resHome.status, 200);
    assert.match(resHome.headers.get('content-type'), /text\/html/);

    const resApp = await fetch(`http://127.0.0.1:${port}/app.js`);
    assert.equal(resApp.status, 200);
    assert.match(resApp.headers.get('content-type'), /text\/javascript/);

    const resCss = await fetch(`http://127.0.0.1:${port}/styles.css`);
    assert.equal(resCss.status, 200);
    assert.match(resCss.headers.get('content-type'), /text\/css/);

    const resSecurity = await fetch(`http://127.0.0.1:${port}/security.js`);
    assert.equal(resSecurity.status, 200);
    assert.match(resSecurity.headers.get('content-type'), /text\/javascript/);

    const resDash = await fetch(`http://127.0.0.1:${port}/api/dashboard`);
    assert.equal(resDash.status, 200);
    const dash = await resDash.json();
    assert.equal(dash.kpis.length, 10);

    const resCust = await fetch(`http://127.0.0.1:${port}/api/khach-hang/KH-001`);
    assert.equal(resCust.status, 200);
    const cust = await resCust.json();
    assert.equal(cust.MA_KHACH_HANG, 'KH-001');

    const resNotFound = await fetch(`http://127.0.0.1:${port}/api/khach-hang/KH-KHONG-TON-TAI`);
    assert.equal(resNotFound.status, 404);

    for (const action of ['thanh-toan', 'giao-hang']) {
      const body = action === 'thanh-toan' ? { soTien: 1000 } : { soLuong: 1 };
      const response = await fetch(`http://127.0.0.1:${port}/api/don-hang/DH-004/${action}`, {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body)
      });
      assert.equal(response.status, 400);
      assert.match((await response.json()).error, /hủy/i);
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

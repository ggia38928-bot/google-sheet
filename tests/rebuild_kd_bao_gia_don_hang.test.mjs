import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const product = path.join(root, 'products/KD_BAO_GIA_DON_HANG');
const engine = require(path.join(root, 'packages/core-engine/src/kd_bao_gia_don_hang.js'));
const fixture = JSON.parse(fs.readFileSync(path.join(product, 'fixtures/demo_data.json'), 'utf8'));

test('G0: artifact cốt lõi tồn tại, không rỗng và không dùng đường dẫn ổ đĩa', () => {
  const files = ['DOMAIN_SPEC.md', 'PRD.md', 'README.md', 'manifest.yaml', 'schema/schema.json', 'formulas/FORMULA_CONTRACT.md', 'fixtures/demo_data.json', 'fixtures/expected-cases.json', 'apps-script/installer.gs', 'tests/kd_bao_gia_don_hang.test.mjs'];
  for (const relative of files) {
    const full = path.join(product, relative);
    assert.ok(fs.existsSync(full), relative);
    const content = fs.readFileSync(full, 'utf8');
    assert.ok(content.trim().length > 0, `${relative} không được rỗng`);
    assert.doesNotMatch(content, /(^|[\s'"(])[CDE]:[\\/]/im);
  }
});

test('G0: schema có đủ 13 bảng và contract chung chống ghi đè', () => {
  const schema = JSON.parse(fs.readFileSync(path.join(product, 'schema/schema.json'), 'utf8'));
  assert.equal(schema.tables.length, 13);
  const names = new Set(schema.tables.map(table => table.name));
  for (const name of ['KHACH_HANG', 'SAN_PHAM', 'NHAN_VIEN', 'BAO_GIA', 'CHI_TIET_BAO_GIA', 'DON_HANG', 'CHI_TIET_DON_HANG', 'GIAO_HANG', 'CHI_TIET_GIAO_HANG', 'THANH_TOAN', 'CAU_HINH', 'NHAT_KY', 'DASHBOARD']) assert.ok(names.has(name));
  assert.ok(schema.common_columns_applied_to_all_tables.some(column => column.name === 'PHIEN_BAN_DONG'));
  assert.ok(schema.tables.every(table => table.primary_key && table.uses_common_columns === true && table.statuses.length > 0));
});

test('G1: fixture hiện tại tính được dashboard động và công nợ', () => {
  assert.equal(engine.validateDataset(fixture), true);
  const dashboard = engine.calculateDashboard(fixture);
  assert.ok(dashboard.sentQuoteValue > 0);
  assert.ok(dashboard.confirmedOrderValue > dashboard.confirmedCollected);
  assert.ok(dashboard.receivable > 0);
});

test('G1: thay đổi thanh toán kiểm soát làm dashboard đổi nhưng giá trị đơn không đổi', () => {
  const changed = JSON.parse(JSON.stringify(fixture));
  const before = engine.calculateDashboard(fixture);
  changed.THANH_TOAN.find(row => row.MA_THANH_TOAN === 'TT-002').TRANG_THAI = 'ĐÃ XÁC NHẬN';
  const after = engine.calculateDashboard(changed);
  assert.equal(after.confirmedCollected, before.confirmedCollected + 300000);
  assert.equal(after.receivable, before.receivable - 300000);
  assert.equal(after.confirmedOrderValue, before.confirmedOrderValue);
});

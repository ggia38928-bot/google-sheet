import test from 'node:test';
import assert from 'node:assert/strict';
import { createF05Engine, calculateCrmKpis, sanitizeImportedValue } from '../packages/core-engine/src/engine3.js';

const demoRows = [
  { id: 'CO-001', stage: 'THẮNG', value: 50000000, probability: 1 },
  { id: 'CO-002', stage: 'THUA', value: 25000000, probability: 0 },
  { id: 'CO-003', stage: 'BÁO GIÁ', value: 30000000, probability: 0.6 }
];

test('F05: Business không tự seed demo; Demo có nhiều hơn một dòng liên kết', () => {
  const engine = createF05Engine();
  assert.equal(engine.install({ tier: 'business', mode: 'demo' }).tables.Cơ_hội.length, 0);
  const demo = engine.install({ tier: 'demo', mode: 'demo' });
  assert.ok(demo.tables.Lead.length > 1);
  assert.ok(demo.tables.Khách_hàng.length > 1);
  assert.ok(demo.tables.Cơ_hội.length > 1);
});

test('F05: cài lại idempotent, update không ghi đè công thức và append trong grid', () => {
  const engine = createF05Engine();
  engine.install({ tier: 'pro', mode: 'demo', requestId: 'cai-001' });
  const repeated = engine.install({ tier: 'pro', mode: 'demo', requestId: 'cai-001' });
  assert.equal(repeated.idempotent, true);
  const created = engine.createOpportunity({ title: 'Cơ hội mới', accountId: 'KH-001', value: 1000000, probability: 0.2 }, { role: 'NHÂN_VIÊN', requestId: 'tao-001' });
  assert.equal(created.inFormulaGrid, true);
  assert.throws(() => engine.updateOpportunity(created.id, { weightedValue: 1 }, { role: 'NHÂN_VIÊN', expectedRowVersion: 1, requestId: 'sua-001' }), /công thức/);
});

test('F05: Clean sao lưu trước, Demo sau Clean không vượt grid và Restore khôi phục đầy đủ', () => {
  const engine = createF05Engine();
  const initial = engine.install({ tier: 'demo', mode: 'demo', requestId: 'cai-002' });
  const backup = engine.clean({ role: 'QUẢN_TRỊ', requestId: 'clean-001' });
  assert.ok(backup.backupId);
  const reset = engine.install({ tier: 'demo', mode: 'demo', requestId: 'cai-003' });
  assert.ok(reset.tables.Cơ_hội.length < reset.gridCapacity);
  engine.restore(backup.backupId, { role: 'QUẢN_TRỊ', requestId: 'restore-001' });
  assert.deepEqual(engine.snapshot().tables, initial.tables);
});

test('F05: apply_roles có hiệu lực; khóa kỳ và RowVersion chặn CRUD/import', () => {
  const engine = createF05Engine();
  engine.install({ tier: 'pro', mode: 'demo', requestId: 'cai-004' });
  assert.equal(engine.applyRoles({ 'nv@example.invalid': 'NHÂN_VIÊN' }).applied, true);
  engine.lockPeriod('2026-09', { role: 'QUẢN_TRỊ', requestId: 'khoa-001' });
  assert.throws(() => engine.createOpportunity({ title: 'Bị khóa', accountId: 'KH-001', value: 1, probability: 0.1, period: '2026-09' }, { role: 'NHÂN_VIÊN', requestId: 'tao-002' }), /kỳ đã khóa/);
  assert.throws(() => engine.importRows('Cơ_hội', [{ title: 'Bị khóa', accountId: 'KH-001', value: 1, probability: 0.1, period: '2026-09' }], { role: 'NHÂN_VIÊN', requestId: 'import-001' }), /kỳ đã khóa/);
  engine.unlockPeriod('2026-09', { role: 'QUẢN_TRỊ', requestId: 'mo-001' });
  assert.throws(() => engine.updateOpportunity('CO-001', { title: 'Sai phiên bản' }, { role: 'QUẢN_TRỊ', expectedRowVersion: 99, requestId: 'sua-002' }), /RowVersion/);
  assert.equal(engine.snapshot().lockedPeriods.length, 0);
});

test('F05: migration dry-run không ghi header; workflow chỉ cho phép cạnh hợp lệ', () => {
  const engine = createF05Engine();
  engine.install({ tier: 'pro', mode: 'demo', requestId: 'cai-005' });
  const before = engine.snapshot().headers.Cơ_hội;
  assert.equal(engine.migrate({ headers: ['Sai'] }, { dryRun: true, role: 'QUẢN_TRỊ', requestId: 'mig-001' }).changed, false);
  assert.deepEqual(engine.snapshot().headers.Cơ_hội, before);
  assert.throws(() => engine.transitionOpportunity('CO-001', 'BÁO_GIÁ', { role: 'QUẢN_TRỊ', expectedRowVersion: 1, requestId: 'wf-001' }), /không hợp lệ/);
  assert.equal(engine.transitionOpportunity('CO-001', 'THẮNG', { role: 'QUẢN_TRỊ', expectedRowVersion: 1, requestId: 'wf-002' }).stage, 'THẮNG');
});

test('F05: KPI không cộng tỷ lệ, trạng thái trống không là mở và import chặn formula injection', () => {
  const kpi = calculateCrmKpis([...demoRows, { id: 'CO-004', stage: '', value: 1, probability: 1 }]);
  assert.equal(kpi.winRate, 0.5);
  assert.equal(kpi.openCount, 1);
  assert.equal(kpi.weightedPipelineValue, 18000000);
  assert.equal(sanitizeImportedValue('=IMPORTXML("x")'), "'=IMPORTXML(\"x\")");
  assert.equal(sanitizeImportedValue('An toàn'), 'An toàn');
});

test('F05: tier lọc module và AppSheet/email chỉ bật khi có cấu hình thực, consent và allowlist', () => {
  const engine = createF05Engine();
  assert.equal(engine.install({ tier: 'demo', mode: 'demo' }).modules.appsheet, false);
  assert.equal(engine.install({ tier: 'business', mode: 'clean' }).modules.audit, true);
  assert.throws(() => engine.configureAppSheet({ appId: '' }, { role: 'QUẢN_TRỊ' }), /App ID/);
  assert.throws(() => engine.sendReminder({ recipient: 'ngoai@invalid', consent: false }, { role: 'QUẢN_TRỊ' }), /đồng ý/);
  assert.throws(() => engine.sendReminder({ recipient: 'ngoai@invalid', consent: true }, { role: 'QUẢN_TRỊ' }), /allowlist/);
});

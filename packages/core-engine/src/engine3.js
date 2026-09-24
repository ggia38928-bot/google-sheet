/**
 * Minh Templates 3.0.0-VI — lõi nghiệp vụ chạy cục bộ để kiểm thử F05.
 * Mô-đun này không gọi Google APIs và không ghi tệp.
 */

const crypto = require('node:crypto');

const OPEN_STAGES = new Set(['MỚI', 'TIẾP_CẬN', 'BÁO_GIÁ', 'ĐÀM_PHÁN']);
const CLOSED_STAGES = new Set(['THẮNG', 'THUA']);
const MODULES_BY_TIER = {
  demo: { dashboard: true, audit: false, backup: false, appsheet: false },
  pro: { dashboard: true, audit: true, backup: true, appsheet: false },
  business: { dashboard: true, audit: true, backup: true, appsheet: false }
};
const TRANSITIONS = {
  MỚI: new Set(['TIẾP_CẬN', 'THẮNG', 'THUA']),
  TIẾP_CẬN: new Set(['BÁO_GIÁ', 'THẮNG', 'THUA']),
  BÁO_GIÁ: new Set(['ĐÀM_PHÁN', 'THẮNG', 'THUA']),
  ĐÀM_PHÁN: new Set(['THẮNG', 'THUA']),
  THẮNG: new Set(),
  THUA: new Set()
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function checksum(value) {
  return crypto.createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
}

function sanitizeImportedValue(value) {
  if (typeof value !== 'string') return value;
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function calculateCrmKpis(opportunities) {
  let won = 0;
  let lost = 0;
  let open = 0;
  let openPipelineValue = 0;
  let weightedPipelineValue = 0;
  for (const item of opportunities) {
    const stage = typeof item.stage === 'string' ? item.stage.replace(/\s+/g, '_') : item.stage;
    if (stage === 'THẮNG') won += 1;
    else if (stage === 'THUA') lost += 1;
    else if (OPEN_STAGES.has(stage)) {
      open += 1;
      openPipelineValue += Number(item.value || 0);
      weightedPipelineValue += Math.round(Number(item.value || 0) * Number(item.probability ?? item.prob ?? 0));
    }
  }
  const closed = won + lost;
  return {
    wonCount: won,
    lostCount: lost,
    openCount: open,
    openPipelineValue,
    weightedPipelineValue,
    winRate: closed === 0 ? 0 : won / closed
  };
}

function assertRole(role, allowed) {
  if (!allowed.includes(role)) throw new Error('Bạn không có quyền thực hiện thao tác này.');
}

function makeDemoTables() {
  return {
    Lead: [
      { id: 'LD-001', name: 'Doanh nghiệp Thương mại Ánh Dương', source: 'Hội thảo', owner: 'NV_KINH_DOANH_01', rowVersion: 1 },
      { id: 'LD-002', name: 'Công ty Dịch vụ Bình Minh', source: 'Giới thiệu', owner: 'NV_KINH_DOANH_02', rowVersion: 1 },
      { id: 'LD-003', name: 'Hợp tác xã Sông Xanh', source: 'Website', owner: 'NV_KINH_DOANH_01', rowVersion: 1 }
    ],
    Khách_hàng: [
      { id: 'KH-001', name: 'Doanh nghiệp Thương mại Ánh Dương', leadId: 'LD-001', owner: 'NV_KINH_DOANH_01', rowVersion: 1 },
      { id: 'KH-002', name: 'Công ty Dịch vụ Bình Minh', leadId: 'LD-002', owner: 'NV_KINH_DOANH_02', rowVersion: 1 },
      { id: 'KH-003', name: 'Hợp tác xã Sông Xanh', leadId: 'LD-003', owner: 'NV_KINH_DOANH_01', rowVersion: 1 }
    ],
    Liên_hệ: [
      { id: 'LH-001', accountId: 'KH-001', name: 'Bộ phận mua hàng', rowVersion: 1 },
      { id: 'LH-002', accountId: 'KH-002', name: 'Bộ phận vận hành', rowVersion: 1 },
      { id: 'LH-003', accountId: 'KH-003', name: 'Bộ phận quản lý', rowVersion: 1 }
    ],
    Cơ_hội: [
      { id: 'CO-001', title: 'Gói chuẩn hóa quy trình bán hàng', accountId: 'KH-001', stage: 'MỚI', value: 50000000, probability: 0.1, weightedValue: 5000000, period: '2026-09', rowVersion: 1 },
      { id: 'CO-002', title: 'Đào tạo dashboard quản trị', accountId: 'KH-002', stage: 'THUA', value: 25000000, probability: 0, weightedValue: 0, period: '2026-09', rowVersion: 1 },
      { id: 'CO-003', title: 'Tư vấn báo cáo bán hàng', accountId: 'KH-003', stage: 'BÁO_GIÁ', value: 30000000, probability: 0.6, weightedValue: 18000000, period: '2026-09', rowVersion: 1 }
    ],
    Hoạt_động: [
      { id: 'HD-001', accountId: 'KH-001', type: 'GẶP_MẶT', status: 'HOÀN_THÀNH', rowVersion: 1 },
      { id: 'HD-002', accountId: 'KH-002', type: 'GỌI_ĐIỆN', status: 'CHỜ_XỬ_LÝ', rowVersion: 1 },
      { id: 'HD-003', accountId: 'KH-003', type: 'EMAIL', status: 'CHỜ_XỬ_LÝ', rowVersion: 1 }
    ],
    Lịch_sử_chăm_sóc: [],
    Nhân_viên: [
      { id: 'NV_KINH_DOANH_01', role: 'NHÂN_VIÊN', rowVersion: 1 },
      { id: 'NV_KINH_DOANH_02', role: 'NHÂN_VIÊN', rowVersion: 1 }
    ]
  };
}

function makeHeaders() {
  return {
    Cơ_hội: ['Mã cơ hội', 'Tên cơ hội', 'Mã khách hàng', 'Giai đoạn', 'Giá trị kỳ vọng', 'Xác suất', 'Giá trị trọng số', 'Kỳ', 'Phiên bản dòng'],
    Lead: ['Mã lead', 'Tên lead', 'Nguồn', 'Phụ trách', 'Phiên bản dòng']
  };
}

class F05Engine {
  constructor() {
    this.gridCapacity = 1000;
    this.backups = new Map();
    this.requestResults = new Map();
    this.state = this.emptyState();
  }

  emptyState() {
    return { tables: Object.fromEntries(Object.keys(makeDemoTables()).map((name) => [name, []])), headers: makeHeaders(), lockedPeriods: [], roles: {}, audit: [], tier: null, modules: null };
  }

  snapshot() {
    return clone({ ...this.state, lockedPeriods: [...this.state.lockedPeriods], gridCapacity: this.gridCapacity });
  }

  remember(requestId, result) {
    if (requestId) this.requestResults.set(requestId, clone(result));
    return result;
  }

  existing(requestId) {
    if (!requestId || !this.requestResults.has(requestId)) return null;
    return { ...clone(this.requestResults.get(requestId)), idempotent: true };
  }

  install({ tier = 'pro', mode = 'clean', requestId } = {}) {
    const previous = this.existing(requestId);
    if (previous) return previous;
    if (!MODULES_BY_TIER[tier]) throw new Error('Tier không hợp lệ.');
    const useDemo = tier !== 'business' && mode === 'demo';
    this.state = this.emptyState();
    this.state.tier = tier;
    this.state.modules = clone(MODULES_BY_TIER[tier]);
    if (useDemo) this.state.tables = makeDemoTables();
    const result = this.snapshot();
    return this.remember(requestId, result);
  }

  createBackup_(reason) {
    const backupId = `SAO_LUU-${String(this.backups.size + 1).padStart(4, '0')}`;
    const state = clone(this.state);
    this.backups.set(backupId, { reason, checksum: checksum(state), state });
    return backupId;
  }

  clean({ role, requestId } = {}) {
    const previous = this.existing(requestId);
    if (previous) return previous;
    assertRole(role, ['QUẢN_TRỊ']);
    const backupId = this.createBackup_('Làm sạch dữ liệu');
    const tier = this.state.tier || 'pro';
    this.state = this.emptyState();
    this.state.tier = tier;
    this.state.modules = clone(MODULES_BY_TIER[tier]);
    return this.remember(requestId, { backupId, cleaned: true });
  }

  restore(backupId, { role, requestId } = {}) {
    const previous = this.existing(requestId);
    if (previous) return previous;
    assertRole(role, ['QUẢN_TRỊ']);
    const backup = this.backups.get(backupId);
    if (!backup) throw new Error('Không tìm thấy bản sao lưu.');
    if (checksum(backup.state) !== backup.checksum) throw new Error('Bản sao lưu không toàn vẹn.');
    this.state = clone(backup.state);
    return this.remember(requestId, { restored: true, backupId });
  }

  applyRoles(roleMap) {
    this.state.roles = { ...this.state.roles, ...clone(roleMap) };
    return { applied: true, count: Object.keys(roleMap).length };
  }

  lockPeriod(period, { role, requestId } = {}) {
    assertRole(role, ['QUẢN_TRỊ']);
    if (!this.state.lockedPeriods.includes(period)) this.state.lockedPeriods.push(period);
    return this.remember(requestId, { locked: period });
  }

  unlockPeriod(period, { role, requestId } = {}) {
    assertRole(role, ['QUẢN_TRỊ']);
    this.state.lockedPeriods = this.state.lockedPeriods.filter((item) => item !== period);
    return this.remember(requestId, { unlocked: period });
  }

  assertWritable_(period) {
    if (period && this.state.lockedPeriods.includes(period)) throw new Error('Không thể ghi vì kỳ đã khóa.');
  }

  createOpportunity(input, { role, requestId } = {}) {
    const previous = this.existing(requestId);
    if (previous) return previous;
    assertRole(role, ['QUẢN_TRỊ', 'NHÂN_VIÊN']);
    this.assertWritable_(input.period);
    if (!this.state.tables.Khách_hàng.some((item) => item.id === input.accountId)) throw new Error('Mã khách hàng không tồn tại.');
    if (this.state.tables.Cơ_hội.length >= this.gridCapacity) throw new Error('Đã vượt quá vùng dữ liệu được phép.');
    const id = `CO-${String(this.state.tables.Cơ_hội.length + 1).padStart(3, '0')}`;
    const record = { id, title: sanitizeImportedValue(input.title), accountId: input.accountId, stage: input.stage || 'MỚI', value: Number(input.value || 0), probability: Number(input.probability || 0), weightedValue: Math.round(Number(input.value || 0) * Number(input.probability || 0)), period: input.period || '', rowVersion: 1 };
    this.state.tables.Cơ_hội.push(record);
    this.state.audit.push({ action: 'TẠO_CƠ_HỘI', entityId: id, evidenceId: requestId || 'không_có' });
    return this.remember(requestId, { ...clone(record), inFormulaGrid: true });
  }

  updateOpportunity(id, patch, { role, expectedRowVersion, requestId } = {}) {
    const previous = this.existing(requestId);
    if (previous) return previous;
    assertRole(role, ['QUẢN_TRỊ', 'NHÂN_VIÊN']);
    if (Object.prototype.hasOwnProperty.call(patch, 'weightedValue')) throw new Error('Không được ghi đè cột công thức.');
    const record = this.state.tables.Cơ_hội.find((item) => item.id === id);
    if (!record) throw new Error('Không tìm thấy cơ hội.');
    this.assertWritable_(record.period);
    if (record.rowVersion !== expectedRowVersion) throw new Error('RowVersion không khớp.');
    Object.assign(record, clone(patch));
    record.weightedValue = Math.round(record.value * record.probability);
    record.rowVersion += 1;
    return this.remember(requestId, clone(record));
  }

  transitionOpportunity(id, nextStage, context = {}) {
    const record = this.state.tables.Cơ_hội.find((item) => item.id === id);
    if (!record) throw new Error('Không tìm thấy cơ hội.');
    if (!TRANSITIONS[record.stage] || !TRANSITIONS[record.stage].has(nextStage)) throw new Error('Chuyển trạng thái không hợp lệ.');
    return this.updateOpportunity(id, { stage: nextStage }, context);
  }

  importRows(table, rows, context = {}) {
    if (table !== 'Cơ_hội') throw new Error('Bảng import không nằm trong whitelist.');
    return rows.map((row, index) => this.createOpportunity(Object.fromEntries(Object.entries(row).map(([key, value]) => [key, sanitizeImportedValue(value)])), { ...context, requestId: `${context.requestId || 'import'}-${index}` }));
  }

  migrate(target, { dryRun = true, role, requestId } = {}) {
    assertRole(role, ['QUẢN_TRỊ']);
    const expected = makeHeaders().Cơ_hội;
    if (dryRun) return this.remember(requestId, { changed: false, planned: target.headers?.filter((item) => !expected.includes(item)) || [] });
    const backupId = this.createBackup_('Di chuyển lược đồ');
    this.state.headers.Cơ_hội = [...expected];
    return this.remember(requestId, { changed: true, backupId });
  }

  configureAppSheet({ appId, dataSource }, { role } = {}) {
    assertRole(role, ['QUẢN_TRỊ']);
    if (!appId) throw new Error('Cần App ID thực để bật AppSheet.');
    if (!dataSource) throw new Error('Cần nguồn dữ liệu thực để bật AppSheet.');
    this.state.modules.appsheet = true;
    return { enabled: true };
  }

  sendReminder({ recipient, consent }, { role } = {}) {
    assertRole(role, ['QUẢN_TRỊ']);
    if (consent !== true) throw new Error('Chưa có đồng ý nhận email.');
    if (!['thongbao-noibo@minhtemplates.invalid'].includes(recipient)) throw new Error('Người nhận không thuộc allowlist.');
    return { queued: true };
  }
}

function createF05Engine() {
  return new F05Engine();
}

module.exports = { createF05Engine, calculateCrmKpis, sanitizeImportedValue, checksum };

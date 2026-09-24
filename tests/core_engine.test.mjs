/**
 * MINH TEMPLATES FACTORY — CORE ENGINE TEST SUITE
 * tests/core_engine.test.mjs
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const engine = require('../packages/core-engine/src/index.js');
const {
  VALID_TIERS,
  validateSkuConfig,
  transformConfigForTier,
  emitGasInstaller,
  checkGasSyntax,
  assertGasSyntax,
  generateSkuTierScript,
  generateAllTiersForSku
} = engine;

const dummyConfig = {
  sku: 'TEST01',
  name: 'Mẫu thử nghiệm tự động',
  version: '1.0.0',
  tables: [
    {
      name: 'DATA',
      color: '#1565C0',
      headers: ['ID', 'Name', 'Amount'],
      colWidths: [100, 200, 150],
      demoRows: [
        ['D-01', 'Item 1', 50000],
        ['D-02', 'Item 2', 75000]
      ],
      formats: [
        { range: 'C2:C100', format: '#,##0 "₫"' }
      ]
    }
  ],
  dashboard: {
    title: 'DASHBOARD TEST',
    subtitle: 'Kiểm thử engine',
    kpiCards: [
      { label: 'TỔNG TIỀN', formula: '=SUM(DATA!C2:C100)', format: '#,##0 "₫"', bg: '#E8F5E9' },
      { label: 'SỐ DÒNG', formula: '=COUNTA(DATA!A2:A100)', format: '#,##0', bg: '#E3F2FD' },
      { label: 'TRUNG BÌNH', formula: '=AVERAGE(DATA!C2:C100)', format: '#,##0 "₫"', bg: '#FFF3E0' },
      { label: 'LỚN NHẤT', formula: '=MAX(DATA!C2:C100)', format: '#,##0 "₫"', bg: '#F3E5F5' },
      { label: 'NHỎ NHẤT', formula: '=MIN(DATA!C2:C100)', format: '#,##0 "₫"', bg: '#FFEBEE' }
    ],
    charts: [
      {
        title: 'Biểu đồ mẫu',
        type: 'SpreadsheetApp.ChartType.COLUMN',
        ranges: ['DATA!B2:C3'],
        row: 15,
        col: 1
      }
    ]
  }
};

describe('1. specValidator', () => {
  test('Hợp lệ với dummyConfig chuẩn', () => {
    assert.equal(validateSkuConfig(dummyConfig), true);
  });

  test('Từ chối config để trống', () => {
    assert.throws(() => validateSkuConfig(null), /không được để trống/);
  });

  test('Báo lỗi khi thiếu sku hoặc name', () => {
    assert.throws(() => validateSkuConfig({ tables: [], dashboard: {} }), /Thiếu mã SKU/);
  });

  test('Báo lỗi khi tables rỗng hoặc headers thiếu', () => {
    const invalid = { sku: 'T1', name: 'Test', tables: [{ name: 'A' }] };
    assert.throws(() => validateSkuConfig(invalid), /danh sách headers/);
  });

  test('Báo lỗi khi dashboard thiếu kpiCards', () => {
    const invalid = { sku: 'T1', name: 'Test', tables: [{ name: 'A', headers: ['H1'] }], dashboard: { title: 'T' } };
    assert.throws(() => validateSkuConfig(invalid), /mảng kpiCards/);
  });
});

describe('2. tierTransformer', () => {
  test('Từ chối tier không hợp lệ', () => {
    assert.throws(() => transformConfigForTier(dummyConfig, 'invalid_tier'), /Tier không hợp lệ/);
  });

  test('Biến đổi Free Demo chính xác', () => {
    const res = transformConfigForTier(dummyConfig, 'free_demo');
    assert.equal(res.targetTier, 'free_demo');
    assert.equal(res.tierPrice, 0);
    assert.equal(res.isDemo, true);
    assert.equal(res.hasProtection, false);
    assert.equal(res.hasTriggers, false);
    assert.equal(res.hasCustomMenu, false);
    assert.equal(res.dashboard.kpiCards.length, 1);
    assert.equal(res.dashboard.charts.length, 0);
  });

  test('Biến đổi Free Clean chính xác', () => {
    const res = transformConfigForTier(dummyConfig, 'free_clean');
    assert.equal(res.targetTier, 'free_clean');
    assert.equal(res.isDemo, false);
    assert.equal(res.tierPrice, 0);
  });

  test('Biến đổi Basic chính xác', () => {
    const res = transformConfigForTier(dummyConfig, 'basic');
    assert.equal(res.targetTier, 'basic');
    assert.equal(res.tierPrice, 49000);
    assert.equal(res.hasCustomMenu, true);
    assert.equal(res.dashboard.kpiCards.length, 3);
    assert.equal(res.dashboard.charts.length, 1);
  });

  test('Biến đổi Pro chính xác', () => {
    const res = transformConfigForTier(dummyConfig, 'pro');
    assert.equal(res.targetTier, 'pro');
    assert.equal(res.tierPrice, 119000);
    assert.equal(res.hasProtection, true);
    assert.equal(res.hasCustomMenu, true);
    assert.equal(res.dashboard.kpiCards.length, 5);
  });

  test('Biến đổi Business chính xác: Bổ sung AUDIT_LOG và Triggers', () => {
    const res = transformConfigForTier(dummyConfig, 'business');
    assert.equal(res.targetTier, 'business');
    assert.equal(res.tierPrice, 499000);
    assert.equal(res.hasTriggers, true);
    assert.equal(res.hasProtection, true);
    assert.ok(res.tables.some(t => t.name === 'AUDIT_LOG'));
  });
});

describe('3. gasEmitter & syntaxChecker', () => {
  test('checkGasSyntax phát hiện cú pháp JavaScript hợp lệ', () => {
    const res = checkGasSyntax('function test() { return 100; }');
    assert.equal(res.valid, true);
    assert.equal(res.error, null);
  });

  test('checkGasSyntax phát hiện lỗi cú pháp và trả về thông tin', () => {
    const res = checkGasSyntax('function broken() { if (true { return; } }');
    assert.equal(res.valid, false);
    assert.ok(res.error.message);
  });

  test('Sinh mã và kiểm tra cú pháp thành công cho tất cả các gói', () => {
    for (const tier of VALID_TIERS) {
      const { code } = generateSkuTierScript(dummyConfig, tier);
      assert.ok(code.includes('function install_TEST01_SHEET()'));
      assert.ok(code.includes('setupDemoTemplate()'));
      assert.ok(code.includes('setupCleanTemplate()'));

      if (tier === 'business') {
        assert.ok(code.includes('function onEdit(e)'));
        assert.ok(code.includes('AUDIT_LOG'));
      }
      if (tier === 'free_demo' || tier === 'free_clean') {
        assert.ok(!code.includes('function onOpen()'));
      }

      assert.doesNotThrow(() => assertGasSyntax(code));
    }
  });
});

describe('4. Biên dịch End-to-End cho 22 SKU Batch 1, 2, 3, 4, 5 & 6 (F01, F05, F17, F18, F24, F19, F20, F21, F02, F30, F34, F48, F12, F13, F32, F38, F09, F10, F28, F07, F08, F26)', () => {
  const skus = ['f01', 'f05', 'f17', 'f18', 'f24', 'f19', 'f20', 'f21', 'f02', 'f30', 'f34', 'f48', 'f12', 'f13', 'f32', 'f38', 'f09', 'f10', 'f28', 'f07', 'f08', 'f26'];

  for (const sku of skus) {
    test(`SKU ${sku.toUpperCase()} sinh đủ 5 gói và 100% cú pháp hợp lệ`, () => {
      const config = require(`../configs/skus/${sku}.config.js`);
      const tiersResult = generateAllTiersForSku(config);
      
      assert.equal(Object.keys(tiersResult).length, 5);
      for (const tier of VALID_TIERS) {
        const item = tiersResult[tier];
        assert.equal(item.sku, config.sku);
        assert.equal(item.tier, tier);
        assert.ok(item.code.length > 5000, `Mã gói ${tier} phải đầy đủ (ít nhất 5KB)`);
        assert.doesNotThrow(() => assertGasSyntax(item.code, `${config.sku}_${tier}.gs`));
      }
    });
  }
});

describe('5. pathResolver & CLI Generator options', () => {
  const { pathResolver } = engine;
  const generator = require('../tools/generator.js');

  test('resolveRootDir mặc định LUÔN LUÔN là D:\\google sheet', () => {
    const resolved = pathResolver.resolveRootDir();
    assert.equal(resolved, pathResolver.ROOT_DIR);
    assert.equal(resolved, 'D:\\google sheet');
  });

  test('resolveRootDir ưu tiên CLI argument khi được truyền', () => {
    const custom = 'D:/custom_test_root';
    assert.equal(pathResolver.resolveRootDir(custom), path.resolve(custom));
  });

  test('resolveConfigsDir trỏ về D:\\google sheet\\configs', () => {
    const configsDir = pathResolver.resolveConfigsDir();
    assert.equal(configsDir, path.resolve('D:/google sheet/configs'));
  });

  test('resolveReportsDir trỏ về D:\\google sheet\\reports', () => {
    const reportsDir = pathResolver.resolveReportsDir();
    assert.equal(reportsDir, path.resolve('D:/google sheet/reports'));
  });

  test('resolveOutputDir trả về D:\\google sheet\\releases mặc định', () => {
    assert.equal(pathResolver.resolveOutputDir(), path.resolve('D:/google sheet/releases'));
    assert.equal(pathResolver.resolveOutputDir('D:/custom', 'custom_out'), path.resolve('D:/custom/custom_out'));
  });

  test('syncSafely luôn trả về SYNC_DISABLED vì sync sang ổ C đã bị tắt vĩnh viễn', () => {
    const res = pathResolver.syncSafely();
    assert.equal(res.status, 'SYNC_DISABLED');
    assert.ok(res.reason.includes('tắt hoàn toàn'));
  });

  test('generator.parseArgs phân tích chính xác tất cả cờ dòng lệnh và noSync mặc định true', () => {
    const defaultOpts = generator.parseArgs([]);
    assert.equal(defaultOpts.noSync, true, 'Mặc định noSync phải là true');
    assert.equal(defaultOpts.strict, true, 'Mặc định strict phải là true');
    assert.equal(defaultOpts.root, 'D:\\google sheet');

    const args = [
      '--sku', 'F01',
      '--tier', 'all',
      '--batch', '1',
      '--all',
      '--root', 'D:/google sheet',
      '--output', 'D:/google sheet/releases',
      '--no-sync',
      '--dry-run',
      '--strict'
    ];
    const opts = generator.parseArgs(args);
    assert.equal(opts.sku, 'F01');
    assert.equal(opts.tier, 'all');
    assert.equal(opts.batch, '1');
    assert.equal(opts.all, true);
    assert.equal(opts.root, 'D:/google sheet');
    assert.equal(opts.output, 'D:/google sheet/releases');
    assert.equal(opts.noSync, true);
    assert.equal(opts.dryRun, true);
    assert.equal(opts.strict, true);
  });

  test('generateSku ở chế độ dry-run thành công không ghi đĩa', () => {
    const ok = generator.generateSku('F17', {
      targetTier: 'basic',
      dryRun: true,
      strict: true
    });
    assert.equal(ok, true);
  });
});

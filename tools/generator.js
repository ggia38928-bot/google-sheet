#!/usr/bin/env node
/**
 * MINH TEMPLATES FACTORY — BỘ CÔNG CỤ SINH MÃ TỰ ĐỘNG
 * tools/generator.js: CLI Runner sinh mã nguồn Apps Script theo SKU và Tier
 * 
 * CÁC QUY TẮC BẮT BUỘC:
 * - Root được xác định từ repository đang mở.
 * - Config và releases luôn nằm bên trong root đó.
 * - Tắt hoàn toàn chức năng sync/copy sang ổ C hoặc Downloads
 * - Nếu thiếu config hoặc build lỗi thì trả exit code khác 0
 */

const fs = require('fs');
const path = require('path');
const engine = require('../packages/core-engine/src/index.js');
const { resolveRootDir, resolveOutputDir, resolveConfigsDir, resolveReportsDir, syncSafely, ROOT_DIR } = engine.pathResolver;

const BATCH_DEFINITIONS = {
  '1': ['F01', 'F17', 'F18', 'F05', 'F24'],
  '2': ['F19', 'F20', 'F21', 'F02'],
  '3': ['F30', 'F34', 'F48']
};

function parseArgs(rawArgs = process.argv.slice(2)) {
  const options = {
    sku: null,
    tier: 'all',
    batch: null,
    all: false,
    root: ROOT_DIR,
    output: null,
    noSync: true, // Mặc định luôn tắt sync
    dryRun: false,
    strict: true  // Mặc định luôn nghiêm ngặt, lỗi là thoát với exit code khác 0
  };

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === '--sku' && i + 1 < rawArgs.length) {
      options.sku = rawArgs[++i].toUpperCase();
    } else if (arg === '--tier' && i + 1 < rawArgs.length) {
      options.tier = rawArgs[++i].toLowerCase();
    } else if (arg === '--batch' && i + 1 < rawArgs.length) {
      options.batch = rawArgs[++i];
    } else if (arg === '--all') {
      options.all = true;
    } else if (arg === '--root' && i + 1 < rawArgs.length) {
      options.root = rawArgs[++i];
    } else if (arg === '--output' && i + 1 < rawArgs.length) {
      options.output = rawArgs[++i];
    } else if (arg === '--no-sync') {
      options.noSync = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--strict') {
      options.strict = true;
    }
  }

  return options;
}

/**
 * Tìm file config trong configs hoặc configs/skus của workspace.
 * @param {string} sku
 * @param {string} configsDir
 * @returns {string|null}
 */
function findConfigFile(sku, configsDir) {
  const skuLower = sku.toLowerCase();
  
  // 1. Kiểm tra trực tiếp tại configsDir.
  const directPath = path.resolve(configsDir, `${skuLower}.config.js`);
  if (fs.existsSync(directPath)) return directPath;

  // 2. Kiểm tra trong subfolder configs/skus
  const skusSubPath = path.resolve(configsDir, 'skus', `${skuLower}.config.js`);
  if (fs.existsSync(skusSubPath)) return skusSubPath;

  // 3. Quét prefix tại configsDir
  if (fs.existsSync(configsDir)) {
    const files = fs.readdirSync(configsDir);
    const found = files.find(f => f.toLowerCase().startsWith(skuLower) && f.endsWith('.config.js'));
    if (found) return path.resolve(configsDir, found);
  }

  // 4. Quét prefix tại configsDir/skus
  const skusDir = path.resolve(configsDir, 'skus');
  if (fs.existsSync(skusDir)) {
    const files = fs.readdirSync(skusDir);
    const found = files.find(f => f.toLowerCase().startsWith(skuLower) && f.endsWith('.config.js'));
    if (found) return path.resolve(skusDir, found);
  }

  return null;
}

/**
 * Sinh mã cho một SKU cụ thể
 * @param {string} sku Mã SKU (ví dụ: 'F30')
 * @param {object} context Cấu hình ngữ cảnh và cờ tùy chọn
 * @returns {boolean} Kết quả sinh mã
 */
function generateSku(sku, context = {}) {
  const {
    targetTier = 'all',
    rootDir = resolveRootDir(),
    outputDir = resolveOutputDir(rootDir),
    configsDir = resolveConfigsDir(rootDir),
    noSync = true,
    dryRun = false,
    strict = true
  } = context;

  const configPath = findConfigFile(sku, configsDir);
  if (!configPath) {
    const msg = `❌ [FATAL ERROR] Không tìm thấy file cấu hình cho SKU "${sku}" tại: ${configsDir} hoặc ${path.join(configsDir, 'skus')}`;
    console.error(msg);
    // Yêu cầu: Nếu thiếu config trả exit code khác 0
    process.exit(1);
  }

  console.log(`\n======================================================`);
  console.log(`🏭 Đang biên dịch SKU: ${sku}`);
  console.log(`📄 File config: ${path.relative(rootDir, configPath) || configPath}`);
  console.log(`📁 Thư mục output: ${outputDir}`);
  if (dryRun) {
    console.log(`🔍 [DRY-RUN MODE] Kiểm tra cú pháp và logic, KHÔNG ghi file ra đĩa`);
  }

  let skuConfig;
  try {
    delete require.cache[require.resolve(configPath)];
    skuConfig = require(configPath);
    engine.validateSkuConfig(skuConfig);
  } catch (err) {
    console.error(`❌ [VALIDATION ERROR] SKU ${sku}: ${err.message}`);
    // Yêu cầu: Nếu build lỗi thì trả exit code khác 0
    process.exit(1);
  }

  const version = skuConfig.version || '1.0.0';
  const outSkuDir = path.resolve(outputDir, sku, version);

  if (!dryRun) {
    fs.mkdirSync(outSkuDir, { recursive: true });
  }

  const tiersToGenerate = (targetTier === 'all') ? engine.VALID_TIERS : [targetTier];

  for (const tier of tiersToGenerate) {
    if (!engine.VALID_TIERS.includes(tier)) {
      const err = new Error(`Gói tier không hợp lệ: "${tier}". Chỉ chấp nhận: ${engine.VALID_TIERS.join(', ')}`);
      console.error(`❌ [TIER ERROR] ${err.message}`);
      process.exit(1);
    }

    try {
      const result = engine.generateSkuTierScript(skuConfig, tier);

      if (dryRun) {
        console.log(`  -> [DRY-RUN] Đã thẩm định gói [${tier.toUpperCase()}]: Cú pháp ECMAScript AST hợp lệ (${(result.code.length / 1024).toFixed(1)} KB)`);
      } else {
        const tierFilename = `setup_${tier}.gs`;
        const tierFilePath = path.resolve(outSkuDir, tierFilename);
        fs.writeFileSync(tierFilePath, result.code, 'utf8');
        console.log(`  -> Đã sinh gói [${tier.toUpperCase()}]: ${tierFilename} (${(result.code.length / 1024).toFixed(1)} KB)`);

        // Gói PRO giữ vai trò setup.gs mặc định
        if (tier === 'pro') {
          const defaultSetupPath = path.resolve(outSkuDir, 'setup.gs');
          fs.writeFileSync(defaultSetupPath, result.code, 'utf8');
          console.log(`     ⭐ Đã cập nhật file mặc định setup.gs`);
        }
      }
    } catch (err) {
      console.error(`❌ [EMIT ERROR] SKU ${sku} Tier ${tier}: ${err.message}`);
      process.exit(1);
    }
  }

  // Xuất schema.json
  if (!dryRun) {
    const schemaPath = path.resolve(outSkuDir, 'schema.json');
    const schemaData = {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      sku: skuConfig.sku,
      name: skuConfig.name,
      version: skuConfig.version || '1.0.0',
      description: skuConfig.description || '',
      tables: skuConfig.tables.map(t => ({
        name: t.name,
        headers: t.headers,
        colCount: t.headers.length,
        demoRowsCount: (t.demoRows || []).length
      }))
    };
    fs.writeFileSync(schemaPath, JSON.stringify(schemaData, null, 2), 'utf8');
    console.log(`     📋 Đã cập nhật schema.json`);

    // TẮT HOÀN TOÀN chức năng sync sang ổ C. Không bao giờ copy sang Downloads.
  }

  return true;
}

function main() {
  const options = parseArgs();

  const rootDir = resolveRootDir(options.root);
  const outputDir = resolveOutputDir(rootDir, options.output);
  const configsDir = resolveConfigsDir(rootDir);

  console.log(`======================================================`);
  console.log(`🏭 MINH TEMPLATES FACTORY — GENERATOR ENGINE (STRICT WORKSPACE ROOT)`);
  console.log(`📌 Root Directory  : ${rootDir}`);
  console.log(`📦 Output Directory: ${outputDir}`);
  console.log(`📄 Configs Dir     : ${configsDir}`);
  console.log(`⚙️ Options         : Tier=${options.tier} | DryRun=${options.dryRun} | Strict=${options.strict} | NoSync=${options.noSync}`);
  console.log(`======================================================`);

  let skusToProcess = [];

  if (options.sku) {
    skusToProcess = [options.sku];
  } else if (options.batch) {
    const batchList = BATCH_DEFINITIONS[options.batch];
    if (!batchList) {
      console.error(`❌ Batch không tồn tại: "${options.batch}". Các batch hỗ trợ: ${Object.keys(BATCH_DEFINITIONS).join(', ')}`);
      process.exit(1);
    }
    skusToProcess = batchList;
  } else if (options.all) {
    const configsToScan = [configsDir, path.resolve(configsDir, 'skus')];
    const foundSkus = new Set();

    for (const cDir of configsToScan) {
      if (fs.existsSync(cDir)) {
        const files = fs.readdirSync(cDir).filter(f => f.endsWith('.config.js'));
        for (const f of files) {
          foundSkus.add(f.replace('.config.js', '').toUpperCase());
        }
      }
    }

    if (foundSkus.size === 0) {
      console.error(`❌ Không tìm thấy file cấu hình nào tại: ${configsDir}`);
      process.exit(1);
    }

    skusToProcess = Array.from(foundSkus).sort();
  } else {
    console.log(`
Cách sử dụng:
  node tools/generator.js --sku <SKU> [--tier <TIER|all>] [--dry-run]
  node tools/generator.js --batch <NUM> [--output <PATH>]
  node tools/generator.js --all --no-sync
    `);
    process.exit(0);
  }

  console.log(`🚀 Bắt đầu tiến trình xử lý ${skusToProcess.length} SKU(s)...`);
  let successCount = 0;

  for (const sku of skusToProcess) {
    const ok = generateSku(sku, {
      targetTier: options.tier,
      rootDir,
      outputDir,
      configsDir,
      noSync: true,
      dryRun: options.dryRun,
      strict: true
    });
    if (ok) successCount++;
  }

  console.log(`\n======================================================`);
  console.log(`🎉 HOÀN TẤT: ${successCount}/${skusToProcess.length} SKU đã được xử lý thành công!`);

  if (successCount < skusToProcess.length) {
    console.error(`❌ Có lỗi xảy ra trong quá trình xử lý (${successCount}/${skusToProcess.length} thành công). Exit code 1.`);
    process.exit(1);
  }

  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  findConfigFile,
  generateSku,
  BATCH_DEFINITIONS
};

/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * index.js: Điểm xuất khẩu chính của Core Generator Engine
 */

const { validateSkuConfig } = require('./specValidator');
const { transformConfigForTier, VALID_TIERS } = require('./tierTransformer');
const { emitGasInstaller } = require('./gasEmitter');
const { checkGasSyntax, assertGasSyntax } = require('./syntaxChecker');
const pathResolver = require('./pathResolver');

/**
 * Sinh mã Google Apps Script cho một SKU tại một Tier cụ thể
 * @param {object} skuConfig Cấu hình SKU gốc
 * @param {string} tier Tên gói ('free_demo', 'free_clean', 'basic', 'pro', 'business')
 * @returns {{ sku: string, tier: string, code: string, config: object }}
 */
function generateSkuTierScript(skuConfig, tier = 'pro') {
  validateSkuConfig(skuConfig);
  const transformedConfig = transformConfigForTier(skuConfig, tier);
  const code = emitGasInstaller(transformedConfig);
  assertGasSyntax(code, `${skuConfig.sku}_${tier}.gs`);
  return {
    sku: skuConfig.sku,
    tier,
    code,
    config: transformedConfig
  };
}

/**
 * Sinh mã toàn bộ các Tier (Free Demo, Free Clean, Basic, Pro, Business) cho một SKU
 * @param {object} skuConfig Cấu hình SKU gốc
 * @returns {Record<string, { sku: string, tier: string, code: string, config: object }>}
 */
function generateAllTiersForSku(skuConfig) {
  validateSkuConfig(skuConfig);
  const results = {};
  for (const tier of VALID_TIERS) {
    results[tier] = generateSkuTierScript(skuConfig, tier);
  }
  return results;
}

module.exports = {
  VALID_TIERS,
  validateSkuConfig,
  transformConfigForTier,
  emitGasInstaller,
  checkGasSyntax,
  assertGasSyntax,
  generateSkuTierScript,
  generateAllTiersForSku,
  pathResolver
};

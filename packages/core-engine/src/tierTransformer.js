/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * tierTransformer.js: Bộ lọc và biến đổi cấu hình SKU theo từng tầng thương mại
 */

const VALID_TIERS = ['free_demo', 'free_clean', 'basic', 'pro', 'business'];

function transformConfigForTier(rawConfig, tier = 'pro') {
  const normalizedTier = tier.toLowerCase();
  if (!VALID_TIERS.includes(normalizedTier)) {
    throw new Error(`Tier không hợp lệ: "${tier}". Chỉ chấp nhận: ${VALID_TIERS.join(', ')}`);
  }

  // Clone sâu cấu hình để không làm ảnh hưởng bản gốc
  const config = JSON.parse(JSON.stringify(rawConfig));
  config.targetTier = normalizedTier;

  switch (normalizedTier) {
    case 'free_demo':
    case 'free_clean':
      transformFreeTier(config, normalizedTier === 'free_demo');
      break;
    case 'basic':
      transformBasicTier(config);
      break;
    case 'pro':
      transformProTier(config);
      break;
    case 'business':
      transformBusinessTier(config);
      break;
  }

  return config;
}

function transformFreeTier(config, isDemo) {
  config.tierName = isDemo ? 'BẢN DEMO MIỄN PHÍ' : 'BẢN SẠCH MIỄN PHÍ';
  config.tierPrice = 0;
  config.isDemo = isDemo;
  config.hasProtection = false;
  config.hasTriggers = false;
  config.hasCustomMenu = false;

  // Bản Free chỉ giữ 1 KPI Card tổng quát đầu tiên
  if (config.dashboard && config.dashboard.kpiCards) {
    config.dashboard.kpiCards = config.dashboard.kpiCards.slice(0, 1);
  }
  // Loại bỏ các biểu đồ nâng cao
  if (config.dashboard) {
    config.dashboard.charts = [];
    config.dashboard.subTables = (config.dashboard.subTables || []).slice(0, 1);
  }
}

function transformBasicTier(config) {
  config.tierName = 'GÓI BASIC (49.000 VND)';
  config.tierPrice = 49000;
  config.isDemo = true;
  config.hasProtection = false; // Chỉ freeze header, không khóa dải ô nâng cao
  config.hasTriggers = false;
  config.hasCustomMenu = true;
  config.menuTitle = `⚡ MINH TEMPLATES ${config.sku} BASIC`;

  // Giữ tối đa 3 KPI Cards cơ bản
  if (config.dashboard && config.dashboard.kpiCards) {
    config.dashboard.kpiCards = config.dashboard.kpiCards.slice(0, 3);
  }
  // Giữ tối đa 1 biểu đồ cơ bản
  if (config.dashboard && config.dashboard.charts) {
    config.dashboard.charts = config.dashboard.charts.slice(0, 1);
  }
}

function transformProTier(config) {
  config.tierName = 'GÓI PRO CHUYÊN NGHIỆP (119.000 VND)';
  config.tierPrice = 119000;
  config.isDemo = true;
  config.hasProtection = true; // Khóa toàn bộ ô công thức
  config.hasTriggers = false;
  config.hasCustomMenu = true;
  config.menuTitle = `⚡ MINH TEMPLATES ${config.sku} PRO`;

  // Giữ toàn bộ 5-6 thẻ KPI, biểu đồ tự vẽ và conditional formatting
}

function transformBusinessTier(config) {
  config.tierName = 'GÓI BUSINESS DOANH NGHIỆP (499.000 VND)';
  config.tierPrice = 499000;
  config.isDemo = true;
  config.hasProtection = true;
  config.hasTriggers = true; // Triggers tự động: onEdit timestamp & Audit
  config.hasCustomMenu = true;
  config.menuTitle = `⚡ MINH TEMPLATES ${config.sku} BUSINESS`;

  // Bổ sung bảng nhật ký kiểm toán (Audit Trail)
  const auditTableName = 'AUDIT_LOG';
  if (!config.tables.some(t => t.name === auditTableName)) {
    config.tables.push({
      name: auditTableName,
      color: '#37474F',
      headers: ['Mã ghi nhận', 'Thời gian', 'Người thực hiện', 'Thao tác / Bảng', 'Chi tiết thay đổi'],
      colWidths: [120, 160, 200, 160, 350],
      demoRows: [
        ['LOG-001', '2026-09-01 08:30:00', 'admin@minhtemplates.com', 'SYSTEM_INIT', 'Khởi tạo hệ thống Business'],
        ['LOG-002', '2026-09-02 09:15:20', 'sales@minhtemplates.com', 'TRANSACTION_POSTED', 'Ghi sổ giao dịch mới']
      ]
    });
  }
}

module.exports = {
  VALID_TIERS,
  transformConfigForTier
};

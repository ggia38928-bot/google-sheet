/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * specValidator.js: Kiểm tra tính toàn vẹn và hợp lệ của cấu hình SKU
 */

function validateSkuConfig(config) {
  const errors = [];

  if (!config) {
    throw new Error('Config không được để trống');
  }

  if (!config.sku || typeof config.sku !== 'string') {
    errors.push('Thiếu mã SKU (ví dụ: F17)');
  }

  if (!config.name || typeof config.name !== 'string') {
    errors.push('Thiếu tên thương mại sản phẩm');
  }

  if (!config.tables || !Array.isArray(config.tables) || config.tables.length === 0) {
    errors.push('SKU phải có ít nhất 1 bảng dữ liệu trong thuộc tính tables');
  } else {
    config.tables.forEach((tbl, idx) => {
      if (!tbl.name) errors.push(`Bảng thứ ${idx + 1} thiếu tên (name)`);
      if (!tbl.headers || !Array.isArray(tbl.headers) || tbl.headers.length === 0) {
        errors.push(`Bảng ${tbl.name || idx + 1} thiếu danh sách headers`);
      }
    });
  }

  if (!config.dashboard) {
    errors.push('Thiếu cấu hình dashboard');
  } else {
    if (!config.dashboard.title) errors.push('Dashboard thiếu tiêu đề (title)');
    if (!config.dashboard.kpiCards || !Array.isArray(config.dashboard.kpiCards)) {
      errors.push('Dashboard phải có mảng kpiCards');
    }
  }

  if (errors.length > 0) {
    const err = new Error(`Lỗi cấu hình SKU ${config.sku || 'UNKNOWN'}:\n- ` + errors.join('\n- '));
    err.validationErrors = errors;
    throw err;
  }

  return true;
}

module.exports = {
  validateSkuConfig
};

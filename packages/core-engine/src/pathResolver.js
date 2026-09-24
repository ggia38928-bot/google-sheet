/**
 * MINH TEMPLATES FACTORY — CORE ENGINE
 * pathResolver.js: Quản lý và chuẩn hóa đường dẫn dự án
 * 
 * QUY TẮC BẮT BUỘC:
 * - ROOT_DIR luôn là D:\google sheet
 * - Cấu hình đọc từ D:\google sheet\configs (hoặc configs\skus)
 * - Releases ghi vào D:\google sheet\releases
 * - Reports ghi vào D:\google sheet\reports
 * - Tắt hoàn toàn chức năng sync/copy sang ổ C hoặc Downloads
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'D:\\google sheet';
const DEFAULT_WINDOWS_ROOT = ROOT_DIR;

/**
 * Xác định thư mục gốc dự án.
 * Mặc định LUÔN LUÔN là D:\google sheet trừ khi có CLI --root ghi đè.
 * @param {string|null} cliRoot
 * @returns {string}
 */
function resolveRootDir(cliRoot = null) {
  if (cliRoot && typeof cliRoot === 'string' && cliRoot.trim()) {
    return path.resolve(cliRoot.trim());
  }
  return ROOT_DIR;
}

/**
 * Xác định thư mục xuất file releases (Mặc định: D:\google sheet\releases)
 * @param {string} rootDir
 * @param {string|null} cliOutput
 * @returns {string}
 */
function resolveOutputDir(rootDir = ROOT_DIR, cliOutput = null) {
  if (cliOutput && typeof cliOutput === 'string' && cliOutput.trim()) {
    const trimmed = cliOutput.trim();
    if (path.isAbsolute(trimmed)) {
      return path.resolve(trimmed);
    }
    return path.resolve(rootDir || ROOT_DIR, trimmed);
  }
  return path.resolve(rootDir || ROOT_DIR, 'releases');
}

/**
 * Xác định thư mục chứa cấu hình SKU (Mặc định: D:\google sheet\configs)
 * @param {string} rootDir
 * @returns {string}
 */
function resolveConfigsDir(rootDir = ROOT_DIR) {
  return path.resolve(rootDir || ROOT_DIR, 'configs');
}

/**
 * Xác định thư mục chứa báo cáo và kết quả kiểm thử (Mặc định: D:\google sheet\reports)
 * @param {string} rootDir
 * @returns {string}
 */
function resolveReportsDir(rootDir = ROOT_DIR) {
  const reportsDir = path.resolve(rootDir || ROOT_DIR, 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  return reportsDir;
}

/**
 * TẮT HOÀN TOÀN chức năng sync/copy sang ổ C hoặc thư mục Downloads.
 * Không thực hiện sao chép dưới mọi hình thức.
 * 
 * @returns {{ status: 'SYNC_DISABLED', reason: string }}
 */
function syncSafely() {
  return {
    status: 'SYNC_DISABLED',
    reason: 'Chức năng sync sang ổ C đã bị tắt hoàn toàn theo yêu cầu hệ thống. Chỉ làm việc trên D:\\google sheet.'
  };
}

module.exports = {
  ROOT_DIR,
  DEFAULT_WINDOWS_ROOT,
  resolveRootDir,
  resolveOutputDir,
  resolveConfigsDir,
  resolveReportsDir,
  syncSafely
};

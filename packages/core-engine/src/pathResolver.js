/** Định vị workspace từ repository, không phụ thuộc ký tự ổ đĩa. */
const fs = require('node:fs');
const path = require('node:path');

function findProjectRoot(startDir = __dirname) {
  let current = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(current, '.git')) && fs.existsSync(path.join(current, 'package.json'))) return current;
    const parent = path.dirname(current);
    if (parent === current) throw new Error('Không xác định được project root từ repository.');
    current = parent;
  }
}

const ROOT_DIR = findProjectRoot();
const DEFAULT_WINDOWS_ROOT = ROOT_DIR;

function assertInsideRoot(candidate, label) {
  const resolved = path.resolve(candidate);
  const relative = path.relative(ROOT_DIR, resolved);
  if (relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative))) return resolved;
  throw new Error(`${label} phải nằm trong project root.`);
}

function resolveRootDir(cliRoot = null) {
  if (!cliRoot) return ROOT_DIR;
  const resolved = path.resolve(cliRoot);
  if (resolved !== ROOT_DIR) throw new Error('Root được truyền phải trùng project root.');
  return ROOT_DIR;
}

function resolveOutputDir(rootDir = ROOT_DIR, cliOutput = null) {
  const root = assertInsideRoot(rootDir, 'Root');
  return assertInsideRoot(cliOutput ? path.resolve(root, cliOutput) : path.join(root, 'releases'), 'Thư mục output');
}

function resolveConfigsDir(rootDir = ROOT_DIR) {
  return assertInsideRoot(path.join(assertInsideRoot(rootDir, 'Root'), 'configs'), 'Thư mục cấu hình');
}

function resolveReportsDir(rootDir = ROOT_DIR) {
  return assertInsideRoot(path.join(assertInsideRoot(rootDir, 'Root'), 'reports'), 'Thư mục báo cáo');
}

function syncSafely() {
  return { status: 'SYNC_DISABLED', reason: 'Sao chép ra ngoài workspace đã bị tắt hoàn toàn.' };
}

module.exports = { ROOT_DIR, DEFAULT_WINDOWS_ROOT, findProjectRoot, assertInsideRoot, resolveRootDir, resolveOutputDir, resolveConfigsDir, resolveReportsDir, syncSafely };

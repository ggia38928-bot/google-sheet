import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const release = path.join(root, 'releases', 'F05', '3.0.0-vi');
const read = (file) => fs.readFileSync(path.join(release, file), 'utf8');

test('G0: manifest, schema, installer và tài liệu F05 3.0.0-vi đầy đủ, có cú pháp JavaScript', () => {
  for (const file of ['manifest.json', 'schema.json', 'installer.gs', 'README.md', 'appsheet/README.md']) assert.ok(fs.existsSync(path.join(release, file)), `Thiếu ${file}`);
  const manifest = JSON.parse(read('manifest.json'));
  const schema = JSON.parse(read('schema.json'));
  assert.equal(manifest.version, '3.0.0-vi');
  assert.equal(manifest.appsheet.enabled, false);
  assert.ok(Object.keys(schema.tables).includes('Cơ hội'));
  assert.doesNotThrow(() => new vm.Script(read('installer.gs')));
});

test('G0: artifact mới không hard-code ổ đĩa và không có AppSheet giả', () => {
  const files = ['manifest.json', 'schema.json', 'installer.gs', 'README.md', 'appsheet/README.md'];
  const source = files.map(read).join('\n');
  assert.doesNotMatch(source, /[A-Za-z]:[\\/]/);
  assert.match(source, /Chỉ bật AppSheet khi có App ID/);
  assert.doesNotMatch(source, /owner@example|sample record|fixture/i);
});

test('G0: checksum release khớp với từng artifact được đóng gói', () => {
  const lines = read('CHECKSUMS.sha256').trim().split('\n');
  for (const line of lines) {
    const [expected, relative] = line.split(/\s{2,}/);
    const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(release, relative))).digest('hex');
    assert.equal(actual, expected, relative);
  }
});

test('G1: installer có khóa, idempotency, backup/restore, phân quyền, chống công thức và KPI đúng mẫu số', () => {
  const source = read('installer.gs');
  for (const token of ['LockService.getDocumentLock', 'F05_EXEC_', 'saoLuuF05_', 'khoiPhucF05', 'Utilities.computeDigest', 'applyRolesF05', 'roleForCallerF05_', 'callerPrincipalF05_', 'assertUnlockedF05_', 'RowVersion không khớp', 'sanitizeF05_', 'assertStageF05_', 'configureAppSheetF05']) assert.match(source, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(source, /Tỷ lệ chốt đơn[\s\S]*THẮNG[\s\S]*THUA/);
  assert.match(source, /seedDemo && options\.tier !== 'business'/);
  assert.match(source, /record = \[input\.id, input\.title, input\.accountId, stage[\s\S]*\.map\(sanitizeF05_\)/);
  assert.match(source, /function applyRolesF05\(roleMap\) \{ return withLockF05_\(function \(\) \{ assertAdminF05_\(\)/);
  assert.match(source, /F05_BOOTSTRAPPED/);
  assert.match(source, /if \(stage !== 'MỚI'\) throw new Error\('Cơ hội mới phải bắt đầu ở giai đoạn MỚI\.'/);
  assert.doesNotMatch(source, /assertWriteRoleF05_\(context\)|assertAdminF05_\(context\)|context\.role/);
});

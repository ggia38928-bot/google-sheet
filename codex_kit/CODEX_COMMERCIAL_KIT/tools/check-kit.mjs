import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const required = [
  'START_HERE.txt', 'AGENTS.md', 'docs/IMPLEMENTATION_GUIDE.md',
  'config/workflow-prompts.json', 'config/costs.json',
  'reference/domain.mjs', 'reference/inventory.mjs', 'reference/outbox.mjs',
  'gas/Code.gs', 'gas/FormulaQA.gs', 'gas/ClientRpc.html',
  'gas/Domain.gs', 'gas/Inventory.gs'
];
const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing kit files: ${missing.join(', ')}`);
  process.exit(1);
}
const prompts = JSON.parse(fs.readFileSync(path.join(root, 'config/workflow-prompts.json'), 'utf8'));
const expected = Array.from({ length: 36 }, (_, i) => `P${String(i).padStart(2, '0')}`);
const actual = prompts.map((p) => p.id);
if (actual.length !== expected.length || expected.some((id, i) => actual[i] !== id)) {
  console.error('workflow-prompts.json must contain P00..P35 in order');
  process.exit(1);
}
for (const prompt of prompts) {
  if (!prompt.title?.trim() || prompt.text.length < 120) {
    console.error(`Prompt ${prompt.id} is too short or missing a title`);
    process.exit(1);
  }
}
const forbidden = /(?:AIza[0-9A-Za-z_-]{20,}|sk-[A-Za-z0-9]{20,}|BEGIN (?:RSA|OPENSSH|EC) PRIVATE KEY)/;
const sourceFiles = required.filter((file) => /\.(mjs|gs|html|json|md|txt)$/.test(file));
for (const file of sourceFiles) {
  if (forbidden.test(fs.readFileSync(path.join(root, file), 'utf8'))) {
    console.error(`Possible credential found in ${file}`);
    process.exit(1);
  }
}
console.log(`Kit OK: ${prompts.length} prompts, ${required.length} required files`);

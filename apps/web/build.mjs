import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = fileURLToPath(new URL('./dist/', import.meta.url));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(fileURLToPath(new URL('./public/', import.meta.url)), output, { recursive: true });
for (const file of ['index.html', 'app.js', 'security.js', 'styles.css']) await stat(join(output, file));
console.log('Build Web App hoàn tất: dist/index.html, dist/app.js, dist/security.js, dist/styles.css');

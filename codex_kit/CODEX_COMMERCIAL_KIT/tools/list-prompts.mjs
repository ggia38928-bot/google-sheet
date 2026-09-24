import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const prompts = JSON.parse(fs.readFileSync(path.join(root, 'config/workflow-prompts.json'), 'utf8'));
for (const prompt of prompts) console.log(`${prompt.id}\t${prompt.title}`);

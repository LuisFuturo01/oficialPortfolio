// Verifica que todas las capturas referenciadas existan y lista las sobrantes.
import { existsSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { projects } from '../src/data/projects.js';

const pub = new URL('../public', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');
const used = new Set();
let missing = 0;
for (const p of projects) for (const kind of ['desktop', 'mobile', 'android']) for (const s of p.shots[kind] || []) {
  used.add(s.src);
  if (!existsSync(join(pub, s.src))) { missing++; console.log('FALTA', s.src); }
}
const extra = [];
for (const d of readdirSync(join(pub, 'projects'))) for (const f of readdirSync(join(pub, 'projects', d))) {
  const rel = `/projects/${d}/${f}`;
  if (!used.has(rel) && !f.endsWith('.webp') === false) extra.push(rel);
}
console.log(`referenciadas: ${used.size}, faltantes: ${missing}, sobrantes: ${extra.length}`);
if (process.argv.includes('--list')) extra.forEach((e) => console.log('SOBRA', e));
if (process.argv.includes('--prune')) { extra.forEach((e) => unlinkSync(join(pub, e))); console.log(`eliminadas ${extra.length} capturas sin uso`); }

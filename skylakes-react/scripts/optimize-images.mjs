// Convert the product PNGs to WebP. The design handoff shipped 1–2 MB PNGs
// per product; WebP at q82 brings the set down by well over 90% with no
// visible difference on screen.
//
//   npm run images
//
// Re-running is cheap and idempotent: a .webp that is already newer than its
// .png is skipped. Pass --force to rebuild everything, --keep-png to leave
// the sources in place (by default a converted .png is deleted, since the
// page references only the .webp).

import { readdir, stat, unlink } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

// Directories scanned for PNGs. og.jpg is left alone — some social scrapers
// still refuse WebP — and so is logo.png, which is small and referenced with
// an onError fallback in Footer.jsx.
const DIRS = [
  join(root, 'public', 'products'),
  join(root, 'public'),
];
const SKIP = new Set(['logo.png']);

const force = process.argv.includes('--force');
const keepPng = process.argv.includes('--keep-png');
const QUALITY = 82;

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

async function newestFirst(png, webp) {
  try {
    const [a, b] = await Promise.all([stat(png), stat(webp)]);
    return b.mtimeMs >= a.mtimeMs;
  } catch {
    return false;
  }
}

const targets = [];
for (const dir of DIRS) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (extname(entry.name).toLowerCase() !== '.png') continue;
    if (SKIP.has(entry.name)) continue;
    targets.push([dir, entry.name]);
  }
}

if (targets.length === 0) {
  console.log('No PNGs left to convert.');
  process.exit(0);
}

let before = 0;
let after = 0;

for (const [dir, file] of targets) {
  const png = join(dir, file);
  const webp = join(dir, `${basename(file, extname(file))}.webp`);

  if (!force && (await newestFirst(png, webp))) {
    console.log(`skip  ${file} (webp is current)`);
    continue;
  }

  const input = await stat(png);
  await sharp(png).webp({ quality: QUALITY, effort: 6 }).toFile(webp);
  const output = await stat(webp);

  before += input.size;
  after += output.size;
  const saved = (1 - output.size / input.size) * 100;
  console.log(`ok    ${file}  ${kb(input.size)} -> ${kb(output.size)}  (-${saved.toFixed(0)}%)`);

  if (!keepPng) await unlink(png);
}

if (before > 0) {
  console.log(`\nTotal ${kb(before)} -> ${kb(after)} (-${((1 - after / before) * 100).toFixed(0)}%)`);
}

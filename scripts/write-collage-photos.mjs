// Writes the homepage service-collage photos into public/service-collage/ at build time.
// The photos are stored as base64 text in scripts/collage/*.b64 so they can be committed
// without binary uploads. A real .webp at the target path wins, but an unresolved
// Git LFS pointer must be replaced before Vite copies the public directory.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = 'scripts/collage';
const targetDir = 'public/service-collage';
mkdirSync(targetDir, { recursive: true });

let written = 0;
for (const file of readdirSync(sourceDir).filter(name => name.endsWith('.b64'))) {
  const target = join(targetDir, file.replace(/\.b64$/, '.webp'));
  if (existsSync(target)) {
    const header = readFileSync(target).subarray(0, 12);
    const isWebp =
      header.subarray(0, 4).toString() === 'RIFF' &&
      header.subarray(8, 12).toString() === 'WEBP';
    if (isWebp) continue;
  }
  writeFileSync(target, Buffer.from(readFileSync(join(sourceDir, file), 'utf8').trim(), 'base64'));
  written += 1;
}
console.log(`Service collage photos: wrote ${written}, kept ${4 - written} existing.`);

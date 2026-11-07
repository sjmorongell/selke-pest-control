import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const payloadPath = 'scripts/hero/selke-home-treatment-hero.webp.b64';
const targetPath = 'src/imports/selke-home-treatment-hero.webp';
const expectedImageHash = '246d3e856d32cd0b77130e0a6a1f9f899b3eae677eeac32e0df9d5075a773d4c';
const tempDir = mkdtempSync(path.join(os.tmpdir(), 'selke-hero-'));

try {
  execFileSync('git', ['init', '--quiet', tempDir], { stdio: 'inherit' });
  execFileSync('git', ['-C', tempDir, 'fetch', '--quiet', '--depth=1', source, 'main'], {
    stdio: 'inherit',
  });

  const encodedImage = execFileSync('git', [
    '-C',
    tempDir,
    'show',
    `FETCH_HEAD:${payloadPath}`,
  ]);
  const image = Buffer.from(encodedImage.toString().trim(), 'base64');
  const imageHash = createHash('sha256').update(image).digest('hex');

  if (imageHash !== expectedImageHash) {
    throw new Error('Synced homepage hero image failed its integrity check.');
  }

  mkdirSync(path.dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, image);
  console.log(`Synced verified homepage hero image to ${targetPath}.`);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const release = 'b2092cd2572a322444917bfdcd68f7f412893382';
const sourcePath = 'src/imports/selke-home-treatment-hero.webp';
const targetPath = 'src/imports/selke-home-treatment-hero.webp';
const expectedImageHash = '27a6421b9752c13d8151c9a96f9f51d366e9344a6cfa88097f0c08b709e3671e';
const tempDir = mkdtempSync(path.join(os.tmpdir(), 'selke-hero-'));

try {
  execFileSync('git', ['init', '--quiet', tempDir], { stdio: 'inherit' });
  execFileSync('git', ['-C', tempDir, 'fetch', '--quiet', '--depth=1', source, release], {
    stdio: 'inherit',
  });

  const image = execFileSync('git', ['-C', tempDir, 'show', `FETCH_HEAD:${sourcePath}`]);
  const imageHash = createHash('sha256').update(image).digest('hex');

  if (imageHash !== expectedImageHash) {
    throw new Error('Synced homepage hero image failed its integrity check.');
  }

  mkdirSync(path.dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, image);
  console.log(`Restored verified homepage hero image to ${targetPath}.`);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

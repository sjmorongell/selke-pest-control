import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const payloadPath = 'scripts/hero/selke-home-treatment-hero.webp.b64';
const release = '2f04ebd87f960e28a55e19252091a9f9af7df950';
const releaseHash = '84ca3ffd476fb0d1699793e022deba936ecc2346ca1c3f8fd8ed8198094f289c';
const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';

let payload = readFileSync(payloadPath, 'utf8');
const localHash = createHash('sha256').update(payload).digest('hex');

if (localHash === releaseHash) {
  console.log(`Homepage hero release ${release.slice(0, 7)} is current.`);
  process.exit(0);
}

const tempDir = mkdtempSync(join(tmpdir(), 'selke-hero-release-'));

try {
  execFileSync('git', ['init', '--quiet', tempDir]);
  execFileSync('git', ['-C', tempDir, 'fetch', '--quiet', '--depth=1', source, release]);
  payload = execFileSync('git', ['-C', tempDir, 'show', `FETCH_HEAD:${payloadPath}`]).toString('utf8');

  const fetchedHash = createHash('sha256').update(payload).digest('hex');
  if (fetchedHash !== releaseHash) {
    throw new Error('Fetched homepage hero payload did not match the verified release.');
  }

  writeFileSync(payloadPath, payload);
  console.log(`Synced homepage hero release ${release.slice(0, 7)} from Figma Make.`);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

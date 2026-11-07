import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const releaseRepository =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const releaseCommit = '8a995a9e875f508246091908b6ecd9dfa64667d0';
const files = {
  'src/app/App.tsx': '44644877808e95ce7b92b676222e82f74ac13cc3e7f181d9a94efdadb8c1ce9a',
  'src/app/utils/blogContent.ts': '3910f0192a99cd73b2c97536902e2f0bed369272c98d92f711138a3e6433803b',
  'scripts/generate-seo-pages.mjs': '311d24353ca7fa7f5f69821d2f30abcb285c5f70e17dd588f77ae852309bfb0e',
};

const temporaryRepository = fs.mkdtempSync(path.join(os.tmpdir(), 'selke-release-'));

try {
  execFileSync('git', ['init', '--quiet', temporaryRepository]);
  execFileSync('git', [
    '-C',
    temporaryRepository,
    'fetch',
    '--quiet',
    '--depth=1',
    releaseRepository,
    releaseCommit,
  ]);

  for (const [file, expectedDigest] of Object.entries(files)) {
    const content = execFileSync('git', [
      '-C',
      temporaryRepository,
      'show',
      `FETCH_HEAD:${file}`,
    ]);
    const digest = crypto.createHash('sha256').update(content).digest('hex');
    if (digest !== expectedDigest) throw new Error(`Release source checksum mismatch: ${file}`);
    const current = fs.existsSync(file) ? fs.readFileSync(file) : null;
    if (!current || !current.equals(content)) fs.writeFileSync(file, content);
  }
} finally {
  fs.rmSync(temporaryRepository, { recursive: true, force: true });
}

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const release = '1d8a5bf9cc9bde655c0087afb64bd816e66dd1f6';
const files = [
  'src/app/App.tsx',
  'src/app/utils/blogContent.ts',
  'src/app/components/QuoteFormModal.tsx',
  'scripts/generate-seo-pages.mjs',
];

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'selke-release-'));

try {
  execFileSync('git', ['init', '--quiet', tempDir], { stdio: 'inherit' });
  execFileSync('git', ['-C', tempDir, 'fetch', '--quiet', '--depth=1', source, release], {
    stdio: 'inherit',
  });

  for (const file of files) {
    const content = execFileSync('git', ['-C', tempDir, 'show', `FETCH_HEAD:${file}`]);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  }

  console.log(`Synced verified release ${release.slice(0, 7)} from Figma Make`);
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const release = '76e22930125eac5f268c45b6034dcf6a2f8d9592';
const files = [
  'src/app/components/QuoteFormModal.tsx',
  'public/service-collage/community-family.webp',
  'public/service-collage/entry-treatment.webp',
  'public/service-collage/perimeter-treatment.webp',
  'public/service-collage/pool-area-treatment.webp',
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

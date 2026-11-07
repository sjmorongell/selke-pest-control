import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const source =
  'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const release = 'af08bd8096b8f4d6508b3578755a286fedbf12e0';
const files = [
  'src/main.tsx',
  'src/app/App.tsx',
  'src/app/utils/blogContent.ts',
  'src/app/components/QuoteFormModal.tsx',
  'src/app/data/blogIndexData.ts',
  'src/app/pages/BlogIndexPage.tsx',
  'src/app/pages/BlogPage.tsx',
  'src/app/pages/CityPage.tsx',
  'src/app/pages/PestPage.tsx',
  'src/app/pages/GiveawayThankYouPage.tsx',
  'scripts/generate-seo-pages.mjs',
  'public/sitemap.xml',
  'public/service-collage/community-family.webp',
  'public/service-collage/entry-treatment.webp',
  'public/service-collage/perimeter-treatment.webp',
  'public/service-collage/pool-area-treatment.webp',
];

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'selke-release-'));

try {
  execFileSync('git', ['init', '--quiet', tempDir], { stdio: 'inherit' });

  let fetched = false;
  for (let attempt = 1; attempt <= 18; attempt++) {
    try {
      execFileSync('git', ['-C', tempDir, 'fetch', '--quiet', '--depth=1', source, release], {
        stdio: 'inherit',
      });
      fetched = true;
      break;
    } catch (error) {
      if (attempt === 18) throw error;
      console.log(`Verified release is publishing; retrying (${attempt}/18)...`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
    }
  }

  if (!fetched) throw new Error('Verified release could not be fetched');

  for (const file of files) {
    const content = execFileSync('git', ['-C', tempDir, 'show', `FETCH_HEAD:${file}`]);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  }

  console.log(`Synced verified release ${release.slice(0, 7)} from Figma Make`);
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

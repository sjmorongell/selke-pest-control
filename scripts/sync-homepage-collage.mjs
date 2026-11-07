import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';

const figmaRepository = 'https://api.figma.com/git/make/file/2355034718140475824/public/code/migrated/58196bc9-d5af-4508-bc96-0af6203def03.git';
const files = [
  'src/app/App.tsx',
  'public/service-collage/perimeter-treatment.webp',
  'public/service-collage/entry-treatment.webp',
  'public/service-collage/pool-area-treatment.webp',
  'public/service-collage/community-family.webp',
];

const repository = mkdtempSync(join(tmpdir(), 'selke-figma-release-'));

try {
  execFileSync('git', ['init', '--bare', repository], { stdio: 'ignore' });

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      execFileSync(
        'git',
        ['--git-dir', repository, 'fetch', '--depth=1', '--no-tags', figmaRepository, 'main'],
        { stdio: 'inherit' },
      );
      lastError = undefined;
      break;
    } catch (error) {
      lastError = error;
      console.warn(`Homepage collage sync attempt ${attempt} failed.`);
    }
  }
  if (lastError) throw lastError;

  for (const path of files) {
    const content = execFileSync('git', ['--git-dir', repository, 'show', `FETCH_HEAD:${path}`], {
      encoding: path.endsWith('.tsx') ? 'utf8' : null,
      maxBuffer: 10 * 1024 * 1024,
    });
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }

  console.log('Synced the homepage collage and four optimized photos from Figma Make.');
} finally {
  rmSync(repository, { recursive: true, force: true });
}

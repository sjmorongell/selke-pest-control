// Step 1 of the build: turn base64 text images back into real image files.
//
// Images are kept as base64 text because the GitHub API used for publishing cannot
// upload binary files, and the Figma Make repo stores images as Git LFS pointers.
// Each folder below holds <name>.b64 files that are written to <target>/<name>.webp.
//
// To add an image: base64-encode a .webp into one of these folders (or add a new
// folder → target line), then reference it from code by its public URL.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FOLDERS = {
  'scripts/collage': 'public/service-collage', // served at /service-collage/<name>.webp
};

let count = 0;
for (const [sourceDir, targetDir] of Object.entries(FOLDERS)) {
  mkdirSync(targetDir, { recursive: true });
  for (const file of readdirSync(sourceDir).filter(name => name.endsWith('.b64'))) {
    const target = join(targetDir, file.replace(/\.b64$/, '.webp'));
    writeFileSync(target, Buffer.from(readFileSync(join(sourceDir, file), 'utf8').trim(), 'base64'));
    count += 1;
  }
}
console.log(`Restored ${count} image(s).`);

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const payloadPath = 'scripts/hero/selke-home-treatment-hero.webp.b64';
const targetPath = 'src/imports/selke-home-treatment-hero.webp';
const expectedImageHash = '246d3e856d32cd0b77130e0a6a1f9f899b3eae677eeac32e0df9d5075a773d4c';

const payload = readFileSync(payloadPath, 'utf8');
const image = Buffer.from(payload.trim(), 'base64');
const imageHash = createHash('sha256').update(image).digest('hex');

if (imageHash !== expectedImageHash) {
  throw new Error('Decoded homepage hero image failed its integrity check.');
}

mkdirSync(dirname(targetPath), { recursive: true });
writeFileSync(targetPath, image);
console.log(`Rebuilt verified homepage hero image at ${targetPath}.`);

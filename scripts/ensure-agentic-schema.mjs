/**
 * Adds a conservative WebPage schema to sitemap pages that do not already have
 * JSON-LD. Page-specific LocalBusiness, Blog, and BlogPosting schemas remain
 * untouched.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const sitemap = fs.readFileSync(path.join(rootDir, 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url.trim());
let added = 0;

for (const url of urls) {
  const pathname = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const file = pathname
    ? path.join(distDir, pathname, 'index.html')
    : path.join(distDir, 'index.html');

  if (!fs.existsSync(file)) continue;

  let html = fs.readFileSync(file, 'utf8');
  if (/type=["']application\/ld\+json["']/i.test(html)) continue;

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? 'Selke Pest Control';
  const description =
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i)?.[1]?.trim() ?? '';
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Selke Pest Control',
      url: 'https://www.selkepestcontrol.com/',
    },
    about: {
      '@type': 'LocalBusiness',
      name: 'Selke Pest Control',
      telephone: '+1-704-728-0204',
    },
  });

  html = html.replace('</head>', `    <script type="application/ld+json">${schema}</script>\n  </head>`);
  fs.writeFileSync(file, html);
  added++;
}

console.log(`✓ Structured data coverage: added WebPage JSON-LD to ${added} sitemap page${added === 1 ? '' : 's'}`);

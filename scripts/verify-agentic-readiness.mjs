/**
 * Fails the production build when an indexable URL is missing a machine-readable
 * discovery signal. This prevents SPA fallback HTML from silently replacing the
 * unique metadata generated for search engines and AI crawlers.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const siteOrigin = 'https://www.selkepestcontrol.com';
const requiredAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
];

const errors = [];
const read = file => fs.readFileSync(file, 'utf8');

const vercelConfigPath = path.join(rootDir, 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  try {
    const vercelConfig = JSON.parse(read(vercelConfigPath));
    const homepageFallback = vercelConfig.rewrites?.some(
      rewrite =>
        rewrite?.destination === '/index.html' &&
        ['/((.*))', '/(.*)', '/:path*', '/**'].includes(rewrite?.source),
    );

    if (homepageFallback) {
      errors.push(
        'vercel.json rewrites every URL to /index.html, shadowing the pre-rendered route HTML',
      );
    }
  } catch {
    errors.push('vercel.json is not valid JSON');
  }
}

function match(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? '';
}

function routeFile(url) {
  const pathname = new URL(url).pathname.replace(/^\/|\/$/g, '');
  return pathname
    ? path.join(distDir, pathname, 'index.html')
    : path.join(distDir, 'index.html');
}

const robots = read(path.join(publicDir, 'robots.txt'));
for (const agent of requiredAgents) {
  if (!new RegExp(`User-agent:\\s*${agent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(robots)) {
    errors.push(`robots.txt does not explicitly allow ${agent}`);
  }
}
if (!robots.includes(`Sitemap: ${siteOrigin}/sitemap.xml`)) {
  errors.push('robots.txt does not advertise the canonical sitemap');
}

const llms = read(path.join(publicDir, 'llms.txt'));
if (!llms.includes(`${siteOrigin}/sitemap.xml`)) {
  errors.push('llms.txt does not link to the canonical sitemap');
}
if (!llms.includes('704-728-0204') || !llms.includes('Mooresville')) {
  errors.push('llms.txt is missing primary business facts');
}

const sitemap = read(path.join(publicDir, 'sitemap.xml'));
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url.trim());
if (urls.length === 0) errors.push('sitemap.xml contains no URLs');
if (new Set(urls).size !== urls.length) errors.push('sitemap.xml contains duplicate URLs');

const titles = new Map();
const canonicals = new Map();

for (const url of urls) {
  if (!url.startsWith(`${siteOrigin}/`)) {
    errors.push(`Non-canonical sitemap URL: ${url}`);
    continue;
  }

  const file = routeFile(url);
  if (!fs.existsSync(file)) {
    errors.push(`No pre-rendered HTML for ${url}`);
    continue;
  }

  const html = read(file);
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i);
  const canonical = match(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i);
  const h1 = match(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim();
  const robotsMeta = match(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["'][^>]*>/i);
  const schemas = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  if (!title) errors.push(`Missing title: ${url}`);
  if (!description) errors.push(`Missing meta description: ${url}`);
  if (canonical !== url) errors.push(`Canonical mismatch for ${url}: ${canonical || 'missing'}`);
  if (!h1) errors.push(`Missing server-rendered H1: ${url}`);
  if (/noindex/i.test(robotsMeta)) errors.push(`Sitemap URL is marked noindex: ${url}`);
  if (schemas.length === 0) errors.push(`Missing JSON-LD structured data: ${url}`);

  for (const [, schema] of schemas) {
    try {
      JSON.parse(schema);
    } catch {
      errors.push(`Invalid JSON-LD structured data: ${url}`);
    }
  }

  if (title) {
    if (titles.has(title)) errors.push(`Duplicate title on ${titles.get(title)} and ${url}`);
    titles.set(title, url);
  }
  if (canonical) {
    if (canonicals.has(canonical)) errors.push(`Duplicate canonical on ${canonicals.get(canonical)} and ${url}`);
    canonicals.set(canonical, url);
  }
}

if (errors.length) {
  console.error('\nAgentic readiness verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `✓ Agentic readiness 4/4: crawler access, discovery files, ${urls.length} unique pre-rendered pages, and structured data verified`,
);

import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const baseUrl = 'https://www.selkepestcontrol.com';
const slug = 'why-our-pest-control-service-takes-56-minutes';
const canonical = `${baseUrl}/blog/${slug}`;
const title = 'Why Our Average Pest Control Service Takes More Than 56 Minutes | Selke Pest Control';
const description = 'See the six-pass process behind Selke Pest Control’s 56-minute average service for Charlotte Metro and Lake Norman homes—about 211% longer than an 18-minute benchmark.';
const templatePath = path.join(distDir, 'index.html');

let html = fs.readFileSync(templatePath, 'utf8');
const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Our Average Pest Control Service Takes More Than 56 Minutes',
  description,
  url: canonical,
  datePublished: '2026-11-07',
  dateModified: '2026-11-07',
  mainEntityOfPage: canonical,
  keywords: 'premium pest control Charlotte NC, pest control service Mooresville NC, Lake Norman pest control, exterior pest control process',
  image: `${baseUrl}/og-image.png`,
  author: { '@type': 'Organization', name: 'Selke Pest Control', url: baseUrl },
  publisher: {
    '@type': 'Organization',
    name: 'Selke Pest Control',
    url: baseUrl,
    logo: { '@type': 'ImageObject', url: `${baseUrl}/icon-192.png` },
  },
});
const content = `
<main id="seo-prerender" style="font-family:system-ui,sans-serif;max-width:900px;margin:0 auto;padding:32px 20px;line-height:1.6">
  <p><a href="/">Selke Pest Control</a> &rsaquo; <a href="/blog">Blog</a></p>
  <h1>Why Our Average Pest Control Service Takes More Than 56 Minutes</h1>
  <p><em>Published November 7, 2026 by Selke Pest Control in Mooresville, NC</em></p>
  <p>Selke Pest Control’s current average residential service takes more than 56 minutes because our technicians complete six deliberate exterior passes. Compared with an 18-minute service-time benchmark, 56 minutes is 38 minutes—or about 211%—longer and approximately 3.1 times as long.</p>
  <h2>How Much Longer Is a 56-Minute Service?</h2>
  <p>The calculation is (56 - 18) / 18 × 100. Time alone does not guarantee results; the difference is how that time is used.</p>
  <h2>The Six-Pass Exterior Pest Control Process</h2>
  <ol>
    <li><strong>Deweb eaves and window frames</strong> while inspecting common shelter and entry areas.</li>
    <li><strong>Apply the exterior liquid treatment</strong> to appropriate labeled areas.</li>
    <li><strong>Treat soil and landscape harborage</strong> in appropriate mulch, pine straw, soil, and rocky areas.</li>
    <li><strong>Apply a perimeter granular band</strong> when conditions and the label call for it.</li>
    <li><strong>Address cracks, crevices, and crawl-space concerns</strong> with targeted dust when included and appropriate.</li>
    <li><strong>Complete a final inspection</strong> and document conditions that still need attention.</li>
  </ol>
  <h2>Garage and Optional Interior Service</h2>
  <p>The garage is its own service zone. When accessible and included, the technician dewebs and treats appropriate cracks, crevices, edges, and entry points. Customer-requested interior service adds targeted inspection and treatment inside the home.</p>
  <h2>Why the Average Can Vary</h2>
  <p>Fifty-six minutes is an average, not a timer. Home size, landscaping, crawl-space access, pest pressure, garage conditions, requested interior work, weather, and label requirements can all change service time.</p>
  <h2>Charlotte Metro and Lake Norman Service Area</h2>
  <p>Selke Pest Control serves Mooresville, Charlotte, Huntersville, Cornelius, Davidson, Denver, Sherrills Ford, Statesville, Troutman, and nearby communities. Call <a href="tel:704-728-0204">704-728-0204</a> for a free quote.</p>
</main>`;

html = html
  .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`)
  .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
  .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
  .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`)
  .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`)
  .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`)
  .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`)
  .replace('</head>', `  <script type="application/ld+json">${schema}</script>\n</head>`)
  .replace(
    /<div id="root">[\s\S]*?(?=\s*<!-- figma:body-end -->)/,
    `<div id="root">${content}</div>`,
  );

const outputDir = path.join(distDir, 'blog', slug);
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'index.html'), html);
console.log(`✓ blog/${slug}`);

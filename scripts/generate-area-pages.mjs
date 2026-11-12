/**
 * Post-build: static HTML for the newer city pages, the county hub pages, and a
 * crawlable homepage summary. Must run after every other generator because it
 * reads dist/index.html as the page template and then enriches the homepage.
 *
 * Non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, and others) only read raw
 * HTML, so each page gets a complete answer-first summary, NAP details,
 * internal links, and page-specific JSON-LD.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const base = 'https://www.selkepestcontrol.com';
const { counties, cities } = JSON.parse(fs.readFileSync(path.join(rootDir, 'src/app/data/serviceAreas.json'), 'utf8'));
const newCities = JSON.parse(fs.readFileSync(path.join(rootDir, 'src/app/data/newCityData.json'), 'utf8'));
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const homeTemplate = fs.readFileSync(templatePath, 'utf8');
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const ldBlocks = /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g;

// The homepage graph includes the homepage FAQ. Other pages keep only the
// business and website entities so their FAQ markup matches their own content.
const businessGraph = (() => {
  const match = homeTemplate.match(/<script type="application\/ld\+json">([\s\S]*?#business[\s\S]*?)<\/script>/);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[1]);
    parsed['@graph'] = parsed['@graph'].filter(node => ['#business', '#website'].some(id => String(node['@id'] ?? '').endsWith(id)));
    return parsed;
  } catch {
    return null;
  }
})();

const servicesList = `<ul>
    <li><a href="/mosquito-control-charlotte-nc">Mosquito control</a> &mdash; monthly seasonal barrier treatments</li>
    <li><a href="/tick-control-charlotte-nc">Tick control</a> and <a href="/flea-control-charlotte-nc">flea control</a> &mdash; yard, shade, and pet-area treatments</li>
    <li><a href="/ant-control-charlotte-nc">Ant and fire ant control</a> &mdash; property-wide treatment</li>
    <li><a href="/cockroach-control-charlotte-nc">Cockroach control</a> and <a href="/spider-control-charlotte-nc">spider control</a></li>
    <li><a href="/wasp-control-charlotte-nc">Wasp and stinging-insect control</a></li>
    <li><a href="/rodent-control-charlotte-nc">Mice and rodent control</a> &mdash; inspection, exclusion, and monitoring</li>
  </ul>`;

const nap = `<p><strong>Selke Pest Control</strong> &middot; Based in Mooresville, NC &middot; <a href="tel:704-728-0204">704-728-0204</a> &middot; <a href="mailto:sales@selkepestcontrol.com">sales@selkepestcontrol.com</a> &middot; Monday&ndash;Saturday 8:00 AM&ndash;8:00 PM Eastern &middot; NC License# 2215P &middot; 75+ five-star Google reviews</p>`;

const areaDirectory = () => `<h2>Service areas by county</h2>
  <ul>${counties.map(county => `<li><a href="/${county.slug}">${esc(county.name)}</a>: ${cities.filter(city => city.county === county.id).map(city => `<a href="/${city.slug}">${esc(city.name)}</a>`).join(', ')}</li>`).join('')}</ul>`;

function prerender(inner) {
  return `<div id="seo-prerender" style="font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 20px;line-height:1.6">
  ${inner}
  ${areaDirectory()}
  ${nap}
</div>
<script>document.getElementById('seo-prerender') && (document.getElementById('seo-prerender').style.display='none')</script>`;
}

function withMeta(template, { title, description, canonical, schema, body, stripHomeSchema = true }) {
  let html = template;
  if (stripHomeSchema) {
    html = html.replace(ldBlocks, '');
    if (businessGraph) schema = [businessGraph, ...schema];
  }
  const ld = schema.map(item => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n    ');
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`)
    .replace('</head>', `    ${ld}\n  </head>`)
    .replace(/<div id="root"><\/div>/, `${body}<div id="root"></div>`);
  return html;
}

function write(slug, html) {
  const dir = path.join(distDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ ${slug}`);
}

const faqSchema = faqs => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});
const breadcrumb = items => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })),
});
const faqHtml = faqs => `<h2>Frequently asked questions</h2>${faqs.map(({ q, a }) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}`;

// ─── New city pages ──────────────────────────────────────────────────────────────────────────
for (const city of newCities) {
  const area = cities.find(item => item.slug === city.slug);
  const county = counties.find(item => item.id === area?.county);
  const canonical = `${base}/${city.slug}`;
  const nearby = cities
    .filter(item => item.slug !== city.slug)
    .map(item => ({ ...item, d: Math.hypot(item.lat - area.lat, (item.lng - area.lng) * 0.82) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 6);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Pest Control in ${city.name}, NC`,
      serviceType: 'Residential pest control',
      url: canonical,
      description: city.metaDescription,
      provider: { '@id': `${base}/#business` },
      areaServed: {
        '@type': 'City',
        name: `${city.name}, NC`,
        geo: { '@type': 'GeoCoordinates', latitude: Number(city.latitude), longitude: Number(city.longitude) },
        containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county}, North Carolina`, url: county ? `${base}/${county.slug}` : undefined },
      },
    },
    breadcrumb([['Home', `${base}/`], ...(county ? [[county.name, `${base}/${county.slug}`]] : []), [`Pest Control ${city.name}, NC`, canonical]]),
    faqSchema(city.faqItems),
  ];

  const body = prerender(`<p><a href="/">Selke Pest Control</a> &rsaquo; ${county ? `<a href="/${county.slug}">${esc(county.name)}</a> &rsaquo; ` : ''}${esc(city.name)}, NC</p>
  <h1>${esc(city.heroHeadline)}</h1>
  <p><strong>Quick answer:</strong> Selke Pest Control is a family-owned, licensed pest control company (NC License# 2215P) based in Mooresville that serves ${esc(city.name)}, NC and ${esc(city.county)}. We provide general pest control, mosquito control, flea and tick control, and rodent control with same-day service available and the Selke Guarantee. Call 704-728-0204 for a free quote.</p>
  <p>${esc(city.intro)}</p>
  <h2>Why pests thrive in ${esc(city.name)}</h2>
  <p>${esc(city.geographyPest)}</p>
  <h2>Top pest threats in ${esc(city.name)}</h2>
  ${city.topPests.map(pest => `<h3>${esc(pest.name)}</h3><p>${esc(pest.description)}</p>`).join('')}
  <h2>${esc(city.name)} neighborhoods we serve</h2>
  <ul>${city.neighborhoods.map(n => `<li><strong>${esc(n.name)}:</strong> ${esc(n.pestNote)}</li>`).join('')}</ul>
  <h2>Pest control services in ${esc(city.name)}</h2>
  ${servicesList}
  <h2>Seasonal pest guide for ${esc(city.name)}</h2>
  <p>${esc(city.seasonalTips)}</p>
  <h2>Why ${esc(city.name)} homeowners choose Selke</h2>
  <p>${esc(city.whySelke)}</p>
  ${faqHtml(city.faqItems)}
  <h2>Pest control near ${esc(city.name)}</h2>
  <ul>${nearby.map(item => `<li><a href="/${item.slug}">Pest control in ${esc(item.name)}, NC</a></li>`).join('')}</ul>`);

  let html = withMeta(homeTemplate, { title: city.metaTitle, description: city.metaDescription, canonical, schema, body });
  html = html
    .replace(/<meta name="geo.placename"[^>]*>/, `<meta name="geo.placename" content="${esc(city.name)}, North Carolina" />`)
    .replace(/<meta name="geo.position"[^>]*>/, `<meta name="geo.position" content="${city.latitude};${city.longitude}" />`)
    .replace(/<meta name="ICBM"[^>]*>/, `<meta name="ICBM" content="${city.latitude}, ${city.longitude}" />`);
  write(city.slug, html);
}

// ─── County hub pages ────────────────────────────────────────────────────────────────────────
for (const county of counties) {
  const canonical = `${base}/${county.slug}`;
  const countyCities = cities.filter(city => city.county === county.id);
  const names = countyCities.map(city => city.name).join(', ');
  const title = `Pest Control ${county.name}, NC | ${names} | Selke Pest Control`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Pest Control in ${county.name}, NC`,
      serviceType: 'Residential pest control',
      url: canonical,
      description: county.summary,
      provider: { '@id': `${base}/#business` },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${county.name}, North Carolina`,
        geo: { '@type': 'GeoCoordinates', latitude: county.lat, longitude: county.lng },
        containsPlace: countyCities.map(city => ({
          '@type': 'City',
          name: `${city.name}, NC`,
          url: `${base}/${city.slug}`,
          geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
        })),
      },
    },
    breadcrumb([['Home', `${base}/`], [`${county.name} Pest Control`, canonical]]),
    faqSchema(county.faqs),
  ];
  const body = prerender(`<p><a href="/">Selke Pest Control</a> &rsaquo; ${esc(county.name)}</p>
  <h1>Pest Control in ${esc(county.name)}, NC</h1>
  <p><strong>Quick answer:</strong> ${esc(county.summary)}</p>
  <h2>${esc(county.name)} cities we serve</h2>
  <ul>${countyCities.map(city => `<li><a href="/${city.slug}">Pest control in ${esc(city.name)}, NC</a> (ZIP ${city.zips.join(', ')})</li>`).join('')}</ul>
  <h2>Why pests thrive in ${esc(county.name)}</h2>
  <p>${esc(county.geography)}</p>
  <h2>Most common pests in ${esc(county.name)}</h2>
  <ul>${county.pests.map(pest => `<li>${esc(pest)}</li>`).join('')}</ul>
  <h2>Pest control services</h2>
  ${servicesList}
  ${faqHtml(county.faqs)}`);
  let html = withMeta(homeTemplate, { title, description: county.summary, canonical, schema, body });
  html = html
    .replace(/<meta name="geo.placename"[^>]*>/, `<meta name="geo.placename" content="${esc(county.name)}, North Carolina" />`)
    .replace(/<meta name="geo.position"[^>]*>/, `<meta name="geo.position" content="${county.lat};${county.lng}" />`)
    .replace(/<meta name="ICBM"[^>]*>/, `<meta name="ICBM" content="${county.lat}, ${county.lng}" />`);
  write(county.slug, html);
}

// ─── Sitewide: keep homepage FAQ schema on the homepage only ────────────────
let cleaned = 0;
const walk = dir => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') walk(full);
    } else if (entry.name === 'index.html' && full !== templatePath) {
      const html = fs.readFileSync(full, 'utf8');
      const next = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (block, json) => {
        if (!json.includes('/#faq') || !businessGraph) return block;
        return `<script type="application/ld+json">${JSON.stringify(businessGraph)}</script>`;
      });
      if (next !== html) {
        fs.writeFileSync(full, next);
        cleaned++;
      }
    }
  }
};
walk(distDir);
console.log(`✓ Homepage FAQ schema scoped to homepage (${cleaned} pages cleaned)`);

// ─── Homepage crawlable summary ──────────────────────────────────────────────────────────────
const homeFaqs = (() => {
  try {
    const match = homeTemplate.match(/<script type="application\/ld\+json">([\s\S]*?#business[\s\S]*?)<\/script>/);
    const faq = JSON.parse(match[1])['@graph'].find(node => node['@type'] === 'FAQPage');
    return faq.mainEntity.map(item => ({ q: item.name, a: item.acceptedAnswer.text }));
  } catch {
    return [];
  }
})();
const homeBody = prerender(`<h1>Pest Control in Mooresville, Lake Norman &amp; the Charlotte Metro</h1>
  <p><strong>Selke Pest Control</strong> is a family-owned, licensed and insured pest control company based in Mooresville, North Carolina (NC License# 2215P). We provide residential general pest control, mosquito control, flea and tick control, and rodent control across ${cities.length} cities in ${counties.length} counties: ${counties.map(county => county.name).join(', ')}. Same-day service is available, our average residential service takes more than 56 minutes, and every quarterly plan includes the Selke Guarantee &mdash; if pests return between scheduled treatments, we re-treat at no additional charge.</p>
  <h2>Pest control services</h2>
  ${servicesList}
  ${homeFaqs.length ? faqHtml(homeFaqs) : ''}
  <p><a href="/blog">Pest control tips and articles</a></p>`);
fs.writeFileSync(templatePath, homeTemplate.replace(/<div id="root"><\/div>/, `${homeBody}<div id="root"></div>`));
console.log('✓ homepage prerender');

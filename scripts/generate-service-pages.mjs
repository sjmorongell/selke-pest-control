/**
 * Post-build: static HTML for /services, every /services/<slug> page, and /faq.
 * Content comes from src/app/data/services.json and faqs.json, the same files the
 * React pages read, so editing those JSON files updates both.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const base = 'https://www.selkepestcontrol.com';
const services = JSON.parse(fs.readFileSync(path.join(rootDir, 'src/app/data/services.json'), 'utf8'));
const faqs = JSON.parse(fs.readFileSync(path.join(rootDir, 'src/app/data/faqs.json'), 'utf8'));
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const ldBlocks = /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g;

// Business schema to repeat on every page. Supports both a standalone
// LocalBusiness block and an @graph containing #business / #website nodes.
const businessGraph = (() => {
  for (const [, json] of template.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(json);
      if (Array.isArray(parsed['@graph'])) {
        parsed['@graph'] = parsed['@graph'].filter(node => ['#business', '#website'].some(id => String(node['@id'] ?? '').endsWith(id)));
        if (parsed['@graph'].length) return parsed;
      } else if (String(parsed['@type']).includes('LocalBusiness')) {
        return parsed;
      }
    } catch {}
  }
  return null;
})();
const businessId = businessGraph?.['@id'] ?? `${base}/#business`;

const faqSchema = (items, url) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url,
  mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});
const breadcrumb = items => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })),
});
const faqHtml = items => `<h2>Frequently asked questions</h2>${items.map(({ q, a }) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}`;
const servicesList = `<ul>${services.map(s => `<li><a href="/services/${s.slug}">${esc(s.name)}</a> &mdash; ${esc(s.summary)}</li>`).join('')}</ul>`;
const nap = `<p><strong>Selke Pest Control</strong> &middot; Based in Mooresville, NC &middot; <a href="tel:704-728-0204">704-728-0204</a> &middot; <a href="mailto:sales@selkepestcontrol.com">sales@selkepestcontrol.com</a> &middot; Monday&ndash;Saturday 8:00 AM&ndash;8:00 PM Eastern &middot; NC License# 2215P &middot; 75+ five-star Google reviews</p>`;

function page({ slug, title, description, schema, inner }) {
  const canonical = `${base}/${slug}`;
  const ld = [businessGraph, ...schema].filter(Boolean).map(item => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n    ');
  const body = `<div id="seo-prerender" style="font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 20px;line-height:1.6">${inner}${nap}</div>
<script>document.getElementById('seo-prerender') && (document.getElementById('seo-prerender').style.display='none')</script>`;
  const html = template
    .replace(ldBlocks, '')
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
  const dir = path.join(distDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ ${slug}`);
}

// ─── /services ───────────────────────────────────────────────────────────────────────────
page({
  slug: 'services',
  title: 'Pest Control Services in Charlotte & Lake Norman, NC | Selke Pest Control',
  description: 'General pest control, mosquito, flea and tick, rodent control, exclusion, and carpenter ant, fire ant, and carpenter bee control across Lake Norman and the Charlotte Metro.',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Selke Pest Control services',
      itemListElement: services.map((s, index) => ({ '@type': 'ListItem', position: index + 1, name: s.name, url: `${base}/services/${s.slug}` })),
    },
    breadcrumb([['Home', `${base}/`], ['Services', `${base}/services`]]),
  ],
  inner: `<p><a href="/">Selke Pest Control</a> &rsaquo; Services</p>
  <h1>Pest Control Services for Charlotte-Area Homes</h1>
  <p><strong>Quick answer:</strong> Selke Pest Control offers six residential services across Lake Norman and the Charlotte Metro, backed by the Selke Guarantee.</p>
  ${servicesList}`,
});

// ─── /services/<slug> ────────────────────────────────────────────────────────────────────
for (const service of services) {
  const url = `${base}/services/${service.slug}`;
  page({
    slug: `services/${service.slug}`,
    title: service.metaTitle,
    description: service.metaDescription,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        serviceType: service.name,
        url,
        description: service.metaDescription,
        provider: { '@id': businessId },
        areaServed: [{ '@type': 'AdministrativeArea', name: 'Lake Norman and the Charlotte Metro, North Carolina' }],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.name} includes`,
          itemListElement: service.included.map(item => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: item.title, description: item.desc } })),
        },
      },
      breadcrumb([['Home', `${base}/`], ['Services', `${base}/services`], [service.name, url]]),
      faqSchema(service.faqs, url),
    ],
    inner: `<p><a href="/">Selke Pest Control</a> &rsaquo; <a href="/services">Services</a> &rsaquo; ${esc(service.name)}</p>
  <h1>${esc(service.headline)}</h1>
  <p><strong>Quick answer:</strong> ${esc(service.intro)}</p>
  <p><strong>Schedule:</strong> ${esc(service.frequency)}</p>
  <h2>What's included</h2>
  <ul>${service.included.map(item => `<li><strong>${esc(item.title)}:</strong> ${esc(item.desc)}</li>`).join('')}</ul>
  <h2>Pests covered</h2>
  <ul>${service.pests.map(p => `<li>${p.href ? `<a href="${p.href}">${esc(p.name)}</a>` : esc(p.name)}</li>`).join('')}</ul>
  ${faqHtml(service.faqs)}
  <h2>Other services</h2>
  ${servicesList}`,
  });
}

// ─── /faq ──────────────────────────────────────────────────────────────────────────────
page({
  slug: 'faq',
  title: 'Pest Control FAQ | Selke Pest Control | Charlotte & Lake Norman, NC',
  description: 'Answers to common questions about Selke Pest Control: service areas, safety for kids and pets, scheduling, the Selke Guarantee, contracts, and pricing.',
  schema: [faqSchema(faqs, `${base}/faq`), breadcrumb([['Home', `${base}/`], ['FAQ', `${base}/faq`]])],
  inner: `<p><a href="/">Selke Pest Control</a> &rsaquo; FAQ</p>
  <h1>Frequently Asked Questions</h1>
  ${faqHtml(faqs)}
  <h2>Pest control services</h2>
  ${servicesList}`,
});

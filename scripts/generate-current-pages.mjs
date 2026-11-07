import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const baseUrl = 'https://www.selkepestcontrol.com';
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const articles = [
  {
    slug: 'summer-mosquito-control-lake-norman-nc',
    title: 'Summer Mosquito Control in Lake Norman, NC',
    description: 'Learn how professional mosquito control helps Lake Norman homeowners reduce mosquitoes and enjoy their yards throughout the summer.',
    body: 'Warm temperatures, standing water, and summer rain make the Lake Norman area ideal for mosquitoes. Professional barrier treatments target the shaded foliage and resting areas mosquitoes use while practical prevention removes breeding sites around the home.',
  },
  {
    slug: 'fire-ants-after-lawn-aeration-nc',
    title: 'Fire Ants After Lawn Aeration in North Carolina',
    description: 'Learn why fire ant mounds can appear after lawn aeration and how North Carolina homeowners can control them safely and effectively.',
    body: 'Lawn aeration changes soil conditions and can make existing fire ant activity more visible. Treating individual mounds alone may miss connected colonies, so a property-wide inspection and properly labeled treatment provide more reliable control.',
  },
  {
    slug: 'does-rain-wash-away-pest-control-treatment',
    title: 'Does Rain Wash Away Pest Control Treatment?',
    description: 'Find out how rain affects professional exterior pest control treatments and why properly applied products continue protecting your home.',
    body: 'Most professional exterior pest control products are designed to bind to treated surfaces after they dry. Timing, product labels, rainfall intensity, and the surface being treated all matter, which is why technicians adjust service plans to current conditions.',
  },
  {
    slug: 'mosquitoes-after-summer-rain-charlotte-nc',
    title: 'Why Mosquitoes Get Worse After Summer Rain in Charlotte',
    description: 'Discover why mosquito activity increases after Charlotte summer storms and what homeowners can do to reduce breeding sites.',
    body: 'Summer rain leaves small pockets of standing water in gutters, planters, toys, tarps, and low areas. Mosquito eggs can develop quickly in warm weather, so removing water and maintaining professional barrier protection are both important.',
  },
  {
    slug: 'pest-free-backyard-party-charlotte-nc',
    title: 'How to Keep Pests Away From Your Charlotte Backyard Party',
    description: 'Use these practical pest prevention tips to keep mosquitoes, ants, flies, and stinging insects away from your next backyard gathering.',
    body: 'Prepare before guests arrive by removing standing water, sealing trash, cleaning food residue, checking for stinging-insect nests, and using fans around seating areas. A professional treatment plan can provide broader seasonal protection.',
  },
];

const campaigns = [
  {
    slug: 'giveaway',
    title: 'Selke Home Protection Giveaway',
    description: 'Enter the Selke Pest Control giveaway for a chance to win 12 months of qualifying pest control service in the Charlotte Metro and Lake Norman area.',
    body: 'Enter the Selke Home Protection Giveaway using the official SweepWidget form. Eligibility, prize details, entry dates, and restrictions are governed by the official giveaway rules displayed with the entry form.',
  },
  {
    slug: 'giveaway-thank-you',
    title: 'Giveaway Entry Confirmed',
    description: 'You are entered in the Selke Pest Control giveaway. Request a free quote and protect your home while you wait for the winner announcement.',
    body: 'Your giveaway entry has been received. You can also request a free pest control quote now and learn why Charlotte Metro and Lake Norman homeowners choose Selke Pest Control.',
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function writePage({ slug, title, description, body, type = 'WebPage' }) {
  const canonical = `${baseUrl}/${slug}`;
  const fullTitle = `${title} | Selke Pest Control`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    headline: type === 'BlogPosting' ? title : undefined,
    name: title,
    description,
    url: canonical,
    mainEntityOfPage: canonical,
    author: type === 'BlogPosting' ? { '@type': 'Organization', name: 'Selke Pest Control' } : undefined,
    publisher: { '@type': 'Organization', name: 'Selke Pest Control', url: baseUrl },
  });
  const content = `<main id="seo-prerender" style="font-family:system-ui,sans-serif;max-width:900px;margin:0 auto;padding:32px 20px;line-height:1.6">
  <p><a href="/">Selke Pest Control</a>${type === 'BlogPosting' ? ' &rsaquo; <a href="/blog">Blog</a>' : ''}</p>
  <h1>${escapeHtml(title)}</h1>
  <p>${escapeHtml(body)}</p>
  <p>Selke Pest Control serves Mooresville, Lake Norman, and the Charlotte Metro. Call <a href="tel:704-728-0204">704-728-0204</a> or request a free quote online.</p>
</main>`;

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `  <script type="application/ld+json">${schema}</script>\n</head>`)
    .replace(/<div id="root">[\s\S]*?(?=\s*<!-- figma:body-end -->)/, `<div id="root">${content}</div>`);

  const outputDir = path.join(distDir, slug);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
  console.log(`✓ ${slug}`);
}

for (const article of articles) {
  writePage({ ...article, slug: `blog/${article.slug}`, type: 'BlogPosting' });
}

for (const campaign of campaigns) {
  writePage(campaign);
}

const blogTitle = 'Pest Control Blog | Selke Pest Control';
const blogDescription = 'Expert pest prevention advice for homeowners in Mooresville, Lake Norman, Charlotte, and surrounding North Carolina communities.';
const articleLinks = articles
  .map(({ slug, title }) => `<li><a href="/blog/${slug}">${escapeHtml(title)}</a></li>`)
  .join('');
const blogContent = `<main id="seo-prerender" style="font-family:system-ui,sans-serif;max-width:900px;margin:0 auto;padding:32px 20px;line-height:1.6">
  <p><a href="/">Selke Pest Control</a> &rsaquo; Blog</p>
  <h1>Pest Control Tips and Resources</h1>
  <p>${escapeHtml(blogDescription)}</p>
  <ul>${articleLinks}<li><a href="/blog/why-our-pest-control-service-takes-56-minutes">Why Our Average Pest Control Service Takes More Than 56 Minutes</a></li></ul>
</main>`;
const blogSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Selke Pest Control Blog',
  url: `${baseUrl}/blog`,
  description: blogDescription,
  publisher: { '@type': 'Organization', name: 'Selke Pest Control', url: baseUrl },
});
const blogHtml = template
  .replace(/<title>[\s\S]*?<\/title>/, `<title>${blogTitle}</title>`)
  .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${blogDescription}" />`)
  .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${baseUrl}/blog" />`)
  .replace('</head>', `  <script type="application/ld+json">${blogSchema}</script>\n</head>`)
  .replace(/<div id="root">[\s\S]*?(?=\s*<!-- figma:body-end -->)/, `<div id="root">${blogContent}</div>`);
fs.mkdirSync(path.join(distDir, 'blog'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'blog', 'index.html'), blogHtml);
console.log('✓ blog');

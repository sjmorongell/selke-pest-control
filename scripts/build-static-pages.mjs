// Step 3 of the build (after `vite build`): write static HTML for every indexable URL
// so search engines and AI crawlers see unique titles, meta tags, and schema markup.
// The generators run in order; later ones may overwrite pages written by earlier ones.
import { execFileSync } from 'node:child_process';

const generators = [
  'generate-seo-pages.mjs', // cities, pests, original blog posts
  'generate-current-pages.mjs', // newer blog posts + giveaway pages
  'generate-premium-service-page.mjs', // "56 minutes" service article
  'generate-service-pages.mjs', // /services, /services/<slug>, /faq (from data/services.json + faqs.json)
  'generate-area-pages.mjs', // county hubs + new cities (from data/*.json)
];

for (const script of generators) {
  execFileSync(process.execPath, [`scripts/${script}`], { stdio: 'inherit' });
}

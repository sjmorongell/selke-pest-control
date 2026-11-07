import fs from 'node:fs';

function replaceOnce(source, oldValue, newValue, label) {
  if (source.includes(newValue)) return source;
  if (!source.includes(oldValue)) throw new Error(`Missing expected source fragment: ${label}`);
  return source.replace(oldValue, newValue);
}

const appPath = 'src/app/App.tsx';
let app = fs.readFileSync(appPath, 'utf8');

const appReplacements = [
  ['TreeDeciduous, Check, X, Heart, Menu }', 'TreeDeciduous, Check, X, Heart, Menu, BadgeCheck }', 'license icon import'],
  ['className="container mx-auto px-4 py-3 flex items-center justify-between gap-4"', 'className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6"', 'responsive header container'],
  ['className="flex items-center"', 'className="flex min-w-0 items-center"', 'header logo wrapper'],
  ['className="h-14 w-auto md:h-16"', 'className="h-11 w-auto sm:h-12 xl:h-14"', 'responsive header logo'],
  ['className="hidden lg:flex items-center gap-6"', 'className="hidden items-center gap-3 whitespace-nowrap text-[13px] font-medium lg:flex xl:gap-4 xl:text-sm 2xl:gap-6 2xl:text-base"', 'responsive desktop navigation'],
  ['<a href="#tips" className="text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>', '<a href="/blog" className="text-gray-700 hover:text-cyan-500 transition-colors">Blog</a>', 'blog navigation link'],
  ['className="flex items-center gap-2 sm:gap-3"', 'className="flex shrink-0 items-center gap-2 sm:gap-3"', 'header actions'],
  ['className="bg-cyan-500 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 text-sm md:text-base"', 'className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600 sm:px-4 xl:px-5"', 'responsive call button'],
  ['className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"', 'className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 lg:hidden"', 'mobile menu button'],
  ['className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg"', 'className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden"', 'mobile navigation'],
  ["['Pest Tips', '#tips'],", "['Blog', '/blog'],", 'mobile blog navigation'],
  ['className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-16 md:py-40"', 'className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 py-16 text-white sm:py-20 lg:py-32 xl:py-36"', 'responsive hero'],
  ['className="absolute bottom-8 right-8 hidden md:block cursor-pointer group"', 'className="absolute bottom-8 right-8 hidden cursor-pointer group xl:block"', 'hero guarantee badge'],
  ['className="container mx-auto px-4 relative z-10"', 'className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"', 'hero container'],
  ['className="max-w-4xl mx-auto text-center"', 'className="mx-auto max-w-6xl text-center"', 'hero content width'],
  ['Family-Owned & Locally Operated in Mooresville, NC', 'Family-Owned &amp; Locally Operated', 'family-owned message'],
  [`<h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
              <span className="block">Lake Norman's</span>
              <span className="block text-cyan-400">Hometown Pest Control</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300">
              Expert solutions for general pests, mosquitoes, fleas, ticks &amp; rodents.<br className="hidden sm:block" />
              Same-week service available &bull; 100% Satisfaction Guarantee
            </p>`, `<h1 className="mb-6 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-[3.5rem]">
              <span className="block lg:whitespace-nowrap">Pest Control in Mooresville, North Carolina</span>
              <span className="mt-2 block text-cyan-400">&amp; the Charlotte Metro</span>
            </h1>
            <p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
              Same-day service available &bull; 100% Satisfaction Guarantee
            </p>`, 'homepage headline and same-day message'],
  [`<li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>`, `<li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                  <span>2115P</span>
                </li>`, 'business license'],
];

for (const [oldValue, newValue, label] of appReplacements) {
  app = replaceOnce(app, oldValue, newValue, label);
}
fs.writeFileSync(appPath, app);

const thankPath = 'src/app/pages/GiveawayThankYouPage.tsx';
let thank = fs.readFileSync(thankPath, 'utf8');
thank = replaceOnce(
  thank,
  "import { ArrowRight, CalendarCheck, CheckCircle, Phone, Shield, Trophy } from 'lucide-react';",
  "import { ArrowRight, CalendarCheck, CheckCircle, Phone, Shield, Star, Trophy } from 'lucide-react';",
  'giveaway star import',
);
thank = replaceOnce(
  thank,
  "import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';",
  `import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { InstagramFeedSection } from '../components/InstagramFeedSection';`,
  'giveaway review and Instagram imports',
);

const marker = '      </main>\n\n      <footer';
const sections = `        <section className="bg-gray-50 px-4 py-16 text-slate-950 sm:px-6 md:py-20" aria-label="Customer Reviews">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl md:text-4xl">What Our Customers Say</h2>
              <a href="https://share.google/cT2MLnW3U4Dw1kosn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700">
                <span className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, index) => <Star key={index} className="size-4 fill-yellow-400 text-yellow-400" />)}
                </span>
                75+ Five-Star Reviews on Google &rarr;
              </a>
            </div>
            <ReviewsCarousel />
          </div>
        </section>

        <InstagramFeedSection />
      </main>

      <footer`;
if (!thank.includes('<InstagramFeedSection />')) {
  thank = replaceOnce(thank, marker, sections, 'giveaway reviews and recent work sections');
}
fs.writeFileSync(thankPath, thank);

const sitemapPath = 'public/sitemap.xml';
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (!sitemap.includes('/giveaway-thank-you')) {
  const giveaway = `  <url>
    <loc>https://www.selkepestcontrol.com/giveaway</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  const withThankYou = `${giveaway}
  <url>
    <loc>https://www.selkepestcontrol.com/giveaway-thank-you</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  sitemap = replaceOnce(sitemap, giveaway, withThankYou, 'giveaway thank-you sitemap entry');
  fs.writeFileSync(sitemapPath, sitemap);
}

console.log('Applied final homepage, giveaway, footer, and sitemap release updates.');

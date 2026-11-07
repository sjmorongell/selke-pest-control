import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/app/App.tsx';
let source = readFileSync(path, 'utf8');
let changed = false;

const heroImagePath = 'src/imports/selke-home-treatment-hero.webp';
const heroImageBase64 = readFileSync('scripts/hero/selke-home-treatment-hero.webp.b64', 'utf8');
writeFileSync(heroImagePath, Buffer.from(heroImageBase64, 'base64'));

if (source.trim() === 'PLACEHOLDER') {
  const recoveryUrl = 'https://raw.githubusercontent.com/sjmorongell/selke-pest-control/8b45e1f/src/app/App.tsx';
  const response = await fetch(recoveryUrl);

  if (!response.ok) {
    throw new Error(`Could not restore the homepage source (${response.status} ${response.statusText}).`);
  }

  source = await response.text();
  changed = true;
  console.log('Restored homepage source before applying release updates.');
}

const heroImageImport = "import heroTreatmentImage from '../imports/selke-home-treatment-hero.webp';";
if (!source.includes(heroImageImport)) {
  const previousHeroImageImport = "import heroBackgroundImage from '../imports/b492d4f6-f650-412b-b5ac-975c7d404996.png';";
  if (source.includes(previousHeroImageImport)) {
    source = source.replace(previousHeroImageImport, heroImageImport);
    changed = true;
    console.log('Applied optimized homepage hero image import.');
  } else {
    const logoImport = "import newLogo from '../imports/Screenshot_2026-05-18_213802.png';";
    if (source.includes(logoImport)) {
      source = source.replace(logoImport, `${logoImport}\n${heroImageImport}`);
      changed = true;
      console.log('Inserted optimized homepage hero image import.');
    } else {
      console.warn('Skipped homepage hero image import: expected import location was not found.');
    }
  }
}

if (!source.includes('selke-pattern-hex')) {
  const heroSectionPattern = /      \{\/\* Hero Section \*\/\}[\s\S]*?(?=      \{\/\* Trust Bar \*\/\})/;
  const heroSection = readFileSync('scripts/hero/homepage-hero.tsx.txt', 'utf8');

  if (heroSectionPattern.test(source)) {
    source = source.replace(heroSectionPattern, heroSection);
    changed = true;
    console.log('Applied split homepage hero.');
  } else {
    console.warn('Skipped split homepage hero: expected section was not found.');
  }
}

const replaceOnce = (search, replacement, label) => {
  if (source.includes(replacement)) return;
  if (!source.includes(search)) {
    console.warn(`Skipped ${label}: expected source was not found.`);
    return;
  }
  source = source.replace(search, replacement);
  changed = true;
  console.log(`Applied ${label}.`);
};

if (!source.includes('/service-collage/perimeter-treatment.webp')) {
  const singlePhoto = `              <div className="relative">
                <img
                  src={techWalking}
                  alt="Selke Pest Control technician performing professional pest control service in Lake Norman area"
                  className="rounded-2xl shadow-2xl"
                  width="900"
                  height="675"
                  loading="lazy"
                />
              </div>`;

  const collage = `              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-2xl" aria-hidden="true" />
                <div className="relative grid h-[34rem] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-3xl border-4 border-white/15 bg-cyan-900 p-2 shadow-2xl sm:gap-3 sm:p-3">
                  {[
                    ['/service-collage/perimeter-treatment.webp', 'Selke Pest Control technician treating a home perimeter', 'object-center'],
                    ['/service-collage/entry-treatment.webp', 'Selke Pest Control technician applying a targeted entry treatment', 'object-center'],
                    ['/service-collage/pool-area-treatment.webp', 'Selke Pest Control technician treating an outdoor pool area', 'object-center'],
                    ['/service-collage/community-family.webp', 'Selke Pest Control family participating in a Lake Norman community event', 'object-top'],
                  ].map(([src, alt, position]) => (
                    <div key={src} className="overflow-hidden rounded-2xl bg-cyan-950">
                      <img src={src} alt={alt} className={\`h-full w-full object-cover transition-transform duration-500 hover:scale-105 \${position}\`} width="900" height="1200" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-bold text-cyan-800 shadow-xl">
                  Local service. Real Lake Norman homes.
                </div>
              </div>`;

  if (source.includes(singlePhoto)) {
    source = source.replace(singlePhoto, collage);
    changed = true;
    console.log('Applied homepage service collage.');
  } else {
    console.warn('Skipped homepage service collage: expected photo block was not found.');
  }
}

replaceOnce(
  'Family-Owned &amp; Locally Operated',
  'Local Family-Owned &amp; Operated',
  'local family-owned hero label',
);
replaceOnce(
  'Family-Owned & Locally Operated',
  'Local Family-Owned & Operated',
  'local family-owned hero label',
);

const heroHeadingPattern = /(<section[^>]*aria-label="Hero[^>]*>[\s\S]*?<h1[^>]*>)[\s\S]*?(<\/h1>)/;
if (!source.includes('Charlotte&apos;s Top Choice for Pest Control')) {
  if (heroHeadingPattern.test(source)) {
    source = source.replace(
      heroHeadingPattern,
      `$1\n              <span className="block">Charlotte&apos;s Top Choice for Pest Control</span>\n            $2`,
    );
    changed = true;
    console.log('Applied homepage hero headline.');
  } else {
    console.warn('Skipped homepage hero headline: hero heading was not found.');
  }
}

[
  [
    'Comprehensive pest protection for Lake Norman homes &amp; families',
    'Comprehensive pest protection for Charlotte Metro homes &amp; families',
    'Charlotte Metro services description',
  ],
  [
    'Every service you schedule is one more step toward our mission to give back to the Lake Norman community.',
    'Every service you schedule is one more step toward our mission to give back to our local community.',
    'local community mission copy',
  ],
  [
    'Why Lake Norman Chooses Selke',
    'Why Customers Continue to Choose Selke',
    'customer-focused Why Choose Selke heading',
  ],
  [
    'Why Choose Selke',
    'Why Customers Continue to Choose Selke',
    'expanded Why Choose Selke heading',
  ],
  [
    `<h2 className="text-3xl md:text-4xl mb-4">Serving the Lake Norman Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pest control for Mooresville, NC and the Charlotte Metro communities we call home</p>`,
    '<h2 className="text-3xl md:text-4xl">Areas We Service</h2>',
    'service areas heading and subtitle',
  ],
  [
    'Expert articles to help you understand and prevent pest problems in the Lake Norman area',
    'Expert articles to help you understand and prevent pest problems across the Charlotte, Concord, and Lake Norman regions',
    'Charlotte, Concord, and Lake Norman blog description',
  ],
  [
    "Lake Norman's hometown pest control — backed by a 100% guarantee and a mission to give back.",
    'Charlotte&apos;s hometown pest control — backed by a 100% guarantee and a mission to give back.',
    'Charlotte hometown CTA copy',
  ],
  [
    'Family-owned pest control for the Lake Norman area. Every customer helps us reach our 250,000-meal community giving goal.',
    'Family-owned pest control for Charlotte and the surrounding area. Every customer helps us reach our 250,000-meal community giving goal.',
    'Charlotte footer description',
  ],
].forEach(([search, replacement, label]) => replaceOnce(search, replacement, label));

const heroTaglinePattern = /(<section[^>]*aria-label="Hero[^>]*>[\s\S]*?<\/h1>\s*)<p[^>]*>[\s\S]*?<\/p>/;
if (!source.includes('Same-day service available &bull; 100% Satisfaction Guarantee')) {
  if (heroTaglinePattern.test(source)) {
    source = source.replace(
      heroTaglinePattern,
      `$1<p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
              Same-day service available &bull; 100% Satisfaction Guarantee
            </p>`,
    );
    changed = true;
    console.log('Applied homepage service and guarantee tagline.');
  } else {
    console.warn('Skipped homepage tagline: hero copy was not found.');
  }
}

if (!source.includes('See our rodent control service →')) {
  const headerMarker = '      {/* Header */}';
  const rodentBanner = `      {/* Seasonal Urgency Banner */}
      <div className="bg-slate-900 text-white py-2.5 px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-sm font-medium">
          <span className="font-bold text-cyan-300">Hearing scratching at night?</span> Mice can enter through a dime-sized gap.{' '}
          <a href="/rodent-control-charlotte-nc" className="underline font-bold hover:no-underline">See our rodent control service →</a>
        </div>
      </div>

`;
  if (source.includes(headerMarker)) {
    source = source.replace(headerMarker, `${rodentBanner}${headerMarker}`);
    changed = true;
    console.log('Applied linked rodent-control banner.');
  } else {
    console.warn('Skipped rodent-control banner: header marker was not found.');
  }
}

replaceOnce(
  '<a href="#tips" className="text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>',
  '<a href="/blog" className="text-gray-700 hover:text-cyan-500 transition-colors">Blog</a>',
  'desktop Blog navigation tab',
);
replaceOnce(
  "['Pest Tips', '#tips']",
  "['Blog', '/blog']",
  'mobile Blog navigation item',
);

if (!source.includes('const featuredBlogPosts = blogData.slice(-3).reverse();')) {
  const blogArrayEnd = /(^\s*const blogData = \[[\s\S]*?^\s*\];)/m;
  if (blogArrayEnd.test(source)) {
    source = source.replace(blogArrayEnd, `$1\n  const featuredBlogPosts = blogData.slice(-3).reverse();`);
    changed = true;
    console.log('Created three-post homepage blog selection.');
  }
}

if (source.includes('{blogData.map((blog) => (')) {
  source = source.replace('{blogData.map((blog) => (', '{featuredBlogPosts.map((blog) => (');
  changed = true;
  console.log('Limited homepage tips section to three posts.');
}

if (changed) {
  writeFileSync(path, source);
  console.log('Homepage release updates applied.');
} else {
  console.log('Homepage release updates already present.');
}

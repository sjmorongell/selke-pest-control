import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/app/App.tsx';
let source = readFileSync(path, 'utf8');
let changed = false;

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
if (!source.includes('Charlotte Metro&apos;s Premier Pest Control')) {
  if (heroHeadingPattern.test(source)) {
    source = source.replace(
      heroHeadingPattern,
      `$1\n              <span className="block">Charlotte Metro&apos;s Premier Pest Control</span>\n            $2`,
    );
    changed = true;
    console.log('Applied homepage hero headline.');
  } else {
    console.warn('Skipped homepage hero headline: hero heading was not found.');
  }
}

const heroTaglinePattern = /(<section[^>]*aria-label="Hero[^>]*>[\s\S]*?<\/h1>\s*)<p[^>]*>[\s\S]*?<\/p>/;
if (!source.includes('Same-day service available &bull; 100% Satisfaction Guarantee')) {
  if (heroTaglinePattern.test(source)) {
    source = source.replace(
      heroTaglinePattern,
      `$1<p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">\n              Same-day service available &bull; 100% Satisfaction Guarantee\n            </p>`,
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

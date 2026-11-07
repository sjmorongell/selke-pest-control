import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/app/App.tsx';
const source = readFileSync(path, 'utf8');

if (source.includes('/service-collage/perimeter-treatment.webp')) {
  console.log('Homepage service collage already present.');
  process.exit(0);
}

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

if (!source.includes(singlePhoto)) {
  throw new Error('Expected homepage bundle photo block was not found.');
}

writeFileSync(path, source.replace(singlePhoto, collage));
console.log('Homepage service collage applied.');

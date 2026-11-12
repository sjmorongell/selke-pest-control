import { citiesInCounty, serviceCities, serviceCounties } from '../data/serviceAreas';

// Equirectangular projection over the Selke service region.
const BOUNDS = { west: -81.12, east: -80.42, north: 35.86, south: 34.86 };
const WIDTH = 420;
const HEIGHT = 560;
const PAD = 28;

const project = (lat: number, lng: number) => ({
  x: PAD + ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * (WIDTH - PAD * 2),
  y: PAD + ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * (HEIGHT - PAD * 2),
});

// Simplified Lake Norman outline (lat, lng) for orientation only.
const LAKE_NORMAN: [number, number][] = [
  [35.43, -80.95], [35.47, -80.9], [35.52, -80.885], [35.57, -80.885], [35.62, -80.915],
  [35.67, -80.93], [35.71, -80.955], [35.69, -80.99], [35.63, -80.975], [35.58, -80.965],
  [35.53, -80.975], [35.48, -80.985], [35.44, -80.975],
];
const lakePath = LAKE_NORMAN.map(([lat, lng], index) => {
  const { x, y } = project(lat, lng);
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(' ') + ' Z';

// Labels that would collide get nudged to the left of their dot.
const LEFT_LABELS = new Set(['pest-control-davidson-nc', 'pest-control-sherrills-ford-nc', 'pest-control-denver-nc', 'pest-control-weddington-nc', 'pest-control-troutman-nc', 'pest-control-statesville-nc']);
const LABEL_DY: Record<string, number> = { 'pest-control-cornelius-nc': 12, 'pest-control-davidson-nc': -6, 'pest-control-huntersville-nc': 10 };

export function ServiceAreaMap({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const dark = tone === 'dark';
  const hq = serviceCities.find(city => city.hq) ?? serviceCities[0];
  const hqPoint = project(hq.lat, hq.lng);

  return (
    <section
      aria-labelledby="service-area-map-heading"
      className={`rounded-3xl border p-5 sm:p-8 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'}`}
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content="Residential pest control" />
      <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness" className="hidden">
        <meta itemProp="name" content="Selke Pest Control" />
        <meta itemProp="telephone" content="+1-704-728-0204" />
        <meta itemProp="url" content="https://www.selkepestcontrol.com/" />
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-12">
        <figure className="mx-auto w-full max-w-[420px]">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="h-auto w-full"
            role="img"
            aria-labelledby="service-area-map-title service-area-map-desc"
          >
            <title id="service-area-map-title">Selke Pest Control service area map</title>
            <desc id="service-area-map-desc">
              {`Map of ${serviceCities.length} North Carolina cities served by Selke Pest Control across ${serviceCounties.map(county => county.name).join(', ')}, centered on Mooresville and Lake Norman.`}
            </desc>
            <defs>
              <pattern id="selke-map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke={dark ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.06)'} strokeWidth="1" />
              </pattern>
              <radialGradient id="selke-map-glow">
                <stop offset="0" stopColor="#06b6d4" stopOpacity="0.28" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width={WIDTH} height={HEIGHT} rx="22" fill={dark ? '#0f172a' : '#f8fafc'} />
            <rect width={WIDTH} height={HEIGHT} rx="22" fill="url(#selke-map-grid)" />
            <circle cx={hqPoint.x} cy={hqPoint.y + 90} r="250" fill="url(#selke-map-glow)" />
            {[90, 170, 250].map(radius => (
              <circle key={radius} cx={hqPoint.x} cy={hqPoint.y} r={radius} fill="none" stroke={dark ? 'rgba(103,232,249,0.14)' : 'rgba(8,145,178,0.16)'} strokeDasharray="3 6" />
            ))}
            <path d={lakePath} fill={dark ? 'rgba(34,211,238,0.22)' : 'rgba(8,145,178,0.18)'} stroke={dark ? 'rgba(103,232,249,0.5)' : 'rgba(8,145,178,0.45)'} strokeWidth="1.2" />
            <text x={project(35.6, -81.0).x - 6} y={project(35.6, -81.0).y} textAnchor="end" fontSize="9" letterSpacing="1.5" fill={dark ? 'rgba(165,243,252,0.6)' : 'rgba(14,116,144,0.7)'}>LAKE NORMAN</text>

            {serviceCities.map(city => {
              const { x, y } = project(city.lat, city.lng);
              const left = LEFT_LABELS.has(city.slug);
              const dy = LABEL_DY[city.slug] ?? 4;
              return (
                <a key={city.slug} href={`/${city.slug}`} aria-label={`Pest control in ${city.name}, NC`}>
                  <title>{`${city.name}, NC (${city.lat.toFixed(4)}, ${city.lng.toFixed(4)})`}</title>
                  {city.hq && <circle cx={x} cy={y} r="13" fill="rgba(34,211,238,0.18)" />}
                  <circle cx={x} cy={y} r={city.hq ? 7 : 5} fill={city.hq ? '#22d3ee' : '#06b6d4'} stroke={dark ? '#0f172a' : '#ffffff'} strokeWidth="2" />
                  <text
                    x={left ? x - 10 : x + 10}
                    y={y + dy}
                    textAnchor={left ? 'end' : 'start'}
                    fontSize={city.hq ? 13 : 11.5}
                    fontWeight={city.hq ? 700 : 500}
                    fill={dark ? (city.hq ? '#ecfeff' : '#cbd5e1') : (city.hq ? '#0e7490' : '#334155')}
                  >
                    {city.name}{city.hq ? ' (HQ)' : ''}
                  </text>
                </a>
              );
            })}
            <text x={PAD} y={HEIGHT - 14} fontSize="9" fill={dark ? 'rgba(148,163,184,0.7)' : 'rgba(71,85,105,0.7)'}>N ↑  ·  Plotted by GPS coordinates</text>
          </svg>
          <figcaption className={`mt-3 text-center text-xs ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
            Based in Mooresville, NC (35.5849, -80.8101) serving Lake Norman and the Charlotte Metro.
          </figcaption>
        </figure>

        <div>
          <h2 id="service-area-map-heading" className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Pest Control Service Area
          </h2>
          <p className={`mt-2 max-w-xl text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Selke Pest Control serves {serviceCities.length} cities across {serviceCounties.length} North Carolina counties from our home base in Mooresville. Select a city for local pest information.
          </p>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
            {serviceCounties.map(county => (
              <div key={county.id} itemProp="areaServed" itemScope itemType="https://schema.org/AdministrativeArea">
                <h3 className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? 'text-cyan-300' : 'text-cyan-700'}`}>
                  <span itemProp="name">{county.name}</span>, NC
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {citiesInCounty(county.id).map(city => (
                    <li key={city.slug} itemProp="containsPlace" itemScope itemType="https://schema.org/City">
                      <a itemProp="url" href={`/${city.slug}`} className={`text-sm transition-colors ${dark ? 'text-gray-300 hover:text-cyan-300' : 'text-gray-700 hover:text-cyan-700'}`}>
                        <span itemProp="name">{city.name}</span>
                      </a>
                      <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                        <meta itemProp="latitude" content={String(city.lat)} />
                        <meta itemProp="longitude" content={String(city.lng)} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { serviceCities, serviceCounties } from '../data/serviceAreas';

// Small equirectangular map of the Selke service region. Each red dot is a real
// service city plotted from GPS coordinates and links to that city's page.
const BOUNDS = { west: -81.1, east: -80.5, north: 35.84, south: 34.87 };
const WIDTH = 180;
const HEIGHT = 300;
const PAD = 16;

const project = (lat: number, lng: number) => ({
  x: PAD + ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * (WIDTH - PAD * 2),
  y: PAD + ((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * (HEIGHT - PAD * 2),
});
const toPath = (points: [number, number][], close = false) =>
  points.map(([lat, lng], index) => {
    const { x, y } = project(lat, lng);
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ') + (close ? ' Z' : '');

// Orientation landmarks (approximate): Lake Norman, I-77, I-85, and the I-485 loop.
const LAKE_NORMAN = toPath([
  [35.43, -80.95], [35.47, -80.9], [35.52, -80.885], [35.57, -80.885], [35.62, -80.915],
  [35.67, -80.93], [35.71, -80.955], [35.69, -80.99], [35.63, -80.975], [35.58, -80.965],
  [35.53, -80.975], [35.48, -80.985], [35.44, -80.975],
], true);
const I77 = toPath([[35.86, -80.88], [35.7, -80.87], [35.58, -80.855], [35.45, -80.865], [35.32, -80.855], [35.23, -80.85], [35.1, -80.89], [34.86, -80.94]]);
const I85 = toPath([[35.7, -80.48], [35.52, -80.55], [35.41, -80.62], [35.3, -80.74], [35.25, -80.82], [35.26, -80.95], [35.27, -81.12]]);
const ring = project(35.22, -80.84);
const ringRx = project(35.22, -80.84 + 0.19).x - ring.x;
const ringRy = project(35.22 - 0.155, -80.84).y - ring.y;

// Soft service-region outline: convex hull of the cities, pushed outward.
const regionPath = (() => {
  const pts = serviceCities.map(city => project(city.lat, city.lng));
  const sorted = [...pts].sort((a, b) => a.x - b.x || a.y - b.y);
  const cross = (o: typeof pts[0], a: typeof pts[0], b: typeof pts[0]) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const half = (list: typeof pts) => list.reduce<typeof pts>((hull, p) => {
    while (hull.length >= 2 && cross(hull[hull.length - 2], hull[hull.length - 1], p) <= 0) hull.pop();
    hull.push(p);
    return hull;
  }, []);
  const lower = half(sorted);
  const upper = half([...sorted].reverse());
  const hull = [...lower.slice(0, -1), ...upper.slice(0, -1)];
  const cx = hull.reduce((sum, p) => sum + p.x, 0) / hull.length;
  const cy = hull.reduce((sum, p) => sum + p.y, 0) / hull.length;
  return hull.map((p, i) => {
    const dx = p.x - cx, dy = p.y - cy, len = Math.hypot(dx, dy) || 1;
    return `${i === 0 ? 'M' : 'L'}${(p.x + (dx / len) * 13).toFixed(1)} ${(p.y + (dy / len) * 13).toFixed(1)}`;
  }).join(' ') + ' Z';
})();

const LABELS: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' }> = {
  'pest-control-mooresville-nc': { dx: 9, dy: 3, anchor: 'start' },
  'pest-control-charlotte-nc': { dx: -8, dy: 3, anchor: 'end' },
  'pest-control-statesville-nc': { dx: 7, dy: 3, anchor: 'start' },
  'pest-control-concord-nc': { dx: -7, dy: -6, anchor: 'end' },
  'pest-control-waxhaw-nc': { dx: 7, dy: 3, anchor: 'start' },
};

export function ServiceAreaMap() {
  const lake = project(35.405, -80.955);

  return (
    <section
      aria-labelledby="service-area-map-heading"
      className="w-full max-w-[230px]"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content="Residential pest control" />
      <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness" hidden>
        <meta itemProp="name" content="Selke Pest Control" />
        <meta itemProp="telephone" content="+1-704-728-0204" />
        <meta itemProp="url" content="https://www.selkepestcontrol.com/" />
      </div>
      {serviceCities.map(city => (
        <div key={city.slug} itemProp="areaServed" itemScope itemType="https://schema.org/City" hidden>
          <meta itemProp="name" content={`${city.name}, NC`} />
          <link itemProp="url" href={`https://www.selkepestcontrol.com/${city.slug}`} />
          <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content={String(city.lat)} />
            <meta itemProp="longitude" content={String(city.lng)} />
          </div>
        </div>
      ))}

      <h3 id="service-area-map-heading" className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gray-300">
        Service Area
      </h3>
      <figure className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-auto w-full" role="img" aria-labelledby="service-area-map-title service-area-map-desc">
          <title id="service-area-map-title">Selke Pest Control service area map</title>
          <desc id="service-area-map-desc">
            {`Map of the ${serviceCities.length} North Carolina cities served by Selke Pest Control across ${serviceCounties.map(county => county.name).join(', ')}, based in Mooresville on Lake Norman.`}
          </desc>
          <path d={regionPath} fill="rgba(239,68,68,0.07)" stroke="rgba(248,113,113,0.28)" strokeWidth="1" strokeDasharray="3 3" strokeLinejoin="round" />
          <ellipse cx={ring.x} cy={ring.y} rx={ringRx} ry={ringRy} fill="none" stroke="rgba(148,163,184,0.28)" strokeWidth="1.2" />
          <path d={I77} fill="none" stroke="rgba(148,163,184,0.32)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={I85} fill="none" stroke="rgba(148,163,184,0.32)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={LAKE_NORMAN} fill="rgba(56,189,248,0.35)" stroke="rgba(125,211,252,0.55)" strokeWidth="0.8" />
          <text x={lake.x} y={lake.y} textAnchor="middle" fontSize="7" fontStyle="italic" fill="rgba(125,211,252,0.75)">Lake Norman</text>

          {serviceCities.map(city => {
            const { x, y } = project(city.lat, city.lng);
            const label = LABELS[city.slug];
            return (
              <a key={city.slug} href={`/${city.slug}`} aria-label={`Pest control in ${city.name}, NC`} className="group">
                <title>{`${city.name}, NC`}</title>
                {city.hq && (
                  <circle cx={x} cy={y} r="5" fill="#ef4444" opacity="0.35">
                    <animate attributeName="r" values="5;11;5" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={x} cy={y} r="9" fill="transparent" />
                <circle cx={x} cy={y} r={city.hq ? 4.6 : 3.4} fill="#ef4444" stroke="#111827" strokeWidth="1.4" className="group-hover:fill-red-300" />
                {label && (
                  <text x={x + label.dx} y={y + label.dy} textAnchor={label.anchor} fontSize={city.hq ? 9 : 8} fontWeight={city.hq ? 700 : 500} fill={city.hq ? '#f9fafb' : '#9ca3af'}>
                    {city.name}
                  </text>
                )}
              </a>
            );
          })}
        </svg>
      </figure>
      <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
        <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
        {serviceCities.length} cities across {serviceCounties.length} counties
      </p>
    </section>
  );
}

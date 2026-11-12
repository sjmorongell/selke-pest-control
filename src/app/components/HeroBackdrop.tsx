// Homepage hero background: drifting aurora glows over topographic contour
// lines (a nod to Lake Norman's terrain), with a fine dot grid and film grain.
// Pure SVG/CSS, so it costs no image download.

const ring = (cx: number, cy: number, r: number, seed: number) => {
  const points = 72;
  let d = '';
  for (let i = 0; i <= points; i++) {
    const t = (i / points) * Math.PI * 2;
    const wobble = 1 + 0.09 * Math.sin(3 * t + seed * 0.45) + 0.05 * Math.sin(5 * t - seed * 0.3) + 0.03 * Math.cos(7 * t + seed);
    const x = cx + Math.cos(t) * r * wobble * 1.25;
    const y = cy + Math.sin(t) * r * wobble;
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d + 'Z';
};

const CONTOURS = [
  ...Array.from({ length: 16 }, (_, k) => ({ d: ring(1180, 260, 40 + k * 34, k), strong: k % 4 === 0 })),
  ...Array.from({ length: 9 }, (_, k) => ({ d: ring(160, 820, 30 + k * 30, k + 20), strong: k % 4 === 0 })),
];

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#041014_0%,#062028_45%,#0a2f38_100%)]" />

      <div className="selke-aurora absolute -right-[10%] -top-[30%] h-[85%] w-[70%] rounded-full bg-cyan-400/30 blur-[120px]" />
      <div className="selke-aurora-slow absolute -right-[5%] bottom-[-35%] h-[75%] w-[55%] rounded-full bg-teal-400/25 blur-[130px]" />
      <div className="selke-aurora absolute left-[30%] top-[10%] h-[45%] w-[35%] rounded-full bg-sky-500/15 blur-[110px] [animation-delay:-9s]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="hero-contour-fade" cx="78%" cy="30%" r="75%">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.15" />
          </radialGradient>
          <mask id="hero-contour-mask">
            <rect width="1440" height="900" fill="url(#hero-contour-fade)" />
          </mask>
          <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="#a5f3fc" fillOpacity="0.16" />
          </pattern>
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
          </filter>
          <linearGradient id="hero-horizon" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="0.6" stopColor="#67e8f9" stopOpacity="0.8" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#hero-dots)" opacity="0.6" />
        <g mask="url(#hero-contour-mask)" fill="none">
          {CONTOURS.map((c, i) => (
            <path key={i} d={c.d} stroke={c.strong ? 'rgba(103,232,249,0.32)' : 'rgba(103,232,249,0.13)'} strokeWidth={c.strong ? 1.4 : 1} />
          ))}
        </g>
        <rect width="1440" height="900" filter="url(#hero-grain)" />
        <rect x="0" y="898" width="1440" height="2" fill="url(#hero-horizon)" />
      </svg>

      {/* Keep the copy side readable. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,16,0.85)_0%,rgba(3,12,16,0.55)_40%,rgba(3,12,16,0)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#041014]/70 to-transparent" />
    </div>
  );
}

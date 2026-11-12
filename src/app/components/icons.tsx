import type { SVGProps } from 'react';

// Custom icons drawn in the same 24px, 2px-stroke style as lucide-react.
type IconProps = SVGProps<SVGSVGElement>;
const base = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export function BeeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="14.5" rx="4.5" ry="6" />
      <path d="M7.6 12.5h8.8M7.8 16.5h8.4" />
      <path d="M10 8.9C8.5 5.7 5.6 4.4 3.8 5.6c-1.6 1.1-.8 4 2.6 5.2" />
      <path d="M14 8.9c1.5-3.2 4.4-4.5 6.2-3.3 1.6 1.1.8 4-2.6 5.2" />
      <path d="M10.5 8.8 9.5 6M13.5 8.8l1-2.8" />
    </svg>
  );
}

export function SpiderWebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />
      <path d="M12 8.2 14.7 9.3 15.8 12 14.7 14.7 12 15.8 9.3 14.7 8.2 12 9.3 9.3Z" />
      <path d="M12 4.6 17.2 6.8 19.4 12 17.2 17.2 12 19.4 6.8 17.2 4.6 12 6.8 6.8Z" />
    </svg>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { citiesInCounty, serviceCounties } from '../data/serviceAreas';

/**
 * Desktop "Service Areas" menu: counties first, with a flyout of the cities in
 * the active county. Every link stays in the DOM so crawlers can follow them.
 */
export function ServiceAreasMenu({ className = '', labelClassName = 'text-gray-700' }: { className?: string; labelClassName?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCounty, setActiveCounty] = useState(serviceCounties[0].id);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        className={`flex items-center gap-1 transition-colors hover:text-cyan-500 ${labelClassName}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(open => !open)}
      >
        Service Areas
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        className={`absolute right-0 top-full z-50 pt-2 transition duration-150 xl:left-1/2 xl:right-auto xl:-translate-x-1/2 ${isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
      >
        <div className="flex overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-2xl shadow-slate-900/10">
          <ul className="w-56 border-r border-gray-100 bg-slate-50/80 py-2" aria-label="Counties we serve">
            {serviceCounties.map(county => {
              const isActive = county.id === activeCounty;
              return (
                <li key={county.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveCounty(county.id)}
                    onFocus={() => setActiveCounty(county.id)}
                    onClick={() => setActiveCounty(county.id)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-white text-cyan-700' : 'text-gray-700 hover:bg-white hover:text-cyan-700'}`}
                  >
                    {county.name}
                    <ChevronRight className={`h-4 w-4 ${isActive ? 'text-cyan-500' : 'text-gray-300'}`} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="w-60 p-2">
            {serviceCounties.map(county => (
              <ul key={county.id} className={county.id === activeCounty ? 'block' : 'hidden'} aria-label={`Cities in ${county.name}`}>
                <li className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">{county.name}</li>
                {citiesInCounty(county.id).map(city => (
                  <li key={city.slug}>
                    <a href={`/${city.slug}`} className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-cyan-50 hover:text-cyan-700">
                      <MapPin className="h-3.5 w-3.5 text-cyan-500" aria-hidden="true" />
                      {city.name}, NC
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile accordion: Service Areas > County > Cities. */
export function MobileServiceAreas({ onNavigate }: { onNavigate?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCounty, setOpenCounty] = useState<string | null>(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
      >
        Service Areas
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div className={isOpen ? 'space-y-1 pb-2 pl-3' : 'hidden'}>
        {serviceCounties.map(county => {
          const expanded = openCounty === county.id;
          return (
            <div key={county.id}>
              <button
                type="button"
                onClick={() => setOpenCounty(expanded ? null : county.id)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-cyan-50"
              >
                {county.name}
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div className={expanded ? 'grid grid-cols-2 gap-1 pb-2 pl-3' : 'hidden'}>
                {citiesInCounty(county.id).map(city => (
                  <a key={city.slug} href={`/${city.slug}`} onClick={onNavigate} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-700">
                    {city.name}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

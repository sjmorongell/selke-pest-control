import { lazy, Suspense, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';
import { MobileServiceAreas, ServiceAreasMenu } from './ServiceAreasMenu';
import { SERVICE_ICONS, serviceHref, services } from '../data/services';

const PestLibraryModal = lazy(() =>
  import('./PestLibraryModal').then(module => ({ default: module.PestLibraryModal }))
);

export type NavKey = 'services' | 'why-us' | 'blog' | 'faq' | 'areas';

// One text style for every top-level item so the bar reads as a single, even row.
const NAV_ITEM = 'inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium leading-none transition-colors hover:text-cyan-600';
const navColor = (active: boolean) => (active ? 'text-cyan-700' : 'text-gray-700');

function ServicesMenu({ active }: { active: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        className={`${NAV_ITEM} ${navColor(active)}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(open => !open)}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        className={`absolute left-0 top-full z-50 pt-3 transition duration-150 ${isOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-1 opacity-0'}`}
      >
        <div className="w-[560px] overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-2xl shadow-slate-900/10">
          <ul className="grid grid-cols-2 gap-1 p-3" aria-label="Pest control services">
            {services.map(service => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <li key={service.slug}>
                  <a href={serviceHref(service)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cyan-50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold leading-snug text-gray-900">{service.shortName ?? service.name}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-gray-500">{service.features[0]}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-between border-t border-gray-100 bg-slate-50 px-6 py-3 text-sm">
            <a href="/services" className="inline-flex items-center gap-1.5 font-semibold text-cyan-700 hover:text-cyan-800">
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="tel:704-728-0204" className="text-gray-500 hover:text-cyan-700">Questions? 704-728-0204</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileServices({ onNavigate }: { onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div className={isOpen ? 'space-y-1 pb-2 pl-3' : 'hidden'}>
        {services.map(service => {
          const Icon = SERVICE_ICONS[service.icon];
          return (
            <a key={service.slug} href={serviceHref(service)} onClick={onNavigate} className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">
              <Icon className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              {service.shortName ?? service.name}
            </a>
          );
        })}
        <a href="/services" onClick={onNavigate} className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-50">View all services</a>
      </div>
    </div>
  );
}

/** Sitewide header. Every page uses this so the navigation only lives in one place. */
export function SiteHeader({ active }: { active?: NavKey }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPestLibraryOpen, setIsPestLibraryOpen] = useState(false);
  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      {isPestLibraryOpen && (
        <Suspense fallback={null}>
          <PestLibraryModal isOpen={isPestLibraryOpen} onClose={() => setIsPestLibraryOpen(false)} />
        </Suspense>
      )}
      <header className="sticky top-0 z-40 bg-white shadow-md" role="banner">
        <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-3">
          <a href="/" aria-label="Selke Pest Control - Home" className="shrink-0">
            <img src={newLogo} alt="Selke Pest Control logo" className="h-12 w-auto lg:h-11 xl:h-14" width="1656" height="382" />
          </a>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main navigation">
            <ServicesMenu active={active === 'services'} />
            <a href="/#why-us" className={`${NAV_ITEM} ${navColor(active === 'why-us')}`}>Why Us</a>
            <button type="button" onClick={() => setIsPestLibraryOpen(true)} className={`${NAV_ITEM} ${navColor(false)}`}>Pest Library</button>
            <a href="/blog" className={`${NAV_ITEM} ${navColor(active === 'blog')}`} aria-current={active === 'blog' ? 'page' : undefined}>Blog</a>
            <a href="/faq" className={`${NAV_ITEM} ${navColor(active === 'faq')}`} aria-current={active === 'faq' ? 'page' : undefined}>FAQ</a>
            <ServiceAreasMenu labelClassName={`${NAV_ITEM} ${navColor(active === 'areas')}`} />
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href="tel:704-728-0204" className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600 xl:px-5 xl:text-base" aria-label="Call Selke Pest Control at 704-728-0204">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">704-728-0204</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(open => !open)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav id="mobile-navigation" className="max-h-[75vh] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
            <div className="grid gap-1">
              <MobileServices onNavigate={close} />
              <a href="/#why-us" onClick={close} className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Why Us</a>
              <button type="button" onClick={() => { setIsPestLibraryOpen(true); close(); }} className="rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Pest Library</button>
              <a href="/blog" onClick={close} className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Blog</a>
              <a href="/faq" onClick={close} className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">FAQ</a>
              <MobileServiceAreas onNavigate={close} />
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

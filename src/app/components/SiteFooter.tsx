import { lazy, Suspense, useState } from 'react';
import { Award, Mail, MapPin, Phone } from 'lucide-react';
import FooterLogo from './FooterLogo';
import { ServiceAreaMap } from './ServiceAreaMap';
import { serviceHref, services } from '../data/services';

const PestLibraryModal = lazy(() =>
  import('./PestLibraryModal').then(module => ({ default: module.PestLibraryModal }))
);
const LegalModal = lazy(() =>
  import('./LegalModal').then(module => ({ default: module.LegalModal }))
);

const LINK = 'transition-colors hover:text-cyan-400';

/** Sitewide footer. Every page uses this so links and contact details live in one place. */
export function SiteFooter() {
  const [isPestLibraryOpen, setIsPestLibraryOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 pb-24 pt-14 text-white md:pb-10" role="contentinfo" aria-label="Site footer">
      {isPestLibraryOpen && (
        <Suspense fallback={null}>
          <PestLibraryModal isOpen={isPestLibraryOpen} onClose={() => setIsPestLibraryOpen(false)} />
        </Suspense>
      )}
      {isLegalOpen && (
        <Suspense fallback={null}>
          <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
        </Suspense>
      )}
      <div className="container mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_auto] lg:gap-12">
          <div>
            <FooterLogo className="mb-4 h-16" />
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Family-owned pest control for Lake Norman and the Charlotte Metro. Every customer helps us reach our 250,000-meal community giving goal.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
                  Based in <span itemProp="addressLocality">Mooresville</span>, <span itemProp="addressRegion">NC</span>
                </address>
              </li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden="true" /><a href="tel:704-728-0204" className={LINK}>704-728-0204</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" /><a href="mailto:sales@selkepestcontrol.com" className={LINK}>sales@selkepestcontrol.com</a></li>
              <li className="flex items-center gap-2"><Award className="h-4 w-4 shrink-0" aria-hidden="true" /><span>License# 2215P</span></li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/selkepestcontrol" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Facebook" className="transition-opacity hover:opacity-75">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect width="24" height="24" rx="5" fill="#1877F2" />
                  <path d="M15 4h-1.5C11.6 4 10 5.6 10 7.5V9H8v3h2v8h3v-8h2.5L16 9h-3V7.5c0-.3.2-.5.5-.5H16V4h-1z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/selkepestcontrol" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Instagram" className="transition-opacity hover:opacity-75">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="igFooterGradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F58529" />
                      <stop offset="0.5" stopColor="#DD2A7B" />
                      <stop offset="1" stopColor="#8134AF" />
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="5" fill="url(#igFooterGradient)" />
                  <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="17" cy="7" r="1" fill="white" />
                </svg>
              </a>
              <a href="https://share.google/cT2MLnW3U4Dw1kosn" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Google" className="transition-opacity hover:opacity-75">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect width="24" height="24" rx="5" fill="white" />
                  <path fill="#4285F4" d="M17.8 12.2c0-.4 0-.9-.1-1.2H12v2.4h3.3c-.2.7-.6 1.3-1.2 1.7v1.4h1.9c1.1-.9 1.8-2.3 1.8-4.3z" />
                  <path fill="#34A853" d="M12 18c1.7 0 3.1-.5 4.1-1.5l-1.9-1.4c-.6.4-1.3.6-2.2.6-1.7 0-3.1-1.1-3.6-2.7H6.4v1.5C7.4 16.8 9.5 18 12 18z" />
                  <path fill="#FBBC04" d="M8.4 13c-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5V8.5H6.4C5.9 9.5 5.6 10.7 5.6 12s.3 2.5.8 3.5l2-1.5z" />
                  <path fill="#EA4335" d="M12 8.3c1 0 1.9.3 2.6.9l1.9-1.9C15.3 6.3 13.8 6 12 6 9.5 6 7.4 7.2 6.4 9l2 1.5C8.9 9.2 10.3 8.3 12 8.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gray-300">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {services.map(service => (
                <li key={service.slug}><a href={serviceHref(service)} className={LINK}>{service.shortName ?? service.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gray-300">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="/#why-us" className={LINK}>Why Choose Us</a></li>
              <li><button type="button" onClick={() => setIsPestLibraryOpen(true)} className={`${LINK} text-left text-sm`}>Pest Library</button></li>
              <li><a href="/blog" className={LINK}>Pest Control Blog</a></li>
              <li><a href="/faq" className={LINK}>FAQ</a></li>
              <li><button type="button" onClick={() => setIsLegalOpen(true)} className={`${LINK} text-left text-sm`}>Privacy Policy &amp; Terms</button></li>
            </ul>
          </div>

          <ServiceAreaMap />
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Selke Pest Control. All rights reserved. Licensed &amp; Insured. License# 2215P.</p>
        </div>
      </div>
    </footer>
  );
}

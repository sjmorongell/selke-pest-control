import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { Phone } from 'lucide-react';
import { SiteHeader, type NavKey } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

const QuoteFormModal = lazy(() =>
  import('./QuoteFormModal').then(module => ({ default: module.QuoteFormModal }))
);

/**
 * Shared page frame: header, footer, quote modal, mobile call bar, and the page
 * title/description. New pages only need to supply their main content.
 */
export function PageShell({
  title,
  description,
  active,
  children,
}: {
  title: string;
  description: string;
  active?: NavKey;
  children: (openQuote: () => void) => ReactNode;
}) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-white">Skip to main content</a>
      {isQuoteOpen && (
        <Suspense fallback={null}>
          <QuoteFormModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </Suspense>
      )}
      <SiteHeader active={active} />
      <main id="main-content">{children(() => setIsQuoteOpen(true))}</main>
      <SiteFooter />
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-cyan-600 shadow-[0_-2px_12px_rgba(0,0,0,0.2)] md:hidden">
        <a href="tel:7047280204" className="flex items-center justify-center gap-3 py-4 text-lg font-bold text-white" aria-label="Call Selke Pest Control">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Tap to Call — 704-728-0204
        </a>
      </div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: [string, string?][] }) {
  return (
    <nav className="border-b border-gray-200 bg-gray-50 py-3" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 text-sm text-gray-500">
        {items.map(([label, href], index) => (
          <li key={label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
            {href ? <a href={href} className="hover:text-cyan-600">{label}</a> : <span className="font-medium text-gray-700" aria-current="page">{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark hero used by inner pages, matching the homepage hero. */
export function PageHero({ eyebrow, title, children }: { eyebrow: ReactNode; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#1a2428] px-4 py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(47,92,103,0.25),transparent_35%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-50">{eyebrow}</div>
        <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.4rem]">{title}</h1>
        {children}
      </div>
    </section>
  );
}

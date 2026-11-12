import { Phone, Mail, MapPin, Shield, Clock, Star, Bug, Home, Leaf, Award, Users, ChevronDown, Droplets, Wind, Zap, AlertCircle, CheckCircle, Scissors, TreeDeciduous, Check, X, Heart, Menu } from 'lucide-react';
import { lazy, Suspense, useState, useEffect } from 'react';

import { BlogArticle } from './components/BlogArticle';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import FooterLogo from './components/FooterLogo';
import { MobileServiceAreas, ServiceAreasMenu } from './components/ServiceAreasMenu';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { citiesInCounty, serviceCities, serviceCounties } from './data/serviceAreas';
import newLogo from '../imports/Screenshot_2026-05-18_213802.png';
import heroTreatmentImage from '../imports/selke-home-treatment-hero.webp';
import techWalking from '../imports/b492d4f6-f650-412b-b5ac-975c7d404996.png';

const QuoteFormModal = lazy(() =>
  import('./components/QuoteFormModal').then(module => ({ default: module.QuoteFormModal }))
);
const PestLibraryModal = lazy(() =>
  import('./components/PestLibraryModal').then(module => ({ default: module.PestLibraryModal }))
);
const LegalModal = lazy(() =>
  import('./components/LegalModal').then(module => ({ default: module.LegalModal }))
);

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPestLibraryOpen, setIsPestLibraryOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openProcessStep, setOpenProcessStep] = useState<number | null>(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [urgencyDismissed, setUrgencyDismissed] = useState(false);

  // In-page anchors (#faq, #areas, ...) and deep links like /#faq from other
  // pages. The homepage is lazy-loaded, so the browser cannot resolve the hash
  // on first paint; scroll once the target exists and offset the sticky header.
  useEffect(() => {
    const scrollToHash = (hash: string, behavior: ScrollBehavior = 'smooth') => {
      const id = decodeURIComponent(hash.replace(/^#/, ''));
      if (!id) return false;
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior, block: 'start' });
      return true;
    };

    if (window.location.hash) {
      let attempts = 0;
      const timer = window.setInterval(() => {
        attempts += 1;
        if (scrollToHash(window.location.hash, 'auto') || attempts > 20) window.clearInterval(timer);
      }, 100);
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const hash = href.startsWith('#') ? href : href.startsWith('/#') ? href.slice(1) : '';
      if (!hash || hash === '#' || hash === '#main-content') return;
      if (scrollToHash(hash)) {
        event.preventDefault();
        window.history.replaceState(null, '', hash);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const blogData = [
    {
      id: 'mosquitoSeason',
      slug: 'mosquito-season-charlotte-nc',
      icon: <Wind className="w-7 h-7 text-white" />,
      title: "Mosquito Season in Charlotte: March to October",
      excerpt: "Learn when mosquitoes are most active in North Carolina and how to protect your family during peak season.",
    },
    {
      id: 'tickProtection',
      slug: 'tick-protection-charlotte-nc',
      icon: <Bug className="w-7 h-7 text-white" />,
      title: "Ticks in Charlotte: Protecting Your Yard & Pets",
      excerpt: "Ticks pose serious health risks. Find out how to identify common tick species and keep your property tick-free year-round.",
    },
    {
      id: 'springAnts',
      slug: 'spring-ants-charlotte-nc',
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Why Ants Explode Every Spring in Charlotte Homes",
      excerpt: "Discover why ant invasions peak in spring and what actually works to stop them.",
    },
    {
      id: 'cleanHomesRoaches',
      slug: 'cockroaches-in-clean-homes-charlotte-nc',
      icon: <AlertCircle className="w-7 h-7 text-white" />,
      title: "Yes, Clean Homes in Charlotte Get Roaches Too",
      excerpt: "Understand why even the tidiest homes can face cockroach problems and how to prevent them effectively.",
    },
    {
      id: 'diyVsPro',
      slug: 'diy-vs-professional-pest-control-nc',
      icon: <Scissors className="w-7 h-7 text-white" />,
      title: "DIY vs Professional Pest Control: An Honest Comparison",
      excerpt: "We break down the real costs, effectiveness, and time investment of both approaches in North Carolina.",
    },
    {
      id: 'fallRodents',
      slug: 'fall-rodent-prevention-charlotte-nc',
      icon: <TreeDeciduous className="w-7 h-7 text-white" />,
      title: "Fall Rodent Prevention Checklist for Charlotte Homes",
      excerpt: "Follow this comprehensive checklist to rodent-proof your home before winter arrives.",
    },
    {
      id: 'summerMosquitoes',
      slug: 'summer-mosquito-control-lake-norman-nc',
      icon: <Wind className="w-7 h-7 text-white" />,
      title: "Summer Mosquito Control Around Lake Norman",
      excerpt: "A practical summer plan for reducing mosquito breeding sites and protecting your yard between professional treatments.",
    },
    {
      id: 'fireAntAeration',
      slug: 'fire-ants-after-lawn-aeration-nc',
      icon: <Bug className="w-7 h-7 text-white" />,
      title: "Fire Ants After Lawn Aeration: What NC Homeowners Should Know",
      excerpt: "Learn why fire ant activity can become more visible after aeration and how to protect newly treated lawns.",
    },
    {
      id: 'rainTreatments',
      slug: 'does-rain-wash-away-pest-control-treatment',
      icon: <Droplets className="w-7 h-7 text-white" />,
      title: "Does Rain Wash Away Pest Control Treatment?",
      excerpt: "Find out when rain affects exterior pest treatments, when it does not, and whether your home needs another application.",
    },
    {
      id: 'stormMosquitoes',
      slug: 'mosquitoes-after-summer-rain-charlotte-nc',
      icon: <Droplets className="w-7 h-7 text-white" />,
      title: "Why Mosquitoes Surge After Summer Rain in Charlotte",
      excerpt: "Summer storms can trigger a mosquito boom in days. Here is what happens and the yard checks that make the biggest difference.",
    },
    {
      id: 'outdoorEntertaining',
      slug: 'pest-free-backyard-party-charlotte-nc',
      icon: <Leaf className="w-7 h-7 text-white" />,
      title: "How to Prepare a Pest-Free Yard for Summer Entertaining",
      excerpt: "Use this one-week checklist to reduce mosquitoes, ants, ticks, and stinging insects before guests arrive.",
    }
  ];
  const featuredBlogPosts = blogData.slice(-3).reverse();

  const processSteps = [
    { title: "Interior Treatment", description: "Comprehensive treatment of all interior areas including baseboards, cracks, crevices, and problem areas where pests hide." },
    { title: "Dewebbing & Prep", description: "Remove spider webs and prepare exterior surfaces for maximum treatment effectiveness." },
    { title: "Foundation Spray", description: "Apply barrier treatment to foundation, entry points, and all necessary areas around your home to prevent pest entry." },
    { title: "Granular Application", description: "Apply granular treatment to yard, bushes, and landscaped areas for extended outdoor protection." },
    { title: "Mosquito", description: "Complete the service with professional mosquito barrier treatment to your entire yard, providing weeks of relief." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-white">Skip to main content</a>
      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cyan-600 shadow-[0_-2px_12px_rgba(0,0,0,0.2)]">
        <a
          href="tel:7047280204"
          className="flex items-center justify-center gap-3 py-4 text-white font-bold text-lg"
          aria-label="Call Selke Pest Control"
        >
          <Phone className="w-5 h-5" />
          Tap to Call — 704-728-0204
        </a>
      </div>

      {isQuoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </Suspense>
      )}
      {isPestLibraryOpen && (
        <Suspense fallback={null}>
          <PestLibraryModal isOpen={isPestLibraryOpen} onClose={() => setIsPestLibraryOpen(false)} />
        </Suspense>
      )}
      {isLegalModalOpen && (
        <Suspense fallback={null}>
          <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
        </Suspense>
      )}

      {/* Guarantee Modal */}
      {isGuaranteeModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsGuaranteeModalOpen(false)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">100% Satisfaction</h2>
                  <p className="text-xl font-bold text-cyan-600">Selke Guarantee</p>
                </div>
              </div>
              <button onClick={() => setIsGuaranteeModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">At Selke Pest Control, we stand behind our work with an unconditional 100% satisfaction guarantee.</p>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-cyan-900 mb-3">Our Promise to You</h3>
                <p className="text-gray-700 leading-relaxed">If you experience any issues with bugs between your scheduled quarterly general pest control treatments, we will return to re-treat your property at <strong>absolutely no additional charge</strong>.</p>
              </div>
              <div className="space-y-3">
                {[["No Questions Asked", "Simply call us and we'll schedule a free re-treatment visit"], ["Fast Response", "We typically schedule re-treatments within 2-3 days"], ["Complete Coverage", "Applies to all pests covered under your quarterly service plan"]].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1"><Check className="w-5 h-5 text-green-600" /></div>
                    <div><h4 className="font-semibold text-gray-900">{title}</h4><p className="text-gray-600">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seasonal Urgency Banner */}
      {!urgencyDismissed && (
        <div className="bg-slate-900 text-white py-2.5 px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-sm font-medium pr-8">
            <span className="font-bold text-cyan-300">Hearing scratching at night?</span> Mice can enter through a dime-sized gap.{' '}
            <a href="/rodent-control-charlotte-nc" className="underline font-bold hover:no-underline">See our rodent control service →</a>
          </div>
          <button
            onClick={() => setUrgencyDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-75 transition-opacity"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40" role="banner">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="/" aria-label="Selke Pest Control - Home">
              <img src={newLogo} alt="Selke Pest Control logo" className="h-14 w-auto md:h-16" width="1656" height="382" />
            </a>
          </div>
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            <a href="#services" className="text-gray-700 hover:text-cyan-500 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-cyan-500 transition-colors">Why Us</a>
            <button onClick={() => setIsPestLibraryOpen(true)} className="text-gray-700 hover:text-cyan-500 transition-colors">Pest Library</button>
            <a href="/blog" className="text-gray-700 hover:text-cyan-500 transition-colors">Blog</a>
            <a href="#faq" className="text-gray-700 hover:text-cyan-500 transition-colors">FAQ</a>
            <ServiceAreasMenu />
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:704-728-0204" className="bg-cyan-500 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 text-sm md:text-base" aria-label="Call Selke Pest Control at 704-728-0204">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">704-728-0204</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(open => !open)}
              className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav id="mobile-navigation" className="max-h-[75vh] overflow-y-auto lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {[
                ['Services', '#services'],
                ['Why Selke', '#why-us'],
                ['Blog', '/blog'],
                ['Frequently Asked Questions', '#faq'],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">{label}</a>
              ))}
              <button onClick={() => { setIsPestLibraryOpen(true); setIsMobileMenuOpen(false); }} className="rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Pest Library</button>
              <MobileServiceAreas onNavigate={() => setIsMobileMenuOpen(false)} />
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a2428] text-white" aria-label="Hero">
        <div className="relative flex min-h-[560px] items-center overflow-hidden px-5 py-12 sm:min-h-[620px] sm:px-8 sm:py-16 lg:min-h-[680px] lg:px-10 lg:py-20 xl:px-16">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 82% 18%, rgba(75, 125, 138, 0.28), transparent 34%),
                  radial-gradient(circle at 12% 88%, rgba(47, 92, 103, 0.2), transparent 30%),
                  linear-gradient(120deg, #202b30 0%, #182125 54%, #263238 100%)
                `,
              }}
              aria-hidden="true"
            />
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <symbol id="selke-pattern-hex" viewBox="0 0 52 46">
                  <path d="M13 1h26l12 22-12 22H13L1 23 13 1Z" />
                </symbol>
                <pattern id="selke-pattern-dots" width="7" height="7" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.15" fill="#7c9199" fillOpacity="0.42" />
                </pattern>
                <pattern id="selke-hero-honeycomb" width="420" height="360" patternUnits="userSpaceOnUse">
                  <g stroke="#718087" strokeOpacity="0.28" strokeWidth="1.2">
                    <use href="#selke-pattern-hex" x="-7" y="20" width="52" height="46" fill="#2b363b" />
                    <use href="#selke-pattern-hex" x="36" y="44" width="52" height="46" fill="#223239" />
                    <use href="#selke-pattern-hex" x="-7" y="68" width="52" height="46" fill="url(#selke-pattern-dots)" />
                    <use href="#selke-pattern-hex" x="36" y="92" width="52" height="46" fill="#303a3e" />
                    <use href="#selke-pattern-hex" x="79" y="68" width="52" height="46" fill="#1b292e" />
                    <use href="#selke-pattern-hex" x="79" y="116" width="52" height="46" fill="url(#selke-pattern-dots)" />

                    <use href="#selke-pattern-hex" x="258" y="-2" width="52" height="46" fill="#273338" />
                    <use href="#selke-pattern-hex" x="301" y="22" width="52" height="46" fill="url(#selke-pattern-dots)" />
                    <use href="#selke-pattern-hex" x="344" y="-2" width="52" height="46" fill="#1c2d33" />
                    <use href="#selke-pattern-hex" x="344" y="46" width="52" height="46" fill="#303b3f" />
                    <use href="#selke-pattern-hex" x="301" y="70" width="52" height="46" fill="#243137" />
                    <use href="#selke-pattern-hex" x="258" y="94" width="52" height="46" fill="url(#selke-pattern-dots)" />

                    <use href="#selke-pattern-hex" x="154" y="184" width="52" height="46" fill="#2f393d" />
                    <use href="#selke-pattern-hex" x="197" y="160" width="52" height="46" fill="#1c2e34" />
                    <use href="#selke-pattern-hex" x="240" y="184" width="52" height="46" fill="url(#selke-pattern-dots)" />
                    <use href="#selke-pattern-hex" x="197" y="208" width="52" height="46" fill="#29353a" />
                    <use href="#selke-pattern-hex" x="154" y="232" width="52" height="46" fill="url(#selke-pattern-dots)" />
                    <use href="#selke-pattern-hex" x="240" y="232" width="52" height="46" fill="#223037" />
                    <use href="#selke-pattern-hex" x="283" y="208" width="52" height="46" fill="#313b3f" />

                    <use href="#selke-pattern-hex" x="-6" y="292" width="52" height="46" fill="#243137" />
                    <use href="#selke-pattern-hex" x="37" y="268" width="52" height="46" fill="url(#selke-pattern-dots)" />
                    <use href="#selke-pattern-hex" x="80" y="292" width="52" height="46" fill="#2c373b" />
                    <use href="#selke-pattern-hex" x="37" y="316" width="52" height="46" fill="#1b2a30" />
                    <use href="#selke-pattern-hex" x="350" y="304" width="52" height="46" fill="url(#selke-pattern-dots)" />
                  </g>

                  <g fill="#6f838a" fillOpacity="0.24">
                    <circle cx="146" cy="52" r="3" /><circle cx="158" cy="52" r="3" /><circle cx="170" cy="52" r="3" />
                    <circle cx="152" cy="63" r="3" /><circle cx="164" cy="63" r="3" /><circle cx="176" cy="63" r="3" />
                    <circle cx="146" cy="74" r="3" /><circle cx="158" cy="74" r="3" /><circle cx="170" cy="74" r="3" />
                    <circle cx="355" cy="165" r="2.5" /><circle cx="365" cy="165" r="2.5" /><circle cx="375" cy="165" r="2.5" />
                    <circle cx="360" cy="175" r="2.5" /><circle cx="370" cy="175" r="2.5" /><circle cx="380" cy="175" r="2.5" />
                    <circle cx="355" cy="185" r="2.5" /><circle cx="365" cy="185" r="2.5" /><circle cx="375" cy="185" r="2.5" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#selke-hero-honeycomb)" opacity="0.94" />
            </svg>
            <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

            <div className="relative z-10 mx-auto w-full max-w-7xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-2 backdrop-blur-sm sm:mb-6 sm:px-4">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-50">Local Family-Owned &amp; Operated</span>
              </div>
              <h1 className="mb-5 max-w-xl text-[2.25rem] font-bold leading-[1.06] tracking-tight sm:mb-6 sm:text-5xl lg:text-[3.35rem] xl:text-[4rem]">
                <span className="block">Charlotte&apos;s Top Choice for Pest Control</span>
              </h1>
              <p className="mb-7 max-w-xl text-base leading-relaxed text-gray-300 sm:mb-9 sm:text-xl">
                Same-day service available &bull; 100% Satisfaction Guarantee
              </p>
              <div className="flex max-w-xl flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="min-h-14 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-950/30 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-2xl sm:text-lg"
                >
                  Get Free Quote
                </button>
                <a href="tel:704-728-0204" className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white px-8 py-4 text-base font-semibold text-gray-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-100 sm:text-lg">
                  <Phone className="h-5 w-5" />
                  704-728-0204
                </a>
              </div>
              <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-300 sm:mt-7"
                aria-label="Learn about our 100% Satisfaction Guarantee"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/15">
                  <Shield className="h-4 w-4 text-cyan-300" />
                </span>
                Learn about the Selke Guarantee
              </button>
            </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://share.google/cT2MLnW3U4Dw1kosn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            aria-label="Read our 75 plus five-star Google reviews"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
              75+ Five-Star Google Reviews
            </span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M17.8 12.2c0-.4 0-.9-.1-1.2H12v2.4h3.3c-.2.7-.6 1.3-1.2 1.7v1.4h1.9c1.1-.9 1.8-2.3 1.8-4.3z"/>
              <path fill="#34A853" d="M12 18c1.7 0 3.1-.5 4.1-1.5l-1.9-1.4c-.6.4-1.3.6-2.2.6-1.7 0-3.1-1.1-3.6-2.7H6.4v1.5C7.4 16.8 9.5 18 12 18z"/>
              <path fill="#FBBC04" d="M8.4 13c-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5V8.5H6.4C5.9 9.5 5.6 10.7 5.6 12s.3 2.5.8 3.5l2-1.5z"/>
              <path fill="#EA4335" d="M12 8.3c1 0 1.9.3 2.6.9l1.9-1.9C15.3 6.3 13.8 6 12 6 9.5 6 7.4 7.2 6.4 9l2 1.5C8.9 9.2 10.3 8.3 12 8.3z"/>
            </svg>
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-4 h-4 text-cyan-500" />
            <span>Licensed &amp; Insured</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <Home className="w-4 h-4 text-cyan-500" />
            <span>Family-Owned, Mooresville NC</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-14 md:py-20 bg-gray-50" aria-label="Our Services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pest protection for Charlotte Metro homes &amp; families
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bug className="w-8 h-8 text-white" />,
                title: "General Pest Control",
                desc: "Complete protection against ants, roaches, spiders, and other common household pests. Proven treatments keep your home pest-free year-round.",
                features: ["Interior & exterior treatment", "Flexible service plans", "Safe for pets & children"],
              },
              {
                icon: <Leaf className="w-8 h-8 text-white" />,
                title: "Mosquito Control",
                desc: "Enjoy your outdoor spaces without the annoyance of mosquitoes. Our targeted barrier treatments reduce mosquito populations by up to 96%.",
                features: ["Yard & perimeter treatment", "Monthly seasonal service", "Event-based treatments available"],
              },
              {
                icon: <Home className="w-8 h-8 text-white" />,
                title: "Flea & Tick Control",
                desc: "Protect your pets and family. Our comprehensive treatments eliminate existing infestations and create a protective barrier around your home.",
                features: ["Indoor & outdoor treatment", "Pet-safe formulations", "Follow-up inspections included"],
              },
            ].map(({ icon, title, desc, features }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h3 className="text-2xl mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <ul className="space-y-2 text-gray-600">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Seasonality Section */}
      <section className="py-20" style={{ background: '#0d1b2a' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-slate-600 bg-slate-800/60">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-cyan-400"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
              <span className="text-sm text-slate-300 font-medium">Charlotte Metro, NC</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">When Pests Are Most Active</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Know what's coming before it arrives. Each pest has a season — here's the full year at a glance for the Charlotte area.
            </p>
          </div>
          {(() => {
            const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
            const heights = [12, 28, 58, 100];
            const pests = [
              { name: 'Mosquitoes', peak: 'May – Oct', activity: [0,0,1,2,3,3,3,3,3,2,1,0], slug: 'mosquito-control-charlotte-nc' },
              { name: 'Ants', peak: 'Mar – Sep', activity: [1,1,2,3,3,3,3,2,2,1,1,1], slug: 'ant-control-charlotte-nc' },
              { name: 'Ticks', peak: 'Apr – Aug', activity: [1,1,2,3,3,2,2,2,1,1,1,1], slug: 'tick-control-charlotte-nc' },
              { name: 'Cockroaches', peak: 'Jun – Sep', activity: [1,1,1,1,2,3,3,3,3,2,1,1], slug: 'cockroach-control-charlotte-nc' },
              { name: 'Spiders', peak: 'Aug – Oct', activity: [1,1,1,1,2,2,2,3,3,3,2,1], slug: 'spider-control-charlotte-nc' },
              { name: 'Wasps', peak: 'Jun – Oct', activity: [0,0,1,1,2,3,3,3,3,2,1,0], slug: 'wasp-control-charlotte-nc' },
              { name: 'Fleas', peak: 'May – Sep', activity: [0,0,1,2,3,3,3,3,2,1,0,0], slug: 'flea-control-charlotte-nc' },
              { name: 'Rodents', peak: 'Sep – Feb', activity: [3,3,2,1,1,1,1,1,2,3,3,3], slug: 'rodent-control-charlotte-nc' },
            ];
            return (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {pests.map(pest => (
                  <a
                    key={pest.name}
                    href={`/${pest.slug}`}
                    className="rounded-2xl p-5 hover:bg-slate-700/80 transition-all group"
                    style={{ background: '#152033' }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <Bug className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">{pest.name}</h3>
                        <p className="text-xs text-cyan-400 mt-0.5">Peak: {pest.peak}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-[3px] h-10 mb-2">
                      {pest.activity.map((level, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm transition-all"
                          style={{
                            height: `${heights[level]}%`,
                            background: level === 3 ? '#22d3ee' : level === 2 ? '#0891b2' : level === 1 ? '#1e3a4a' : '#152033',
                            minHeight: '3px',
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mb-3">
                      {months.map((m, i) => (
                        <span key={i} className="text-[9px] text-slate-600 flex-1 text-center">{m}</span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-xs group-hover:text-cyan-400 transition-colors">
                      View treatment options →
                    </p>
                  </a>
                ))}
              </div>
            );
          })()}
          <div className="text-center mt-12">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-cyan-400 text-slate-900 font-bold px-12 py-4 rounded-xl text-lg hover:bg-cyan-300 transition-colors shadow-lg"
            >
              Protect Your Home Year-Round
            </button>
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">91% of Our Customers Bundle</span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-4">Save More. Protect More.</h2>
                <p className="text-xl text-cyan-100 mb-2">
                  Combine general pest control + mosquito protection for maximum coverage and better value.
                </p>
                <p className="text-cyan-200 text-sm mb-6 italic">
                  Every service you schedule is one more step toward our mission to give back to our local community.
                </p>
                <div className="space-y-4">
                  {[
                    ["Complete Protection", "Comprehensive indoor + outdoor pest control plus mosquito treatments"],
                    ["Better Value", "Save money compared to purchasing services separately"],
                    ["Flexible Plans", "Flexible service contracts — cancel anytime with satisfaction guarantee"],
                    ["Get Outside Again", "Reclaim your yard from mosquitoes and outdoor pests"],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="mb-1">{title}</h3>
                        <p className="text-cyan-100 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="mt-8 bg-white text-cyan-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg font-semibold"
                >
                  Get Bundle Quote
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-2xl" aria-hidden="true" />
                <div className="relative grid h-[34rem] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-3xl border-4 border-white/15 bg-cyan-900 p-2 shadow-2xl sm:gap-3 sm:p-3">
                  {[
                    ['/service-collage/perimeter-treatment.webp', 'Selke Pest Control technician treating a home perimeter', 'object-center'],
                    ['/service-collage/entry-treatment.webp', 'Selke Pest Control technician applying a targeted entry treatment', 'object-center'],
                    ['/service-collage/pool-area-treatment.webp', 'Selke Pest Control technician treating an outdoor pool area', 'object-center'],
                    ['/service-collage/community-family.webp', 'Selke Pest Control family participating in a Lake Norman community event', 'object-top'],
                  ].map(([src, alt, position]) => (
                    <div key={src} className="overflow-hidden rounded-2xl bg-cyan-950">
                      <img src={src} alt={alt} className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${position}`} width="900" height="1200" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-bold text-cyan-800 shadow-xl">
                  Local service. Real Lake Norman homes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Giving Section */}
      <section className="py-24 bg-slate-900 text-white" aria-label="Community Giving Mission">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">The Selke Mission</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Business That<br />Feeds Neighbors.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  We built Selke around a belief most companies don't bother with: every service call should make the community stronger.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Think Bombas socks. Think TOMS shoes. Now think pest control. You already need it — so why not do it with a company that's using every customer to feed families in need right here in the Lake Norman area?
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-cyan-500 text-white px-8 py-4 rounded-xl hover:bg-cyan-400 transition-colors font-semibold"
                >
                  Be Part of the Mission
                </button>
              </div>
              <div className="space-y-px">
                <div className="bg-slate-800 rounded-t-2xl p-8 border-b border-slate-700">
                  <p className="text-6xl font-black text-white tracking-tight">250,000</p>
                  <p className="text-cyan-400 font-semibold mt-1">Meals — Our Community Goal</p>
                  <p className="text-slate-400 text-sm mt-2">Partnering with local food banks and nonprofits to feed neighbors in need. Every customer moves the number.</p>
                </div>
                <div className="grid grid-cols-2 gap-px">
                  <div className="bg-slate-800 p-6">
                    <p className="text-slate-300 font-semibold mb-1">Local Partners</p>
                    <p className="text-slate-500 text-sm">Working with Lake Norman area food banks to get meals where they're needed most.</p>
                  </div>
                  <div className="bg-slate-800 p-6">
                    <p className="text-slate-300 font-semibold mb-1">Long-Term Vision</p>
                    <p className="text-slate-500 text-sm">A dedicated food truck or nonprofit. School supplies. Something bigger than pest control.</p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-b-2xl p-6">
                  <p className="text-slate-400 text-sm italic">"We earn your business every visit — and with every visit, we get closer to 250,000."</p>
                  <p className="text-slate-500 text-xs mt-2">— The Selke Pest Control Team, Mooresville NC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white" aria-label="Why Choose Selke Pest Control">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Customers Continue to Choose Selke</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not a national chain. We're your neighbors — and we operate like it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <Shield className="w-7 h-7 text-cyan-600" />, title: "100% Guarantee", desc: "If pests return between treatments, we return at no extra cost. No questions asked." },
              { icon: <Clock className="w-7 h-7 text-cyan-600" />, title: "Same-Week Service", desc: "Urgent situation? We offer same-week — and often same-day — scheduling for Lake Norman homes." },
              { icon: <Award className="w-7 h-7 text-cyan-600" />, title: "15+ Years Experience", desc: "Backed by over 15 years of pest control expertise serving North Carolina homes and families." },
              { icon: <Users className="w-7 h-7 text-cyan-600" />, title: "Flexible Plans", desc: "Flexible service agreements — no hard lock-ins. We earn your business every single visit." },
              { icon: <Heart className="w-7 h-7 text-cyan-600" fill="none" />, title: "Giving Back", desc: "Choosing Selke helps us hit our 250,000-meal community giving goal. Business with purpose." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {icon}
                </div>
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good Neighbor Referral */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mb-3">Good Neighbor Program</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  $25 Off for You.<br />$25 Off for Them.
                </h2>
                <p className="text-gray-500 mb-8">
                  Refer a neighbor, friend, or family member — you both receive <strong className="text-gray-700">$25 off</strong> your next service. No catch. Good neighbors share good things.
                </p>
                <a
                  href="tel:7047280204"
                  className="inline-flex items-center gap-2 bg-cyan-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-cyan-600 transition-colors w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Call to Refer a Neighbor
                </a>
              </div>
              <div className="bg-gray-50 p-10 flex flex-col justify-center border-l border-gray-100">
                <div className="space-y-6">
                  {[
                    { n: "01", label: "Refer a neighbor", desc: "Tell them about Selke Pest Control" },
                    { n: "02", label: "They book & mention your name", desc: "They call us and give your name" },
                    { n: "03", label: "You both save $25", desc: "$25 off their first service, $25 off yours" },
                  ].map(({ n, label, desc }) => (
                    <div key={n} className="flex items-start gap-4">
                      <span className="text-2xl font-black text-cyan-200 leading-none w-8 shrink-0">{n}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{label}</p>
                        <p className="text-gray-400 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Click each step to learn more</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setOpenProcessStep(openProcessStep === index ? null : index)}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative group ${openProcessStep === index ? 'border-cyan-500 bg-cyan-50 shadow-lg' : 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-md'}`}
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-center text-sm font-semibold mb-2">{step.title}</h3>
                    <ChevronDown className={`w-5 h-5 text-cyan-600 transition-transform ${openProcessStep === index ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                  </div>
                </button>
              ))}
            </div>
            {openProcessStep !== null && (
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-cyan-500">
                <h3 className="text-2xl mb-4 text-cyan-700">{processSteps[openProcessStep].title}</h3>
                <p className="text-gray-700 text-lg">{processSteps[openProcessStep].description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50" aria-label="Customer Reviews">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <a
              href="https://share.google/cT2MLnW3U4Dw1kosn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              75+ Five-Star Reviews on Google &rarr;
            </a>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 bg-white" aria-label="Service Areas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl">Areas We Service</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <p className="mx-auto -mt-6 mb-10 max-w-3xl text-center text-lg text-gray-600">
              Selke Pest Control serves {serviceCities.length} cities across {serviceCounties.length} North Carolina counties around Lake Norman and the Charlotte Metro, from our home base in Mooresville.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCounties.map(county => (
                <div key={county.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">{county.name}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {citiesInCounty(county.id).map(city => (
                      <li key={city.slug}>
                        <a href={`/${city.slug}`} className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-cyan-500 hover:text-white hover:ring-cyan-500">
                          {city.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't see your city?{' '}
                <a href="tel:704-728-0204" className="text-cyan-600 hover:text-cyan-700 font-semibold">Call us at 704-728-0204</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Homeowner Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 max-w-xl mx-auto">Simple steps to protect your home between treatments</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-7 h-7 text-white" />, title: "Prevention", sub: "Seal Entry Points", desc: "Check windows, doors, and foundation for gaps. Seal cracks and crevices where pests can enter." },
              { icon: <Droplets className="w-7 h-7 text-white" />, title: "Mosquitoes", sub: "Eliminate Standing Water", desc: "Empty flower pots, birdbaths, and gutters regularly. Mosquitoes breed in standing water — even a bottle cap's worth." },
              { icon: <Home className="w-7 h-7 text-white" />, title: "Kitchen Pests", sub: "Store Food Properly", desc: "Keep food in sealed containers, clean up spills immediately, and take out trash regularly." },
            ].map(({ icon, title, sub, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">{icon}</div>
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-gray-700 font-medium mb-2">{sub}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Tips Section */}
      <section id="tips" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Pest Control Tips &amp; Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert articles to help you understand and prevent pest problems across the Charlotte, Concord, and Lake Norman regions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogPosts.map((blog) => (
              <BlogArticle
                key={blog.id}
                icon={blog.icon}
                title={blog.title}
                excerpt={blog.excerpt}
                href={`/blog/${blog.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <InstagramFeedSection />

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white" aria-label="Frequently Asked Questions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What areas do you service?", a: "We serve the Charlotte Metro and Lake Norman area across Mecklenburg, Iredell, Cabarrus, Rowan, Lincoln, Catawba, and Union counties, including Mooresville, Charlotte, Huntersville, Cornelius, Davidson, Matthews, Statesville, Troutman, Concord, Mount Ulla, Denver, Sherrills Ford, Indian Trail, Weddington, and Waxhaw. Don't see your city? Call us at 704-728-0204." },
              { q: "Is Selke Pest Control licensed?", a: "Yes. Selke Pest Control is a licensed and insured, family-owned pest control company based in Mooresville, NC. Our North Carolina license number is 2215P." },
              { q: "Are your treatments safe for kids and pets?", a: "Absolutely. We use EPA-approved products that are tough on pests but safe for your family and pets. Treated areas are safe once dry, and we'll give you specific guidance for each treatment." },
              { q: "How fast can you come out?", a: "We offer same-week service for most requests, and same-day service is available for urgent situations depending on schedule. Most standard quotes are set up within 1-2 days of your first call." },
              { q: "What if pests come back between scheduled visits?", a: "That's covered by the Selke Guarantee. If pests return between your scheduled treatments, we come back and retreat at no additional charge — no questions asked." },
              { q: "Do you require contracts?", a: "We offer flexible service plans. You're not locked into hard long-term contracts — we earn your business every visit with our 100% satisfaction guarantee." },
              { q: "What are your business hours?", a: "We are available Monday through Saturday, 8:00 AM to 8:00 PM Eastern. Call 704-728-0204 or request a free quote online anytime." },
              { q: "Do you offer bundled services?", a: "Yes! 91% of our customers bundle mosquito control with general pest control. It saves money and gives you complete indoor and outdoor protection in one visit." },
              { q: "What is the Good Neighbor Referral Program?", a: "Refer a friend, neighbor, or family member to Selke and you both receive $25 off your next service. Just have them mention your name when they call." },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  aria-expanded={openFAQ === index}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={openFAQ === index ? 'px-6 pb-5 text-gray-600' : 'hidden'}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-4 font-bold">Ready to Get Outside Again?</h2>
            <p className="text-xl mb-2 text-cyan-100">
              Charlotte&apos;s hometown pest control — backed by a 100% guarantee and a mission to give back.
            </p>
            <p className="text-cyan-200 text-sm mb-8">Monday–Saturday &bull; 8:00 AM – 8:00 PM EST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg shadow-xl font-semibold">
                <Phone className="w-5 h-5" />
                704-728-0204
              </a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 pb-20 md:pb-12" role="contentinfo" aria-label="Site footer">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <FooterLogo className="h-20 mb-4" />
              <p className="text-gray-400 mb-3">
                Family-owned pest control for Charlotte and the surrounding area. Every customer helps us reach our 250,000-meal community giving goal.
              </p>
              <address className="text-gray-400 not-italic" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 inline mr-2" aria-hidden="true" />
                Based in <span itemProp="addressLocality">Mooresville</span>, <span itemProp="addressRegion">NC</span>
              </address>
            </div>
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
                <li><button onClick={() => setIsPestLibraryOpen(true)} className="hover:text-cyan-400 transition-colors">Pest Library</button></li>
                <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Pest Control Blog</a></li>
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><button onClick={() => setIsLegalModalOpen(true)} className="hover:text-cyan-400 transition-colors">Privacy Policy &amp; Terms</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:704-728-0204" className="hover:text-cyan-400 transition-colors">704-728-0204</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>License# 2215P</span>
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-gray-500 text-sm mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/selkepestcontrol" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Facebook" className="hover:opacity-75 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#1877F2"/>
                      <path d="M15 4h-1.5C11.6 4 10 5.6 10 7.5V9H8v3h2v8h3v-8h2.5L16 9h-3V7.5c0-.3.2-.5.5-.5H16V4h-1z" fill="white"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/selkepestcontrol" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Instagram" className="hover:opacity-75 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="igFooter2" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F58529"/>
                          <stop offset="0.5" stopColor="#DD2A7B"/>
                          <stop offset="1" stopColor="#8134AF"/>
                        </linearGradient>
                      </defs>
                      <rect width="24" height="24" rx="5" fill="url(#igFooter2)"/>
                      <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <circle cx="17" cy="7" r="1" fill="white"/>
                    </svg>
                  </a>
                  <a href="https://share.google/cT2MLnW3U4Dw1kosn" target="_blank" rel="noopener noreferrer" aria-label="Selke Pest Control on Google" className="hover:opacity-75 transition-opacity">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="white" stroke="#DADCE0" strokeWidth="1"/>
                      <path fill="#4285F4" d="M17.8 12.2c0-.4 0-.9-.1-1.2H12v2.4h3.3c-.2.7-.6 1.3-1.2 1.7v1.4h1.9c1.1-.9 1.8-2.3 1.8-4.3z"/>
                      <path fill="#34A853" d="M12 18c1.7 0 3.1-.5 4.1-1.5l-1.9-1.4c-.6.4-1.3.6-2.2.6-1.7 0-3.1-1.1-3.6-2.7H6.4v1.5C7.4 16.8 9.5 18 12 18z"/>
                      <path fill="#FBBC04" d="M8.4 13c-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5V8.5H6.4C5.9 9.5 5.6 10.7 5.6 12s.3 2.5.8 3.5l2-1.5z"/>
                      <path fill="#EA4335" d="M12 8.3c1 0 1.9.3 2.6.9l1.9-1.9C15.3 6.3 13.8 6 12 6 9.5 6 7.4 7.2 6.4 9l2 1.5C8.9 9.2 10.3 8.3 12 8.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <ServiceAreaMap />
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Selke Pest Control. All rights reserved. Licensed &amp; Insured. License# 2215P.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Phone, Shield, Clock, Star, Bug, Home, Leaf, Award, Users, Droplets, Wind, Zap, AlertCircle, CheckCircle, Scissors, TreeDeciduous, Check, X, Heart, ArrowRight, ClipboardCheck, Rat, Warehouse, BrickWall, Sprout } from 'lucide-react';
import { SpiderWebIcon } from './components/icons';
import { HeroBackdrop } from './components/HeroBackdrop';
import { lazy, Suspense, useState, useEffect } from 'react';

import { BlogArticle } from './components/BlogArticle';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { ServiceTileGrid } from './components/ServiceCards';

const QuoteFormModal = lazy(() =>
  import('./components/QuoteFormModal').then(module => ({ default: module.QuoteFormModal }))
);

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [urgencyDismissed, setUrgencyDismissed] = useState(false);

  // In-page anchors (#why-us, #services, ...) and deep links like /#why-us from
  // other pages. The homepage is lazy-loaded, so the browser cannot resolve the hash
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

    // Old /#faq and /#areas links now live elsewhere.
    if (window.location.hash === '#faq') { window.location.replace('/faq'); return; }
    if (window.location.hash === '#areas') window.history.replaceState(null, '', '/');

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
    { icon: Home, title: "Interior" },
    { icon: Warehouse, title: "Garage" },
    { icon: SpiderWebIcon, title: "De-webbing" },
    { icon: BrickWall, title: "Foundation" },
    { icon: Sprout, title: "Granular" },
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
            <span className="ml-2 inline-flex items-center gap-1 align-middle text-cyan-300" aria-hidden="true">
              <Rat className="h-[1.15em] w-[1.15em]" />
              <Rat className="h-[1.15em] w-[1.15em] -scale-x-100" />
            </span>
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

      <SiteHeader />

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#041014] text-white" aria-label="Hero">
        <div className="relative flex min-h-[560px] items-center overflow-hidden px-5 py-14 sm:min-h-[620px] sm:px-8 sm:py-16 lg:min-h-[680px] lg:px-10 lg:py-20 xl:px-16">
            <HeroBackdrop />

            <div className="relative z-10 mx-auto w-full max-w-7xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-2 backdrop-blur-sm sm:mb-6 sm:px-4">
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-50">Local Family-Owned &amp; Operated</span>
              </div>
              <h1 className="mb-5 max-w-3xl text-[2.25rem] font-bold leading-[1.06] tracking-tight sm:mb-6 sm:text-5xl lg:text-[3.5rem] xl:text-[4.1rem]">
                Trusted Pest Control Across{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-teal-200 bg-clip-text text-transparent">Lake Norman &amp; the Charlotte Metro</span>
              </h1>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:mb-9 sm:text-xl">
                Family-owned and licensed, serving 15 cities across 7 North Carolina counties, from Statesville to Waxhaw. Same-day service and a 100% satisfaction guarantee.
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
      <section id="services" className="scroll-mt-24 bg-gray-50 py-16 md:py-24" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-14">
            <h2 id="services-heading" className="text-3xl md:text-4xl">Our Services</h2>
          </div>
          <ServiceTileGrid />
          <div className="mt-10 text-center">
            <a href="/services" className="inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-800">
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <InstagramFeedSection />

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

      {/* Our Process */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-100">
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              Our Service Process
            </p>
            <h2 id="process-heading" className="mb-4 text-3xl md:text-4xl">Five Steps, Every Single Visit</h2>
            <p className="text-lg text-gray-600">
              Our average service takes more than 56 minutes.{' '}
              <a href="/blog/why-our-pest-control-service-takes-56-minutes" className="font-semibold text-cyan-700 underline-offset-4 hover:underline">Here&apos;s where that time goes.</a>
            </p>
          </div>
          <ol className="relative mx-auto grid max-w-6xl gap-5 md:grid-cols-5 md:gap-4">
            <span className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-100 md:block" aria-hidden="true" />
            {processSteps.map(({ title, icon: StepIcon }, index) => (
              <li key={title} className="relative flex items-center gap-4 md:flex-col md:gap-0 md:text-center">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/25 ring-8 ring-white">
                  <StepIcon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div className="md:mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">Step {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1.5 text-lg font-semibold text-gray-900">{title}</h3>
                </div>
              </li>
            ))}
          </ol>
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

      {/* Pest Seasonality Section */}
      <section className="py-20" style={{ background: '#0d1b2a' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">When Pests Are Most Active</h2>
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

      {/* Blog / Tips Section */}
      <section id="tips" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl">Pest Control Tips &amp; Insights</h2>
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

      <SiteFooter />
    </div>
  );
}

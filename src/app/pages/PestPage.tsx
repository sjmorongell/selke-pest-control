import { Phone, Shield, Star, ChevronDown, MapPin, Mail, Menu, X, AlertTriangle, CheckCircle, Bug } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QuoteFormModal } from '../components/QuoteFormModal';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { LegalModal } from '../components/LegalModal';
import FooterLogo from '../components/FooterLogo';
import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';
import { PestPageData } from '../data/pestData';

const SERVICE_AREAS = [
  { name: 'Mooresville', slug: 'pest-control-mooresville-nc' },
  { name: 'Charlotte', slug: 'pest-control-charlotte-nc' },
  { name: 'Huntersville', slug: 'pest-control-huntersville-nc' },
  { name: 'Cornelius', slug: 'pest-control-cornelius-nc' },
  { name: 'Davidson', slug: 'pest-control-davidson-nc' },
  { name: 'Denver', slug: 'pest-control-denver-nc' },
  { name: 'Sherrills Ford', slug: 'pest-control-sherrills-ford-nc' },
  { name: 'Statesville', slug: 'pest-control-statesville-nc' },
  { name: 'Troutman', slug: 'pest-control-troutman-nc' },
  { name: 'Weddington', slug: 'pest-control-weddington-nc' },
  { name: 'Waxhaw', slug: 'pest-control-waxhaw-nc' },
  { name: 'Matthews', slug: 'pest-control-matthews-nc' },
];

const PEST_LINKS = [
  { name: 'Mosquito Control', slug: 'mosquito-control-charlotte-nc' },
  { name: 'Ant Control', slug: 'ant-control-charlotte-nc' },
  { name: 'Tick Control', slug: 'tick-control-charlotte-nc' },
  { name: 'Cockroach Control', slug: 'cockroach-control-charlotte-nc' },
  { name: 'Spider Control', slug: 'spider-control-charlotte-nc' },
  { name: 'Wasp Control', slug: 'wasp-control-charlotte-nc' },
  { name: 'Flea Control', slug: 'flea-control-charlotte-nc' },
  { name: 'Rodent Control', slug: 'rodent-control-charlotte-nc' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface PestPageProps {
  pest: PestPageData;
}

export default function PestPage({ pest }: PestPageProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [isPestsDropdownOpen, setIsPestsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePestsOpen, setMobilePestsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    document.title = `${pest.heroHeadline} | Selke Pest Control`;
    window.scrollTo(0, 0);
    const handleScroll = () => setShowStickyCTA(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pest.slug]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pest.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://selkepestcontrol.com/" },
      { "@type": "ListItem", "position": 2, "name": pest.heroHeadline, "item": `https://selkepestcontrol.com/${pest.slug}` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${pest.pest} Control Charlotte NC`,
    "provider": { "@type": "LocalBusiness", "name": "Selke Pest Control", "telephone": "+1-704-728-0204" },
    "areaServed": { "@type": "State", "name": "North Carolina" },
    "description": pest.intro
  };

  return (
    <div className="min-h-screen bg-white">
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 relative" role="banner">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" aria-label="Selke Pest Control - Home">
            <img src={newLogo} alt="Selke Pest Control logo" className="h-14 md:h-16" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4" aria-label="Main navigation">
            <a href="/#services" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Services</a>
            <a href="/#why-us" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Why Us</a>
            <a href="/" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Pest Library</a>
            <a href="/#tips" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>
            <a href="/#faq" className="text-sm text-gray-700 hover:text-cyan-500 transition-colors">FAQ</a>

            {/* Pest Control dropdown */}
            <div className="relative" onMouseEnter={() => setIsPestsDropdownOpen(true)} onMouseLeave={() => setIsPestsDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-cyan-500 transition-colors">
                Pest Control <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPestsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPestsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                    {PEST_LINKS.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{name}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div className="relative" onMouseEnter={() => setIsAreasDropdownOpen(true)} onMouseLeave={() => setIsAreasDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-cyan-500 transition-colors">
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAreasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAreasDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 grid grid-cols-2 min-w-[340px]">
                    {SERVICE_AREAS.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">{name}, NC</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-700 hover:text-cyan-500 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-cyan-500">Customer Portal</a>
            <a href="tel:704-728-0204" className="bg-cyan-500 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 text-sm md:text-base">
              <Phone className="w-4 h-4" /><span className="hidden sm:inline">704-728-0204</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-50 max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-3 space-y-1">
              <a href="/#services" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="/#why-us" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
              <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pest Library</a>
              <a href="/#tips" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tips</a>
              <a href="/#faq" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>

              <div>
                <button onClick={() => setMobilePestsOpen(!mobilePestsOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-lg transition-colors">
                  <span>Pest Control</span><ChevronDown className={`w-4 h-4 transition-transform ${mobilePestsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePestsOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {PEST_LINKS.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{name}</a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-lg transition-colors">
                  <span>Service Areas</span><ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 grid grid-cols-2 gap-1 pb-2">
                    {SERVICE_AREAS.map(({ name, slug }) => (
                      <a key={slug} href={`/${slug}`} className="px-3 py-2 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{name}</a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors">Customer Portal</a>
              <a href="tel:704-728-0204" className="block bg-cyan-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-cyan-600 transition-colors mt-2">Call 704-728-0204</a>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-cyan-600 transition-colors">Home</a></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">{pest.heroHeadline}</li>
          </ol>
        </div>
      </nav>

      {/* Hero — centered text + background image matching home page */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">Charlotte Metro Area, NC</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">{pest.heroHeadline}</h1>
            <p className="text-lg md:text-xl mb-4 text-gray-300 max-w-3xl mx-auto">{pest.heroSub}</p>
            <p className="text-base text-gray-400 mb-10">Family-owned • Licensed & Insured • 100% Satisfaction Guarantee</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-cyan-500 text-white px-10 py-5 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get $25 Off My First Treatment
              </button>
              <a href="tel:704-728-0204" className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl">
                <Phone className="w-5 h-5" />704-728-0204
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[{ icon: Shield, label: "Selke Guarantee" }, { icon: Star, label: "5-Star Rated" }, { icon: CheckCircle, label: "Pet & Family Safe" }, { icon: Bug, label: "NC-Certified" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2"><Icon className="w-6 h-6 text-cyan-400" /></div>
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No-brainer offer banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">🎉 New Customer Special — <span className="underline">$25 Off</span> your first {pest.pest} treatment. <button onClick={() => setIsQuoteModalOpen(true)} className="font-bold underline hover:no-underline ml-1">Claim it now →</button></p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">{pest.pest} Control in Charlotte, NC</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{pest.intro}</p>
        </div>
      </section>

      {/* Signs of Infestation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-10">Signs You Have {pest.pestPlural}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pest.signs.map((sign, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">Why {pest.pest} Control Matters</h2>
            <p className="text-lg text-gray-600 mb-8">Ignoring a {pest.pest.toLowerCase()} problem doesn't make it go away — it makes it worse. Here's what's at stake:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {pest.risks.map((risk, i) => (
                <div key={i} className="flex items-start gap-4 bg-red-50 rounded-xl p-5 border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-gray-700">{risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NC Species */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">{pest.pest} Species Found in North Carolina</h2>
            <p className="text-lg text-gray-600 mb-8">Knowing which species you're dealing with shapes our treatment approach:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {pest.ncSpecies.map((species, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bug className="w-4 h-4 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{species.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm pl-11">{species.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Activity Chart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-3">{pest.pest} Activity by Month in NC</h2>
            <p className="text-gray-600 mb-2 text-lg">{pest.seasonNote}</p>
            <p className="text-sm text-cyan-600 font-medium mb-8">Peak months: {pest.peakMonths}</p>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-end gap-2 h-40">
                {pest.activityByMonth.map((level, i) => {
                  const heightPct = Math.max(4, (level / 10) * 100);
                  const isPeak = level >= 7;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t-lg transition-all ${isPeak ? 'bg-cyan-500' : level >= 4 ? 'bg-cyan-300' : 'bg-gray-300'}`}
                        style={{ height: `${heightPct}%` }}
                        title={`${MONTHS[i]}: ${level}/10`}
                      />
                      <span className="text-xs text-gray-500 hidden sm:block">{MONTHS[i]}</span>
                      <span className="text-xs text-gray-500 sm:hidden">{MONTHS[i].charAt(0)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-cyan-500 inline-block" /> Peak activity</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-cyan-300 inline-block" /> Moderate</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-300 inline-block" /> Low</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DIY Fails */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">Why DIY {pest.pest} Control Fails</h2>
            <p className="text-lg text-gray-600 mb-8">Store-bought products rarely solve the real problem. Here's why:</p>
            <div className="space-y-4">
              {pest.whyDiyFails.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold text-gray-600">{i + 1}</div>
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Treatment */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">How Selke Eliminates {pest.pestPlural}</h2>
            <p className="text-lg text-cyan-100 mb-8">Our proven, NC-climate-tested approach targets {pest.pest.toLowerCase()}s at every life stage:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {pest.treatment.map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/20">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <p className="text-xl font-semibold mb-2">Not happy? We come back — free.</p>
              <p className="text-cyan-100 mb-5">Every {pest.pest.toLowerCase()} treatment is backed by our 100% Selke Guarantee.</p>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                Claim $25 Off First Treatment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">What Charlotte Homeowners Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real customers — 5-star rated on Google</p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">{pest.pest} Control — Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {pest.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && <div className="px-6 pb-5 text-gray-600">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-6">Ready to Get Rid of {pest.pestPlural}?</h2>
            <p className="text-xl mb-4 text-cyan-100">New customers get $25 off their first treatment. No contracts. No hassle.</p>
            <p className="text-lg mb-10">Monday - Saturday: 8:00 AM - 8:00 PM EST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg shadow-xl">
                <Phone className="w-5 h-5" />704-728-0204
              </a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl">
                Claim $25 Off Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <FooterLogo className="h-20 mb-4" />
              <p className="text-gray-400 mb-3">Family-owned and locally operated. Protecting Charlotte Metro homes with professional, reliable pest control services.</p>
              <address className="text-gray-400 not-italic">
                <MapPin className="w-4 h-4 inline mr-2" />Based out of Mooresville, North Carolina
              </address>
            </div>
            <div>
              <h3 className="text-lg mb-4">Pest Control Services</h3>
              <ul className="space-y-2 text-gray-400">
                {PEST_LINKS.map(({ name, slug }) => (
                  <li key={slug}><a href={`/${slug}`} className="hover:text-cyan-400 transition-colors">{name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:704-728-0204" className="hover:text-cyan-400 transition-colors">704-728-0204</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a></li>
              </ul>
              <div className="mt-6">
                <button onClick={() => setIsLegalModalOpen(true)} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy & Terms</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Selke Pest Control. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>

      {/* Sticky bottom CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-2xl">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-semibold text-sm md:text-base text-center sm:text-left">
              🎉 New customer? Get <strong>$25 off</strong> your first {pest.pest.toLowerCase()} treatment
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />Call Now
              </a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cyan-900 transition-colors border border-white/30">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

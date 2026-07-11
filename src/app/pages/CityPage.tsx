import { Phone, Shield, Star, Bug, Leaf, Home, Award, Users, Clock, ChevronDown, MapPin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { QuoteFormModal } from '../components/QuoteFormModal';
import { LegalModal } from '../components/LegalModal';
import FooterLogo from '../components/FooterLogo';
import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';
import { CityData } from '../data/cityData';

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
  { name: 'Mosquito Control', slug: 'mosquito-control-charlotte-nc', emoji: '🦟' },
  { name: 'Ant Control', slug: 'ant-control-charlotte-nc', emoji: '🐜' },
  { name: 'Tick Control', slug: 'tick-control-charlotte-nc', emoji: '🕷️' },
  { name: 'Cockroach Control', slug: 'cockroach-control-charlotte-nc', emoji: '🪳' },
  { name: 'Spider Control', slug: 'spider-control-charlotte-nc', emoji: '🕸️' },
  { name: 'Wasp Control', slug: 'wasp-control-charlotte-nc', emoji: '🐝' },
  { name: 'Flea Control', slug: 'flea-control-charlotte-nc', emoji: '🐛' },
  { name: 'Rodent Control', slug: 'rodent-control-charlotte-nc', emoji: '🐭' },
];

interface CityPageProps {
  city: CityData;
}

export default function CityPage({ city }: CityPageProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [isPestsDropdownOpen, setIsPestsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePestsOpen, setMobilePestsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Selke Pest Control",
            "description": `Professional pest control services in ${city.name}, ${city.state} — general pest, mosquito, and flea/tick control.`,
            "url": `https://selkepestcontrol.com/${city.slug}`,
            "telephone": "+1-704-728-0204",
            "email": "sales@selkepestcontrol.com",
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedInPlace": { "@type": "State", "name": "North Carolina" }
            },
            "geo": { "@type": "GeoCoordinates", "latitude": city.latitude, "longitude": city.longitude },
            "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "08:00", "closes": "20:00" }]
          })
        }}
      />

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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">{city.name}, {city.state} — {city.county}</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">{city.heroHeadline}</h1>
            <p className="text-lg md:text-xl mb-4 text-gray-300 max-w-3xl mx-auto">{city.heroSubheadline}</p>
            <p className="text-base text-gray-400 mb-10">Family-owned • 15+ years experience • 100% satisfaction guarantee</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-500 text-white px-10 py-5 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get My Free Quote
              </button>
              <a href="tel:704-728-0204" className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl">
                <Phone className="w-5 h-5" />704-728-0204
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[{ icon: Shield, label: "Selke Guarantee" }, { icon: Home, label: "Pet & Family Safe" }, { icon: Star, label: "Licensed & Insured" }, { icon: Users, label: "Local Experts" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2"><Icon className="w-6 h-6 text-cyan-400" /></div>
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">Pest Control in {city.name}, {city.state}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{city.intro}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{city.geographyPest}</p>
        </div>
      </section>

      {/* Top Pests */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Top Pest Threats in {city.name}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Understanding what you're dealing with is the first step to effective protection</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {city.topPests.map((pest, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-5">
                  <Bug className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{pest.name}</h3>
                <p className="text-gray-600">{pest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">{city.name} Neighborhoods We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We know the specific pest challenges of every community in {city.name}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {city.neighborhoods.map((n, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-cyan-600" /></div>
                  <h3 className="text-lg font-semibold">{n.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{n.pestNote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services in {city.name}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive pest protection tailored to {city.name}'s specific pest environment</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Bug, title: "General Pest Control", desc: `Complete protection against the ants, roaches, spiders, and other common pests active in ${city.name}. Interior and exterior treatment with quarterly maintenance.` },
              { icon: Leaf, title: "Mosquito Control", desc: `Targeted barrier treatments that reduce mosquito populations by up to 96% — essential for ${city.name}'s warm, humid summers. Monthly seasonal service available.` },
              { icon: Home, title: "Flea & Tick Control", desc: `Protect your family and pets from fleas and ticks throughout ${city.name}'s warm season. Indoor and outdoor treatments with pet-safe formulations.` }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6"><Icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-2xl mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span><span>EPA-approved products</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span><span>Pet & family safe</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span><span>Selke Guarantee included</span></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pest-Specific Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4">Dealing with a Specific Pest in {city.name}?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We have dedicated treatment plans and expert resources for the most common pest problems in the Charlotte Metro area.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {PEST_LINKS.map(({ name, slug, emoji }) => (
              <a key={slug} href={`/${slug}`} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center hover:bg-cyan-50 hover:border-cyan-300 transition-all group hover:shadow-md">
                <div className="text-3xl mb-3">{emoji}</div>
                <p className="font-semibold text-gray-800 group-hover:text-cyan-700 text-sm leading-tight">{name}</p>
                <p className="text-xs text-cyan-500 mt-2 font-medium">Learn more →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Seasonal Pest Guide for {city.name}</h2>
            <p className="text-lg text-cyan-100 leading-relaxed mb-8">{city.seasonalTips}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { season: "Spring", tip: "Ant swarm season. Begin mosquito treatments as temperatures rise above 50°F." },
                { season: "Summer", tip: "Peak mosquito and tick season. Monthly barrier treatments provide the best protection." },
                { season: "Fall & Winter", tip: "Rodents seek warmth indoors. Perimeter inspection recommended before temperatures drop." }
              ].map(({ season, tip }) => (
                <div key={season} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl mb-2">{season}</h3>
                  <p className="text-cyan-100 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Selke */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Why {city.name} Homeowners Choose Selke</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">{city.whySelke}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Shield, title: "100% Guarantee", desc: "Pests return? We return — at no extra cost." },
                { icon: Award, title: "15+ Years", desc: "Over 15 years serving North Carolina families." },
                { icon: Home, title: "Pet Safe", desc: "EPA-approved, safe for your family and pets." },
                { icon: Users, title: "Local Team", desc: "Real local people, not a call center." },
                { icon: Clock, title: "Fast Response", desc: "Most quotes scheduled within 2–3 days." }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-cyan-600" /></div>
                  <h3 className="text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by Charlotte Metro families — 30 five-star reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Sarah M.", location: "Mooresville", text: "Finally found a pest control company I can trust! The technician was professional, thorough, and explained everything. No more ants in my kitchen!" },
              { name: "Mike R.", location: "Huntersville", text: "We bundle the mosquito and general pest service and it's been a game changer. We can actually enjoy our backyard again." },
              { name: "Jennifer L.", location: "Cornelius", text: "Best decision we made for our home. The Selke team is responsive, professional, and their treatments actually work. Worth every penny." }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">{city.name} Pest Control — Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {city.faqItems.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
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
            <h2 className="text-3xl md:text-5xl mb-6">Ready to Protect Your {city.name} Home?</h2>
            <p className="text-xl mb-8 text-cyan-100">Get your free quote today — most {city.name} homeowners are scheduled within 2–3 days</p>
            <p className="text-lg mb-10">Monday - Saturday: 8:00 AM - 8:00 PM EST</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:704-728-0204" className="bg-white text-cyan-700 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg shadow-xl">
                <Phone className="w-5 h-5" />704-728-0204
              </a>
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl">
                Get My Free Quote
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
    </div>
  );
}

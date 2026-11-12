import { Phone, Shield, Star, Bug, Leaf, Home, Award, Users, Clock, ChevronDown, MapPin, Mail, Menu, X } from 'lucide-react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { useEffect, useState } from 'react';
import { QuoteFormModal } from '../components/QuoteFormModal';
import { LegalModal } from '../components/LegalModal';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { CityData } from '../data/cityData';
import { citiesInCounty, getCountyForCitySlug, serviceCities } from '../data/serviceAreas';

interface CityPageProps {
  city: CityData;
}

export default function CityPage({ city }: CityPageProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const county = getCountyForCitySlug(city.slug);
  const canonical = `https://www.selkepestcontrol.com/${city.slug}`;
  const here = serviceCities.find(item => item.slug === city.slug);
  // Nearest other service cities by straight-line distance, for internal linking.
  const nearby = here
    ? serviceCities
        .filter(item => item.slug !== city.slug)
        .map(item => ({ ...item, d: Math.hypot(item.lat - here.lat, (item.lng - here.lng) * 0.82) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 6)
    : [];

  useEffect(() => {
    document.title = city.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', city.metaDescription);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
  }, [city, canonical]);

  return (
    <div className="min-h-screen bg-white">
      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": `Pest Control in ${city.name}, ${city.state}`,
                "serviceType": "Residential pest control",
                "url": canonical,
                "description": city.metaDescription,
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://www.selkepestcontrol.com/#business",
                  "name": "Selke Pest Control",
                  "telephone": "+1-704-728-0204",
                  "email": "sales@selkepestcontrol.com",
                  "url": "https://www.selkepestcontrol.com/",
                  "address": { "@type": "PostalAddress", "addressLocality": "Mooresville", "addressRegion": "NC", "addressCountry": "US" },
                  "openingHoursSpecification": [{
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                    "opens": "08:00",
                    "closes": "20:00"
                  }]
                },
                "areaServed": {
                  "@type": "City",
                  "name": `${city.name}, ${city.state}`,
                  "geo": { "@type": "GeoCoordinates", "latitude": city.latitude, "longitude": city.longitude },
                  "containedInPlace": { "@type": "AdministrativeArea", "name": `${city.county}, North Carolina` }
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.selkepestcontrol.com/" },
                  ...(county ? [{ "@type": "ListItem", "position": 2, "name": county.name, "item": `https://www.selkepestcontrol.com/${county.slug}` }] : []),
                  { "@type": "ListItem", "position": county ? 3 : 2, "name": `Pest Control ${city.name}, ${city.state}`, "item": canonical }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": city.faqItems.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } }))
              }
            ]
          })
        }}
      />

      <SiteHeader active="areas" />

      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-gray-50 py-3" aria-label="Breadcrumb">
        <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 text-sm text-gray-500">
          <li><a href="/" className="hover:text-cyan-600">Home</a></li>
          {county && (
            <>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li><a href={`/${county.slug}`} className="hover:text-cyan-600">{county.name}</a></li>
            </>
          )}
          <li aria-hidden="true" className="text-gray-300">/</li>
          <li className="font-medium text-gray-700" aria-current="page">{city.name}, {city.state}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">{city.name}, {city.state} — {county ? <a href={`/${county.slug}`} className="underline-offset-4 hover:underline">{city.county}</a> : city.county}</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">{city.heroHeadline}</h1>
            <p className="text-lg md:text-xl mb-4 text-gray-300 max-w-3xl mx-auto">{city.heroSubheadline}</p>
            <p className="text-base text-gray-400 mb-10">Family-owned • 15+ years experience • 100% satisfaction guarantee</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-cyan-500 text-white px-10 py-5 rounded-xl hover:bg-cyan-600 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get My Free Quote
              </button>
              <a href="tel:704-728-0204" className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl">
                <Phone className="w-5 h-5" />704-728-0204
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: "Selke Guarantee" },
                { icon: Home, label: "Pet & Family Safe" },
                { icon: Star, label: "Licensed & Insured" },
                { icon: Users, label: "Local Experts" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
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
          <div className="mb-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Quick answer</p>
            <p className="mt-2 text-lg leading-relaxed text-gray-800">
              Selke Pest Control is a family-owned, licensed pest control company (NC License# 2215P) based in Mooresville that serves {city.name}, {city.state} and {city.county}. We provide general pest control, mosquito control, flea and tick control, and rodent control with same-day service available, 75+ five-star Google reviews, and the Selke Guarantee. Call <a href="tel:704-728-0204" className="font-semibold text-cyan-700">704-728-0204</a> for a free quote.
            </p>
          </div>
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
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-600" />
                  </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
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
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-cyan-600" />
                  </div>
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
            <p className="text-xl text-gray-600">Real reviews from Charlotte Metro homeowners</p>
          </div>
          <ReviewsCarousel />
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
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  aria-expanded={openFAQ === i}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={openFAQ === i ? 'px-6 pb-5 text-gray-600' : 'hidden'}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby service areas */}
      {nearby.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-14" aria-labelledby="nearby-areas">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 id="nearby-areas" className="mb-2 text-2xl md:text-3xl">Pest control near {city.name}</h2>
            <p className="mb-6 text-gray-600">
              We also serve {county ? `${citiesInCounty(county.id).filter(item => item.slug !== city.slug).map(item => item.name).join(', ') || 'surrounding communities'} in ${county.name}` : 'surrounding communities'} and these nearby cities.
            </p>
            <div className="flex flex-wrap gap-3">
              {nearby.map(item => (
                <a key={item.slug} href={`/${item.slug}`} className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700">
                  Pest Control {item.name}, NC
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-cyan-800 text-white px-10 py-5 rounded-xl hover:bg-cyan-900 transition-all text-lg border-2 border-white shadow-xl"
              >
                Get My Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

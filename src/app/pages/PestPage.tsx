import { useState, useEffect } from 'react';
import { Phone, Shield, CheckCircle, ChevronDown, AlertTriangle, MapPin, X } from 'lucide-react';
import { QuoteFormModal } from '../components/QuoteFormModal';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import type { PestPageData } from '../data/pestData';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const cityLinks = [
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

interface Props {
  pest: PestPageData;
}

export default function PestPage({ pest }: Props) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    document.title = `${pest.heroHeadline} | Selke Pest Control`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = `${pest.heroSub} Serving Charlotte Metro, Mooresville & Lake Norman, NC. Call 704-728-0204 for a free quote.`;
    window.scrollTo(0, 0);

    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pest.slug]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pest.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${pest.pestPlural} Control`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Selke Pest Control",
      "telephone": "704-728-0204",
      "url": "https://selkepestcontrol.com",
      "address": { "@type": "PostalAddress", "addressLocality": "Mooresville", "addressRegion": "NC" }
    }
  };

  const maxActivity = Math.max(...pest.activityByMonth, 1);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* Sticky bottom bar on scroll */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-2xl border-t-2 border-cyan-500">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">{pest.heroHeadline}</p>
            <p className="text-xs text-gray-400">Free inspection · $25 off first treatment · Service within 3 days</p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a href="tel:704-728-0204" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /><span className="hidden sm:inline">704-728-0204</span>
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-semibold"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="Selke Pest Control Home">
            <div className="bg-cyan-500 text-white font-black px-3 py-1.5 rounded-lg text-sm tracking-wide">SELKE</div>
            <span className="text-gray-700 font-semibold hidden sm:block text-sm">Pest Control</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-cyan-500 transition-colors">Home</a>
            <a href="/#services" className="text-gray-600 hover:text-cyan-500 transition-colors">Services</a>
            <a href="/#areas" className="text-gray-600 hover:text-cyan-500 transition-colors">Service Areas</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:704-728-0204" className="hidden sm:flex items-center gap-1.5 text-sm text-gray-700 hover:text-cyan-500 transition-colors">
              <Phone className="w-4 h-4" />704-728-0204
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-semibold"
            >
              Free Quote
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100 py-2.5" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="hover:text-cyan-500 transition-colors" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <span className="text-gray-300">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-700 font-medium" itemProp="name">{pest.pestPlural} Control — Charlotte Metro, NC</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100">Charlotte Metro · Mooresville · Lake Norman, NC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{pest.heroHeadline}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">{pest.heroSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-cyan-500 text-white px-8 py-4 rounded-xl hover:bg-cyan-600 transition-all text-lg font-bold shadow-xl"
              >
                Get Free Quote — $25 Off First Visit
              </button>
              <a
                href="tel:704-728-0204"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-xl font-semibold"
              >
                <Phone className="w-5 h-5" />704-728-0204
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                'Free inspection included',
                'Service within 3 days',
                '100% satisfaction guarantee',
                'Pet & family safe products',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">{pest.intro}</p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Signs You Have a {pest.pest} Problem</h2>
            <p className="text-gray-600 max-w-xl mx-auto">These warning signs mean the problem is already established — and getting larger. Early action is always more effective and less expensive.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pest.signs.map((sign, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-200">
                    <AlertTriangle className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 leading-snug">{sign.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{sign.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Health & Property Risks</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Understanding what's actually at stake makes it clear why prompt professional treatment matters.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pest.risks.map((risk, i) => (
              <div key={i} className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{risk.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NC Species */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{pest.pestPlural} Found in the Charlotte Area</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Species identification determines treatment strategy. Not all {pest.pestPlural.toLowerCase()} are controlled the same way.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pest.ncSpecies.map((species, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3">{species.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{species.desc}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-amber-800 font-semibold">Risk: {species.threat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Activity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">{pest.pestPlural} in NC: Month-by-Month Activity</h2>
              <p className="text-gray-600">Peak season: <span className="text-cyan-600 font-bold">{pest.peakMonths}</span></p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-end gap-1.5 h-36 mb-3">
                {pest.activityByMonth.map((level, i) => {
                  const color = level >= 8 ? '#ef4444' : level >= 5 ? '#f97316' : level >= 2 ? '#eab308' : '#e5e7eb';
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end">
                      <div
                        className="w-full rounded-t-sm transition-all"
                        style={{
                          height: level > 0 ? `${(level / maxActivity) * 128}px` : '3px',
                          backgroundColor: color,
                          minHeight: '3px',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1.5">
                {MONTHS.map(m => (
                  <div key={m} className="flex-1 text-center text-xs text-gray-400 font-medium">{m}</div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 justify-center">
                {[['#ef4444','Peak'],['#f97316','High'],['#eab308','Moderate'],['#e5e7eb','Low/Dormant']].map(([color, label]) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm border border-gray-200" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-5 text-center leading-relaxed">{pest.seasonNote}</p>
          </div>
        </div>
      </section>

      {/* Why DIY Fails */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Why Store-Bought Solutions Fall Short</h2>
              <p className="text-gray-600">Before spending money on products that won't solve the problem, here's why consumer treatments consistently fail against {pest.pestPlural.toLowerCase()}.</p>
            </div>
            <div className="space-y-4">
              {pest.whyDiyFails.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How Selke Eliminates {pest.pestPlural}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Our targeted process addresses the root cause — not just what you can see on the surface.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-cyan-100 hidden md:block" />
              <div className="space-y-5">
                {pest.treatment.map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-md relative z-10">
                      {i + 1}
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 flex-1 border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">{step.step}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No-Brainer CTA */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-5">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">Zero-Risk Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solve This Problem This Week</h2>
                <p className="text-cyan-100 mb-7 leading-relaxed">We respond fast, treat thoroughly, and stand behind every visit. If pests return between treatments, we come back at no charge — that's our promise.</p>
                <div className="space-y-3">
                  {[
                    'Free inspection included with every visit',
                    '$25 off your first treatment — no coupon needed',
                    'Most homes treated within 3 days of your call',
                    '100% satisfaction guarantee — free re-treatment if needed',
                    'EPA-registered products, safe for pets & children',
                    'Local, family-owned — you talk to us directly',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-white text-cyan-700 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all text-lg font-bold shadow-xl text-center"
                >
                  Get Free Quote + $25 Off
                </button>
                <a
                  href="tel:704-728-0204"
                  className="bg-cyan-900/50 border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-cyan-900 transition-all text-lg flex items-center justify-center gap-2 font-semibold"
                >
                  <Phone className="w-5 h-5" />Call 704-728-0204
                </a>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-sm text-cyan-100 font-medium">Monday – Saturday · 8 AM – 8 PM</p>
                  <p className="text-xs text-cyan-200 mt-1">Same-week service almost always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Charlotte Homeowners Are Saying</h2>
            <p className="text-gray-600">Real reviews from real customers across the Charlotte Metro area</p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{pest.pestPlural} Control — Frequently Asked Questions</h2>
            <p className="text-gray-600">Straight answers to what Charlotte homeowners ask us most.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {pest.faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8 leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-200 ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed text-sm border-t border-gray-100 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Internal Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
            {pest.pestPlural} Control Across All of Charlotte Metro
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">Professional service in every community we serve</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {cityLinks.map(({ name, slug }) => (
              <a
                key={slug}
                href={`/${slug}`}
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-colors shadow-sm"
              >
                {name}, NC
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't see your city?{' '}
            <a href="tel:704-728-0204" className="text-cyan-600 hover:text-cyan-700 font-semibold">
              Call 704-728-0204
            </a>{' '}
            — we likely serve your area.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of {pest.pestPlural}?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Free inspection. $25 off your first treatment. Service within 3 days. If you're not satisfied, we come back free — no questions asked.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-cyan-500 text-white px-10 py-4 rounded-xl hover:bg-cyan-600 transition-all text-lg font-bold"
            >
              Get Free Quote
            </button>
            <a
              href="tel:704-728-0204"
              className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all text-lg flex items-center justify-center gap-2 font-semibold"
            >
              <Phone className="w-5 h-5" />704-728-0204
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800">
            <a href="/" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              ← Back to Selke Pest Control Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

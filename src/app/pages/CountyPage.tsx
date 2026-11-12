import { lazy, Suspense, useEffect, useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { ArrowRight, Bug, CheckCircle, ChevronDown, Home, Leaf, Mail, MapPin, Phone, Shield, Star } from 'lucide-react';
import { citiesInCounty, type ServiceCounty } from '../data/serviceAreas';

const QuoteFormModal = lazy(() =>
  import('../components/QuoteFormModal').then(module => ({ default: module.QuoteFormModal }))
);

const SERVICES = [
  { icon: Bug, title: 'General Pest Control', href: '/ant-control-charlotte-nc', desc: 'Quarterly interior and exterior protection from ants, spiders, cockroaches, and occasional invaders.' },
  { icon: Leaf, title: 'Mosquito Control', href: '/mosquito-control-charlotte-nc', desc: 'Monthly seasonal barrier treatments that target the shaded areas where mosquitoes rest.' },
  { icon: Home, title: 'Flea & Tick Control', href: '/tick-control-charlotte-nc', desc: 'Yard-edge, shade, and pet-area treatments that protect your family and pets.' },
  { icon: Shield, title: 'Rodent Control', href: '/rodent-control-charlotte-nc', desc: 'Inspection, exclusion, and monitoring to keep mice and rats out of your home.' },
];

export default function CountyPage({ county }: { county: ServiceCounty }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const cities = citiesInCounty(county.id);
  const canonical = `https://www.selkepestcontrol.com/${county.slug}`;
  const cityNames = cities.map(city => city.name).join(', ');

  useEffect(() => {
    document.title = `Pest Control ${county.name}, NC | ${cityNames} | Selke Pest Control`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', county.summary);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    window.scrollTo(0, 0);
  }, [county, canonical, cityNames]);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Pest Control in ${county.name}, NC`,
      serviceType: 'Residential pest control',
      url: canonical,
      description: county.summary,
      provider: { '@id': 'https://www.selkepestcontrol.com/#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${county.name}, North Carolina`,
        geo: { '@type': 'GeoCoordinates', latitude: county.lat, longitude: county.lng },
        containsPlace: cities.map(city => ({
          '@type': 'City',
          name: `${city.name}, NC`,
          url: `https://www.selkepestcontrol.com/${city.slug}`,
          geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.selkepestcontrol.com/' },
        { '@type': 'ListItem', position: 2, name: `${county.name} Pest Control`, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: county.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {isQuoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteFormModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </Suspense>
      )}

      <SiteHeader active="areas" />

      <nav className="border-b border-gray-200 bg-gray-50 py-3" aria-label="Breadcrumb">
        <ol className="container mx-auto flex items-center gap-2 px-4 text-sm text-gray-500">
          <li><a href="/" className="hover:text-cyan-600">Home</a></li>
          <li aria-hidden="true" className="text-gray-300">/</li>
          <li className="font-medium text-gray-700" aria-current="page">{county.name} Pest Control</li>
        </ol>
      </nav>

      <main>
        <section className="relative overflow-hidden bg-[#1a2428] px-4 py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_40%)]" aria-hidden="true" />
          <div className="container relative mx-auto max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-50">
              <MapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              {county.name}, North Carolina &middot; County seat: {county.seat}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Pest Control in {county.name}, NC</h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">{county.summary}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setIsQuoteModalOpen(true)} className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-cyan-400">
                Get Free Quote
              </button>
              <a href="tel:704-728-0204" className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-950 shadow-xl transition hover:bg-gray-100">
                <Phone className="h-5 w-5" aria-hidden="true" /> 704-728-0204
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16" aria-labelledby="county-cities">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 id="county-cities" className="mb-3 text-3xl md:text-4xl">{county.name} Cities We Serve</h2>
            <p className="mb-8 text-lg text-gray-600">Choose your city for local pest pressure, neighborhoods, and seasonal advice.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map(city => (
                <a key={city.slug} href={`/${city.slug}`} className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 transition hover:border-cyan-300 hover:bg-cyan-50">
                  <span>
                    <span className="block text-lg font-semibold text-gray-900">Pest Control {city.name}, NC</span>
                    <span className="text-sm text-gray-500">ZIP {city.zips.join(', ')}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-cyan-600 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl">Why pests thrive in {county.name}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{county.geography}</p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl">Most common pests</h2>
              <ul className="space-y-3">
                {county.pests.map(pest => (
                  <li key={pest} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600" aria-hidden="true" />
                    {pest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-3xl md:text-4xl">Pest control services in {county.name}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map(({ icon: Icon, title, href, desc }) => (
                <a key={title} href={href} className="rounded-2xl border border-gray-200 p-6 transition hover:border-cyan-300 hover:shadow-lg">
                  <Icon className="mb-4 h-8 w-8 text-cyan-600" aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </a>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-gray-600">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              Family-owned &middot; 75+ five-star Google reviews &middot; NC License# 2215P &middot; Selke Guarantee
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16" aria-labelledby="county-faq">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 id="county-faq" className="mb-8 text-3xl md:text-4xl">{county.name} pest control FAQ</h2>
            <div className="space-y-4">
              {county.faqs.map((faq, index) => (
                <div key={faq.q} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} aria-expanded={openFAQ === index} className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="pr-8 text-lg">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 text-cyan-600 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div className={openFAQ === index ? 'px-6 pb-5 text-gray-600' : 'hidden'}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

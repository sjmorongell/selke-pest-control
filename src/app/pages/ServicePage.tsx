import { ArrowRight, CalendarCheck, CheckCircle2, Phone, ShieldCheck, BadgeCheck } from 'lucide-react';
import { Breadcrumb, PageHero, PageShell } from '../components/PageShell';
import { CtaBand } from '../components/CtaBand';
import { FaqList } from '../components/FaqList';
import { ServiceCard } from '../components/ServiceCards';
import { SERVICE_ICONS, services, type Service } from '../data/services';

export default function ServicePage({ service }: { service: Service }) {
  const Icon = SERVICE_ICONS[service.icon];
  const others = services.filter(item => item.slug !== service.slug);

  return (
    <PageShell title={service.metaTitle} description={service.metaDescription} active="services">
      {openQuote => (
        <>
          <Breadcrumb items={[['Home', '/'], ['Services', '/services'], [service.name]]} />
          <PageHero eyebrow={<><Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />{service.name}</>} title={service.headline}>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">{service.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={openQuote} className="min-h-14 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-cyan-400">
                Get Free Quote
              </button>
              <a href="tel:704-728-0204" className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-100">
                <Phone className="h-5 w-5" aria-hidden="true" />
                704-728-0204
              </a>
            </div>
          </PageHero>

          <div className="border-b border-gray-100 bg-white">
            <dl className="container mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:grid-cols-3">
              {[
                [CalendarCheck, 'Service schedule', service.frequency],
                [ShieldCheck, 'Selke Guarantee', '100% satisfaction, or we come back'],
                [BadgeCheck, 'Licensed & insured', 'NC License# 2215P'],
              ].map(([FactIcon, label, value]) => {
                const I = FactIcon as typeof CalendarCheck;
                return (
                  <div key={label as string} className="flex items-start gap-3">
                    <I className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">{label as string}</dt>
                      <dd className="mt-1 text-sm font-medium text-gray-800">{value as string}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600">What&apos;s included</p>
              <h2 className="mb-10 text-3xl font-semibold text-gray-900 md:text-4xl">Every {service.shortName ?? service.name} visit</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {service.included.map(item => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-500" aria-hidden="true" />
                    <div>
                      <h3 className="mb-1.5 text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600">Pests covered</p>
              <h2 className="mb-8 text-3xl font-semibold text-gray-900 md:text-4xl">What we treat</h2>
              <ul className="flex flex-wrap gap-3">
                {service.pests.map(pest => (
                  <li key={pest.name}>
                    {pest.href ? (
                      <a href={pest.href} className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-5 py-2.5 font-medium text-cyan-800 ring-1 ring-cyan-100 transition-colors hover:bg-cyan-500 hover:text-white hover:ring-cyan-500">
                        {pest.name}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex rounded-full bg-gray-50 px-5 py-2.5 font-medium text-gray-700 ring-1 ring-gray-200">{pest.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-gray-50 py-16 md:py-20" aria-labelledby="service-faq-heading">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 id="service-faq-heading" className="mb-8 text-center text-3xl font-semibold text-gray-900 md:text-4xl">{service.name} FAQ</h2>
              <FaqList faqs={service.faqs} />
              <p className="mt-8 text-center text-gray-600">
                More questions? <a href="/faq" className="font-semibold text-cyan-700 hover:text-cyan-800">See all FAQs</a> or call <a href="tel:704-728-0204" className="font-semibold text-cyan-700 hover:text-cyan-800">704-728-0204</a>.
              </p>
            </div>
          </section>

          <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4">
              <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 md:text-4xl">More Services</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {others.slice(0, 3).map(item => <ServiceCard key={item.slug} service={item} />)}
              </div>
              <div className="mt-10 text-center">
                <a href="/services" className="inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-800">
                  View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <CtaBand onQuote={openQuote} title={`Get ${service.shortName ?? service.name} Started`} />
        </>
      )}
    </PageShell>
  );
}

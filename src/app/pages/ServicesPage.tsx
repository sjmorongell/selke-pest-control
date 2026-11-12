import { Phone, Shield } from 'lucide-react';
import { Breadcrumb, PageHero, PageShell } from '../components/PageShell';
import { CtaBand } from '../components/CtaBand';
import { ServiceCardGrid } from '../components/ServiceCards';

export default function ServicesPage() {
  return (
    <PageShell
      title="Pest Control Services in Charlotte & Lake Norman, NC | Selke Pest Control"
      description="General pest control, mosquito, flea and tick, rodent control, exclusion, and carpenter ant, fire ant, and carpenter bee control across Lake Norman and the Charlotte Metro."
      active="services"
    >
      {openQuote => (
        <>
          <Breadcrumb items={[['Home', '/'], ['Services']]} />
          <PageHero eyebrow={<><Shield className="h-4 w-4 text-cyan-400" aria-hidden="true" />Our Services</>} title="Pest Control Services for Charlotte-Area Homes">
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
              Selke Pest Control offers six residential services across Lake Norman and the Charlotte Metro: general pest control, mosquito control, flea and tick control, rodent control, exclusion work, and carpenter ant, fire ant, and carpenter bee control. Every plan is backed by the Selke Guarantee.
            </p>
            <a href="tel:704-728-0204" className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-gray-100">
              <Phone className="h-5 w-5" aria-hidden="true" />
              704-728-0204
            </a>
          </PageHero>
          <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <ServiceCardGrid />
            </div>
          </section>
          <CtaBand onQuote={openQuote} />
        </>
      )}
    </PageShell>
  );
}

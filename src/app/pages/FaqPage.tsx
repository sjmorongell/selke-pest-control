import { HelpCircle, Phone } from 'lucide-react';
import { Breadcrumb, PageHero, PageShell } from '../components/PageShell';
import { CtaBand } from '../components/CtaBand';
import { FaqList } from '../components/FaqList';
import { siteFaqs } from '../data/services';

export default function FaqPage() {
  return (
    <PageShell
      title="Pest Control FAQ | Selke Pest Control | Charlotte & Lake Norman, NC"
      description="Answers to common questions about Selke Pest Control: service areas, safety for kids and pets, scheduling, the Selke Guarantee, contracts, and pricing."
      active="faq"
    >
      {openQuote => (
        <>
          <Breadcrumb items={[['Home', '/'], ['FAQ']]} />
          <PageHero eyebrow={<><HelpCircle className="h-4 w-4 text-cyan-400" aria-hidden="true" />FAQ</>} title="Frequently Asked Questions">
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              Quick answers about our services, scheduling, safety, and the Selke Guarantee. Can&apos;t find what you need? Call{' '}
              <a href="tel:704-728-0204" className="font-semibold text-cyan-300 hover:text-cyan-200">704-728-0204</a>.
            </p>
          </PageHero>
          <section className="bg-gray-50 py-16 md:py-20" aria-label="Frequently asked questions">
            <div className="container mx-auto max-w-3xl px-4">
              <FaqList faqs={siteFaqs} />
              <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:flex-row">
                <p className="font-medium text-gray-800">Still have a question?</p>
                <a href="tel:704-728-0204" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call 704-728-0204
                </a>
              </div>
            </div>
          </section>
          <CtaBand onQuote={openQuote} />
        </>
      )}
    </PageShell>
  );
}

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q} className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? 'border-cyan-200 bg-white shadow-sm' : 'border-gray-200 bg-white'}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-gray-900 transition-colors hover:text-cyan-700"
              >
                {faq.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            <div className={isOpen ? 'px-6 pb-6 leading-relaxed text-gray-600' : 'hidden'}>{faq.a}</div>
          </div>
        );
      })}
    </div>
  );
}

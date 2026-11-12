import { Phone } from 'lucide-react';

export function CtaBand({ onQuote, title = 'Ready to Get Outside Again?' }: { onQuote: () => void; title?: string }) {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
        <p className="mb-2 text-xl text-cyan-100">Charlotte&apos;s hometown pest control, backed by a 100% guarantee and a mission to give back.</p>
        <p className="mb-8 text-sm text-cyan-200">Monday–Saturday &bull; 8:00 AM – 8:00 PM EST</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="tel:704-728-0204" className="flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-cyan-700 shadow-xl transition-all hover:bg-gray-100">
            <Phone className="h-5 w-5" aria-hidden="true" />
            704-728-0204
          </a>
          <button type="button" onClick={onQuote} className="rounded-xl border-2 border-white bg-cyan-800 px-10 py-5 text-lg text-white shadow-xl transition-all hover:bg-cyan-900">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

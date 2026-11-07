import { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowRight, CalendarCheck, CheckCircle, Phone, Shield, Star, Trophy } from 'lucide-react';
import { InstagramFeedSection } from '../components/InstagramFeedSection';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';

const QuoteFormModal = lazy(() =>
  import('../components/QuoteFormModal').then(module => ({ default: module.QuoteFormModal })),
);

export default function GiveawayThankYouPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    document.title = 'You’re Entered | Start Pest Control Today | Selke Pest Control';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'You are entered in the Selke Pest Control giveaway. Request a free quote and start protecting your home now while you wait for the winner announcement.',
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute(
      'href',
      'https://www.selkepestcontrol.com/giveaway-thank-you',
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {isQuoteOpen && (
        <Suspense fallback={null}>
          <QuoteFormModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
          />
        </Suspense>
      )}

      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" aria-label="Selke Pest Control home" className="rounded-lg bg-white px-3 py-2">
            <img
              src={newLogo}
              alt="Selke Pest Control"
              className="h-10 w-auto sm:h-12"
              width="1656"
              height="382"
            />
          </a>
          <a href="tel:7047280204" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">704-728-0204</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
          <div className="absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-950/40">
              <CheckCircle className="size-9" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Your Entry Is In</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Not Interested in Waiting to See If You Won?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Start protecting your home today. Request a free quote now, and if you are later confirmed as the giveaway winner, we will apply the eligible 12 months of free service to your account.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-lg font-bold text-slate-950 shadow-xl shadow-cyan-950/40 transition-colors hover:bg-cyan-300"
              >
                Get My Free Quote <ArrowRight className="size-5" aria-hidden="true" />
              </button>
              <a
                href="tel:7047280204"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-lg font-bold transition-colors hover:bg-white/10"
              >
                <Phone className="size-5" aria-hidden="true" /> Call 704-728-0204
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.04] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  step: '01',
                  title: 'Start service now',
                  text: 'Choose the qualifying pest protection plan that fits your home. There is no need to wait for the winner announcement.',
                },
                {
                  icon: Trophy,
                  step: '02',
                  title: 'Your entry stays active',
                  text: 'Starting service does not cancel your giveaway entry. Winner selection remains subject to the official giveaway rules.',
                },
                {
                  icon: CalendarCheck,
                  step: '03',
                  title: 'Win later? We credit it.',
                  text: 'If you are confirmed as the winner, the eligible 12 months of service will be credited or prorated on your account.',
                },
              ].map(({ icon: Icon, step, title, text }) => (
                <article key={step} className="rounded-2xl border border-white/10 bg-slate-900 p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-black tracking-widest text-slate-600">{step}</span>
                  </div>
                  <h2 className="mt-6 text-xl font-bold">{title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-400">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-cyan-400 p-7 text-slate-950 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
              <div>
                <h2 className="text-2xl font-black md:text-3xl">Protect your home without waiting.</h2>
                <p className="mt-2 max-w-2xl text-cyan-950/80">
                  Tell us what you are seeing, and our local team will follow up with service options for your home.
                </p>
              </div>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="mt-6 inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-7 py-3 font-bold text-white hover:bg-slate-800 md:mt-0"
              >
                Request a Quote <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-relaxed text-slate-500">
              Credit or proration applies only if the customer is confirmed as the official winner and only to the qualifying service identified in the official giveaway rules. Existing payments, plan eligibility, prize value, service area, and all other restrictions are governed by those rules.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 px-4 py-14 text-slate-950 sm:px-6 md:py-20" aria-label="Google reviews">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <div className="flex justify-center gap-1" aria-label="Five out of five stars">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="size-6 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Trusted Across Lake Norman
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                75+ Five-Star Reviews on Google
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                See why homeowners across Mooresville, Charlotte, and Lake Norman trust Selke with their homes.
              </p>
            </div>
            <ReviewsCarousel />
          </div>
        </section>

        <InstagramFeedSection />
      </main>

      <footer className="px-4 py-9 text-center text-sm text-slate-500">
        Selke Pest Control · Family-owned in Mooresville, NC · Serving Lake Norman and the Charlotte Metro
      </footer>
    </div>
  );
}

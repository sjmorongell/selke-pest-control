import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Gift, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import newLogo from '../../imports/Screenshot_2026-05-18_213802.png';

const SWEEP_WIDGET_ID = '103372-q3u9z8d2';
const SWEEP_WIDGET_SCRIPT = 'https://sweepwidget.com/w/j/w_init.js';
const SWEEP_WIDGET_HOSTED_URL = 'https://sweepwidget.com/c/103372-q3u9z8d2';

export default function GiveawayPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Win 12 Months of Pest Control | Selke Pest Control Giveaway';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Enter the Selke Pest Control giveaway for a chance to win 12 months of qualifying pest control service in the Charlotte Metro and Lake Norman area.',
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute(
      'href',
      'https://www.selkepestcontrol.com/giveaway',
    );

    const container = widgetRef.current;
    if (!container) return;

    container.replaceChildren();
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = SWEEP_WIDGET_SCRIPT;
    script.async = true;
    script.dataset.sweepWidgetLoader = 'true';
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fafc] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" aria-label="Selke Pest Control home">
            <img
              src={newLogo}
              alt="Selke Pest Control"
              className="h-12 w-auto sm:h-14"
              width="1656"
              height="382"
            />
          </a>
          <a
            href="tel:7047280204"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-400 hover:text-cyan-700"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Questions? 704-728-0204</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-6 md:py-20">
          <div className="absolute -left-24 top-0 size-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Sparkles className="size-4" aria-hidden="true" />
                The Selke Home Protection Giveaway
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                Win 12 Months of Pest Control
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Enter for your chance to enjoy a full year of qualifying pest control service from Lake Norman&apos;s hometown pest control team.
              </p>
              <a
                href="#enter"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition-colors hover:bg-cyan-300"
              >
                Enter the Giveaway <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <Gift className="size-7" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">A year of protection. One easy entry.</h2>
              <div className="mt-6 space-y-4">
                {[
                  'Family-owned and locally operated',
                  'Serving Lake Norman and the Charlotte Metro',
                  'Backed by the Selke satisfaction guarantee',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enter" className="scroll-mt-6 px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Enter Below</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Complete the Giveaway Form
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Follow the steps in the official entry form. Entry eligibility, prize details, dates, and complete terms are governed by the official rules shown in the widget.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 sm:p-6 md:p-8">
              <div
                id={SWEEP_WIDGET_ID}
                ref={widgetRef}
                className="sw_container min-h-[420px]"
                aria-label="Selke Pest Control giveaway entry form"
              />
              <noscript>
                <p className="p-6 text-center">
                  JavaScript is required for the embedded entry form.{' '}
                  <a className="font-bold text-cyan-700 underline" href={SWEEP_WIDGET_HOSTED_URL}>
                    Open the giveaway form here.
                  </a>
                </p>
              </noscript>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cyan-50 p-5 text-sm text-cyan-950">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-700" aria-hidden="true" />
              <p>
                Your entry is processed through SweepWidget. Selke Pest Control will use submitted information only as described in the giveaway rules and applicable privacy terms.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
        <p>Selke Pest Control · Mooresville, NC · 704-728-0204</p>
        <p className="mt-2">No purchase necessary to enter. See the official giveaway rules for eligibility, prize details, and restrictions.</p>
      </footer>
    </div>
  );
}

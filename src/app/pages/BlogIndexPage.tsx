import { useEffect, useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import {
  ArrowRight,
  BookOpen,
  Bug,
  Clock3,
  Home,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { blogIndexArticles, type BlogCategory } from '../data/blogIndexData';

const categories: Array<'All Articles' | BlogCategory> = [
  'All Articles',
  'Mosquitoes',
  'Outdoor Pests',
  'Home Protection',
];

const categoryIcon = {
  Mosquitoes: Bug,
  'Outdoor Pests': Sparkles,
  'Home Protection': Home,
};

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All Articles');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [featuredArticle, ...remainingArticles] = blogIndexArticles;
  const visibleArticles =
    activeCategory === 'All Articles'
      ? remainingArticles
      : blogIndexArticles.filter(article => article.category === activeCategory);

  useEffect(() => {
    const description =
      'Local pest control tips for Charlotte, Mooresville, and Lake Norman homeowners from Selke Pest Control.';
    document.title = 'Pest Control Blog | Selke Pest Control';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', 'https://www.selkepestcontrol.com/blog');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a
        href="#articles"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to articles
      </a>

      <SiteHeader active="blog" />

      <main>
        <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:py-28">
          <div className="absolute -right-20 -top-32 size-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-cyan-700/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <BookOpen className="size-4" aria-hidden="true" />
              Local answers from Lake Norman pest professionals
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              Practical pest advice for a more comfortable home.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Straightforward, locally relevant guides for homeowners across Charlotte, Mooresville,
              and the Lake Norman area.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-5 text-cyan-400" aria-hidden="true" />
                Advice from local professionals
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="size-5 text-cyan-400" aria-hidden="true" />
                {blogIndexArticles.length} homeowner guides
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Featured guide
            </p>
            <a
              href={`/blog/${featuredArticle.slug}`}
              className="group grid overflow-hidden rounded-3xl bg-cyan-700 shadow-xl shadow-cyan-950/10 transition-transform hover:-translate-y-1 md:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="relative flex min-h-64 items-end overflow-hidden bg-slate-900 p-8 md:min-h-96 md:p-10">
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#22d3ee_0,transparent_28%),radial-gradient(circle_at_80%_70%,#0e7490_0,transparent_35%)]" />
                <div className="relative">
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                    <Sparkles className="size-7" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
                    {featuredArticle.category}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 text-white md:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-cyan-100">
                  <span>{featuredArticle.publishDate}</span>
                  <span aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="size-4" aria-hidden="true" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-cyan-50">
                  {featuredArticle.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-bold">
                  Read the guide
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
        </section>

        <section id="articles" className="scroll-mt-24 px-4 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-7 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Pest control resources
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">All articles</h2>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      activeCategory === category
                        ? 'bg-slate-900 text-white'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700'
                    }`}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map(article => {
                const Icon = categoryIcon[article.category];
                return (
                  <article
                    key={article.slug}
                    className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {article.category}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
                      <time dateTime={article.datePublished}>{article.publishDate}</time>
                      <span aria-hidden="true">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                      <a href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-slate-600">{article.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-700">
                      Read article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-cyan-700 px-4 py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-semibold text-cyan-200">Need help with a pest problem?</p>
              <h2 className="mt-2 text-3xl font-bold">Get a straightforward recommendation.</h2>
              <p className="mt-3 max-w-2xl text-cyan-50">
                Talk with Selke Pest Control about your home, your yard, and what you are seeing.
              </p>
            </div>
            <a
              href="tel:7047280204"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-cyan-800 shadow-lg transition-colors hover:bg-cyan-50"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call 704-728-0204
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

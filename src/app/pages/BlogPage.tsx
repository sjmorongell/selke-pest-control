import { useParams, Link } from 'react-router';
import { ArrowLeft, Phone, CheckSquare, Minus } from 'lucide-react';
import { blogArticles } from '../utils/blogContent';

interface BlogMeta {
  title: string;
  metaDescription: string;
  contentKey: keyof typeof blogArticles;
  publishDate: string;
  readTime: string;
}

const blogMeta: Record<string, BlogMeta> = {
  'mosquito-season-charlotte-nc': {
    title: 'Mosquito Season in Charlotte, NC: What You Need to Know',
    metaDescription: 'When does mosquito season start in Charlotte NC? Learn peak dates, breeding sites, and professional control options for the Lake Norman area.',
    contentKey: 'mosquitoSeason',
    publishDate: 'June 2025',
    readTime: '4 min read',
  },
  'tick-protection-charlotte-nc': {
    title: 'Tick Protection Guide for Charlotte & Lake Norman Homeowners',
    metaDescription: 'Protect your family and pets from ticks in Charlotte NC. Expert guide to tick species, yard treatment, and professional flea & tick service.',
    contentKey: 'tickProtection',
    publishDate: 'May 2025',
    readTime: '5 min read',
  },
  'spring-ants-charlotte-nc': {
    title: 'Why Ants Invade Charlotte Homes Every Spring (And How to Stop Them)',
    metaDescription: 'Spring ant invasions in Charlotte NC explained. Learn why DIY sprays fail and what professional ant control actually does differently.',
    contentKey: 'springAnts',
    publishDate: 'March 2025',
    readTime: '5 min read',
  },
  'cockroaches-in-clean-homes-charlotte-nc': {
    title: 'Why Clean Homes Get Cockroaches (And How to Stop Them)',
    metaDescription: 'Even spotless Charlotte homes get cockroaches. Discover how roaches get inside and the professional treatment approach that actually works.',
    contentKey: 'cleanHomesRoaches',
    publishDate: 'April 2025',
    readTime: '5 min read',
  },
  'diy-vs-professional-pest-control-nc': {
    title: 'DIY vs. Professional Pest Control in NC: An Honest Comparison',
    metaDescription: 'Honest DIY vs professional pest control comparison for NC homeowners. Real cost numbers, time investment, and when each option makes sense.',
    contentKey: 'diyVsProfessional',
    publishDate: 'February 2025',
    readTime: '6 min read',
  },
  'fall-rodent-prevention-charlotte-nc': {
    title: 'Fall Rodent Prevention Checklist for Charlotte Homeowners',
    metaDescription: 'Complete fall rodent prevention checklist for Charlotte NC. Step-by-step guide to seal your home before mice and rats move in for winter.',
    contentKey: 'fallRodents',
    publishDate: 'September 2025',
    readTime: '6 min read',
  },
};

function renderContent(text: string) {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    if (!para.trim()) return null;

    if (para.startsWith('**') && para.endsWith('**') && !para.slice(2).includes('**')) {
      const heading = para.slice(2, -2);
      return (
        <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {heading}
        </h2>
      );
    }

    if (para.split('\n').every(line => line.trim().startsWith('•') || line.trim() === '')) {
      const items = para.split('\n').filter(l => l.trim().startsWith('•'));
      return (
        <ul key={i} className="my-4 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700">
              <Minus className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
              <span>{item.replace(/^•\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (para.split('\n').every(line => line.trim().startsWith('□') || line.trim() === '')) {
      const items = para.split('\n').filter(l => l.trim().startsWith('□'));
      return (
        <ul key={i} className="my-4 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700">
              <CheckSquare className="w-4 h-4 text-green-500 mt-1 shrink-0" />
              <span>{item.replace(/^□\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    const lines = para.split('\n');
    return (
      <div key={i} className="my-4">
        {lines.map((line, j) => {
          if (!line.trim()) return null;

          if (/^\d+\.\s/.test(line)) {
            const parts = line.replace(/^\d+\.\s/, '').split(/\*\*(.+?)\*\*/);
            return (
              <div key={j} className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="font-bold text-cyan-600 shrink-0">{line.match(/^\d+/)![0]}.</span>
                <span>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                  )}
                </span>
              </div>
            );
          }

          const parts = line.split(/\*\*(.+?)\*\*/);
          return (
            <p key={j} className="text-gray-700 leading-relaxed">
              {parts.map((part, k) =>
                k % 2 === 1 ? <strong key={k}>{part}</strong> : part
              )}
            </p>
          );
        })}
      </div>
    );
  });
}

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? blogMeta[slug] : undefined;

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link to="/" className="text-cyan-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const content = blogArticles[meta.contentKey];

  return (
    <>
      <title>{meta.title} | Selke Pest Control</title>
      <meta name="description" content={meta.metaDescription} />
      <link rel="canonical" href={`https://www.selkepestcontrol.com/blog/${slug}`} />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <a
              href="tel:7047280204"
              className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              704-728-0204
            </a>
          </div>
        </header>

        {/* Hero */}
        <div className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-cyan-300 text-sm font-medium mb-3">
              Selke Pest Control Blog &bull; {meta.publishDate} &bull; {meta.readTime}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {meta.title}
            </h1>
            <p className="text-cyan-100 text-lg max-w-2xl">{meta.metaDescription}</p>
          </div>
        </div>

        {/* Article */}
        <main className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            {renderContent(content)}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to Protect Your Home?</h2>
            <p className="text-cyan-100 mb-6">
              Lake Norman&apos;s hometown pest control team. Family-owned, locally operated, 100% guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7047280204"
                className="bg-white text-cyan-700 font-bold px-8 py-3 rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 704-728-0204
              </a>
              <a
                href="mailto:sales@selkepestcontrol.com"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link to="/" className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-2 justify-center">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-sm py-6 text-center mt-10">
          <p>&copy; {new Date().getFullYear()} Selke Pest Control &mdash; Mooresville, NC &mdash; 704-728-0204</p>
          <p className="mt-1">Serving the Lake Norman area &bull; Licensed &amp; Insured &bull; 100% Satisfaction Guarantee</p>
        </footer>
      </div>
    </>
  );
}

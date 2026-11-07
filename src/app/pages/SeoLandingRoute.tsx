import CityPage from './CityPage';
import PestPage from './PestPage';
import { cityData } from '../data/cityData';
import { pestData } from '../data/pestData';

export default function SeoLandingRoute({ slug }: { slug: string }) {
  const city = cityData.find(item => item.slug === slug);
  if (city) return <CityPage city={city} />;

  const pest = pestData.find(item => item.slug === slug);
  if (pest) return <PestPage pest={pest} />;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-center text-white">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-slate-300">The page you requested may have moved.</p>
      <a href="/" className="mt-8 inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-bold text-slate-950">Return to Selke Pest Control</a>
    </main>
  );
}

import CityPage from './CityPage';
import CountyPage from './CountyPage';
import PestPage from './PestPage';
import { cityData, type CityData } from '../data/cityData';
import newCityData from '../data/newCityData.json';
import { pestPages } from '../data/pestData';
import { getCountyBySlug } from '../data/serviceAreas';

const allCities: CityData[] = [...cityData, ...(newCityData as CityData[])];

export default function SeoLandingRoute({ slug }: { slug: string }) {
  const city = allCities.find(item => item.slug === slug);
  if (city) return <CityPage city={city} />;

  const county = getCountyBySlug(slug);
  if (county) return <CountyPage county={county} />;

  const pest = pestPages.find(item => item.slug === slug);
  if (pest) return <PestPage pest={pest} />;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-center text-white">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-slate-300">The page you requested may have moved.</p>
      <a href="/" className="mt-8 inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-bold text-slate-950">Return to Selke Pest Control</a>
    </main>
  );
}

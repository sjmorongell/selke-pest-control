import ServicePage from './ServicePage';
import SeoLandingRoute from './SeoLandingRoute';
import { getServiceBySlug } from '../data/services';

export default function ServiceRoute({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  return service ? <ServicePage service={service} /> : <SeoLandingRoute slug={`services/${slug}`} />;
}

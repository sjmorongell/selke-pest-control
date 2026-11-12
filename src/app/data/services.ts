import type { ComponentType, SVGProps } from 'react';
import { Bug, Hammer, PawPrint, Rat, Wind } from 'lucide-react';
import { BeeIcon } from '../components/icons';
import registry from './services.json';
import faqRegistry from './faqs.json';

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  tileName?: string;
  icon: keyof typeof SERVICE_ICONS;
  summary: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  frequency: string;
  included: { title: string; desc: string }[];
  pests: { name: string; href?: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_ICONS = { bug: Bug, wind: Wind, paw: PawPrint, rat: Rat, hammer: Hammer, bee: BeeIcon } satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export const services = registry as Service[];
export const siteFaqs = faqRegistry as { q: string; a: string }[];

export const serviceHref = (service: Service) => `/services/${service.slug}`;
export const getServiceBySlug = (slug: string) => services.find(service => service.slug === slug);

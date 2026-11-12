import registry from './serviceAreas.json';

export interface ServiceCity {
  name: string;
  slug: string;
  county: string;
  lat: number;
  lng: number;
  zips: string[];
  hq?: boolean;
}

export interface ServiceCounty {
  id: string;
  name: string;
  seat: string;
  slug: string;
  lat: number;
  lng: number;
  summary: string;
  geography: string;
  pests: string[];
  faqs: { q: string; a: string }[];
  cities: string[];
}

export const serviceCities = registry.cities as ServiceCity[];
export const serviceCounties = registry.counties as ServiceCounty[];

export const getCountyById = (id: string) => serviceCounties.find(county => county.id === id);
export const getCountyBySlug = (slug: string) => serviceCounties.find(county => county.slug === slug);
export const getCountyForCitySlug = (slug: string) => {
  const city = serviceCities.find(item => item.slug === slug);
  return city ? getCountyById(city.county) : undefined;
};
export const citiesInCounty = (countyId: string) => serviceCities.filter(city => city.county === countyId);

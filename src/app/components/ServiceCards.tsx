import { ArrowRight, Check } from 'lucide-react';
import { SERVICE_ICONS, serviceHref, services, type Service } from '../data/services';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = SERVICE_ICONS[service.icon];
  return (
    <a
      href={serviceHref(service)}
      className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5"
    >
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/20">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">{service.name}</h3>
      <p className="mb-5 text-gray-600">{service.summary}</p>
      <ul className="mb-6 space-y-2 text-sm text-gray-600">
        {service.features.map(feature => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </a>
  );
}

export function ServiceCardGrid({ exclude }: { exclude?: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {services.filter(service => service.slug !== exclude).map(service => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}

/** Compact homepage tiles: icon + name, each linking to its service page. */
export function ServiceTileGrid() {
  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
      {services.map(service => {
        const Icon = SERVICE_ICONS[service.icon];
        return (
          <li key={service.slug}>
            <a
              href={serviceHref(service)}
              className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-white px-4 py-7 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5 md:flex-row md:justify-start md:px-6 md:text-left"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-600/20 transition-transform group-hover:scale-105">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="flex-1 font-semibold leading-snug text-gray-900">{service.tileName ?? service.name}</span>
              <ArrowRight className="hidden h-5 w-5 shrink-0 text-cyan-500 transition-transform group-hover:translate-x-1 md:block" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

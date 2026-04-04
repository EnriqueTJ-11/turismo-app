import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import { type SiteDetail } from "@/types/siteDetail";

interface SiteDetailHeroProps {
  site: SiteDetail;
}

const SiteDetailHero: React.FC<SiteDetailHeroProps> = ({ site }) => {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <Image
        src={site.heroImage}
        alt={site.name}
        title={site.name}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
      <button
        type="button"
        className="absolute top-8 left-8 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all cursor-pointer"
        title="Volver"
      >
        <Icon name="arrow_back" />
      </button>
      <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 pb-10 lg:px-12 pt-16 text-white">
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary text-xs font-bold uppercase tracking-wider">
              {site.type}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
              Capacidad: {site.capacityPerDay}
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              {site.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-base sm:text-lg">
              <Icon name="location_on" className="text-primary" />
              <span className="font-medium">{site.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteDetailHero;

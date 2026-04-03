import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import { type SiteCatalogItem } from "@/types/siteCatalog";

interface SiteCardProps {
  site: SiteCatalogItem;
}

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 grid grid-cols-1 md:grid-cols-[180px,1fr] cursor-pointer">
      <div className="relative h-56 md:h-full md:min-h-40 overflow-hidden">
        <Image
          src={site.image}
          alt={site.name}
          title={site.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {site.type}
        </span>
      </div>
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-slate-900 mb-1">{site.name}</h2>
        <div className="flex items-center text-slate-500 text-sm mb-3">
          <Icon name="location_on" className="text-sm mr-1" />
          <span>{site.location}</span>
        </div>
        <p className="text-slate-500 text-sm line-clamp-3 mb-6">
          {site.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <button
            type="button"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors cursor-pointer flex items-center gap-2"
            title={`Ver ${site.name}`}
          >
            <Icon name="visibility" />
            Ver
          </button>
        </div>
      </div>
    </article>
  );
};

export default SiteCard;

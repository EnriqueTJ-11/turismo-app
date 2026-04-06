import React from "react";
import SiteCard from "@/components/features/sitios/molecules/SiteCard";
import { type SiteCatalogItem } from "@/types/siteCatalog";

interface SitesGridProps {
  sites: SiteCatalogItem[];
  total: number;
  rangeStart: number;
  rangeEnd: number;
  isLoading?: boolean;
}

const SitesGrid: React.FC<SitesGridProps> = ({
  sites,
  total,
  rangeStart,
  rangeEnd,
  isLoading,
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-slate-600 font-medium">
          {isLoading ? (
            "Cargando sitios..."
          ) : (
            <>
              Mostrando{" "}
              <span className="text-slate-900 font-bold">
                {rangeStart} - {rangeEnd}
              </span>{" "}
              de{" "}
              <span className="text-slate-900 font-bold">{total}</span> sitios
              en Caquetá
            </>
          )}
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
        {!isLoading && sites.length === 0 && (
          <div className="col-span-full text-center text-slate-500">
            No encontramos sitios con esos filtros.
          </div>
        )}
      </section>
    </>
  );
};

export default SitesGrid;

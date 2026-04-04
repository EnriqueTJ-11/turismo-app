import SiteCard from "@/components/features/sitios/molecules/SiteCard";
import { getSiteCatalog } from "@/services/siteCatalog";

const SitesGrid = async () => {
  const sites = await getSiteCatalog();

  const total = 12;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-slate-600 font-medium">
          Mostrando <span className="text-slate-900 font-bold">{total}</span>{" "}
          sitios en Caquetá
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </section>
    </>
  );
};

export default SitesGrid;

import TourCard from "@/components/features/planes/molecules/TourCard";
import { getPlanCatalog } from "@/services/planCatalog";
import Icon from "@/components/shared/atoms/Icon";

const SiteDetailRelatedPlans = async () => {
  const plans = await getPlanCatalog();
  const featuredPlans = plans.slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Planes que visitan este sitio
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Experiencias curadas para aventureros conscientes.
            </p>
          </div>
          <button
            type="button"
            className="group text-primary font-bold flex items-center gap-2 cursor-pointer"
            title="Ver todos los planes"
          >
            Ver todos los planes
            <Icon
              name="arrow_forward"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlans.map((plan) => (
            <TourCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteDetailRelatedPlans;

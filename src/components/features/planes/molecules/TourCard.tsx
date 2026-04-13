"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import { type PlanCatalogItem } from "@/types/planCatalog";
import { useRouter } from "next/navigation";
import { extractPlanSlug } from "@/utils/planId";

interface TourCardProps {
  plan: PlanCatalogItem;
  onToggleFavorite?: (id: string) => void;
}

const TourCard: React.FC<TourCardProps> = ({ plan, onToggleFavorite }) => {
  const router = useRouter();
  const handleNavigate = () => {
    const slug = extractPlanSlug(plan.id);
    router.push(`/planes/${slug}`);
  };

  return (
    <div
      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
      role="link"
      tabIndex={0}
      title="Ver detalle del plan"
      onClick={handleNavigate}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleNavigate();
        }
      }}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={plan.image}
          alt={plan.title}
          title={plan.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {plan.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
            <Icon name="star" className="text-[12px]" fill />
            {plan.badge}
          </div>
        )}
        <div className="absolute top-4 right-4">
          <button
            className={`bg-white/60 backdrop-blur-md px-1.5 py-px rounded-full transition-colors cursor-pointer ${
              plan.isFavorite
                ? "text-red-500"
                : "text-slate-800 hover:text-red-500"
            }`}
            type="button"
            aria-pressed={plan.isFavorite}
            title={
              plan.isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
            }
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite?.(plan.id);
            }}
          >
            <Icon name="favorite" className="mt-1" fill={plan.isFavorite} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1 text-xs font-semibold drop-shadow-md">
            <Icon name="location_on" className="text-sm" />
            {plan.location}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
            {plan.title}
          </h3>
          <p className="text-primary font-extrabold text-lg">{plan.price}</p>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
          {plan.description}
        </p>
        <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-3 items-center gap-0">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 font-bold">
              Duración
            </span>
            <span className="text-xs font-bold">{plan.duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 font-bold">
              Viajeros
            </span>
            <span className="text-xs font-bold flex items-center gap-1 text-slate-700">
              <Icon name="person" className="text-xs" />
              {plan.capacityMax ?? "N/D"}
            </span>
          </div>
          <button
            className="bg-primary/10 hover:bg-primary hover:text-white text-primary px-3 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-0.5 w-full cursor-pointer"
            type="button"
            onClick={(event) => event.stopPropagation()}
          >
            <Icon name="event_available" className="text-base" />
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

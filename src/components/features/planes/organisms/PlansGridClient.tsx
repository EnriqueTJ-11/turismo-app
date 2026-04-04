"use client";

import React from "react";
import TourCard from "@/components/features/planes/molecules/TourCard";
import { type PlanCatalogItem } from "@/types/planCatalog";

interface PlansGridClientProps {
  initialPlans: PlanCatalogItem[];
  total: number;
}

const PlansGridClient: React.FC<PlansGridClientProps> = ({
  initialPlans,
  total,
}) => {
  const [plans, setPlans] = React.useState(initialPlans);

  const handleToggleFavorite = (id: string) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id ? { ...plan, isFavorite: !plan.isFavorite } : plan
      )
    );
  };

  return (
    <div className="flex-1">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-slate-600 font-medium">
          Mostrando <span className="text-slate-900 font-bold">{total}</span>{" "}
          planes de aventura en Caquetá
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500">
            Ordenar por:
          </span>
          <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
            <option>Más populares</option>
            <option>Menor precio</option>
            <option>Más nuevos</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <TourCard
            key={plan.id}
            plan={plan}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansGridClient;

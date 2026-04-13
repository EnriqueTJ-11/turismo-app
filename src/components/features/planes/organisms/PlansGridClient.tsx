"use client";

import React from "react";
import TourCard from "@/components/features/planes/molecules/TourCard";
import { type PlanCatalogItem } from "@/types/planCatalog";

interface PlansGridClientProps {
  plans: PlanCatalogItem[];
  total: number;
  rangeStart: number;
  rangeEnd: number;
  sortOrder: string;
  onSortChange: (value: string) => void;
  onToggleFavorite?: (id: string) => void;
}

const PlansGridClient: React.FC<PlansGridClientProps> = ({
  plans,
  total,
  rangeStart,
  rangeEnd,
  sortOrder,
  onSortChange,
  onToggleFavorite,
}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-slate-600 font-medium">
          Mostrando{" "}
          <span className="text-slate-900 font-bold">
            {rangeStart} - {rangeEnd}
          </span>{" "}
          de{" "}
          <span className="text-slate-900 font-bold">
            {total}
          </span>{" "}
          planes de aventura en Caquetá
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500">
            Ordenar por:
          </span>
          <select
            className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="popular">Más populares</option>
            <option value="price">Menor precio</option>
            <option value="newest">Más nuevos</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <TourCard
            key={plan.id}
            plan={plan}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansGridClient;

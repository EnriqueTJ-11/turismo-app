"use client";

import React from "react";
import Icon from "@/components/shared/atoms/Icon";

interface CapacityOption {
  key: string;
  label: string;
  min: number;
  max: number;
}

interface SitesFiltersProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  types: string[];
  municipalities: string[];
  selectedType: string;
  selectedMunicipality: string;
  selectedCapacity: string;
  capacityOptions: CapacityOption[];
  sortOrder: string;
  onTypeChange: (value: string) => void;
  onMunicipalityChange: (value: string) => void;
  onCapacityChange: (value: string) => void;
  onSortChange: (value: string) => void;
  isLoading?: boolean;
}

const SitesFilters: React.FC<SitesFiltersProps> = ({
  searchValue,
  onSearchChange,
  types,
  municipalities,
  selectedType,
  selectedMunicipality,
  selectedCapacity,
  capacityOptions,
  sortOrder,
  onTypeChange,
  onMunicipalityChange,
  onCapacityChange,
  onSortChange,
  isLoading = false,
}) => {
  return (
    <section className="mb-12 space-y-6">
      <div className="relative max-w-2xl">
        <Icon
          name="search"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Buscar por nombre o lugar..."
          className="w-full pl-12 pr-4 py-4 rounded-xl border-none ring-1 ring-slate-200 bg-white focus:ring-2 focus:ring-primary shadow-sm transition-all text-slate-900"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative">
          <select
            className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all"
            value={selectedType}
            onChange={(event) => onTypeChange(event.target.value)}
            disabled={isLoading}
          >
            <option value="">Tipo de destino</option>
            {types.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm"
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all"
            value={selectedMunicipality}
            onChange={(event) => onMunicipalityChange(event.target.value)}
            disabled={isLoading}
          >
            <option value="">Municipio</option>
            {municipalities.map((municipio) => (
              <option key={municipio} value={municipio}>
                {municipio}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm"
          />
        </div>
        <div className="relative">
          <select
            className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all"
            value={selectedCapacity}
            onChange={(event) => onCapacityChange(event.target.value)}
            disabled={isLoading}
          >
            <option value="">Capacidad diaria</option>
            {capacityOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm font-medium text-slate-500">
            Ordenar por:
          </span>
          <select
            className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value)}
            disabled={isLoading}
          >
            <option value="popularidad">Popularidad</option>
            <option value="capacidad">Capacidad</option>
            <option value="nombre">Nombre</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SitesFilters;

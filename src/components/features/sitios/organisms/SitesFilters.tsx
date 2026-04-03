import React from "react";
import Icon from "@/components/shared/atoms/Icon";

const SitesFilters: React.FC = () => {
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
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative">
          <select className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all">
            <option>Tipo de destino</option>
            <option>Río</option>
            <option>Cascada</option>
            <option>Parque Natural</option>
            <option>Reserva Natural</option>
            <option>Recurso Cultural</option>
            <option>Ecosistema</option>
          </select>
          <Icon
            name="expand_more"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm"
          />
        </div>
        <div className="relative">
          <select className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all">
            <option>Municipio</option>
            <option>Florencia</option>
            <option>San Vicente del Caguán</option>
            <option>Belén de los Andaquíes</option>
            <option>Morelia</option>
          </select>
          <Icon
            name="expand_more"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm"
          />
        </div>
        <div className="relative">
          <select className="appearance-none pl-4 pr-10 py-2.5 rounded-full bg-slate-100 border-none ring-1 ring-slate-200 text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-primary transition-all">
            <option>Capacidad diaria</option>
            <option>1-10 personas</option>
            <option>11-30 personas</option>
            <option>31-50 personas</option>
            <option>Más de 50</option>
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
          <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer">
            <option>Popularidad</option>
            <option>Capacidad</option>
            <option>Nombre</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SitesFilters;

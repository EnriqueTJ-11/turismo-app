import React from "react";
import Icon from "@/components/shared/atoms/Icon";

const PlansFilters: React.FC = () => {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 space-y-8 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Filtros</h3>
          <button
            className="text-xs font-semibold text-primary uppercase tracking-wider"
            type="button"
          >
            Reiniciar todo
          </button>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="attach_money" className="text-primary text-lg" />
            Rango de precios
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="px-3 py-2 text-xs font-medium border border-slate-200 rounded-full bg-primary/10 border-primary/30 text-primary"
              type="button"
            >
              Económico
            </button>
            <button
              className="px-3 py-2 text-xs font-medium border border-slate-200 rounded-full hover:border-primary transition-all"
              type="button"
            >
              Lujo
            </button>
          </div>
          <input
            className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            type="range"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="schedule" className="text-primary text-lg" />
            Duración
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 text-sm cursor-pointer group">
              <input
                className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                type="checkbox"
              />
              <span className="group-hover:text-primary transition-colors">
                1-2 días
              </span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer group">
              <input
                defaultChecked
                className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                type="checkbox"
              />
              <span className="group-hover:text-primary transition-colors">
                3-5 días
              </span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer group">
              <input
                className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                type="checkbox"
              />
              <span className="group-hover:text-primary transition-colors">
                6+ días
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="fitness_center" className="text-primary text-lg" />
            Dificultad
          </label>
          <select className="w-full rounded-full border-slate-200 bg-slate-50 text-sm focus:border-primary focus:ring-primary">
            <option>Todas las dificultades</option>
            <option>Fácil / Familiar</option>
            <option>Moderada</option>
            <option>Desafiante</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="kayaking" className="text-primary text-lg" />
            Tipo de actividad
          </label>
          <div className="flex flex-wrap gap-2">
            {["Senderismo", "Cascadas", "Avistamiento de aves", "Cultural"].map(
              (label) => (
                <button
                  key={label}
                  className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer hover:bg-primary/20 hover:text-primary transition-all"
                  type="button"
                >
                  {label}
                </button>
              ),
            )}
          </div>
        </div>

        <button
          className="w-full bg-primary text-white font-bold py-3 rounded-full shadow-lg shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
          type="button"
        >
          <Icon name="filter_alt" className="text-lg" />
          Aplicar filtros
        </button>
      </div>
    </aside>
  );
};

export default PlansFilters;

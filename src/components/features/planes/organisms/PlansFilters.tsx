"use client";

import React from "react";
import Icon from "@/components/shared/atoms/Icon";

interface DurationOption {
  key: string;
  label: string;
  min: number;
  max: number;
}

interface PlansFiltersProps {
  priceMin: number;
  priceMax: number;
  priceValue: number;
  onPriceChange: (value: number) => void;
  durationOptions: DurationOption[];
  selectedDurations: string[];
  onToggleDuration: (key: string) => void;
  municipalities: string[];
  selectedMunicipalities: string[];
  onToggleMunicipality: (value: string) => void;
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (value: string) => void;
  onReset: () => void;
  onApply?: () => void;
}

const PlansFilters: React.FC<PlansFiltersProps> = ({
  priceMin,
  priceMax,
  priceValue,
  onPriceChange,
  durationOptions,
  selectedDurations,
  onToggleDuration,
  municipalities,
  selectedMunicipalities,
  onToggleMunicipality,
  categories,
  selectedCategories,
  onToggleCategory,
  onReset,
  onApply,
}) => {
  const [sliderValue, setSliderValue] = React.useState(priceValue);
  const debounceRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setSliderValue(priceValue);
  }, [priceValue]);

  React.useEffect(() => {
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }
    debounceRef.current = window.setTimeout(() => {
      onPriceChange(sliderValue);
    }, 300);
    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [sliderValue, onPriceChange]);

  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }),
    [],
  );

  const safeMax = Math.max(priceMax, priceMin);
  const safeValue = Math.min(Math.max(sliderValue, priceMin), safeMax);
  const step = Math.max(1000, Math.round((safeMax - priceMin) / 100) || 1);

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 space-y-8 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Filtros</h3>
          <button
            className="text-xs font-semibold text-primary uppercase tracking-wider"
            type="button"
            onClick={onReset}
          >
            Reiniciar todo
          </button>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="attach_money" className="text-primary text-lg" />
            Rango de precios
          </label>
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>{formatter.format(priceMin)}</span>
            <span>{formatter.format(safeMax)}</span>
          </div>
          <div className="relative pt-6">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xs font-semibold text-slate-700">
              {formatter.format(safeValue)}
            </span>
            <input
              className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              type="range"
              min={priceMin}
              max={safeMax}
              step={step}
              value={safeValue}
              onChange={(event) => setSliderValue(Number(event.target.value))}
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="schedule" className="text-primary text-lg" />
            Duración
          </label>
          <div className="space-y-2">
            {durationOptions.map((option) => (
              <label
                key={option.key}
                className="flex items-center gap-3 text-sm cursor-pointer group"
              >
                <input
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                  type="checkbox"
                  checked={selectedDurations.includes(option.key)}
                  onChange={() => onToggleDuration(option.key)}
                />
                <span className="group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="location_city" className="text-primary text-lg" />
            Municipio
          </label>
          <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
            {municipalities.length === 0 ? (
              <span className="text-xs text-slate-500">
                Sin municipios disponibles
              </span>
            ) : (
              municipalities.map((label) => (
                <label
                  key={label}
                  className="flex items-center gap-3 text-sm cursor-pointer group"
                >
                  <input
                    className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                    type="checkbox"
                    checked={selectedMunicipalities.includes(label)}
                    onChange={() => onToggleMunicipality(label)}
                  />
                  <span className="group-hover:text-primary transition-colors">
                    {label}
                  </span>
                </label>
              ))
            )}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold flex items-center gap-2">
            <Icon name="kayaking" className="text-primary text-lg" />
            Tipo de destino
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.length === 0 ? (
              <span className="text-xs text-slate-500">
                Sin categorías disponibles
              </span>
            ) : (
              categories.map((label) => {
                const isActive = selectedCategories.includes(label);
                return (
                  <button
                    key={label}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-all ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-slate-100 hover:bg-primary/20 hover:text-primary"
                    }`}
                    type="button"
                    onClick={() => onToggleCategory(label)}
                  >
                    {label}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <button
          className="w-full bg-primary text-white font-bold py-3 rounded-full shadow-lg shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
          type="button"
          onClick={onApply}
        >
          <Icon name="filter_alt" className="text-lg" />
          Aplicar filtros
        </button>
      </div>
    </aside>
  );
};

export default PlansFilters;

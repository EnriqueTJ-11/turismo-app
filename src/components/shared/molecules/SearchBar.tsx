"use client";

import React, { useState } from "react";
import Icon from "@/components/shared/atoms/Icon";
import Button from "@/components/shared/atoms/Button";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = "" }) => {
  const router = useRouter();
  const [destino, setDestino] = useState("");
  const [fechas, setFechas] = useState("");
  const [viajeros, setViajeros] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destino) params.append("destino", destino);
    if (fechas) params.append("fechas", fechas);
    if (viajeros) params.append("viajeros", viajeros);
    router.push(`/planes?${params.toString()}`);
  };

  return (
    <div className={`w-full max-w-5xl bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 ${className}`}>
      <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
        <Icon name="location_on" className="text-primary" />
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] font-bold uppercase text-slate-600">Destino</span>
          <input
            className="w-full border-0 p-0 text-sm font-semibold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
            placeholder="¿A dónde quieres ir?"
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
        <Icon name="calendar_today" className="text-primary" />
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] font-bold uppercase text-slate-600">Fechas</span>
          <input
            className="w-full border-0 p-0 text-sm font-semibold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
            placeholder="Seleccionar fechas"
            type="text"
            value={fechas}
            onChange={(e) => setFechas(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center gap-3 px-6 py-3">
        <Icon name="group" className="text-primary" />
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] font-bold uppercase text-slate-600">Viajeros</span>
          <input
            className="w-full border-0 p-0 text-sm font-semibold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
            placeholder="Personas"
            type="text"
            value={viajeros}
            onChange={(e) => setViajeros(e.target.value)}
          />
        </div>
      </div>

      <Button
        className="w-full md:w-auto px-10 py-4 rounded-full text-base font-bold normal-case tracking-normal shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
        onClick={handleSearch}
        type="button"
      >
        <Icon name="search" className="text-base" />
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;

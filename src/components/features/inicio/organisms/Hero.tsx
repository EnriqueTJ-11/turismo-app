"use client";

import React, { useState } from "react";
import Icon from "@/components/shared/atoms/Icon";
import Button from "@/components/shared/atoms/Button";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
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
    <section className="relative h-[90vh] sm:h-[85vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6aB1OqFsG8iGytQuO0egF3B0bKBfpBOOPUgucjEZsQF_C29aXAs250nRCqTowYlR5YST7RoQ0sPNEiWUySv_-vOGT0bAwo-NJSckOjK8luPe6JV91KXnxy0g9tHbrY5bpSSdymFd6udL5qYgiCelDClo4xtYLod-BZwqGDsJhj7w8Zuvdhak-yA9F7Y0pvkzD2Bd4voVVI8J1yrI7y-jtkXRBvqBD50I1StK3NahD_YV2fo1ng7iW5FIWu2n7Cd-Ro7-oh6UNpJo')",
        }}
        role="img"
        aria-label="Lush green Amazon rainforest river and waterfall landscape"
      />

      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mb-12 mt-7 sm:mt-0">
          <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Descubre el Corazón del&nbsp;
            <span className="text-primary">Caquetá</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Aventuras inolvidables en las selvas y ríos indómitos del Caquetá,
            Colombia. Tu portal hacia lo inexplorado.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 w-full flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
            <Icon name="location_on" className="text-primary" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] font-bold uppercase text-slate-600">
                Destino
              </span>
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
              <span className="text-[10px] font-bold uppercase text-slate-600">
                Fechas
              </span>
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
              <span className="text-[10px] font-bold uppercase text-slate-600">
                Viajeros
              </span>
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
      </div>
    </section>
  );
};

export default Hero;

'use client';

import React, { useState } from 'react';
import Icon from '@/components/shared/atoms/Icon';
import Button from '@/components/shared/atoms/Button';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();
  const [destino, setDestino] = useState('');
  const [fechas, setFechas] = useState('');
  const [viajeros, setViajeros] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destino) params.append('destino', destino);
    if (fechas) params.append('fechas', fechas);
    if (viajeros) params.append('viajeros', viajeros);
    router.push(`/planes?${params.toString()}`);
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-white">
      {/* Background container removed in favor of solid white */}

      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-slate-900 text-5xl md:text-8xl font-black leading-tight tracking-tighter drop-shadow-sm">
            Descubre el Corazón del&nbsp;<span className="text-primary italic">Caquetá</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            Aventuras inolvidables en las selvas y ríos indómitos del Caquetá, Colombia. Tu portal hacia lo inexplorado.
          </p>
        </div>

        {/* Search Bar Molecule */}
        <div className="w-full max-w-5xl bg-white p-3 md:p-4 rounded-3xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center gap-3 border border-slate-200">
          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-slate-100 group transition-all">
            <Icon name="location_on" className="text-primary text-2xl group-hover:scale-110" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Destino</span>
              <input
                className="w-full border-0 p-0 text-md font-bold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                placeholder="¿A dónde quieres ir?"
                type="text"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-slate-100  group transition-all">
            <Icon name="calendar_today" className="text-primary text-2xl group-hover:scale-110" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Fechas</span>
              <input
                className="w-full border-0 p-0 text-md font-bold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                placeholder="Seleccionar fechas"
                type="text"
                value={fechas}
                onChange={(e) => setFechas(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 md:border-r border-slate-100 group transition-all">
            <Icon name="group" className="text-primary text-2xl group-hover:scale-110" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Viajeros</span>
              <input
                className="w-full border-0 p-0 text-md font-bold focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                placeholder="Personas"
                type="text"
                value={viajeros}
                onChange={(e) => setViajeros(e.target.value)}
              />
            </div>
          </div>

          <Button
            className="w-full md:w-auto px-12 py-5 rounded-full shadow-2xl shadow-primary/40 hover:scale-105"
            onClick={handleSearch}
          >
            Buscar Aventuras
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const ReservationsHeader: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-2">
          Mis Reservas
        </h1>
        <p className="text-slate-500 max-w-lg">
          Gestiona tus próximas expediciones y revive tus aventuras pasadas por
          el corazón de la Amazonía colombiana.
        </p>
      </div>
      <div className="inline-flex p-1 bg-slate-100 rounded-xl">
        <button
          type="button"
          className="px-6 py-2.5 text-sm font-bold rounded-lg bg-white shadow-sm text-primary transition-all cursor-pointer"
        >
          Próximas
        </button>
        <button
          type="button"
          className="px-6 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
        >
          Anteriores
        </button>
      </div>
    </header>
  );
};

export default ReservationsHeader;

import React from "react";
import Image from "next/image";

const PlansPromo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 py-12 px-8 md:px-16 flex flex-col md:flex-row items-center gap-8 border border-primary/20">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDchLvYm7b7XDP1fSPwAp77RIhjC587VguzfP6-rs1yNZXx2AHbUVyUZNrXSfUgrBusgfcMbUWja7liZEWPUZInGgyGl7yqMEdP_Q0jHpqg-CFedO5J5M_0CYEYU_H4SMAXrVhUh-nwOKHl9Psv3Svi7cGO6twAas8Gy5LGE7Odm705L_tn8Ie-E2lwQIrBQYxFtrt7bYErifcWyMeInrHNkc1owWdEDuBzWeq2lDNPGCBWd2uro6499Xr2qn-KEuk4zoh8RtVRntY"
            alt="Bosque amazónico"
            title="Bosque amazónico"
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex-1">
          <h2 className="text-3xl font-black text-white mb-4">
            ¿Planeas una aventura en grupo?
          </h2>
          <p className="text-slate-200 text-lg mb-6">
            Obtén tarifas especiales para retiros corporativos o expediciones
            estudiantiles. Nos encargamos de la logística desde el aeropuerto de
            Florencia.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
              type="button"
            >
              Solicitar cotización
            </button>
            <button
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
              type="button"
            >
              Descargar guía
            </button>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-64 h-64 shrink-0 rounded-xl overflow-hidden shadow-2xl rotate-3">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEQ01iq-iVdnf-Ihu5o2mrVzPbMkdkbZYOzWTKT9unckdXbtilRyvLTek3JZM69MIyw0G-dFi7nv75Ga9s8RQ89I23kvB6gZwmEatLYd3_Ur34acJaKCKc6t5HuABnzV_jB36QRBHU4bWmrBN9oa58dugLZKEKgqYMTz_iibBdHU2mxQOJmL_GTTqL-Plvdxxk1ePz7_VNDigAjr3-80N6ydkwbeb1u5Y6w18MKwv_jj1lAES-68Q2LiWGbWa570oX4WRWYQUE0kQ"
            alt="Tucán"
            title="Tucán"
            fill
            sizes="256px"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PlansPromo;

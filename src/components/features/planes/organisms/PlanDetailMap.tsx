"use client";

import React from "react";
import Icon from "@/components/shared/atoms/Icon";
import Button from "@/components/shared/atoms/Button";
import PlanDetailMapClient from "@/components/features/planes/organisms/PlanDetailMapClient";

const PlanDetailMap: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <Icon name="location_on" className="text-primary" />
        Ubicación del destino
      </h2>
      <div className="relative z-0 w-full h-100 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
        <PlanDetailMapClient />
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-white p-6 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-primary/10 px-2 py-1 rounded-full text-primary">
              <Icon name="explore" className="mt-1" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Cañón de las Dalias</h4>
              <p className="text-sm text-slate-500">
                Florencia, Caquetá, Colombia
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                1.6144° N, 75.6117° W
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            className="w-full normal-case tracking-normal text-sm py-3 cursor-pointer"
          >
            <Icon name="directions" className="text-lg" />
            Cómo llegar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlanDetailMap;

import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import { type ReservationDetail } from "@/types/reservationDetail";

interface ReservationDetailPlanProps {
  plan: ReservationDetail["plan"];
}

const ReservationDetailPlan: React.FC<ReservationDetailPlanProps> = ({
  plan,
}) => {
  return (
    <section className="bg-white rounded-xl overflow-hidden shadow-sm border border-primary/5">
      <div className="h-64 overflow-hidden relative cursor-crosshair">
        <Image
          src={plan.image}
          alt={plan.imageAlt}
          title={plan.imageAlt}
          fill
          sizes="100vw"
          className="object-cover cursor-crosshair"
        />
      </div>
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              {plan.title}
            </h2>
            <p className="text-slate-500 leading-relaxed">{plan.description}</p>
          </div>
          <div className="text-right">
            <span className="block text-primary font-black text-xl">
              {plan.pricePerPerson}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Precio p/p
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-center gap-2 text-slate-500">
            <Icon name="schedule" className="text-primary" />
            <span className="text-sm font-semibold">{plan.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Icon name="calendar_today" className="text-primary" />
            <span className="text-sm font-semibold">{plan.dates}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationDetailPlan;

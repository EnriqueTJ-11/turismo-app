import React from "react";
import Icon from "@/components/shared/atoms/Icon";
import { type ReservationDetailItinerary } from "@/types/reservationDetail";

interface ReservationDetailItineraryProps {
  items: ReservationDetailItinerary[];
}

const ReservationDetailItinerary: React.FC<ReservationDetailItineraryProps> = ({
  items,
}) => {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
        <Icon name="route" className="text-primary" />
        Cronograma de Actividades
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={`${item.title}-${index}`} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/10">
                <Icon name={item.icon} />
              </div>
              <div
                className={`w-0.5 ${
                  index === items.length - 1
                    ? "h-12 bg-transparent"
                    : "h-full bg-slate-200"
                } mt-2`}
              ></div>
            </div>
            <div className="flex-1 bg-white p-5 rounded-xl border border-primary/5 shadow-sm group-hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.time}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Duración: {item.duration} • Atractivo: {item.attraction}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReservationDetailItinerary;

import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";
import { type ReservationDetailAttraction } from "@/types/reservationDetail";

interface ReservationDetailAttractionProps {
  attraction: ReservationDetailAttraction;
}

const ReservationDetailAttraction: React.FC<
  ReservationDetailAttractionProps
> = ({ attraction }) => {
  return (
    <section className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
      <h3 className="font-black text-slate-900 mb-4">Atractivo Principal</h3>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 relative">
          <Image
            src={attraction.image}
            alt={attraction.imageAlt}
            title={attraction.imageAlt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary leading-tight">
            {attraction.name}
          </h4>
          <div className="flex items-center gap-1 text-slate-500">
            <Icon name="location_on" className="text-sm" />
            <span className="text-sm">{attraction.location}</span>
          </div>
          <a
            href={attraction.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-xs font-bold text-primary underline underline-offset-4 uppercase tracking-tighter"
            title="Ver en el mapa"
          >
            Ver en el mapa
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReservationDetailAttraction;

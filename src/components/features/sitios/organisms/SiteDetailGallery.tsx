import React from "react";
import Image from "next/image";

interface SiteDetailGalleryProps {
  images: string[];
}

const SiteDetailGallery: React.FC<SiteDetailGalleryProps> = ({ images }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Galería de la selva
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-150">
        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative cursor-crosshair">
          <Image
            src={images[0]}
            alt="Cascada principal del destino"
            title="Cascada principal del destino"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-crosshair"
          />
        </div>
        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden relative cursor-crosshair">
          <Image
            src={images[1]}
            alt="Dosel selvático con rayos de sol"
            title="Dosel selvático con rayos de sol"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-crosshair"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative cursor-crosshair">
          <Image
            src={images[2]}
            alt="Fauna tropical en la reserva"
            title="Fauna tropical en la reserva"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-crosshair"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative cursor-crosshair">
          <Image
            src={images[3]}
            alt="Vegetación exuberante del Caquetá"
            title="Vegetación exuberante del Caquetá"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-crosshair"
          />
        </div>
      </div>
    </section>
  );
};

export default SiteDetailGallery;

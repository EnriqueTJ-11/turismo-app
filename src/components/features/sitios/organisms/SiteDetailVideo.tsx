import React from "react";
import Image from "next/image";
import Icon from "@/components/shared/atoms/Icon";

interface SiteDetailVideoProps {
  cover: string;
}

const SiteDetailVideo: React.FC<SiteDetailVideoProps> = ({ cover }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Experiencia inmersiva
      </h2>
      <div className="relative aspect-video rounded-4xl overflow-hidden bg-slate-100 flex items-center justify-center group cursor-pointer">
        <Image
          src={cover}
          alt="Vista cinematográfica del destino"
          title="Vista cinematográfica del destino"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="z-10 w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Icon name="play_arrow" className="text-4xl font-fill" />
        </div>
        <div className="absolute bottom-6 left-6 z-10 text-white font-medium">
          Video promocional: Un viaje al corazón del Caquetá
        </div>
      </div>
    </section>
  );
};

export default SiteDetailVideo;

import React from "react";
import Image from "next/image";

const SitesHero: React.FC = () => {
  return (
    <section className="relative h-64 w-full overflow-hidden flex items-center bg-slate-900">
      <div className="absolute inset-0 opacity-70">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBwTnuiGsMb3EBMuTDQlRIV5PgZ-tG3WRP36LRpYyO-L-j0SGpyVJFToZTpVRW68vdtvgG-_JaaEXcxTIfwM2Y8da8zApmpyHtkZuc2nrgnb5yB9lUMl_lA4pNOQV22mFk7oeO4SkZlsBiF-BP16sjjWmgArHFuNbBP1AIL5Kg4zcwCBMh4xLRuvqviQ8cLBaYoizInL05C-k_y-qycA1VGAjNKu7R2ZkXbsbGIKwVAsMJLCyasOhRx0DKFctnMzOeIHUg0BtTCWdA"
          alt="Paisaje selvático del Caquetá"
          title="Paisaje selvático del Caquetá"
          fill
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Sitios y destinos en Caquetá
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
          Descubre la biodiversidad y la riqueza natural del corazón de la
          Amazonía colombiana. Aventuras auténticas en ecosistemas únicos.
        </p>
      </div>
    </section>
  );
};

export default SitesHero;

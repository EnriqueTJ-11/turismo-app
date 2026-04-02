import React from "react";
import Icon from "@/components/shared/atoms/Icon";

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxnl6JlaU7j0kiMxtS4aZPGnG7uAU4t2juu3EaDfMBEI_HdP9rkXclSouUgUoBgDgreo6AD8kr7KEt-n1wMKnPxHVYemeKH9a1I2Y_fcCMBBwwJp_lC_S1bQtKHBde-8hykTS36a6KT8h5RuPsNMTO2GK3GSUhppqj01bQmZAGtJgcff6Uw8r2v030Xwy2i3xTjkuYhPSePlgm7nIBNH5c7pbBGHxM6As1I-uowK4noOmOwgXHLGlS0XKxTLxWfT5sNNnt7izXNy4')",
        }}
        role="img"
        aria-label="Adventure activity in Rio Hacha, Caquetá"
      />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <Icon name="mail" className="text-primary text-[192px] leading-none mb-4" />
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para la aventura?
          </h4>
          <p className="text-white/90 mb-8">
            Suscríbete para recibir ofertas exclusivas y guías de viaje
            directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="flex-1 rounded-full px-6 py-4 border border-slate-200 bg-white focus:ring-primary focus:border-primary"
              placeholder="Tu correo electrónico"
              type="email"
            />
            <button
              className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center gap-2"
              type="button"
            >
              <Icon name="mail" className="text-base" />
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

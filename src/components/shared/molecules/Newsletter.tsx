import React from 'react';
import Icon from '@/components/shared/atoms/Icon';
import Button from '@/components/shared/atoms/Button';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary/5 dark:bg-primary/5 py-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex p-5 rounded-3xl bg-primary/10 text-primary shadow-xl shadow-primary/5">
            <Icon name="mail" className="text-5xl" />
          </div>
          <h4 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter uppercase" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.05)' }}>
            ¿Listo para la aventura?
          </h4>
          <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Suscríbete para recibir ofertas exclusivas y guías de viaje directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white dark:bg-slate-900 rounded-3xl sm:rounded-full shadow-2xl border border-slate-100 dark:border-slate-800 transition-shadow hover:shadow-primary/5">
            <input 
              className="flex-1 rounded-full px-8 py-5 border-0 bg-transparent text-lg font-bold focus:ring-0 dark:text-white placeholder:text-slate-400" 
              placeholder="Tu correo electrónico" 
              type="email" 
            />
            <Button className="px-12 py-5 rounded-full shadow-lg shadow-primary/20 bg-primary hover:scale-[1.02]">
              Suscribirme
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

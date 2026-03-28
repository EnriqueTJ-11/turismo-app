import React from 'react';
import Logo from '@/components/shared/atoms/Logo';

const LoginBranding: React.FC = () => {
  return (
    <div className="relative hidden w-full lg:flex lg:w-1/2 xl:w-3/5 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAItsInyQFnTJcBTt_xU0q1d4ZiX_JuAPmtU_kBF_gyJgd-QYg6m8VZ5i0wvtpSoqy2ZqGTZq6hmmp3FPWtza0ObhloaI9tj8OKbXGUMTybcOMboT2HW8hFEmoTEFijA4CMVf4vmAVwxIUuPBUH_pupI0N21RCxd-KY1B5f3tUtrwJ3vLvQrppodik0okTV_d5HYUNhCvoGKTpijmwxXPUsQWs1tGWMPNcbQcQNPsYQ0SVKXQ1Pd7SASaSFSa3fTVZb9mx-9uVH-NE')"
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-12 text-white">
        <Logo variant="primary" className="p-2 backdrop-blur-md rounded-xl bg-white/10" />

        <div className="max-w-xl space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            Embárcate en tu viaje <span className="text-primary italic">Caqueteño</span>.
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-md drop-shadow-sm leading-relaxed">
            Experimenta la belleza pura de las cascadas y el alma verde profunda del paraíso oculto de Colombia.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img
                    alt="Explorador"
                    className="h-full w-full object-cover"
                    src={`https://i.pravatar.cc/150?u=explorer${i}`}
                  />
                </div>
              ))}
              <div className="h-8 w-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[8px] font-bold shadow-lg">
                +5K
              </div>
            </div>
            <p className="text-xs font-bold tracking-wide uppercase">Únete a más de 5,000 aventureros</p>
          </div>
        </div>

        <div className="flex gap-4 text-[10px] font-semibold uppercase tracking-widest opacity-60">
          <span>Explora</span>
          <span>•</span>
          <span>Preserva</span>
          <span>•</span>
          <span>Disfruta</span>
        </div>
      </div>
    </div>
  );
};

export default LoginBranding;

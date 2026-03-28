import React from 'react';
import LoginForm from '../organisms/LoginForm';
import LoginBranding from '../organisms/LoginBranding';
import Logo from '@/components/shared/atoms/Logo';
import Link from 'next/link';

const LoginTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-background-light overflow-x-hidden">
      {/* Immersive Nature Image (Left Side) */}
      <LoginBranding />

      {/* Login Form Section (Right Side) */}
      <div className="flex flex-1 flex-col items-center justify-center relative bg-background-light max-h-screen overflow-hidden">
        <div className="w-full flex justify-center py-12 px-6 lg:px-20 xl:px-32">
          {/* Mobile Logo Branding */}
          <div className="absolute top-8 left-0 right-0 flex flex-col items-center lg:hidden">
            <Logo variant="primary" />
            <h2 className="mt-2 text-xl font-bold text-slate-900 uppercase tracking-tight">Explora Caquetá</h2>
          </div>

          <LoginForm />
        </div>

        {/* Footer links */}
        <div className="mt-auto w-full py-6 border-t border-slate-200 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-widest text-slate-700 transition-opacity hover:opacity-100">
          <div className="flex gap-4">
            <Link className="hover:text-primary transition-colors" href="#">Política de Privacidad</Link>
            <span className="text-slate-400">/</span>
            <Link className="hover:text-primary transition-colors" href="#">Términos de Servicio</Link>
            <span className="text-slate-400">/</span>
            <Link className="hover:text-primary transition-colors" href="#">Centro de Ayuda</Link>
          </div>
          <span className="text-slate-300"></span>
          <span className="text-slate-600 font-black">© 2026 Explora Caquetá</span>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;

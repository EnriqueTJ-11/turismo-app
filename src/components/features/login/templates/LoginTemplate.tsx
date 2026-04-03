import React from "react";
import LoginForm from "../organisms/LoginForm";
import LoginBranding from "../organisms/LoginBranding";
import Logo from "@/components/shared/atoms/Logo";
import Link from "next/link";

const LoginTemplate: React.FC = () => {
  const year = new Date().getFullYear();

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
            <h2 className="mt-2 text-xl font-bold text-slate-900 uppercase tracking-tight">
              Amaturis
            </h2>
          </div>
          <h1 className="sr-only">Acceso a Amaturis</h1>

          <LoginForm />
        </div>

        {/* Footer links */}
        <div className="mt-auto w-full py-6 border-t border-slate-200 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-widest text-slate-700 transition-opacity hover:opacity-100">
          <div className="flex gap-4">
            <Link
              className="hover:text-primary transition-colors"
              href="#"
              title="Política de privacidad"
            >
              Política de Privacidad
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              className="hover:text-primary transition-colors"
              href="#"
              title="Términos de servicio"
            >
              Términos de Servicio
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              className="hover:text-primary transition-colors"
              href="#"
              title="Centro de ayuda"
            >
              Centro de Ayuda
            </Link>
          </div>
          <span className="text-slate-300"></span>
          <span className="text-slate-600 font-black">© {year} Amaturis</span>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;

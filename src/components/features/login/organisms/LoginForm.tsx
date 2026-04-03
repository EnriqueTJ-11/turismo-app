"use client";

import React, { useState } from "react";
import Input from "@/components/shared/atoms/Input";
import Button from "@/components/shared/atoms/Button";
import Icon from "@/components/shared/atoms/Icon";
import SocialButtons from "../molecules/SocialButtons";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center lg:text-left">
        <h2 className="text-center text-2xl font-black text-slate-950 uppercase tracking-tight">
          Bienvenido
        </h2>
        <p className="mt-1 text-sm text-slate-600 font-bold text-center lg:text-left">
          Ingresa tus datos para acceder a tu panel
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <SocialButtons />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-400"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-light px-2 text-slate-600 font-bold uppercase tracking-widest text-[10px]">
              O continúa con tu correo
            </span>
          </div>
        </div>

        <form action="#" className="space-y-4" method="POST">
          <Input
            id="email"
            label="Correo o nombre de usuario"
            placeholder="aventurero.amazonia@gmail.com"
            type="text"
            required
            className="px-2 py-2.5 font-medium border-slate-400 focus:border-primary transition-colors"
          />

          <Input
            id="password"
            label="Contraseña"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            required
            className="px-2 py-2.5 font-medium border-slate-400 focus:border-primary transition-colors"
            icon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="rounded-full text-slate-500 hover:text-slate-900 transition-colors"
                title={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                <Icon name={showPassword ? "visibility_off" : "visibility"} />
              </button>
            }
          />

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-400 text-primary focus:ring-primary cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-900 font-bold cursor-pointer whitespace-nowrap"
              >
                Recordarme
              </label>
            </div>
            <Link
              href="#"
              className="text-sm font-bold text-primary hover:text-primary transition-all underline-offset-4 hover:underline whitespace-nowrap"
              title="Recuperar contraseña"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full shadow-xl py-3.5 mt-2"
          >
            Iniciar aventura
          </Button>
        </form>

        <p className="text-center text-sm text-slate-800 font-bold">
          ¿Nuevo en la selva?{" "}
          <Link
            href="#"
            className="text-primary hover:text-primary transition-all underline-offset-4 hover:underline"
            title="Crear cuenta"
          >
            Crea una cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

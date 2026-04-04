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
    <div className="w-full max-w-md space-y-8">
      <h1 className="sr-only">Iniciar sesión en Amaturis</h1>
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Bienvenido de vuelta
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Ingresa tus datos para acceder a tu panel
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <SocialButtons />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-light px-2 text-slate-500">
              O continúa con tu correo
            </span>
          </div>
        </div>

        <form action="#" className="space-y-5" method="POST">
          <Input
            id="email"
            label="Correo o nombre de usuario"
            placeholder="aventurero.amazonia@gmail.com"
            type="text"
            required
          />

          <Input
            id="password"
            label="Contraseña"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            required
            icon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
                aria-label={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                <Icon name={showPassword ? "visibility_off" : "visibility"} />
              </button>
            }
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-700"
              >
                Recordarme
              </label>
            </div>
            <Link
              href="#"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              title="Recuperar contraseña"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 cursor-pointer"
          >
            Iniciar sesión en la aventura
          </Button>
        </form>

        <p className="text-center text-sm text-slate-600">
          ¿Nuevo en la selva?{" "}
          <Link
            href="#"
            className="font-bold text-primary hover:text-primary/80 transition-colors"
            title="Crear una cuenta"
          >
            Crea una cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

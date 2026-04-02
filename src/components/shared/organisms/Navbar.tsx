"use client";

import React from "react";
import Logo from "@/components/shared/atoms/Logo";
import Button from "@/components/shared/atoms/Button";
import Icon from "@/components/shared/atoms/Icon";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="group cursor-pointer">
            <Logo
              variant="primary"
              size="md"
              uppercase
              className="transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-sm font-semibold text-primary hover:text-primary/90 transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              href="/planes"
            >
              Planes
            </Link>
            <Link
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              href="/sitios"
            >
              Sitios
            </Link>
            <Link
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              href="/acerca_de"
            >
              Acerca de
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="primary"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold normal-case tracking-normal shadow-md shadow-primary/20 hover:shadow-primary/30 cursor-pointer"
              >
                <Icon name="login" className="text-sm" />
                Iniciar sesión
              </Button>
            </Link>
            <button
              className="md:hidden text-slate-900 p-2 rounded-full hover:bg-primary/10 transition-colors"
              type="button"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

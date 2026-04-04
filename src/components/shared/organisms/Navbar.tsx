"use client";

import React from "react";
import Logo from "@/components/shared/atoms/Logo";
import Button from "@/components/shared/atoms/Button";
import Icon from "@/components/shared/atoms/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const navItems = [
    { href: "/", label: "Inicio", title: "Ir a Inicio" },
    { href: "/planes", label: "Planes", title: "Ir a Planes" },
    { href: "/sitios", label: "Sitios", title: "Ir a Sitios" },
    { href: "/acerca_de", label: "Acerca de", title: "Ir a Acerca de" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group" title="Ir al inicio">
            <Logo
              variant="primary"
              size="md"
              uppercase
              className="transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary font-semibold"
                  }`}
                  href={item.href}
                  title={item.title}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" title="Ir a iniciar sesión">
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

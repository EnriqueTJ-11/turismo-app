'use client';

import React from 'react';
import Logo from '@/components/shared/atoms/Logo';
import Button from '@/components/shared/atoms/Button';
import Icon from '@/components/shared/atoms/Icon';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#6ba561] border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo variant="primary" />

          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-bold text-primary" href="/">Home</Link>
            <Link className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors uppercase tracking-tight" href="/planes">Planes</Link>
            <Link className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors uppercase tracking-tight" href="/sitios">Sitios/Actividades</Link>
            <Link className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors uppercase tracking-tight" href="/acerca_de">Acerca de</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="primary" className="hidden sm:flex px-6 rounded-full shadow-lg shadow-primary/20">
                <Icon name="login" className="text-lg" />
                Login
              </Button>
            </Link>
            <button className="md:hidden text-slate-900 dark:text-white p-2">
              <Icon name="menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

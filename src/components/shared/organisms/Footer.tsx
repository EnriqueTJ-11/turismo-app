import React from 'react';
import Logo from '@/components/shared/atoms/Logo';
import Link from 'next/link';
import Icon from '@/components/shared/atoms/Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo variant="primary" />
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm text-center md:text-left font-medium">
              Hecho con amor por la biodiversidad. Tu portal hacia lo inexplorado en el Caquetá, Colombia.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-slate-500/80 dark:text-slate-400/80">
            <Link className="hover:text-primary transition-colors" href="#">Privacidad</Link>
            <Link className="hover:text-primary transition-colors" href="#">Términos</Link>
            <Link className="hover:text-primary transition-colors" href="#">Contacto</Link>
          </div>
          
          <div className="flex gap-4">
            <a className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-all shadow-sm" href="#">
              <Icon name="social_leaderboard" className="text-xl" />
            </a>
            <a className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-all shadow-sm" href="#">
              <Icon name="share" className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-16 text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-wider">
          © 2024 Explora Caquetá. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

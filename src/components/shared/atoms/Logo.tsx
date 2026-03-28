import React from 'react';
import Icon from './Icon';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'primary';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'primary' }) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : variant === 'light' ? 'bg-white' : 'bg-slate-900';
  const textColor = variant === 'primary' ? 'text-white' : variant === 'light' ? 'text-primary' : 'text-white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgColor} ${textColor}`}>
        <Icon name="forest" className="text-2xl" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Explora Caquetá</h2>
    </div>
  );
};

export default Logo;

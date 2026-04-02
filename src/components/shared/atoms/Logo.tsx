import React from 'react';
import Icon from './Icon';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  uppercase?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'primary',
  size = 'lg',
  uppercase = false
}) => {
  const bgColor = variant === 'primary' ? 'bg-primary' : variant === 'light' ? 'bg-white' : 'bg-slate-900';
  const textColor = variant === 'primary' ? 'text-white' : variant === 'light' ? 'text-primary' : 'text-white';

  const sizeStyles = {
    sm: {
      box: 'h-8 w-8 rounded-lg',
      icon: 'text-sm',
      text: 'text-lg font-bold'
    },
    md: {
      box: 'h-10 w-10 rounded-xl',
      icon: 'text-xl',
      text: 'text-xl font-extrabold tracking-tight'
    },
    lg: {
      box: 'h-10 w-10 rounded-xl',
      icon: 'text-2xl',
      text: 'text-2xl font-bold tracking-tight'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center justify-center ${currentSize.box} ${bgColor} ${textColor}`}>
        <Icon name="forest" className={currentSize.icon} />
      </div>
      <span className={`${currentSize.text} ${uppercase ? 'uppercase' : ''} text-slate-900`}>
        Amaturis
      </span>
    </div>
  );
};

export default Logo;


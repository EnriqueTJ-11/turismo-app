import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
}

const Icon: React.FC<IconProps> = ({ name, className = '', fill = false }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className} ${fill ? 'font-fill' : ''}`}
      style={{ fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0" }}
    >
      {name}
    </span>
  );
};

export default Icon;

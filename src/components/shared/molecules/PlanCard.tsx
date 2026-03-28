import React from 'react';
import Icon from '@/components/shared/atoms/Icon';
import Button from '@/components/shared/atoms/Button';

interface PlanCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: string;
  duration: string;
  tag: string;
  tagIcon: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  image,
  price,
  rating,
  duration,
  tag,
  tagIcon
}) => {
  return (
    <div className="group bg-white dark:bg-background-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-slate-900 shadow-xl flex items-center gap-1">
          <Icon name="star" className="text-yellow-500 text-sm fill" />
          {rating}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <Icon name="schedule" className="text-sm" />
            {duration}
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Icon name={tagIcon} className="text-sm" />
            {tag}
          </div>
        </div>
        
        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 dark:border-slate-800/50 pt-6">
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Desde</span>
            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {price} <span className="text-sm font-bold text-slate-400">/pp</span>
            </p>
          </div>
          <Button variant="outline" className="p-3 rounded-2xl hover:bg-primary hover:text-white border-primary/20 bg-primary/5">
            <Icon name="add_shopping_cart" className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

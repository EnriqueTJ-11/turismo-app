import React from "react";
import Icon from "@/components/shared/atoms/Icon";

const PlansPagination: React.FC = () => {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-1">
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
          type="button"
        >
          <Icon name="chevron_left" />
        </button>
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold"
          type="button"
        >
          1
        </button>
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer font-bold"
          type="button"
        >
          2
        </button>
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer font-bold"
          type="button"
        >
          3
        </button>
        <span className="px-2">...</span>
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer font-bold"
          type="button"
        >
          8
        </button>
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
          type="button"
        >
          <Icon name="chevron_right" />
        </button>
      </nav>
    </div>
  );
};

export default PlansPagination;

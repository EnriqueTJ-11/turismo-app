"use client";

import React from "react";
import Icon from "@/components/shared/atoms/Icon";

interface PlansPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const buildPages = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  const pages: Array<number | "ellipsis"> = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) {
    pages.push("ellipsis");
  }

  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push("ellipsis");
  }

  pages.push(totalPages);
  return pages;
};

const PlansPagination: React.FC<PlansPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = buildPages(currentPage, totalPages);

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-1">
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          title="Página anterior"
        >
          <Icon name="chevron_left" />
        </button>

        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-slate-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`h-10 w-10 flex items-center justify-center rounded-full transition-colors cursor-pointer font-bold ${
                page === currentPage
                  ? "bg-primary text-white"
                  : "hover:bg-slate-200"
              }`}
              type="button"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}

        <button
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          title="Página siguiente"
        >
          <Icon name="chevron_right" />
        </button>
      </nav>
    </div>
  );
};

export default PlansPagination;

import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import PlansHero from "@/components/features/planes/organisms/PlansHero";
import PlansFilters from "@/components/features/planes/organisms/PlansFilters";
import PlansGrid from "@/components/features/planes/organisms/PlansGrid";
import PlansPagination from "@/components/features/planes/organisms/PlansPagination";
import PlansPromo from "@/components/features/planes/organisms/PlansPromo";
import SearchBar from "@/components/shared/molecules/SearchBar";

const PlansTemplate: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <PlansHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex justify-center mb-10">
            <SearchBar />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <PlansFilters />
            <div className="flex-1">
              <PlansGrid />
              <PlansPagination />
            </div>
          </div>
        </div>
        <PlansPromo />
      </main>
      <Footer />
    </div>
  );
};

export default PlansTemplate;

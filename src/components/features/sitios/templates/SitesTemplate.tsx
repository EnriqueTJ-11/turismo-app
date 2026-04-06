import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import SitesHero from "@/components/features/sitios/organisms/SitesHero";
import SitesFilters from "@/components/features/sitios/organisms/SitesFilters";
import SitesGrid from "@/components/features/sitios/organisms/SitesGrid";

const SitesTemplate: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <SitesHero />
        <div className="max-w-7xl mx-auto pb-12 pt-10 px-4 sm:px-6 lg:px-8">
          <SitesFilters />
          <SitesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitesTemplate;

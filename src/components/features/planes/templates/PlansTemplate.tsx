import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import PlansHero from "@/components/features/planes/organisms/PlansHero";
import PlansGrid from "@/components/features/planes/organisms/PlansGrid";
import PlansPromo from "@/components/features/planes/organisms/PlansPromo";

const PlansTemplate: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <PlansHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PlansGrid />
        </div>
        <PlansPromo />
      </main>
      <Footer />
    </div>
  );
};

export default PlansTemplate;

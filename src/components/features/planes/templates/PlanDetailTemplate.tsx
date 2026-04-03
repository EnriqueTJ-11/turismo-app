import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import PlanDetailHero from "@/components/features/planes/organisms/PlanDetailHero";
import PlanDetailContent from "@/components/features/planes/organisms/PlanDetailContent";

const PlanDetailTemplate: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <PlanDetailHero />
        <PlanDetailContent />
      </main>
      <Footer />
    </div>
  );
};

export default PlanDetailTemplate;

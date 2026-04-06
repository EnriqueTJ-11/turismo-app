import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import PlanDetailHero from "@/components/features/planes/organisms/PlanDetailHero";
import PlanDetailContent from "@/components/features/planes/organisms/PlanDetailContent";
import { type PlanDetail } from "@/types/planDetail";

interface PlanDetailTemplateProps {
  plan: PlanDetail;
}

const PlanDetailTemplate: React.FC<PlanDetailTemplateProps> = ({ plan }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <PlanDetailHero plan={plan} />
        <PlanDetailContent plan={plan} />
      </main>
      <Footer />
    </div>
  );
};

export default PlanDetailTemplate;

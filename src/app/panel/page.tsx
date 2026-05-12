import type { Metadata } from "next";
import { PartnerDashboardTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Panel de aliados",
  description:
    "Dashboard operativo para agencias, prestadores y aliados de Amaturis.",
};

export default function PanelPage() {
  return <PartnerDashboardTemplate />;
}

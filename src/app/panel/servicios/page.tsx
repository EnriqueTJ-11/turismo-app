import type { Metadata } from "next";
import { ServicesManagementTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Gestion de servicios",
  description:
    "Administra servicios turisticos, sitios vinculados y productos locales.",
};

export default function PanelServiciosPage() {
  return <ServicesManagementTemplate />;
}

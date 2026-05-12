import type { Metadata } from "next";
import { PackageManagementTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Gestion de paquetes",
  description:
    "Administra paquetes turisticos, precios, cupos, estado e informacion operativa.",
};

export default function PanelPaquetesPage() {
  return <PackageManagementTemplate />;
}

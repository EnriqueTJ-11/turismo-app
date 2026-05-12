import type { Metadata } from "next";
import { CommunityPanelTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Panel de comunidad",
  description:
    "Gestiona prestadores, productos locales, reservas e impacto de comunidad.",
};

export default function PanelComunidadPage() {
  return <CommunityPanelTemplate />;
}

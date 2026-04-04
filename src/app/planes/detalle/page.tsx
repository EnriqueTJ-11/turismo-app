import type { Metadata } from "next";
import PlanDetailTemplate from "@/components/features/planes/templates/PlanDetailTemplate";

const title = "Amaturis | Expedición al Cañón de las Dalias";
const description =
  "Vive la expedición al Cañón de las Dalias en Caquetá con senderismo, pozos esmeralda y guía local. Incluye itinerario, actividades, costos y reserva segura.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYgzb2OOjNV0klNlydE3WlXGb3G7x5_uIBQfCx3Q_1VvAQEVyUU2Qaf74rHnylTIcUbMHGqVglazKTWXrfStk_x5gINqYhHI9vFITVhRSnPftOIrsXQ94JQPjp1O_D1cLddjjij6MKPfzI7YIM7HWYiBiLfhSPqlRiSJhU3iKXPcEqMdc9UbLCyGFirZbK7GZDbIc3QBfmz8OgmWbSv7PLIXv_SNQGPAvT_zJZLJGH3d8reBOuGLbXoJAQBBxBm8c0Cm9PDUhTYA";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Vista aérea del Cañón de las Dalias en Caquetá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function PlanDetallePage() {
  return <PlanDetailTemplate />;
}

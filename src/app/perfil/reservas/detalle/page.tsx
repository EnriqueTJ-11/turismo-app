import type { Metadata } from "next";
import ReservationDetailTemplate from "@/components/features/reservas/templates/ReservationDetailTemplate";

const title = "Amaturis | Detalle de reserva";
const description =
  "Consulta el detalle de tu reserva en Amaturis: plan, itinerario, viajeros, pagos y contacto del proveedor para gestionar tu experiencia en la Amazonía colombiana.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQtZwTN5G4va_DIQq4u4v78mZIs6leQrGXSWOHvY9b86NUkwLEpGzpyCVywh30u81WWVU8VFFpU2GGYWjsxf0xmgR9YGGpfSnbj_RH412VSloEWcWKfvo3iaxmiYbjtQ490bXtccMBbVD-kqCZVs4bUFfWMDZI48tWVCCZH5wjs1CnzUPITYYwEi_C6E12QA1eUAl7c8al0bDeIUJve8LLb7uZpJIZp9S1S6hyXvyE9MYVMGXCmaMe8N6ZHVHVw5V9iLfut7RtoFE7";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Río amazónico en Caquetá",
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

export default function ReservaDetallePage() {
  return <ReservationDetailTemplate />;
}

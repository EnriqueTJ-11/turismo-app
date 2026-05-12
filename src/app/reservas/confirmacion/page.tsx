import type { Metadata } from "next";
import { BookingConfirmationTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Reserva confirmada",
  description:
    "Consulta la confirmacion de tu reserva, comprobante, proveedor y proximos pasos.",
};

export default function ReservaConfirmacionPage() {
  return <BookingConfirmationTemplate />;
}

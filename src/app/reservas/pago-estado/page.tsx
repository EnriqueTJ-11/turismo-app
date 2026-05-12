import type { Metadata } from "next";
import { PaymentStatusTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Estado del pago",
  description:
    "Consulta si tu pago esta pendiente, rechazado o vencido y reintenta la transaccion.",
};

export default function PagoEstadoPage() {
  return <PaymentStatusTemplate />;
}

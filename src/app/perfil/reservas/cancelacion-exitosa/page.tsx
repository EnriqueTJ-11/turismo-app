import type { Metadata } from "next";
import { CancelSuccessTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Cancelacion solicitada",
  description:
    "Confirmacion de solicitud de cancelacion y seguimiento de reembolso.",
};

export default function CancelacionExitosaPage() {
  return <CancelSuccessTemplate />;
}

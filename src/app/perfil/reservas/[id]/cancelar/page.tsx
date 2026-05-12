import type { Metadata } from "next";
import { CancelReservationTemplate } from "@/components/features/missing-views/templates";

type CancelReservationPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Amaturis | Cancelar reserva",
  description:
    "Revisa la politica de cancelacion, reembolso estimado y confirma la solicitud.",
};

export default async function CancelReservationPage({
  params,
}: CancelReservationPageProps) {
  const { id } = await params;

  return <CancelReservationTemplate reservationId={id} />;
}

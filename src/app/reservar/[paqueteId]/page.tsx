import type { Metadata } from "next";
import { BookingCheckoutTemplate } from "@/components/features/missing-views/templates";

type BookingPageProps = {
  params: Promise<{ paqueteId: string }>;
};

export const metadata: Metadata = {
  title: "Amaturis | Finalizar reserva",
  description:
    "Completa los datos del viajero y confirma la disponibilidad antes de pagar tu reserva.",
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { paqueteId } = await params;

  return <BookingCheckoutTemplate packageId={paqueteId} />;
}

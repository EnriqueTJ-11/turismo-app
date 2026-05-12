import type { Metadata } from "next";
import { ReviewPublishedTemplate } from "@/components/features/missing-views/templates";

export const metadata: Metadata = {
  title: "Amaturis | Resena publicada",
  description:
    "Confirmacion de publicacion de resena asociada a una reserva completada.",
};

export default function ResenaPublicadaPage() {
  return <ReviewPublishedTemplate />;
}

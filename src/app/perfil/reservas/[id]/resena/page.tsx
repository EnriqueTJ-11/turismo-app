import type { Metadata } from "next";
import { ReviewFormTemplate } from "@/components/features/missing-views/templates";

type ReviewPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Amaturis | Dejar resena",
  description:
    "Califica una experiencia completada y comparte comentarios para otros viajeros.",
};

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params;

  return <ReviewFormTemplate reservationId={id} />;
}

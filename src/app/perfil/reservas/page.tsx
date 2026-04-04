import type { Metadata } from "next";
import ReservationsTemplate from "@/components/features/reservas/templates/ReservationsTemplate";

const title = "Amaturis | Mis reservas de viajes";
const description =
  "Gestiona tus reservas activas y pasadas en Amaturis. Revisa fechas, viajeros, pagos y vuelve a reservar tus experiencias favoritas en la Amazonía colombiana.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBj00Rba8uvTC97KUbR7jfDHxYg5Whd6sp4E4YQrO0MsHchSmSdd90vP0egnAmYBsJyvNUawIwTdR-YgAStgWDsW-Bz2REDrkE255_dSngMFjh2HP87OmPSVBNKG5p4ojrZkth5onIToxfer4MfZxDqCunrX3tuAdmYgEjw7YZUXl2HvNUFr6kL_W9INM3lRWgZDlkfx9JLSII6q77yr67-BiRRUGVDXv4OYhGNTjO7Wi2nUAwAkbcwypse33lu1LOVnVgWKLBoj0XS";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Cañón selvático con río turquesa en Caquetá",
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

export default function MisReservasPage() {
  return <ReservationsTemplate />;
}

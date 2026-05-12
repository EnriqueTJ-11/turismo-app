import type { Metadata } from "next";
import { PaymentGatewayTemplate } from "@/components/features/missing-views/templates";

const title = "Amaturis | Pasarela segura de pagos turisticos";
const description =
  "Finaliza tu reserva en Amaturis con una pasarela de pagos segura, resumen de reserva y metodos de pago.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6aB1OqFsG8iGytQuO0egF3B0bKBfpBOOPUgucjEZsQF_C29aXAs250nRCqTowYlR5YST7RoQ0sPNEiWUySv_-vOGT0bAwo-NJSckOjK8luPe6JV91KXnxy0g9tHbrY5bpSSdymFd6udL5qYgiCelDClo4xtYLod-BZwqGDsJhj7w8Zuvdhak-yA9F7Y0pvkzD2Bd4voVVI8J1yrI7y-jtkXRBvqBD50I1StK3NahD_YV2fo1ng7iW5FIWu2n7Cd-Ro7-oh6UNpJo";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Selva del Caqueta en Amaturis",
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

export default function PasarelaPagosPage() {
  return <PaymentGatewayTemplate />;
}

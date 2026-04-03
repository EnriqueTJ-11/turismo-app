import type { Metadata } from "next";
import LoginTemplate from "@/components/features/login/templates/LoginTemplate";

const title = "Amaturis | Inicia sesión en tu cuenta";
const description =
  "Inicia sesión en Amaturis para gestionar tus reservas, guardar planes favoritos y acceder a tu perfil de viajero con acceso seguro y rápido a experiencias en Caquetá.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAItsInyQFnTJcBTt_xU0q1d4ZiX_JuAPmtU_kBF_gyJgd-QYg6m8VZ5i0wvtpSoqy2ZqGTZq6hmmp3FPWtza0ObhloaI9tj8OKbXGUMTybcOMboT2HW8hFEmoTEFijA4CMVf4vmAVwxIUuPBUH_pupI0N21RCxd-KY1B5f3tUtrwJ3vLvQrppodik0okTV_d5HYUNhCvoGKTpijmwxXPUsQWs1tGWMPNcbQcQNPsYQ0SVKXQ1Pd7SASaSFSa3fTVZb9mx-9uVH-NE";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: image,
        alt: "Vista aérea del dosel amazónico",
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

export default function LoginPage() {
  return <LoginTemplate />;
}

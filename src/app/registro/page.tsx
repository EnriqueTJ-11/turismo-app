import type { Metadata } from "next";
import RegisterTemplate from "@/components/features/login/templates/RegisterTemplate";

const title = "Amaturis | Crea tu cuenta";
const description =
  "Únete a Amaturis y comienza a explorar los planes turísticos, la naturaleza y la cultura local de Caquetá. Regístrate gratis y vive la aventura amazónica.";
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
        alt: "Dosel amazónico de Caquetá",
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

export default function RegistroPage() {
  return <RegisterTemplate />;
}

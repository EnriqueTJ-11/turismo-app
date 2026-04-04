import type { Metadata } from "next";
import SiteDetailTemplate from "@/components/features/sitios/templates/SiteDetailTemplate";

const title = "Detalle de sitio en Amaturis | Caquetá";
const description =
  "Explora en detalle los destinos de Amaturis en Caquetá: ubicación, galería, video, mapas interactivos y planes relacionados para planear tu visita con información clara y atractiva.";
const image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACIPCeuaxb96R-SaywaQUN_XcMFMUXM6NRMH8C0_MIoTvgdbx6cajPu0Pns7DkGzf3l23-ZCWs_dnOJrOSwnulwtShpSnolzUN3rTeqennEgUShJkEzYXRbHZ0a_BxbZ6ph31B12OJm5sYafBAONYMqSlyzV0nqfwxSx4Ov4IA0Vqvwv60YqAlXeRdvd6YT99i-kEsRK34To1I-bYFSESkXLare6F8LE3mX2CsxN4I-lU7iL5dZx2qmnbOyyOX0Ox7HbgrruIdJh6r";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/sitios/detalle",
    siteName: "Amaturis",
    images: [
      {
        url: image,
        alt: "Cascada Fin del Mundo en la selva del Caquetá",
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

export default function SitioDetallePage() {
  return <SiteDetailTemplate />;
}

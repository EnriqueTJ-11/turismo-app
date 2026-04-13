import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteDetailTemplate from "@/components/features/sitios/templates/SiteDetailTemplate";
import { getSiteDetail, getSiteRelatedPlans } from "@/services/siteDetail";

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACIPCeuaxb96R-SaywaQUN_XcMFMUXM6NRMH8C0_MIoTvgdbx6cajPu0Pns7DkGzf3l23-ZCWs_dnOJrOSwnulwtShpSnolzUN3rTeqennEgUShJkEzYXRbHZ0a_BxbZ6ph31B12OJm5sYafBAONYMqSlyzV0nqfwxSx4Ov4IA0Vqvwv60YqAlXeRdvd6YT99i-kEsRK34To1I-bYFSESkXLare6F8LE3mX2CsxN4I-lU7iL5dZx2qmnbOyyOX0Ox7HbgrruIdJh6r";

type SiteDetailPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async (
  { params }: SiteDetailPageProps,
): Promise<Metadata> => {
  const { id } = await params;
  const site = await getSiteDetail(id);

  if (!site) {
    return {
      title: "Amaturis | Sitio no encontrado",
      description: "El sitio turistico solicitado no esta disponible.",
    };
  }

  const description = site.description[0]
    ? site.description[0].length > 160
      ? `${site.description[0].slice(0, 157)}...`
      : site.description[0]
    : "Explora destinos autenticos en Caqueta.";

  return {
    title: `Amaturis | ${site.name}`,
    description,
    openGraph: {
      title: `Amaturis | ${site.name}`,
      description,
      images: [
        {
          url: DEFAULT_IMAGE,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Amaturis | ${site.name}`,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
};

export default async function SiteDetailPage({ params }: SiteDetailPageProps) {
  const { id } = await params;
  const site = await getSiteDetail(id);
  if (!site) {
    notFound();
  }

  const relatedPlans = await getSiteRelatedPlans(id);

  return <SiteDetailTemplate site={site} relatedPlans={relatedPlans} />;
}

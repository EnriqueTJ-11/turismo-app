import { fetchApiJson } from "@/lib/api";
import { SiteDetailSchema } from "@/schemas/siteDetail";
import { SitioDetalleApiSchema } from "@/schemas/sitioDetalleApi";
import { PaquetesApiSchema } from "@/schemas/paqueteApi";
import { getSiteCatalog } from "@/services/siteCatalog";
import { mapPaquetesToCatalog } from "@/services/planCatalog";
import { type SiteDetail } from "@/types/siteDetail";
import { type PlanCatalogItem } from "@/types/planCatalog";
import { extractSiteSlug, matchesSiteSlug } from "@/utils/siteId";

const DEFAULT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACIPCeuaxb96R-SaywaQUN_XcMFMUXM6NRMH8C0_MIoTvgdbx6cajPu0Pns7DkGzf3l23-ZCWs_dnOJrOSwnulwtShpSnolzUN3rTeqennEgUShJkEzYXRbHZ0a_BxbZ6ph31B12OJm5sYafBAONYMqSlyzV0nqfwxSx4Ov4IA0Vqvwv60YqAlXeRdvd6YT99i-kEsRK34To1I-bYFSESkXLare6F8LE3mX2CsxN4I-lU7iL5dZx2qmnbOyyOX0Ox7HbgrruIdJh6r";

const DEFAULT_GALLERY = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBY1klAlCQOfuHA6CgrxkjVs4iCIGAy7zEuyyS35TzmjF_Qup91FVQ40oGDTFlfxdtCKF6ZG8h16Oro9Y1LfiYjo_6NjXHq_jhN-YtHybBlbAbyem2SZy7bB5YwQQZtmZCubOHd3swZ-pH9QKhIlw1cVYXxma7RN0r8Q3UAo1lGGZBo_vdg0So25bp5rFm58hqCwTy89xdH0jJ9Ea4kb_FjZMZJrvZit2yyyjvzThSgkm_oft16TIAv1BAs2WH-xLJe86TeBkph6SpP",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFDinc0A5m_oMvQ98qVWB34Y3e6rQFrDvvGlW3Q1eq3IAGO5o-bxlaOFn6wYel3gEnW9v-xjxQYN4pWiivZzKzl750Z4gzqfeIzn4FZtdpNa2-1kSJFE3MXBsT4cjEgNLbSxhL332PPzd7b_PmzH7_vHERdYeyJDr-IaG-Jhub4lXb5-zIp7yzLXYOuGkYGYWmlgRylu1KfJGperESGWxLW3y6HFQojbRe_GQumlLsiXSDsyNbB-ZZdK3_3QXJttytDR_EAItvYioO",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pp_mJD2-i2cGdAHqmvUqI6zqDi89kDpqs7kDY9QD0DRD3nL7cJeql5NkQeGO-T9iXn12X11Zv3Sto5Sv6HHS_tauTvJTSubBGU-KFni2WdtfjLjF_9kWp1LmTOHxr1JKtNu9Ybavjw_Ss35TqOtR2zrSdARFhKHVI5DuzyQg5ltywnXULc-_aUD5e_JM_e7eNOsS_dw150EjxfSW2inglRAT3AvLvkljX0RRQcG7rk2p9KSI1_gtwkGRPqv8Jmq-RldmGdTzcG6r",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pFTIV22N2LdjPg2yQVzOxx6zeppSSpOH3OJ8Ou0UbjJpmw5GCvB4zanYOS4RVYxoQOXMVvWwZK1dsAUjBnIErMf4N5bQU_804vA3NP8cJHtsEaS_xySDNIrFpcz8VY0xWBuEejnD8fJ5J75UsREHlMdIPE7Jvlhkg7Fuw2uh-8Y3HUnQHRbUW--yIsASzsj8RR3qC1Celumer_ttPCSe72pmxr63P26dN9Ljp1LCwQ4tKnbZnynUuv684v3Azr7klT3FvBnzO0-K",
];

const DEFAULT_VIDEO_COVER =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9djbj_yIrFOfLLaLfmLW76_Z4hE5lLE0S0BTy0Lu5VkNnLpAMaLXrjITqMyvSlwMAjSFdaU2vRdvHKN1vdUPEjM5KqS--LVvIPiJGkt0GNQyreeFnU85o9XP3yYVO0RJHDTO7laLVOZBR9XZvHwMl008TbbmA4rPT2mlEs-cb0vWjBni8-tHdRYOffK8j6On6hESmzYiadk7qzCZrFwlB7N8cq2CTLi5cWgrNTcuwva4wfuvoKpuA0XAZQCqrmrqeUPPWb0FecDeK";

const splitValues = (value?: string | null) => {
  if (!value) {
    return [];
  }
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
};

const formatCapacity = (value?: number | null) => {
  if (!value || value <= 0) {
    return "Sin capacidad";
  }
  return `${value} personas/dia`;
};

const splitDescription = (value?: string | null) => {
  if (!value) {
    return ["Sin descripcion disponible."];
  }
  const parts = value
    .split(/\r?\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return parts.length ? parts : [value];
};

const pickType = (value?: string | null) => {
  const first = splitValues(value)[0];
  return first || "Destino";
};

const buildLocation = (municipio?: string | null) => {
  if (municipio && municipio.trim()) {
    return `${municipio}, Caqueta`;
  }
  return "Caqueta";
};

const mapFromApi = (data: unknown): SiteDetail => {
  const parsed = SitioDetalleApiSchema.parse(data);
  const detail: SiteDetail = {
    id: parsed.id,
    name: parsed.nombre,
    type: pickType(parsed.tipos),
    location: buildLocation(parsed.municipio ?? undefined),
    heroImage: DEFAULT_HERO_IMAGE,
    capacityPerDay: formatCapacity(parsed.capacidad_diaria ?? undefined),
    description: splitDescription(parsed.descripcion ?? undefined),
    galleryImages: DEFAULT_GALLERY,
    videoCover: DEFAULT_VIDEO_COVER,
    mapLat: parsed.latitud ?? 0,
    mapLng: parsed.longitud ?? 0,
  };

  return SiteDetailSchema.parse(detail);
};

const mapFromCatalog = (slug: string, catalog: Awaited<ReturnType<typeof getSiteCatalog>>) => {
  const site = catalog.find((item) => matchesSiteSlug(item.id, slug));
  if (!site) {
    return null;
  }
  const detail: SiteDetail = {
    id: site.id,
    name: site.name,
    type: site.type,
    location: site.location,
    heroImage: DEFAULT_HERO_IMAGE,
    capacityPerDay: site.capacityPerDay,
    description: [site.description],
    galleryImages: DEFAULT_GALLERY,
    videoCover: DEFAULT_VIDEO_COVER,
    mapLat: 0,
    mapLng: 0,
  };
  return SiteDetailSchema.parse(detail);
};

export const getSiteDetail = async (slugOrId: string) => {
  const slug = extractSiteSlug(slugOrId);

  try {
    const data = await fetchApiJson<unknown>(`/sitios/${slug}`);
    return mapFromApi(data);
  } catch (error) {
    try {
      const catalog = await getSiteCatalog();
      const fallback = mapFromCatalog(slug, catalog);
      if (!fallback) {
        return null;
      }
      return fallback;
    } catch (fallbackError) {
      console.error("Error cargando detalle del sitio:", error);
      console.error("Error al usar fallback:", fallbackError);
      return null;
    }
  }
};

export const getSiteRelatedPlans = async (slugOrId: string): Promise<PlanCatalogItem[]> => {
  const slug = extractSiteSlug(slugOrId);
  try {
    const data = await fetchApiJson<unknown>(
      `/sitios/${slug}/planes`,
      {
        limit: 3,
        offset: 0,
      },
    );
    const paquetes = PaquetesApiSchema.parse(data);
    return mapPaquetesToCatalog(paquetes);
  } catch (error) {
    console.error("Error cargando planes relacionados:", error);
    return [];
  }
};

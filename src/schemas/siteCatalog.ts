import { z } from "zod";

export const SiteTypeSchema = z.enum([
  "Río",
  "Cascada",
  "Parque Natural",
  "Reserva Natural",
  "Recurso Cultural",
  "Ecosistema",
]);

export const SiteCatalogItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: SiteTypeSchema,
  location: z.string(),
  description: z.string(),
  capacityPerDay: z.string(),
  image: z.string().url(),
});

export const SiteCatalogSchema = z.array(SiteCatalogItemSchema);

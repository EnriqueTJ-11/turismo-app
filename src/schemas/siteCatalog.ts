import { z } from "zod";

export const SiteCatalogItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  location: z.string(),
  description: z.string(),
  capacityPerDay: z.string(),
  image: z.string().url(),
  capacityValue: z.number().optional(),
  popularity: z.number().optional(),
  types: z.array(z.string()).optional(),
  municipality: z.string().optional(),
});

export const SiteCatalogSchema = z.array(SiteCatalogItemSchema);

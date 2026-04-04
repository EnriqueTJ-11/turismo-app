import { z } from "zod";

export const SiteDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  location: z.string(),
  heroImage: z.string().url(),
  capacityPerDay: z.string(),
  description: z.array(z.string()),
  galleryImages: z.array(z.string().url()),
  videoCover: z.string().url(),
  mapLat: z.number(),
  mapLng: z.number(),
});

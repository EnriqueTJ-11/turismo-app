import { z } from "zod";

export const PlanCatalogItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  price: z.string(),
  location: z.string(),
  duration: z.string(),
  difficulty: z.enum(["Fácil", "Moderado", "Desafiante"]),
  badge: z.string().optional(),
  isFavorite: z.boolean().default(false),
});

export const PlanCatalogSchema = z.array(PlanCatalogItemSchema);

import { z } from "zod";

export const PlanDestinationSchema = z.object({
  name: z.string(),
  municipality: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  category: z.string().optional(),
});

export const PlanDetailSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.string(),
  priceValue: z.number(),
  durationDays: z.number().optional().nullable(),
  difficulty: z.string().optional().nullable(),
  capacityMax: z.number().optional().nullable(),
  categories: z.array(z.string()).optional(),
  destinations: z.array(PlanDestinationSchema).optional(),
  activities: z.array(z.string()).optional(),
  includes: z.array(z.string()).optional(),
  excludes: z.array(z.string()).optional(),
  itinerary: z.array(z.string()).optional(),
});

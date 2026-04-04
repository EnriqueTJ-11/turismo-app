import { z } from 'zod';

export const PlanSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  price: z.string(),
  rating: z.string(),
  duration: z.string(),
  tag: z.string(),
  tagIcon: z.string()
});

export const PlansSchema = z.array(PlanSchema);

import { z } from 'zod';
import { PlanSchema } from '@/schemas/plan';

export type Plan = z.infer<typeof PlanSchema>;

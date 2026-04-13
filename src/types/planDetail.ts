import { z } from "zod";
import { PlanDetailSchema, PlanDestinationSchema } from "@/schemas/planDetail";

export type PlanDetail = z.infer<typeof PlanDetailSchema>;
export type PlanDestination = z.infer<typeof PlanDestinationSchema>;

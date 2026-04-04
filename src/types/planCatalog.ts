import { z } from "zod";
import { PlanCatalogItemSchema } from "@/schemas/planCatalog";

export type PlanCatalogItem = z.infer<typeof PlanCatalogItemSchema>;

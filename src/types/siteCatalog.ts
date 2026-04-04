import { z } from "zod";
import {
  SiteCatalogItemSchema,
  SiteCatalogSchema,
} from "@/schemas/siteCatalog";

export type SiteCatalogItem = z.infer<typeof SiteCatalogItemSchema>;
export type SiteCatalog = z.infer<typeof SiteCatalogSchema>;

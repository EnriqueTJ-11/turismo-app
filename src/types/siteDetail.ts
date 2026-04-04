import { z } from "zod";
import { SiteDetailSchema } from "@/schemas/siteDetail";

export type SiteDetail = z.infer<typeof SiteDetailSchema>;

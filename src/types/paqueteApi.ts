import { z } from "zod";
import { PaqueteApiSchema } from "@/schemas/paqueteApi";

export type PaqueteApi = z.infer<typeof PaqueteApiSchema>;

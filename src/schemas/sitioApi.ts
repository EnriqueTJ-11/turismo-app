import { z } from "zod";

export const SitioApiSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  descripcion: z.string().optional().nullable(),
  municipio: z.string().optional().nullable(),
  capacidad_diaria: z.number().optional().nullable(),
  tipos: z.string().optional().nullable(),
  popularidad: z.number().optional().nullable(),
});

export const SitiosApiSchema = z.array(SitioApiSchema);

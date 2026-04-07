import { z } from "zod";

export const SitioDetalleApiSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  descripcion: z.string().optional().nullable(),
  municipio: z.string().optional().nullable(),
  capacidad_diaria: z.number().optional().nullable(),
  latitud: z.number().optional().nullable(),
  longitud: z.number().optional().nullable(),
  tipos: z.string().optional().nullable(),
});

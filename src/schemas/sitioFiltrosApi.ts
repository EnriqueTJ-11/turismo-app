import { z } from "zod";

export const SitioFiltroTipoSchema = z.object({
  uri: z.string(),
  nombre: z.string(),
  total: z.number().optional().nullable(),
});

export const SitioFiltroMunicipioSchema = z.object({
  uri: z.string(),
  nombre: z.string(),
});

export const SitioFiltrosApiSchema = z.object({
  tipos: z.array(SitioFiltroTipoSchema),
  municipios: z.array(SitioFiltroMunicipioSchema),
  capacidad_min: z.number().optional().nullable(),
  capacidad_max: z.number().optional().nullable(),
});

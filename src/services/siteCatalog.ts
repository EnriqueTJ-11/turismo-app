import { SiteCatalogSchema } from "@/schemas/siteCatalog";
import { type SiteCatalogItem } from "@/types/siteCatalog";

const mockSites: SiteCatalogItem[] = [
  {
    id: "site-1",
    name: "Río Hacha",
    type: "Río",
    location: "Florencia, Caquetá",
    description:
      "Un afluente emblemático de aguas cristalinas que serpentea por la capital, ideal para el descanso y la conexión con la naturaleza local.",
    capacityPerDay: "40 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0n8DS3o4tCWMWq6rnxmY_tBYMr8Aa4qochBDHBwQ2UTDTH0VmCqCUPJGSScu-bB_NAxZ_rRaw3cUoPysmHk9TJhopqhJTkGlOEupABLoFapgqJBzH3LXYXjK6tKVZKGcVQCZIuvCDukXOjqRglCvzazKxyHzEkps_FSI9qvvEAFS9PqDdEtvVcDjso-2jxa_ECsdSA0RaQ4jUnvYjJjSzcI1DcVmMQSH4bzhgidTp5vU2OC0Q3PDYPdCX3HFr45zr8p-hDc6s83ww",
  },
  {
    id: "site-2",
    name: "Fin del Mundo",
    type: "Cascada",
    location: "Mocoa (Límite), Caquetá",
    description:
      "Espectacular caída de agua de 75 metros situada en el límite selvático, ofreciendo una vista infinita hacia la llanura amazónica.",
    capacityPerDay: "25 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC60HHqwkAqT8z-9WISh1b9hH_JzHZ3PM0tdgKb3we9ybV--hQpkzhZu_1Axy7QaFw0LJo32u1-XiLBlcWIE2anlVnaxSQ15MWjG7NQlAFKuNGa2DioIYSh79OitxMxz1VvErYQEdZ9FHZcSX8rZ4x6JV86ObCM7sD87gaTSGE3yHfiNpz_cj72iSQM32u7tpJyEmXxyPnKaloxR2fFcWPu3c9g7mTMWSq-Guer5saCW9DwSbeshh252y4Hvw0acDkvAOV4GjNJmO2y",
  },
  {
    id: "site-3",
    name: "Cordillera Picachos",
    type: "Parque Natural",
    location: "San Vicente, Caquetá",
    description:
      "Santuario de biodiversidad donde la cordillera de los Andes se encuentra con la Amazonía, hogar de especies únicas y paisajes nublados.",
    capacityPerDay: "15 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcYswFl2adiVZT41lw_KuaKczUtDOw-uCoeqLBQyBBCgG9n6-OUlEtsALBCxJsshcM7WtQAkfLrCgUwgcaAmOn336iCp7BSZlJEvC8IjMCjYUqSjdx3dKmCBqz1rttDgQurfgpiICwucLAcqjt16HIobxzOFJlWLnB95ICeWkBS9MWWcF1D66pUpQUwUiRgb4g55VlyIV5OTSjhEr-eQTdIEc708EANWKW8D3H2Urruouq-eF94sbl2pToM6XS67Y_zZNbS6JEfPA2",
  },
  {
    id: "site-4",
    name: "El Danubio",
    type: "Reserva Natural",
    location: "Morelia, Caquetá",
    description:
      "Proyecto de conservación con senderismo interpretativo, avistamiento de aves y baños en piscinas naturales de aguas esmeralda.",
    capacityPerDay: "20 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQC9Vv1DaPM6-G-mivn75jH4vP0aYZ0mMjQ9iW00uRMz9flg7Zan7-Kx5F2Ww_yLoC-A0Zp2gBZnSu_vyzdyiXl7tZ1od7w0oMdABvtqsNaDN_nn2uFqLaffWN4kW_CAuh6WX2lD6refG0gz69vZrdVvMZiCqSMVR5dg91DnOgAzENYU391aMG9Y8EObCpp7qQ27Af9PF9rpZnr0L2LQrrfTsvKmornxSGmZjqb2EGKGIGlVuxWlQFtzRbo0JaUg4PzMYRqS7DX442",
  },
  {
    id: "site-5",
    name: "Serranía del Itilla",
    type: "Recurso Cultural",
    location: "Solano, Caquetá",
    description:
      "Misteriosas pinturas rupestres ancestrales grabadas en formaciones rocosas milenarias, testimonio de culturas amazónicas primigenias.",
    capacityPerDay: "12 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVRPIamj0aRez2WEDdmJveewws63YX9dakVQ47d8UH43EeUppItgcdGGI55QWp2uNkKT7UmANeSb_USBuWZIVYI910XGpKBRyLWX2MHLF8dO0p0qx3cZj3fSKjEsLUfdE-1TN6EAB0OMFlnrvmKEd4sit88yTldUUHKZlZezYtdeGKr5a3HcTH0EC1CRW8yA0xwUx93JeJ-xWXB4fvLMczmLR-WdJ0Ddm6zOI9-e2zg8hpv9SjeFr-TYhi_xUuUmaEvyZiqcmcGNJw",
  },
  {
    id: "site-6",
    name: "El Avispero",
    type: "Ecosistema",
    location: "Cartagena del Chairá",
    description:
      "Complejo de humedales vital para la fauna migratoria y la regulación hídrica de la región, ideal para el avistamiento de aves acuáticas.",
    capacityPerDay: "30 pax/día",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtAttmY7Ebruz_vhcEPy6MmaOG1o1dCV2cm6fr5zb5aHRWPIxuDoeGOKf-kAdLZvqU0fkgdi4jECynLqFZe2yepBVL5wG5xY6vmuvn3hNiY9gIpP14VISQ2m1JgePcswtrRlKOKiU45euQp1V0A4r8-cdYP_AUUTAcCuDomUMUXKniutqrGZ_rn14BZ0ecxng8Gora5JWSaKnJZY5W_rVNXH5v6Z3U8l_bqvfVkYX2VbOP1c6x6CLvyfNSf6PQZdrYNRppilOjRCPj",
  },
];

export const getSiteCatalog = async (): Promise<SiteCatalogItem[]> => {
  return SiteCatalogSchema.parse(mockSites);
};

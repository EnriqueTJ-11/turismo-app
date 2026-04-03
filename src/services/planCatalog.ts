import { PlanCatalogSchema } from "@/schemas/planCatalog";
import { type PlanCatalogItem } from "@/types/planCatalog";

const mockPlanCatalog = [
  {
    id: "plan-1",
    title: "Expedición Cañón Las Dalias",
    description:
      "Explora formaciones rocosas místicas y nada en pozos naturales cristalinos escondidos en la selva.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAREAoYNXk7XtCVxCzUhyjO6lMcI_QrHEtxD2kFQoNnCE_GjTO5m0ax8SUzR8sIob_3EigB8Ln0hYrvMKP5xMwLVy1VsJV1JNT68j_oUj6ZRbPQltc8q_c8a-79R4YGGBhI1geChmVhfZ4PRe38x7CU3-pc6RVQyHVRRiuRBKSKgj3CJjsQaS9ADZS25yLQdwxoG2psE6ntWRW4ka_YSFNj8uDQYu0mYhidx7tD8WT9zWqUYDvqQl-HOsEgfWHenoV-QJwM0hE1bQg",
    price: "$85",
    location: "Florencia, Caquetá",
    duration: "1 Día",
    difficulty: "Fácil",
    badge: "Popular",
    isFavorite: false,
  },
  {
    id: "plan-2",
    title: "Safari fluvial en la selva profunda",
    description:
      "Viaje inmersivo de 3 días al corazón del Amazonas. Incluye avistamiento de fauna y gastronomía local.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qu3qwb3bB1a4Vuo1lss6Iuapcomxq5-D2-9287URvW-jGKIXWTPuqcbHAislziCzhGpgJs9HimLXbBazfTs0kaScsUWgboTo1rGYZmlJsH8VvPQ_v3ccDV69vVeHJp2Xwqaapf1cdsQAASBA3FsoRbeAT3Kf8DBBR9vrbzbH4nVKy3n6T3Adw4LJfZJUxJQfgCC_sILsHex5cZq-Ov3Mf69eCPuOwsvaZpcIFV3TTvtvWuPX8SRIg0IX0Z1rGHyRj2NEo1oRTpY",
    price: "$320",
    location: "Río Hacha",
    duration: "3 Días",
    difficulty: "Moderado",
    isFavorite: true,
  },
  {
    id: "plan-3",
    title: "Sendero Cascadas de Anolaima",
    description:
      "Descubre una secuencia de majestuosas cascadas en una reserva privada. Ideal para nadar y fotos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3SS_MQwJDjR5O9eqLag6FCydEhUBnEKL9T6mQsz0o5GRLnph7EbPaBhvQb1kEq3gufwHhTr3pY8ND8A9UlyCHPAEtHwfbo0qgYTT0to1pe9sOi0DntzoerAXfDSQJ1HwIR_2_OHNFBPOQLhxQLiAm5MbJHoq5TrnjsmsVj7KJWf7Xcj_vUJaq5FYy2zsdVow3UZwyh9-c3GNc-CfXIGk-ItPQudYZJiYEUfEEPt2t_ab8n86Rw8OP3GUQ4xaCOQ6zc23nPnqJqaE",
    price: "$65",
    location: "Anolaima",
    duration: "1 Día",
    difficulty: "Fácil",
    isFavorite: false,
  },
  {
    id: "plan-4",
    title: "Rafting en el Orteguaza",
    description:
      "Aventura de alta adrenalina en rápidos nivel 3 con guías expertos y equipo premium.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPFPGAYYimVzv5XtzE9nL7LrXWNaP_xYmUZBOLu4lNE18_2HJ4bqiqMv9xqTW6sJAKpFrOOXz-d0Ohg7257iHCj7zsRcVl4TA5KcD2yw54Aq-TjmG49AWm36__Z8zAItPIaOuYBf-g-KPQYXpPFGHPKSWj9Cn8gXbGlvM7pw3lWnu3QBtKYdlWe6FT15VPXZ4eN6etNUeD6EPxzdYvQPQTYV57TFoxCowag5redG5sOjXDlPzQD_AFfp4LQM7AkFt18lCS7HxzNeg",
    price: "$195",
    location: "Río Orteguaza",
    duration: "2 Días",
    difficulty: "Desafiante",
    isFavorite: false,
  },
  {
    id: "plan-5",
    title: "Retiro de medicina ancestral",
    description:
      "Conexión espiritual con comunidades indígenas y su conocimiento botánico tradicional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmeIi-OW8qBG3Tt2xaaq3zVPWKbKepMjYIwLATrPhP66FJWYQ2IzTpK8LvuwCZ9JRFJRmFm2SOb5IUY6wN7AmPzwHhMFjNbd4OXV5ae9cg4mR53qgFaobsDwuiWn8RIMSymIxnYbPnZ6DQ38ssvtPqT1-g0tWrmjQB5ntO2ZcotcRDvJAJYYxI1VXFrZCQTJT0-eGVRiXsAIUQBqZsAUCmekuy7AUSi83DlLxhqvTDO688QBjQOVmUT_SLJNNvG_bEtabjssTx3U4",
    price: "$450",
    location: "Baja Amazonía",
    duration: "4 Días",
    difficulty: "Fácil",
    isFavorite: false,
  },
  {
    id: "plan-6",
    title: "Ruta de avistamiento de aves del Caquetá",
    description:
      "Observa más de 100 especies endémicas con guías expertos en hábitats prístinos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKkkcmxguqBimQ-Rr2L23JjiyXL60wrK6ODsEwOKBmdwoPkObFQFJk-QLGlO5B09RZG121FfMO_rJ1uJi5aWoqU2sOSPfsVA_eighSd8V6wGjH0BtS8sU09XuOMGV6FFcT7hauUMinlYmmqVVeFtOfBT2GmUQCltxgLjOgd4DwueDC4hG916fTP0-tpooIl06K_0InLxZSK_ahk2Ca4wO_YE5d1suIXSe585qL4RI-72wmjW-D4_8HiRatbWIk9Bgxr_NtH5mdlaI",
    price: "$120",
    location: "Ruta Amazónica",
    duration: "1 Día",
    difficulty: "Fácil",
    isFavorite: false,
  },
] satisfies PlanCatalogItem[];

export const getPlanCatalog = async (): Promise<PlanCatalogItem[]> => {
  return PlanCatalogSchema.parse(mockPlanCatalog);
};

import { ReservationsSchema } from "@/schemas/reservations";
import { type Reservations } from "@/types/reservations";

const mockReservations: Reservations = [
  {
    id: "EXP-94281",
    title: "Expedición al Cañón de las Dalias",
    status: "confirmada",
    statusLabel: "Confirmada",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj00Rba8uvTC97KUbR7jfDHxYg5Whd6sp4E4YQrO0MsHchSmSdd90vP0egnAmYBsJyvNUawIwTdR-YgAStgWDsW-Bz2REDrkE255_dSngMFjh2HP87OmPSVBNKG5p4ojrZkth5onIToxfer4MfZxDqCunrX3tuAdmYgEjw7YZUXl2HvNUFr6kL_W9INM3lRWgZDlkfx9JLSII6q77yr67-BiRRUGVDXv4OYhGNTjO7Wi2nUAwAkbcwypse33lu1LOVnVgWKLBoj0XS",
    imageAlt:
      "Cañón selvático con río turquesa entre paredes de piedra en Caquetá",
    details: [
      {
        label: "Fecha de viaje",
        value: "15 - 18 Octubre, 2024",
        icon: "calendar_today",
        tone: "primary",
      },
      {
        label: "Viajeros",
        value: "2 Adultos",
        icon: "group",
        tone: "primary",
      },
    ],
    totalLabel: "Total pagado",
    totalAmount: "$1,850,000 COP",
    primaryAction: {
      label: "Ver detalles",
      variant: "primary",
      title: "Ver detalles de la reserva",
    },
    secondaryAction: {
      icon: "download",
      title: "Descargar comprobante",
    },
  },
  {
    id: "EXP-88432",
    title: "Ruta del Agua: Salto del Indio",
    status: "pendiente",
    statusLabel: "Pendiente de pago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3jvwLct_qdh18cwBzJVgz8sWqh9FKqgHdJ8jp7EeyC_LLt-k7xsT6xv9UZX_JVG0RN5b1RfSbJubJnTDOvfX8fUXcj94oVGpHlq2WzT_3mNgcdVIGUGrpORi8RAVB6mjGp75k_5gtRnnxGjSxLxp9mus-E-n_ywnXJFz8GpVob45M2WES7OH0n_qN2WVs8qBR3aQ7IDdU3AyYpIvNHaQvHcIpAQE3CBgPyxVgtb-FKhm8oscb5FRxswB3F2TTP2F2YVEP5skbGnw",
    imageAlt:
      "Cascada tropical sobre una poza cristalina con helechos",
    details: [
      {
        label: "Fecha de viaje",
        value: "05 - 07 Noviembre, 2024",
        icon: "calendar_today",
        tone: "tertiary",
      },
      {
        label: "Viajeros",
        value: "1 Adulto",
        icon: "group",
        tone: "tertiary",
      },
    ],
    totalLabel: "Monto pendiente",
    totalAmount: "$920,000 COP",
    primaryAction: {
      label: "Pagar ahora",
      variant: "dark",
      title: "Pagar ahora",
    },
    secondaryAction: {
      icon: "close",
      title: "Cancelar reserva",
    },
  },
  {
    id: "EXP-77210",
    title: "Travesía por el Río Ortega",
    status: "completada",
    statusLabel: "Completada",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCooE8oamQrm5qWp_M4m6ueuud1bRZo3zyn4_G4Rq-JgtoWlPqucALxPZWjUMwhACxKU_FOC9iYRmsq5LEI-OCVykdK3VpuWuBEgSjQ0fpumI8IpWwPTrBhIp5YN0Y_L12eAc_7_ewPSN4LCQBCWxfvw-XhksiLASCf6Fp4roKtt8Zfy1rXhN4xMxMJfLozKFX2yO48bkgeYHRA489PMuKY8aMhY6FEyZrENSmUV7VN5THAojboi1s9qJ7VsJVX2bgXoEsgH3L6Z2xI",
    imageAlt:
      "Vista aérea del río amazónico entre un mar de bosque",
    details: [
      {
        label: "Fecha de viaje",
        value: "12 - 15 Agosto, 2024",
        icon: "event_available",
        tone: "secondary",
      },
      {
        label: "Tu opinión",
        icon: "rate_review",
        tone: "secondary",
        rating: 5,
      },
    ],
    totalLabel: "Total pagado",
    totalAmount: "$1,420,000 COP",
    primaryAction: {
      label: "Volver a reservar",
      variant: "outline",
      title: "Volver a reservar este plan",
    },
  },
];

export const getReservations = async (): Promise<Reservations> => {
  return ReservationsSchema.parse(mockReservations);
};

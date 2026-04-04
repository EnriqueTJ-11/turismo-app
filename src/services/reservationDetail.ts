import { ReservationDetailSchema } from "@/schemas/reservationDetail";
import { type ReservationDetail } from "@/types/reservationDetail";

const mockReservationDetail: ReservationDetail = {
  id: "RES-001",
  status: "confirmada",
  statusLabel: "Confirmada",
  createdAt: "Realizada el 1 de Abril, 2026",
  plan: {
    title: "Aventura en el Hacha",
    description:
      "Recorrido extremo por el río Hacha con canotaje y avistamiento de aves amazónicas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQtZwTN5G4va_DIQq4u4v78mZIs6leQrGXSWOHvY9b86NUkwLEpGzpyCVywh30u81WWVU8VFFpU2GGYWjsxf0xmgR9YGGpfSnbj_RH412VSloEWcWKfvo3iaxmiYbjtQ490bXtccMBbVD-kqCZVs4bUFfWMDZI48tWVCCZH5wjs1CnzUPITYYwEi_C6E12QA1eUAl7c8al0bDeIUJve8LLb7uZpJIZp9S1S6hyXvyE9MYVMGXCmaMe8N6ZHVHVw5V9iLfut7RtoFE7",
    imageAlt:
      "Paisaje selvático con río caudaloso entre montañas verdes en Caquetá",
    pricePerPerson: "450,000 COP",
    duration: "3 días / 2 noches",
    dates: "Abr 10 - Abr 13, 2026",
  },
  itinerary: [
    {
      title: "Canotaje en el río Hacha",
      time: "08:00 AM",
      duration: "3 horas",
      attraction: "Río Hacha",
      icon: "kayaking",
    },
    {
      title: "Avistamiento de aves",
      time: "05:00 AM",
      duration: "2 horas",
      attraction: "Selva Amazónica",
      icon: "visibility",
    },
  ],
  attraction: {
    name: "Río Hacha",
    location: "Florencia, Caquetá",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACUPdtCAuCi3MG5EMkyES8F1qDHfBHDjl9C45NPqpTD-fN-aGLIYu39rsbo4lDIfJHfuOkTO0Us-4-k-2_-Vzt5F3Vqpbmlnfy9XWqivzgRlLtMbjogB5ljQ0WZ_M7Hx6BFjSniW8c4w-lO8LMVSBiqy6zcWdcE7Ig6PFNEcvOJHVNF5uXBv8fjxAfZJP2UAWWPzx1Brg-BZzok2GjfL4dklXwFRLlmzVJ9_WNxLSgvfyoz0MS0_fZDSWqQrs7_Q8OhXi7JhxAD1Ro",
    imageAlt: "Detalle del río Hacha con aguas turquesa en entorno selvático",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=R%C3%ADo%20Hacha%2C%20Florencia%2C%20Caquet%C3%A1",
  },
  payment: {
    people: "3 Personas",
    method: "Tarjeta",
    total: "1,350,000 COP",
  },
  traveler: {
    name: "Sebastián Sierra",
    email: "sebsirra13@email.com",
    initials: "SS",
  },
  provider: {
    name: "Guías Amazónicos",
    phone: "+573112929178",
    email: "contacto@guiasamazonicos.com",
  },
  trustNote:
    "Reserva protegida por la garantía de satisfacción de Amazonia Verdant.",
};

export const getReservationDetail = async (): Promise<ReservationDetail> => {
  return ReservationDetailSchema.parse(mockReservationDetail);
};

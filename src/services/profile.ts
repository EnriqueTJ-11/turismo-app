import { ProfileSchema } from "@/schemas/profile";
import { type ProfileData } from "@/types/profile";

const mockProfile: ProfileData = {
  name: "Sebastián Sierra",
  location: "Florencia, Caquetá",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6b6gNGa8MQksRwujktB7vdDPcR064KBavEG3sxAJbEKSwbXMKgtodsGg10EEiUm5JJRIILaNF13wSyWMJzxtBWdD6LERb8rt-1m7iRWKU54Gn4RMUXq2aYjHnIYQzrVZUo-7Nujtpd1uQHYkpmvZUmfVUIaZIdIhzoLpFoX5K24PQIW7xdWi7Ggos4hOoCMIdBfzqjEWDwkswmYoTYCa9hdl9L6rOwzzhs_lk2adDWP41VI8E0FB7kPyo0NQjLcITUkzJrLIxJr4",
  stats: {
    totalTrips: 12,
    explorerLevel: "Oro",
    memberSince: "Enero 2023",
  },
  bookings: [
    {
      id: "booking-1",
      title: "Expedición al Cañón de las Dalias",
      status: "Confirmado",
      dateRange: "15 Oct - 18 Oct",
      people: "2 Adultos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrRhTflxmujfpRUuIci5MaGMspPFofdVMORSjZWfcRhFqIyLQ4k4qWABwOQLxDLE7N2DyqMZkQOaFJu1EhhNy0Ye8lEisoZ0Z7klE1FU7G2StXJCY3uvQcD7MuOh1kcs0FNyJUxL8nvO0hJaMXg_sFS8k7uJLmRJQcgVGNgTNCkoi4PIGCF8GoGxY4oS6D-skjYBAoMcQsFidIPlew4N474MbJguawATMugDTKrmNXVzd4Qn6xY_3g3d2xt3yDeLj2TIYPyfdMoy8",
    },
    {
      id: "booking-2",
      title: "Tour Cascada del Fin del Mundo",
      status: "Pendiente de pago",
      dateRange: "02 Nov - 03 Nov",
      people: "4 Personas",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5LZwGXjfcUNEY0gPnfRI7wJRw_RvEGEhOwa0nRlpRQEJe472Ds-B1_xSmNqemPSOWv6U3OwvwfKYK6oqXw1OjCqQCKTNiGJoeCLumU4iitw72g9HXvYMSP45qRmwgEnpoBZdP5xDZ1akuv4EjPW1fKN20RU-etaRQrSTSMxUFGxqEh8fSlDAUbN6bHxv1dYe5QxuNLnABd4YRjW-37KNmagPTTPhJdICN146DsQtBxXcXlFWaDM8Zx5HC6nEifPrqqIvd6b6ixrw",
    },
  ],
  history: [
    {
      id: "history-1",
      title: "Reserva Natural El Horeb",
      date: "Agosto 2023",
      status: "Completado",
      actionLabel: "Dejar Reseña",
    },
    {
      id: "history-2",
      title: "Senderismo en Picachos",
      date: "Marzo 2023",
      status: "Completado",
      actionLabel: "Ver Factura",
    },
  ],
  map: {
    title: "Tu Próximo Punto de Partida",
    subtitle: "Oficina Principal - Florencia",
    lat: 1.61,
    lng: -75.6,
  },
};

export const getProfile = async (): Promise<ProfileData> => {
  return ProfileSchema.parse(mockProfile);
};

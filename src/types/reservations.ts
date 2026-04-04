import { z } from "zod";
import {
  ReservationSchema,
  ReservationsSchema,
  ReservationDetailSchema,
  ReservationStatusSchema,
  ReservationActionSchema,
} from "@/schemas/reservations";

export type ReservationStatus = z.infer<typeof ReservationStatusSchema>;
export type ReservationDetail = z.infer<typeof ReservationDetailSchema>;
export type ReservationAction = z.infer<typeof ReservationActionSchema>;
export type Reservation = z.infer<typeof ReservationSchema>;
export type Reservations = z.infer<typeof ReservationsSchema>;

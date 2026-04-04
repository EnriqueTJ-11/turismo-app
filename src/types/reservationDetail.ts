import { z } from "zod";
import {
  ReservationDetailSchema,
  ReservationDetailStatusSchema,
  ReservationDetailItinerarySchema,
  ReservationDetailPlanSchema,
  ReservationDetailAttractionSchema,
  ReservationDetailPaymentSchema,
  ReservationDetailTravelerSchema,
  ReservationDetailProviderSchema,
} from "@/schemas/reservationDetail";

export type ReservationDetailStatus = z.infer<
  typeof ReservationDetailStatusSchema
>;
export type ReservationDetailItinerary = z.infer<
  typeof ReservationDetailItinerarySchema
>;
export type ReservationDetailPlan = z.infer<
  typeof ReservationDetailPlanSchema
>;
export type ReservationDetailAttraction = z.infer<
  typeof ReservationDetailAttractionSchema
>;
export type ReservationDetailPayment = z.infer<
  typeof ReservationDetailPaymentSchema
>;
export type ReservationDetailTraveler = z.infer<
  typeof ReservationDetailTravelerSchema
>;
export type ReservationDetailProvider = z.infer<
  typeof ReservationDetailProviderSchema
>;
export type ReservationDetail = z.infer<typeof ReservationDetailSchema>;

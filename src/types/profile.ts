import { z } from "zod";
import { ProfileSchema } from "@/schemas/profile";

export type ProfileData = z.infer<typeof ProfileSchema>;
export type ProfileBooking = ProfileData["bookings"][number];
export type ProfileHistoryItem = ProfileData["history"][number];

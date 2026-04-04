import React from "react";
import ProfileBookingCard from "@/components/features/perfil/molecules/ProfileBookingCard";
import { type ProfileBooking } from "@/types/profile";
import Link from "next/link";

interface ProfileBookingsProps {
  bookings: ProfileBooking[];
}

const ProfileBookings: React.FC<ProfileBookingsProps> = ({ bookings }) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-900">Reservas activas</h2>
        <Link
          href="/perfil/reservas"
          className="text-primary text-sm font-semibold hover:underline rounded-full px-3 py-1.5"
          title="Ver todas las reservas"
        >
          Ver todas
        </Link>
      </div>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <ProfileBookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default ProfileBookings;

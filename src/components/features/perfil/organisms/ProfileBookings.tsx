import React from "react";
import ProfileBookingCard from "@/components/features/perfil/molecules/ProfileBookingCard";
import { type ProfileBooking } from "@/types/profile";
import Link from "next/link";
import Icon from "@/components/shared/atoms/Icon";

interface ProfileBookingsProps {
  bookings: ProfileBooking[];
}

const ProfileBookings: React.FC<ProfileBookingsProps> = ({ bookings }) => {
  if (bookings.length === 0) {
    return (
      <section className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 text-center">
        <div className="text-slate-400 mb-2">
          <Icon name="explore" className="text-4xl" /> {/* Si tienes el átomo Icon */}
        </div>
        <h3 className="text-slate-900 font-bold">No tienes reservas activas</h3>
        <p className="text-slate-500 text-sm mb-4">La Amazonía te espera. ¿Qué tal si buscas tu próxima aventura?</p>
        <Link href="/sitios" className="text-primary font-bold text-sm hover:underline">
          Explorar destinos
        </Link>
      </section>
    );
  }
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

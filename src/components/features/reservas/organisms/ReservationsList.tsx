import React from "react";
import ReservationCard from "@/components/features/reservas/molecules/ReservationCard";
import { type Reservation } from "@/types/reservations";

interface ReservationsListProps {
  reservations: Reservation[];
}

const ReservationsList: React.FC<ReservationsListProps> = ({ reservations }) => {
  return (
    <section className="grid grid-cols-1 gap-8">
      {reservations.map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </section>
  );
};

export default ReservationsList;

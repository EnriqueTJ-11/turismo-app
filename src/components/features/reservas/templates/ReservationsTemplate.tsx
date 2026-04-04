import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import ReservationsHeader from "@/components/features/reservas/organisms/ReservationsHeader";
import ReservationsList from "@/components/features/reservas/organisms/ReservationsList";
import ReservationsHelp from "@/components/features/reservas/organisms/ReservationsHelp";
import { getReservations } from "@/services/reservations";

const ReservationsTemplate = async () => {
  const reservations = await getReservations();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ReservationsHeader />
          <ReservationsList reservations={reservations} />
          <ReservationsHelp />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationsTemplate;

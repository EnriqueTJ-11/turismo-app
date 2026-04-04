import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import ReservationDetailHeader from "@/components/features/reservas/organisms/ReservationDetailHeader";
import ReservationDetailPlan from "@/components/features/reservas/organisms/ReservationDetailPlan";
import ReservationDetailItinerary from "@/components/features/reservas/organisms/ReservationDetailItinerary";
import ReservationDetailAttraction from "@/components/features/reservas/organisms/ReservationDetailAttraction";
import ReservationDetailSidebar from "@/components/features/reservas/organisms/ReservationDetailSidebar";
import { getReservationDetail } from "@/services/reservationDetail";

const ReservationDetailTemplate = async () => {
  const reservation = await getReservationDetail();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ReservationDetailHeader reservation={reservation} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ReservationDetailPlan plan={reservation.plan} />
              <ReservationDetailItinerary items={reservation.itinerary} />
              <ReservationDetailAttraction attraction={reservation.attraction} />
            </div>
            <ReservationDetailSidebar reservation={reservation} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationDetailTemplate;

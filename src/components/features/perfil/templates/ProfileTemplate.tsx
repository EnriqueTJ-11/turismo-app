import React from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import ProfileSidebar from "@/components/features/perfil/organisms/ProfileSidebar";
import ProfileWelcome from "@/components/features/perfil/organisms/ProfileWelcome";
import ProfileBookings from "@/components/features/perfil/organisms/ProfileBookings";
import ProfileHistory from "@/components/features/perfil/organisms/ProfileHistory";
import ProfileMapSection from "@/components/features/perfil/organisms/ProfileMapSection";
import { getProfile } from "@/services/profile";

const ProfileTemplate = async () => {
  const profile = await getProfile();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-8 p-4 md:p-10">
        <ProfileSidebar profile={profile} />
        <div className="flex-1 space-y-8">
          <ProfileWelcome
            name={profile.name.split(" ")[0]}
            upcomingTrips={profile.bookings.length}
          />
          <ProfileBookings bookings={profile.bookings} />
          <ProfileHistory history={profile.history} />
          <ProfileMapSection
            title={profile.map.title}
            subtitle={profile.map.subtitle}
            lat={profile.map.lat}
            lng={profile.map.lng}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileTemplate;

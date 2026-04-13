"use client";

import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/shared/organisms/Navbar";
import Footer from "@/components/shared/organisms/Footer";
import ProfileSidebar from "@/components/features/perfil/organisms/ProfileSidebar";
import ProfileWelcome from "@/components/features/perfil/organisms/ProfileWelcome";
import ProfileBookings from "@/components/features/perfil/organisms/ProfileBookings";
import ProfileHistory from "@/components/features/perfil/organisms/ProfileHistory";
import ProfileMapSection from "@/components/features/perfil/organisms/ProfileMapSection";
import EditProfileModal from "@/components/features/perfil/organisms/EditProfileModal";
import { getProfile, updateProfile } from "@/services/profile";
import { useAuth } from "@/context/AuthContext";
import { type ProfileData } from "@/types/profile";

const ProfileTemplate = () => {
  const { token, loading } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Usamos useCallback para que la función sea estable y no dispare useEffect innecesariamente
  const fetchProfile = useCallback(async () => {
    if (token) {
      try {
        const data = await getProfile(token);
        setProfile(data);
      } catch (error) {
        console.error("Error cargando perfil:", error);
      }
    }
  }, [token]);

  useEffect(() => {
    // Solo pedimos el perfil si el AuthContext terminó de cargar y tenemos un token
    if (!loading && token) {
      fetchProfile();
    }
  }, [token, loading, fetchProfile]);

  const handleEditProfileSave = async (data: { name: string; location: string; avatar: string; bio: string }) => {
    if (!token) return;

    try {
      setIsUpdating(true);
      await updateProfile(token, data);
      await fetchProfile(); // Refrescamos los datos desde Fuseki/Postgres
      setIsEditModalOpen(false); // Cerramos el modal solo tras el éxito
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Hubo un error al guardar los cambios.");
    } finally {
      setIsUpdating(false);
    }
  };

  // CORRECCIÓN: Si está cargando el Auth o si aún no tenemos el perfil, mostramos el loading
  if (loading || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-slate-500 font-medium">Cargando perfil amazónico...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900">
      <Navbar />

      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-8 p-4 md:p-10">
        {/* Sidebar con info básica y botón de editar */}
        <ProfileSidebar
          profile={profile}
          onEditProfile={() => setIsEditModalOpen(true)}
        />

        <div className="flex-1 space-y-8">
          {/* Bienvenida dinámica */}
          <ProfileWelcome
            name={profile.name.split(" ")[0]}
            upcomingTrips={profile.bookings.length}
          />

          {/* Secciones de Reservas y Mapas */}
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

      {/* Modal de Edición */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditProfileSave}
        initialData={{
          name: profile.name,
          location: profile.location,
          avatar: profile.avatar,
          bio: profile.bio || "",
        }}
      />
    </div>
  );
};

export default ProfileTemplate;
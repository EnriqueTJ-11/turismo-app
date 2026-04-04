import React from "react";

interface ProfileWelcomeProps {
  name: string;
  upcomingTrips: number;
}

const ProfileWelcome: React.FC<ProfileWelcomeProps> = ({
  name,
  upcomingTrips,
}) => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2 text-slate-900">
        ¡Hola de nuevo, {name}!
      </h1>
      <p className="text-slate-600">
        Tienes {upcomingTrips} aventuras próximas en el corazón de la selva.
      </p>
    </section>
  );
};

export default ProfileWelcome;

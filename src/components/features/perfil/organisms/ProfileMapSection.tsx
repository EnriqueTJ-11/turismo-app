import React from "react";
import ProfileMapClient from "@/components/features/perfil/organisms/ProfileMapClient";

interface ProfileMapSectionProps {
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
}

const ProfileMapSection: React.FC<ProfileMapSectionProps> = ({
  title,
  subtitle,
  lat,
  lng,
}) => {
  return (
    <section className="bg-white rounded-xl border border-primary/10 overflow-hidden">
      <div className="p-6 border-b border-primary/10">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <div className="h-64 relative">
        <ProfileMapClient lat={lat} lng={lng} />
      </div>
    </section>
  );
};

export default ProfileMapSection;

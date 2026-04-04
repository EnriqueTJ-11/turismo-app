import React from "react";
import ProfileHistoryRow from "@/components/features/perfil/molecules/ProfileHistoryRow";
import { type ProfileHistoryItem } from "@/types/profile";

interface ProfileHistoryProps {
  history: ProfileHistoryItem[];
}

const ProfileHistory: React.FC<ProfileHistoryProps> = ({ history }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-slate-900">
        Historial de viajes
      </h2>
      <div className="rounded-xl border border-primary/10 overflow-x-auto">
        <table className="min-w-[640px] w-full text-left bg-white border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-bold">Destino / tour</th>
              <th className="px-6 py-4 font-bold">Fecha</th>
              <th className="px-6 py-4 font-bold">Estado</th>
              <th className="px-6 py-4 font-bold text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {history.map((item) => (
              <ProfileHistoryRow key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfileHistory;

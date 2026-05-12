import { ProfileSchema } from "@/schemas/profile";
import { type ProfileData } from "@/types/profile";

export const getProfile = async (token: string): Promise<ProfileData> => {
  const response = await fetch("http://localhost:8000/usuarios/me/perfil", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("No se pudo cargar el perfil");
  }

  const data = await response.json();
  return ProfileSchema.parse(data);
};

export const updateProfile = async (
  token: string,
  profileData: { name: string; location: string; avatar: string; bio: string }
): Promise<ProfileData> => {
  const response = await fetch("http://localhost:8000/usuarios/me", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el perfil");
  }

  const data = await response.json();
  return ProfileSchema.parse(data);
};

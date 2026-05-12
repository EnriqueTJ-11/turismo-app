"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthUser {
  nombre_completo?: string;
  rol?: string;
  [key: string]: unknown;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (token: string, userData: AuthUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getStoredAuth = (): { token: string | null; user: AuthUser | null } => {
  if (typeof window === "undefined") {
    return { token: null, user: null };
  }

  const savedToken = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");

  if (!savedToken || !savedUser || savedUser === "undefined" || savedUser === "null") {
    return { token: null, user: null };
  }

  try {
    return { token: savedToken, user: JSON.parse(savedUser) as AuthUser };
  } catch (error) {
    console.error("Error al cargar sesion:", error);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { token: null, user: null };
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedAuth = getStoredAuth();
  const [user, setUser] = useState<AuthUser | null>(storedAuth.user);
  const [token, setToken] = useState<string | null>(storedAuth.token);
  const [loading] = useState(false);
  const router = useRouter();

  const login = (newToken: string, userData: AuthUser) => {
    setToken(newToken);
    setUser(userData);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/perfil");
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated: !!token, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};

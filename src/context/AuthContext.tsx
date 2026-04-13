"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Definimos qué información queremos que sea global
interface AuthContextType {
    user: any | null;
    token: string | null;
    login: (token: string, userData: any) => void;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // 1. Al cargar la app, revisamos si ya había una sesión guardada
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        // Validamos que existan y que NO sean la cadena de texto "undefined" o "null"
        if (savedToken && savedUser && savedUser !== "undefined" && savedUser !== "null") {
            try {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
            } catch (error) {
                // Si el JSON está mal formado, limpiamos todo para evitar bucles de error
                console.error("Error al cargar sesión:", error);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            }
        }
        setLoading(false);
    }, []);

    // 2. Función para iniciar sesión (se llama desde tu LoginForm)
    const login = (newToken: string, userData: any) => {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(userData));
        router.push("/perfil"); // Redirección inicial
    };

    // 3. Función para cerrar sesión
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
};
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type QueryParams = Record<string, string | number | boolean | null | undefined>;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const buildApiUrl = (path: string, params?: QueryParams) => {
  const url = new URL(path, API_BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
};

export const fetchApiJson = async <T>(
  path: string,
  params?: QueryParams,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(buildApiUrl(path, params), {
    cache: "no-store",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status} consultando ${path}`);
  }

  return response.json() as Promise<T>;
};

// Funcion para enviar mensajes al chatbot
export const sendChatMessage = async (message: string, userId?: string) => {
  try {
    const response = await api.post("/chat", {
      message,
      user_id: userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error en la comunicacion con el chatbot:", error);
    throw error;
  }
};

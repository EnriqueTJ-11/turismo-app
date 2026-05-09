import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Función para enviar mensajes al chatbot
export const sendChatMessage = async (message: string, userId?: string) => {
  try {
    const response = await api.post("/chat", {
      message,
      user_id: userId
    });
    return response.data;
  } catch (error) {
    console.error("Error en la comunicación con el chatbot:", error);
    throw error;
  }
};
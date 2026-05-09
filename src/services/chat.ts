import { api } from "@/lib/api";
import { ChatRequest, ChatResponse } from "@/types/chat";

export const sendChatMessage = async (payload: ChatRequest): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>("/api/v1/chat", payload);
  return response.data;
};

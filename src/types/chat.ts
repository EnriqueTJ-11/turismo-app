export interface ChatMessage {
  id: string | number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface ChatRequest {
  message: string;
  user_id: string;
}

export interface ChatResponse {
  output: string;
}

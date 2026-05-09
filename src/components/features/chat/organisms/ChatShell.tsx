"use client";

import React, { useState, useEffect } from "react";
import { ChatHeader } from "../molecules/ChatHeader";
import { MessageList } from "./MessageList";
import { ChatInput } from "../molecules/ChatInput";
import { ChatMessage } from "@/types/chat";
import { sendChatMessage } from "@/services/chat";
import { MessageCircle } from "lucide-react";

export const ChatShell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    // Persistir user_id en localStorage
    let storedId = localStorage.getItem("amaturis_user_id");
    if (!storedId) {
      storedId = `user_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("amaturis_user_id", storedId);
    }
    setUserId(storedId);

    // Cargar historial si existiera (opcional, por ahora solo recuperamos el ID)
  }, []);

  const handleSendMessage = async (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        message: text,
        user_id: userId,
      });

      const data = Array.isArray(response) ? response[0] : response;

      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: data.output || "No pude obtener una respuesta clara.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error en AmaTuris:", error);
      const errorMsg: ChatMessage = {
        id: Date.now() + 1,
        text: "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-96 mb-4 flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ChatHeader onClose={() => setIsOpen(false)} />
          <MessageList messages={messages} isLoading={isLoading} />
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2D5A27] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

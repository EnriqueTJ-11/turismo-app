"use client";

import React, { useEffect, useRef } from "react";
import { ChatMessage } from "@/types/chat";
import { MessageBubble } from "../molecules/MessageBubble";

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-4 bg-[#F8F9FA] space-y-2 scroll-smooth"
      style={{ minHeight: "300px", maxHeight: "450px" }}
    >
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-2 py-10">
          <p className="text-sm">Hola, soy AmaTuris</p>
          <p className="text-xs text-center px-6">¿En qué puedo ayudarte con tu viaje por el Caquetá hoy?</p>
        </div>
      )}
      
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {isLoading && (
        <div className="flex justify-start mb-4">
          <div className="bg-emerald-50 px-4 py-3 rounded-2xl rounded-tl-none border border-emerald-100 flex gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
          </div>
        </div>
      )}
    </div>
  );
};

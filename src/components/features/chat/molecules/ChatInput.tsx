"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-slate-100 flex items-center gap-2 rounded-b-2xl"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isLoading}
        placeholder="Escribe un mensaje..."
        className="flex-1 bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 rounded-xl px-4 py-2 text-sm transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!text.trim() || isLoading}
        className="bg-[#2D5A27] text-white p-2 rounded-xl hover:bg-[#23471e] transition-colors disabled:opacity-50 disabled:hover:bg-[#2D5A27]"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

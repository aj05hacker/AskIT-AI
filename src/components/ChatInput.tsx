import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 bg-white border-t shadow-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about student details..."
        className="flex-1 p-2 border border-[#3b0082] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b0082] transition-all"
        disabled={disabled}
      />

      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="p-2 text-white bg-[#3b0082] rounded-lg hover:bg-[#3b0082] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out transform"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};
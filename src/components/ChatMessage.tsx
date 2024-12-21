import React from 'react';
import { Message } from '../types/chat';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.role === 'assistant';

  return (
    <div
      className={`flex items-start space-x-2 animate-slideIn ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-[#3b0082] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-3 shadow-md transition-all hover:shadow-lg ${
          isBot
            ? 'bg-white text-gray-800'
            : 'bg-[#3b0082] text-white ml-auto'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-[#4a0099] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

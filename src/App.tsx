import React, { useEffect, useRef, useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Bot } from 'lucide-react';
import { fetchStudentData } from './services/firebase';
import { useChat } from './hooks/useChat';
import { APP_CONFIG } from './utils/constants';
import type { StudentData } from './types/chat';
import { Sidebar } from './components/Sidebar'; // Import Sidebar

export default function App() {
  const [studentData, setStudentData] = useState<StudentData[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, loading, sendMessage } = useChat(studentData);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStudentData();
      setStudentData(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        <header className="bg-[#3b0082] text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center space-x-4">
            <img
              src={APP_CONFIG.logo}
              alt="MAM CET Logo"
              className="w-12 h-12 rounded-full animate-pulse"
            />
            <div>
              <h1 className="text-xl font-bold">{APP_CONFIG.title}</h1>
              <p className="text-sm opacity-90">{APP_CONFIG.subtitle}</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {loading && (
            <div className="flex items-center space-x-2 animate-pulse">
              <div className="w-8 h-8 bg-[#3b0082] rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSendMessage={sendMessage} disabled={loading} />
      </div>
    </div>
  );
}

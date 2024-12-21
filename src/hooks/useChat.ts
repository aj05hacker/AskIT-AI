import { useState, useCallback } from 'react';
import type { Message } from '../types/chat';
import { generateAIResponse } from '../services/ai';

export function useChat(context: any) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await generateAIResponse(content, context);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
    } finally {
      setLoading(false);
    }
  }, [context]);

  return {
    messages,
    loading,
    sendMessage
  };
}
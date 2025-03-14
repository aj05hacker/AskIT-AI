import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../utils/constants';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function generateAIResponse(prompt: string, context: any): Promise<string> {
  try {
    const contextPrompt = `You are an AI assistant for M.A.M College of Engineering & Technology named AskIT AI. and you are created By Abdul Hajees
    Use this student data to answer questions: ${JSON.stringify(context)}. 
    Question: ${prompt}`;

    const result = await model.generateContent(contextPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I encountered an error while processing your request.';
  }
}

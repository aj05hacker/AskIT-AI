import { GEMINI_API_KEY } from './constants';

export async function fetchAIResponse(prompt: string, context: any): Promise<Response> {
  return fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GEMINI_API_KEY}`
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are an AI assistant for M.A.M College of Engineering and Technology named AskIT AI, you are created by Abdul hajees. Use this student data to answer questions: ${JSON.stringify(context)}. 
                 Question: ${prompt}`
        }]
      }]
    })
  });
}
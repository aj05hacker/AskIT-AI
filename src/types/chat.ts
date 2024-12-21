export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
}

export interface StudentData {
  id: string;
  name: string;
  department: string;
  year: number;
  marks: {
    subject: string;
    score: number;
    exam: string;
  }[];
}
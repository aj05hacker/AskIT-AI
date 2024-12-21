import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import type { StudentData } from '../types/chat';

const firebaseConfig = {
  apiKey: "AIzaSyDPs_ETDj1ja8yVEOIPDzsQfqkfOFh9sKA",
  authDomain: "mamcet-ai.firebaseapp.com",
  databaseURL: "https://mamcet-ai-default-rtdb.firebaseio.com",
  projectId: "mamcet-ai",
  storageBucket: "mamcet-ai.firebasestorage.app",
  messagingSenderId: "651882308996",
  appId: "1:651882308996:web:c19d4b0eb0591392cfe9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with explicit type
const db: Firestore = getFirestore(app);

/**
 * Fetches student data from Firestore
 * @returns Promise<StudentData[]>
 */
export async function fetchStudentData(): Promise<StudentData[]> {
  try {
    const marksCollection = collection(db, 'marks');
    const querySnapshot = await getDocs(marksCollection);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as StudentData));
  } catch (error) {
    console.error('Error fetching student data:', error);
    return [];
  }
}

export { db };
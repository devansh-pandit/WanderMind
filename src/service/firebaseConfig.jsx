// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wandermind-4df52.firebaseapp.com",
  projectId: "wandermind-4df52",
  storageBucket: "wandermind-4df52.firebasestorage.app",
  messagingSenderId: "758222057409",
  appId: "1:758222057409:web:f9494c3ac4a433476c0940",
  measurementId: "G-TQZH1BW2QM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
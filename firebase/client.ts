// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgAqD6-yAF0nDWMXTj7viVqzmKw_nO_40",
  authDomain: "prepproai.firebaseapp.com",
  projectId: "prepproai",
  storageBucket: "prepproai.firebasestorage.app",
  messagingSenderId: "910160595681",
  appId: "1:910160595681:web:97ccbafdeb5aa17d2ac5a0",
  measurementId: "G-F4WYKSNE44",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

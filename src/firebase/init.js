// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXfNqFOZOffgbxFzHqjFy-V_bCzEttIQY",
  authDomain: "fir-practice-c5770.firebaseapp.com",
  projectId: "fir-practice-c5770",
  storageBucket: "fir-practice-c5770.appspot.com",
  messagingSenderId: "742399651743",
  appId: "1:742399651743:web:50954f9e3114e83ff797aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
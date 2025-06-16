// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBpj39CdB_pbv4Rhl2FGx7_Z262zRFMsI",
  authDomain: "doorbell-ff8de.firebaseapp.com",
  projectId: "doorbell-ff8de",
  storageBucket: "doorbell-ff8de.firebasestorage.app",
  messagingSenderId: "1074211781326",
  appId: "1:1074211781326:web:b8a5010b384460f8982e9f",
  measurementId: "G-2VJQ7D4EZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEgBqE5QlSk5TvUIkuCj2RI3NhSr238BI",
  authDomain: "netflix-gpt-8fa66.firebaseapp.com",
  projectId: "netflix-gpt-8fa66",
  storageBucket: "netflix-gpt-8fa66.firebasestorage.app",
  messagingSenderId: "343722588549",
  appId: "1:343722588549:web:34fe307636be557a33ecec",
  measurementId: "G-95RVQZ1V3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
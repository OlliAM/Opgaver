// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2jNuoq8Y_C0-V4qf-4ImFFeRJMk701U",
  authDomain: "fir-project-smiler.firebaseapp.com",
  projectId: "fir-project-smiler",
  storageBucket: "fir-project-smiler.firebasestorage.app",
  messagingSenderId: "16626384802",
  appId: "1:16626384802:web:aec8215d61d0075e617cfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
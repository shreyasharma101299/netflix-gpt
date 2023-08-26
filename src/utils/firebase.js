// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLAV_MHR6aG7jKYjbHHn12ULAQHgzKf_8",
  authDomain: "netflix-gpt-ecde0.firebaseapp.com",
  projectId: "netflix-gpt-ecde0",
  storageBucket: "netflix-gpt-ecde0.appspot.com",
  messagingSenderId: "164228191238",
  appId: "1:164228191238:web:a4e266540bafb8e0b51f87",
  measurementId: "G-X0BCJMHZG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

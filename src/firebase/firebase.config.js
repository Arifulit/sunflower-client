// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR8dkKZaQGh8d9OAxBH7qvW-QZQ6_pIqU",
  authDomain: "assignment-10-sunflower-533f0.firebaseapp.com",
  projectId: "assignment-10-sunflower-533f0",
  storageBucket: "assignment-10-sunflower-533f0.firebasestorage.app",
  messagingSenderId: "271395609423",
  appId: "1:271395609423:web:8d7af321cb56cc1d71833a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
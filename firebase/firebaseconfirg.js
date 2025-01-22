// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
// Replace the keys below with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTAiBKo3eOhpM-caKP7nBPmgounbilZSM",
  authDomain: "user-authentication-41e35.firebaseapp.com",
  projectId: "user-authentication-41e35",
  storageBucket: "user-authentication-41e35.appspot.com",
  messagingSenderId: "436604325791",
  appId: "1:436604325791:web:c012d2d4c1cb0c86a777aa",
  measurementId: "G-7ZPCFWG6XT", // Optional, used for analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

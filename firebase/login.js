import { auth } from "./firebaseconfig.js";
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Google Provider
const provider = new GoogleAuthProvider();

// DOM Elements
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const googleBtn = document.querySelector("#googleBtn");

// Email/Password Login
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission reload
    console.log("Email:", email.value);
    console.log("Password:", password.value);

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in with Email/Password:", user);
            window.location = "index.html"; // Redirect to the home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Login Error:", errorMessage);
            alert(errorMessage); // Display error message
        });
});

// Google Authentication
googleBtn.addEventListener("click", () => {
    console.log("Google Authentication initiated...");

    // Sign in with Google
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken; // Google Access Token
            const user = result.user; // Signed-in user details
            console.log("Logged in with Google:", user);
            window.location = "index.html"; // Redirect to the home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Google Login Error:", errorMessage);
            alert(errorMessage); // Display error message
        });
});

import { createUserWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth, googleProvider } from "./firebaseconfig.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const googleLoginButton = document.querySelector("#google-login");
const p = document.querySelector("#error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    p.innerHTML = "";

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User registered:", user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            p.innerHTML = errorMessage;
        });
});

// Google Sign-In
googleLoginButton.addEventListener("click", () => {
    p.innerHTML = "";

    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log("User signed in with Google:", user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            p.innerHTML = errorMessage;
        });
});

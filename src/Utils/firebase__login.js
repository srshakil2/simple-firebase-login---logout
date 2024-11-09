import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsCcy89JjpN1m718QKD8t-yvo7n9Fzxvg",
  authDomain: "simple-firebase-login-c2bff.firebaseapp.com",
  projectId: "simple-firebase-login-c2bff",
  storageBucket: "simple-firebase-login-c2bff.firebasestorage.app",
  messagingSenderId: "1055859491385",
  appId: "1:1055859491385:web:5be570b7a839047bd483e8",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

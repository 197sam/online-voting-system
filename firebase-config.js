// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDknfzJO7-Nc5axh81n0sqYud1YXRnJr-0",
    authDomain: "online-voting-system-b782c.firebaseapp.com",
    projectId: "online-voting-system-b782c",
    storageBucket: "online-voting-system-b782c.firebasestorage.app",
    messagingSenderId: "436361843766",
    appId: "1:436361843766:web:2ea675521aec4e592e7497",
    measurementId: "G-BWZ4MZL72N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgewFw35I4zvpAEeJV8grWnwLIzMK_tIg",
    authDomain: "dragon-news-f31ec.firebaseapp.com",
    projectId: "dragon-news-f31ec",
    storageBucket: "dragon-news-f31ec.appspot.com",
    messagingSenderId: "357807637658",
    appId: "1:357807637658:web:e604d5f22944e3ec280b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCyP47_bYsONYLXJautNW1qwIDHLlrscWc",
    authDomain: "model-website-7c72b.firebaseapp.com",
    projectId: "model-website-7c72b",
    storageBucket: "model-website-7c72b.appspot.com",
    messagingSenderId: "545401058159",
    appId: "1:545401058159:web:04a76583f0db5dea5cae9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
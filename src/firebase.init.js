// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRRj-ZrbsF2JElT8ibngHX-SuD0UXUlgI",
  authDomain: "tech-blogs-5671d.firebaseapp.com",
  projectId: "tech-blogs-5671d",
  storageBucket: "tech-blogs-5671d.appspot.com",
  messagingSenderId: "544966905982",
  appId: "1:544966905982:web:d5f1f27da5fd115244482f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-lhEUYpsYpsPU-O8O-EEPW0NA5DVBxI",
  authDomain: "house-marketplace-app-58e42.firebaseapp.com",
  projectId: "house-marketplace-app-58e42",
  storageBucket: "house-marketplace-app-58e42.appspot.com",
  messagingSenderId: "826301061810",
  appId: "1:826301061810:web:bbc374b56df9bd80d0c7ab",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

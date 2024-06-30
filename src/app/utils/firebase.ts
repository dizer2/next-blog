// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4tvD_yTLs7caKwxwXRA0sqfks5EA4eo4",
  authDomain: "blog-d5c78.firebaseapp.com",
  projectId: "blog-d5c78",
  storageBucket: "blog-d5c78.appspot.com",
  messagingSenderId: "699346577447",
  appId: "1:699346577447:web:757f69ae5fdafb81504602",
  measurementId: "G-PQNYZZG9C1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
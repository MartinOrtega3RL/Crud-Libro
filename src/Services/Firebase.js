// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWd97QZ9DFdU9TUSzctddTF-OyHezCkms",
  authDomain: "crud-libro-a6620.firebaseapp.com",
  projectId: "crud-libro-a6620",
  storageBucket: "crud-libro-a6620.appspot.com",
  messagingSenderId: "848773134061",
  appId: "1:848773134061:web:c83fd5550e7820014fbee4",
  measurementId: "G-1N2VC33RDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

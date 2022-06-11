// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC38jhT6Pvl4Y-t3yM4QDvbn9nQuPIyJx0",
  authDomain: "house-marketplace-84ba4.firebaseapp.com",
  projectId: "house-marketplace-84ba4",
  storageBucket: "house-marketplace-84ba4.appspot.com",
  messagingSenderId: "352889029854",
  appId: "1:352889029854:web:0feb195df3732432206e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
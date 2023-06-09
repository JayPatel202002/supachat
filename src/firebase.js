// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhbWsJVQRAkfEsuvsQTYeZZZEHizYVPNI",
  authDomain: "superchat-90924.firebaseapp.com",
  projectId: "superchat-90924",
  storageBucket: "superchat-90924.appspot.com",
  messagingSenderId: "258867603184",
  appId: "1:258867603184:web:b68aeb9926fd4dfb000435",
  measurementId: "G-MYHL2H0WM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
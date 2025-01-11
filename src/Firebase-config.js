// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: "mathispot-26fa9.firebaseapp.com",
  projectId: "mathispot-26fa9",
  storageBucket: "mathispot-26fa9.firebasestorage.app",
  messagingSenderId: "322053686127",
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`,
  measurementId: "G-ZPNX7DCP76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffu8Z2ayExjN1ISkQb4HGcm_6ZGt4MMo",
  authDomain: "fir-test-29a87.firebaseapp.com",
  projectId: "fir-test-29a87",
  storageBucket: "fir-test-29a87.appspot.com",
  messagingSenderId: "820565578744",
  appId: "1:820565578744:web:a0d8cd1678f33a00533c0d",
  measurementId: "G-M8WD8PN2L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

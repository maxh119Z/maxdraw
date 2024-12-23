// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFhA7V3W43vNEjmbLvVYoQPwT9ghBgfrI",
  authDomain: "maxsdrawingssite.firebaseapp.com",
  projectId: "maxsdrawingssite",
  storageBucket: "maxsdrawingssite.appspot.com",
  messagingSenderId: "857291781776",
  appId: "1:857291781776:web:78d249255de3051eadca15",
  measurementId: "G-BSGM41DVS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();  
export const auth = getAuth(app);
export const db = getFirestore(app);

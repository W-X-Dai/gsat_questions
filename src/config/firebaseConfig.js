// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgjMElQaaYvd5ejp_wWpcS5roYgGbtjSk",
  authDomain: "gsatmath-81e64.firebaseapp.com",
  projectId: "gsatmath-81e64",
  storageBucket: "gsatmath-81e64.appspot.com",
  messagingSenderId: "965998415046",
  appId: "1:965998415046:web:ce7d9f1d75d7b34b6bdbc7",
  measurementId: "G-ML49593FGY",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb641LxlFz2hXYwKaLJYmg7eMQp8cBloQ",
  authDomain: "oval-malaysia-website.firebaseapp.com",
  projectId: "oval-malaysia-website",
  storageBucket: "oval-malaysia-website.appspot.com",
  messagingSenderId: "39524162889",
  appId: "1:39524162889:web:a9d19815ade167c1f74e98",
  measurementId: "G-2XG8MWWW65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };

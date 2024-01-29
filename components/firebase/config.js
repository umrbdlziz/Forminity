import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import dynamicLinks from "@react-native-firebase/dynamic-links";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_zyFuhZMB6zl86V_k9C-7eFOlOVDSr3A",
  authDomain: "forminity-4a8dd.firebaseapp.com",
  projectId: "forminity-4a8dd",
  storageBucket: "forminity-4a8dd.appspot.com",
  messagingSenderId: "1033154007968",
  appId: "1:1033154007968:web:a87f9c5fd21719566fcac5",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export { dynamicLinks };

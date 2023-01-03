import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCEXsXcd-54Zge5c_A5-L_jOEiJZRg32hQ",
  authDomain: "instagramclone-4e421.firebaseapp.com",
  projectId: "instagramclone-4e421",
  storageBucket: "instagramclone-4e421.appspot.com",
  messagingSenderId: "955876154194",
  appId: "1:955876154194:web:70303638eea11c97b6388b",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
const db = firebase.firestore();
export { firebase, db };

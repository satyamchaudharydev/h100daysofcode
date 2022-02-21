import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCKaQqE2ZtwVlpLbmQTFgyWdoktYqGwQF8",
  authDomain: "shakushal-8f9c4.firebaseapp.com",
  databaseURL: "https://shakushal-8f9c4-default-rtdb.firebaseio.com",
  projectId: "shakushal-8f9c4",
  storageBucket: "shakushal-8f9c4.appspot.com",
  messagingSenderId: "918819660482",
  appId: "1:918819660482:web:2f6a0f9f7b12bfc21b515b",
};

// Initialize Firebase
export const googleProvider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app)

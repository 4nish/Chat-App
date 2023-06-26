import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZltXZNNgFEuLELCHFJVscwxiJvtmqfJw",
    authDomain: "chat-app-bcfd0.firebaseapp.com",
    projectId: "chat-app-bcfd0",
    storageBucket: "chat-app-bcfd0.appspot.com",
    messagingSenderId: "98550762377",
    appId: "1:98550762377:web:9dcc884104d03e3064af58",
    measurementId: "G-5KJJ7Z7859"
  };

let app;

try {
  app = firebase.initializeApp(firebaseConfig);
} catch (error) {
  app = firebase.app(); // Use the existing app instance
}

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

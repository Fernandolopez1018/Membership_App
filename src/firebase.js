//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCaIppa4TblOnf_uBKsR72_5v4MTqxd-Bs",
  authDomain: "membership-app-84b37.firebaseapp.com",
  projectId: "membership-app-84b37",
  storageBucket: "membership-app-84b37.appspot.com",
  messagingSenderId: "230644042262",
  appId: "1:230644042262:web:9b8e392ae4208d11b10337"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

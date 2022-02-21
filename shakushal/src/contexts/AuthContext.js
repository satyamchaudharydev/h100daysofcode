import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import { db } from "../firebase/firebase-config";
import { getDoc } from "@firebase/firestore";
import {
  TwitterAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { collection, getDocs, doc, addDoc, setDoc } from "@firebase/firestore";
const AuthContext = React.createContext();
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const productCollections = collection(db, "products");

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [cartData, setCartData] = useState([]);
  const [mini, setMini] = useState(false);
  const [singleDoc, setSingleDoc] = useState();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  const [cartChange, setCartChange] = useState('change');


  function signInGoogle() {
    return signInWithPopup(auth, googleProvider);
  }
  function reset(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }
  function userData(data) {
    const userCollections = doc(db, "users", auth.currentUser.email);
    const col = collection(userCollections, "cart");
    return addDoc(col, data);
  }
  async function cartDataFetch() {
    const userCollections = doc(db, "users", auth.currentUser.email);
    const col = collection(userCollections, "cart");
    const data = await getDocs(col);

    setCartData(data.docs.map((doc) => ({ ...doc.data() })));
  }
  async function getSigleData(id) {
    const docRef = doc(db, "products", id);
    return getDoc(docRef);
  }
  function signInTwitter() {
    return signInWithPopup(auth, twitterProvider);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function getData() {
    const data = await getDocs(productCollections);
    setProductList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setDataLoading(false);
  }
  onAuthStateChanged(auth, (current) => {
    setCurrentUser(current);
    setLoading(false);
  });
  function logout() {
    return signOut(auth);
  }
  const value = {
    currentUser,
    signup,
    logout,
    login,
    signInTwitter,
    signInGoogle,
    reset,
    getData,
    mini,
    userData,
    setMini,
    cartData,
    cartChange,
    setCartChange,
    openCart,
    setOpenCart,
    getSigleData,
    setDataLoading,
    cartDataFetch,
    dataLoading,
    productList,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

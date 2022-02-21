import React, { useContext, useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { updateDoc } from "firebase/firestore";
// import {
//   get
// } from "@firebase/auth";

const productCollections = collection(db, "products");

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [lists, setLists] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  function createProduct(title, desc, category,subcategory,rating,images, price, discount) {
    const categorySplit = subcategory.split(",");
    return addDoc(productCollections, {
      title,
      desc,
      category,
      subcategory: categorySplit,
      rating,
      images: [...images],
      price,
      discount,
    });
  }

  function getData() {
    return getDocs(productCollections);
  }
  async function dltData(id) {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
  }
  async function updateData(id, title, desc, category,subcategory,price, discount) {
    const singleDoc = doc(db, "products", id);
    const newFields = {
      title,
      desc,
      category,
      subcategory: subcategory.split(","),
      price,
      discount,
    };
    await updateDoc(singleDoc, newFields);
  }
  async function fetchData() {
    const data = await getDocs(productCollections);
    setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false)
  }
  const value = {
    createProduct,
    getData,
    fetchData,
    lists,
    loading,
    productCollections,
    dltData,
    updateData,
    dataLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

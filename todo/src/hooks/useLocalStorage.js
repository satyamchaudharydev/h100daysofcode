import React from "react";
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );
  const setValue = (value) => {
    //   check if function 
    const valueToStore = value instanceof Function ? value(localStorageValue) : value;
    // set to state
    setLocalStorageValue(value)
    localStorage.setItem(key,JSON.stringify(value))
  }
  return [localStorageValue, setValue];
}

function getLocalStorageValue(key,initialValue) {
  const itemFromLocalStorage = localStorage.getItem(key);
  return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue;
}

import React, { useEffect } from "react";
import { Input } from "./AddressInput";
import { Result } from "./AddressResult";
import { Sidenav } from "./Sidenav";
import { Outlet } from "react-router";
import { useProvider } from "./StateContext";
export const AddressPage = () => {
const {valueID, setValueID} = useProvider();
useEffect(() => {
  setValueID(1);
}, [])    
  return (
    <>
      <div className="main-section">
        <Input />
        <Result />
      </div>
    </>
  );
};

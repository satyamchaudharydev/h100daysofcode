import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useProvider() {
  return useContext(AuthContext);
}

export function StateProvider({ children }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [valueID, setValueID] = useState(0);
  const [id, setId] = useState();
  const [dropDownText, setDropDownText] = useState("ltd");
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [singleDetailData, setSingleDetailData] = useState({
    score: 89,
    address: "this is af",
    name: "thisksfd",
  });
  const [list, setList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const value = {
    isSubmit,
    list,
    valueID,
    setValueID,
    setList,
    id,
    dropDownText,
    setDropDownText,
    singleDetailData,
    setSingleDetailData,
    error,
    loader,
    setLoader,
    companyError,
    setCompanyError,
    setError,
    setIsSubmit,
    loading,
    setLoading,
    addressList,
    setAddressList,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

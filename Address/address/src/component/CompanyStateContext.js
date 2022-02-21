import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useProvider() {
  return useContext(AuthContext);
}

export function CompanyStateProvider({children}) {
    const [isSubmit,setIsSubmit] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [list,setList] = useState([])
    const value = {
      isSubmit,
      list,
      setList,
      error,
      setError,
      setIsSubmit,
      loading,
      setLoading,
    };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
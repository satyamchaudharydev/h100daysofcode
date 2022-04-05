import React from "react";
import { Nav } from "./Nav";
import { Result } from "./Result";

export const HomePage = ({
  countries,
  setCountries,
  darkMode,
  setDarkMode,
}) => {
  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}></Nav>
      <Result
        countries={countries}
        darkMode={darkMode}
        setCountries={setCountries}
      ></Result>
    </>
  );
};

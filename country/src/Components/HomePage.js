import React from "react";
import { Nav } from "./Nav";
import { Result } from "./Result";

export const HomePage = ({ countries, setCountries }) => {
    
  return (
    <>
      <Nav></Nav>
      <Result countries={countries} setCountries={setCountries}></Result>
    </>
  );
};

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import { data } from "../data";
import { Link } from "react-router-dom";
import { code } from "./CountryCode";
import { motion } from "framer-motion";
export const CountryPage = ({ countries, darkMode, setDarkMode }) => {
  const [info, setInfo] = useState("");
  const { country } = useParams();
  const fetchCountryData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    const data = await response.json();
    setInfo(data[0]);
    console.log(data);
  };
  //   make a function to check if property exists
  const checkProperty = (property) => {
    if (property) {
      return property;
    } else {
      return false;
    }
  };
  const countryCode = (short) => {
    return (
      code.find((c) => c.code === short) || code.find((c) => c.name === short)
    );
  };

  useEffect(() => {
    if (countries.length !== 0) {
      console.log("fetching data");
      const countryData = countries.find((c) => c.name.common === country);
      setInfo(countryData);
    } else {
      fetchCountryData();
    }
  }, [country]);
  //   let nativeName = info.name.nativeName;
  return (
    <>
      {info && (
        <>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode}></Nav>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="country-page"
            style={{ color: darkMode ? "#fafafa" : "#202C36" }}
          >
            <Link to="/">
              <button
                className="back-btn"
                style={{
                  color: darkMode && "#fff",
                  background: darkMode && "#2B3844",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  width="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <p>Back</p>
              </button>
            </Link>
            <div className="info-container">
              <img src={`${info.flags.svg}`} alt="" />
              <div className="info">
                <div className="info-top">
                  <h2 style={{ fontSize: 32 }}>
                    {checkProperty(info.name.common)}
                  </h2>
                  <div className="info-desc">
                    <div className="first-row">
                      <p>
                        <strong>Native Name:</strong>
                        {checkProperty(
                          info.name.nativeName[
                            Object.keys(info.name.nativeName)[0]
                          ].common
                        )}
                      </p>
                      <p>
                        <strong>Population:</strong>
                        {checkProperty(info.population)}
                      </p>
                      <p>
                        <strong>Region:</strong> {checkProperty(info.region)}
                      </p>
                      <p>
                        <strong>Sub Region:</strong>
                        {checkProperty(info.subregion)}
                      </p>
                      <p>
                        <strong>Capital:</strong> {checkProperty(info.capital)}
                      </p>
                    </div>
                    <div className="second-row">
                      <p>
                        <strong>Top Level Domain:</strong>
                        {checkProperty(info.tld).toString()}
                      </p>
                      <p>
                        <strong>Currencies:</strong>

                        {checkProperty(info.currencies) &&
                          info.currencies[Object.keys(info.currencies)[0]]
                            .name +
                            " " +
                            info.currencies[Object.keys(info.currencies)[0]]
                              .symbol}
                      </p>
                      <p>
                        <strong>Languages:</strong>
                        {Object.keys(info.languages)
                          .map((l) => info.languages[l])
                          .toString()}
                        {/* {checkProperty(info.languages) &&
                          info.borders.map((border) => <p>{border}</p>)} */}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info-bottom">
                  <strong>Border Countries:</strong>
                  <div className="border-items">
                    {checkProperty(info.borders)
                      ? info.borders.map((border) => (
                          <Link to={`/${countryCode(border).name}`}>
                            <div
                              className="border-item"
                              style={{
                                color: darkMode && "#fff",
                                background: darkMode && "#2B3844",
                              }}
                            >
                              {countryCode(border) && (
                                <p>{countryCode(border).name}</p>
                              )}
                            </div>
                          </Link>
                        ))
                      : "No Data Available"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

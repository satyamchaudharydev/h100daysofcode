import React from "react";
import { Search } from "./Search";
import { data } from "../data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
export const Result = ({ countries, setCountries }) => {
  const [filterData, setFilterData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setFilterData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const FilterCountry = (region) => {
    let filtered = countries.filter((c) => c.region === region);
    console.log(filtered)
    setFilterData(filtered);
  };

  return (
    <>
      <div className="result">
        <Search FilterCountry={FilterCountry} setFilterData={setFilterData} countries={countries}></Search>
        <div className="cards">
          {filterData.map((country) => (
            //   const {flag, population, region, capital, currencies } = country;
            <Link to={`/${country.name.common}`}>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="card"
                key={country.name.common}
              >
                <div className="flag">
                  <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                  />
                </div>
                <div className="info">
                  <h3>{country.name.common}</h3>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>{country.cca3}</p>
                  <p>{/* <strong>Capital:</strong> {country.capital.map} */}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

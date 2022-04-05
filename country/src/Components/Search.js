import React from "react";
import { FilterBtn } from "./FilterBtn";

const dropdownItem = ["Asia", "Africa", "Americas", "Europe", "Oceania"];

export const Search = ({ FilterCountry, countries, setFilterData,darkMode }) => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState("");

  // make a function for input changing and also results
  const handleChange = (e) => {
    setText(e);
    let names = countries.map((country) => country.name.common);
    let filtered = names.filter((name) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(filtered);
    setFilterData(countries.filter((country) => filtered.includes(country.name.common)));

    // FilterCountry(filtered);
  };

  return (
    <div className="filter-container">
      <div
        className="input-container"
        style={{ background: darkMode && "#2B3844", color: darkMode && "#fafafa" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="currentColor"
          />
        </svg>
        <input
          style={{ color: darkMode && "#fff" }}
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Seach for a Country"
        />
      </div>
      <div className="dropdown">
        <div className="dropdown-item">
          <p
            className="bg-white filter-text"
            style={{
              background: darkMode && "#2B3844",
              color: darkMode && "#fff",
            }}
            onClick={() => setShow(!show)}
          >
            Filter by Region{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              width="20px"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          {show && (
            <div
              className="dropdown-content"
              style={{
                background: darkMode && "#2B3844",
                color: darkMode && "#fff",
              }}
            >
              {dropdownItem.map((item, index) => (
                <FilterBtn
                  index={index}
                  item={item}
                  FilterCountry={FilterCountry}
                ></FilterBtn>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

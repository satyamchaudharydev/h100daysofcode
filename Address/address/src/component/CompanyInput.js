import { React, useState } from "react";
import { DropDownText } from "./DropDownText";
import { useProvider } from "./StateContext";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
const dropDownTextList = ["ltd", "non ltd"];
export const CompanyInput = () => {
  const [text, setText] = useState("");
  const [value,setValue] = useState(0)
  const [dropDownText, setDropDownText] = useState("ltd");
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilter = (filter) => {
    console.log(dropDownText)
     setSearchParams({search:text, dropDownText });
  };
  const {
    isSubmit,
    setIsSubmit,
    loading,
    setLoading,
    addressList,
    setAddressList,
    setCompanyError,
    id,
  } = useProvider();

  const fetchData = (text) => {
    const searchTerm = text || searchParams.get("search");

    setLoading(true);
    console.log(dropDownText)
    if (dropDownText === "ltd") {
      fetch(
        `https://wt16zd8y6g.execute-api.eu-west-2.amazonaws.com/Prod/api/company/search?name=${searchTerm}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("this happened");
            setCompanyError(true);
          }
        })
        .then((data) => {
          console.log(data.searchedCompanies);
          setAddressList(data.searchedCompanies);
          setLoading(false);
          console.log(data.searchedCompanies);
          if (data.searchedCompanies === 0) {
            console.log("error");
            setCompanyError(true);
          }
        });
    } else {
      fetch(
        `https://wt16zd8y6g.execute-api.eu-west-2.amazonaws.com/Prod/api/company/search-sole-trader?name=${searchTerm}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setCompanyError(true);
          }
        })
        .then((data) => {
          console.log(data.searchedCompanies);
          setAddressList(data.searchedCompanies);
          setLoading(false);
          if (data.searchedCompanies === 0) {
            setCompanyError(true);
          }
        });
    }
  };
  const handleSubmit = (e) => {
    setSearchParams({ search: text, filter: dropDownText });
    setCompanyError(false);
    e.preventDefault();
    setIsSubmit(true);
    fetchData(text);
  };
   const handleResult = (e) => {
     setSearchParams({ search: text, filter: dropDownText });
     setCompanyError(false);
     setIsSubmit(true);
     fetchData(text);
   };
  // const handleFilter = (list) => {
  //   if (list.length === 0) {
  //     setSearchParams({ search: text, ltd: dropDownText });
  //     fetchData();
  //   }
  // };
  return (
    <div className="input-container">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        {dropDownOpen && (
          <div className={`dropdown-box`}>
            {dropDownTextList.map((item, index) => {
              return (
                <DropDownText
                  setDropDownText={setDropDownText}
                  text={item}
                  index={index}
                  value={value}
                  updateFilter={updateFilter}
                  handleResult={handleResult}
                />
              );
            })}
          </div>
        )}

        <div
          className="dropdown"
          onClick={() => setdropDownOpen(!dropDownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            width="18px"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <p>{dropDownText}</p>
        </div>
        <input
          type="text"
          value={text}
          placeholder="Your Company Name"
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">
          {text.length > 0 ? (
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 56.7 56.7" class="search-icon">
              <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

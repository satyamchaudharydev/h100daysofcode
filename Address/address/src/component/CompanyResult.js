import { React, useEffect } from "react";
import { CompanyCard } from "./CompanyCard";
import { Loader } from "./Loader";
import { useProvider } from "./StateContext";
import { useParams } from "react-router";
export const CompanyResult = () => {
  const {
    isSubmit,
    setIsSubmit,
    addressList,
    loading,
    setLoading,
    companyError,
    setAddressList,
    inputText,
    setCompanyError,
    dropDownText,
  } = useProvider();
  return (
    <>
      <div className="details-container">
        {!loading && !companyError ? (
          <>
            <div className="company-results">
              <div className="company-wrapper">
                {addressList.map((item, index) => {
                  const { name, number } = item;
                  return <CompanyCard text={name} id={number} />;
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="result-mesg">
            {loading && <Loader />}
            {companyError && <p>Not able to Found</p>}
          </div>
        )}
      </div>
    </>
  );
};

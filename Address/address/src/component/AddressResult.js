import React from "react";
import { Card } from "./AddressCard";
import { useProvider } from "./StateContext";
export const Result = () => {
  const { isSubmit, setIsSubmit, list, loading, setLoading, error } =
    useProvider();

  return (
    <>
      {!loading && !error ? (
        <>
          <div className="results">
            {list.map((item) => {
              const {
                meterTimeSwitchCode,
                profileClass,
                mpan,
                lineLossFactorClassId,
                address1,
                address2,
                address3,
                address4,
                address5,
                address6,
                address7,
                address8,
                address9,
              } = item;

              return (
                <Card
                  profile={profileClass}
                  mpan={mpan}
                  code={meterTimeSwitchCode}
                  llfc={lineLossFactorClassId}
                  address1={address1}
                  address2={address2}
                  address3={address3}
                  address4={address4}
                  address5={address5}
                  address6={address6}
                  address7={address7}
                  address8={address8}
                  address9={address9}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="result-mesg">
          {loading && <p>Loading...</p>}
          {error && <p>This is not a valid mpan or postal code</p>}
        </div>
      )}
    </>
  );
};

import { React, useState } from "react";

export const Card = ({
  mpan,
  profile,
  code,
  llfc,
  address1,
  address2,
  address3,
  address4,
  address5,
  address6,
  address7,
  address8,
  address9,
}) => {
  const [animate, setAnimate] = useState(false);
  function sliceText(text, from, to) {
    return text.slice(from, to);
  }

  function handleCopy() {
    setAnimate(true);
    navigator.clipboard.writeText(`S${profile}${code}${llfc}${mpan}`);
  }
  function checkEmptyString(text) {
    if (text === " ") return "";
    else {
      return text;
    }
  }

  return (
    <div className="card">
      <div className="mpan-box">
        <div
          className={`copy-icon ${animate && "copy-animate"}`}
          onClick={() => handleCopy()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            width="20px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <div className="mpan-container">
          <div className="mpan-header">
            <div>
              <p>{profile}</p>
            </div>
            <div>
              <p>{code}</p>
            </div>
            <div>
              <p>{llfc}</p>
            </div>
          </div>
          <div className="mpan-footer">
            <div>
              <p>{sliceText(mpan, 0, 2)}</p>
            </div>
            <div>
              <p>{sliceText(mpan, 2, 6)}</p>
            </div>
            <div>
              <p>{sliceText(mpan, 6, 10)}</p>
            </div>
            <div>
              <p>{sliceText(mpan, 10, 13)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="address-container">
        <div className="address-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            width="16px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p style={{ fontSize: "13px" }}>Address</p>
        </div>

        <p className="main-address-text">
          {`${checkEmptyString(address1)} ${checkEmptyString(
            address2
          )} ${checkEmptyString(address3)} ${checkEmptyString(
            address4
          )} ${checkEmptyString(address5)} ${checkEmptyString(
            address6
          )} ${checkEmptyString(address7)} ${checkEmptyString(
            address8
          )} ${checkEmptyString(address9)}`}
        </p>
      </div>
    </div>
  );
};

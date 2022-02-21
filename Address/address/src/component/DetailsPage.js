import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Loader } from "./Loader";
import { useProvider } from "./StateContext";
export const DetailsPage = () => {
  let { id } = useParams();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const { loader, setLoader } = useProvider();
  const [percent, setPercent] = useState(10);
  const [progressClr, setProgressClr] = useState("green");
  const [progressMessg, setProgressMessg] = useState("");
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  async function fetchDetail(id) {
    setLoader(true);
    const res = await fetch(
      `https://wt16zd8y6g.execute-api.eu-west-2.amazonaws.com/Prod/api/company/${id}`
    );
    const data = res.json().then((data) => {
      console.log(data.creditScore.score);
      setPercent((prev) => data.creditScore.score);
      setName(data.name);
      setAddress(data.address);
      setLoader(false);
    });
  }
  useEffect(() => {
    fetchDetail(id);
    document.documentElement.style.setProperty("--percent", `${percent}`);
    if (between(percent, 90, 100)) {
      setProgressMessg("impervsice");
      setProgressClr("green");
    } else if (between(percent, 75, 90)) {
      setProgressMessg("Very good");
      setProgressClr("#37d796");
    } else if (between(percent, 50, 75)) {
      setProgressMessg("good");
      setProgressClr("#3f52b5");
    } else if (between(percent, 25, 50)) {
      setProgressMessg("fair");
      setProgressClr("#ff9900");
    } else if (between(percent, 0, 25)) {
      setProgressMessg("poor");
      setProgressClr("#ff5820");
    }
  }, [percent]);

  return (
    <>
      <div className="details-container">
        <div className="detail-header-section">
          <div className="back-button">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <p className="back-text">Back</p>
          </div>
          <div className="detail-title">Details</div>
        </div>
        {!loader ? (
          <div className="detail-main-section">
            <div className="credit-score detail-main-item">
              {" "}
              <div className="detail-main-item-title">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <p style={{ margin: 0 }}>Credit Score</p>
              </div>
              <div className="credit-container">
                <div class="box">
                  <div class="percent">
                    <svg>
                      <circle cx="70" cy="70" r="50"></circle>
                      <circle
                        style={{ stroke: `${progressClr}` }}
                        cx="70"
                        cy="70"
                        r="50"
                      ></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        {percent}
                        <span>%</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <p
                  style={{ background: progressClr }}
                  className="credit-score-text"
                >
                  {progressMessg}
                </p>
              </div>
            </div>
            <div className="name detail-main-item">
              <div className="detail-main-item-title">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <p>Name</p>
              </div>
              <p>{name}</p>
            </div>
            <div className="address detail-main-item">
              <div className="detail-main-item-title">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <p>Address</p>
              </div>
              <p>{address}</p>
            </div>
          </div>
        ) : (
          <div className="result-mesg">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

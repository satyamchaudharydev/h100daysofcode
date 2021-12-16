import healthconcern from "../data/healthconcernData"
import { React, useState } from "react";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
const HealthConcern = () => {
    const [marginhealth,setMarginHealth] = useState(0)
    return (
      <>
        <div className="health">
          <h1 className="title">Shop by Health Concerns</h1>
          <div className="carousel-btn slider">
            <NextButton
              component={setMarginHealth}
             
            ></NextButton>
            <PrevButton component={setMarginHealth}></PrevButton>
          </div>
          <div
            className="health-container"
            style={{ marginLeft: -marginhealth * 300 }}
          >
            {healthconcern.map((item) => {
              return (
                <div className="health-item">
                  <img src={item.img} alt="" />
                  <p className="health-text">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default HealthConcern
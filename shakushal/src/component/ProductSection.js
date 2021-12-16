import { React, useState } from "react";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import Shopbtn from "./Shopbtn";
const ProductSection = ({ info, heading }) => {
  const rateTotal = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="products-container" style={{paddingInline:'5em'}}>
        <h1 className="title">{heading}</h1>
              <div className="products">

        <div className="carousel-btn slider">
          <NextButton component={setCount}></NextButton>
          <PrevButton component={setCount}></PrevButton>
        </div>
        <div className="product-section" style={{ marginLeft: -count * 200 }}>
          {info.map((item) => {
            const { category, title, price, discount, rating, img } = item;
            return (
              <div className="product">
                <img className="product-img" src={img} alt="" />
                <h2 className="title">{title}</h2>
                <div className="rating">
                  {rateTotal.map((item) => (
                    <img
                      className="rating-none"
                      src="./images/rate.svg"
                      alt=""
                    />
                  ))}
                </div>
                <div className="price-section">
                  <div className="price">
                    <span class="ruppe">₹</span>
                    {Math.round((price / 100) * discount)}
                  </div>
                  <div className="discount">{discount}%</div>
                  <div className="discount-price">₹{price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};
export default ProductSection;

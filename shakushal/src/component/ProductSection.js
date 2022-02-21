import { React, useState } from "react";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import Shopbtn from "./Shopbtn";
import { Title } from "./Title";
import { CartIcon } from "./CartIcon";
import Productcard from "./Productcard";

const ProductSection = ({ info, heading }) => {
  const rateTotal = [1, 2, 3, 4, 5];
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        className="products-container border product-home"
        style={{ paddingInline: "5em" }}
      >
        <h1 className="title">{heading}</h1>
        <div className="products">
          <div className="carousel-btn slider">
            <NextButton component={setCount}></NextButton>
            <PrevButton component={setCount}></PrevButton>
          </div>
          <div className="product-section" style={{ marginLeft: -count * 200 }}>
            {
              info.map((item) => {
                const {id,category, title, price, discount, rating, images } = item;
                return <Productcard
                  title={title}
                  id={id}
                  price={price}
                  discount={discount}
                  rating={rating}
                  img={images}
                  category={category}
                />
              })
            
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSection;

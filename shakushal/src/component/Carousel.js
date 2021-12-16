import Shopbtn from "./Shopbtn";
import data from "../data/carouselData";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton"

import { React, useRef, useEffect, useState } from "react";
const Carousel = () => {
    const [slideIndex,setSlideIndex] = useState(0)
  const [width, setWidth] = useState("100px");
  const [height, setHeight] = useState("100px");
  let text = 'Shop Now'
  const refElem = useRef(0);

   useEffect(() => {
     const lastSlide = data.length - 1;
     if (slideIndex < 0) {
       setSlideIndex(lastSlide);
     }
     if (slideIndex > lastSlide) {
       setSlideIndex(0);
     }
   }, [slideIndex]);
//   useEffect(() => {
//     setWidth(refElem.current.getBoundingClientRect().width + 100);
//     setHeight(refElem.current.getBoundingClientRect().height);
//   }, []);

  return (
    <>
      <div className="carousel">
        <div className="carousel-item active carousel-btn">
          <NextButton component={setSlideIndex} />
          <PrevButton component={setSlideIndex} />
          
        </div>
        {data.map((elm, index) => {
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }

          if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={`carousel-item ${position}`}>
              <div className="img-section">
                <img src={elm.img} alt="" />
              </div>
              <div className="product-info">
                <h1 className="product-title">{elm.title}</h1>
                <p className="product-desc">{elm.desc}</p>
                <div className="button-container">
                  <div className="cart-btn center">
                    <img src="./images/icon-cart.svg" alt="" />
                    <p>Add to cart</p>
                  </div>
                  <Shopbtn title={text} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Carousel;

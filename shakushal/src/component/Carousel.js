import Shopbtn from "./Shopbtn";
import data from "../data/carouselData";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";
import { React, useRef, useEffect, useState } from "react";
import Cartbtn from "./Cartbtn";
import { useAuth } from "../contexts/AuthContext";
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  let text = "Shop Now";

  useEffect(() => {
    const lastSlide = data.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastSlide);
    }
    if (slideIndex > lastSlide) {
      setSlideIndex(0);
    }
  }, [slideIndex]);

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
              <div className="img">
                <img
                  style={{ width: 360 }}
                  src="https://firebasestorage.googleapis.com/v0/b/shakushal-8f9c4.appspot.com/o/images%2F0fitness.png?alt=media&token=712a4aab-ab6f-43b2-b84f-4893beea40aa"
                  alt=""
                />
              </div>
              <div className="product-info">
                <h1 className="product-title">{elm.title}</h1>
                <p className="product-desc">{elm.desc}</p>
                <div className="button-container">
                  <Cartbtn />
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

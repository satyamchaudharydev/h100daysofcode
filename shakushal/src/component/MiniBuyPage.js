import Nav from "./Nav";
import images from "../data/image";
import Rating from "./Rating";
import Cartbtn from "./Cartbtn";
import Imgoption from "./Imgoption";
import { useState, useEffect } from "react";
import buyTag from "../data/buyTag";
import Buydesc from "../data/buydescription";
import Buytags from "./Buytags";
import RealtedSection from "./Relatedproducts";
import Footer from "./Footer";
import Buyorder from "./Buyorder";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

import { useParams, useNavigate } from "react-router-dom";
import { BsTypeH1 } from "react-icons/bs";

const ingred = Buydesc.map((item) => item.ingredients);
const benefit = Buydesc.map((item) => item.benefit);
const MiniBuyPage = () => {
  const infoRef = React.useRef();
  const navigate = useNavigate();

  const [tagCount, setTagCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState(null);
  const { getSigleData,setMini } = useAuth();
  const [value, setValue] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    getSigleData(id).then((doc) => {
      setSingleData(doc.data());
    });
    setMini(true)
  }, []);

  useEffect(() => {
    const lastSlide = images.length - 1;
    if (value < 0) {
      setValue(lastSlide);
    }
    if (value > lastSlide) {
      setValue(0);
    }
  }, [value]);

  return (
    <>
     
      <div className="mini-buy-page-container">
        <div className="mini-buy-page">
          <div className="mini-buy-page-header">
            <h2 className="mini-buy-page-header-text">
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
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
              Details
            </h2>
            <div
              className="mini-buy-page-close-btn center"
              onClick={() => {navigate("/shop"); setMini(false)}}
            >
              <svg
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#111"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="main-buy-product-info-container">
            <div className="buy-img-container">
              <div className="buy-img-section">
                {singleData &&
                  singleData.images.map((item, index) => {
                    let position = "buy-nextSlide";
                    if (value === index) {
                      position = "buy-activeSlide";
                    }
                    if (
                      index === value - 1 ||
                      (value === 0 && index === images.length - 1)
                    ) {
                      position = "buy-lastSlide";
                    }

                    return (
                      <div className={`img-view ${position}`}>
                        <img src={item} alt="" />
                      </div>
                    );
                  })}
              </div>
              <div className="buy-img-option">
                {singleData &&
                  singleData.images.map((item, index) => {
                    return (
                      <Imgoption
                        item={item}
                        setValue={setValue}
                        value={value}
                        index={index}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="buy-product-info">
              <p className="company-name" ref={infoRef}>
                Shakushal company
              </p>
              <h1
                className="title"
                style={{ fontSize: "30px", color: "#1d2026" }}
              >
                {singleData && singleData.title}
              </h1>
              <Rating />

              <p className="buy-desc">{singleData && singleData.desc}</p>
              <div className="buy-price-section">
                <p className="buy-price">$123</p>
                <p className="buy-discount">20%</p>
                <p className="buy-discount-price">$233</p>
              </div>
              <div className="buy-order-section">
                <Buyorder />
                <Cartbtn />
              </div>
            </div>
          </div>
          <div className="buy-tags">
            {buyTag.map((item, index) => {
              return (
                <Buytags
                  item={item}
                  index={index}
                  tagCount={tagCount}
                  setTagCount={setTagCount}
                />
              );
            })}
          </div>
          <div className="buy-description-section">
            <p className="buy-head">{Buydesc.map((item) => item.head)}</p>
            <div className="ingredients">
              <p className="key-head">Key Ingredients</p>
              <div className="ingredients-list">
                {ingred[0].map((item) => {
                  return (
                    <li>
                      {item.item}{" "}
                      <span style={{ fontWeight: "bold" }}>{item.weight}</span>
                    </li>
                  );
                })}
              </div>
            </div>

            <div className="benefits">
              <p className="key-head">Key Benefits</p>
              <div className="benefits-list">
                {benefit[0].map((item) => {
                  return (
                    <li>
                      {item.item} <span>{item.weight}</span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="related-products">
            <RealtedSection />
          </div>
        </div>
      </div>
    </>
  );
};
export default MiniBuyPage;

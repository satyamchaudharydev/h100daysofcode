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

import { useParams } from "react-router-dom";

const ingred = Buydesc.map((item) => item.ingredients);
const benefit = Buydesc.map((item) => item.benefit);
const BuyPage = (props) => {
  const infoRef = React.useRef();
  const [tagCount, setTagCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { productList, getData, dataLoading, setDataLoading } = useAuth();
  const [list, setList] = useState([]);
  const [value, setValue] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const lastSlide = images.length - 1;
    if (value < 0) {
      setValue(lastSlide);
    }
    if (value > lastSlide) {
      setValue(0);
    }
  }, [value]);
  useEffect(() => {
    if (productList.some((list) => list.id === id)) {
      setList(productList.filter((item) => item.id === id));
    } else {
      getData();
      setList(productList.filter((item) => item.id === id));
    }
  }, [productList]);

  return (
    <>
      <Nav></Nav>
      <p>{dataLoading}</p>
      <div className="main-buy-product-info-container">
        <div className="buy-img-container">
          <div className="buy-img-section">
            {list.length > 0 &&
              list[0].images.sort().map((item, index) => {
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
            {list.length > 0 &&
              list[0].images.map((item, index) => {
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
        {list.map((item) => {
          const { title, rating, price, discount, category, desc } = item;
          return (
            <div className="buy-product-info">
              <p className="company-name" ref={infoRef}>
                Shakushal company
              </p>
              <h1
                className="title"
                style={{ fontSize: "40px", color: "#1d2026" }}
              >
                {title}
              </h1>
              <Rating />

              <p className="buy-desc">{desc}</p>
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
          );
        })}
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
      <Footer />
    </>
  );
};
export default BuyPage;

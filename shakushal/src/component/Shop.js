import Nav from "./Nav";
import Productcard from "./Productcard";
import Tag from "./Tag";
import product from "../data/productInfoData";
import { React, useState } from "react";

const category = [...new Set(product.map((item) => item.category))];

const MainShop = () => {
  const [tagstate, setTagState] = useState(0);
  const [filterProduct, setFilterProduct] = useState(
    product.filter((item) => item.category == "hair")
  );
  return (
    <>
      <Nav />
      <main className="main-shop">
        <div className="filter-sidenav">
          <h2 className="filter-title">Filter</h2>
          <div className="filter-items">
            <div className="checkbox">
              <input type="checkbox" />
              <label for="">Nutrition</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" checked />
              <label for="">Fitness</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label for="">Booster</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label for="">Hair</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" checked />
              <label for="">Dog</label>
            </div>
          </div>

          <div className="price-range">
            <h2>Price Range</h2>
            <div className="price-input-section">
              <p className="minmax">Min</p>
              <div className="input">400</div>
            </div>
          </div>
          <div className="rating-section">
            <h2>Rating</h2>
            <div className="checkbox">
              <input type="checkbox" />
              <label for="">Dog</label>
            </div>
          </div>
        </div>
        <div className="main-shop-section">
          <div className="filter-category-section flex">
            {category.map((item, index) => {
              return (
                <Tag
                  text={item}
                  index={index}
                  setFilterProduct={setFilterProduct}
                  tagstate={tagstate}
                  setTagState={setTagState}
                />
              );
            })}
          </div>
          <div className="shop-input-search">
            <div className="shop-input-search-wrapper">
              <img src="./images/search.svg" alt="" srcset="" />
              <input type="text" placeholder="Search Products" />
              <img src="./images/icon-close.svg" alt="" srcset="" />
            </div>
          </div>

          <div className="shop-product-show">
            <p className='search-result-text'>
              Search result for{" "}
              <span style={{ fontWeight: "bold" }}>"Something"</span>
            </p>
            <div className="shop-product-show-container">
              {filterProduct.map((item) => {
                const { category, title, price, discount, rating, img } = item;
                return (
                  <Productcard
                    title={title}
                    price={price}
                    discount={discount}
                    rating={rating}
                    img={img}
                    category={category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MainShop;

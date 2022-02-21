import { React, useState, useRef, useEffect } from "react";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import Shopbtn from "./Shopbtn";
import product from "../data/productInfoData";
import Productcard from "./Productcard";
import { useAuth } from "../contexts/AuthContext";
import Tag from "./Tag";
import { filter } from "async";
const ProductInfo = () => {
  const [count, setCount] = useState(0);
  const [tagstate, setTagState] = useState(0);
  const { productList, getData, dataLoading } = useAuth();
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    getData();
    const firstCategory = [
      ...new Set(
        productList.map((item) => item.category).map((it) => it.toString())
      ),
    ][0];
    setFilterProduct(
      productList.filter((item) => item.category === firstCategory)
    );
  }, [dataLoading]);

  const category = [
    ...new Set(
      productList.map((item) => item.category).map((it) => it.toString())
    ),
  ];
  return (
    <>
      <div className="product-container">
        <div className="product-tags-container">
          <div className="product-tags">
            {category.map((item, index) => {
              return (
                <Tag
                  text={item}
                  index={index}
                  filterProduct={filterProduct}
                  productList={productList}
                  setFilterProduct={setFilterProduct}
                  tagstate={tagstate}
                  setTagState={setTagState}
                />
              );
            })}
          </div>
        </div>
        <div className="product-wrapper" style={{ paddingInline: 30,paddingTop: 15,display:'flex',flexDirection:'column',gap:20}}>
          <p className="see-all">See All</p>
          <div className="products">
            <div className="carousel-btn slider">
              <NextButton component={setCount}></NextButton>
              <PrevButton component={setCount}></PrevButton>
            </div>
            <div
              className="product-section"
              style={{ marginLeft: -count * 200 }}
            >
              {filterProduct.map((item) => {
                const {id, category, title, price, discount, rating, images } = item;
                return (
                  <Productcard
                    title={title}
                    price={price}
                    discount={discount}
                    rating={rating}
                    id={id}
                    img={images.sort()[0]}
                    category={category}
                  />
                );
              })}
            </div>
          </div>
          <Shopbtn title={"Shop Now"} />
        </div>
      </div>
    </>
  );
};
export default ProductInfo;

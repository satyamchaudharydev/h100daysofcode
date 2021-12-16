import { React, useState,useRef,useEffect } from "react";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import Shopbtn from "./Shopbtn";
import product from "../data/productInfoData";
import Productcard from "./Productcard";
import Tag from "./Tag";
const ProductInfo = () => {
  const elmRef = useRef()
  const [count, setCount] = useState(0);
  const [tagstate, setTagState] = useState(0);
  
  const arrowhide = (width) => {
    if(width > window.width){
      return true
    }
    else{
      return false
    }
  }
  useEffect(() => {
    
    console.log(elmRef.current)
  }, [])
  const [filterProduct, setFilterProduct] = useState(
    product.filter((item) => item.category == "hair")
  );
  const margin = (num) => {
      setCount(num)
  }

  const category = [...new Set(product.map((item) => item.category))];
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
                  setFilterProduct={setFilterProduct}
                  tagstate={tagstate}
                  setTagState={setTagState}
                />
              );
            })}
          </div>
        </div>
        <p className="see-all">See All</p>
        <div className="products">
          <div className="carousel-btn slider">
            <NextButton component={setCount}></NextButton>
            <PrevButton component={setCount}></PrevButton>
          </div>
          <div className="product-section" style={{ marginLeft: -count * 200 }}>
            {filterProduct.map((item) => {
              const { category, title, price, discount, rating, img } = item;
              return <Productcard title={title} price={price} discount={discount} rating={rating} img={img} category={category}/>;
            })}
          </div>
        </div>
        <Shopbtn title={'Shop Now'}/>
      </div>
    </>
  );
};
export default ProductInfo;

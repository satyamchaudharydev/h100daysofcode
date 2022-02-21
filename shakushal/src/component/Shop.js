import Nav from "./Nav";
import ShopProductCard from "./ShopProductCard";
import Tag from "./Tag";
import product from "../data/productInfoData";
import { React, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Imgoption from "./Imgoption";
import { Shopfilter } from "./Shopfilter";
import { defaultData } from "../data/defaultdata";
import Subcategory from "./subcategory";
import MiniBuyPage from "./MiniBuyPage";
import { Outlet } from "react-router";
import { ShoppingCart } from "./ShoppingCart";
const MainShop = () => {
  const [tagCount, setTagCount] = useState(0);
  const [value, setValue] = useState(0);
  const [tagstate, setTagState] = useState(0);
  const [list, setList] = useState([]);
  // const [subcategoru, setSubCategory] = useState(
  //   ...new Set(list.map((item) => item.subcategory).map((it) => it.toString()))
  // );
  const [itemId, setItemId] = useState("CIE50s76mInZ2ui48V8w");
  const { productList, getData, dataLoading,mini,setMini } = useAuth();
  useEffect(() => {
    getData();
    setList(productList.filter((item) => item.category === "hair"));
  }, [dataLoading]);
 
  const category = [
    ...new Set(
      productList.map((item) => item.category).map((it) => it.toString())
    ),
  ];
  const subcategory = [
    ...new Set(
      list.map((item) => item.subcategory).map((it) => it.toString())
    ),
  ];
  console.log(subcategory,list)
  return (
    <>
      <Outlet />
      <ShoppingCart />
      <div className={`shop-container-page ${mini && 'shop-container-overlap'}`}>
        <Nav navinput={true} />
        <main className="main-shop">
          <Shopfilter
            productList={productList}
            setList={setList}
            list={list}
            category={category}
          />
          <div className="main-shop-section">
            <div className="shop-product-show">
              <div className="subcategory-container ">
                <div>
                  <div className="shop-sort-btn">
                    Sort
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="sort-svg"
                      fill="none"
                      width="16"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="main-sub">
                  {defaultData.map((item, index) => {
                    return (
                      <Subcategory
                        text={item}
                        tagstate={tagstate}
                        setTagState={setTagState}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="shop-product-show-container">
                {list.map((item) => {
                  const {
                    id,
                    category,
                    title,
                    price,
                    discount,
                    rating,
                    images,
                  } = item;
                  return (
                    <ShopProductCard
                      title={title}
                      price={price}
                      discount={discount}
                      rating={rating}
                      id={id}
                      setItemId={setItemId}
                      img={images.sort()[0]}
                      category={category}
                    />
                  );
                })}
              </div>
              {/* epererfds */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default MainShop;

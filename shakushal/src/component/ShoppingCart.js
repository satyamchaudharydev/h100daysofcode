import { React, useEffect } from "react";
import { Checkoutbtn } from "./Checkoutbtn";
import { useAuth } from "../contexts/AuthContext";
import { CartCounter } from "./CartCounter";

export const ShoppingCart = () => {
  const {
    productList,
    cartDataFetch,
    openCart,
    cartData,
    setOpenCart,
    handleCartClick,
    cartChange,
  } = useAuth();
  useEffect(() => {
    cartDataFetch();
  }, [cartChange]);
  const idList = cartData.map((item) =>
    productList.filter((fil) => fil.id === item.id)
  );
  function getInfo(info) {
    return idList
      .map((item) => item.map((it) => it[info]))
      .map((da, i) => da[0]);
  }
  function splitText(text, num) {
    return text.length > num
      ? text.slice(0, num) && text.slice(0, num) + "..."
      : text;
  }
  return (
    <div className={`shopping-cart-page ${!openCart && "cart-open"}`}>
      <div className={`shopping-cart-page-heading`}>
        <svg
          onClick={() => setOpenCart(false)}
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          width="20px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M15 19l-7-7 7-7"
          />
        </svg>{" "}
        <h3>Shopping Cart</h3>
        <svg
          width="20px"
          class="trash-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
      <div className="mini-product-cart-info-container">
        {productList.length > 0 &&
          idList.map((item, index) => {
            return (
              <>
                <div className="mini-product-cart-info">
                  <img
                    style={{ width: 80, height: 80 }}
                    src={getInfo("images")[index].sort()[0]}
                    alt=""
                  />
                  <div className="mini-product-cart-info-text-container">
                    <p>{splitText(getInfo("title")[index], 50)}</p>
                    <div className="mini-product-cart-footer-container">
                      <p style={{ fontWeight: "bold" }}>
                        <span class="">₹</span>
                        {splitText(getInfo("price")[index], 50)}
                      </p>
                      <CartCounter />
                    </div>
                  </div>
                  <div className="each-trash-icon">
                    <svg
                      width="18px"
                      class="trash-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="shopping-cart-page-product-show"></div>
      <div className="shopping-cart-page-checkout-container">
        <div className="cart-item-brief">
          <p className="cart-total">{`Total ${idList.length} item`}</p>
          <p className="cart-grand-total">$123</p>
        </div>
        <Checkoutbtn />
      </div>
    </div>
  );
};

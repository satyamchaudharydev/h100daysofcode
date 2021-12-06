import { React, useState } from "react";

const Nav = ({ counter }) => {
  const [popup, setpopup] = useState(false);
  const [dlt,setDlt] = useState(true)
  return (
    <>
      <div className="nav">
        <div className="menu">
          <img src="./images/icon-menu.svg" alt="" />
        </div>
        <h2 className="logo">
          <img src="./images/logo.svg" alt="" srcset="" />
        </h2>
        <div className="nav-items">
          <div className="nav-item">Collections</div>
          <div className="nav-item">Men</div>
          <div className="nav-item">Women</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
          <div className="cart" onClick={() => setpopup(!popup)}>
            <img src="./images/icon-cart.svg" alt="" srcset="" />
            {counter !== 0 && <div className="small-count">{counter}</div>}
          </div>
          <div className="profile">
            <img src="./images/image-avatar.png" alt="" srcset="" />
          </div>
        </div>
        {popup && (
          <div className="pop-up">
            <div className="pop-up-header">Cart</div>
            {counter !== 0 ? (
              <div className="pop-up-item">
                <img src="./images/image-product-1-thumbnail.jpg" alt="" />
                <div className="product-info">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {counter}
                    <span className="cart-result">${125 * counter}</span>
                  </p>
                </div>
                <div className="dlt-btn" onClick={() => setDlt(true)}>
                  <img src="./images/icon-delete.svg" alt="" srcset="" />
                </div>
              </div>
            ) : (
              <div className="pop-up-item empty">
                <p>Your Cart is empty</p>
              </div>
            )}
            {counter !== 0 && dlt && (
              <div className="checkout-btn">Checkout</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Nav;

import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        {/* <div className="big-input">
          <input type="text" />
        </div> */}
        <div className="logo nav-item">
          <img src="./images/logo.svg" alt="logo" srcset="" />
        </div>
        <div className="home nav-item">
          <p>Home</p>
        </div>
        <div className="nav-collection nav-item">
          <p>Collections</p>
        </div>
        <div className="hair nav-item">
          <p>Hair</p>
        </div>
        <div className="bath nav-item">
          <p>Bath & body</p>
        </div>
        <div className="face nav-item">
          <p>Face</p>
        </div>
        <div className="kid nav-item">
          <p>Kid's</p>
        </div>
        <div className="kid nav-item">
          <p>Wellness</p>
        </div>
        <div className="kid nav-item">
          <p>Men's</p>
        </div>

        <div className="user-menu">
          <Link to="/login">
            <div className="login-btn center">Login</div>
          </Link>
          <div className="search nav-item center">
            <img src="./images/search.svg" alt="" />
          </div>
          <div className="cart nav-item center">
            <img src="./images/icon-cart.svg" alt="cart" srcset="" />
          </div>

          {/* <div className="profile nav-item">
          <img src="./images/image-avatar.png" alt="profile" srcset="" />
        </div> */}
        </div>
      </div>
    </>
  );
};
export default Nav;

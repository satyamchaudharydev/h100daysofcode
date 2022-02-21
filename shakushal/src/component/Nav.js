import React from "react";
import { navigate, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { useAuth } from "../contexts/AuthContext";
import { BigInput } from "./BigInput";
import { CartIcon } from "./CartIcon";
import { ShoppingCart } from "./ShoppingCart";
const Nav = ({ navinput }) => {

  const { logout,openCart, setOpenCart } = useAuth();
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {}
  };
  return (
    <>
      <div className="nav">
        {/* <div className="big-input">
          <input type="text" />
        </div> */}
        <div className="logo nav-item">
          <img src="./images/logo.svg" alt="logo" srcset="" />
        </div>
        {!navinput && (
          <>
            {" "}
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
          </>
        )}
        {navinput && <BigInput></BigInput>}

        <div className="user-menu">
          {!auth.currentUser.email && (
            <Link to="\login">
              <div className="login-btn center">Login</div>
            </Link>
          )}

          <div className="search nav-item center">
            <img src="./images/search.svg" alt="" />
          </div>
          <div className="cart nav-item center" onClick={
            () => {setOpenCart(true)
            console.log(openCart)}}>
            <CartIcon />
          </div>

          {auth.currentUser.email && (
            <div
              onClick={handleLogout}
              className="profile nav-item center"
              style={{
                width: 33,
                height: 33,
                color: "#fff",
                borderRadius: "50%",
                background: "#679F37",
              }}
            >
              {!auth.currentUser.photoURL ? (
                auth.currentUser.email.split("").slice(0, 1)
              ) : (
                <img
                  style={{ borderRadius: "50%" }}
                  src={auth.currentUser.photoURL}
                />
              )}
              {}
              {/* <img src="./images/image-avatar.png" alt="profile" srcset="" /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;

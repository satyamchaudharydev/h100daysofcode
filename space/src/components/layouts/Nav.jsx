import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/shared/logo.svg";
// import hamburger from "../../assets/shared/hamburger.svg";
// import close from "../../assets/shared/close.svg";
const navItems = ["Home", "Destination", "Crew", "Technology"];
function Nav({ page }) {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(true);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/destination") {
      setValue(1);
    } else if (location.pathname === "/crew") {
      setValue(2);
    } else if (location.pathname === "/technology") {
      setValue(3);
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`primary-header flex ${show && "menu-show"}`}>
        <div>
          <img
            className="logo"
            src={"/assets/shared/logo.svg"}
            alt="logo"
            srcset=""
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Menu</span>
          <img
            className="menu-icon"
            src={
              !show
                ? "/assets/shared/close.svg"
                : "/assets/shared/hamburger.svg"
            }
            alt=""
          />
        </button>
        <nav>
          <ul className="primary-navigation underline-indicators flex text-white">
            {navItems.map((navItem, index) => {
              let routeText = navItem;
              if (index === 0) {
                routeText = "/";
              }
              return (
                <Link
                  className={value === index && "nav-active"}
                  onClick={() => setValue(index)}
                  key={index}
                  to={routeText.toLowerCase()}
                >
                  <li
                    className={`ff-sans-cond text-white letter-spacing-2 uppercase`}
                    onClick={() => setValue(index)}
                  >
                    <span aria-hidden="true">0{index}</span>
                    {navItem}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;

import React from "react";

function Navbar({ scrollPos }) {
  return (
    <nav className={`grid sp-bw ${!scrollPos && "hide"}`}>
      <img src="/assets/logo.svg" alt="logo" srcset="" />
      <button className="btn slide-show__btn uppercase lt-spacing-2">
        START SLIDESHOW
      </button>
    </nav>
  );
}

export default Navbar;

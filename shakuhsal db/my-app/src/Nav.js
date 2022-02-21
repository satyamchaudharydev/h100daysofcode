import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Create</li>
        </Link>
      </ul>
    </div>
  );
};

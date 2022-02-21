import React from "react";

export const MiniDetailTag = ({ tagCount, setTagCount, text, index }) => {
  return (
    <div
      className={`mini-nav-item center ${
        tagCount === index && "active-mini-tag"
      }`}
      onClick={() => setTagCount(index)}
    >
      <p>{text}</p>
    </div>
  );
};

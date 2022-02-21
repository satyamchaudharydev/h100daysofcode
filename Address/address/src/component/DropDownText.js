import React from "react";
import { useProvider } from "./StateContext";
export const DropDownText = ({
  text,
  updateFilter,
  setDropDownText,
  handleResult,
}) => {
  return (
    <p
      className="dropdowntext"
      onClick={() => {
        console.log(text)
        setDropDownText(text);
        updateFilter(text);
        handleResult();
      }}
    >
      <span className="dot">●</span>
      {text}
    </p>
  );
};

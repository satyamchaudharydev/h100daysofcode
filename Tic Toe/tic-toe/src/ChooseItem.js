import React from "react";
const color = ["#31c3bd", "#f2b137", "#a8bfc9", "#1a2a33"];

export const ChooseItem = ({ value, index, setValue, move, convertToSVG }) => {
  return (
    <div
      className={`choose-item ${value === index && "active"}`}
      onClick={() => {
        setValue(index);
        localStorage.setItem("player", move);
      }}
    >
      {convertToSVG(move, 30, color[index === value ? 3 : 2])}
    </div>
  );
};

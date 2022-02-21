import { useEffect } from "react";
import { React, useState } from "react";
import { useProvider } from "./StateContext";
import click from "./audio/click.wav";

const color = ["#31c3bd", "#f2b137", "#a8bfc9", "#1a2a33"];
const wonSound = new Audio(click);

export const Square = ({
  handleClick,
  count,
  value,
  text,
  index,
  convertToSVG,
  winnerArray,
}) => {
  const [click, setClick] = useState(false);
  const { gameOver, whoIsWinner } = useProvider();

  useEffect(() => {
    if (gameOver) {
      setClick(false);
    }
  }, [gameOver]);
  function winner() {
    return winnerArray.includes(index);
  }
  function setColor() {
    if (winner() && gameOver === "X") {
      return color[0];
    } else if (winner() && gameOver === "O") {
      return color[1];
    } else {
      return color[4];
    }
  }

  return (
    <div
      className={`square ${winner() && "winner"}`}
      style={{ backgroundColor: setColor() }}
      onClick={() => {
        wonSound.play()
        handleClick(index);
        setClick(true);
      }}
    >
      {!value && !gameOver && (
        <span className="hover-img">
          {text === "X" ? (
            <img src="../assets/icon-x-outline.svg" alt="" srcset="" />
          ) : (
            <img src="../assets/icon-o-outline.svg" alt="" srcset="" />
          )}
        </span>
      )}

      <p className={`move ${click && "move-active"}`}>
        {winner()
          ? convertToSVG(value, 60, value === "X" ? color[3] : color[3])
          : convertToSVG(value, 60, value === "X" ? color[0] : color[1])}
      </p>
    </div>
  );
};

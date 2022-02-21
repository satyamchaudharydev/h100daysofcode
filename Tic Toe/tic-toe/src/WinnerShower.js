import { React, useState, useEffect } from "react";
import { useProvider } from "./StateContext";
const color = ["#31c3bd", "#f2b137", "#a8bfc9", "#1a2a33"];

export const WinnerShower = ({
  setWinnerArray,
  setBoard,
  lsComputer,
  lsplayer,
}) => {
  const { convertToSVG, gameOver, setGameOver,setWhoIsWinner } = useProvider();
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  function setText() {
    if (lsComputer === "true") {
      if (gameOver === lsplayer) {
        setDesc("YOU WON");
      } else {
        setDesc("YOU LOST");
      }
    }
    if (gameOver === lsplayer) {
      setDesc("Player 1 WON");
    } else {
      setDesc("Player 2 Won");
    }

    if (gameOver === "draw") {
      setDesc("round tied!");
    }
  }
  useEffect(() => {
    setText();
    if (gameOver) {
      setTimeout(() => {
        setShow(true);
      }, 300);
    }
  }, []);

  return (
    <div className={`winner-shower-wrapper ${!show && "hide"}`}>
      <div className="winner-shower">
        <p
          style={{
            letterSpacing: "1px",
            fontSize: gameOver === "draw" && "40px",
          }}
        >
          {desc}
        </p>
        {gameOver !== "draw" && (
          <p
            className="desc-2"
            style={{
              color: gameOver === "X" ? color[0] : color[1],
            }}
          >
            {convertToSVG(gameOver, 64, gameOver === "X" ? color[0] : color[1])}{" "}
            Takes The round
          </p>
        )}

        <div className="winner-button-container">
          <button className="quit-btn">Quit</button>
          <button
            className="next-round"
            onClick={() => {
              setWinnerArray([]);
              setBoard(Array(9).fill(""));
              setGameOver(false);
              setShow(false);
              // setWhoIsWinner(false);
            }}
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
};

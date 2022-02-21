import React from "react";
import { useState, useEffect } from "react";
import { Square } from "./Square";
import { Logo } from "./Logo";
import { useProvider } from "./StateContext";
import { WinnerShower } from "./WinnerShower";
export const GamePage = () => {
  const { convertToSVG, gameOver, setGameOver, setWhoIsWinner, whoIsWinner } =
    useProvider();
  const [board, setBoard] = useState(Array(9).fill(""));

  const [text, setText] = useState("X");
  const [click, setClick] = useState(0);
  const [is, setIs] = useState(false);
  const [count, setCount] = useState(null);
  const [winnerArray, setWinnerArray] = useState([]);
  const [computerMove, setComputerMove] = useState(false);
  const [firstScoreBoard, setFirstScoreBoard] = useState("X (you)");
  const [secondScoreBoard, setSecondScoreBoard] = useState("X (you)");
  const [xscore, setXScore] = useState(0);
  const [oscore, setOScore] = useState(0);
  const [tie, setTie] = useState(0);
  const lsComputer = localStorage.getItem("computer");
  const lsplayer = localStorage.getItem("player");

  function setScoreBoardText() {
    if (lsComputer === "true") {
      setFirstScoreBoard(`X ${lsplayer === "X" ? "(you)" : "(CPU)"}`);
      setSecondScoreBoard(`O ${lsplayer === "O" ? "(you)" : "(cpu)"}`);
    } else {
      setFirstScoreBoard(`X ${lsplayer === "X" ? "(p1)" : "(p2)"}`);
      setSecondScoreBoard(`O ${lsplayer === "O" ? "(p1)" : "(p2)"}`);
    }
  }
  useEffect(() => {
    setScoreBoardText();
    if (lsComputer === "true") {
      setComputerMove(true);
      setText(lsplayer);
    }
    if (
      localStorage.getItem("xscore") ||
      localStorage.getItem("oscore") ||
      localStorage.getItem("tie")
    ) {
      setXScore(localStorage.getItem("xscore"));
      setOScore(localStorage.getItem("oscore"));
      setTie(localStorage.getItem("tie"));
    }
  }, []);

  useEffect(() => {
    if (gameOver) {
      gameOver === "X" && setXScore(xscore + 1);
      gameOver === "O" && setOScore(oscore + 1);
      gameOver === "draw" && setTie(tie + 1);
    }
  }, [gameOver]);
  useEffect(() => {
    console.log("useEffecy")
    console.log(xscore,oscore,tie)
    localStorage.setItem("xscore", xscore);
    localStorage.setItem("oscore", oscore);
    localStorage.setItem("tie", tie);
  }, [xscore, oscore, tie]);
  // if (gameOver) {
  //   console.log("hi", xscore, oscore, tie);
  //
  // }
  const checkWinner = (newBoard) => {
    // logic for draw

    const winningCombinations = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonals: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in winningCombinations) {
      for (let com of winningCombinations[combo]) {
        if (
          newBoard[com[0]] === newBoard[com[1]] &&
          newBoard[com[1]] === newBoard[com[2]] &&
          newBoard[com[0]] !== ""
        ) {
          setWinnerArray([com[0], com[1], com[2]]);
          setGameOver(newBoard[com[0]]);
          setWhoIsWinner(true);
          return;
        }
      }
    }

    console.log(winnerArray, gameOver);

    if (newBoard.every((item) => item !== "")) {
      setGameOver("draw");
      return;
    }
  };
  useEffect(() => {
    // if (gameOver) return;
    checkWinner(board);

    if (computerMove) {
      let random = Math.floor(Math.random() * 9);
      while (board[random] !== "") {
        random = Math.floor(Math.random() * 9);
      }
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[random] = lsplayer === "X" ? "O" : "X";
        return newBoard;
      });
      setComputerMove(false);
    }
  }, [computerMove]);
  const handleClick = (index) => {
    setCount(index);
    if (computerMove) return;
    if (gameOver) return;
    if (board[index] === "") {
      const newBoard = [...board];
      newBoard[index] = text;
      checkWinner(newBoard);

      if (lsComputer === "false") {
        text === "X" ? setText("O") : setText("X");
      }
      setBoard(newBoard);
      if (lsComputer === "true") {
        setComputerMove(!computerMove);
      }
    }
  };

  return (
    <>
      {gameOver && (
        <WinnerShower
          setWinnerArray={setWinnerArray}
          setBoard={setBoard}
          lsComputer={lsComputer}
          lsplayer={lsplayer}
        />
      )}
      <div className="board">
        <div className="board-header">
          <Logo size={20} />
          <div className="turn-show-btn">
            {convertToSVG(text, 18, "#a8bfc9")}
            <p>TURN</p>
          </div>
          <div className="restart-btn">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
                fill="#1F3641"
              />
            </svg>
          </div>
        </div>
        <div className="main">
          {board.map((value, index) => {
            return (
              <Square
                convertToSVG={convertToSVG}
                handleClick={handleClick}
                value={value}
                count={count}
                index={index}
                text={text}
                winnerArray={winnerArray}
              />
            );
          })}
        </div>
        <div className="board-footer">
          <div className="player-one score">
            <span style={{ fontSize: 14 }}>{firstScoreBoard}</span>
            <p
              className="score-text"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {xscore}
            </p>
          </div>
          <div className="draw score">
            <span style={{ fontSize: 14 }}>Draw</span>
            <p
              className="score-text"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {tie}
            </p>
          </div>
          <div className="player-second score">
            <span style={{ fontSize: 14 }}>{secondScoreBoard}</span>
            <p
              className="score-text"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {oscore}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

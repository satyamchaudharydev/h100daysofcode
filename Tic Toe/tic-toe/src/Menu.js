import { React, useState, useEffect } from "react";
import { ChooseItem } from "./ChooseItem";
import { Logo } from "./Logo";
import { useProvider } from "./StateContext";
import { useNavigate } from "react-router-dom";
import click from "./audio/click.wav";
const clickSound = new Audio(click);

const moves = ["X", "O"];
export const Menu = () => {
  const [value, setValue] = useState(0);
  const { convertToSVG, setGameOver, setWhoIsWinner } = useProvider();
  useEffect(() => {
    setGameOver(false);
    setWhoIsWinner(false);
    localStorage.getItem("player") === "O" && setValue(1);
  }, []);
  let navigate = useNavigate();
  function gameType(check) {
    playSound()
    localStorage.setItem("computer", check);
    navigate("/game");
  }
  function playSound() {
    clickSound.play();
  }
  return (
    <>
      <div className="menu">
        <Logo size={20} />
        <div className="choose-container">
          <p className="small-desc">PICK PLAYER 1’S MARK</p>
          <div className="choose-box">
            {moves.map((move, index) => (
              <ChooseItem
                move={move}
                index={index}
                playSound={playSound}
                value={value}
                setValue={setValue}
                convertToSVG={convertToSVG}
              />
            ))}
          </div>
          <p className="remb-text">REMEMBER : X GOES FIRST</p>
        </div>
        <div className="button-container">
          <div className="new-game-btn cpu-btn" onClick={() => gameType(true)}>
            <p>NEW GAME (VS CPU)</p>
          </div>
          <div
            className="new-game-btn player-btn"
            onClick={() => gameType(false)}
          >
            NEW GAME (VS Player)
          </div>
        </div>
      </div>
    </>
  );
};

import "./Game.css";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Timer from "../Timer/Timer";
import RandomBall from "../RandomBall/RandomBall";

export default function Game() {
  const [buttonClicked, setIsbuttonClicked] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  function handleButtonClicked() {
    setIsbuttonClicked(true);
  }

  function startGame() {
    setGameStart(true);
  }

  return (
    <div className="gameContainer">
      {!buttonClicked && !gameStart ? (
        <CustomButton handleClick={handleButtonClicked} text={"Start"} />
      ) : null}
      {buttonClicked && !gameStart ? <Timer startGame={startGame} /> : null}
      {gameStart && <RandomBall />}
    </div>
  );
}

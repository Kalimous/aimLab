import "./AimLab.css";
import { useState, useEffect } from "react";
import Game from "../Game/Game";
import Finish from "../Finish/Finish";
import { useGameTimeStore } from "../../Store/store";

export default function AimLab() {
  const { time } = useGameTimeStore();
  const [gameTime, setGameTime] = useState(time);
  const [gameScore, setGameScore] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);

  useEffect(() => {
    if (gameTime === 0) {
      setGameFinish(true);
    }
  }, [gameTime]);

  function handleTime(time) {
    setGameTime(time);
  }

  function handleScore() {
    setGameScore(gameScore + 1000);
  }

  return (
    <div className="container">
      {!gameFinish ? (
        <Game
          gameScore={gameScore}
          gameTime={gameTime}
          handleTime={handleTime}
          handleScore={handleScore}
        />
      ) : (
        <Finish score={gameScore} />
      )}
    </div>
  );
}

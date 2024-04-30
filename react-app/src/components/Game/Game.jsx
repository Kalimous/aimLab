import Circle from "../Circle/Circle";
import popSound from "../../assets/popSound.mp3";
import { useState, useEffect } from "react";
import Info from "../Info/Info";

export default function Game({ gameScore, gameTime, handleScore, handleTime }) {
  const audio = new Audio(popSound);
  const [positions, setPositions] = useState([
    getRandomPosition(),
    getRandomPosition(),
    getRandomPosition(),
  ]);

  useEffect(() => {
    let intervalId;

    if (gameTime > 0) {
      intervalId = setInterval(() => {
        handleTime(gameTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [gameTime]);

  function random(max) {
    return Math.floor(Math.random() * max) + 10 + "%";
  }

  function getRandomPosition() {
    return { top: random(70), left: random(70) };
  }

  function handleCircleClick(idx) {
    audio.play();
    handleScore();
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[idx] = getRandomPosition();
      return (prevPositions = updatedPositions);
    });
  }

  return (
    <div className="gameContainer">
      <Info gameScore={gameScore} gameTime={gameTime} />
      {positions.map((position, idx) => (
        <Circle
          key={idx}
          size={50}
          position={position}
          handleClick={() => handleCircleClick(idx)}
        />
      ))}
    </div>
  );
}

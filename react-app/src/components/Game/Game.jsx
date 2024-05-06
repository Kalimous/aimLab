import Circle from "../Circle/Circle";
import popSound from "../../assets/popSound.mp3";
import { useState, useEffect, useRef } from "react";
import Info from "../Info/Info";

export default function Game({ gameScore, gameTime, handleScore, handleTime }) {
  const audioRef = useRef(null);

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
    return Math.floor(Math.random() * max) + 20 + "%";
  }

  function getRandomPosition() {
    return { top: random(50), left: random(50) };
  }

  function handleCircleClick(idx) {
    handleScore();
    playSound();
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[idx] = getRandomPosition();
      return (prevPositions = updatedPositions);
    });
  }

  function playSound() {
    audioRef.current.play();
  }

  return (
    <div className="gameContainer">
      <audio
        src={popSound}
        preload="auto"
        ref={audioRef}
        style={{ display: "none" }}
      ></audio>

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

import "./RandomBall.css";
import Circle from "../Circle/Circle";
import { useState, useEffect } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import popSound from "../../assets/popSound.mp3";
import GameTime from "../GameTime/GameTime";
import GameScore from "../GameScore/GameScore";
import Info from "../Info/Info";

export default function RandomBall() {
  const audio = new Audio(popSound);
  const [positions, setPositions] = useState([
    getRandomPosition(),
    getRandomPosition(),
    getRandomPosition(),
  ]);
  const [gameTime, setGameTime] = useState(5);
  const [gameScore, setGameScore] = useState(0);
  const [circleSize, setCircleSize] = useState(50);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    let intervalId;

    if (gameTime > 0) {
      intervalId = setInterval(() => {
        setGameTime((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
      setIsFinish(true);
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
    setGameScore(gameScore + 1000);
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[idx] = getRandomPosition();
      return (prevPositions = updatedPositions);
    });
  }

  function handleSlider(value) {
    setCircleSize(value);
  }

  return (
    <div className="container">
      <Info gameScore={gameScore} gameTime={gameTime} />
      <div className="circleContainer">
        {positions.map((position, idx) => (
          <Circle
            key={idx}
            position={position}
            size={circleSize}
            handleClick={() => handleCircleClick(idx)}
          />
        ))}
      </div>
      <CustomSlider handleSlider={handleSlider} />
    </div>
  );
}

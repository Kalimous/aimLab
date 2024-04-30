import { useState, useEffect } from "react";
import "./Finish.css";
import scoreSound from "../../assets/scoreSound.mp3";

export default function Finish({ score }) {
  const [startScore, setStartScore] = useState(score - 4500);

  useEffect(() => {
    const audio = new Audio(scoreSound);
    audio.play();
  }, []);

  useEffect(() => {
    let interval;

    if (startScore < score) {
      interval = setInterval(() => {
        setStartScore((prevScore) => prevScore + 5);
      }, 1);
    } else if (startScore === score) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startScore]);

  return (
    <div className="finishContainer">
      <h1 className="highScore"></h1>
      <h1 className="finishScoreText">{startScore}</h1>
    </div>
  );
}

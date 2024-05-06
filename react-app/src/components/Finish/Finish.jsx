import { useState, useEffect, useRef } from "react";
import "./Finish.css";
import scoreSound from "../../assets/scoreSound.mp3";
import { Button } from "@mui/material";

export default function Finish({ score }) {
  const [startScore, setStartScore] = useState(score - 4500);
  const audioRef = useRef(null);
  const [highScore, setHighScore] = useState(settingHighScore());
  const [highScoremsg, setHighScoremsg] = useState(
    highScore > score ? "Today's highScore : " : "New Record!! : "
  );

  useEffect(() => {
    playSound();
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

  function playSound() {
    audioRef.current.play();
  }

  function settingHighScore() {
    const highScore = localStorage.getItem("highScore");

    if (highScore === null || highScore < score) {
      localStorage.setItem("highScore", score);
      return score;
    } else if (highScore < score) {
      localStorage.setItem("highScore", score);
      return score;
    } else {
      return highScore;
    }
  }

  return (
    <div className="finishContainer">
      <h1 className="highScore">
        {highScoremsg} {highScore}
      </h1>
      <audio
        src={scoreSound}
        preload="auto"
        ref={audioRef}
        style={{ display: "none" }}
      ></audio>

      <h1 className="highScore"></h1>
      <h1 className="finishScoreText draggable">{startScore}</h1>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={() => location.reload()}
      >
        Regame
      </Button>
    </div>
  );
}

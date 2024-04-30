import { useState, useEffect, useRef } from "react";
import "./Timer.css";
import AimLab from "../AimLab/AimLab";
import countdownSound from "../../assets/countdownSound.mp3";

export default function Timer() {
  const audioRef = useRef(null);
  const [time, setTime] = useState(3);
  const [offTimer, setOffTimer] = useState(false);

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    let timerId;
    if (time > 0) {
      timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearTimeout(timerId);
      setOffTimer(true);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  function playSound() {
    audioRef.current.play();
  }

  return (
    <>
      <audio
        src={countdownSound}
        preload="auto"
        ref={audioRef}
        style={{ display: "none" }}
      ></audio>

      {!offTimer ? (
        <div className="timeContainer">
          <h1 className="draggable">{time}</h1>
        </div>
      ) : (
        <AimLab />
      )}
    </>
  );
}

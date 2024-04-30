import { useState, useEffect } from "react";
import "./Timer.css";
import AimLab from "../AimLab/AimLab";

export default function Timer() {
  const [time, setTime] = useState(3);
  const [offTimer, setOffTimer] = useState(false);

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

  return !offTimer ? (
    <div className="timeContainer">
      <h1>{time}</h1>
    </div>
  ) : (
    <AimLab />
  );
}

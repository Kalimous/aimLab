import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer({ startGame }) {
  const [time, setTime] = useState(3);

  useEffect(() => {
    let timerId;
    if (time > 0) {
      timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearTimeout(timerId);
      startGame();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  return (
    <div className="timeContainer">
      <h1>{time}</h1>
    </div>
  );
}

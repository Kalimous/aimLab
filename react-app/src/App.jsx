import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import { useState, useRef } from "react";
import Timer from "./components/Timer/Timer";
import buttonClickSound from "../src/assets/buttonClickSound.mp3";
import Setting from "./components/SettingButton/SettingButton";

function App() {
  const [clicked, setClicked] = useState(false);
  const audioRef = useRef(null);

  function handleClick() {
    setClicked(true);
    playSound();
  }

  function playSound() {
    audioRef.current.play();
  }

  return (
    <>
      <audio
        src={buttonClickSound}
        preload="auto"
        ref={audioRef}
        style={{ display: "none" }}
      ></audio>
      {!clicked ? (
        <CustomButton text="Start" handleClick={handleClick} />
      ) : (
        <Timer />
      )}
    </>
  );
}

export default App;

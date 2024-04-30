import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import { useState } from "react";
import Timer from "./components/Timer/Timer";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return !clicked ? (
    <CustomButton text="Start" handleClick={handleClick} />
  ) : (
    <Timer />
  );
}

export default App;

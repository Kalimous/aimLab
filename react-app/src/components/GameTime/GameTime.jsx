import timeImg from "../../assets/time.png";
import "./GameTime.css";

export default function GameTime({ gameTime }) {
  return (
    <div className="time">
      <img src={timeImg} alt="" />
      <h1 className="timeText">{gameTime}</h1>
    </div>
  );
}

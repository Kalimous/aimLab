import scoreImg from "../../assets/score.png";
import "./GameScore.css";

export default function GameScore({ gameScore }) {
  return (
    <div className="score">
      <img src={scoreImg} alt="" />
      <h1 className="scoreText">{gameScore}</h1>
    </div>
  );
}

import GameScore from "../GameScore/GameScore";
import GameTime from "../GameTime/GameTime";

export default function Info({ gameScore, gameTime }) {
  return (
    <div className="info draggable">
      <GameScore gameScore={gameScore} />
      <GameTime gameTime={gameTime} />
    </div>
  );
}

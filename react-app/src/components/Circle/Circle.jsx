import "./Circle.css";
import { useCircleStore } from "../../Store/store";

export default function Circle({ position, handleClick }) {
  const { size } = useCircleStore();

  return (
    <div
      className="circle"
      onMouseDown={handleClick}
      style={{
        top: position.top,
        left: position.left,
        width: size + "px",
        height: size + "px",
      }}
    ></div>
  );
}

import "./Circle.css";
import { useState } from "react";

export default function Circle({ position, handleClick, size }) {
  return (
    <div
      className="circle"
      onClick={handleClick}
      style={{
        top: position.top,
        left: position.left,
        width: size + "px",
        height: size + "px",
      }}
    ></div>
  );
}

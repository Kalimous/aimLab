import { useState } from "react";
import "./Finish.css";

export default function Finish({ score }) {
  return (
    <div className="finishContainer">
      <h1>{score}</h1>
    </div>
  );
}

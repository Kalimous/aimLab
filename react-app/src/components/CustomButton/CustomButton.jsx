import { Button } from "@mui/material";
import "./CustomButton.css";

export default function CustomButton({ handleClick, text }) {
  const classname = (text) => {
    if ("Start") return "startButton";
    else if ("Setting") return "settingButton";
    else if ("Regame") return "regameButton";
  };

  return (
    <div className="buttonContainer">
      <Button
        variant="contained"
        className={classname()}
        onClick={handleClick}
        size="large"
      >
        {text}
      </Button>
    </div>
  );
}

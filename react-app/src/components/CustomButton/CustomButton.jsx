import { Button } from "@mui/material";
import "./CustomButton.css";
import Setting from "../SettingButton/SettingButton";

export default function CustomButton({ handleClick, text }) {
  const classname = (text) => {
    if ("Start") return "startButton";
    else if ("Setting") return "settingButton";
    else if ("Regame") return "regameButton";
  };

  function clickedButton() {
    handleClick();
  }

  return (
    <div className="buttonContainer">
      <Setting />
      <Button
        variant="contained"
        className={classname()}
        onClick={clickedButton}
        size="large"
      >
        {text}
      </Button>
    </div>
  );
}

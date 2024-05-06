import settingImg from "../../assets/settingGear.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomSlider from "../CustomSlider/CustomSlider";
import { useState } from "react";
import "./SettingButton.css";
import { Button } from "@mui/material";
import { useGameTimeStore } from "../../Store/store";

export default function Setting() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sliderValue, setSliderValue] = useState(50);
  const { time, increase, decrease } = useGameTimeStore();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    borderRadius: "20px",
    p: 4,
  };

  function handleSlider(value) {
    setSliderValue(value + "px");
  }

  return (
    <div>
      <img
        onClick={handleOpen}
        src={settingImg}
        alt=""
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Setting
          </Typography>
          <button className="closeBtn" onClick={handleClose}>
            X
          </button>
          <div className="changeCircleSize" style={{ height: "150px" }}>
            <CustomSlider handleSlider={handleSlider} />
            <div
              className="settingCircle"
              style={{
                width: sliderValue,
                height: sliderValue,
              }}
            ></div>
          </div>
          <div className="settingGameTime">
            <h3>GameTime</h3>
            <Button onClick={increase}>⬆️</Button> {time}
            <Button onClick={decrease}>⬇️</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

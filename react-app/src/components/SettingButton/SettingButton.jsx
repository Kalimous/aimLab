import settingImg from "../../assets/settingGear.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomSlider from "../CustomSlider/CustomSlider";
import Circle from "../Circle/Circle";
import { useState } from "react";

export default function Setting() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sliderValue, setSliderValue] = useState(50);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
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
          <CustomSlider handleSlider={handleSlider} />
          <div
            className="circle"
            style={{
              borderRadius: "50px",
              width: sliderValue,
              height: sliderValue,
            }}
          ></div>
          
        </Box>
      </Modal>
    </div>
  );
}

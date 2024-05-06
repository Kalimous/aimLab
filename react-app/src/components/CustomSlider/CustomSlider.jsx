import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useCircleStore } from "../../Store/store";

export default function CustomSlider({ handleSlider }) {
  const { changeSize } = useCircleStore();

  function handleValue(evt) {
    handleSlider(evt.target.value);
    changeSize(evt.target.value);
  }

  return (
    <Box sx={{ width: 300 }}>
      <h4>Circle size</h4>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleValue}
      />
    </Box>
  );
}

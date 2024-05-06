import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function CustomSlider({ handleSlider }) {
  function handleValue(evt) {
    handleSlider(evt.target.value);
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

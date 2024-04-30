import settingImg from "../../assets/settingGear.png";
import SettingModal from "../SettingModal/SettingModal";

export default function Setting() {
  return (
    <img
      onClick={() => {}}
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
  );
}

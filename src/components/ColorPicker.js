import React from "react";
import { TwitterPicker } from "react-color";
export default function ColorPicker({ setColor, setShowPicker }) {
  // const [themeColor,setThemeColor]
  const handleChange = (color) => {
    setColor(color.hex);
    localStorage.setItem("themeColor", color.hex);
  };
  return (
    <div className='color-picker'>
    <TwitterPicker
    className='twitter-picker'
    colors={[
      "#D2691E",
      "#00ffd9",
      "#5555FF",
      "#FF6900",
      "#FCB900",
      "#7BDCB5",
      "#00D084",
      "#8ED1FC",
      "#0693E3",
      "#ABB8C3",
      "#008080",
      "#EB144C",
      "#F78DA7",
      "#9900EF",
      "#ff0000",
    ]}
    triangle="hide"
    onChange={handleChange}
    />
      <div className="overlay" onClick={() => setShowPicker(false)}></div>
    </div>
  );
}

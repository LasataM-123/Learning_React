import React, { useEffect, useState } from "react";
import "./Color.css";
const Color = () => {
  const [bgcolor, setBgcolor] = useState("white");
  const handleColourChange = () => {
    const colors = [
      "red",
      "blue",
      "black",
      "white",
      "pink",
      "purple",
      "brown",
      "green",
      "yellow",
      "orange",
    ];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgcolor(random);
  };
  const handleRgbChange = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const random = "rgb(" + red + "," + green + "," + blue + ")";
    // const random=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setBgcolor(random);
  };
  const handleHexChange = () => {
    const random =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBgcolor(random);
  };
  useEffect(() => {
    console.log("Background color changed to: " + bgcolor);
  }, [bgcolor]);
  return (
    <div>
      <div
        className="color-container"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <button onClick={handleColourChange}>Change Color</button>
        <button onClick={handleRgbChange}>Change RGB</button>
        <button onClick={handleHexChange}>Change HEX</button>
        <h1>Background color changed to: {bgcolor}</h1>
      </div>
    </div>
  );
};
export default Color;

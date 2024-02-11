import React, { useState, useEffect } from "react";
import { getRandomColorElement } from "../utils";

import "./styles.css";

const ColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);

  const handleCreateRandomColor = () => {
    if (typeOfColor === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColorElement(hex.length)];
      }
      setColor(hexColor);
    } else {
      const r = getRandomColorElement(256);
      const g = getRandomColorElement(256);
      const b = getRandomColorElement(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Create RGB Color
      </button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div className="color-desc">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default ColorGenerator;

import React, { useState } from "react";

const Color = () => {
  const colors = ["red", "green", "blue", "maroon"];

  const [color, setColor] = useState("white");
  
  const backColor = {
    backgroundColor: color,
  };

  return (
    <div style={backColor}>
      {colors.map((color) => (
        <button
          onClick={() => {
            setColor(color);
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default Color;

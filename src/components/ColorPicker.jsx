import React from "react";

function ColorPicker({ setTheme }) {
  return (
    <div className="color-section">
      <div className="color-picker-container">
        <p className="color-picker-title">Pick Your Color</p>
        <div className="color-swatches">
          <button
            className="color-swatch"
            style={{ backgroundColor: "rgba(2, 173, 197, 1)" }}
            onClick={() => setTheme("blue")}
          ></button>
          <button
            className="color-swatch"
            style={{ backgroundColor: "rgba(81, 0, 114, 1)" }}
            onClick={() => setTheme("violet")}
          ></button>
          <button
            className="color-swatch"
            style={{ backgroundColor: "rgba(20, 241, 149, 1)" }}
            onClick={() => setTheme("green")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;

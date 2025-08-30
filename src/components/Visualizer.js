import React from "react";

function Visualizer({ array, swapIndices = [], isSorted }) {
  return (
    <div className="visualizer">
      {array.map((height, idx) => (
        <div
          key={idx}
          className="bar"
          style={{
            height: `${height * 3}px`,
            width: "32px",
            background: isSorted
              ? "#17BD17"
              : swapIndices.includes(idx)
              ? "#FF4F4F"
              : "#7ed0ff",
            borderRadius: "6px 6px 0 0",
            margin: "0 6px",
            transition: "height 0.2s, background 0.2s"
          }}
        />
      ))}
    </div>
  );
}

export default Visualizer;
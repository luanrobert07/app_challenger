import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "50%",
        height: "30px",
        borderRadius: "5px",
        position: "relative"
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          width: `${progress}%`,
          height: "100%",
          borderRadius: "5px"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "14px"
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;

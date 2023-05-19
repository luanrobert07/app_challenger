import React from "react";

const ProgressBar = ({ progress }) => {

  const color = progress > 75 ? 'red' : 'green';

  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "80%",
        height: "30px",
        borderRadius: "5px",
        position: "relative"
      }}
    >
      <div
        style={{
          backgroundColor: `${color}`,
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
          fontSize: "2rem"
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;

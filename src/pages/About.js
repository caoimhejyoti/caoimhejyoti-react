import React from "react";
import laugh from "../assets/img/laugh - Edited.png";

const laughStyle = {
  // backgroundColour: "white",
  height: "30rem",
  borderRadius: "50%",
};

const bubbleStyle = {
  backgroundColour: "#0d324d",
};
export default function About() {
  return (
    <div>
      <div className="hero">
        <h1 className="myh1">
          Hey! <br />I am Caoimhe Jyoti
        </h1>
        <div style={bubbleStyle}>
          <img style={laughStyle} src={laugh} alt="CaoimheJyoti laughing" />
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
}

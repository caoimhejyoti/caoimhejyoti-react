import React from "react";
import laugh from "../../assets/img/laugh - Edited.png";

const laughStyle = {
  height: "30rem",
  borderRadius: "50%",
};
export default function About() {
  return (
    <div>
      <div className="hero">
        <img style={laughStyle} src={laugh} alt="CaoimheJyoti laughing" />
        <h1 className="myh1">
          Hey! <br />I am Caoimhe Jyoti
        </h1>
      </div>
      <div></div>
    </div>
  );
}

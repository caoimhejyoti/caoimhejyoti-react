import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";

// IMGs
import laugh from "../assets/img/laugh - Edited.png";
import eyes from "../assets/img/eyes-large.png";
import blob from "../assets/img/blobs/blob_1_green.png";

const laughStyle = {
  height: "30rem",
  borderRadius: "50%",
};

const bubbleStyle = {
  bacgroundImage: blob,
  // backgroundColour: "#0d324d",
};
export default function About() {
  return (
    <div>
      <ThemeProvider theme={inputTheme}>
        <div className="hero eyes">
          <h1 id="myh1">
            Hey! <br />I am Caoimhe Jyoti
          </h1>
          <div>
            {/* <img style={laughStyle} src={eyes} alt="CaoimheJyoti laughing" /> */}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";

// IMGs
import laugh from "../assets/img/laugh - Edited.png";
import eyes from "../assets/img/eyes-large.png";
import blob from "../assets/img/blobs/blob_1_green.png";
import { Typography } from "@mui/material";

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
        </div>
        <div>
          <Typography>
            {" "}
            I am a colourful amalgamation of working in the events industry and
            a love for puzzels. <br />
            <br />
            I am new to the work of Fullstack development but that is not
            stopping me! I am a keen learner and cannot wait to get stuck into
            my next projec.
            <br />
            <br />
            Lets make your ideas into a reality!
          </Typography>
        </div>
      </ThemeProvider>
    </div>
  );
}

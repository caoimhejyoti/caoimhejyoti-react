import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";

// IMGs
import laugh from "../assets/img/laugh - Edited.png";
import eyes from "../assets/img/eyes-large.png";
import blob from "../assets/img/blobs/blob_1_green.png";
import { Typography } from "@mui/material";
import { Container, Col, Row } from "react-bootstrap";

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
        <Row className="hero eyes">
          <h1 id="myh1">
            Hey! <br />I am Caoimhe Jyoti
          </h1>
        </Row>
        <Row className="d-flex m-4 ">
          <Typography id="intro">
            I am a colourful amalgamation of creative arts and problem solver. I
            may be a fledgling Fullstack developer but that is not stopping me!
            I am a keen coder and cannot wait to get stuck into the next
            project. <br />
            <br />
            Having worked in the Arts and Events industry in the UK, I moved to
            Perth, Australia in 2019 just in time for the pandemic. Through the
            chaos of settling in my new home and a worldwide lockdown, my
            passion for coding was re-ignited.
            <br />
            Having recently graduated from the UWA Full Stack Development
            Bootcamp, I know there is still lots more to learn. This excites me
            and I relish the opportunity to get stuck in.
            <br />I am passionate about creating reality from imagination. So
            what world shall we create next?
          </Typography>
        </Row>
      </ThemeProvider>
    </div>
  );
}

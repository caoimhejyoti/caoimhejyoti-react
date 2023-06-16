import React from "react";
import "./../style/Resume.css";
import { Col, Container, Row } from "react-bootstrap";
import { Box, CardHeader, CardContent, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";
import Button from "../components/resumeButtons";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const languages = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Languages" className="text-center" />
        {/* <ListItem> */}
        <CardContent>
          <Typography paragraph>
            {bull} HTML 5 {bull} CSS 3 {bull} JavaScript {bull} Markdown {bull}{" "}
            Git {bull}
          </Typography>
        </CardContent>
        {/* </ListItemText> */}
        {/* </ListItem> */}
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);

const Frameworks = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader
          title="Frameworks, Libraries and Platforms"
          className="text-center"
        />
        <CardContent>
          <Typography paragraph>
            {bull} BootStrap {bull} MUI {bull} Tailwinds {bull} ApolloGraphQL{" "}
            {bull} Express {bull} Insomnia {bull} NPM {bull} jQuery {bull}{" "}
            NodeJS {bull} React {bull} Webpack {bull} JWT {bull} MySQL {bull}{" "}
            MongoDB {bull} Sequelize {bull} Heroku {bull} GitHub Pages {bull}{" "}
            Visual Studio Code {bull} Google Drive {bull} Canva {bull} GitHub{" "}
            {bull} Adobe Illustrator {bull} Adobe Indesign {bull} Adobe Premier
            Pro {bull} Adobe Photoshop {bull}
          </Typography>
        </CardContent>
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);
const Database = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Databases" className="text-center" />
        <CardContent>
          <Typography paragraph>
            {bull} MySQL {bull} MongoDB {bull} Sequelize {bull}
          </Typography>
        </CardContent>
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);
const Hosting = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Hosting" className="text-center" />
        <CardContent>
          <Typography paragraph>
            {bull} Heroku {bull} GitHub Pages {bull}
          </Typography>
        </CardContent>
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);
const Software = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Software and Tools" className="text-center" />
        <CardContent>
          <Typography paragraph>
            {bull} Visual Studio Code {bull} Google Drive {bull} Canva {bull}{" "}
            GitHub {bull} Adobe Illustrator {bull} Adobe Indesign {bull} Adobe
            Premier Pro {bull} Adobe Photoshop {bull}
          </Typography>
        </CardContent>
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);
const Download = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        {/* <CardHeader title="Software and Tools" className="text-center" /> */}
        <CardContent>
          <Typography paragraph>
            <p>Interested in a full resume? Download it here.</p>
            <Button />
          </Typography>
        </CardContent>
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);

export default function Resume() {
  return (
    <Container className="fluid ">
      <Row className=" justify-content-center">
        <h1 className="myh1">Resume</h1>
      </Row>
      <Row className=" justify-content-center">
        <Col className="card">{languages}</Col>
        <Col className="card">{Database}</Col>
      </Row>
      <Row className=" justify-content-center">
        <Col className="card">{Hosting}</Col>
        <Col className="card">{Software}</Col>
      </Row>
      <Row className=" justify-content-center">
        <Col className="card">{Frameworks}</Col>
      </Row>
      <Row className=" justify-content-center">
        <Col className="card">{Download}</Col>
      </Row>
      {/* <Row className=" justify-content-center m-2">
        <p>Interested in a full resume? Download it here.</p>
        <Button />
      </Row> */}
    </Container>
  );
}

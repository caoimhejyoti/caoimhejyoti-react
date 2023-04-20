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

const frontEndCard = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Front End" className="text-center" />
        {/* <ListItem> */}
        <CardContent>
          <Typography paragraph>
            {bull} HTML 5 {bull} CSS 3 {bull} JavaScript {bull} jQuery {bull}{" "}
            React {bull} BootStrap {bull} Canva {bull}
          </Typography>
        </CardContent>
        {/* </ListItemText> */}
        {/* </ListItem> */}
      </CardContent>
    </ThemeProvider>
  </React.Fragment>
);

const backEndCard = (
  <React.Fragment>
    <ThemeProvider theme={inputTheme}>
      <CardContent>
        <CardHeader title="Back End" className="text-center" />
        <CardContent>
          <Typography paragraph>
            {bull} NodeJS {bull} Express {bull} MySQL {bull} MongoDB {bull} API{" "}
            {bull} Git {bull} GitHub {bull}
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
        <Col className="card">{frontEndCard}</Col>
        <Col className="card">{backEndCard}</Col>
      </Row>
      <Row className=" justify-content-center m-2">
        <p>Interested in a full resume? Download it here.</p>
        <Button />
      </Row>
    </Container>
  );
}

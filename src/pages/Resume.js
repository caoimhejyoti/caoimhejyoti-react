import React from "react";
import "./../style/Resume.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
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
        <CardHeader title="Front End" />
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
        <CardHeader title="Back End" />
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

// const languagesCard = (
//   <React.Fragment>
//     <ThemeProvider theme={inputTheme}>
//       <CardContent>
//         <CardHeader title="Languages" />
//         <ListItem>
//           <ListItemText>
//             {bull} HTML 5 {bull} CSS 3 {bull} JavaScript {bull} MySQL {bull}{" "}
//             MongoDB
//             {bull} React {bull} NodeJS {bull} Express {bull} Git {bull} GitHub
//             {bull}
//             {bull}
//           </ListItemText>
//         </ListItem>
//       </CardContent>
//     </ThemeProvider>
//   </React.Fragment>
// );

export default function Resume() {
  return (
    <div>
      <Container className="fluid">
        {/* <div> */}
        <h1 className="myh1">Resume</h1>
        {/* </div> */}
        {/* <div> */}
        <p>Interested in a full resume? Download it here.</p>
        {/* <Row > */}
        <Button className=" justify-content-center" />
        {/* </Row> */}
        {/* </div> */}
      </Container>
      <Container className="fluid">
        <Row className=" justify-content-center">
          {/* <div className="resume-container"> */}
          <div className="resume-card">
            {/* <h2>Front-end Experience</h2>
          <p></p> */}
            {frontEndCard}
          </div>
          <div className="resume-card">
            {/* <h2>Back-end Experience</h2>
          <p></p> */}
            {backEndCard}
          </div>
          {/* <div className="resume-card">{languagesCard}</div> */}
          {/* </div>
           */}
        </Row>
      </Container>
    </div>
  );
}

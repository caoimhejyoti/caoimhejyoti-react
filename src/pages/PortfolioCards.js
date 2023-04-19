import React from "react";
import "./../style/Card.css";
import { Col, Row, Stack } from "react-bootstrap";
import {
  Button,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// PROJECT IMGS:
import inputTheme from "./../style/theme";
import buddyUpImg from "../assets/img/portfolio-img/buddy-up-screenshot.png";
import PPPImg from "../assets/img/portfolio-img/ppp-screenshot.png";
import socialImg from "../assets/img/portfolio-img/social-media-api-screenshot.png";
import codingWCaoimheImg from "../assets/img/portfolio-img/coding-with-caoimhe-screenshot.png";
import teamProfileImg from "../assets/img/portfolio-img/team-profile-creator-screenshot.png";
import eCommerceImg from "../assets/img/portfolio-img/e-commerce-platform-screenshot.png";

const PortfolioCardStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function PortfolioCards() {
  const cardsArr = [
    {
      title: "Buddy Up",
      img: buddyUpImg,
      copy:
        "Buddy Up is a meeting platform developed to provide users a place to meet up with others for activities",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/buddy-up",
      deployment: "Deployment",
      deploymentLink: "https://buddy-up-project.herokuapp.com/",
    },
    {
      title: "Pumping Party Planner",
      img: PPPImg,
      copy:
        "Pumping Party Planner was created as my first group project on my Coding Bootcamp course. This web app allows users to plan a cocktail party with a personally selected drinks menu and music playlist",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/pumping-party-planner",
      deployment: "Deployment",
      deploymentLink: "https://caoimhejyoti.github.io/pumping-party-planner/",
    },
    {
      title: "Coding with Caoimhe",
      img: codingWCaoimheImg,
      copy:
        "I created this CMS-style blog about coding for developers. The purpose for the project was to create the app rather than the blog content.",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/coding-with-caoimhe",
      deployment: "Deployment",
      deploymentLink: "https://coding-with-caoimhe.herokuapp.com/",
    },
    {
      title: "Soicial Network API",
      img: socialImg,
      copy:
        "The purpose of this project was to create an API for the use within a social network. I worked with monogoDB to create this API. ",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/social-network-api",
      deployment: "No Deployment - please follow github instructions",
    },
    {
      title: "Team Profile Creator",
      img: teamProfileImg,
      copy:
        "The Team Profile Creator is a Node.js command line application. This app asks users relevant questions, and then creates a HTML file with the team profile information.",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/team-profile-creator",
      deployment: "No Deployment - please follow github instructions",
    },
    {
      title: "E-Commerce Platform",
      img: eCommerceImg,
      copy:
        "Operating from your CLI and Insomnia, this project focused on creating the backend for an E-Commerce platform. This project was created using an express.js API and Sequelize.",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/e-commerce-platform",
      deployment: "No Deployment - please follow github instructions",
    },
  ];

  const cardDetail = cardsArr.map((cardsArr, index) => {
    const hasNoDeployment =
      cardsArr.deployment ===
      "No Deployment - please follow github instructions";

    return (
      <React.Fragment>
        <ThemeProvider theme={inputTheme}>
          <CardContent className="card">
            <CardHeader title={`${cardsArr.title}`} />
            <CardContent className="flex">
              <Row className="justify-content-center ">
                <Col className="d-flex justify-content-center ">
                  <CardMedia
                    sx={{ width: "25vw" }}
                    component="img"
                    alt={`Screen shot of ${cardsArr.title}`}
                    image={`${cardsArr.img}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Typography paragraphy>{cardsArr.copy}</Typography>
                </Col>
              </Row>
              <Row>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    id="submit-button"
                    className="primary m-2 card-button"
                    href={`${cardsArr.githubLink}`}
                    target="blank"
                  >
                    {cardsArr.github}
                  </Button>
                  {hasNoDeployment ? (
                    <Typography paragraphy>
                      No Deployment - please follow GitHub instructions
                    </Typography>
                  ) : (
                    <Button
                      variant="contained"
                      id="submit-button"
                      className="primary m-2 card-button"
                      href={`${cardsArr.deploymentLink}`}
                      target="blank"
                    >
                      {cardsArr.deployment}
                    </Button>
                  )}
                </Stack>
              </Row>
            </CardContent>
          </CardContent>
        </ThemeProvider>
      </React.Fragment>
    );
  });
  return <div style={PortfolioCardStyle}>{cardDetail}</div>;
}

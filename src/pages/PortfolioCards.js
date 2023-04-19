import React from "react";
import "./../style/Card.css";
import { CardImg, Col, Container, Form, Row, Stack } from "react-bootstrap";
import {
  Button,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";
// import Button from "../components/portfolioButtons";
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
      copy: "Buddy Up",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/buddy-up",
      deployment: "Deployment",
      deploymentLink: "https://buddy-up-project.herokuapp.com/",
    },
    {
      title: "Pumping Party Planner",
      img: PPPImg,
      copy: "TBC",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/pumping-party-planner",
      deployment: "Deployment",
      deploymentLink: "https://caoimhejyoti.github.io/pumping-party-planner/",
    },
    {
      title: "Soicial Network API",
      img: socialImg,
      copy: "TBC",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/social-network-api",
      deployment: "No Deployment - please follow github instructions",
      //   deploymentLink: "https://buddy-up-project.herokuapp.com/",
    },
    {
      title: "Coding with Caoimhe",
      img: codingWCaoimheImg,
      copy: "TBC",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/coding-with-caoimhe",
      deployment: "Deployment",
      deploymentLink: "https://coding-with-caoimhe.herokuapp.com/",
    },
    {
      title: "Team Profile Creator",
      img: teamProfileImg,
      copy: "TBC",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/team-profile-creator",
      deployment: "No Deployment - please follow github instructions",
      //   deploymentLink: "https://buddy-up-project.herokuapp.com/",
    },
    {
      title: "E-Commerce Platform",
      img: eCommerceImg,
      copy: "TBC",
      github: "GitHub Repository",
      githubLink: "https://github.com/caoimhejyoti/e-commerce-platform",
      deployment: "No Deployment - please follow github instructions",
      //   deploymentLink: "https://buddy-up-project.herokuapp.com/",
    },
  ];

  const cardDetail = cardsArr.map((cardsArr, index) => {
    const hasDeployment =
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
                  {hasDeployment ? (
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

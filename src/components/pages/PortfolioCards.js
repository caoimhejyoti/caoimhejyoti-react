import React from "react";
import "./../../style/Card.css";
import buddyUpImg from "../../assets/img/portfolio-img/buddy-up-screenshot.png";
import PPPImg from "../../assets/img/portfolio-img/ppp-screenshot.png";
import socialImg from "../../assets/img/portfolio-img/social-media-api-screenshot.png";
import codingWCaoimheImg from "../../assets/img/portfolio-img/coding-with-caoimhe-screenshot.png";
import teamProfileImg from "../../assets/img/portfolio-img/team-profile-creator-screenshot.png";
import eCommerceImg from "../../assets/img/portfolio-img/e-commerce-platform-screenshot.png";

const PortfolioCardStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function PortfolioCards() {
  const cards = [
    {
      title: "Buddy Up",
      img: buddyUpImg,
      copy: "TBC",
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

  const cardDetail = cards.map((cards, index) => {
    return (
      <div className="card" key={index}>
        <h2 className="card-title">{cards.title}</h2>
        <img
          className="card-img"
          src={cards.img}
          alt={`Screen shot of ${cards.title}`}
        />
        <p className="card-text">{cards.copy}</p>
        <a href={cards.githubLink} target="blank" className="card-button">
          {cards.github}
        </a>
        <a href={cards.deploymentLink} target="blank" className="card-button">
          {cards.deployment}
        </a>
      </div>
    );
  });
  return <div style={PortfolioCardStyle}>{cardDetail}</div>;
}

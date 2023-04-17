import React from "react";
import "./../../style/Card.css";

const PortfolioCardStyle = {
  display: "flex",
  flexWrap: "wrap",
};

export default function PortfolioCards() {
  const cards = [
    {
      title: "Buddy Up",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/buddy-up",
    },
    {
      title: "Pumping Party Planner",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/pumping-party-planner",
    },
    {
      title: "Soicial Network API",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/social-network-api",
    },
    {
      title: "Coding with Caoimhe",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/coding-with-caoimhe",
    },
    {
      title: "Team Profile Creator",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/team-profile-creator",
    },
    {
      title: "E-Commerce Platform",
      copy: "TBC",
      button: "GitHub Repository",
      link: "https://github.com/caoimhejyoti/e-commerce-platform",
    },
  ];

  const cardDetail = cards.map((cards, index) => {
    return (
      <div className="card" key={index}>
        <h2 className="card-title">{cards.title}</h2>
        <p className="card-text">{cards.copy}</p>
        <button href={cards.link}>{cards.button}</button>
      </div>
    );
  });
  return <div style={PortfolioCardStyle}>{cardDetail}</div>;
}

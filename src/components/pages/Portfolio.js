import React from "react";
import PortfolioCards from "./PortfolioCards";



export default function Portfolio() {
  return (
    <div>
      <div>
        <h1 className="myh1">Portfolio</h1>
      </div>
      <div>
        <PortfolioCards className = "container"  />
      </div>
    </div>
  );
}

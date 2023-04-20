import React from "react";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div>
      <div>
        <h1 className="myh1">Portfolio</h1>
        <p>
          Want to see examples of my work? <br /> Here is your chance.{" "}
        </p>
      </div>
      <div>
        <Project className="container" />
      </div>
    </div>
  );
}

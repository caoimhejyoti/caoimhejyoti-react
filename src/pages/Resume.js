import React from "react";
import "./../style/Resume.css";

// const fileAddress = `https://localhost:3000/resume_test5.pdf`;

export default function Resume() {
  // const download = (url) => {
  //   fetch(url)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const blobURL = window.URL.createObjectURL(new Blob([blob]));
  //       const fileName = url.split("/").pop();
  //       const aTag = document.createElement("a");
  //       aTag.href = blobURL;
  //       aTag.setAttribute("download", fileName);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //     });
  // };

  return (
    <div>
      <div>
        <h1 className="myh1">Resume</h1>
      </div>
      <div>
        <p>Interested in a full resume? Download it here.</p>
        <a
          href="https://github.com/caoimhejyoti/caoimhejyoti-react/raw/main/src/assets/downloads/resume_test5.pdf"
          className="card-button link"
          target="blank"
        >
          Download
        </a>
      </div>
      <div className="resume-container">
        <div className="resume-card">
          <h2>Front-end Experience</h2>
          <p></p>
        </div>
        <div className="resume-card">
          <h2>Back-end Experience</h2>
          <p></p>
        </div>
        <div className="resume-card">
          <h2>Languages</h2>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>Sequalize</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>npm</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

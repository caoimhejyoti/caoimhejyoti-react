import React from "react";

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
        <button href = "https://github.com/caoimhejyoti/caoimhejyoti-react/raw/master/src/assets/downloads/resume-test5.pdf" className="card-button" target="blank">Download</button>
      </div>
    </div>
  );
}

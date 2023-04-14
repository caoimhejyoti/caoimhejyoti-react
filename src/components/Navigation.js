import React from "react";
import logo from "../assets/img/caoimheJyoti-logo.png";

const logoStyle = {
  width: "10rem",
  height: "10rem",
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav row  align-items-center">
      <li className="navigation nav-item col ">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "About"
              ? "nav-link active d-flex justify-content-center"
              : "nav-link d-flex justify-content-center"
          }
        >
          About
        </a>
      </li>
      <li className="navigation nav-item col ">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio"
              ? "nav-link active d-flex justify-content-center"
              : "nav-link d-flex justify-content-center"
          }
        >
          Portfolio
        </a>
      </li>
      <li className=" nav-item col-6 ">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "Home"
              ? "nav-link active d-flex justify-content-center"
              : "nav-link d-flex justify-content-center"
          }
        >
          <img style={logoStyle} src={logo} alt="CaoimheJyoti logo" />
        </a>
      </li>
      <li className="navigation nav-item col">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Resume"
              ? "nav-link active d-flex justify-content-center"
              : "nav-link d-flex justify-content-center"
          }
        >
          Resume
        </a>
      </li>
      <li className="navigation nav-item col">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact"
              ? "nav-link active d-flex justify-content-center"
              : "nav-link d-flex justify-content-center"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

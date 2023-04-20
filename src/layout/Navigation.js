import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/CaoimheJyoti - logo-v3.png";

const logoStyle = {
  width: "10rem",
  height: "10rem",
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  function navigationActiveWhen(pageName) {
    return currentPage === pageName ? " navigation-active " : "navigation ";
  }
  return (
    <Navbar collapseOnSelect expand="sm">
      <ThemeProvider theme={inputTheme}>
        <Container>
          <Navbar.Brand
            href="#about"
            onClick={() => handlePageChange("About")}
            className=" navigation mx-sm-2 mx-md-4"
          >
            <img style={logoStyle} src={logo} alt="CaoimheJyoti logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-between w-100">
              <Nav.Item
                href="#about"
                onClick={() => handlePageChange("About")}
                className={navigationActiveWhen("About") + "mx-sm-2 mx-md-0"}
              >
                About
              </Nav.Item>

              <Nav.Item
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  navigationActiveWhen("Portfolio") + "mx-sm-2 mx-md-0"
                }
              >
                Portfolio
              </Nav.Item>

              <Nav.Item
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={navigationActiveWhen("Resume") + "mx-sm-2 mx-md-0"}
              >
                Resume
              </Nav.Item>
              <Nav.Item
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={navigationActiveWhen("Contact") + "mx-sm-2 mx-md-0"}
              >
                Contact
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </ThemeProvider>
    </Navbar>
  );
}

export default Navigation;

// NOTE: Original NAVBAR
// <ul className="nav row ">
//   <li className="navigation nav-item col ">
//     <a
//       href="#about"
//       onClick={() => handlePageChange("About")}
//       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//       className={
//         currentPage === "About" ? " navigation-active " : "navigation "
//       }
//     >
//       About
//     </a>
//   </li>
//   <li className="navigation nav-item col ">
//     <a
//       href="#portfolio"
//       onClick={() => handlePageChange("Portfolio")}
//       // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//       className={
//         currentPage === "Portfolio" ? "navigation-active " : "navigation "
//       }
//     >
//       Portfolio
//     </a>
//   </li>
//   <li className="navigation nav-item col ">
//     <a
//       href="#about"
//       onClick={() => handlePageChange("About")}
//       // This is a conditional (ternary) operator that checks to see if the current page is "About"
//       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//       className={currentPage === "About" ? "nav-link active" : "nav-link "}
//     >
//       <img style={logoStyle} src={logo} alt="CaoimheJyoti logo" />
//     </a>
//   </li>
//   <li className="navigation nav-item col">
//     <a
//       href="#resume"
//       onClick={() => handlePageChange("Resume")}
//       // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//       className={
//         currentPage === "Resume" ? "navigation-active " : "navigation "
//       }
//     >
//       Resume
//     </a>
//   </li>
//   <li className="navigation nav-item col">
//     <a
//       href="#contact"
//       onClick={() => handlePageChange("Contact")}
//       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//       className={
//         currentPage === "Contact" ? "navigation-active " : "navigation  "
//       }
//     >
//       Contact
//     </a>
//   </li>
// </ul>

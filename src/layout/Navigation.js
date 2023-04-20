import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../style/theme";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/CaoimheJyoti - logo-v3.png";

const logoStyle = {
  width: "10rem",
  height: "10rem",
};

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

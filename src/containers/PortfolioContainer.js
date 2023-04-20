import React, { useState } from "react";
import Navigation from "./../layout/Navigation";
import Footer from "./../layout/Footer";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

const contentWrap = {
  paddingBottom: "2.5rem",
};
const footerMaster = {
  bottom: 0,
  height: "2.5rem",
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <About />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div style={contentWrap}>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
      <div style={footerMaster}>
        <Footer />
      </div>
    </div>
  );
}

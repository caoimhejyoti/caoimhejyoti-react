import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
// import Home from './pages/Home';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const contentWrap = {
  paddingBottom: "2.5rem",
};
const footerMaster = {
  // position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem",
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <div style={footerMaster}>
        <Footer/>
      </div>
    </div>
  );
}

import React from "react";
import Overview from "../All-Things-Overview/all-things-overview";
// import Footer from "../Footer/footer";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="hero-page">
        <div className="logo"></div>
        <div className="main-button">
          <button>Book Now</button>
        </div>
      </div>
      <Overview />
    </div>
  );
}

export default Home;

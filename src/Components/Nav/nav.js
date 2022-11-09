import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/">
        <div className="nav-logo"></div>
      </Link>
      <ul className="main-nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="nav-buttons">
        <button>
          <Link to="/register">Register</Link>
        </button>
        <div className="divider" />
        <button>
          <Link to="/sign">Sign In</Link>
        </button>
      </div>
    </div>
  );
}

export default Nav;

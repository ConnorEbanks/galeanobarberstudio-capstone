import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav () {
    return (
        <div className="Nav">
            <div>Logo</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/sign">Sign In</Link>
                </li>
            </ul>
            <div className="book-button">
            <button>Book Now</button>
            </div>
            
        </div>
    );
}

export default Nav;
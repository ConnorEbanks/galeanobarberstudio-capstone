import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="Footer top-border-line padding-between-lines">
      <div className="footer-heading">
        <div className="contact-stuff">
          <h1>Contact</h1>
          <p>Johnny - 213-456-789</p>
        </div>
        <div className="our-address">
          <h1>Our Address</h1>
          <p>123 Barber Lane</p>
          <p>Orlando Florida</p>
          <p>12345</p>
        </div>
        <div className="open-hours">
          <h1>Open Hours</h1>
          <p>M-F 8:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Footer;

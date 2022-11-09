import React from "react";
import "./footer.css";
import Map from "../Map/map";

function Footer() {
  return (
    <div className="Footer top-border-line">
      <div className="footer-heading">
        <div className="contact-stuff">
          <h1>Contact</h1>
          <p>Jonny: (904) 657-1550</p>
        </div>
        <div className="our-address">
          <h1>Our Address</h1>
          <p>716 E Washington St</p>
          <p>Orlando, Florida</p>
          <p>32801</p>
        </div>
        <div className="open-hours">
          <h1>Open Hours</h1>
          <p>M-F 8:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div className="spacing">
        <button>Book Now</button>
      </div>
      <Map />
      <div className="footer-bottom">© 2021 by Galeano Barber Studio</div>
    </div>
  );
}

export default Footer;

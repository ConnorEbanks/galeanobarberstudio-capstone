import React from "react";
import "./all-things-overview.css";
import { Link } from "react-router-dom";
import tank from "../../Images/tank.jpg";
import tankROTATED from "../../Images/tankROTATED.jpg";
import image1 from "../../Images/image1.jpg";
import image15 from "../../Images/image15.jpg";
import Footer from "../Footer/footer";

function Overview() {
  return (
    <div>
      <div className="service">
        <div className="service-section top-border-line padding-between-lines">
          <h1>Services</h1>
          <div className="service-heading">
            <div>
              <img className="service-image1" src={tank} alt="services pic" />
            </div>
            <div className="service-words">
              <ul>
                <li>Signature Haircut & Style</li>
                <li>Signature Beard Trim</li>
                <li>Signature Haircut & Style/ Beard Trim</li>
                <li>Signature Kids Cuts</li>
                <li>VIP Experience</li>
                <li>Eyebrows</li>
                <li>Designs </li>
              </ul>
            </div>
            <div>
              <img
                className="service-image2"
                src={tankROTATED}
                alt="services pic"
              />
            </div>
          </div>
          <div className="service-button">
            <Link to="/services">
              <button>See More</button>
            </Link>
          </div>
        </div>

        <div className="gallery-section top-border-line padding-between-lines">
          <div className="gallery-heading">
            <h1>Gallery</h1>
          </div>
          <div className="first-row-gallery">
            <img className="service-image3" src={image1} alt="services pic" />
            <img className="service-image4" src={image15} alt="services pic" />
            <img className="service-image3" src={image1} alt="services pic" />
          </div>
          <div className="second-row-gallery">
            <img className="service-image4" src={image15} alt="services pic" />
            <img className="service-image3" src={image1} alt="services pic" />
            <img className="service-image4" src={image15} alt="services pic" />
          </div>
          <Link to="/gallery">
            <button>See More</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Overview;

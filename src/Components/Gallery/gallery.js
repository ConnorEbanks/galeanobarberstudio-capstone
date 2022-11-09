import React from "react";
import Footer from "../Footer/footer";
import "./gallery.css";
import image1 from "../../Images/image1.jpg";

function Gallery() {
  return (
    <div>
      <div className="gallery-hero-page">
        <div className="gallery-heading">
          <p>Gallery</p>
        </div>
      </div>
      <div className="gallery-body">
        <h1 className="cut-header">Check Out Our Cuts:</h1>
        <div className="row-1">
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
        </div>
        <div className="row-2">
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
        </div>
        <div className="row-3">
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
        </div>
        <div className="row-4">
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
        </div>
        <div className="row-5">
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
          <img className="signature-image3" src={image1} alt="services pic" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;

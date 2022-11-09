import React from "react";
import Footer from "../Footer/footer";
import "./reviews.css";
import Review from "../Google-Reviews/google-reviews";

function Reviews() {
  return (
    <div>
      <div className="review-hero-page">
        <div className="review-heading">
          <p>Reviews</p>
        </div>
      </div>
      <div className="review-body">
        <div>
          <Review />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reviews;

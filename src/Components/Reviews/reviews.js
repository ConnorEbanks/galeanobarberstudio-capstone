import React from "react";
import Footer from "../Footer/footer";
import "./reviews.css";
import Review from "../Google-Reviews/google-reviews";
import GoToTop from "../Go-To-Top/goToTop";

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
        <GoToTop />
      </div>
      <Footer />
    </div>
  );
}

export default Reviews;

import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import GoToTop from "../Go-To-Top/goToTop";

function Sign() {
  return (
    <div className="sign-body">
      <div className="sign-heading">
        <p>Sign In</p>
        <div className="sign-input-box">
          <input type="text" className="username" placeholder="Username:" />
          <br />
          <input type="text" className="password" placeholder="Password:" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </div>
        <div>
          <div className="already-register">
            Don't have an account? Register here:
          </div>
          <div className="sign-button">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default Sign;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoToTop from "../Go-To-Top/goToTop";
import Footer from "../Footer/footer";
import "./register.css";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios
      .post("/register", { username, password })
      .then((res) => {
        console.log(res.data);
        navigate("/sign");
      })
      .catch((error) => {
        alert(error, "Could not register a user at this time");
      });
  };
  return (
    <div className="register-body">
      <form onSubmit={register}>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="username"
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
        ></input>
        <button type="submit">Submit</button>
        <Link to="/sign">
          <p>Already have an account? Sign in here.</p>
        </Link>
        <GoToTop />
        <Footer />
      </form>
    </div>
  );
}

export default Register;

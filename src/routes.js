import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Gallery from "./Components/Gallery/gallery";
import Home from "./Components/Home/home";
import Register from "./Components/Register/register";
import Reviews from "./Components/Reviews/reviews";
import Services from "./Components/Services/services";
import Sign from "./Components/Sign/sign";

export default (
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/sign" element={<Sign />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/gallery" element={<Gallery />}></Route>
    <Route path="/reviews" element={<Reviews />}></Route>
    <Route path="/services" element={<Services />}></Route>
  </Routes>
);

import React from "react";
import Nav from "../Nav/nav"
// import Footer from "../Footer/footer";
import "./home.css";

function Home () {
    return (
        <div className="landing-page">
            <h1>Home Page Galeano Barber Studio Logo</h1>
            <div className="services-at-a-glance">
            <ul>
                <li>
                    - Haircuts
                </li>
                <li>
                    - Beard Trims
                </li>
                <li>
                    - Face Masks
                </li>
                <li>
                    - Braids
                </li>
                <li>
                    - Hot Towel Service
                </li>
            </ul>
            </div>
            <button className="landing-book-now">Book Now</button>
        </div>
    );
}

export default Home;
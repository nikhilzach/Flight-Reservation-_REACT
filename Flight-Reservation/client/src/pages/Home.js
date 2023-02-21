import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/airplane.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      
      <div className="headerContainer">
        <h1 id ="companyname"> flyWithUs.com </h1>
        <p> The flight of dreams</p>
        <Link to="/booking2">
          <a href="something" class="button1">
            BOOK NOW
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;

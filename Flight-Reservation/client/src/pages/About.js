import React from "react";
import AirplaneBanner from "../assets/AirplaneBanner.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AirplaneBanner})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p id="About">
          Welcome to flyWithUs.com We are a team of dedicated
          travel professionals who have come together to create a simple and
          efficient way for you to book your flights. Our system is
          user-friendly and allows you to search for and compare flights from
          multiple airlines with just a few clicks. You can also easily manage
          your bookings and make any necessary changes to your itinerary. We
          understand that planning a trip can be overwhelming, which is why we
          offer 24/7 customer support to assist you with any questions or
          concerns you may have. Our team is always here to help you find the
          best flights at the best prices. We are committed to providing the
          highest level of service to our customers and strive to make your
          travel experience as seamless and enjoyable as possible. Thank you for
          choosing our airline reservation system for all of your travel needs.
        </p>
      </div>
    </div>
  );
}

export default About;

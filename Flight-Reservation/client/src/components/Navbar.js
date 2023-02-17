import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <h1 id ="navbarheading"><a href="http://localhost:3000/Login">flyWithUs.com</a></h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Booking2">Booking</Link>
          <Link to="/RescheduleTicket">Reschedule</Link>
          <Link to="/CancelTicket">Cancel Ticket</Link>
          <Link to="/about"> About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Booking2">Booking</Link>
        <Link to="/RescheduleTicket">Reschedule</Link>
        <Link to="/CancelTicket">Cancel Ticket</Link>
        <Link to="/about"> About </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

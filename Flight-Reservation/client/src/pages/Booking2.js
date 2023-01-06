import React, { useState } from "react";
import "../styles/Booking2.css";
import "../styles/Contact.css";

let mindate = new Date().toISOString().split("T")[0];


function InputForm() {
  
  const [Arrival, setArrival] = useState("");
  const [Departure, setDeparture] = useState("");
  const [Date, setDate] = useState("");

  const submitForm = () => {
    console.log("Arrival: ", Arrival);
    console.log("Departure: ", Departure);
    console.log("Date: ", Date);

    let flightobj = {
      Departure: Departure,
      Arrival: Arrival,
      Date: Date,
    };

    let flightobj_serialized = JSON.stringify(flightobj);
    if(Departure==="" || Arrival==="" || Date === "")
    {
      alert("Please fill all fields");
      window.open("http://localhost:3000/Booking2", "_self");
    }
    else
    {
      localStorage.setItem("flightobj", flightobj_serialized);
      window.open("http://localhost:3000/AvailableFlights", "_self");
    }
  };

  return (
    <body id="booking2">
      <div id="divtest">
        <form id="booking2form">
          <h1>Where would you like to go?</h1>
          <label>
            Departure:<br></br>
            <input
              type="text"
              required
              onChange={(e) => setDeparture(e.target.value)} 
            />
          </label>
          <label>
            Arrival:<br></br>
            <input
              type="text"
              required
              onChange={(e) => setArrival(e.target.value)}
            />
          </label>

          <label>
            Departure Date:<br></br>
            <input
              type="date"
              min={mindate}
              required
              valuecontinue={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <input
            id="submit"
            type="button"
            value="Search Flights"
            onClick={submitForm}
          />
        </form>
      </div>
    </body>
  );
}

export default InputForm;

import React, { useState } from "react";
import "../styles/Booking2.css";
import "../styles/AvailableFlights.css";
import Axios from "axios";

let count = 0;


function AvailableFlights() {
  const [FlightList, setFlightList] = useState([]);
  const [istableempty,settableempty]=useState(false);
  let flightobj_deserialized = JSON.parse(localStorage.getItem("flightobj"));

  const Departure = flightobj_deserialized.Departure;
  const Arrival = flightobj_deserialized.Arrival;
  const Date = flightobj_deserialized.Date;

  const getFlights = () => {
    Axios.get("http://localhost:3001/flight", {
      params: {
        Departure: Departure,
        Arrival: Arrival,
      },
    }).then((response) => {
      setFlightList(response.data);
      if(response.data.length===0)
      {
        settableempty(true);
      }
      else
      {
        settableempty(false);
      }

    });
  };

  if (count < 2) {
    getFlights();
    count++;
  }

  function bookThisFlight(
    Flightno,
    Flightname,
    Departure,
    Arrival,
    DepartTime,
    Fare
  ) {
    let thisflightobj = {
      Flightno: Flightno,
      Flightname: Flightname,
      Departure: Departure,
      Arrival: Arrival,
      Date: Date,
      DepartTime: DepartTime,
      Fare: Fare,
    };
    let thisflightobj_serialized = JSON.stringify(thisflightobj);

    localStorage.clear();
    localStorage.setItem("thisflightobj", thisflightobj_serialized);
    window.open("http://localhost:3000/PassengerDetails", "_self");
  }

  return (
    <body id="avai">
  { istableempty===false &&
    <div id="availflights">
      <h3>Available Flights</h3>
      <table id="searchtable">
      <tbody>
      {FlightList.map((val, key) => {
        return (
          <div className="ShowResults">
          
              <tr table="searchtable">
                <td><p>FlightNo</p><br></br>{val.Flightno}</td>
                <td><p>Flight name</p><br></br>{val.Flightname}</td>
                <td><p>Departing From</p><br></br>{val.Departure}</td>
                <td><p>Arriving at</p><br></br>{val.Arrival}</td>
                <td><p>Departure Time</p><br></br>{val.DepartTime}</td>
                <td><p>Departure Date</p><br></br>{Date}</td>
                <td><p>Base Fare</p><br></br>&#8377;{val.Fare}</td>
                
                <td>
                  <br></br>
                  <button
                    id="bookthis"
                    onClick={() => {
                      bookThisFlight(
                        val.Flightno,
                        val.Flightname,
                        val.Departure,
                        val.Arrival,
                        val.DepartTime,
                        val.Fare
                      );
                    }}
                  >
                    Book
                  </button>
                </td>
              </tr>
            
          </div>
        );
      })}
      </tbody>
    </table>
    </div>
  }
  {
    istableempty===true&&
    <div id ="availflights">
      <h1>No available flights to this destination</h1>
    </div>
  }
  </body>
  );
}

export default AvailableFlights;

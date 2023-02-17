import "../styles/ETicket.css";
import React, { useState } from "react";
import Axios from "axios";
let count = 0;
let count2=0;
function ETicket()
{
    
    const [PassengerInfo, setPassengerInfo] = useState([]);
    const [FlightList, setFlightList] = useState([]);

    let passengerobj_deserialized = JSON.parse(localStorage.getItem("passengerobj"));

    const TicketNo=passengerobj_deserialized.TicketNo;
    const FlightNo=passengerobj_deserialized.FlightNo;

  const getPassenger = () => {
    Axios.get("http://localhost:3001/passenger", {
      params: {
        TicketNo: TicketNo,
      },
    }).then((response) => {
      setPassengerInfo(response.data);
    });
  };

  if (count < 2) {
    getPassenger();
    count++;
  }

  const getFlightInfo = () => {
    Axios.get("http://localhost:3001/flightinfo", {
      params: {
        FlightNo:FlightNo
      },
    }).then((response) => {
      setFlightList(response.data);
    });
  };

  if (count2 < 2) {
    getFlightInfo();
    count2++;
  }
    
    
    return(
        <body id ="eticketbody">
        
            <div id ="eticketouterdiv">
                <div id="companyname">
                    <h1>flyWithUs.com</h1>
                </div>
                <br></br>
                <div id = "subheading">
                    <h2>Airline E-Ticket</h2>
                    <br></br>
                    <h2>E-Ticket No: {TicketNo}</h2>
                </div>
                <div id ="ticketinfo">
                   <h2> Passenger Information</h2>
                   <br></br>

                   {PassengerInfo.map((val, key) => {
                    
                    
        return (
          <div className="ShowResults">
            <table id="ticketpassengertable">
              <tr>
                <td ><p>Name</p><br></br>{val.PassengerName}</td>
                <td><p> Email</p><br></br>{val.PassengerEmail}</td>
                <td><p>Phone No</p><br></br>{val.PassengerPhoneNo}</td>
                <td><p>Departure Date</p><br></br>{val.DepartDate}</td>
                <td><p>Flight Class</p><br></br>{val.FlightClass}</td>
              </tr>
            </table>
          </div>
        );
      })}

                </div>
                <br></br>

                <div id ="ticketinfo">
                   <h2> Airline Information</h2>
                   <br></br>

                   {FlightList.map((val, key) => {
        return (
          <div className="ShowResults">
            <table id="ticketpassengertable">
              <tr>
                <td><p>FlightNo</p><br></br>{val.Flightno}</td>
                <td><p>Airline</p><br></br>{val.Flightname}</td>
                <td><p>From</p><br></br>{val.Departure}</td>
                <td><p>To</p><br></br>{val.Arrival}</td>
                <td><p>Departure Time</p><br></br>{val.DepartTime}</td>
              </tr>
            </table>
          </div>
        );
      })}

                </div>
                <br></br>
                <div id ="ticketinfo">
                    <h2> Baggage Information</h2>
                    <br></br>
                    Cabin Baggage: 7Kg
                    <br></br><br></br>
                    Free Baggage: 2 Pieces
                </div>
                <div id = "message">
                    <h2>Have a Safe Flight!</h2>
                    
                </div>
            </div>
            <br></br>
            <div id ="printeticket">
                <button id ="printticket" onClick={()=>{window.print()}}>Print E-Ticket</button>
                <br></br>
            </div>
        </body>
    )
}

export default ETicket;
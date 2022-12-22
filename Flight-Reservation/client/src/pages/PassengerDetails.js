import React, { useState } from "react";
import "../styles/PassengerDetails.css";
import "../styles/Payment.css";


import Axios from "axios";

function Passenger() {
  let thisflightobj_deserialized = JSON.parse(
    localStorage.getItem("thisflightobj")
  );
  const [isSubmitClicked,setSubmitClicked]=useState(false);
  const Flightno = thisflightobj_deserialized.Flightno;
  const Flightname = thisflightobj_deserialized.Flightname;
  const Departure = thisflightobj_deserialized.Departure;
  const Arrival = thisflightobj_deserialized.Arrival;
  const Date = thisflightobj_deserialized.Date;
  const DepartTime = thisflightobj_deserialized.DepartTime;
  const [Fare,setFare]= useState(thisflightobj_deserialized.Fare);  
let BaseFare=thisflightobj_deserialized.Fare;

  const [PassengerName, setPassengerName] = useState("null");
  const [PassengerAge, setPassengerAge] = useState("null");
  const [PassengerEmail, setPassengerEmail] = useState("null");
  const [PassengerPhoneNo, setPassengerPhoneNo] = useState("null");
  const [PassengerPassport, setPassengerPassport] = useState("null");
  const [PassengerGender, setPassengerGender] = useState("null");
  const [PassengerAddress, setPassengerAddress] = useState("null");
  const [FlightClass, setFlightClass] = useState("null");
  const [FlightNo] = useState(Flightno);

  let TicketNo;

  const characters = "123456789";

  function generateTicketNo() {
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    TicketNo = result;
 
  }

  const submitForm = () => {
    console.log(FlightClass)
    //if(FlightClass==="First Class")  setFare(Fare+100) ;
    
    console.log(Fare);
    generateTicketNo();
    const addPassenger = () => {
      Axios.post("http://localhost:3001/addPassenger", {
        TicketNo: TicketNo,
        FlightNo: FlightNo,
        PassengerName: PassengerName,
        PassengerAge: PassengerAge,
        PassengerEmail: PassengerEmail,
        PassengerPhoneNo: PassengerPhoneNo,
        PassengerPassport: PassengerPassport,
        PassengerGender: PassengerGender,
        PassengerAddress: PassengerAddress,
        FlightClass: FlightClass,
        DepartDate: Date,
      }).then(() => {
        console.log("success");
      });
    };
    if(PassengerName==="null" || PassengerAge==="null" || PassengerEmail==="null" || PassengerPhoneNo==="null" || PassengerPassport==="null" || PassengerGender==="null" || PassengerAddress==="null" ||FlightClass==="null")
    {
      alert("Please fill all the fields");
      window.open("http://localhost:3000/Passengerdetails","_self");
      
    }
    else if(PassengerPhoneNo.length<10)
    {
      alert("Invalid Phone Number");
    }
    else if(PassengerName!=="null" && PassengerAge!=="null" && PassengerEmail!=="null" && PassengerPhoneNo!=="null" && PassengerPassport!=="null" && PassengerGender!=="null" && PassengerAddress!=="null" && FlightClass!=="null")
    {
      alert("Proceed to Payment? ");
      setSubmitClicked(true)
      addPassenger();
    }

    let passengerobj = {
      TicketNo:TicketNo,
      FlightNo:Flightno
    };

    let passengerobj_serialized = JSON.stringify(passengerobj);
    localStorage.setItem("passengerobj", passengerobj_serialized);

    setPassengerAddress("null");
    setPassengerName("null");
    setPassengerAge("null");
    setPassengerEmail("null");
    setPassengerPhoneNo("null");
    setPassengerPassport("null");
    setPassengerGender("null");

  };

  return (
    <body id ="passengerdetailsbody">
    { isSubmitClicked===false &&
      <div id="test2">
        <div id="showselectedflight">
          <h3>
            {Flightno}
            <br></br>
          </h3>
          {Flightname}
          <br></br>
          {Departure} &rarr; {Arrival}
          <br></br>
          <p>
            Departure Date: {Date}
            <br></br>
          </p>
          <p>Departure Time: {DepartTime}</p>
          <h3>Fare: &#8377; {Fare}</h3>
        </div>
        <form id ="passengerdetails">
          <br></br>
          <h1>Enter Passenger Details</h1>
          <label>
            Name:<br></br>
            <input
              type="text"
              required
              onChange={(e) => setPassengerName(e.target.value)}
            />
          </label>
          <label>
            Age:<br></br>
            <input
              type="number"
              min="1"
              required
              onChange={(e) => setPassengerAge(e.target.value)}
            />
          </label>

          <label for="Gender">
            Gender:<br></br>
            <select
              name="Gender"
              id="Gender"
              required
              onChange={(e) => setPassengerGender(e.target.value)}
            >
              <option value="Choose">-select-</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
          </label>

          <label>
            Email:<br></br>
            <input
              type="email"
              required
              onChange={(e) => setPassengerEmail(e.target.value)}
            />
          </label>

          <label>
            Passport No:<br></br>
            <input
              type="text"
              required
              onChange={(e) => setPassengerPassport(e.target.value)}
            />
          </label>

          <label>
            Phone No:<br></br>
            <input
              type="number"
              min={99}
              onInput={(e)=>e.target.value=e.target.value.slice(0,10)}
              required
              onChange={(e) => setPassengerPhoneNo(e.target.value)}
            />
          </label>

          <label>
            Address:<br></br>
            <input
              type="text"
              required
              onChange={(e) => setPassengerAddress(e.target.value)}
            />
          </label>

          <label for="FlightClass">
            Select Class:<br></br>
            <select 
              name="FlightClass"
              id="FlightClass"
              required
             onChange={(e) => { setFlightClass(e.target.value);
              if(e.target.value==="First Class")
              setFare(BaseFare+(30/100)*BaseFare)
              if(e.target.value==="Business Class")
              setFare(BaseFare+(20/100)*BaseFare)
              if(e.target.value==="Premium Economy")
              setFare(BaseFare+(10/100)*BaseFare)
              if(e.target.value==="Economy")
              setFare(BaseFare)
            
            }
          }
            >
             
            
              <option value="Choose">-select-</option>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Economy">Economy</option>
            </select>


          </label>
          
          
          <br></br>
          <br></br>
          <div>
          <button id="submit" type="submit" form="passengerdetails" onClick={submitForm}>
            Proceed to Payment
          </button>
          </div>
        </form>
      </div>
    }   
    {
      isSubmitClicked===true && 
      <div>
        <div id="paymentouterdiv">
        <div id="paymentdiv"></div>
        {console.log(Fare)}
        {console.log(FlightClass)}
        <h1>Fare: &#8377;{Fare}</h1>
        <br></br>
        <h2>
          Pay the amount by scanning the qr code above. Our staff will contact
          you shortly for confirmation
          <br></br>
        </h2>
        
        <button id="GenerateTicket" onClick={()=>{window.open("http://localhost:3000/ETicket","_self")}}>Generate E-Ticket</button>
        
      </div>
      </div>
    }
    </body>
  );
}

export default Passenger;

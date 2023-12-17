const express = require("express"); //first setup express server
const app = express(); //create app from express
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "nikhil123",
  database: "flightreservationsystem",
});


app.get("/flight", (req, res) => {
  const Departure = req.query.Departure;
  const Arrival = req.query.Arrival;
  db.query(
    "select * from flight where departure = ? and arrival = ?;",
    [Departure, Arrival],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/flightinfo", (req, res) => {
  const FlightNo=req.query.FlightNo;
  db.query(
    "select * from flight where Flightno = ?",
    [FlightNo],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/flight", (req, res) => {
  const FlightNo = req.body.FlightNo;
  const FlightName = req.body.FlightName;
  const Departure = req.body.Departure;
  const Arrival = req.body.Arrival;
  const DepartTime = req.body.DepartTime;
  const Fare = req.body.Fare;

  const sqlInsert = "INSERT INTO flight VALUES (?,?,?,?,?,?) ";
  db.query(
    sqlInsert,
    [
      FlightNo,
      FlightName,
      Departure,
      Arrival,
      DepartTime,
      Fare,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});




app.get("/passenger", (req, res) => {
  const TicketNo = req.query.TicketNo;
  db.query(
    "select * from passenger where TicketNo = ?;",
    [TicketNo],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/flight",(req,res) =>{
  const FlightNo = req.query.FlightNo
  const sqlDelete = "DELETE FROM flight WHERE Flightno = ? ;"

  db.query(sqlDelete, FlightNo, (err,result) => {
     if (err) console.log(err);
     
  })
})

app.post("/addPassenger", (req, res) => {
  const TicketNo = req.body.TicketNo;
  const FlightNo = req.body.FlightNo;
  const PassengerName = req.body.PassengerName;
  const PassengerAge = req.body.PassengerAge;
  const PassengerEmail = req.body.PassengerEmail;
  const PassengerPhoneNo = req.body.PassengerPhoneNo;
  const PassengerPassport = req.body.PassengerPassport;
  const PassengerGender = req.body.PassengerGender;
  const PassengerAddress = req.body.PassengerAddress;
  const FlightClass = req.body.FlightClass;
  const DepartDate = req.body.DepartDate;
  

  const sqlInsert = "INSERT INTO passenger VALUES (?,?,?,?,?,?,?,?,?,?,?) ";
  db.query(
    sqlInsert,
    [
      TicketNo,
      FlightNo,
      PassengerName,
      PassengerAge,
      PassengerEmail,
      PassengerPhoneNo,
      PassengerPassport,
      PassengerGender,
      PassengerAddress,
      FlightClass,
      DepartDate,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

app.delete("/passenger",(req,res) =>{
    const TicketNo = req.query.TicketNo
    const sqlDelete = "DELETE FROM passenger WHERE TicketNo = ? ;"

    db.query(sqlDelete, TicketNo, (err,result) => {
       if (err) console.log(err);
       
    })
})

app.put("/passenger",(req,res) =>{
    const TicketNo = req.body.TicketNo;
    const DepartDate = req.body.DepartDate;
    const sqlUpdate = "UPDATE passenger SET DepartDate = ? WHERE TicketNo = ? ;";

    db.query(sqlUpdate, [DepartDate,TicketNo], (err,result) => {
       if (err) console.log(err);
    })
    
})
app.listen(3001, () => {
  //start app
  console.log("running on port 3001");
});
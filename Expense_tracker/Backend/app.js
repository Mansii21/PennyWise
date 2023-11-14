const express = require("express");
const { db } = require("./db/db");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const { errorHandler, notFound } = require("../Backend/middleware/error");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

app.get("/login", (req, res) => {
  res.send("hiiii");
  //console.log(" hihihii ")
  //alert("hi")
});
//error handler
app.use(notFound);
app.use(errorHandler);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(" listening to port :", PORT);
  });
  //console.log("You are listening to port :",PORT);
};
server();

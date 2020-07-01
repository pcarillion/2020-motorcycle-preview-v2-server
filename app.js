require("dotenv").config();
require("./config/dbconnect");

const express = require("express");
const app = express();
const path = require("path");
// const flash   = require("connect-flash"); // designed to keep messages between 2 http calls
const session = require("express-session");
const mongoose = require("mongoose");
const dbconnect = require("dbconnect");
const cors = require("cors");

// MONGOOSE CONFIG
mongoose
  .connect("mongodb://localhost/bikeProject", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// INITAL CONFIG
app.use(express.urlencoded({ extended: true })); // parse posted data
app.use(express.json()); // ajax ready

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
);

var corsOptions = {
  origin: process.env.FRONTEND_URI,
  credentials: true,
  optionsSuccessStatus: 200
}
console.log(process.env.FRONTEND_URI);
app.use(cors(corsOptions))

// expose login status to the hbs templates
// allows every template to check the login status
app.use(require("./middlewares/exposeLoginStatus"));

// ROUTING


// export the app (check import ./bin/www)
app.get("/", (req, res) => {res.send("hello world")})
app.use("/bikes", require("./routes/bikes"));
app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

// export the app (check import ./bin/www)
module.exports = app;

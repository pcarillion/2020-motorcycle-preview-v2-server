require("dotenv").config();
require("./config/dbconnect");
require("./helpers/hbs");

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
// const flash   = require("connect-flash"); // designed to keep messages between 2 http calls
const session = require("express-session");
const mongoose = require("mongoose");
const dbconnect = require("dbconnect");

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
// app.use(express.json()); // ajax ready

app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
app.set("views", path.join(__dirname, "views")); // wahre are the pages ?
app.set("view engine", "hbs"); // which template engine
hbs.registerPartials(path.join(__dirname, "views/partials")); // where are the tiny chunks of views ?

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
);

// expose login status to the hbs templates
// allows every template to check the login status
app.use(require("./middlewares/exposeLoginStatus"));

// ROUTING
app.use("/", require("./routes"));
app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));

// export the app (check import ./bin/www)
app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

// export the app (check import ./bin/www)
module.exports = app;

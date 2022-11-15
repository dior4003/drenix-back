const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const url = process.env.MongoDB;
// const mcqRouter = require('./routers/mcq');
const app = express();
const dbConfig = require("./config/database.config.js");

const uzb = require("./public/uz.json");
const ru = require("./public/ru.json");
// console.log(uzb);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());

// database connection
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });


// app.get("/uz", function (req, res) {
//   res.status(200).json({ uzb });
//   console.log("hello");
// });
// app.get("/ru", function (req, res) {
//   res.status(200).json({ ru });
//   console.log("hello");
// });
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
});
require("./app/routes/note.routes.js")(app);

// start
app.listen(process.env.PORT, function () {
  console.log("server worked");
});

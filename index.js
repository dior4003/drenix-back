const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
const url = process.env.MongoDB;
// const mcqRouter = require('./routers/mcq');
const app = express();
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

const { uzb, ru } = require("./public/main");
// console.log(uzb);
// middleware
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());

// database connection
con.on("open", function () {
  console.log("connected");
});

app.get("/uz", function (req, res) {
  res.send(uzb);
  console.log("hello");
});
app.get("/ru", function (req, res) {
  res.send(ru);
  console.log("hello");
});

// start
app.listen(process.env.PORT, function () {
  console.log("server worked");
});

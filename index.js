const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const url = process.env.MongoDB;
// const mcqRouter = require('./routers/mcq');
const app = express();
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

const { uzb, ru } = require("./public/uz");
// console.log(uzb);
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());

// database connection
con.on("open", function () {
  console.log("connected");
});

app.get("/uz", function (req, res) {
  res.status(200).json({ uzb });
  console.log("hello");
});
app.get("/ru", function (req, res) {
  res.status(200).json({ ru });
  console.log("hello");
});

// start
app.listen(process.env.PORT, function () {
  console.log("server worked");
});

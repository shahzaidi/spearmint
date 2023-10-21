const express = require("express");
const app = express();
const cors = require("cors");
// const Users = require("./models/usersModel");
const mongoose = require("mongoose");
const students = require("./router/Route");

// app.use(express.json());
// app.use(cors());

const Url = "mongodb://localhost:27017/spearmint";

mongoose
  .connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Coneected");
  })
  .catch((error) => console.log(error.message));

app.use(express.json());
app.use(cors());
app.use(students);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

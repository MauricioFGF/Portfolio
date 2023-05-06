const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const routes = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv").config();
// const conn = require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", routes);

const mongo_url = process.env.MONGODB_URI;

mongoose
  .connect(mongo_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conectado ao DB");
    app.listen(5000, () => {
      console.log("Servidor On!");
    });
  });

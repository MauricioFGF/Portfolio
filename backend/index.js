const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const cookieParser = require("cookie-parser");
const routes = require("./routes/router");
const mongoose = require("mongoose");
// const conn = require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", routes);

const server = http.createServer(app);

const mongo_url =
  "mongodb+srv://mauricio:Mamaelinda1!@portfolio.svmwxzm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongo_url).then(() => {
  console.log("Conectado ao DB");
  server.listen(5000, () => {
    console.log("Servidor On!");
  });
});

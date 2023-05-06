const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const cookieParser = require("cookie-parser");
const routes = require("./routes/router");
const conn = require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", routes);

const server = http.createServer(app);

conn();

server.listen(5000, function () {
  console.log("Servidor On!");
});

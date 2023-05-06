const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const routes = require("./routes/router");
app.use("/api", routes);

const server = http.createServer(app);

const conn = require("./db/conn");
conn().then(() => {
  server.listen(3000, function () {
    console.log("Servidor On!");
  });
});

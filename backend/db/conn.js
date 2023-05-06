const mongoose = require("mongoose");
require("dotenv").config();

const mongo_url =
  "mongodb+srv://mauricio:Mamaelinda1!@portfolio.svmwxzm.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Conectado ao DB");
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = main;

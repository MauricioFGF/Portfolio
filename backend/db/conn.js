const mongoose = require("mongoose");
require("dotenv").config();

const mongo_url = process.env.MONGO_URL;

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongo_url);
    console.log("Conectado ao DB");
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = main;

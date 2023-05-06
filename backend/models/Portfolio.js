const mongoose = require("mongoose");

const { Schema } = mongoose;

const portfolioSchema = new Schema({
  home: {
    type: Object,
    required: true,
  },
  about: {
    type: Object,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  qualifications: {
    type: Object,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;

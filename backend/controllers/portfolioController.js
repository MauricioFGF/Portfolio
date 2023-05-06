const PortfolioModel = require("../models/Portfolio");

const portfolioController = {
  create: async (req, res) => {
    try {
      const portfolio = {
        home: req.body.home,
        about: req.body.about,
        skills: req.body.skills,
        qualifications: req.body.qualifications,
        projects: req.body.projects,
        id: req.body.id,
      };

      const response = await PortfolioModel.create(portfolio);
      res.status(201).json({ response, msg: "Portfolio Criado" });
    } catch (error) {
      console.log("error", error);
    }
  },

  getAll: async (req, res) => {
    try {
      const portfolios = await PortfolioModel.find();
      res.json(portfolios);
    } catch (error) {
      console.log("error", error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const portfolio = await PortfolioModel.findById(id);
      if (!portfolio) res.status(404).json({ msg: "portfolio não encontrado" });
      res.json(portfolio);
    } catch (error) {
      console.log("error", error);
    }
  },

  getByFilter: async (req, res) => {
    try {
      let filter = {};
      if (req.query) {
        filter = JSON.parse(req.query.filter);
      }

      const portfolio = await PortfolioModel.find(filter);
      if (!portfolio) res.status(404).json({ msg: "portfolio não encontrado" });
      res.json(portfolio);
    } catch (error) {
      console.log("error", error);
    }
  },
};
module.exports = portfolioController;

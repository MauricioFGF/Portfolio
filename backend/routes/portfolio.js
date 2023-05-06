const router = require("express").Router();

const portfolioController = require("../controllers/portfolioController");

router
  .route("/portfolio")
  .post((req, res) => portfolioController.create(req, res));

router
  .route("/portfolio")
  .get((req, res) => portfolioController.getAll(req, res));

router
  .route("/portfolio/:id")
  .get((req, res) => portfolioController.get(req, res));

router
  .route("/portfolio-filter")
  .get((req, res) => portfolioController.getByFilter(req, res));

module.exports = router;

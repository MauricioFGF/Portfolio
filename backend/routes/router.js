const router = require("express").Router();

const portfolioRouter = require("./portfolio");

router.use("/", portfolioRouter);

module.exports = router;

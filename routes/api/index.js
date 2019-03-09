const router = require("express").Router();
const exampleRoutes = require("./example");
const questionRoutes = require("./question");

// Example routes
router.use("/example", exampleRoutes);
router.use("/questions", questionRoutes);

module.exports = router;

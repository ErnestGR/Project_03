const router = require("express").Router();
const exampleRoutes = require("./example");
const questionRoutes = require("./question");
const questionFormRoutes = require("./questionsForm");

// Example routes
router.use("/example", exampleRoutes);
router.use("/questions", questionRoutes);
router.use("/newquestion", questionRoutes);

module.exports = router;

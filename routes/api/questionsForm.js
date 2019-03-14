const router = require('express').Router();
const questionController = require("../../controllers/questionController");

router.route("/")
  .get(exampleController.findAll)
  .post(exampleController.create);

router
  .route("/:id")
  .get(exampleController.findById)
  .put(exampleController.update)
  .delete(exampleController.remove);

module.exports = router;
const router = require('express').Router();
const questionFormController = require("../../controllers/questionFormController");

router.route("/")
  .get(questionFormController.findAll)
  .post(questionFormController.create);

router
  .route("/:id")
  .get(questionFormController.findById)
  .put(questionFormController.update)
  .delete(questionFormController.remove);

module.exports = router;
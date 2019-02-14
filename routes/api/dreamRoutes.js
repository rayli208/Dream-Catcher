const dreamController = require("../../controllers/dreamController")
const router = require("express").Router();


router
  .route("/dreams")
    .post(dreamController.createDream)
    .get(dreamController.getAllDreams);

router
  .route("/dreams/:id")
    .get(dreamController.getUserDreams)
    .delete(dreamController.deleteDream);

module.exports = router;

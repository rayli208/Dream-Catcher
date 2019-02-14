const router = require('express').Router();
const path = require("path");
const isAuthenticated = require('../../middleware/isAuthenticated');


router.use(isAuthenticated);

router
  .route("/")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"))
});

router
  .route("/alldreams")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/allDreams.html"))
  })

module.exports = router;
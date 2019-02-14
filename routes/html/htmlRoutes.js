
const router = require("express").Router();
const path = require("path");

router.route("/").get(function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect(`/dashboard/${req.body.username}`);
  }
  res.sendFile(path.join(__dirname, "../../public/html/Dream-Catcher_home.html"));
});

router.route("/register").get(function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect(`/dashboard/${req.body.username}`);
  }
  res.sendFile(path.join(__dirname, "../../public/html/Dream-Catcher_register.html"));
});

router.route("/dashboard/alldreams").get((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/allDreams.html"));
})


// Route for logging user out (hit this with an <a> link)
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});


router
  .route("*")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/404.html"));
  })
  

module.exports = router;
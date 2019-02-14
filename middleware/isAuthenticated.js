module.exports = function (req, res, next) {
  console.log("User authenticated");
  if (req.user) {
    return next();
  }
  res.redirect("/")
};
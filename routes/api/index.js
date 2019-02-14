const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dreamRoutes = require("./dreamRoutes");

router.use("/", dreamRoutes);
router.use("/user", userRoutes);

module.exports = router;
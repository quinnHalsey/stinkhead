const router = require("express").Router();

router.use("/gameRoom", require("./gameRoom"));

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    name: "estelle-dev-api",
    v: "0.0.1",
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    skills: [
      {
        name: "Angular",
        cat: "FE",
        level: 8,
      },
      {
        name: "SCSS",
        cat: "FE",
        level: 9,
      },
      {
        name: "MongoDB",
        cat: "BE",
        level: 3,
      },
      {
        name: "express",
        cat: "BE",
        level: 4,
      },
    ],
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    skills: [
      {
        id: 0,
        name: "Angular",
        cat: "FE",
        level: 8,
      },
      {
        id: 1,
        name: "SCSS",
        cat: "FE",
        level: 9,
      },
      {
        id: 2,
        name: "MongoDB",
        cat: "BE",
        level: 3,
      },
      {
        id: 3,
        name: "express",
        cat: "BE",
        level: 4,
      },
    ],
  });
});

module.exports = router;

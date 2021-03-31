const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression());

app.get("/api", (req, res, next) => {
  res.json(["Angular", "MongoDB", "Express", "Heroku", "AWS"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

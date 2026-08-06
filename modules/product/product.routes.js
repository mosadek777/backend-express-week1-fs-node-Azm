const app = require("express").Router();

app.get("/allProducts", (req, res, next) => {
  res.json({ messgae: "welcome from product" });
});

module.exports = app;

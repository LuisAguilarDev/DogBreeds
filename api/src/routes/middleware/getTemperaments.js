const { Router } = require("express");
const axios = require("axios").default;
const { Breed, Temper } = require("./../../db");
const router = Router();

router.get("/", async (req, res) => {
  answer = await Temper.findAll();
  res.status(200).json(answer);
});

module.exports = router;

const router = require("express").Router();
// const mongoose = require("mongoose");
const phonesJson = require("../data/phones.json");
const Phone = require("../models/Phone.model");

router.get("/phones", (req, res) => {
  if (!phonesJson) {
    res.status(400).json({ message: "Nothing found" });
    return;
  }
  res.json(phonesJson);
});

router.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const onePhone = phonesJson.filter((phone) => phone.id == phoneId);
  if (!onePhone) {
    res.status(400).json({ message: `Phone id: ${phoneId} not found` });
    return;
  }
  res.json(onePhone);
});

module.exports = router;

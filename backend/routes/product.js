const express = require("express");
const router = express.Router();
const Rent = require("../models/Rent.js");

router.get("/mobile", async (req, res) => {
  try {
    let mobile = await Rent.find({ productType: "Mobile" });
    res.json(mobile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/laptop", async (req, res) => {
  try {
    let mobile = await Rent.find({ productType: "Laptop" });
    res.json(mobile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/smartdevice", async (req, res) => {
  try {
    let mobile = await Rent.find({ productType: "Smart Device" });
    res.json(mobile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/headphones", async (req, res) => {
  try {
    let mobile = await Rent.find({ productType: "Headphone" });
    res.json(mobile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await Rent.find();
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/item", async(req, res) => {
  try {
    let data = await Rent.findOne({_id: req.body.key});
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;

const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Rent = require("../models/Rent.js");

router.post(
  "/renter-details",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("age").trim().isInt().withMessage("Must be a integer number"),
    body("address", "Enter a valid address").isLength({ min: 5 }),
    body("city", "Enter a valid city").isLength({ min: 1 }),
    body("state", "Enter a valid address").isLength({ min: 1 }),
    body("pincode", "Enter a valid pincode").isLength({ min: 6 }).isInt(),
    body("contact", "Enter a valid contact number")
      .isLength({ min: 10 })
      .isInt(),
    body("productType", "Enter a valid product type").isLength({ min: 1 }),
    body("productSpecification", "Enter a valid specification").isLength({ min: 1 }),
    body("productDescription", "Enter a valid description").isLength({
      min: 10,
    }),
    body("productImage", "Upload the image").isLength({min: 1})
  ],
  fetchuser,
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    try {
      let success = false;
      const {
        name,
        age,
        address,
        city,
        state,
        pincode,
        contact,
        productType,
        productSpecification,
        productDescription,
        productImage
      } = req.body;
      let details = await Rent.create({
        name,
        age,
        address,
        city,
        state,
        pincode,
        contact,
        productType,
        productSpecification,
        productDescription,
        productImage
      });
      success = true;
      res.json({success, details});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;

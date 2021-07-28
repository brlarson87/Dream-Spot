const express = require("express");
const router = express.Router();
const Charity = require("../../models/Charity");
const { check, validationResult } = require("express-validator");


//@route   GET api/charity/
//@desc    Gets all charities
//@access  Public
router.get(
    "/",
    async (req, res) => {
  
      try {
        const charities = await Charity.find();
        res.status(200).json({ charities });
      } catch (error) {
        console.log('error in charity.js (routes/api) -- GET /');
        res.status(400).json({ error });
      }
    }
  );



module.exports = router;
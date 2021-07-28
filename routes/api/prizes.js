const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Prize = require("../../models/Prize");



//@route   GET api/prizes/
//@desc    Get all active prizes
//@access  Public
router.get("/", async (req, res) => {

    try {
        const prizes = await Prize.find({ active: true });
        res.json({ prizes });
    } catch (error) {
        console.log('error in prizes.js (routes/api) -- GET /');
        res.status(400).json({ error });
    }

});

//@route   GET api/prizes/archived
//@desc    Get all archived prizes
//@access  Public
router.get("/archived", async (req, res) => {

    try {
        const prizes = await Prize.find({ active: false });
        res.json({ prizes });
    } catch (error) {
        console.log('error in prizes.js (routes/api) -- GET /');
        res.status(400).json({ error });
    }

});

//@route   GET api/prizes/:id
//@desc    Get single prize by id
//@access  Public
router.get("/:id", async (req, res) => {

    try {
        const prize = await Prize.findById({ _id: req.params.id })
        res.json({ prize });

    } catch (error) {
        console.log('error in prizes.js (routes/api) -- GET /');
        res.status(400).json({ error });
    }

})

module.exports = router;
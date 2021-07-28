const express = require("express");
const router = express.Router();
const Prize = require("../../models/Prize");
const Charity = require("../../models/Charity");
const { check, validationResult } = require("express-validator");
const admin = require("../../middleware/admin");

//@route   POST api/admin/addHousePrize
//@desc    Add new house prize
//@access  Admin
router.post("/addHousePrize",
  admin,
  [
    check("address", "Address is required").exists(),
    check("prizeTotal", "Prize Total is required").exists(),
    check("pictures", "Pictures are required").exists(),
    check("secondaryPrizes", "Secondary Prizes are required").exists(),
    check("ticketsPrizes", "Ticket Prizes are required").exists(),
    check("details", "Detials are required").exists(),
  ],
  async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const prizeData = ({
                        address, 
                        prizeTotal, 
                        pictures, 
                        secondaryPrizes, 
                        ticketsPrizes, 
                        details } = req.body);
              

    try {
        const prize = new Prize(prizeData);
        await prize.save();

        res.json({ prize });
    } catch (error) {
        console.log('error in admin.js (routes/api) -- POST /addHousePrize');
        res.status(400).json({ error });
    }
});

//@route   POST api/admin/addCharity
//@desc    Add charity to database
//@access  Admin
router.post(
    "/addCharity",
    async (req, res) => {
      const { name, url, desc } = req.body;
  
      try {
        const charity = new Charity({ name, url, desc });
        await charity.save();
        res.status(200).json(charity.name);
      } catch (error) {
        console.log('error in admin.js (routes/api) -- POST /addCharity');
        res.status(400).json({ error });
      }
    }
  );

// @route  delete api/admin/archive/:id
// @desc   Set active to false on finished prize
// @access Development/Admin
router.patch("/admin/archive/:id", async (req, res) => {
    try {
      let prize = await Prize.findById(req.params.id);
  
      prize.active = false;
  
      await prize.save();
  
      res.json({ prize });
    } catch (error) {
        console.log('error in admin.js (routes/api) -- DELETE /clearPrize/:id');
        res.status(400).json({ error });
    }
  });

// @route PATCH api/admin/
// @desc clear prize tickets and charities
// @access Development/Admin
router.delete("/admin/clearPrize/:id", async (req, res) => {
    try {
      let prize = await Prize.findById(req.params.id);
  
      prize.ticketPool = 0;
      prize.charityPool = [];
  
      await prize.save();
  
      res.json({ prize });
    } catch (error) {
        console.log('error in admin.js (routes/api) -- DELETE /clearPrize/:id');
        res.status(400).json({ error });
    }
  });  

module.exports = router;
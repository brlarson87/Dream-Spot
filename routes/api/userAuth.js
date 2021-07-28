const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require('../../models/User')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require('../../middleware/auth');

//@route   GET api/userAuth/
//@desc    Load active user
//@access  Auth
router.get('/', auth, async (req, res) => {
    
    try {
        let user = await (await User.findById({ _id: req.user.id }));
        res.json(user);
    } catch (error) {
        console.log('error in userAuth.js (routes/api) -- GET /');
        res.status(400).json({ error });
    }
});

//@route   POST api/userAuth/
//@desc    Login user
//@access  Public
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
              id: user._id,
            },
          };
    
          jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 1500 },
            (err, token) => {
              if (err) {
                res.json({ err });
              }
              res.json({ token });
            }
          );

    } catch (error) {
        console.log('error in userAuth.js (routes/api) -- POST /');
        res.status(400).json({ error });
    }
});

//@route   POST api/userAuth/register
//@desc    Create new user
//@access  Public
router.post('/register', async (req, res) => {
    const { firstName, 
            lastName, 
            email, 
            phone, 
            password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if(user) {
            res.status(401).json({ msg: 'Email Already exists'});
        }

        let newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password
        });

        if(req.body.admin) {
            newUser.admin = true;
        }

        const salt = await bcrypt.genSalt(10);

        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();
        
        const payload = {
            user: {
              id: newUser._id,
            },
        };

        jwt.sign(payload, 
                config.get("jwtSecret"), 
                { expiresIn: 1500},
                (err, token) => {
                    if(err) res.json({ err });
                    res.json({ token });
                }
        );

    } catch (error) {
        console.log('error in userAuth.js (routes/api) -- POST /register');
        res.status(400).json({ error });
    }        
});

module.exports = router;
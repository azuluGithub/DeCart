const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken'); //IS USED FOR CREATING UNIQUE, SECURE API-KEYS

/**
 * NB: THIS END POINT DOESN'T WORK SINCE DATA IS NOT SAVED
 */
router.post('/auth/signup', async (req, res) => {

    try {
        const { userName, email, password, cpassword } = req.body;

        //CHECKING EMPTY INPUTS
        if (!userName || !email || !password || !cpassword) {
            return res.status(400).json({ message: "Fill in all input fields" });
        }

        //PASSWORDS NOT MATCHING
        if (!password !== !cpassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        //SHORT PASSWORDS
        if (!password.length < 4) {
            return res.status(400).json({ message: "Passwords must be 4 or more characters long" });
        }

        //INVALID EMAIL
        let isEmailValid = false;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            isEmailValid = true;
        }
        if (!isEmailValid) {
            return res.status(400).json({message: "Please provide a valid email" });
        }

        res.status(201).json({ message: 'Your registration was successful. you can now login' });
    }
    catch(e) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * NB: USE THE GIVEN EMAIL AND PASSWORD TO LOG INTO THE APP
 * EMAIL:: test@gmail.com
 * PASSWORD:: TestAtGmailDotCom
 */
router.post('/auth/signin', async (req, res) => {
    try {

        const { email, password } = req.body;
        const user_id = 'sdfghjk765rdfghu7tfghutfb';

        //CHECKING FOR EMPTY INPUTS
        if (!email || !password) {
            return res.status(400).json({ message: 'Fill in all input fields'});
        }
        
        //USE THIS EMAIL
        if (email !== 'test@gmail.com') {
            return res.status(400).json({ message: 'Wrong credentials' });
        }

        //USE THIS PASSWORD
        if (password !== 'TestAtGmailDotCom') {
            return res.status(400).json({ message: 'Wrong credentials' });
        }

        //JWT IS USED FOR CREATING UNIQUE, API KEYS AND JWT_SECRET MAKES SECURE
        const apiKey = jwt.sign({ _id: user_id }, process.env.JWT_SECRET);

        //THIS API IS SENT TO CLIENT AND STORED ON THE BROWSER THEN VALIDATED EVERYTIME THE CLIENT MAKES A REQUEST
        res.status(200).json({ apiKey });
    }
    catch (e) {
        res.status(500).json({ message: 'Unable to log in' });
    }
})

module.exports = router;


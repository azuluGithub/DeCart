//packages
const express = require('express');
const router = new express.Router();

//local
const auth = require('../middleware/auth');
const { fakeProducts } = require('../fakeData'); //FOR TESTING PURPOSES

/**
 * # AUTH MIDDLEWARE VALIDATES AND VERIFIES THE API KEY
 * # THIS END POINT RETURNS ALL TEST PRODUCTS
 */
router.get("/products", auth, async (req, res) => {
    try {
        res.status(200).json({ products: fakeProducts });
    }
    catch (e) {
        res.status(400).json({ message: 'Unable to get data' });
    }
});

module.exports = router;
const express = require('express');
const router = new express.Router();
const randomstring = require('randomstring'); //FOR CREATING RANDOM ID

const auth = require('../middleware/auth');
const { fakeCart, fakeProducts } = require('../fakeData');

/**
 * #AUTH IS A MIDDLEWARE WHICH VALIDATES THE API-KEY FROM THE CLIENT
 * #EVERY END POINTS HAS AN AUTH MIDDLEWARE
 * #IF KEY IS NOT VALID, THE USER CANNOT ACCESS THE ROUTE
 * #THIS API KEY IS GENERATE BY JWT DURING SIGN-IN
 */


/**
 * #GET CART ENDPOINT: RETURNS CART WITH PRODUCTS [IS A READ OPERATION]
 * #IN CART, ONLY PRODUCT ID's ARE SAVED INSTEAD OF ACTUALLY PRODUCT
 * #THERE FOR TO POPULATE CART YOU NEED TO FIND THE ACTUALLY PRODUCT IN PRODUCTs
 */
router.get("/cart", auth, async (req, res) => {
    try {
        
        const productsInCart = fakeCart.map((cart) => {

            const found = fakeProducts.find((fp) => fp._id === cart.productId);

            return { ...cart, product: found }
        })

        res.status(200).json({ cart: productsInCart });
    }
    catch (e) {
        res.status(400).json({ message: 'Unable to get data' });
    }
});

/**
 * #ADD ENDPOINT: ADD NEW PRODUCT IN CART [IS A CREATE OPERATION]
 * #RANDOMSTRING IS USED FOR GENERATING ID's
 * #SINCE NO DATABASE OR TEXFILE IS USED, NEW ITEM HAS TO BE ADDED ON TOP OF OLD ARRAY THEN RETURN THE ENTIRE LIST
 */
router.post('/cart', auth, async (req, res) => {
    try {
        const cart_id = randomstring.generate();

        let newList = fakeCart;
        newList.unshift(
            {
                _id: cart_id,
                user_id: 'sdfghjk765rdfghu7tfghutfb',
                productId: req.body._id
            }
        )

        const productsInCart = newList.map((cart) => {
            const found = fakeProducts.find((fp) => fp._id === cart.productId);
            return { ...cart, product: found }
        })

        res.status(200).json({ cart: productsInCart });
    }
    catch(e) {
        res.status(500).json({ message: 'Server error' });
    }
})


/**NB: DELETE CHANGED TO POST INTENTIONALY INORDER TO SEND DATA FROM FRONT TO BACK*/
/**
 * #REMOVE CART ENDPOINT: DELETES SELECTED PRODUCT FROM CARD [IS A DELETE OPERATION]
 * #SINCE DATA IS NOT STORED, CART IS PASS FROM FRONT-END
 * #THE UNWANTED PRODUCT IS FILTERED
 * #PRODUCTS ARE POPULATED TO THE CART
 * #THE CART IS THEN SENT BACK TO CLIENT
 */
router.post('/cart/:cart_id', auth, async (req, res) => {
    try {
       
        const filterDeleted = req.body.filter((cart) => cart.productId !== req.params.cart_id);

        const productsInCart = filterDeleted.map((cart) => {
            const found = fakeProducts.find((fp) => fp._id !== cart.productId);
            return { ...cart, product: found }
        })

        res.status(200).json({ cart: productsInCart });
    }
    catch(e) {
        res.status(500).json({ message: 'Server error'});
    }
});

/**
 * NB: THIS END POINT IS NOT IMPLEMENTED DUE TO CHALLENGES IN UPDATING UNSAVE DATA
 * #PUT ENDPOINT: UPDATES CART ITEMS [IS A READ OPERATION]
 * #E.G COLOR, NUMBER OF PRODUCTS IN CART, ETC
 */
router.put("/cart", auth, async (req, res) => {

    try {
        res.status(200).json({ });
    }
    catch (e) {
        res.status(400).json({ message: 'Unable to update data' });
    }
});


module.exports = router;
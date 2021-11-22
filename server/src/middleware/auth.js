const jwt = require('jsonwebtoken');

//check if user has a valid apiKey
const auth = async (req, res, next) => {
    try {
        //get apiKey from request headers and verify
        const apiKey = req.headers.authorization.replace('Bearer ', '');
        
        if (!apiKey) {
            return res.status(401).json({ message: 'Not Authorized. Please authenticate.' });
        }
        
        const decode = jwt.verify(apiKey, process.env.JWT_SECRET);

        if (decode._id !== 'sdfghjk765rdfghu7tfghutfb') {
            return res.status(401).json({ message: 'Not Authorized. Please authenticate.' });
        }

        next();
    }
    catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = auth;
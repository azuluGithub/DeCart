//packages
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

/**NB: NOT CONNECTING TO MONGODB */
// database connection
// const connectDB = require('./db/mongoose');
// connectDB();

/**
 * MIDDLEWARE
 */
app.use(helmet());
app.use(morgan('tiny')); //dev, tiny
app.use(cors());
app.use(express.json());

/**
 * ROUTES
 */
const cartRouter = require('./routes/cart');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

app.use(cartRouter);
app.use(authRouter);
app.use(productRouter);

module.exports = app;
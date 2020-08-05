const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');   //optional
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({ path: './config/config.env' })

connectDB();

const orders = require('./routes/orders')

const app = express();

app.use(express.json());    //allows for use of body parser

app.use('/api/v1/orders', orders);

//Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('e-commerce/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'e-commerce', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
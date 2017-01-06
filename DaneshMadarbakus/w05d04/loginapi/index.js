// STEP-1 Set up the app - require all relevant packages
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// STEP-2 Evoke express and link to other relevant pages
const app = express();
const config = require('./config/config');
const router = require('./config/routes');

// STEP-3 Connect mongoose to the db url which will eventually hold our data
mongoose.connect(config.db);

// STEP-4 Set up all the middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

// STEP-5 Make the app your listen for the relevant port (3000)
app.listen(config.port, () => console.log(`Express started on port: ${config.port}`));

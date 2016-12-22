//Ask about how you would plan the setup of a website from the begining
//I completed it step by step but this also stopped me from testing it

//STEP-1 I have npm init'd and I have installed all relevant pacakages
//STEP-2 Require all relevant apps
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//STEP-3 Create the app
const app = express(); /* evoking express */
const port = process.env.PORT || 3000; /* assigning a url to use */
const databaseUrl = 'mongodb://localhost/tarantinooo'; /* Setting up the url for the mongo database */
//STEP-8A (see below for STEP-8) Require the routes.js file (This step can be done later or earlier)
const router = require('./config/routes'); /* This connects the app(main express index.js page) to the router.js file in the config folder. This file will set up the routes to all the different pages*/

//STEP-7 Connect to mongoose
mongoose.connect(databaseUrl, () => console.log(`connected to ${databaseUrl}`)); /* mongoose.connect is a built in function of mongoose that has been installed and required. The const databaseUrl has been set to a specific url which is what mongoose.connect is being connected to. Then we are console logging connected to the databaseUrl just to make sure it is working */

//STEP-6 Apply the settings
app.set('view engine', 'ejs'); /* This means that we can start using ejs in our language */
app.set('views', `${__dirname}/views`); /* This is only relevant because of some of the packages that we installed. it basically sets the foler 'views' to be the place that we pull files that we want to render out of.*/

//STEP-4 Test to see if the app is working in the Port
app.listen(port, () => console.log(`The app is working in port: ${port}`));

//STEP-5 Set up all relevant middleware
app.use(morgan('dev')); /* What does this do? */
app.use(bodyParser.urlencoded({ extended: true })); /* WDTD?*/
app.use(express.static(`${__dirname}/public`)); /*WDTD?*/
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
})); /* WDTD? I kind of understand it but its still a bit funny*/
app.use(ejsLayouts); /* Setting up the ejsLayouts middleware */
app.use(router); /* Setting the page up to use the router file */

//STEP-8 make all the relevant directories and files or as many as possible. For example: config, controllers, models, public, public/css, views, views/tarantinovids. routes.js, tarantinovidscontroller.js, tarantinovid.js, layout.ejs, home.ejs, edit.ejs, new.ejs, show.ejs, index.ejs.

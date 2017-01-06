// STEP-7 Set up the router. Require express and use its router.
const express = require('express');
const router = express.Router();

// STEP-8 Connect to the controllers for the authentications functions
const authentications = require('../controllers/authentications');

// STEP-19 Create the relevant routes connected to the controller
router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

//STEP-20 Export the router
module.exports = router;

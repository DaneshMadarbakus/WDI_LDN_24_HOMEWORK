const express = require('express');
const router  = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', (req, res) => {
  res.redirect(302, '/quotes');
});

router.route('/quotes')
.get(quoteController.index);

router.route('/quotes/new')
.get(quoteController.new);
.post(quoteController.create);

router.route('/quotes/canyoudoit')
.get(quoteController.canYouDoIt);

module.exports = router;

const express = require('express');
const router = express.Router();

const lolplays = require('../controllers/lolplays');

router.route('/').get((req, res) => res.render('home'));

router.route('/lolplays')
  .get(lolplays.index)
  .post(lolplays.create);
router.route('/lolplays/new')
  .get(lolplays.new);
router.route('/lolplays/:id')
  .get(lolplays.show);

module.exports = router;

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  return res.render('home', {title: 'Homepage of my website.'});
});
router.get('/about', (req, res) => {
  return res.render('about', {title: 'About page of my website.'});
});
router.get('/contact', (req, res) => {
  return res.render('contact', {title: 'Contact page of my website.'});
});
router.get('/besttherewas', (req, res) => {
  return res.render('besttherewas', {title: 'Contact page of my website.'});
});
router.get('/bestthereis', (req, res) => {
  return res.render('bestthereis', {title: 'Contact page of my website.'});
});
router.get('/besttherewillbe', (req, res) => {
  return res.render('besttherewillbe', {title: 'Contact page of my website.'});
});


module.exports = router;

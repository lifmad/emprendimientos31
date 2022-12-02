const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact', { title: 'Contact-us' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About-us' });
});

router.get('/catalogue', function(req, res, next) {
  res.render('catalogue', { title: 'Catalogue' });
});


module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact', { title: 'Contact-us' });
});


module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/finance', function(req, res, next) {
    res.render('finanzas', { title: 'Express' });
});
  
router.get('/', function(req, res, next) {
    res.render('capacitaciones', { title: 'Express' });
});
  
router.get('/guia-register', function(req, res, next) {
    res.render('c_registrar', { title: 'Express' });
});
  
router.get('/marketing', function(req, res, next) {
    res.render('marketing', { title: 'Express' });
});

router.get('/tips', function(req, res, next) {
    res.render('tips', { title: 'Express' });
});

module.exports = router
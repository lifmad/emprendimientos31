const express = require('express');
const router = express.Router();

router.get('/finance', function(req, res, next) {
    res.render('finanzas', { title: 'Finanzas' });
});
  
router.get('/', function(req, res, next) {
    res.render('capacitaciones', { title: 'Capacitaciones' });
});
  
router.get('/guia-register', function(req, res, next) {
    res.render('c_registrar', { title: 'Gui de registro' });
});
  
router.get('/marketing', function(req, res, next) {
    res.render('marketing', { title: 'Marketing' });
});

router.get('/tips', function(req, res, next) {
    res.render('tips', { title: 'Tips' });
});

module.exports = router
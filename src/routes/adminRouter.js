const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');

/*    GET - Index      */
router.get('/', adminController.index)



module.exports = router;
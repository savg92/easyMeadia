var express = require('express');
var router = express.Router();

const controller = require('../controllers/login');

router.post('/', controller.login);
router.get('/', controller.logout);

module.exports = router;

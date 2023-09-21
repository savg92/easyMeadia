var express = require('express');
var router = express.Router();

const controller = require('../controllers/register');

router.post('/', controller.createUser);

module.exports = router;
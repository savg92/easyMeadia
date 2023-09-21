var express = require('express');
var router = express.Router();

const controller = require('../controllers/user');

// router.post('/', controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;

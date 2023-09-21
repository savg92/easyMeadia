var express = require('express');
var router = express.Router();

const controller = require('../controllers/message');

router.post('/', controller.createMessage);
router.get('/', controller.getAllMessages);
router.get('/:userId', controller.getAllMessagesByUser);
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);

module.exports = router;

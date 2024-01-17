var express = require('express');
var router = express.Router();

// import  auth controllers
const controller = require('../controllers/auth');

// /* GET home page. */
// router.get('/a', function(req, res, next) {
//   // res.cookie('name', 'express');
//   res.send('This is root!')
// });

router.post('/login', controller.loginUsers);
router.post('/register', controller.createUser);
router.delete('/logout', controller.logOut);

module.exports = router;

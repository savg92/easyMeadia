var express = require('express');
var router = express.Router();
// const router = require('express').Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));
// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));


/**
 * @swagger
 * /:
 * 
 * 
*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

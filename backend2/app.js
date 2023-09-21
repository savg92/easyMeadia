/* requierd modules */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

// const jwt = require('jsonwebtoken');
// import swaggerUI from 'swagger-ui-express';
// import objConfigSwagger from './docs/index';
var swaggerUI = require('swagger-ui-express');
var objConfigSwagger = require('./docs/index');

const { expressjwt: jwt } = require('express-jwt');

const { HOST_PORT, APP_KEY } = process.env;

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var usersRouter = require('./routes/users');
var messagesRouter = require('./routes/messages');

var app = express();

/*set up protected routes using express-jwt*/
app.use(
	jwt({ secret:`${APP_KEY}`, algorithms: ['HS256'] }).unless({
		path: ['/docs', '/api/login', '/api/register'],
	})
);

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* Middlewares */
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(objConfigSwagger));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

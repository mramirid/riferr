var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Add Router here
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin');
var profileRouter = require('./routes/profile');
var registrasiRouter = require('./routes/registrasi_buyer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add Router here
app.use('/', indexRouter);
app.use('/admin', loginRouter);
app.use('/dashboard',profileRouter);
app.use('/products', require('./routes/products'));
app.use('/registrasi_buyer', registrasiRouter);

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

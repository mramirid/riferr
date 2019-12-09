// get library or file ?
// const mysqlConnection = require('./app/db_config');
// const createError = require('http-errors');

// Middleware
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');

// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// Pasang port
const PORT = process.env.PORT || 3000;

// Import models folder
var db = require('./models');

// Buat app express lalu konfigurasi middleware yang diperlukan untuk autentifikasi
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Penggunaan session untuk men-track status auth user
app.use(session({secret: "FP PemWeb", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Router
// const indexRouter = require('./routes');
// const loginRouter = require('./routes/admin');
// const profileRouter = require('./routes/profile');
// const registrasiRouter = require('./routes/registrasi_buyer');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(mysqlConnection());
// app.use(logger('dev'));
// app.use(cookieParser());

// Add Router here
require('./routes/auth')(app);
// app.use('/', indexRouter);
// app.use('/admin', loginRouter);
// app.use('/dashboard',profileRouter);
// app.use('/products', require('./routes/products'));
// app.use('/registrasi_buyer', registrasiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('===> Listening on PORT %s. Visit http://localhost:%s/', PORT, PORT);
    });
});

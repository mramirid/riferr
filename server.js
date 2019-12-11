const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const path = require('path');
const app = express();
const db = require('./models');

// Konfigurasi awal express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurasi express agar bisa menangani authentifikasi
app.use(session({secret: "FP PemWeb", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Konfigurasi express agar bisa render view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Konfigurasi routing
require('./routes/homepage')(app);
require('./routes/login')(app);
require('./routes/signup')(app);
require('./routes/profile')(app);

// Pasang port
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('===> Listening on PORT %s. Visit http://localhost:%s/', PORT, PORT);
    });
});
// Passport JS untuk autentifikasi
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Perlu models folder untuk check passport lagi
const db = require('../models');

// Memberitahu passport kita ingin menggunakan LocalStrategy
// Kita ingin login menggunakan email & password
passport.use(new LocalStrategy({
    // Login menggunakan email
    usernameField: 'user_email'
}, function (user_email, password, done) {
    db.User.findOne({
        where: {user_email: user_email}
    }).then(function (dbUser) {
        // Jika email tidak terdaftar
        if (!dbUser) {
            return done(null, false, {
                message: 'Email tidak terdaftar'
            });
        }
        // Jika email terdaftar & password salah
        else if (!dbUser.validPassword(passport)) {
            return done(null, false, {
                message: 'Password salah'
            });
        }

        return done(null, dbUser);
    });
}));

// Entah ini buat apa :v
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;
const passport = require('../config/passport');

module.exports = function (app) {
    // Jika user sudah login, kirim langsung ke dashboard user
    app.post('/login/login-now', passport.authenticate('local'), function (req, res) {
        res.json('/profile');
    });

    app.get('/login', function (req, res) {
        // Jika user sudah login, redirect ke homepage
        if (req.user){
        	res.redirect('/');
        }else{ 
        // Jika user belum login
        	res.render('login/login-page');
        }
    });
};
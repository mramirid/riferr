const path = require('path');

// Untuk mengecek apakah user sudah login
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/login', function (req, res, next) {
        // Jika user sudah login, redirect ke homepage
        if (req.user){
        	res.redirect('/');
        }else{ 
        // Jika user belum login
        	res.render('login/login_page');
        }
    });
};
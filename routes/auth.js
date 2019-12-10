const path = require('path');

// Untuk mengecek apakah user sudah auth
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    app.get('/auth', function (req, res) {
        // Jika user sudah login, redirect ke homepage
        if (req.user) res.redirect('/');
        // Jika user belum login
        res.render('auth/login');
    });
};
const path = require('path');

// Untuk mengecek apakah user sudah auth
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
    // Jika user sudah punya akun, redirect ke homepage
    app.get('/', function (req, res) {
        if (req.user) {
            res.redirect('/homepage');
        }
        res.sendFile(path.join(__dirname, '../public/'))
    });
};
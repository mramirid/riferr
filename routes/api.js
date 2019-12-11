const db = require('../models');
const passport = require('../config/passport');

module.exports = function (app) {
    // Jika user sudah login, kirim langsung ke dashboard user
    app.post('/api/login', passport.authenticate('local'), function (req, res) {
        res.json('profile');
    });

    // Route untuk mendaftarkan user. Jika sukses, loginkan user
    app.post('/api/signup', function (req, res) {
        db.User.create({
            user_email: req.body.user_email,
            user_phone: req.body.user_phone,
            user_address: req.body.user_address,
            user_password: req.body.user_password,
            user_name: "name",
            user_role: req.body.user_role
        }).then(function () {
            res.redirect(307, 'login');
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });

    // Route untuk mendapatkan data user
    app.get('/api/user-data', function (req, res) {
        // Jika user belum login, kembalikan objek kosong
        if (!req.user) {
            res.json({});
        } else {
            // Jika sudah login, kirimkan email dan id user
            res.json({
                email: req.user.user_email,
                user_email: req.user.user_email
            });
        }
    });
};
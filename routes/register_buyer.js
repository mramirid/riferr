var express = require('express');
var router = express.Router();

module.exports = function (app) {

    // Register page
    app.get('/register_buyer', function (req, res) {
        res.render('register/buyer');
    });

    app.post('/auth', function (req, res) {
        res.redirect('/auth');
    });
};

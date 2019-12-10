module.exports = function (app) {
    // Register seller page
    app.get('/register_buyer', function (req, res) {
        res.render('register/buyer');
    });
};

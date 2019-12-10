module.exports = function (app) {
    // Register seller page
    app.get('/register_seller', function (req, res) {
        res.render('register/seller');
    });
};

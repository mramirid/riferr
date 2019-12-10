module.exports = function (app) {
    // Register buyer page
    app.get('/register_buyer', function (req, res) {
        res.render('register/buyer');
    });
};

module.exports = function (app) {
    // Register seller page
    app.get('/register/:role', function (req, res) {
        res.render('register/buyer', {role: req.params.role});
    });
};

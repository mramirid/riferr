// Middleware ini untuk mencegah user memasuki route yang dilarang ketika tidak login
module.exports = function (req, res, next) {
    // Jika user login, maka perbolehkan
    if (req.user) return next();
    // Jika user belum login
    return res.redirect('/');
};
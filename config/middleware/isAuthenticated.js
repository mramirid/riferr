// Middleware ini untuk mencegah user memasuki route yang dilarang ketika tidak auth
module.exports = function (req, res, next) {
    // Jika user auth, maka perbolehkan
    if (req.user) return next();
    // Jika user belum auth
    return res.redirect('/');
};
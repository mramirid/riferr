// Middleware ini untuk mencegah user memasuki route yang dilarang ketika tidak login
module.exports = function (req, res, next) {
    // Jika user login, maka perbolehkan
    if (req.user) return ;
    // Jika user belum login
    return res.redirect('/login');
};
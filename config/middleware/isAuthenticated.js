// Middleware ini untuk mencegah user memasuki route yang dilarang ketika tidak login
module.exports = (req, res) => {
  // Jika user login, maka perbolehkan
  if (req.user) return;
  // Jika user belum login
  res.redirect('/login');
};

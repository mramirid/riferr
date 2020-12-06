const passport = require('../config/passport');

module.exports = (app) => {
  // Jika user sudah login, kirim langsung ke dashboard user
  app.post('/login/login-now', passport.authenticate('local'), (req, res) => {
    res.json('/profile');
    // res.json('/profile/buyer')
  });

  app.get('/login', (req, res) => {
    // Jika user sudah login, redirect ke homepage
    if (req.user) {
      res.redirect('/products/all');
    } else {
      // Jika user belum login
      res.render('login/login-page');
    }
  });
};

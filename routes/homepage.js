module.exports = (app) => {
  /* GET home page. */
  app.get('/', (req, res) => {
    res.render('homepage/homepage', { sessions: req.user, page: 'Home', menuId: 'home' });
  });
};

const db = require('../models');

module.exports = (app) => {
  app.get('/products/all', (req, res) => {
    db.User.findAll({
      include: [{
        model: db.Service,
      }],
    }).then((dbUser) => {
      const resObj = dbUser.map((user) => ({
        user_id: user.user_id,
        user_email: user.user_email,
        user_name: user.user_name,
        user_phone: user.user_phone,
        user_address: user.user_address,
        user_avatar: user.user_avatar,
        user_role: user.user_role,
        Services: user.Services.map((service) => ({
          service_id: service.service_id,
          ID_category: service.ID_category,
          user_id: service.user_id,
          service_title: service.service_title,
          service_desc: service.service_desc,
          service_price: service.service_price,
          image_path: service.image_path,
        })),
      }));
      res.render('products/list-products', {
        sessions: req.user, page: 'list', menuId: 'home', data: resObj,
      });
    });
  });

  app.get('/products/:categories', (req, res) => {
    db.User.findAll({
      include: [{
        model: db.Service,
        where: { ID_category: req.params.categories },
      }],
    }).then((dbUser) => {
      const resObj = dbUser.map((user) => ({
        user_id: user.user_id,
        user_email: user.user_email,
        user_name: user.user_name,
        user_phone: user.user_phone,
        user_address: user.user_address,
        user_avatar: user.user_avatar,
        user_role: user.user_role,
        Services: user.Services.map((service) => ({
          service_id: service.service_id,
          ID_category: service.ID_category,
          user_id: service.user_id,
          service_title: service.service_title,
          service_desc: service.service_desc,
          service_price: service.service_price,
          image_path: service.image_path,
        })),
      }));
      res.render('products/list-products', {
        sessions: req.user, page: 'list', menuId: 'home', data: resObj,
      });
    });
  });

  app.get('/products/details/:servicesid', (req, res) => {
    db.User.findAll({
      include: [{
        model: db.Service,
        where: { service_id: req.params.servicesid },
      }],
    }).then((dbUser) => {
      const resObj = dbUser.map((user) => ({
        user_id: user.user_id,
        user_email: user.user_email,
        user_name: user.user_name,
        user_phone: user.user_phone,
        user_address: user.user_address,
        user_avatar: user.user_avatar,
        user_role: user.user_role,
        Services: user.Services.map((service) => ({
          service_id: service.service_id,
          ID_category: service.ID_category,
          user_id: service.user_id,
          service_title: service.service_title,
          service_desc: service.service_desc,
          service_price: service.service_price,
          image_path: service.image_path,
        })),
      }));
      res.render('products/detail-products', {
        page: 'list', menuId: 'home', data: resObj, user: req.user.user_id, sessions: req.user,
      });
      // res.json(resObj)
    });
  });

  app.post('/products/transaction', (req, res) => {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    db.Transaction.create({
      user_id: req.body.user_id,
      service_id: req.body.service_id,
      transaction_req: req.body.req,
      transaction_datetime: `${date} ${time}`,
    }).then(() => {
      res.redirect('/profile');
    }).catch((err) => {
      res.json(err);
    });
  });

  app.get('/products/delete/:transaction_id', (req, res) => {
    db.Transaction.destroy({
      where: { transaction_id: req.params.transaction_id },
    }).then(() => {
      res.redirect('/profile');
    });
  });
};

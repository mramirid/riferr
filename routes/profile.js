const multer = require('multer');
const db = require('../models');

// Untuk operasi upload file
const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, 'public/uploads/avatars/');
  },
  filename(_req, file, cb) {
    cb(null, `${file.fieldname + Date.now()}.jpg`);
  },
});

const storage1 = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, 'public/uploads/services/');
  },
  filename(_req, file, cb) {
    cb(null, `${file.fieldname + Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
const addPro = multer({ storage: storage1 });

module.exports = (app) => {
  app.get('/profile', (req, res) => {
    if (req.user.user_role !== 2) {
      db.User.findAll({
        where: { user_email: req.user.user_email },
        include: [{
          model: db.Service,
          include: [{
            model: db.Transaction,
          }],
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
            Transactions: service.Transactions.map((transaction) => ({
              transaction_id: transaction.transaction_id,
              service_id: transaction.service_id,
              user_id: transaction.user_id,
              transaction_req: transaction.transaction_req,
              transaction_datetime: transaction.transaction_datetime,
            })),
          })),
        }));

        db.Category.findAll().then((dbCategory) => {
          const categories = dbCategory.map((cat) => ({
            ID_category: cat.ID_category,
            category: cat.category,
          }));

          if (resObj && categories) res.render('profile/profile-page', { data: resObj, categories });
          //     res.json(resObj)
        });
      });
    } else {
      db.Transaction.findAll({
        where: { user_id: req.user.user_id },
        include: [{
          model: db.Service,
          attributes: ['service_title', 'service_price', 'service_id'],
          include: [{
            model: db.User, attributes: ['user_name'],
          }],
        }],
      }).then((dbTransaction) => {
        res.render('profile/profile-page', { data: [req.user], transact: dbTransaction });
        // res.json(dbTransaction)
      });
    }
  });

  // Route untuk me-logout user
  app.get('/profile/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Route untuk redirect ke halaman settings profile
  app.get('/profile/settings-page', (req, res) => {
    db.User.findOne({
      where: { user_id: req.user.user_id },
    }).then((dbUser) => {
      res.render('profile/settings-page', {
        name: dbUser.user_name,
        phone: dbUser.user_phone,
        address: dbUser.user_address,
        email: dbUser.user_email,
        avatar: dbUser.user_avatar,
      });
    });
  });

  // Route untuk update data
  app.post('/profile/settings/update-now', upload.single('avatarFile'), (req, res, next) => {
    const filename = !req.file ? 'default_avatar.jpg' : req.file.filename;

    const newData = {
      user_name: req.body.name,
      user_phone: req.body.phone,
      user_address: req.body.address,
      user_avatar: filename,
    };

    db.User.update(newData, { where: { user_id: req.user.user_id } })
      .then(() => {
        req.login(req.user, (err) => {
          if (err) {
            next(new Error('Gagal update'));
          }
        });
        res.redirect('/profile/settings-page');
      });
  });

  // Route untuk tambah service
  app.post('/profile/add-product', addPro.single('photo'), (req, res) => {
    db.Service.create({
      ID_category: req.body.category,
      user_id: req.user.user_id,
      service_title: req.body.title,
      service_desc: req.body.desc,
      service_price: req.body.price,
      image_path: req.file.filename,
    })
      .then(() => {
        res.redirect('/profile');
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Route untuk melihat list transaksi dari seller
  app.get('/profile/seller/transactions', (req, res) => {
    db.Transaction.findAll({
      include: [
        {
          model: db.Service,
          attributes: ['service_title', 'service_price', 'user_id', 'service_id'],
          where: { user_id: req.user.user_id },
        },
        {
          model: db.User, attribute: ['user_name'],
        },
      ],
    }).then((dbTransaction) => {
      res.render('profile/seller-transactions-page', {
        data: [req.user],
        transact: dbTransaction,
      });
    });
  });
};

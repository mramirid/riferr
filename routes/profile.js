const path = require("path");
const db = require("../models");

// Untuk operasi upload file
const uuidv1 = require('uuid/v1');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/avatars/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + '.jpg')
    }
});
const upload = multer({storage: storage});

module.exports = function (app) {
    app.get('/profile', function (req, res) {
        db.User.findAll({
            where: {user_email: req.user.user_email},
            include: [{
                model: db.Service
            }]
        }).then(function (dbUser) {
            const resObj = dbUser.map(user => {

                return Object.assign({}, {
                    user_id: user.user_id,
                    user_email: user.user_email,
                    user_name: user.user_name,
                    user_phone: user.user_phone,
                    user_address: user.user_address,
                    user_role: user.user_role,
                    Services: user.Services.map(service => {

                        return Object.assign({}, {
                            service_id: service.service_id,
                            ID_category: service.ID_category,
                            user_id: service.user_id,
                            service_title: service.service_title,
                            service_desc: service.service_desc,
                            service_price: service.service_price,
                            image_path: service.image_path
                        });
                    })
                })
            });

            if (resObj) {
                res.render("profile/seller", {data: resObj})
                // res.json(resObj);
            }
        })
    });

    app.get('/profile/settings', function (req, res) {
        res.render('profile/settings')
    });

    app.post('/profile/settings/update', upload.single('avatarFile'), function (req, res) {
        
        const newData = {
            user_name: req.body.name,
            user_phone: req.body.phone,
            user_address: req.body.address
        };
        db.User.update(newData, {where: {user_id: req.user.user_id}}).then(updated=>{
            console.log(updated)
            res.json(updated)
        })
        
    })
};

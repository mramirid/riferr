const connection = require('../config/db_config');
const db = require("../models");

module.exports = function (app) {

	app.get('/products/all',function(req,res){
		db.User.findAll({
            include: [{
				model: db.Service,
            }]
        }).then(function (dbUser) {
            const resObj = dbUser.map(user => {

                return Object.assign({}, {
                    user_id: user.user_id,
                    user_email: user.user_email,
                    user_name: user.user_name,
                    user_phone: user.user_phone,
					user_address: user.user_address,
					user_avatar:user.user_avatar,
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
			res.render('products/list-products',{page:'list',menuId:'home',data: resObj})
		});
	})

	app.get('/products/:categories', function (req, res, next) {
		
		db.User.findAll({
            include: [{
				model: db.Service,
				where:{ID_category: req.params.categories}
            }]
        }).then(function (dbUser) {
            const resObj = dbUser.map(user => {

                return Object.assign({}, {
                    user_id: user.user_id,
                    user_email: user.user_email,
                    user_name: user.user_name,
                    user_phone: user.user_phone,
					user_address: user.user_address,
					user_avatar:user.user_avatar,
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
			res.render('products/list-products',{page:'list',menuId:'home',data: resObj})
		});

    });

	app.get('/products/details/:servicesid', function (req, res, next) {
		db.User.findAll({
            include: [{
				model: db.Service,
				where:{ID_category: req.params.servicesid}
            }]
        }).then(function (dbUser) {
            const resObj = dbUser.map(user => {

                return Object.assign({}, {
                    user_id: user.user_id,
                    user_email: user.user_email,
                    user_name: user.user_name,
                    user_phone: user.user_phone,
					user_address: user.user_address,
					user_avatar:user.user_avatar,
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
			res.render('products/detail-products',{page:'list',menuId:'home',data: resObj, user:req.user.user_id })
		});
	});

	app.post('/products/transaction', function(req,res){
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		db.Transaction.create({
			user_id: req.body.user_id,
			service_id:req.body.service_id,
			transaction_req:req.body.req,
			transaction_datetime: date+' '+time
		}).then(function(){
			res.redirect(307,'/login/login-now');
		}).catch(err=>{
			console.log(err)
			res.json(err)
		})
	})
}
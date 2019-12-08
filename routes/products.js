var express = require('express');
var router = express.Router();
const connection = require('../dbConfig');

router.get('/nice', function (req,res,next) {
	res.render('products/detail-order');
});

router.get('/check/:data', function (req,res,next) {
	res.render('products/checkout',{data:req.params.data});
});

router.get('/:categories', function(req, res, next){
	var query = "SELECT services.*, seller.sellernickname from services join seller on services.SELLERID = seller.SELLERID and CATID = ?";
	connection.query(query,[req.params.categories], function(err, rows, fields){

		if(!err){
			res.render('products/list-products', {
				page:'list-products',
				menuId:'list-products',
				data:rows
			});
		}else{
			res.send('query error');
			res.end();
		}

	});

	connection.on('error', function(err){
		res.send("connection error");
		res.end();
		return;
	});

});

router.get('/details/:servicesid',function(req,res,next){
	res.render('products/detail-products',{page:'details',menuId:'home'});
});

module.exports = router;

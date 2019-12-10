var express = require('express');
var router = express.Router();
const connection = require('../dbConfig');

router.get('/details/request', function (req,res,next) {
	res.render('products/request');
});

router.post('/details/insert',function(req, res,next){
	var req = req.body.req;
	var today = new Date();
	var date = today.getFullYear()+ '-' + (today.getMonth()+1) + '-' +today.getDate();
	var query = "insert into `transactions` (`TRANSID`, `SERVICEID`, `BUYERID`, `TRANSDATE`) VALUES ('2','2','2','"+date+"')";

	connection.on('error', function(err){
		res.send("connection error");
		res.end();
		return;
	});

	connection.query(query,function(err){
		if(!err){
			res.redirect('/');
		}else{
			res.end('query error');
		}
	});
});

router.get('/check/:data', function (req,res,next) {
	res.render('products/checkout',{data:req.params.data});
});

router.get('/all',function(req,res,next){
	var query = "SELECT services.*, seller.sellernickname from services join seller on services.SELLERID = seller.SELLERID";

	connection.query(query, function(err, rows, fields){

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
})

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
	connection.on('error',function(err){
		res.end('connection error');
		return;
	})

	var query = "SELECT services.*, seller.sellernickname from services join seller on services.SELLERID = seller.SELLERID and SERVICEID = ?";
	connection.query(query,[req.params.servicesid],function(err, rows, fields){
		if(!err){
			res.render('products/detail-products',{
				page:'details',
				menuId:'home',
				data:rows
			});
		}else{
			res.end('query error');
		}
	});
});

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require('../dbConfig');


router.get('/:categories', function(req, res, next){
	
	connection.query('SELECT * FROM accounts', function(err, rows, fields){

		if(!err){
			res.render('products/list-products', {
				page:'list-products',
				menuId:'list-products',
				categories:req.params.categories,
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

module.exports = router;

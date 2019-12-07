var express = require('express');
const connection = require('../dbConfig');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login/loginForm');
});

router.post('/auth', function(request, response) {
	var username = request.body.u_adm;
	var password = request.body.p_adm;
	if (username && password) {
		a = connection.query('SELECT * FROM seller WHERE nama_seller = ? AND psswrd_seller = ?', [username, password], function(error, results, fields){
			if (results.length > 0) {
				// response.send('nyoba');
				response.redirect('/dashboard');
			}else{
				b = connection.query('SELECT * FROM buyer WHERE nama_buyer = ? AND psswrd_buyer = ?', [username, password], function(error, results, fields) {
					if( results.length > 0){
						response.send('AAAA');
					}else{
						response.send('pwd / email salah');
					}
				});
			}		
			response.end();
		});
	
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;

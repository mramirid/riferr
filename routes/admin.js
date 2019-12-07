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
<<<<<<< HEAD
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
=======
		connection.query('SELECT * FROM seller WHERE sellernickname = ? AND sellerpassword = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				// response.send('nyoba');
				response.redirect('/dashboard');
			} else {
				// response.send('Incorrect Username and/or Password!');
				connection.query('SELECT * FROM buyer WHERE buyernickname = ? AND buyerpassword = ?', [username, password], function(error, results, fields){
					if(results.length > 0){
						response.send('login as buyer');
						response.end();
					}else{
						response.send('aoisndn')
						response.end();
					}
				});
			}
>>>>>>> f8f01441a80ec44ffd003a899473f0aed15074e5
		});
	
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;

var express = require('express');
const connection = require('../dbConfig');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login/loginForm');
});

router.post('/login', function(request, response) {
	var username = request.body.u_adm;
	var password = request.body.p_adm;
	if (username && password) {
		connection.query('SELECT * FROM seller WHERE sellernickname = ? AND sellerpassword = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				// response.send('nyoba');
				response.redirect('/dashboard');
			} else {
				
				connection.query('SELECT * FROM buyer WHERE buyernickname = ? AND buyerpassword = ?', [username, password], function(error, results, fields){
					if(results.length > 0){
						response.send('login as buyer');
						response.end();
					}else{
						response.send('Incorrect Username and/or Password!');
						response.end();
					}
				});
			}
		});
	
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;

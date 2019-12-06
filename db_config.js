var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

db.connect(function(err) {
    if (err){
    	console.log('a');
    }else{
    	console.log("Connected!");
	}
});
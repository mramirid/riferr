var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'addawdawd'
});

connection.connect(function(err) {
    if (err) {
        console.log('Koneksi database gagal');
        return;
    }
    console.log('Koneksi sukses');
});

module.exports = connection;
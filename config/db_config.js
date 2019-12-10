const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'riferr'
});

connection.connect(function(err) {
    if (err) {
        console.log('Koneksi database gagal');
        return;
    }
    console.log('Koneksi sukses');
});

module.exports = connection;
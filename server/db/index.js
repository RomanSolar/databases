var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


// SEQUELIZE

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {host: 'localhost', dialect: 'mysql', dialectOptions: {
  socketPath: '/var/run/mysqld/mysqld.sock'
}, });
//console.log(db);
var prom = db.authenticate();
prom.catch((error) => { console.log('authenticate error: ' + error); });

var prom2 = db.sync();
prom2.catch((error) => { console.log('sync error: ' + error); });

module.exports = db;


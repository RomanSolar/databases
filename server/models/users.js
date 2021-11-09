var db = require('../db');
const { Sequelize, DataTypes, Model } = require('sequelize');



// // var User = db.define('User', {
// //   id: Sequelize.INTEGER,
// //   username: Sequelize.STRING,
// // });

class User extends Model {}

User.init({
  // Model attributes are defined here
  userid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
  timestamps: false,
  sequelize: db, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});



module.exports = {
  findAll: function (obj) {return User.findAll(obj); },
  create: function (obj) { return User.create(obj); },
  user: User
};
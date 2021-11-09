var db = require('../db/index.js');
const { Sequelize, DataTypes, Model } = require('sequelize');
var exported = require('./users');

class message extends Model {}

message.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: exported.user,
      key: 'userid'
    }
  },
  roomname: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  // Other model options go here
  timestamps: false,
  sequelize: db, // We need to pass the connection instance
  modelName: 'Message' // We need to choose the model name
});

// the defined model is the class itself
// console.log(Message === db.models.Message); // true



module.exports = {
  getAll: function () { return message.findAll(); }, // a function which produces all the messages, returns promise
  create: function (obj) {
    return message.create(obj);
  } // a function which can be used to insert a message into the database, returns promise
};



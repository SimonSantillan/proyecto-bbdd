
const Sequelize = require('sequelize');

const sequelize = new Sequelize('proyecto_ale', 'root', '', {
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;
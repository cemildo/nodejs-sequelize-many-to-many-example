const Sequelize = require('sequelize');

const init = () => {
  const connection = new Sequelize(
    'db_school', 'root', `${process.env.MYSQL_PASSWORD}`, {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
  });
  connection.sync({force: true});
  return connection;
}

module.exports = { init };

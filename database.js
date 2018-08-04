const Sequelize = require('sequelize');
const { db } = require('./config');

const init = () => {
  
  const connection = new Sequelize(
    db.name, 
    db.user, 
    db.password,  
    db.connection.params);

  connection.sync(db.sync.params);
  return connection;
}

module.exports = { init };

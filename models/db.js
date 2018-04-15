const Sequelize = require('sequelize')
const db = new Sequelize('TodoList', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

db
  .authenticate()
  .then(() => {

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db

const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const basename = path.basename(__filename);
const db = {};

// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`)[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Service.belongsTo(db.Category, { foreignKey: 'ID_category' });
db.Category.hasMany(db.Service, { foreignKey: 'ID_category' });
db.Transaction.belongsTo(db.Service, { foreignKey: 'service_id' });
db.Service.hasMany(db.Transaction, { foreignKey: 'service_id' });
db.Transaction.belongsTo(db.User, { foreignKey: 'user_id' });
db.User.hasMany(db.Transaction, { foreignKey: 'user_id' });
db.Service.belongsTo(db.User, { foreignKey: 'user_id' });
db.User.hasMany(db.Service, { foreignKey: 'user_id' });

module.exports = db;

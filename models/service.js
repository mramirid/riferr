// Service model
module.exports = (sequelize, DataTypes) => sequelize.define('Service', {
  service_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  ID_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  service_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Category', {
    ID_category: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

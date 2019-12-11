module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Category", {
        ID_category: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};
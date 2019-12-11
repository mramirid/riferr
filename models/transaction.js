// Transaction model
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Transaction', {
        transaction_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction_req: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_file:{
            type: DataTypes.STRING,
            allowNull: true
        },
        transaction_datetime: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};
// Transaction model
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Transaction', {
        transaction_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: true
        },
        service_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_req: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_datetime: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};
// tokens.js

const {DataTypes} = require('sequelize');
const pgLib = require('../lib/pg.lib');

const trades = pgLib.connect().define('trades', {
    maker: {
        type: DataTypes.STRING, allowNull: false
    }, pairAddress: {
        type: DataTypes.STRING, allowNull: false
    }, platform: {
        type: DataTypes.STRING, allowNull: false
    }, baseToken: {
        type: DataTypes.STRING, allowNull: false
    }, quoteToken: {
        type: DataTypes.STRING, allowNull: false
    }, baseTotalAmount: {
        type: DataTypes.FLOAT, allowNull: false
    }, quoteTotalAmount: {
        type: DataTypes.FLOAT, allowNull: false
    }, type: {
        type: DataTypes.STRING, allowNull: false
    }, amountInUsd: {
        type: DataTypes.FLOAT, allowNull: false
    }, amountInSol: {
        type: DataTypes.FLOAT, allowNull: false
    },

    // Token.associate = (models) => {
    //     Token.belongsTo(models., {
    //         foreignKey: 'userId',
    //         as: 'user',
    //         onDelete: 'CASCADE',
    //     });
    // })

}, {
    timestamps: false
});

module.exports = trades;

// tokens.js

const {DataTypes} = require('sequelize');
const pgLib = require('../lib/pg.lib');

const price = pgLib.connect().define('price', {
    address: {
        type: DataTypes.STRING, allowNull: false, primaryKey: true
    }, priceInSol: {
        type: DataTypes.FLOAT, allowNull: false
    }, priceInUsd: {
        type: DataTypes.FLOAT, allowNull: false
    },

    // pool.associate = (models) => {
    //     pool.belongsTo(models., {
    //         foreignKey: 'userId',
    //         as: 'user',
    //         onDelete: 'CASCADE',
    //     });
    // })

}, {
    timestamps: true
});

module.exports = price;

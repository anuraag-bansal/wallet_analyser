// tokens.js

const {DataTypes} = require('sequelize');
const pgLib = require('../lib/pg.lib');

const pools = pgLib.connect().define('pools', {
    address: {
        type: DataTypes.STRING, allowNull: false, primaryKey: true
    }, platform: {
        type: DataTypes.STRING, allowNull: false
    }, token0: {
        type: DataTypes.STRING, allowNull: false
    }, token1: {
        type: DataTypes.STRING, allowNull: false
    },

    // pool.associate = (models) => {
    //     pool.belongsTo(models., {
    //         foreignKey: 'userId',
    //         as: 'user',
    //         onDelete: 'CASCADE',
    //     });
    // })

}, {
    timestamps: false
});

module.exports = pools;

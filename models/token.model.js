// tokens.js

const {DataTypes} = require('sequelize');
const pgLib = require('../lib/pg.lib');

const tokens = pgLib.connect().define('tokens', {
    mint: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // Token.associate = (models) => {
    //     Token.belongsTo(models., {
    //         foreignKey: 'userId',
    //         as: 'user',
    //         onDelete: 'CASCADE',
    //     });
    // })

},{
    timestamps: false
});

module.exports = tokens;

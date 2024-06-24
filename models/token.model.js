// tokens.js

const {DataTypes} = require('sequelize');
const pgLib = require('../lib/pg.lib');

const tokens = pgLib.connect().define('tokens', {
    mint: {
        type: DataTypes.STRING, allowNull: false, primaryKey: true
    }, symbol: {
        type: DataTypes.STRING, allowNull: false
    }, name: {
        type: DataTypes.STRING, allowNull: false
    }, logo: {
        type: DataTypes.STRING, allowNull: false
    }, twitterLink: {
        type: DataTypes.STRING, allowNull: false
    }, telegramLink: {
        type: DataTypes.STRING, allowNull: false
    }, websiteLink: {
        type: DataTypes.STRING, allowNull: false
    }, createdAt: {
        type: DataTypes.DATE, allowNull: false
    }, creator: {
        type: DataTypes.STRING, allowNull: false
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

module.exports = tokens;

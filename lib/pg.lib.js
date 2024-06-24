const {Sequelize} = require('sequelize');

function connect() {
    const sequalize = global["client"] = new Sequelize('anuraag', 'anuraag', 'wallet_analyser', {
        host: '49.205.173.238', dialect: 'postgres'
    });
    console.log('Connected to Postgres');
    return sequalize;
}

async function query(query) {
    try {
        const res = await global["client"].query(query);
        return res;
    } catch (error) {
        throw error;
    }
}

async function findByQuery(model, query,attributes = null) {
    try {
        return await model.findAll({
            where: query, attributes: attributes
        });
    } catch (error) {
        throw error;
    }
}

async function findOneByQuery(model, query, attributes = null) {
    try {
        return await model.findOne({
            where: query, attributes: attributes
        });
    } catch (error) {
        throw error;
    }
}

async function findOneAndUpdate(model, query, update) {
    try {
        return await model.update(update, {
            where: query
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    connect: connect, query: query, findByQuery: findByQuery, findOneByQuery: findOneByQuery, findOneAndUpdate: findOneAndUpdate
}

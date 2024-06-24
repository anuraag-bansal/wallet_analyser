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

async function findAll(model) {
    try {
        const res = await model.findAll();
        return res;
    } catch (error) {
        throw error;
    }
}

async function findByQuery(model, query) {
    try {
        const res = await model.findAll({
            where: query
        });
        return res;
    } catch (error) {
        throw error;
    }
}

async function findOneByQuery(model, query) {
    try {
        const res = await model.findOne({
            where: query
        });
        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    connect: connect, query: query,
    findAll: findAll, findByQuery: findByQuery,
    findOneByQuery: findOneByQuery
}

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

async function insert(model, data) {
    try {
        return await model.create(data);
    } catch (error) {
        throw error;
    }
}

async function insertMany(model, data) {
    try {
        return await model.bulkCreate(data);
    } catch (error) {
        throw error;
    }
}

async function deleteByQuery(model, query) {
    try {
        return await model.destroy({
            where: query
        });
    } catch (error) {
        throw error;
    }
}

async function updateByQuery(model, query, update) {
    try {
        return await model.update(update, {
            where: query
        });
    } catch (error) {
        throw error;
    }
}

async function countByQuery(model, query) {
    try {
        return await model.count({
            where: query
        });
    } catch (error) {
        throw error;
    }
}



module.exports = {
    connect: connect, query: query, findByQuery: findByQuery, findOneByQuery: findOneByQuery, findOneAndUpdate: findOneAndUpdate,
    insert: insert, insertMany: insertMany, deleteByQuery: deleteByQuery, updateByQuery: updateByQuery, countByQuery: countByQuery
}

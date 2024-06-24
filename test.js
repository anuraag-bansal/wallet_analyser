const pgLib = require('./lib/pg.lib');
const tokenModel = require('./models/token.model');

;(async () => {
    await pgLib.connect();


    const tokenToFind = await pgLib.findOneByQuery(tokenModel, { mint: 'hjgCu8hoomFMxQM15KaFWcAtWzuXAA9BVnnXb7jp2c1'})
    console.log(tokenToFind);
    // const res = await pgLib.query('SELECT * FROM Tokens LIMIT 10');
    // console.log(res);
})();

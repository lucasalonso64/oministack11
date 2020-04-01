const express = require('express');

const connection = require('./database/connection');
const crypto = require('crypto');

const OngControllers = require('./controllers/OngControllers');



const routes = express.Router();

routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs');

    return res.json(ongs);
})

 //routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

module.exports = routes;
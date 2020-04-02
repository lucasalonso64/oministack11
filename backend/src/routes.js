const express = require('express');

const OngControllers = require('./controllers/OngControllers');
const incidentsControllers = require('./controllers/incidentsControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SessionControllers');

const routes = express.Router();

routes.post('/sessions', SessionControllers.create)


routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileControllers.index);

routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete);


module.exports = routes;
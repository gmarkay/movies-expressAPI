const { Router } = require('express');
const dirRouter = Router();
const { getDirectors, getDirector} = require('../controllers/directorCtrl');


dirRouter.get('/directors', getDirectors);

dirRouter.get('/directors/:id', getDirector);

module.exports = dirRouter;
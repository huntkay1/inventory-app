const { Router } = require('express');
const { getData, createDataEntryGet, createDataEntryPost } = require('../controllers/indexController')

const indexRouter = Router();

indexRouter.get('/', getData);
indexRouter.get('/new', createDataEntryGet);
indexRouter.post('/new', createDataEntryPost);

module.exports = indexRouter;
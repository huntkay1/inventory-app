const { Router } = require('express');
const { getData } = require('../controllers/dataController')

const indexRouter = Router();

indexRouter.get('/', getData)

module.exports = indexRouter;
const asyncHandler = require('express-async-handler');
const { getAllData } = require('../db/queries')

async function getData(req, res) {
    const data = await getAllData();
    console.log(data);
}



module.exports = { getData }
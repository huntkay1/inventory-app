const asyncHandler = require('express-async-handler');

async function getData(req, res) {
    console.log('data')
}

module.exports = { getData }
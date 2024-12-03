const asyncHandler = require('express-async-handler');
const { getAllData, addDataEntry } = require('../db/queries')

async function getData(req, res) {
    const data = await getAllData();
    console.log(data);
}


function createDataEntryGet(req, res) {
    res.render('form')
}

async function createDataEntryPost(req, res) {
    const entry = req.body;
    addDataEntry(entry);
    res.redirect('/');
}


module.exports = { getData, createDataEntryGet, createDataEntryPost }
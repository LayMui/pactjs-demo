const express = require('express');
const { getAddress, getAddressByLocationId } = require('./actions');

const app = express();
app.use(express.json());

const address = getAddress();
app.get('/v1/address/locations', (req, res) => {
    res.send(getAddress())
});



module.exports = app;
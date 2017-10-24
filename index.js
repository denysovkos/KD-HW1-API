const express = require('express');
const app = express();
const data = require('./MOCK_DATA');
const Database = require('./db');
const db = new Database();

db.init();

app.get('/hotels', async (req, res) => {
    let hotel = await db.getHotel();
    console.log('API call. Will be returned: ', hotel);
    res.send(hotel);
});

app.listen(7788, function () {
  console.log('==> 🌎 KD-HW API RUNNING ON localhost:7788');
});
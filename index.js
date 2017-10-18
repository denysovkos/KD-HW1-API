const express = require('express');
const app = express();
const data = require('./MOCK_DATA');


app.get('/hotels', function (req, res) {
    let random = data[Math.floor(Math.random() * data.length)];
    res.send(random);
});

app.listen(7777, function () {
  console.log('KD-HW API RUNNING ON localhost:7777!')
});
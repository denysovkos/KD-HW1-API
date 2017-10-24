const express = require('express');
const app = express();
const data = require('./MOCK_DATA');


app.get('/hotels', function (req, res) {
    let random = data[Math.floor(Math.random() * data.length)];
    console.log('API call. Will be returned: ', random);
    res.send(random);
});

app.listen(7788, function () {
  console.log('KD-HW API RUNNING ON localhost:7788!')
});
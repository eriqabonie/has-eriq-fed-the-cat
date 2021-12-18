const express = require('express');

const app = express();

app.use(express.json());

app.post('/cats', (req, res)=> {
    const body = req.body;
    res.status(201).send(body);
});


module.exports = app;
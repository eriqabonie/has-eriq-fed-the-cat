const express = require('express');

const {Cat} = require('./models');

const app = express();

app.use(express.json());


app.post('/cats', (req, res)=> {
    const body = req.body;
    Cat.create(req.body).then(cat => res.status(201).json(cat))
    //res.status(201).send(body);
});

app.get('/cats', (req, res)=> {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat))
});

//can't seem to parse an integer

app.get('/cats/', (req, res)=> {
    
   const CatId = parseInt(req.params.id);

    Cat.findByPk(CatId).then(cat => res.status(201).json(cat))
});

module.exports = app;
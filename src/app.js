const express = require('express');
const { json } = require('express/lib/response');

const {Cat} = require('./models');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());


app.post('/cats', (req, res)=> {
    const body = req.body;
    Cat.create(req.body).then(cat => res.status(201).json(cat))
});

app.get('/cats', (req, res)=> {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat))
});


app.get('/cats/:id', (req, res)=> {
   const catId = req.params.id;
   Cat.findByPk(catId).then(cat => res.status(201).json(cat))
});


//this returns cats based on a query string // note: you can't have two gets running at once

// app.get('/cats', (req, res)=> {

//    Cat.findAll({where: req.query}).then(cat => res.status(201).json(cat))
// });


app.patch('/cats/:catId', (req, res)=> {
    Cat.update(req.body, { where: { id: req.params.catId } }).then(cat => res.status(201).json(cat))

});

app.delete('/cats/:catId', (req, res)=> {
    Cat.destroy({ where: { id: req.params.catId } }).then(cat => res.status(201).json(cat))

});


module.exports = app;
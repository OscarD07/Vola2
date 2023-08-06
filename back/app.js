'use strict'

var express = require('express');
var bodyParser = require('body-parser'); // para poder acceder a los parametros del body

var app = express(); //cargar el objeto de express
var vola2_routes = require('./routes/vola2'); // cargar el archivo de rutas


app.use(bodyParser.urlencoded({extended:false})); // para que bodyparser funcione
app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // para permitir el acceso a todos los dominios
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); // para permitir los metodos http
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los metodos http
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los metodos http
    next();
})

app.use('/', vola2_routes); // para cargar las rutas
module.exports = app; // para poder usar express fuera de este archivo
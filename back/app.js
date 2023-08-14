'use strict'

var express = require('express');
var bodyParser = require('body-parser'); // para poder acceder a los parametros del body

var app = express(); //cargar el objeto de express
var vola2_routes = require('./routes/vola2'); // cargar el archivo de rutas
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

app.use(bodyParser.urlencoded({extended:false})); // para que bodyparser funcione
app.use(bodyParser.json()); 


const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3600",
        },
      ],
    },
    apis: ["./routes/vola2.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // para permitir el acceso a todos los dominios
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); // para permitir los metodos http
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los metodos http
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); // para permitir los metodos http
    next();
})

app.use('/', vola2_routes); // para cargar las rutas
module.exports = app; // para poder usar express fuera de este archivo
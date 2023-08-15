'use strict'
//permite conectarse a la BDD
var mongoose = require('mongoose');
const app = require('./app');
var port = '3600';
mongoose.Promise = global.Promise; // para evitar errores de promesas
//
mongoose.set('strict', false); 
//
//conectar a la BDD
mongoose.connect('mongodb://172.19.52.81:27017/vola2')
    .then(()=> {
        console.log('Conexion a la BDD establecida con exito...');
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la url: localhost:3600 o 127.0.0.1:3600');
        });
    })
    .catch(err => console.log(err));


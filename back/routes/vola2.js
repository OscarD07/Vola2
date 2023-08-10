'use strict'
var express = require('express');
const Vola2Controller = require('../controllers/vola2');
var router = express.Router();
var multipart = require('connect-multiparty'); //permite subir archivos
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/vola2', Vola2Controller.home);
router.get('/vola2/get-vuelos', Vola2Controller.getVuelos);
router.post('/vola2/guardar-vuelo', Vola2Controller.saveVuelo);
router.get('/vola2/get-vuelos-buscar/:origen/:destino/:fechaSalida/:num_pasajeros', Vola2Controller.getVuelosBuscar);

module.exports = router;
'use strict'
var express = require('express');
const Vola2Controller = require('../controllers/vola2');
var router = express.Router();

var multipart = require('connect-multiparty'); //permite subir archivos
var multipartMiddleware = multipart({ uploadDir: './uploads' });



module.exports = router;
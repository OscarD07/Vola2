'use strict'

var fs = require('fs');
var path = require('path');
var Vuelo = require('../models/vuelo');


var controller = {
home: function(req, res){
    return res.status(200).send(
        "<h1>hola</h1>"
    );
},

getVuelos: async function(req, res){
    try{
        const vuelos = await Vuelo.find({}).sort();
        if (!vuelos) return res.status(404).send({message: 'No hay vuelos'});
        return res.status(200).send({vuelos});
    }catch(err){
        return res.status(500).send({message: "Error al devolver los datos"});
    }
},

getVuelosBuscar: async function(req, res){
    try{
        const vuelos = await Vuelo.find({origen: req.params.origen, destino: req.params.destino, fecha_salida: req.fecha_salida, asientos_disponibles: req.asientos_disponibles }).sort();
        if (!vuelos) return res.status(404).send({message: 'No hay vuelos'});
        return res.status(200).send({vuelos});
    }catch(err){
        return res.status(500).send({message: "Error al devolver los datos"});
    }
},

saveVuelo: async function(req, res){
    try{
        var vuelo = new Vuelo();
        var params = req.body;
        vuelo.origen = params.origen;
        vuelo.destino = params.destino;
        vuelo.fecha_salida = params.fecha_salida;
        vuelo.asientos_disponibles = params.asientos_disponibles;

        var vueloStored=await vuelo.save();
        if(!vueloStored) return res.status(404).send({message: 'No se ha podido guardar el vuelo'});
        return res.status(200).send({vuelo: vueloStored});
    }catch(err){
        return res.status(500).send({message: "Error al guardar los datos"});
    }
}


}

module.exports = controller;
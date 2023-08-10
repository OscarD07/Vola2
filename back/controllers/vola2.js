"use strict";

var fs = require("fs");
var path = require("path");
var Vuelo = require("../models/vuelo");

var controller = {
  home: function (req, res) {
    const jsonResponse = {
      mensaje: "Hola mundo",
    };
    return res.status(200).send(res.json(jsonResponse));
  },

  getVuelos: async function (req, res) {
    try {
      const vuelos = await Vuelo.find({}).sort();
      if (!vuelos) return res.status(404).send({ message: "No hay vuelos" });
      return res.status(200).send({ vuelos });
    } catch (err) {
      return res.status(500).send({ message: "Error al devolver los datos" });
    }
  },

  crearVuelo: async function (req, res) {
    try {
      // Crea un nuevo vuelo utilizando el modelo Vuelo
      const nuevoVuelo = new Vuelo({
        origen: "Quito",
        destino: "Guayaquil",
        fechaSalida: new Date("2023-08-09T08:00:00Z"), // Convierte la cadena de fecha en un objeto de fecha
      });

      // Guarda el vuelo en la base de datos
      await nuevoVuelo.save();

      res.json({ mensaje: "Vuelo creado correctamente" });
    } catch (error) {
      console.error("Error al crear el vuelo:", error);
      res.status(500).json({ error: "Error al crear el vuelo" });
    }
  },

  getVuelosBuscar: async function (req, res) {
    try {
      const fechaSalida = new Date(req.params.fechaSalida); // Convertir el parámetro de fecha en un objeto Date
      fechaSalida.setUTCHours(0, 0, 0, 0); // Establecer las horas, minutos, segundos y milisegundos a cero
      const fechaSiguiente = new Date(fechaSalida);
      fechaSiguiente.setUTCDate(fechaSalida.getUTCDate() + 1); // Incrementar el día siguiente
      const vuelos = await Vuelo.find({
        origen: req.params.origen,
        destino: req.params.destino,
        fechaSalida: { $gte: fechaSalida, $lt: fechaSiguiente },
        asientosDisponibles: { $gte: parseInt(req.params.num_pasajeros)},
        // Corregido para acceder a la fechaSalida
      }).sort({ fechaSalida: 1 }); // Ordenar por fecha de salida ascendente
      if (!vuelos || vuelos.length === 0) {
        return res.status(404).send({ message: "No hay vuelos" });
      }
      return res.status(200).send({ vuelos });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: "Error al devolver los datos" });
    }
  },

  saveVuelo: async function (req, res) {
    try {
      var vuelo = new Vuelo();
      var params = req.body;
      vuelo.origen = params.origen;
      vuelo.destino = params.destino;
      vuelo.fecha_salida = params.fecha_salida;
      vuelo.asientos_disponibles = params.asientos_disponibles;

      var vueloStored = await vuelo.save();
      if (!vueloStored)
        return res
          .status(404)
          .send({ message: "No se ha podido guardar el vuelo" });
      return res.status(200).send({ vuelo: vueloStored });
    } catch (err) {
      return res.status(500).send({ message: "Error al guardar los datos" });
    }
  },
};

module.exports = controller;

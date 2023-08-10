const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VueloSchema = Schema({
    origen: String,
    destino: String,
    fechaSalida: Date,
    asientosDisponibles: Number
});

module.exports = mongoose.model('vuelo', VueloSchema);
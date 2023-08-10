const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VueloSchema = Schema({
    origen: String,
    destino: String,
    fecha_salida: String,
    asientos_disponibles: Number
});

module.exports = mongoose.model('vuelo', VueloSchema);
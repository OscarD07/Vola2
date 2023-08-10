const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VueloSchema = Schema({
    origen: String,
    destino: String,
    fechaSalida: Date,
    num_pasajeros: Number
});

module.exports = mongoose.model('vuelo', VueloSchema);